# ASPLOS 2026

## Meta Info

Homepage: [https://www.asplos-conference.org/asplos2026/](https://www.asplos-conference.org/asplos2026/)

### Paper List

* Program: [https://www.asplos-conference.org/asplos2026/program/](https://www.asplos-conference.org/asplos2026/program/)
* Proceedings Volume 1: [https://dl.acm.org/doi/proceedings/10.1145/3760250](https://dl.acm.org/doi/proceedings/10.1145/3760250)
* Proceedings Volume 2: [https://dl.acm.org/doi/proceedings/10.1145/3779212](https://dl.acm.org/doi/proceedings/10.1145/3779212)

### Acceptance Rate

* Review model: ASPLOS 2026 used two submission cycles (`Spring` and `Summer`) and retained a `Major Revision` path for selected papers.
* Spring Cycle: 9.6% (= 20 / 208)
  * Major Revision: 9.1% (= 19 / 208)
* Summer Cycle: 15.7% (= 132 / 840)
* Total: 14.5% (= 152 / 1048)

## Papers

### Large Language Models (LLMs)

* LLM Inference
  * Prefill-Decode Multiplexing
    * Towards High-Goodput LLM Serving with Prefill-decode Multiplexing \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790236)] \[[arXiv](https://arxiv.org/abs/2504.14489)]
      * SJTU & HKU & NUS
      * Propose **MuxWise**, an LLM serving framework built on intra-GPU prefill-decode multiplexing.
      * Integrate a bubble-less multiplex engine, a contention-tolerant estimator, and an SLO-aware dispatcher.
    * Bullet: Boosting GPU Utilization for LLM Serving via Dynamic Spatial-Temporal Orchestration \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790135)] \[[arXiv](https://arxiv.org/abs/2504.19516)] \[[Code](https://github.com/zejia-lin/Bullet)]
      * SYSU
      * Enable concurrent execution of prefill and decode requests.
      * Dynamically provision GPU resources based on real-time performance modeling.
    * TPLA: Tensor Parallel Latent Attention for Efficient Disaggregated Prefill & Decode Inference \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790237)]
      * PKU & Tencent YouTu Lab
      * Introduce tensor-parallel latent attention for disaggregated prefill/decode inference.
      * Combine latent attention with tensor parallelism to improve PD-disaggregated long-context serving.
  * Scheduling
    * QoServe: Breaking the Silos of LLM Inference Serving \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790206)] \[[arXiv](https://arxiv.org/abs/2503.22562)]
      * MSR India
      * Introduce fine-grained QoS classification so applications can specify precise latency requirements, and adapt scheduling decisions to real-time system state.
      * Leverage the predictable execution characteristics of LLM inference to implement dynamic chunking for higher throughput under strict QoS guarantees.
      * Combine hybrid prioritization with selective request relegation to balance fairness, efficiency, and graceful degradation under overload.
    * Shift Parallelism: Low-Latency, High-Throughput LLM Inference for Dynamic Workloads \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790219)] \[[arXiv](https://arxiv.org/abs/2509.16495)]
      * Snowflake
      * Introduce **Shift Parallelism**, a runtime that switches across inference parallelism strategies for dynamic workloads.
      * Turn parallelism selection into a runtime control decision to jointly improve latency and throughput.
    * XY-Serve: End-to-End Versatile Production Serving for Dynamic LLM Workloads \[[Paper](https://dl.acm.org/doi/10.1145/3760250.3762228)]
      * Huawei & THU & Shanghai AI Lab
      * Present **XY-Serve**, an end-to-end serving system for dynamic production LLM workloads.
      * Coordinate scheduling, batching, and runtime resource management to sustain serving efficiency under workload variation.
    * BlendServe: Optimizing Offline Inference with Resource-Aware Batching \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790133)]
      * UC Berkeley & UW & UC Davis & Rice
      * Present a resource-aware batching framework for offline inference.
      * Form batches against actual compute and memory bottlenecks to improve throughput.
  * MoE Inference
    * MoE-APEX: An Efficient MoE Inference System with Adaptive Precision Expert Offloading \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790187)]
      * SJTU & CUHK
      * Introduce an MoE inference system with adaptive-precision expert offloading.
      * Jointly tune expert offloading and precision to reduce memory pressure during serving.
  * Compression
    * ZipServ: Fast and Memory-Efficient LLM Inference with Hardware-Aware Lossless Compression \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790250)] \[[arXiv](https://arxiv.org/abs/2603.17435)] \[[Code](https://github.com/xxyux/ZipServ)]
      * HKUST-GZ & HIT-SZ & HKUST
      * Introduce hardware-aware lossless compression for LLM inference.
      * Reduce memory footprint while preserving exact model behavior and improving serving efficiency.
  * Speculative Decoding
    * DFVG: A Heterogeneous Architecture for Speculative Decoding with Draft-on-FPGA and Verify-on-GPU \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790153)]
      * SJTU & Eastern Institute of Technology, Ningbo & Southeast University & Ningbo Institute of Digital Twin, Eastern Institute of Technology, Ningbo
      * Propose a heterogeneous speculative decoding architecture with FPGA draft generation and GPU verification.
      * Pipeline draft and verify across devices to reduce end-to-end decoding latency.
    * SwiftSpec: Disaggregated Speculative Decoding and Fused Kernels for Low-Latency LLM Inference \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790246)]
      * ByteDance Seed & UChicago
      * Introduce disaggregated speculative decoding together with fused kernels for low-latency LLM inference.
      * Combine system-level disaggregation and kernel-level optimization to make speculative decoding practical in deployment.
  * Sparsity
    * SpeContext: Enabling Efficient Long-context Reasoning with Speculative Context Sparsity in LLMs \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790224)]
      * SJTU & Infinigence-AI & SII & THU
      * Introduce speculative context sparsity for long-context reasoning in LLMs.
      * Avoid uniform full-context processing by speculating over sparse context usage during long-input inference.
  * Attention Mechanisms
    * I/O Analysis is All You Need: An I/O Analysis for Long-Sequence Attention \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790174)]
      * IIT & ICT, CAS & UCAS
      * Present an I/O-centric analysis framework for long-sequence attention.
      * Show that data movement, rather than FLOPs alone, dominates long-context attention cost.
    * PAT: Accelerating LLM Decoding via Prefix-Aware Attention with Resource Efficient Multi-Tile Kernel \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790200)]
      * TJU & Stevens Institute of Technology
      * Introduce prefix-aware attention together with a multi-tile kernel for LLM decoding.
      * Reduce decode latency by exploiting shared prefixes while keeping GPU resource usage under control.
  * Value Level Parallelism (VLP)
    * Mugi: Value Level Parallelism For Efficient LLMs \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790189)]
      * CMU & UCF
      * Introduce value-level parallelism as a new execution dimension for LLM inference.
      * Exploit finer-grained parallel structure than conventional tensor or sequence parallelism.
  * KV Cache Offloading
    * REPA: Reconfigurable PIM for the Joint Acceleration of KV Cache Offloading and Processing \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790212)]
      * SJTU
      * Present a reconfigurable PIM architecture for jointly offloading and processing KV cache.
      * Co-design KV movement and KV computation to reduce host-memory bottlenecks during inference.
    * STARC: Selective Token Access with Remapping and Clustering for Efficient LLM Decoding on PIM Systems \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790226)]
      * RPI & UMass Amherst & IBM Research
      * Introduce selective token access with remapping and clustering for PIM-based LLM decoding.
      * Reduce unnecessary KV accesses and improve data locality during decoding.
