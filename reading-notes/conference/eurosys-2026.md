# EuroSys 2026

## Meta Info

Homepage: [https://2026.eurosys.org](https://2026.eurosys.org)

Paper list: [https://2026.eurosys.org/papers.html](https://2026.eurosys.org/papers.html)

### Acceptance Rate

* Spring: 19.6% (= 79 / 404)

## Papers

### Large Language Models (LLMs)

* LLM Training
  * MoE Training
    * MegaScale-MoE: Large-Scale Communication-Efficient Training of Mixture-of-Experts Models in Production \[[arXiv](https://arxiv.org/abs/2505.11432)]
      * PKU & ByteDance
      * Present **MegaScale-MoE**, a production system for efficient large-scale MoE training.
      * Co-design communication-efficient parallelism, inter- and intra-operator communication-computation overlap, and lower-precision communication compression for MoE layers.
  * LoRA Fine-Tuning
    * LoRAFusion: Efficient LoRA Fine-Tuning for LLMs \[[Paper](https://doi.org/10.1145/3767295.3769331)] \[[arXiv](https://arxiv.org/abs/2510.00206)]
      * UofT & Vector Institute & NVIDIA
      * Present **LoRAFusion**, a system that improves LoRA fine-tuning by optimizing both fused kernels and multi-job training schedules.
      * Combine graph-splitting-based kernel fusion with multi-job adaptive batching to reduce memory traffic, improve communication overlap, and mitigate pipeline bubbles.
    * Federated Fine-Tuning of Sparsely-Activated Large Language Models on Resource-Constrained Devices
      * Shandong University & XJTU
  * Data Pipeline
    * MegaScale-Data: Scaling DataLoader for Multi-Source Large Foundation Model Training \[[arXiv](https://arxiv.org/abs/2504.09844)]
      * HKU & ByteDance
      * Present **MegaScale-Data**, an industrial-grade distributed data loading architecture for multi-source large foundation model training.
      * Disaggregate preprocessing with role-specific actors and use a centralized declarative data plane to support scalable multi-source orchestration under heterogeneous preprocessing costs.
  * Scheduling and Parallelism
    * STAlloc: Enhancing Memory Efficiency in Large-Scale Model Training with Spatio-Temporal Planning
      * THU & Infinigence-AI & SJTU
    * Zeppelin: Balancing Variable-length Workloads in Data Parallel Large Model Training
      * PKU & ETH & CUHK & Shanghai AI Lab & MIT
    * Arena: Efficiently Training Large Models via Dynamic Scheduling and Adaptive Parallelism Co-Design
      * SJTU & Lenovo Research & Microsoft & Guizhou University & NUS
    * HARP: Orchestrating Automated Parallel Training on Heterogeneous GPU Clusters
      * Fudan & Shandong Computer Science Center
    * HetAuto: Cross-Cluster Auto-Parallelism for Heterogeneous Distributed Training
      * HKU & Meituan
    * Efficient and Adaptable Overlapping for Computation and Communication via Signaling and Reordering
      * THU & PKU & Infinigence-AI & SJTU
    * Crimson: Collaborative Parameter Updates for Efficient Pipeline Training of Large Language Models
      * SYSU & HKUST & Pengcheng Laboratory
    * Suika: Efficient and High-quality Re-scheduling of 3D-parallelized LLM Training Jobs in Shared Clusters
      * SJTU & TeleAI & Huawei
  * Runtime Modeling
    * Maya: Optimizing Deep Learning Training Workloads using GPU Runtime Emulation \[[arXiv](https://arxiv.org/abs/2503.20191)]
      * Georgia Tech & NVIDIA
      * Present **Maya**, a performance modeling system for deep learning training based on transparent GPU device emulation.
      * Intercept device API calls from unmodified training code to observe low-level operations without workload translation or code modification.
  * Multimodal Training
    * MegaScale-Omni: A Hyper-Scale, Workload-Resilient System for MultiModal LLM Training in Production
      * SJTU & ByteDance
  * Fault Tolerance
    * Handling Network Faults in Distributed AI Training: Failover is Now an Option
      * NUS & ByteDance
* LLM Inference
  * Speculative Decoding
    * AdaServe: Accelerating Multi-SLO LLM Serving with SLO-Customized Speculative Decoding
      * CMU & Princeton & EPFL & AWS & Purdue
  * Request Scheduling
    * FlexPipe: Adapting Dynamic LLM Serving Through Inflight Pipeline Refactoring in Fragmented Serverless Clusters \[[Paper](https://doi.org/10.1145/3767295.3769316)] \[[arXiv](https://arxiv.org/abs/2510.11938)]
      * SIAT, CAS & UCAS & UCSD & University of Macau
    * TokenFlow: Responsive LLM Text Streaming Serving under Request Burst via Preemptive Scheduling
      * SJTU & GMU & China Telecom Shanghai
    * AdaGen: Workload-Adaptive Cluster Scheduler for Latency-Optimal LLM Inference Serving
      * UVA & HPE Labs & UC Riverside
    * SkyWalker: A Locality-Aware Cross-Region Load Balancer for LLM Inference
      * UC Berkeley & RUC & Rice
    * PiLLM: Resource-Efficient LLM Inference Using Workload Prediction
      * ShanghaiTech & SenseTime & Beihang
  * KV Cache and Memory Management
    * Taming Latency-Memory Trade-Off in MoE-Based LLM Serving via Fine-Grained Expert Offloading \[[Paper](https://doi.org/10.1145/3767295.3769319)] \[[arXiv](https://arxiv.org/abs/2502.05370)]
      * Stevens Institute of Technology & Waterloo & Rutgers
    * KUNSERVE: Parameter-centric Memory Management for Efficient Memory Overloading Handling in LLM Serving
      * SJTU
    * High Throughput and Low Latency LLM Serving via Adaptive KV Caching
      * University of Macau & SIAT, CAS & NTU
  * Multiplexing
    * MFS: An Efficient Model Family Serving System for LLMs
      * HKUST & USTC & Inspur
    * Efficient Multimodal Serving via Module Multiplexing
      * HKUST & SYSU & XJTU & MetaX
  * Sparsity
    * SAS: Sparse Attention Synthesizer for Efficient Language Model Inference
      * Amazon
  * Heterogeneous Environment
    * Scaling LLM Test-Time Compute with Mobile NPU on Smartphones
      * THU & USTC & MSR & AIR, THU
    * TailorLLM: Collaborative End-Cloud Inference of Large and Small Language Models Based on Low-Rank Adaptation
      * BUPT
  * Trusted Execution
    * TZ-LLM: Protecting On-Device Large Language Models with Arm TrustZone
      * SJTU
  * LLM-based Applications
    * AIMS: A Cost-Efficient Framework for LLM-based Agent Deployment in Cloud-Edge Hybrid Environments
      * UVA & Microsoft
    * From Imperative to Declarative: Towards LLM-friendly OS Interfaces for Boosted Computer-Use Agents
      * IS, CAS & UCAS & SJTU

### Diffusion Models

* Image Editing
  * FlashPS: Efficient Generative Image Editing with Mask-aware Caching and Scheduling \[[arXiv](https://arxiv.org/abs/2505.20600)] \[[Code](https://github.com/Sylvia-16/FlashPS)]
    * HKUST & Alibaba
    * **Our work!**

### Model Serving

* Automated End-to-End Model Serving with Cooperative Compilation and Scheduling
  * NJU & Hunan University

### Resource Management

* Serverless Computing
  * Efficient Data Passing for Serverless Inference Workflows: A GPU-Centric Approach
    * HUST & CUHK-Shenzhen & TeleAI & HKUST
  * iRoute: Local Routing Table-based Workflow Management in Serverless Computing
    * TJU & THU & IEIT Systems & Inspur
  * DROPS: Managing Serverless Resource Pools in Microsoft Azure Functions
    * Waterloo & MSR & Microsoft
  * Squeezy: Rapid VM Memory Reclamation for Serverless Functions
    * NTUA & UIUC
  * Demystifying Serverless Costs on Public Platforms: Bridging Billing, Architecture, and OS Scheduling
    * UBC & Johns Hopkins
  * Fix: externalizing network I/O in serverless computing
    * Stanford
* GPU Cluster Management
  * Bridging the GPU Utilization Gap: Predictive Multi-Dimensional Resource Scheduling for AI Workloads
    * THU & Alibaba & SJTU
  * Untangling GPU Power Consumption: Job-Level Inference in Cloud Shared Settings \[[Paper](https://hal.science/hal-05291033v1/file/GPU_power_Eurosys.pdf)]
    * ÉTS & Inria & OVHcloud & CNRS
    * Present practical job-level power estimation methods for GPUs under temporal sharing, spatial sharing, and passthrough deployment modes in cloud environments.
    * Show that GPU sharing can improve energy efficiency for small AI workloads, and identify substantial GPU underutilization in an IaaS GPU cluster.

## Acronyms

* LLM: Large Language Model
* MoE: Mixture-of-Experts
* LoRA: Low-Rank Adaptation
