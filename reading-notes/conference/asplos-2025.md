# ASPLOS 2025

## Meta Info

Homepage: [https://www.asplos-conference.org/asplos2025/](https://www.asplos-conference.org/asplos2025/)

### Proceedings

* Volume 1: [https://dl.acm.org/doi/proceedings/10.1145/3669940](https://dl.acm.org/doi/proceedings/10.1145/3669940)
* Volume 2: [https://dl.acm.org/doi/proceedings/10.1145/3676641](https://dl.acm.org/doi/proceedings/10.1145/3676641)

### Acceptance Rate

* Overall: 17.5% (= 160 / 912)
* Fall: 14.1% (= 46 / 326)
  * Major Revision: 20 (invited) -> pending
* Summer: 12.7% (= 65 / 510)
  * Major Revision: 42 (invited) -> 40 (accepted)
* Spring: 2.6% (= 2 / 76)
  * Major Revision: 7 (invited) -> 7 (accepted)

## Papers

### Large Language Models (LLMs)

* LLM Training
  * FlexSP: Accelerating Large Language Model Training via Flexible Sequence Parallelism
    * PKU & ByteDance
  * Spindle: Efficient Distributed Training of Multi-Task Large Models via Wavefront Scheduling
    * PKU & Alibaba
  * Vela: A Virtualized LLM Training System with GPU Direct RoCE
    * IBM Research
  * Concerto: Automatic Communication Optimization and Scheduling for Large-Scale Deep Learning
    * NUS & GaTech & Alibaba & GMU & SYSU
* LLM Inference
  * Helix: Serving Large Language Models over Heterogeneous GPUs and Network via Max-Flow \[[arXiv](https://arxiv.org/abs/2406.01566)] \[[Code](https://github.com/Thesys-lab/Helix-ASPLOS25)]
    * CMU
  * Accelerating LLM Serving for Multi-turn Dialogues with Efficient Resource Management
    * Korea University
  * COMET: Towards Practical W4A4KV4 LLMs Serving
    * ICT, CAS
  * Past-Future Scheduler for LLM Serving under SLA Guarantees
    * Beihang University & SenseTime
  * POD-Attention: Unlocking Full Prefill-Decode Overlap for Faster LLM Inference
    * UW & MSR India
  * Medusa: Accelerating Serverless LLM Inference with Materialization
    * THU
  * vAttention: Dynamic Memory Management for Serving LLMs without PagedAttention \[[arXiv](https://arxiv.org/abs/2405.04437)]
    * MSR India & IIS
  * TAPAS: Thermal- and Power-Aware Scheduling for LLM Inference in Cloud Platforms
    * UIUC & Microsoft Azure Research
  * PAPI: Exploiting Dynamic Parallelism in Large Language Model Decoding with a Processing-In-Memory-Enabled Computing System
    * ICT, CAS & ETH & UofT & NVIDIA
  * PIM is All You Need: A CXL-Enabled GPU-Free System for LLM Inference
    * UMich & ETH & Google
  * Fast On-device LLM Inference with NPUs
    * PKU & BUPT
* LLM-based Applications
  * Towards End-to-End Optimization of LLM-based Applications with Ayo
    * CUHK
* MoE Training
  * FSMoE: A Flexible and Scalable Training System for Sparse Mixture-of-Experts Models
    * HKUST-GZ & HKUST & HIT-SZ
  * MoC-System: Efficient Fault Tolerance for Sparse Mixture-of-Experts Model Training
    * HKUST-GZ
* MoE Inference
  * MoE-Lightning: High-Throughput MoE Inference on Memory-constrained GPUs
    * UC Berkeley
  * Klotski: Efficient Mixture-of-Expert Inference via Expert-Aware Multi-Batch Pipeline
    * SYSU & HKUST & Huawei & Peng Cheng Laboratory
* Retrieval-Augmented Generation (RAG)
  * Accelerating Retrieval-Augmented Generation
    * Cornell & Kansas & UMass Amherst & Samsung Electronics
* Security
  * PipeLLM: Fast and Confidential Large Language Model Services with Speculative Pipelined Encryption’
    * SJTU IPADS
* Coarse-Grained Reconfigurable Array (CGRA)
  * PICACHU: Plug-In CGRA Handling Upcoming Nonlinear Operations in LLMs
    * NYU

### Deep Learning Recommendation Models (DLRMs)

* DLRM Training
  * Frugal: Efficient and Economic Embedding Model Training with Commodity GPUs
    * THU
* DLRM Inference
  * Load and MLP-Aware Thread Orchestration for Recommendation Systems Inference on CPUs
    * Penn State & AMD

### Resource Management

* Shared ML Clusters
  * Design and Operation of Shared Machine Learning Clusters on Campus
    * HKUST
* Resource Oversubscription
  * Coach: Exploiting Temporal Patterns for All-Resource Oversubscription in Cloud Platforms
    * Microsoft
* Serverless Computing
  * Litmus: Fair Pricing for Serverless Computing
    * Binghamton & Intel Lab
  * Concurrency-Informed Orchestration for Serverless Functions
    * UVA & Alibaba & Amazon
  * Dilu: Enabling GPU Resourcing-on-Demand for Serverless DL Serving via Introspective Elasticity
    * ICT, CAS
* Graceful Degradation
  * Cooperative Graceful Degradation in Containerized Clouds \[[arXiv](https://arxiv.org/abs/2312.12809)]
    * UC Irvine
* Microservice
  * Embracing Imbalance: Dynamic Load Shifting among Microservice Containers in Shared Clusters
    * University of Macau

### Deep Learning Compilation

* Mosaic: Exploiting Instruction-Level Parallelism on Deep Learning Accelerators with iTex Tessellation
  * ICT, CAS & Tencent
* Einsum Trees: An Abstraction for Optimizing the Execution of Tensor Expressions
  * Friedrich Schiller University Jena
* Relax: Composable Abstractions for End-to-End Dynamic Machine Learning
  * CMU & NVIDIA
* Pruner: A Draft-then-Verify Exploration Mechanism to Accelerate Tensor Program Tuning
  * USTC & NIO
* Optimizing Deep Learning Inference Efficiency through Block Dependency Analysis
  * ICT, CAS
* Composing Distributed Computations Through Task and Kernel Fusion \[[arXiv](https://arxiv.org/abs/2406.18109)]
  * Stanford & NVIDIA

### Parallelism

* PartIR: Composing SPMD Partitioning Strategies for Machine Learning \[[arXiv](https://arxiv.org/abs/2401.11202)]
  * Google DeepMind
* GraphPipe: Improving Performance and Scalability of DNN Training with Graph Pipeline Parallelism \[[arXiv](https://arxiv.org/abs/2406.17145)]
  * NVIDIA & CMU & UC Berkeley & MIT

### GPU Sharing

* Tally: Non-Intrusive Performance Isolation for Concurrent Deep Learning Workloads \[[arXiv](https://arxiv.org/abs/2410.07381)]
  * Stanford & UofT

### Performance Prediction

* Forecasting GPU Performance for Deep Learning Training and Inference
  * GaTech & Meta

### Checkpointing

* PCcheck: Persistent Concurrent Checkpointing for ML
  * ETH

### Memory Disaggregation

* pulse: Accelerating Distributed Pointer-Traversals on Disaggregated Memory
  * Yale
* EDM: An Ultra-Low Latency Ethernet Fabric for Memory Disaggregation
  * Purdue

### Acceleration

* DynaX: Sparse Attention Acceleration with Dynamic X:M Fine-Grained Structured Pruning
  * CQU
* GUST: Graph Edge-Coloring Utilization for Accelerating Sparse Matrix Vector Multiplication
  * UMD
* RASSM: Residue-based Acceleration of Single Sparse Matrix Computation via Adaptive Tiling
  * GaTech
* Squeezing Operator Performance Potential for the Ascend Architecture
  * NJU & Huawei

### Performance Tuning

* DarwinGame: Playing Tournaments for Tuning Applications in Noisy Cloud Environments \[[Paper](https://dl.acm.org/doi/10.1145/3669940.3707259)]
  * Utah & MIT & NEU

### DPU Offloading

* OS2G: A High-Performance DPU Offloading Architecture for GPU-based Deep Learning with Object Storage
  * Alibaba & ZJU

### Tracing

* Automatic Tracing in Task-Based Runtime Systems
  * Stanford & NVIDIA