* LLM Training
  * RL Post-Training
    * History Doesn't Repeat Itself but Rollouts Rhyme: Accelerating Reinforcement Learning with RhymeRL \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790172)]
      * SJTU & ByteDance
      * Present **RhymeRL**, a framework that accelerates RL by exploiting reusable structure across rollout histories.
      * Reduce redundant rollout work to improve training efficiency for LLM-aligned RL workloads.
  * Multimodal Model Training
    * DIP: Efficient Large Multimodal Model Training with Dynamic Interleaved Pipeline \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790154)]
      * SJTU & StepFun & Zenergize AI
      * Introduce a dynamic interleaved pipeline for large multimodal model training.
      * Increase pipeline utilization by interleaving stages dynamically across modalities and training phases.
  * Mixed-Precision Training
    * SNIP: An Adaptive Mixed Precision Framework for Subbyte Large Language Model Training \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790223)] \[[arXiv](https://arxiv.org/abs/2602.01410)]
      * UMich & Meta & UMass Amherst
      * Present an adaptive mixed-precision framework for subbyte LLM training.
      * Periodically profile training statistics and solve precision allocation to assign fine-grained bitwidths.
  * Diagnosis
    * Fine-grained and Non-intrusive LLM Training Monitoring via Microsecond-level Traffic Measurement \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790163)]
      * NJU & NUS & Infrawaves
      * Introduce microsecond-level traffic measurement for fine-grained, non-intrusive LLM training monitoring.
      * Infer communication and runtime behavior without intrusive application instrumentation.
  * Offloading
    * SuperOffload: Unleashing the Power of Large-Scale LLM Training on Superchips \[[Paper](https://dl.acm.org/doi/10.1145/3760250.3762217)] \[[arXiv](https://arxiv.org/abs/2509.21271)]
      * UIUC & Microsoft & Snowflake
      * Revisit large-scale LLM training on tightly coupled GPU-CPU superchips with **SuperOffload**.
      * Combine adaptive weight offloading with superchip-aware runtime optimizations to improve long-context training throughput.
* Language Processing Units (LPUs)
  * Hardwired-Neuron Language Processing Units as General-Purpose Cognitive Substrates \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790169)]
    * ICT, CAS & USTC & IS, CAS & Cambricon Technologies
    * Propose Language Processing Units (LPUs) as a language-centric hardware substrate for general-purpose cognitive workloads.
    * Specialize the architecture around language processing primitives to improve efficiency on language-centric tasks.

