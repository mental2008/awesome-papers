# Large Language Model (LLM)

{% hint style="info" %}
I am actively maintaining this list.
{% endhint %}

## LLM Training

### Hybrid Parallelism

* Accelerating the Training of Large Language Models using Efficient Activation Rematerialization and Optimal Hybrid Parallelism ([ATC 2024](../../reading-notes/conference/atc-2024.md)) \[[Paper](https://www.usenix.org/conference/atc24/presentation/yuan)] \[[Code](https://github.com/kwai/Megatron-Kwai/tree/atc24ae/examples/atc24)]
  * Kuaishou
* Alpa: Automating Inter- and Intra-Operator Parallelism for Distributed Deep Learning ([OSDI 2022](../../reading-notes/conference/osdi-2022/)) \[[Paper](https://www.usenix.org/conference/osdi22/presentation/zheng-lianmin)] \[[Code](https://github.com/alpa-projects/alpa)] \[[Docs](https://alpa.ai/)]
  * UC Berkeley & AWS & Google & SJTU & CMU & Duke
  * Generalize the search through _parallelism strategies_.

### RL Post-Training

{% hint style="info" %}
**Reading map.** These works differ along six axes:

* **Disaggregated RL systems**: split rollout, inference, environment, reward, and training stages across best-fit resources.
* **Workflow scheduling and resource reallocation**: reshape RL pipelines or dynamically move compute, memory, communication, and parameters across roles.
* **Rollout latency and long-tail mitigation**: predict, batch, reuse, or otherwise reduce long-tail rollout work.
* **Speculative decoding for RL**: adapt draft-and-verify generation to RL training constraints such as drafter staleness and rollout distribution shift.
* **Heterogeneous environments**: make RL training efficient across mixed GPU generations and hardware capabilities.
* **Fault tolerance**: isolate and recover failures across trainer, rollout, and control-plane roles.
{% endhint %}

* RollArt: Disaggregated Multi-Task Agentic RL Training at Scale ([OSDI 2026](../../reading-notes/conference/osdi-2026/)) \[[Paper](https://www.usenix.org/conference/osdi26/presentation/gao)]
  * HKUST & Alibaba & Tongyi Lab
  * Axis: **Disaggregated RL systems**
  * Maps agentic RL pipeline stages to best-fit hardware and coordinates prefill, decoding, environment, and reward workloads.
* Weave: Efficient Co-Scheduling for Disaggregated RL Post-Training ([OSDI 2026](../../reading-notes/conference/osdi-2026/)) \[[Paper](https://www.usenix.org/conference/osdi26/presentation/wu-tianyuan)]
  * HKUST & UIUC & Alibaba
  * Axis: **Disaggregated RL systems**; **Workflow scheduling and resource reallocation**
  * Reclaims dependency bubbles between rollout and training phases in disaggregated RL post-training.
* RLinf: Flexible and Efficient Large-Scale Reinforcement Learning via Macro-to-Micro Flow Transformation ([OSDI 2026](../../reading-notes/conference/osdi-2026/)) \[[Paper](https://www.usenix.org/conference/osdi26/presentation/yu-chao)]
  * THU & Infinigence-AI & PKU & UC Berkeley & Zhongguancun Academy & BUAA & SJTU
  * Axis: **Workflow scheduling and resource reallocation**
  * Transforms RL workflows from macro pipelines into micro flows to improve scheduling flexibility and hardware utilization.
* DynaRL: Flexible and Dynamic Scheduling of Large-Scale Reinforcement Learning Training ([OSDI 2026](../../reading-notes/conference/osdi-2026/)) \[[Paper](https://www.usenix.org/conference/osdi26/presentation/wang-yuanqing)]
  * PKU & Infinigence-AI & ICT, CAS & BUAA & THU & SJTU
  * Axis: **Workflow scheduling and resource reallocation**
  * Dynamically reallocates compute, memory, and communication resources across heterogeneous RL components.
* Seer: Online Context Learning for Fast Synchronous LLM Reinforcement Learning ([OSDI 2026](../../reading-notes/conference/osdi-2026/)) \[[Paper](https://www.usenix.org/conference/osdi26/presentation/qin)]
  * THU & Moonshot AI
  * Axis: **Rollout latency and long-tail mitigation**
  * Uses prompt-level context learning to predict rollout behavior and reduce long-tail latency in synchronous LLM RL.
* RobustRL: Role-Based Fault Tolerance System for RL Post-Training ([OSDI 2026](../../reading-notes/conference/osdi-2026/)) \[[Paper](https://www.usenix.org/conference/osdi26/presentation/chen-zhenqian)]
  * ZJU & SKLMEAC
  * Axis: **Fault tolerance**
  * Provides role-based fault isolation for trainer, rollout, and management failures during RL post-training.
* Beat the long tail: Distribution-Aware Speculative Decoding for RL Training ([MLSys 2026](../../reading-notes/conference/mlsys-2026.md)) \[[Paper](https://openreview.net/forum?id=kMeqqPBjSl)]
  * Together AI & Stanford & UCSD
  * Axis: **Speculative decoding for RL**; **Rollout latency and long-tail mitigation**
  * Identifies rollout length long-tail as a bottleneck and applies distribution-aware speculative decoding to accelerate generation.
* HetRL: Efficient Reinforcement Learning for LLMs in Heterogeneous Environments ([MLSys 2026](../../reading-notes/conference/mlsys-2026.md)) \[[Paper](https://openreview.net/forum?id=LRLyuaz1W7)]
  * Amazon
  * Axis: **Heterogeneous environments**
  * Optimizes LLM reinforcement learning across heterogeneous GPU environments with multi-generation hardware.
* ReSpec: Towards Optimizing Speculative Decoding in Reinforcement Learning Systems ([MLSys 2026](../../reading-notes/conference/mlsys-2026.md)) \[[Paper](https://openreview.net/forum?id=HhDSxs7x2R)]
  * NTU & HPC-AI Tech
  * Axis: **Speculative decoding for RL**
  * Addresses drafter staleness and draft-verification misalignment when integrating speculative decoding into RL systems.
* RollPacker: Taming Long-Tail Rollouts for RL Post-Training with Tail Batching ([NSDI 2026](../../reading-notes/conference/nsdi-2026.md)) \[[Paper](https://www.usenix.org/conference/nsdi26/presentation/gao-wei)] \[[arXiv](https://arxiv.org/abs/2509.21009)]
  * HKUST & Alibaba
  * Axis: **Rollout latency and long-tail mitigation**
  * Packs prompts with long-tail responses into tail batches while keeping most rollout rounds balanced and short.
* Taming the Long-Tail: Efficient Reasoning RL Training with Adaptive Drafter ([ASPLOS 2026](../../reading-notes/conference/asplos-2026.md)) \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790231)] \[[arXiv](https://arxiv.org/abs/2511.16665)] \[[Code](https://github.com/mit-han-lab/fastrl)]
  * MIT & NVIDIA & ETH Zurich & MIT-IBM AI Lab & UMass Amherst
  * Axis: **Speculative decoding for RL**; **Rollout latency and long-tail mitigation**
  * Uses **TLT** to accelerate reasoning RL rollouts with adaptive speculative decoding, training a lightweight drafter on idle GPUs and selecting rollout strategies per batch.
* History Doesn't Repeat Itself but Rollouts Rhyme: Accelerating Reinforcement Learning with RhymeRL ([ASPLOS 2026](../../reading-notes/conference/asplos-2026.md)) \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790172)]
  * SJTU & ByteDance
  * Axis: **Rollout latency and long-tail mitigation**
  * Exploits reusable structure across rollout histories to reduce redundant rollout work.
* ReaL: Efficient RLHF Training of Large Language Models with Parameter Reallocation ([MLSys 2025](../../reading-notes/conference/mlsys-2025.md)) \[[Paper](https://mlsys.org/virtual/2025/poster/3228)] \[[arXiv](https://arxiv.org/abs/2406.14088)] \[[Code](https://github.com/openpsi-project/ReaLHF)]
  * THU
  * Axis: **Workflow scheduling and resource reallocation**

### Reliability and Fault Tolerance

{% hint style="info" %}
**Reading map.** These works differ along four axes:

* **Recovery mechanisms**: reduce lost work after failures through redundancy, checkpoint placement, or pre-planned reconfiguration.
* **Production reliability infrastructure**: make failures observable, diagnosable, and routinely recoverable at 10K+ GPU scale.
* **Empirical reliability studies**: characterize production failure modes and operational mitigations from large training runs.
* **Workload resilience**: absorb dynamic workload variation before it turns into large efficiency loss or training instability.
{% endhint %}

* SDCs in the Wild: Characterizing and Diagnosing SDC-Defective GPUs in Production LLM Training ([OSDI 2026](../../reading-notes/conference/osdi-2026/)) \[[Personal Notes](../../reading-notes/conference/osdi-2026/sdchunter.md)] \[[Paper](https://www.usenix.org/conference/osdi26/presentation/zheng)]
  * SJTU & ByteDance Seed
  * Axis: **Empirical reliability studies**; **Production reliability infrastructure**
  * Characterizes 23 SDC-defective GPUs from production LLM training and shows synthetic microbenchmarks miss over 60% of defective devices because SDCs can be aging-related, data-dependent, unit-specific, and invisible to ECC/thermal protections.
  * Introduces **SDCHunter**, replaying the exact training workload and input data that triggered the failure to diagnose defective GPUs.
  * Deployed at ByteDance to mitigate 40 SDC incidents, with less than 4% training overhead, 100% coverage and device-level localization for real SDC-defective accelerators, and diagnosis shortened to within one hour.
* Safeguarding LLM Training at Scale: Online SDC Detection and Insights from 35 Million GPU Hours ([OSDI 2026](../../reading-notes/conference/osdi-2026/)) \[[Personal Notes](../../reading-notes/conference/osdi-2026/aegis.md)] \[[Paper](https://www.usenix.org/conference/osdi26/presentation/lei)]
  * THU & ByteDance
  * Axis: **Empirical reliability studies**; **Production reliability infrastructure**
  * Presents **AEGIS**, an online SDC detection framework that decouples lightweight corruption sensing from definitive verification during large-scale LLM training.
  * Uses a two-stage `cSensor-cVerifier` design to keep runtime monitoring lightweight while confirming suspected silent corruptions.
  * Deployed over 35 million GPU hours in production, detecting 18 SDC incidents and 13 faulty GPUs with 0.86% overhead.
* MegaScale-Omni: A Hyper-Scale, Workload-Resilient System for MultiModal LLM Training in Production ([EuroSys 2026](../../reading-notes/conference/eurosys-2026.md)) \[[Paper](https://doi.org/10.1145/3767295.3803587)] \[[arXiv](https://arxiv.org/abs/2605.08962)]
  * SJTU & ByteDance
  * Axis: **Workload resilience**
  * MLLM training can lose efficiency even without hard failures when dynamic modality and length mixtures break static encoder-backbone parallelism; decouple encoder/LLM parallelism and rebalance data loading and resharding.
* Robust LLM Training Infrastructure at ByteDance ([SOSP 2025](../../reading-notes/conference/sosp-2025/)) \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764838)] \[[arXiv](https://arxiv.org/abs/2509.16293)]
  * HKU & ByteDance Seed
  * Axis: **Production reliability infrastructure**
  * Large-scale LLM training needs training-aware fault management, not only generic cluster monitoring; exploit parallelism structure and training characteristics for high-capacity tolerance, fault demarcation, and localization.
* Large-Scale AI Infra Reliability: Challenges, Strategies, and Llama 3 Training Experience (DSN-S 2025) \[[Paper](https://ieeexplore.ieee.org/document/11068359)]
  * Meta
  * Axis: **Empirical reliability studies**
  * 16K-GPU training reliability is dominated by hardware failure attribution and mitigation; the contribution is a failure taxonomy and operational strategies rather than a new recovery mechanism.
* Holmes: Localizing Irregularities in LLM Training with Mega-scale GPU Clusters ([NSDI 2025](../../reading-notes/conference/nsdi-2025.md)) \[[Paper](https://www.usenix.org/conference/nsdi25/presentation/yao)]
  * FDU & Tencent & UChicago
  * Axis: **Production reliability infrastructure**
  * Silent irregular iterations can cost more training time than fail-stop failures; Holmes localizes them in real time using abnormal communication-operator detection, communication-operator graphs, and cross-iteration analysis.
* Just-In-Time Checkpointing: Low Cost Error Recovery from Deep Learning Training Failures ([EuroSys 2024](../../reading-notes/conference/eurosys-2024/)) \[[Personal Notes](../../reading-notes/conference/eurosys-2024/jit-checkpointing.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3627703.3650085)] \[[Homepage](https://www.microsoft.com/en-us/research/publication/just-in-time-checkpointing-low-cost-error-recovery-from-deep-learning-training-failures/)]
  * MSR India
  * Axis: **Recovery mechanisms**
  * Creates recovery state only when a failure occurs, avoiding periodic checkpoint-frequency tuning and steady-state checkpoint overhead.
  * Recovers by replaying a single minibatch iteration across GPUs, reducing failure recovery from minutes to seconds per GPU with nearly zero steady-state overhead.
* MegaScale: Scaling Large Language Model Training to More Than 10,000 GPUs ([NSDI 2024](../../reading-notes/conference/nsdi-2024.md)) \[[Paper](https://www.usenix.org/conference/nsdi24/presentation/jiang-ziheng)] \[[Slides](https://www.usenix.org/system/files/nsdi24_slides-jiang_ziheng.pdf)] \[[Code](https://github.com/volcengine/veScale)]
  * ByteDance & PKU
  * Axis: **Production reliability infrastructure**
  * Stability at 10K+ GPU scale is a full-stack property; deep observability across system components is needed to identify root causes and turn them into fault-tolerance and straggler-mitigation techniques.
* Oobleck: Resilient Distributed Training of Large Models Using Pipeline Templates ([SOSP 2023](../../reading-notes/conference/sosp-2023/)) \[[Paper](https://dl.acm.org/doi/abs/10.1145/3600006.3613152)] \[[arXiv](https://browse.arxiv.org/abs/2309.08125)] \[[Code](https://github.com/SymbioticLab/Oobleck)]
  * UMich SymbioticLab & AWS & PKU
  * Axis: **Recovery mechanisms**
  * Pre-generate heterogeneous pipeline templates and instantiate `f + 1` logically equivalent pipeline replicas, so failures can be handled by reconfiguration using already-replicated model states.
* Gemini: Fast Failure Recovery in Distributed Training with In-Memory Checkpoints ([SOSP 2023](../../reading-notes/conference/sosp-2023/)) \[[Paper](https://dl.acm.org/doi/10.1145/3600006.3613145)]
  * Rice & AWS
  * Axis: **Recovery mechanisms**
  * Remote storage bandwidth makes checkpoint-based recovery slow; place checkpoints in aggregate host CPU memory and schedule checkpoint traffic to preserve training throughput.
* Bamboo: Making Preemptible Instances Resilient for Affordable Training of Large DNNs ([NSDI 2023](../../reading-notes/conference/nsdi-2023/)) \[[Paper](https://www.usenix.org/conference/nsdi23/presentation/thorpe)] \[[Code](https://github.com/uclasystem/bamboo)]
  * UCLA & CMU & MSR & Princeton
  * Axis: **Recovery mechanisms**
  * Pipeline bubbles can hide redundant neighboring-layer computation, giving preemptible-instance training low-pause recovery without paying the full cost of frequent checkpointing.

## LLM Inference

### Full-Pipeline Optimization

* Full-Pipeline Inference Optimization for MiMo-V2.5 Series: Pushing Hybrid SWA Efficiency to the Limit (arXiv:2607.13095) \[[arXiv](https://arxiv.org/abs/2607.13095)]
  * MiMo Team, Xiaomi
  * Presents a production inference system for the MiMo-V2.5 family that jointly supports Hybrid Sliding Window Attention (SWA), sparse MoE, and multimodal encoders.
  * Refactors KV-cache management with separate full-attention and SWA pools, layerwise prefetch, SWA-aware prefix-cache trees, and placement policies that preserve strict $$O(W)$$ SWA storage, backed by the RDMA-optimized **GCache** distributed cache.
  * Combines KV-cache-affinity routing with three-tier **Length Bucketing** (0–64K / 64K–256K / 256K–1M) to reduce load imbalance and mixed-length prefill interference, while accelerating multimodal inputs through GPU image preprocessing, parallel video decoding, and cache sharing.

### Heterogeneous Deployment

* Coral: Cost-Efficient Multi-LLM Serving over Heterogeneous Cloud GPUs (arXiv:2605.04357) \[[arXiv](https://arxiv.org/abs/2605.04357)]
  * CMU & PKU
  * Jointly optimizes multi-model resource allocation and per-replica serving strategies across heterogeneous cloud GPUs under throughput demand, latency SLOs, price, and resource availability.
  * Uses a lossless two-stage decomposition to preserve joint optimality while making online re-solving practical as demand and availability change.
* SageServe: Optimizing LLM Serving on Cloud Data Centers with Forecast Aware Auto-Scaling (SIGMETRICS Abstracts 2026) \[[Paper](https://doi.org/10.1145/3771576)] \[[arXiv](https://arxiv.org/abs/2502.14617)] \[[Code](https://github.com/shashwatj07/SageServe)]
  * UIUC & GaTech & IISc & Microsoft
  * Serves mixed latency-sensitive and latency-insensitive LLM workloads across cloud regions with forecast-aware routing, GPU VM scaling, and model placement.
  * Co-optimizes short-term request routing and longer-lead-time resource allocation with traffic forecasts and ILP scheduling.
* Cauchy: A Cost-Efficient LLM Serving System through Adaptive Heterogeneous Deployment (SoCC 2025) \[[Paper](https://dl.acm.org/doi/10.1145/3772052.3772264)]
  * BUAA & Kuaishou
  * Deploys prefill and decode computation onto suitable heterogeneous GPU combos according to workload phase demands and cost efficiency.
  * Combines combo selection, hierarchical request scheduling, and dynamic autoscaling to maintain SLOs under changing request rates.
* Demystifying Cost-Efficiency in LLM Serving over Heterogeneous GPUs (arXiv:2502.00722) \[[arXiv](https://arxiv.org/abs/2502.00722)]
  * Cambridge & HKUST & PKU & ETH & Purdue
  * Characterizes how workload mix, GPU composition, deployment configuration, and request assignment affect LLM serving cost-efficiency on heterogeneous cloud GPUs.
  * Uses mixed-integer linear programming to choose cost-efficient serving plans under price-budget and real-time GPU-availability constraints.
* HexGen-2: Disaggregated Generative Inference of LLMs in Heterogeneous Environment (ICLR 2025) \[[Paper](https://openreview.net/forum?id=Cs6MrbFuMq)] \[[arXiv](https://arxiv.org/abs/2502.07903)]
  * HKUST
  * Extends heterogeneous LLM serving to prefill-decode disaggregation, jointly placing phase computation and KV-cache communication across heterogeneous GPUs and links.
  * Combines graph partitioning and max-flow optimization to co-optimize resource allocation, per-phase parallel strategies, and inter-phase KV transfer.
* HexGen: Generative Inference of Foundation Model over Heterogeneous Decentralized Environment ([ICML 2024](../../reading-notes/conference/icml-2024.md)) \[[Personal Notes](../../reading-notes/miscellaneous/arxiv/2023/hexgen.md)] \[[arXiv](https://arxiv.org/abs/2311.11514)] \[[Code](https://github.com/Relaxed-System-Lab/HexGen)]
  * HKUST & ETH & CMU
  * Supports _asymmetric_ tensor model parallelism and pipeline parallelism, allowing each pipeline stage to use a different layer count and tensor-parallel degree.
  * Formulates heterogeneous decentralized inference placement as a constrained optimization problem and searches layouts with a heuristic evolutionary algorithm.
* SpotServe: Serving Generative Large Language Models on Preemptible Instances ([ASPLOS 2024](../../reading-notes/conference/asplos-2024/)) \[[Personal Notes](../../reading-notes/conference/asplos-2024/spotserve.md)] \[[arXiv](https://arxiv.org/abs/2311.15566)] \[[Code](https://github.com/Hsword/SpotServe)]
  * CMU & PKU & CUHK
  * Dynamically adapts LLM parallelization configurations under changing preemptible-instance availability and workload fluctuation.
  * Uses migration planning and stateful inference recovery to reduce tail latency and monetary cost on volatile GPU capacity.

### Parallelism and Partitioning

* AlpaServe: Statistical Multiplexing with Model Parallelism for Deep Learning Serving ([OSDI 2023](../../reading-notes/conference/osdi-2023.md)) \[[Paper](https://arxiv.org/abs/2302.11665)] \[[Code](https://github.com/alpa-projects/mms)]
  * UC Berkeley & PKU & UPenn & Stanford & Google
  * Trade-off between _the overhead of model parallelism_ and _reduced serving latency by statistical multiplexing_.
* Efficiently Scaling Transformer Inference ([MLSys 2023](../../reading-notes/conference/mlsys-2023.md)) \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2023/hash/523f87e9d08e6071a3bbd150e6da40fb-Abstract-mlsys2023.html)]
  * Google
  * **Outstanding Paper Award**
  * Model partitioning; PaLM; TPUv4
* DeepSpeed-Inference: Enabling Efficient Inference of Transformer Models at Unprecedented Scale ([SC 2022](../../reading-notes/conference/sc-2022.md)) \[[Paper](https://dl.acm.org/doi/abs/10.5555/3571885.3571946)] \[[Code](https://github.com/microsoft/DeepSpeed)] \[[Homepage](https://www.deepspeed.ai/inference/)]
  * Microsoft DeepSpeed
  * Leverage CPU/NVMe/GPU memory.

### LLM-based Applications

* Teola: Towards End-to-End Optimization of LLM-based Applications ([ASPLOS 2025](../../reading-notes/conference/asplos-2025.md)) \[[arXiv](https://arxiv.org/abs/2407.00326)]
  * CUHK
  * An orchestration framework for LLM-based applications: utilize task primitives as the basic units; represent each query’s workflow as a primitive-level dataflow graph.
  * Enable larger design space for optimization including graph optimization (i.e., parallelization and pipelining) and application-aware scheduling.
* Parrot: Efficient Serving of LLM-based Applications with Semantic Variable ([OSDI 2024](../../reading-notes/conference/osdi-2024.md)) \[[Paper](https://www.usenix.org/conference/osdi24/presentation/lin-chaofan)] \[[Code](https://github.com/microsoft/ParrotServe)]
  * SJTU & MSRA
* SGLang: Efficient Execution of Structured Language Model Programs ([NeurIPS 2024](../../reading-notes/conference/neurips-2024.md)) \[[Personal Notes](../../reading-notes/miscellaneous/arxiv/2024/sglang.md)] \[[Paper](https://openreview.net/forum?id=VqkAKQibpq)] \[[arXiv](https://arxiv.org/abs/2312.07104)] \[[Code](https://github.com/sgl-project/sglang)]
  * UC Berkeley & Stanford
  * Co-design the front-end programming interface and back-end serving runtime
  * **SGLang**; SGVM w/ **RadixAttention**
  * Reuse KV cache across multiple calls and programs

### Agentic Inference

* ThunderAgent: A Fast, Simple, and Program-Aware Agentic Inference System ([ICML 2026](../../reading-notes/conference/icml-2026.md)) \[[Paper](https://openreview.net/forum?id=kR4iOTaAOJ)] \[[arXiv](https://arxiv.org/abs/2602.13692)] \[[Code](https://github.com/ThunderAgent-org/ThunderAgent)] \[[Blog](https://thunderagent.ai)]
  * GaTech & UIUC & CMU & Together AI
  * **Spotlight**
  * Introduce **ThunderAgent**, an agentic inference and rollout system that represents workflows as LLM Programs with unified KV-cache, state, and tool-resource metadata.
  * Use program-aware scheduling and tool resource management to improve KV-cache reuse, reduce memory imbalance, and prepare tool environments asynchronously.

### Workload Characterization

* TraceLab: Characterizing Coding Agent Workloads for LLM Serving (arXiv:2606.30560) \[[arXiv](https://arxiv.org/abs/2606.30560)] \[[Code](https://github.com/uw-syfi/TraceLab)] \[[Homepage](https://tracelab.cs.washington.edu)] \[[Blog](https://syfi.cs.washington.edu/blog/2026-06-25-tracelab/)]
  * UW & Wuhan University of Technology & SJTU
  * Release a coding-agent trace with 4,265 sessions, 357,161 agent steps, and 432,510 tool calls from Claude Code and Codex usage.
  * Characterize long autonomous loops, long contexts with short outputs, heavy-tailed tool calls, and high but imperfect prefix-cache hit rates.
  * Identify serving opportunities around lower-overhead tool calling, append-length-aware prefill, semantic-aware tool-latency prediction, and KV-cache management around human-paced gaps.
* Measuring Agents in Production ([ICML 2026](../../reading-notes/conference/icml-2026.md)) \[[Paper](https://openreview.net/forum?id=mWxEAgz3xu)] \[[arXiv](https://arxiv.org/abs/2512.04123)]
  * UC Berkeley & Intesa Sanpaolo & UIUC & Stanford & IBM Research
  * **Oral**
  * Present **MAP**, a systematic study of production LLM agents using 20 interviews and a survey of 86 deployed-systems practitioners across 26 domains.
  * Find that production agents often use simple, controllable approaches: bounded step counts before human intervention, off-the-shelf prompting, and human evaluation.

### Retrieval-Augmented Generation (RAG)

* CacheFocus: Dynamic Cache Re-Positioning for Efficient Retrieval-Augmented Generation (arXiv:2502.11101) \[[arXiv](https://arxiv.org/abs/2502.11101)]
  * Jeonbuk National University & Seoul National University
  * Leverage query-independent, offline caching to reuse a context KV cache store.
  * _Cache Re-Positioning_: shift keys to different positions in the encoding space.
  * _Layer-Adaptive Cache Pruning_: discard low-relevance caches for documents during pre-filling.
  * _Adaptive Positional Allocation_: adjust cache positions to maximize the use of the available positional encoding range.
* Cache-Craft: Managing Chunk-Caches for Efficient Retrieval-Augmented Generation (SIGMOD 2025) \[[arXiv](https://arxiv.org/abs/2502.15734)]
  * Adobe Research & IIT Bombay & IIT Kanpur
  * Identify the reusability of chunk-caches; perform a small fraction of recomputation to fix the cache to maintain output quality; store and evict chunk-caches.
  * A wrapper around vLLM; built on Xformers backend optimized with Triton.
* RAGCache: Efficient Knowledge Caching for Retrieval-Augmented Generation (arXiv:2404.12457) \[[arXiv](https://arxiv.org/abs/2404.12457)]
  * PKU & ByteDance
  * Organize the intermediate states of retrieved knowledge in a knowledge tree; cache them in the GPU and host memory.
  * Replacement policy: evaluate each node based on its access frequency, size, and access cost.
    * Priority= Clock + (Frequency × Cost Size) / Size
    * Nodes with lower priority are evicted first.
  * Built on vLLM.

### Request Scheduling

* Llumnix: Dynamic Scheduling for Large Language Model Serving ([OSDI 2024](../../reading-notes/conference/osdi-2024.md)) \[[Paper](https://www.usenix.org/conference/osdi24/presentation/sun-biao)] \[[Code](https://github.com/AlibabaPAI/llumnix)]
  * Alibaba
* FastServe: Iteration-Level Preemptive Scheduling for Large Language Model Inference ([NSDI 2026](../../reading-notes/conference/nsdi-2026.md)) \[[Paper](https://www.usenix.org/conference/nsdi26/presentation/wu-bingyang)] \[[arXiv](https://arxiv.org/abs/2305.05920)] \[[Code](https://github.com/LLMServe/FastServe)]
  * PKU
  * Enables iteration-level preemptive scheduling for autoregressive decoding instead of request-level FIFO execution.
  * Combines a skip-join multi-level feedback queue scheduler with proactive intermediate-state swapping to reduce head-of-line blocking.
* Orca: A Distributed Serving System for Transformer-Based Generative Models ([OSDI 2022](../../reading-notes/conference/osdi-2022/)) \[[Personal Notes](../../reading-notes/conference/osdi-2022/orca.md)] \[[Paper](https://www.usenix.org/conference/osdi22/presentation/yu)]
  * Seoul National University & FriendliAI
  * Iteration-level scheduling; selective batching.

### KV Cache Management

* DroidSpeak: KV Cache Sharing Across Fine-tuned Model Variants ([NSDI 2026](../../reading-notes/conference/nsdi-2026.md)) \[[Paper](https://www.usenix.org/conference/nsdi26/presentation/liu-yuhan)] \[[arXiv](https://arxiv.org/abs/2411.02820)]
  * UChicago & Microsoft
  * Reuses prefix KV caches across fine-tuned LLM variants with the same architecture, including across distributed nodes.
  * Selectively recomputes a small subset of layers from another model's KV cache and reuses the remaining layers with negligible quality loss.
* Jenga: Effective Memory Management for Serving LLM with Heterogeneity ([SOSP 2025](../../reading-notes/conference/sosp-2025/)) \[[Personal Notes](../../reading-notes/conference/sosp-2025/jenga.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764823)] \[[arXiv](https://arxiv.org/abs/2503.18292)]
  * THU & UChicago & UC Berkeley
  * Heterogeneous embedding sizes, attention mechanisms, and token-dependency patterns in modern LLMs break fixed-page KV-cache assumptions and create fragmentation.
  * Uses a two-level memory allocator with LCM-sized compatible pages and layer-specific caching/eviction policies for heterogeneous attention patterns.
* CacheBlend: Fast Large Language Model Serving for RAG with Cached Knowledge Fusion ([EuroSys 2025](../../reading-notes/conference/eurosys-2025.md)) \[[Paper](https://doi.org/10.1145/3689031.3696098)] \[[arXiv](https://arxiv.org/abs/2405.16444)] \[[Code](https://github.com/YaoJiayi/CacheBlend)]
  * CUHK-Shenzhen & UChicago & Stanford
  * **Best Paper Award (Spring)**
  * Combines multiple precomputed KV caches for RAG inputs while selectively recomputing a small fraction of tokens to recover cross-attention.
* CacheGen: KV Cache Compression and Streaming for Fast Large Language Model Serving ([SIGCOMM 2024](../../reading-notes/conference/sigcomm-2024.md)) \[[arXiv](https://arxiv.org/abs/2310.07240)] \[[Code](https://github.com/UChi-JCL/CacheGen)] \[[Video](https://www.youtube.com/watch?v=H4_OUWvdiNo)]
  * UChicago & Microsoft & Stanford
* Prompt Cache: Modular Attention Reuse for Low-Latency Inference ([MLSys 2024](../../reading-notes/conference/mlsys-2024.md)) \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/hash/a66caa1703fe34705a4368c3014c1966-Abstract-Conference.html)] \[[arXiv](https://arxiv.org/abs/2311.04934)]
  * Yale & Google
  * Precomputes and stores attention states for reusable prompt modules such as system messages, templates, and context documents.
  * Uses a schema to preserve positional correctness during attention-state reuse and reduce time-to-first-token without model changes.
* ALISA: Accelerating Large Language Model Inference via Sparsity-Aware KV Caching ([ISCA 2024](../../reading-notes/conference/isca-2024.md))
* Efficient Memory Management for Large Language Model Serving with PagedAttention ([SOSP 2023](../../reading-notes/conference/sosp-2023/)) \[[Paper](https://dl.acm.org/doi/10.1145/3600006.3613165)] \[[arXiv](https://browse.arxiv.org/abs/2309.06180)] \[[Code](https://github.com/vllm-project/vllm)] \[[Homepage](https://vllm.ai/)]
  * UC Berkeley & Stanford & UCSD
  * vLLM, PagedAttention
  * Partition the KV cache of each sequence into blocks, each block containing the keys and values for a fixed number of tokens

### Prefill-Decode (PD) Disaggregation

* Prefill-as-a-Service: KVCache of Next-Generation Models Could Go Cross-Datacenter (arXiv:2604.15039) \[[arXiv](https://arxiv.org/abs/2604.15039)]
  * Moonshot AI & THU
  * Introduce **PrfaaS**, a cross-datacenter serving architecture that selectively offloads long-context prefills to standalone compute-dense clusters and transfers the resulting KVCache over commodity Ethernet to local PD clusters for decode.
  * Combine model-side KV efficiency with system-side selective offloading, bandwidth-aware scheduling, and cache-aware request placement instead of fully externalizing all prefill requests.
  * Remove the requirement that heterogeneous accelerators share a single low-latency RDMA fabric; on an internal 1T-parameter hybrid model, improve serving throughput by 54% over homogeneous PD and 32% over a naive heterogeneous baseline.
* Mooncake: A KVCache-centric Disaggregated Architecture for LLM Serving (FAST 2025) \[[Paper](https://www.usenix.org/conference/fast25/presentation/qin)] \[[arXiv](https://arxiv.org/abs/2407.00079)] \[[Slides](https://www.usenix.org/system/files/fast25_slides-qin.pdf)] \[[Code](https://github.com/kvcache-ai/Mooncake)]
  * Mootshot AI & Tsinghua
  * **Best Paper Award**
  * Separate the prefill and decoding clusters; prediction-based early rejection.
  * Distributed multi-layer KVCache pool; prefix-hashed KVCache object storage.
* Inference without Interference: Disaggregate LLM Inference for Mixed Downstream Workloads (arXiv:2401.11181) \[[arXiv](https://arxiv.org/abs/2401.11181)]
  * ICT, CAS & Huawei Cloud
* DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving ([OSDI 2024](../../reading-notes/conference/osdi-2024.md)) \[[Paper](https://www.usenix.org/conference/osdi24/presentation/zhong-yinmin)] \[[Code](https://github.com/LLMServe/DistServe)]
  * PKU & UCSD
* Splitwise: Efficient Generative LLM Inference Using Phase Splitting ([ISCA 2024](../../reading-notes/conference/isca-2024.md)) \[[Paper](https://ieeexplore.ieee.org/document/10609649/)] \[[arXiv](https://arxiv.org/abs/2311.18677)] \[[Blog](https://www.microsoft.com/en-us/research/blog/splitwise-improves-gpu-usage-by-splitting-llm-inference-phases/)]
  * UW & Microsoft
  * **Best Paper Award**
  * Split the two phases (i.e., prefill and decode) of a LLM inference request to separate machines

### Chunked Prefill

* LMPrefill: An Inference Engine for Prefill-only Workloads in Large Language Model Applications ([SOSP 2025](../../reading-notes/conference/sosp-2025/)) \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764834)] \[[arXiv](https://arxiv.org/abs/2505.07203)]
  * UChicago & THU & LinkedIn & UC Berkeley
  * Targets LLM applications that generate only one output token and avoids storing KV caches for all layers.
  * Combines hybrid prefilling, suffix KV cache discarding/offloading, and JCT-aware scheduling for prefill-only requests.
* Taming Throughput-Latency Tradeoff in LLM Inference with Sarathi-Serve ([OSDI 2024](../../reading-notes/conference/osdi-2024.md)) \[[Paper](https://www.usenix.org/conference/osdi24/presentation/agrawal)] \[[Code](https://github.com/microsoft/sarathi-serve)] \[[arXiv](https://arxiv.org/abs/2403.02310)]
  * MSR India & GaTech
  * **Sarathi-Serve**

### Serverless Inference

* HydraServe: Minimizing Cold Start Latency for Serverless LLM Serving in Public Clouds ([NSDI 2026](../../reading-notes/conference/nsdi-2026.md)) \[[Paper](https://www.usenix.org/conference/nsdi26/presentation/lou)] \[[arXiv](https://arxiv.org/abs/2502.15524)] \[[Code](https://github.com/LLMServe/hydraserve)]
  * PKU & Alibaba Cloud
  * Minimizes serverless LLM cold-start latency in public clouds through proactive model distribution, overlapped worker startup, and GPU-network-contention-aware worker placement.
  * Consolidates pipelines to reduce cold-start resource usage while improving SLO attainment.
* FaaScale: Unlocking Fast LLM Scaling for Serverless Inference ([MLSys 2026](../../reading-notes/conference/mlsys-2026.md)) \[[Paper](https://openreview.net/forum?id=jgL8LuOVyT)] \[[arXiv](https://arxiv.org/abs/2502.09922)]
  * CUHK-SZ & UVA & HKUST & Alibaba & Nokia Bell Labs
  * Formerly **λScale**; enables fast model scaling for serverless LLM inference with pipelined multicast inference.
  * Uses **PipeCast** to adaptively multicast model blocks and dynamically form cross-node inference pipelines during model transfer.
* ServerlessLLM: Low-Latency Serverless Inference for Large Language Models ([OSDI 2024](../../reading-notes/conference/osdi-2024.md)) \[[Paper](https://www.usenix.org/conference/osdi24/presentation/fu)] \[[Code](https://github.com/ServerlessLLM/ServerlessLLM)] \[[arXiv](https://arxiv.org/abs/2401.14351)]
  * Edinburgh

### LoRA Serving

* dLoRA: Dynamically Orchestrating Requests and Adapters for LoRA LLM Serving ([OSDI 2024](../../reading-notes/conference/osdi-2024.md)) \[[Paper](https://www.usenix.org/conference/osdi24/presentation/wu-bingyang)]
  * PKU & Shanghai AI Lab
* CaraServe: CPU-Assisted and Rank-Aware LoRA Serving for Generative LLM Inference (arXiv:2401.11240) \[[arXiv](https://arxiv.org/abs/2401.11240)]
  * HKUST & CUHK-Shenzhen & Shanghai AI Lab & Huawei Cloud
* S-LoRA: Serving Thousands of Concurrent LoRA Adapters ([MLSys 2024](../../reading-notes/conference/mlsys-2024.md)) \[[arXiv](https://arxiv.org/abs/2311.03285)] \[[Code](https://github.com/S-LoRA/S-LoRA)]
  * UC Berkeley
* Punica: Multi-Tenant LoRA Serving ([MLSys 2024](../../reading-notes/conference/mlsys-2024.md)) \[[arXiv](https://arxiv.org/abs/2310.18547)] \[[Code](https://github.com/punica-ai/punica)]
  * UW & Duke

### Position-Independent Caching (PIC)

* EPIC: Efficient Position-Independent Context Caching for Serving Large Language Models (ICML 2025) \[[arXiv](https://arxiv.org/abs/2410.15332)]
  * PKU & NJU & Huawei Cloud
  * Key insight: the initial tokens of each chunk separately absorb a disproportionate amount of attention, preventing subsequent tokens from attending to relevant parts.
  * Propose an algorithm named _LegoLink_ to recompute k (≤ 32) initial tokens on each chunk (except the first chunk) → Recognize their non-initial status and cripple their attention-absorbing ability.
  * Compared to CacheBlend, LegoLink reduces recomputation complexity and relies on static attention sparsity.

### Compression

* Tender: Accelerating Large Language Models via Tensor Decomposition and Runtime Requantization ([ISCA 2024](../../reading-notes/conference/isca-2024.md))

### Sparsity

* InfiniGen: Efficient Generative Inference of Large Language Models with Dynamic KV Cache Management ([OSDI 2024](../../reading-notes/conference/osdi-2024.md)) \[[Paper](https://www.usenix.org/conference/osdi24/presentation/lee)]
  * Seoul National University
* PowerInfer: Fast Large Language Model Serving with a Consumer-grade GPU ([SOSP 2024](../../reading-notes/conference/sosp-2024.md)) \[[Paper](https://dl.acm.org/doi/10.1145/3694715.3695964)] \[[arXiv](https://arxiv.org/abs/2312.12456)] \[[Code](https://github.com/SJTU-IPADS/PowerInfer)]
  * SJTU
  * A GPU-CPU hybrid inference engine
  * Hot-activated neurons are preloaded onto the GPU for fast access; cold-activated neurons are computed on the CPU
* Deja Vu: Contextual Sparsity for Efficient LLMs at Inference Time ([ICML 2023](../../reading-notes/conference/icml-2023.md)) \[[Paper](https://proceedings.mlr.press/v202/liu23am.html)] \[[Code](https://github.com/FMInference/DejaVu)]
  * Rice & ZJU & Stanford & UCSD & ETH & Adobe & Meta AI & CMU
  * A system to predict _contextual sparsity_ (small, input-dependent sets that yield _approximately_ the same output).

### Speculative Decoding

* Online Speculative Decoding ([ICML 2024](../../reading-notes/conference/icml-2024.md)) \[[arXiv](https://arxiv.org/abs/2310.07177)]
  * UC Berkeley & UCSD & Sisu Data & SJTU
* SpecInfer: Accelerating Generative LLM Serving with Speculative Inference and Token Tree Verification ([ASPLOS 2024](../../reading-notes/conference/asplos-2024/)) \[[arXiv](https://arxiv.org/abs/2305.09781)] \[[Code](https://github.com/flexflow/FlexFlow/tree/inference)]
  * CMU
* Speculative Decoding with Big Little Decoder (NeurIPS 2023) \[[Paper](https://arxiv.org/abs/2302.07863)]
  * UC Berkeley & ICSI & LBNL
* Fast Inference from Transformers via Speculative Decoding ([ICML 2023](../../reading-notes/conference/icml-2023.md)) \[[Paper](https://openreview.net/pdf?id=C9NEblP8vS)]
  * Google Research

### Offloading

* LLM in a flash: Efficient Large Language Model Inference with Limited Memory (arXiv 2312.11514) \[[arXiv](https://arxiv.org/abs/2312.11514)]
  * Apple
* FlexGen: High-Throughput Generative Inference of Large Language Models with a Single GPU ([ICML 2023](../../reading-notes/conference/icml-2023.md)) \[[Personal Notes](../../reading-notes/miscellaneous/arxiv/2023/flexgen.md)] \[[Paper](https://proceedings.mlr.press/v202/sheng23a.html)] \[[Code](https://github.com/FMInference/FlexGen)]
  * Stanford & UC Berkeley & ETH & Yandex & HSE & Meta & CMU
  * _High-throughput serving; only use a single GPU._

### Fairness

* Locality-aware Fair Scheduling in LLM Serving (arXiv:2501.14312) \[[arXiv](https://arxiv.org/abs/2501.14312)]
  * UC Berkeley
* Fairness in Serving Large Language Models ([OSDI 2024](../../reading-notes/conference/osdi-2024.md)) \[[Paper](https://www.usenix.org/conference/osdi24/presentation/sheng)] \[[Code](https://github.com/Ying1123/VTC-artifact)]
  * UC Berkeley

## LLM Alignment

* PUZZLE: Efficiently Aligning Large Language Models through Light-Weight Context Switch ([ATC 2024](../../reading-notes/conference/atc-2024.md)) \[[Paper](https://www.usenix.org/conference/atc24/presentation/lei)]
  * THU

## Acronyms

* LLM: Large Language Model
* LoRA: Low-Rank Adaptation
* MoE: Mixture-of-Experts
* RL: Reinforcement Learning
* RLHF: Reinforcement Learning from Human Feedback
* SDC: Silent Data Corruption
