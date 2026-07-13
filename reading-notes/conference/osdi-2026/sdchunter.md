# SDCs in the Wild: Characterizing and Diagnosing SDC-defective GPUs in Production LLM Training

## Meta Info

Presented in [OSDI 2026](https://www.usenix.org/conference/osdi26/presentation/zheng).

Authors: Wenxin Zheng, Wenxiao Wang, Yun Zhang, Mingcong Han, Bin Xu, Jinyu Gu, Xingda Wei, Haibo Chen, Zuquan Song, Gaohong Liu, Yucheng Nie, Zhe Nan, Zhuolin Zheng, Huan Yu, Shuguang Wang, Ziming Zhou, Hang Zhu, Wencong Xiao, Xin Liu (_SJTU, ByteDance Seed_)

## Understanding the paper

### TL;DR

**SDCHunter** is a production diagnosis system for SDC-defective GPUs in large-scale LLM training. The paper first characterizes 23 real defective GPUs from ByteDance production clusters and shows why generic synthetic stress tests miss many faults: GPU SDCs often emerge after deployment due to aging, depend on exact kernels/input values/precision modes, and remain invisible to ECC, thermal sensors, and common hardware counters.

The key design is exact deterministic replay of the workload that triggered the anomaly. SDCHunter first uses lightweight cross-replica signatures at pipeline-parallel communication boundaries to isolate a suspicious group, then performs fine-grained replay comparison inside that group to locate the defective GPU.

### Background

* Silent Data Corruption (SDC) silently produces wrong values without an explicit hardware or software alarm.
* In production LLM training, SDC can appear as:
  * fail-stop errors, such as shape mismatch or out-of-bound access, where the crash site is downstream from the true corrupted kernel;
  * implicit training degradation, such as loss spikes that may pollute later checkpoints.
* The same defective GPU can have very different manifestation rates. The paper reports replay occurrence rates ranging from 100% down to 1e-6%, explaining why fixed-duration stress tests are unreliable.

### Key observations

* **Lifecycle:** SDC-defective GPUs are not only caught during burn-in. In the 23-GPU study, 25% were detected during pre-deployment burn-in, 25% within the first two months, 10% within six months, and 40% around one year after deployment.
* **Microarchitecture and operator affinity:** First visible corruptions appear in kernels such as GEMM, InplaceMoE, FlashAttention, RMSNorm, Scatter, and fused kernels. For GEMM cases, FP32/FP64 CUDA cores showed higher vulnerability than some lower-precision Tensor Core paths.
* **Input sensitivity:** The same operator on the same defective GPU may fail only for particular data ranges, data types, or value patterns.
* **Low observability:** The corruptions can be subtle value biases, and standard signals such as ECC counters, machine-check exceptions, performance counters, clock frequency, and thermal limits do not distinguish defective GPUs from healthy ones.

### Challenges

* **Replay determinism:** Differential testing only works if healthy runs are bitwise identical. LLM training breaks this through nondeterministic GPU operators, communication topology changes, NCCL reduction-order differences, and scale-dependent kernel/parallelism choices.
* **Observability vs. overhead:** Loss-level metrics can mask early corruption, while kernel-level instrumentation can change timing enough to hide faults. The paper reports kernel-granularity inspection with 683.9% overhead, compared with 4.3% overhead for communication-boundary checks but much lower diagnostic resolution.
* **Scale:** Replaying a full production job on the same number of GPUs is impractical, but scaling down can change the training behavior enough to obscure whether a discrepancy is from SDC or from the changed configuration.

### Design

* **Deterministic training prerequisite**
  * Fix random seeds and deterministic framework toggles.
  * Disable autotuning and kernel-selection heuristics that change execution plans.
  * Serialize or reimplement nondeterministic operators when needed.
  * Lock communication algorithms, channel counts, and reduction order.
  * Record and replay the same communication schedule used by the original run.
  * In ByteDance production measurements, deterministic training had less than 0.01% step-time difference and reduced normalized debugging time from 1.00x to 0.30x.

* **Phase 1: lightweight grouping**
  * Partition the cluster along the data-parallel dimension into replay replicas that consume the same input batch.
  * Hash tensor values at framework-visible pipeline-parallel communication boundaries.
  * Compare compact signatures across replicas to find the divergent DP group.
  * Remove the suspicious group from the training path and resume from the latest valid checkpoint before device-level localization finishes.

* **Phase 2: precise localization**
  * Replay the problematic iteration on the suspicious group and a healthy reference group.
  * Collect layer-wise signatures for intermediate tensors.
  * Find the first divergent tensor/kernel and map it to the owning rank and physical GPU.
  * Confirm suspicious devices offline through iterative replay of the alert-triggering trace and hardware tools.

### Evaluation

* SDCHunter is deployed as ByteDance production training infrastructure and had identified 40 SDC-defective GPUs by paper submission.
* Production diagnosis time is reduced from several days to under one hour; offline device confirmation also finishes within one hour and does not block the resumed training job.
* End-to-end overhead stays below 4% for 50B and 150B model traces on 128/512 GPUs.
* In real-world trace evaluation, SDCHunter covers all confirmed SDC-defective GPUs; in fault injection, it reaches 91% coverage and detects faults within 3 steps on average.
* Device-level localization accuracy is 100% in both real-world and fault-injection evaluations.

### Takeaways

* Exact production-workload replay is more useful than generic microbenchmarks for data-dependent GPU SDCs.
* SDC diagnosis should be integrated with the training control plane: isolate suspicious machines quickly, resume training, and defer expensive device-level confirmation.
* Deterministic training is not only a reliability mechanism for SDCs; it also helps separate model, data, infrastructure, operator, and hardware causes during production debugging.