### Generative Recommenders (GRs)

* GR Serving
  * BAT: Efficient Generative Recommender Serving with Bipartite Attention \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790131)]
    * ZJU & HKU & Alibaba & NUS & Aalto University
    * Introduce bipartite attention for generative recommender serving.
    * Tailor the serving design to recommendation-style generative workloads rather than generic LLM inference.

### Diffusion Models

* Video DiT Training
  * DSV: Exploiting Dynamic Sparsity to Accelerate Large-Scale Video DiT Training \[[Paper](https://dl.acm.org/doi/10.1145/3760250.3762216)] \[[arXiv](https://arxiv.org/abs/2502.07590)]
    * CUHK & StepFun
    * Exploit dynamic sparsity to accelerate large-scale video DiT training.
    * Use hybrid sparsity-aware context parallelism to rebalance workloads under heterogeneous attention sparsity.
* Diffusion Model Serving
  * TetriServe: Efficiently Serving Mixed DiT Workloads \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790233)] \[[arXiv](https://arxiv.org/abs/2602.05116)] \[[Code](https://github.com/DiT-Serving/TetriServe)]
    * UMich & UW-Madison & NTU
    * Present a serving system for mixed DiT workloads.
    * Coordinate scheduling and batching across heterogeneous diffusion requests in a shared runtime.
* Mixture-of-Diffusion Models
  * MoDM: Efficient Serving for Image Generation via Mixture-of-Diffusion Models \[[Paper](https://dl.acm.org/doi/10.1145/3760250.3762220)] \[[Code](https://github.com/stsxxx/MoDM)]
    * UMich & Intel Labs
    * Introduce mixture-of-diffusion models for image generation serving.
    * Use specialization across diffusion sub-models to improve efficiency and quality-cost tradeoffs.

### Deep Learning Training

* T-Control: An Efficient Dynamic Tensor Rematerialization System for DNN Training \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790230)]
  * ICT, CAS
  * Present a dynamic tensor rematerialization system for DNN training.
  * Adjust rematerialization online to balance memory savings and recomputation overhead.
* NotebookOS: A Replicated Notebook Platform for Interactive Training with On-Demand GPUs \[[Paper](https://dl.acm.org/doi/10.1145/3760250.3762230)]
  * GMU & Adobe Research & UVA
  * Present a replicated notebook platform for interactive model training with on-demand GPUs.
  * Combine notebook-centric workflow support with elastic GPU provisioning.

### Deep Learning Compilation

* FuseFlow: A Fusion-Centric Compilation Framework for Sparse Deep Learning on Streaming Dataflow \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790165)]
  * Stanford & SambaNova Systems & Barcelona Supercomputing Center
  * Present a fusion-centric compilation framework for sparse deep learning on streaming dataflow hardware.
  * Expand fusion opportunities for sparse operators to improve accelerator execution efficiency.
* Trinity: Three-Dimensional Tensor Program Optimization via Tile-level Equality Saturation \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790240)]
  * KAIST & FuriosaAI
  * Introduce tile-level equality saturation for three-dimensional tensor program optimization.
  * Use equivalence-based search to discover better accelerator-friendly tensor rewrites.
