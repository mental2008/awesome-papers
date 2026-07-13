# OSDI 2026

## Meta Info

Homepage: [https://www.usenix.org/conference/osdi26](https://www.usenix.org/conference/osdi26)

Paper list: [https://www.usenix.org/conference/osdi26/technical-sessions](https://www.usenix.org/conference/osdi26/technical-sessions)

### Acceptance Rate

20.0% (= 136 / 681)

## Papers

### Large Language Models (LLMs)

* LLM Training
  * RL Post-Training
    * RollArt: Disaggregated Multi-Task Agentic RL Training at Scale \[[Paper](https://www.usenix.org/conference/osdi26/presentation/gao)]
      * HKUST & Alibaba & Tongyi Lab
      * Propose **RollArt**, mapping agentic RL pipeline stages to best-fit hardware and coordinating prefill, decoding, environment, and reward workloads.
    * Weave: Efficient Co-Scheduling for Disaggregated RL Post-Training \[[Paper](https://www.usenix.org/conference/osdi26/presentation/wu-tianyuan)]
      * HKUST & UIUC & Alibaba
      * Present **Weave**, a cross-cluster scheduler that reclaims dependency bubbles between rollout and training phases in disaggregated RL post-training.
    * RLinf: Flexible and Efficient Large-Scale Reinforcement Learning via Macro-to-Micro Flow Transformation \[[Paper](https://www.usenix.org/conference/osdi26/presentation/yu-chao)]
      * THU & Infinigence-AI & PKU & UC Berkeley & Zhongguancun Academy & BUAA & SJTU
      * Introduce **RLinf**, transforming RL workflows from macro pipelines into micro flows to improve scheduling flexibility and hardware utilization.
    * DynaRL: Flexible and Dynamic Scheduling of Large-Scale Reinforcement Learning Training \[[Paper](https://www.usenix.org/conference/osdi26/presentation/wang-yuanqing)]
      * PKU & Infinigence-AI & ICT, CAS & BUAA & THU & SJTU
      * Present **DynaRL**, a dynamic scheduler that reallocates compute, memory, and communication resources across heterogeneous RL components.
    * Seer: Online Context Learning for Fast Synchronous LLM Reinforcement Learning \[[Paper](https://www.usenix.org/conference/osdi26/presentation/qin)]
      * THU & Moonshot AI
      * Introduce **Seer**, using prompt-level context learning to predict rollout behavior and reduce long-tail latency in synchronous LLM RL.
    * RobustRL: Role-Based Fault Tolerance System for RL Post-Training \[[Paper](https://www.usenix.org/conference/osdi26/presentation/chen-zhenqian)]
      * ZJU & SKLMEAC
      * Design role-based fault isolation for RL post-training so trainer, rollout, and management failures can recover without restarting the whole job.
  * MoE Training
    * Tessera: A Holistic Pipeline Parallelism Framework for Trillion-Parameter Heterogeneous MoE Training \[[Paper](https://www.usenix.org/conference/osdi26/presentation/hu-weifang)]
      * HUST & Alibaba Cloud
      * **Operational Systems**
      * Present **Tessera**, a pipeline-parallel training framework for heterogeneous trillion-parameter MoE models with communication-aware partitioning and runtime rebalancing.
  * Parallelism
    * Hetu v2: A General and Scalable Deep Learning System with Hierarchical and Heterogeneous Single Program Multiple Data Annotations \[[Paper](https://www.usenix.org/conference/osdi26/presentation/li-haoyang)]
      * PKU & SJTU & Purdue
      * Extend SPMD training with hierarchical and heterogeneous annotations to handle uneven devices, failures, and data-dependent workload variation.
    * Syncopate: Efficient Multi-GPU AI Kernels via Automatic Chunk-Centric Compute-Communication Overlap \[[Paper](https://www.usenix.org/conference/osdi26/presentation/qiang)]
      * UCSD & GMU & OpenAI & Meta
      * Introduce **Syncopate**, a compiler/runtime approach that overlaps communication with a fused compute kernel using chunk-centric scheduling.
  * Data Pipeline
    * Teaching the Old Dog New Tricks: Building Efficient Data Pipelines for Large-Scale LLM Pre-Training \[[Paper](https://www.usenix.org/conference/osdi26/presentation/chen-luofan)]
      * USTC & ByteDance Seed & THU & IA, HFNL
      * **Operational Systems**
      * Characterize production pre-training data paths and optimize checkpoint replication, hot-file replication, and storage-side data transformation.
  * Reliability and Fault Tolerance
    * SDCs in the Wild: Characterizing and Diagnosing SDC-Defective GPUs in Production LLM Training \[[Personal Notes](sdchunter.md)] \[[Paper](https://www.usenix.org/conference/osdi26/presentation/zheng)]
      * SJTU & ByteDance Seed
      * **Operational Systems**
      * Characterize production SDC-defective GPUs and show why synthetic microbenchmarks miss data-dependent, aging-related, and model-sensitive corruption.
      * Introduce **SDCHunter**, replaying the exact failure-triggering training workload and input data to diagnose defective GPUs.
      * Deployed at ByteDance to mitigate 40 SDC incidents with less than 4% training overhead, 100% coverage and device-level localization for real SDC-defective accelerators, and diagnosis shortened to within one hour.
    * Safeguarding LLM Training at Scale: Online SDC Detection and Insights from 35 Million GPU Hours \[[Personal Notes](aegis.md)] \[[Paper](https://www.usenix.org/conference/osdi26/presentation/lei)]
      * THU & ByteDance
      * Present **AEGIS**, an online SDC detection framework that separates lightweight corruption sensing from definitive verification during LLM training.
    * OpGuard: Bitwise Alignment for Precise and General Debugging of Production LLM Training \[[Paper](https://www.usenix.org/conference/osdi26/presentation/zhou-ziming)]
      * UMich & ByteDance Seed
      * Introduce **OpGuard**, using bitwise alignment across runs as a production debugging primitive for locating silent LLM training divergence.
    * TrainMover: An Interruption-Resilient Runtime for ML Training \[[Paper](https://www.usenix.org/conference/osdi26/presentation/lao)]
      * Harvard & Alibaba & UT Austin
      * Present **TrainMover**, using elastic and standby machines to recover large-scale training jobs from interruptions with low downtime and no memory overhead.

* LLM Inference
  * Long-Context Inference
    * Strata: Hierarchical Context Caching for Long Context Language Model Serving \[[Paper](https://www.usenix.org/conference/osdi26/presentation/xie-zhiqiang)]
      * Stanford & SJTU & CU Boulder & CMU & NVIDIA & UMich
      * Introduce **Strata**, a hierarchical context caching framework with GPU-assisted I/O and cache-aware scheduling for long-context LLM serving.
    * No Buffer, No Bottleneck: Efficient Zero-Copy KV Cache Offloading for Long-Context LLMs \[[Paper](https://www.usenix.org/conference/osdi26/presentation/luo)]
      * UVA
      * Present **DirectKV**, a zero-copy KV cache offloading design that lets GPU kernels access CPU-resident KV blocks over high-bandwidth CPU-GPU interconnects.
  * KV Cache Management
    * ECHO: Efficient KV Cache Offloading with Lossless Prefetching for Serving Native Sparse Attention LLMs \[[Paper](https://www.usenix.org/conference/osdi26/presentation/liu-guangda)]
      * SJTU & Huawei & Guizhou University
      * Propose **ECHO**, combining graph-friendly KV cache management with lossless prefetching for native sparse-attention LLM serving.
  * Request Scheduling
    * Simple Is Better: Multiplication May Be All You Need for LLM Request Scheduling \[[Paper](https://www.usenix.org/conference/osdi26/presentation/zhang-dingyan)]
      * SJTU & Alibaba
      * Use a tuning-free multiplicative score over KV-cache reuse and instance load to route requests across LLM serving instances.
    * Prism: Cost-Efficient Multi-LLM Serving via GPU Memory Ballooning \[[Paper](https://www.usenix.org/conference/osdi26/presentation/yu-shan)] \[[Code](https://github.com/ovg-project/kvcached)]
      * UCLA & UC Berkeley & Harvard & CMU & Edinburgh & Intel & Stanford & LMSYS & ByteDance & Alibaba Cloud & THU & Novita AI & Rice
      * Introduce **Prism**, a memory-centric multi-model serving framework that uses GPU memory ballooning to adapt spatial and temporal sharing across bursty model groups.
  * Disaggregated Serving
    * Efficient LLM Serving on Commodity GPU Clusters with Data-Reduced Cross-Instance Orchestration \[[Paper](https://www.usenix.org/conference/osdi26/presentation/du)]
      * SYSU
      * Present **EcoServe**, a partially disaggregated serving strategy that coordinates commodity GPU instances to reduce prefill-decode interference without relying on high-end interconnects.
    * Revisiting Pipeline Parallelism for LLM Serving \[[Paper](https://www.usenix.org/conference/osdi26/presentation/hwang)]
      * Korea University
      * Revisit pipeline parallelism for online LLM serving with dynamic chunk sizing and delay scheduling to reduce pipeline bubbles.
    * OpenTela: Unifying Decentralized Computing Resources for Heterogeneous LLM Serving \[[Paper](https://www.usenix.org/conference/osdi26/presentation/yao)]
      * ETH & Cambridge & EPFL & MIT & HKUST
      * **Operational Systems**
      * Present **OpenTela**, a user-space orchestration overlay for turning fragmented HPC clusters into a fault-tolerant heterogeneous LLM serving platform.
    * Kairox: Adaptive GPU-CPU Hybrid LLM Inference via Online Neuron Balancing \[[Paper](https://www.usenix.org/conference/osdi26/presentation/jiang-yapeng)]
      * SYSU & Peng Cheng Laboratory & EPFL & Qilu University of Technology
      * Propose **Kairox**, an adaptive GPU-CPU inference system that redistributes FFN neurons online based on activation patterns and runtime bottlenecks.
  * MoE Inference
    * Achieving Cloud-Grade SLOs for Local Mixture-of-Experts Inference through CPU–GPU Hybrid Design \[[Paper](https://www.usenix.org/conference/osdi26/presentation/wang-wenxin)]
      * THU & Xingyun
      * Design a CPU-GPU hybrid MoE inference stack with stream-loading prefill, local prefill-decode disaggregation, and CPU-optimized FP8 execution.
    * UEP: Portable Expert-Parallel Communication \[[Paper](https://www.usenix.org/conference/osdi26/presentation/mao-ziming-uep)]
      * UC Berkeley & UC Davis & UW-Madison & AMD & THU & AWS & ICSI & Broadcom & UPB
      * Present **UEP**, a portable expert-parallel communication system that replaces GPU-initiated RDMA with a GPU-CPU control channel and CPU proxy transport.
    * BatchGen: An Architecture for Scalable and Efficient Batch Inference \[[Paper](https://www.usenix.org/conference/osdi26/presentation/xu-tairan)]
      * Edinburgh & Tencent
      * Introduce a sequence-coroutine compute model for large-scale batch inference, enabling dynamic work reorganization across GPUs and memory-constrained accelerators.
    * UCCL-Tran: An Extensible Software Transport Layer for GPU Networking \[[Paper](https://www.usenix.org/conference/osdi26/presentation/zhou-yang)]
      * UC Berkeley & UC Davis & THU & Harvard & IBM Research & AWS & Broadcom & UPB
      * Propose **UCCL-Tran**, a software transport layer that moves GPU networking control paths to host CPUs for extensible multipath and collective communication policies.
  * Quantization
    * ADAngel: Accelerating Arbitrary-Precision Quantized LLMs with Adaptive Computing Mapping \[[Paper](https://www.usenix.org/conference/osdi26/presentation/liu-yao)]
      * SJTU
      * Build **ADAngel**, a workload-adaptive mixed-precision GEMM engine that selects specialized kernels for arbitrary-precision quantized LLM inference.
  * Tracing and Diagnosis
    * StriaTrace: Efficient Tracing and Diagnosis for Online LLM Inference \[[Paper](https://www.usenix.org/conference/osdi26/presentation/wu-haonan)]
      * SJTU & Alibaba
      * **Operational Systems**
      * Introduce **StriaTrace**, a low-overhead tracing and diagnosis system for online LLM inference anomalies using critical-path tracing and regression-based roofline analysis.
  * Tree-of-Thought Reasoning
    * Breaking the Reward Barrier: Accelerating Tree-of-Thought Reasoning via Speculative Exploration \[[Paper](https://www.usenix.org/conference/osdi26/presentation/zhong)]
      * PKU & ByteDance Seed
      * Propose **SPEX**, speculatively exploring Tree-of-Thought reasoning paths to break reward-synchronization bottlenecks.
  * Agentic Workflow Serving
    * Murakkab: Resource-Efficient Agentic Workflow Orchestration in Cloud Platforms \[[Paper](https://www.usenix.org/conference/osdi26/presentation/chaudhry)]
      * MIT & Microsoft Azure
      * Present **Murakkab**, an orchestration system that exposes agentic workflows for holistic accuracy, latency, energy, and cost optimization.

* LLM Operations
  * Code Optimization
    * ECO: An AI-Driven Code Efficiency Optimizer for Warehouse Scale Computers \[[Paper](https://www.usenix.org/conference/osdi26/presentation/lin-hannah)]
      * Google DeepMind & Google
      * **Operational Systems**
      * Build **ECO**, a production code-efficiency optimization workflow that localizes opportunities and controls LLM-generated change risk.
  * Performance Diagnosis
    * Diagnosing Performance Issues in Application-Defined Resources \[[Paper](https://www.usenix.org/conference/osdi26/presentation/hu-yigong)]
      * BU & UW & EPFL & UCLA
      * Present **gigiprofiler**, combining LLM-based semantic inference with static and runtime analysis to diagnose bottlenecks in application-defined resources.


### Deep Learning Compilation

* GPU Kernels and Compilers
  * Optimal Software Pipelining and Warp Specialization for Tensor Core GPUs \[[Paper](https://www.usenix.org/conference/osdi26/presentation/soi)]
    * Stanford & NVIDIA
    * Analyze how software pipelining and warp specialization interact on tensor-core GPUs and derive optimal scheduling strategies.
  * TileLoom: Automatic Dataflow Planning for Tile-Based Languages on Spatial Dataflow Accelerators \[[Paper](https://www.usenix.org/conference/osdi26/presentation/li-wei)]
    * NUS & ASU & Google & Lumai
    * Introduce **TileLoom**, an automatic dataflow planning system for tile-based languages on spatial dataflow accelerators.
  * MPK: A Compiler and Runtime for Mega-Kernelizing Tensor Programs \[[Paper](https://www.usenix.org/conference/osdi26/presentation/cheng)]
    * CMU & THU & NVIDIA & UMich & PKU
    * Present **MPK**, compiling multi-GPU inference into persistent mega-kernels with SM-level task graphs and cross-operator pipelining.
  * GraCE: Unlocking CUDA Graphs with Compiler Support for ML Workloads \[[Paper](https://www.usenix.org/conference/osdi26/presentation/ghosh)]
    * IISc & MSR
    * Propose **GraCE**, a compiler framework that expands CUDA Graph coverage for ML workloads through automatic code transformations and graph-safe execution.
  * VTC: DNN Compilation with Virtual Tensors for Data Movement Elimination \[[Paper](https://www.usenix.org/conference/osdi26/presentation/hu-muyan)]
    * UIUC & Georgia Tech & Microsoft
    * Introduce virtual tensors as a DNN compilation abstraction for eliminating unnecessary data movement across tensor operators.

### Resource Management

* Cluster Scheduling
  * Heterogeneity at Hyperscale: Characterization and Scheduling of Large Production AI Clusters at Alibaba \[[Paper](https://www.usenix.org/conference/osdi26/presentation/li-suyi)] \[[Trace](https://github.com/alibaba/clusterdata/tree/master/cluster-trace-gpu-v2026)]
    * HKUST & Alibaba & Fudan
    * **Our work!**
    * **Operational Systems**
    * Characterize a six-month production AI-cluster trace and design scheduling mechanisms for stranded capacity, locality constraints, and heterogeneous GPUs.
  * DVLA: Dynamic VM Lifetime Aware Scheduling for Drifting Lifetime Distributions and Long-Lived VM Placement Debt \[[Paper](https://www.usenix.org/conference/osdi26/presentation/zhang-zhengtong)]
    * Alibaba Cloud
    * **Operational Systems**
  * PIMS: Fleet-Wide Datacenter Maintenance with Minimal Capacity Buffer and Predictable Latency \[[Paper](https://www.usenix.org/conference/osdi26/presentation/leonhardi)]
    * Meta & Cambridge & OSU & NexGeMM
    * **Operational Systems**
  * Mimesys: Generating Realistic Executable Testing Environments from Resource Usage Traces \[[Paper](https://www.usenix.org/conference/osdi26/presentation/kim-donghyun)]
    * UT Austin

* Resource Allocation
  * Quota Marketplace: Dynamic Pricing for Efficient Allocation of ML Training Resources \[[Paper](https://www.usenix.org/conference/osdi26/presentation/sivan)]
    * Google & Drexel
    * Present a deployed market-based mechanism for dynamically pricing and allocating scarce ML training chips under heterogeneous workload value.

### Serverless Computing

* Stop Pretending to Be Busy: A Case for Serverless Paradigms in Co-Located Batch Workloads \[[Paper](https://www.usenix.org/conference/osdi26/presentation/chai)]
  * THU & Ant Group & SJTU & Quan Cheng Laboratory
  * **Operational Systems**
  * Present **Quark**, applying serverless-style fine-grained allocation, skew-aware scheduling, and rapid provisioning to co-located batch analytics.
* Continuation-Centric Computing with Arca \[[Paper](https://www.usenix.org/conference/osdi26/presentation/srivatsan)]
  * Stanford
  * Introduce **Arca**, an OS design that captures portable continuations so short-lived functions can be paused, migrated, copied, and resumed.
* Rethinking Process Snapshots for Near-Warm Serverless Cold Starts \[[Paper](https://www.usenix.org/conference/osdi26/presentation/holmes)]
  * MIT & UPenn
  * Build **Spice**, combining a snapshot file format with kernel restore primitives to reduce serverless cold-start overhead from disk snapshots.

## Acronyms

* KV: Key-Value
* LLM: Large Language Model
* MoE: Mixture-of-Experts
* RL: Reinforcement Learning
* SDC: Silent Data Corruption
* SLO: Service Level Objective
* SPMD: Single Program Multiple Data
