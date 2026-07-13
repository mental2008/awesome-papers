# Safeguarding LLM Training at Scale: Online SDC Detection and Insights from 35 Million GPU Hours

## Meta Info

Presented in [OSDI 2026](https://www.usenix.org/conference/osdi26/presentation/lei).

Authors: Kinman Lei, Liyan Zheng, Xiang Li, Hongmin Chen, Yun Zhang, Gaohong Liu, Zuquan Song, Zixuan Ma, Zhiyu Xue, Minghui Yu, Shuguang Wang, Wencong Xiao, Haibin Lin, Yuyang Jin, Jidong Zhai, Bo Liu, Xin Liu (_THU, ByteDance_)

## Understanding the paper

### TL;DR

**AEGIS** is an online SDC detection framework for production LLM training. Instead of stopping the job for offline diagnostics or fully duplicating computation, it splits detection into two stages: a lightweight inline **cSensor** that captures suspicious evidence on the training critical path, and an off-path **cVerifier** that confirms the corruption later.

The system combines two families of sensors: mixed-precision-aware algorithmic checksums for Matmul and FlashAttention, and deterministic self-equivalence checks that reuse recomputation already present in LLM training. In a 3.5e7 GPU-hour deployment, AEGIS detected 18 real SDC incidents involving 13 faulty GPUs with 0.86% production overhead.

### Background

* SDCs in large-scale LLM training are rare per device but frequent at fleet scale.
* Offline diagnostics interrupt training and cover only limited synthetic workloads.
* Rerun-based approaches can confirm corruption but are expensive at 10K-GPU scale.
* Classical algorithm-based online detection struggles with low-precision LLM training because bf16/fp8 round-off noise can dominate checksum differences.

### Observations

* **Non-deterministic reproducibility:** Running the same workload on the same faulty GPU does not always trigger SDC. In one Matmul case, 9.2e5 repeated executions produced only three distinct erroneous outcomes.
* **Workload sensitivity:** SDCs can appear only in specific numerical regimes. Scaling the input tensors of the same Matmul changed whether the fault manifested.
* **Diverse fault patterns:** Faults surface in different operators and expose different evidence. No single checker covered all observed faulty machines.

### Design

* **cSensor-cVerifier abstraction**
  * cSensor runs inline after selected computations, records compact evidence, and emits verification tasks only for suspicious computations.
  * vTask is the shared interface between heterogeneous sensors and the verifier. It stores the minimal replay/fingerprint context plus metadata such as operator names and indices.
  * cVerifier consumes vTasks off the critical path, using pipeline bubbles and a small reserved time slice at step boundaries to avoid adding synchronization stalls.
  * AEGIS reports an SDC only after cVerifier confirms it, reducing false positives from benign numerical noise.

* **Mixed-precision-aware algorithmic detection**
  * For Matmul, AEGIS compares equivalent checksum paths such as `C1 = (AB)1` and `A(B1)`.
  * Instead of accumulating checksums from final bf16 outputs, it accumulates from fp32 Tensor Core accumulators, preserving precision and separating real corruption from normal round-off error.
  * For FlashAttention, AEGIS uses the invariant `1^T dV = 1^T dO`, derived from `dV = P^T dO` and the fact that each softmax row of `P` sums to 1.

* **Self-equivalence-based deterministic detection**
  * LLM training already recomputes some values, for example through activation recomputation and FlashAttention backward recomputation.
  * Under deterministic execution, original and recomputed outputs should be bitwise identical.
  * AEGIS records xorsum fingerprints for the original and recomputed outputs, then lets cVerifier compare the fingerprints.
  * Selective instrumentation checks the final operator in a deterministic recomputation chain, reducing vTask volume while preserving coverage of the chain.

* **Sensing control and deployment knobs**
  * Adaptive thresholds track runtime checksum-difference distributions, raising thresholds after suspicious spikes and decaying them later.
  * Dynamic sampling controls algorithmic-detection overhead by sampling operators with a tunable probability.
  * Outlier warning compares checksum differences across data-parallel ranks and flags extreme deviations as heuristic warnings, separate from confirmed SDC reports.

### Implementation

* Integrated into ByteDance's in-house Megatron-LM training stack with minimal pipeline changes.
* vTask packing keeps only the data needed for later verification:
  * row checksums for forward and input-gradient Matmul;
  * row-and-column checksums for weight-gradient Matmul;
  * compact fingerprints for deterministic recomputation checks.

### Evaluation

* Production deployment covered 3.5e7 GPU-hours and detected 18 SDC incidents on 13 faulty GPUs with 0.86% overhead.
* Only three detected incidents showed observable training failures such as NaN loss; the remaining incidents were silent.
* Deterministic detection caught 12 incidents, while algorithmic detection and outlier warnings caught 6, showing that the sensors are complementary.
* On eight real faulty machines, AEGIS detected all 8, while vendor offline diagnostics detected only 2.
* Runtime overhead averages below 1.61% with row checksums and below 2.35% with row-and-column checksums; maximum slowdown is 2.1% and 2.6%, respectively.
* The system scales to 1,024 GPUs because it avoids extra global communication.
* The fp32-accumulator checksum ablation shows near-100% detection at the median reference injection scale, while bf16-output checksums require roughly 1e4x larger perturbations for comparable sensitivity.

### Discussion

* All production SDC incidents detected by AEGIS were reproducible on the corresponding GPUs, indicating permanent hardware faults rather than purely transient events.
* Rebooting can temporarily hide symptoms but does not fix the underlying fault.
* AEGIS can also catch SDC-like software bugs when they cause deterministic recomputation mismatches.
* Current coverage focuses on dominant Transformer compute kernels such as Matmul and FlashAttention; SDCs outside the protected backbone remain possible.
* AEGIS complements replay-based diagnosis systems such as SDCHunter: AEGIS detects suspicious corruption online, while replay-based tools can perform deeper fault localization and hardware confirmation.