* RedFuser: An Automatic Operator Fusion Framework for Cascaded Reductions on AI Accelerators \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790209)]
  * Alibaba Cloud
  * Present an automatic operator fusion framework for cascaded reductions on AI accelerators.
  * Target reduction-heavy operator chains that are poorly handled by existing compiler passes.
* Linear Layouts: Robust Code Generation of Efficient Tensor Computation Using F2 \[[Paper](https://dl.acm.org/doi/10.1145/3760250.3762221)]
  * GMU & OpenAI
  * Introduce linear-layout abstractions for tensor code generation.
  * Improve portability and performance by reducing reliance on brittle layout-specific code generation.

### GPU Systems

* GPU Scheduling
  * gShare: Efficient GPU Sharing with Aggressive Scheduling in Multi-tenant FaaS Platform \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790168)]
    * China Telecom Cloud Computing Research Institute & China Telecom Cloud Technology Co. Ltd.
    * Present an aggressive GPU sharing and scheduling framework for multi-tenant FaaS platforms.
    * Improve utilization through fine-grained temporal multiplexing across serverless tenants.
  * GFS: A Preemption-aware Scheduling Framework for GPU Clusters with Predictive Spot Instance Management \[[Paper](https://dl.acm.org/doi/10.1145/3760250.3762231)]
    * SJTU & ZJU & Alibaba
    * Present a preemption-aware scheduling framework for GPU clusters with predictive spot instance management.
    * Jointly schedule jobs and volatile spot capacity to reduce disruption and improve cluster efficiency.
* GPU Communication
  * MSCCL++: Rethinking GPU Communication Abstractions for AI Inference \[[Paper](https://dl.acm.org/doi/10.1145/3779212.3790188)] \[[Code](https://github.com/microsoft/mscclpp)]
    * MSR & Microsoft Azure
    * Present a new GPU communication abstraction stack tailored to AI inference.
    * Move beyond training-centric collective abstractions to better support inference communication patterns.
* GPU Programming
  * cuJSON: A Highly Parallel JSON Parser for GPUs \[[Paper](https://dl.acm.org/doi/10.1145/3760250.3762222)]
    * UC Riverside
    * Introduce a highly parallel JSON parser for GPUs.
    * Make JSON parsing a scalable GPU primitive for preprocessing and data-serving pipelines.
  * CHERI-SIMT: Implementing Capability Memory Protection in GPGPUs \[[Paper](https://dl.acm.org/doi/10.1145/3760250.3762234)]
    * Cambridge
    * Implement capability-based memory protection in GPGPUs with CHERI-SIMT.
    * Bring stronger spatial memory safety and isolation to SIMT execution.
  * Lobster: A GPU-Accelerated Framework for Neurosymbolic Programming \[[Paper](https://dl.acm.org/doi/10.1145/3760250.3762232)]
    * UPenn
    * Present a GPU-accelerated framework for neurosymbolic programming.
    * Provide systems support for workloads that combine symbolic and neural computation.

### Profiling

* Deep Learning Profiling
  * DeepContext: A Context-aware, Cross-platform, and Cross-framework Tool for Performance Profiling and Analysis of Deep Learning Workloads \[[Paper](https://dl.acm.org/doi/10.1145/3676642.3736127)]
    * NCSU & GMU
    * Introduce a context-aware profiling and analysis tool for deep learning workloads across platforms and frameworks.
    * Use execution context to explain performance behavior beyond isolated kernel-level statistics.

## Acronyms

* DiT: Diffusion Transformer
* GR: Generative Recommender
* LLM: Large Language Model
* LPU: Language Processing Unit
* MoE: Mixture-of-Experts
* PIM: Processing-in-Memory
* RL: Reinforcement Learning
