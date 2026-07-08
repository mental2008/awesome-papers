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
    * MegaScale-MoE: Large-Scale Communication-Efficient Training of Mixture-of-Experts Models in Production \[[Paper](https://doi.org/10.1145/3767295.3769325)] \[[arXiv](https://arxiv.org/abs/2505.11432)]
      * PKU & ByteDance
      * Present **MegaScale-MoE**, a production system for efficient large-scale MoE training.
      * Co-design communication-efficient parallelism, inter- and intra-operator communication-computation overlap, and lower-precision communication compression for MoE layers.
  * LoRA Fine-Tuning
    * LoRAFusion: Efficient LoRA Fine-Tuning for LLMs \[[Paper](https://doi.org/10.1145/3767295.3769331)] \[[arXiv](https://arxiv.org/abs/2510.00206)]
      * UofT & Vector Institute & NVIDIA
      * Present **LoRAFusion**, a system that improves LoRA fine-tuning by optimizing both fused kernels and multi-job training schedules.
      * Combine graph-splitting-based kernel fusion with multi-job adaptive batching to reduce memory traffic, improve communication overlap, and mitigate pipeline bubbles.
    * Federated Fine-Tuning of Sparsely-Activated Large Language Models on Resource-Constrained Devices \[[Paper](https://doi.org/10.1145/3767295.3769329)]
      * Shandong University & XJTU
      * Study federated fine-tuning for sparsely activated LLMs under resource-constrained client devices.
  * Data Pipeline
    * MegaScale-Data: Scaling DataLoader for Multisource Large Foundation Model Training \[[Paper](https://doi.org/10.1145/3767295.3803568)] \[[arXiv](https://arxiv.org/abs/2504.09844)]
      * HKU & ByteDance
      * Present **MegaScale-Data**, an industrial-grade distributed data loading architecture for multi-source large foundation model training.
      * Disaggregate preprocessing with role-specific actors and use a centralized declarative data plane to support scalable multi-source orchestration under heterogeneous preprocessing costs.
  * Scheduling and Parallelism
    * STAlloc: Enhancing Memory Efficiency in Large-Scale Model Training with Spatio-Temporal Planning \[[Paper](https://doi.org/10.1145/3767295.3769335)]
      * THU & Infinigence-AI & SJTU
      * Plans memory usage across spatial and temporal dimensions to improve large-scale model training efficiency.
    * Zeppelin: Balancing Variable-length Workloads in Data Parallel Large Model Training \[[Paper](https://doi.org/10.1145/3767295.3769369)]
      * PKU & ETH & CUHK & Shanghai AI Lab & MIT
      * Balances variable-length data-parallel training workloads to reduce stragglers and improve utilization.
    * Arena: Efficiently Training Large Models via Dynamic Scheduling and Adaptive Parallelism Co-Design \[[Paper](https://doi.org/10.1145/3767295.3803571)]
      * SJTU & Lenovo Research & Microsoft & Guizhou University & NUS
      * Co-designs dynamic scheduling and adaptive parallelism for efficient large-model training.
    * HARP: Orchestrating Automated Parallel Training on Heterogeneous GPU Clusters \[[Paper](https://doi.org/10.1145/3767295.3803603)]
      * Fudan & Shandong Computer Science Center
      * Automates parallel training orchestration across heterogeneous GPU clusters.
    * HetAuto: Cross-Cluster Auto-Parallelism for Heterogeneous Distributed Training \[[Paper](https://doi.org/10.1145/3767295.3803590)]
      * HKU & Meituan
      * Searches cross-cluster auto-parallel strategies for heterogeneous distributed training environments.
    * Efficient and Adaptable Overlapping for Computation and Communication via Signaling and Reordering \[[Paper](https://doi.org/10.1145/3767295.3769370)]
      * THU & PKU & Infinigence-AI & SJTU
      * Uses signaling and reordering to adaptively overlap computation and communication.
    * Crimson: Collaborative Parameter Updates for Efficient Pipeline Training of Large Language Models \[[Paper](https://doi.org/10.1145/3767295.3803606)]
      * SYSU & HKUST & Pengcheng Laboratory
      * Coordinates parameter updates to improve pipeline training efficiency for large language models.
    * Suika: Efficient and High-quality Re-scheduling of 3D-parallelized LLM Training Jobs in Shared Clusters \[[Paper](https://doi.org/10.1145/3767295.3803623)]
      * SJTU & TeleAI & Huawei
      * Re-schedules 3D-parallel LLM training jobs in shared clusters while preserving training quality.
  * Runtime Modeling
    * Maya: Optimizing Deep Learning Training Workloads using GPU Runtime Emulation \[[Paper](https://doi.org/10.1145/3767295.3769366)] \[[arXiv](https://arxiv.org/abs/2503.20191)]
      * Georgia Tech & NVIDIA
      * Present **Maya**, a performance modeling system for deep learning training based on transparent GPU device emulation.
      * Intercept device API calls from unmodified training code to observe low-level operations without workload translation or code modification.
  * Multimodal Training
    * MegaScale-Omni: A Hyper-Scale, Workload-Resilient System for MultiModal LLM Training in Production \[[Paper](https://doi.org/10.1145/3767295.3803587)] \[[arXiv](https://arxiv.org/abs/2605.08962)]
      * SJTU & ByteDance
      * Present **MegaScale-Omni**, a production multimodal LLM training system for dynamic modality mixtures and sample-length distributions.
      * Combine decoupled encoder/backbone parallelism, encoder-LLM joint pipelines, and workload balancing for large-scale MLLM training.
  * Fault Tolerance
    * Handling Network Faults in Distributed AI Training: Failover is Now an Option \[[Paper](https://doi.org/10.1145/3767295.3769322)]
      * NUS & ByteDance
      * Revisit network-fault handling in distributed AI training and make failover practical for large jobs.
* LLM Inference
  * Speculative Decoding
    * AdaServe: Accelerating Multi-SLO LLM Serving with SLO-Customized Speculative Decoding \[[Paper](https://doi.org/10.1145/3767295.3769315)]
      * CMU & Princeton & EPFL & AWS & Purdue
      * Customize speculative decoding policies for serving workloads with multiple latency SLOs.
  * Request Scheduling
    * FlexPipe: Adapting Dynamic LLM Serving Through Inflight Pipeline Refactoring in Fragmented Serverless Clusters \[[Paper](https://doi.org/10.1145/3767295.3769316)] \[[arXiv](https://arxiv.org/abs/2510.11938)]
      * SIAT, CAS & UCAS & UCSD & University of Macau
      * Refactors in-flight pipelines to adapt LLM serving to fragmented serverless GPU clusters.
    * TokenFlow: Responsive LLM Text Streaming Serving under Request Burst via Preemptive Scheduling \[[Paper](https://doi.org/10.1145/3767295.3769328)]
      * SJTU & GMU & China Telecom Shanghai
      * Applies preemptive scheduling to keep text-streaming LLM serving responsive under request bursts.
    * AdaGen: Workload-Adaptive Cluster Scheduler for Latency-Optimal LLM Inference Serving \[[Paper](https://doi.org/10.1145/3767295.3769345)]
      * UVA & HPE Labs & UC Riverside
      * Adapts cluster scheduling decisions to workload shifts for latency-optimized LLM inference.
    * SkyWalker: A Locality-Aware Cross-Region Load Balancer for LLM Inference \[[Paper](https://doi.org/10.1145/3767295.3769353)]
      * UC Berkeley & RUC & Rice
      * Uses locality-aware cross-region load balancing for distributed LLM inference services.
    * PiLLM: Resource-Efficient LLM Inference Using Workload Prediction \[[Paper](https://doi.org/10.1145/3767295.3769393)]
      * ShanghaiTech & SenseTime & BUAA
      * Predicts workload behavior to improve resource efficiency in LLM inference.
  * KV Cache and Memory Management
    * Taming Latency-Memory Trade-Off in MoE-Based LLM Serving via Fine-Grained Expert Offloading \[[Paper](https://doi.org/10.1145/3767295.3769319)] \[[arXiv](https://arxiv.org/abs/2502.05370)]
      * Stevens Institute of Technology & Waterloo & Rutgers
      * Uses fine-grained expert offloading to balance latency and memory pressure in MoE-based LLM serving.
    * KUNSERVE: Parameter-centric Memory Management for Efficient Memory Overloading Handling in LLM Serving \[[Paper](https://doi.org/10.1145/3767295.3769348)]
      * SJTU
      * Manages model parameters as the central memory object to handle memory overloads during LLM serving.
    * High Throughput and Low Latency LLM Serving via Adaptive KV Caching \[[Paper](https://doi.org/10.1145/3767295.3803570)]
      * University of Macau & SIAT, CAS & NTU
      * Adapts KV caching decisions to jointly improve throughput and latency.
  * Multiplexing
    * MFS: An Efficient Model Family Serving System for LLMs \[[Paper](https://doi.org/10.1145/3767295.3769355)]
      * HKUST & USTC & Inspur
      * Serves related LLM model families by exploiting shared model structure and deployment opportunities.
    * Efficient Multimodal Serving via Module Multiplexing \[[Paper](https://doi.org/10.1145/3767295.3769389)]
      * HKUST & SYSU & XJTU & MetaX
      * Multiplexes reusable multimodal model modules to improve serving efficiency.
  * Sparsity
    * SAS: Sparse Attention Synthesizer for Efficient Language Model Inference \[[Paper](https://doi.org/10.1145/3767295.3769364)]
      * Amazon
      * Synthesizes sparse attention patterns to accelerate language-model inference.
  * Heterogeneous Deployment
    * Scaling LLM Test-Time Compute with Mobile NPU on Smartphones \[[Paper](https://doi.org/10.1145/3767295.3769382)]
      * THU & USTC & MSR & AIR, THU
      * Explores using mobile NPUs to scale LLM test-time compute on smartphones.
    * TailorLLM: Collaborative End-Cloud Inference of Large and Small Language Models Based on Low-Rank Adaptation \[[Paper](https://doi.org/10.1145/3767295.3769346)]
      * BUPT
      * Coordinates cloud and edge execution between large and small language models using low-rank adaptation.
  * Trusted Execution
    * TZ-LLM: Protecting On-Device Large Language Models with Arm TrustZone \[[Paper](https://doi.org/10.1145/3767295.3769334)]
      * SJTU
      * Protects on-device LLM execution with Arm TrustZone-based isolation.
  * LLM-based Applications
    * AIMS: Cost-Efficient LLM-Based Agent Deployment in Hybrid Cloud-Edge Environments \[[Paper](https://doi.org/10.1145/3767295.3803622)]
      * UVA & Microsoft
      * Places and executes LLM-based agents across hybrid cloud-edge environments with cost efficiency.
    * From Imperative to Declarative: Towards LLM-friendly OS Interfaces for Boosted Computer-Use Agents \[[Paper](https://doi.org/10.1145/3767295.3803576)]
      * IS, CAS & UCAS & SJTU
      * Recasts OS interfaces from imperative actions toward declarative forms that are easier for computer-use agents to operate.

### Diffusion Models

* Image Editing
  * FlashPS: Efficient Generative Image Editing with Mask-aware Caching and Scheduling \[[Paper](https://doi.org/10.1145/3767295.3769379)] \[[arXiv](https://arxiv.org/abs/2505.20600)] \[[Code](https://github.com/Sylvia-16/FlashPS)]
    * HKUST & Alibaba
    * **Our work!**
    * Uses mask-aware caching and scheduling to accelerate generative image editing workloads.

### Model Serving

* Automated End-to-End Model Serving with Cooperative Compilation and Scheduling \[[Paper](https://doi.org/10.1145/3767295.3769392)]
  * NJU & Hunan University
  * Jointly optimizes model-serving compilation and scheduling decisions across the end-to-end serving stack.

### Resource Management

* Serverless Computing
  * Efficient Data Passing for Serverless Inference Workflows: A GPU-Centric Approach \[[Paper](https://doi.org/10.1145/3767295.3769336)]
    * HUST & CUHK-Shenzhen & TeleAI & HKUST
    * Designs GPU-centric data passing for serverless inference workflows to reduce transfer overhead.
  * iRoute: Local Routing Table-based Workflow Management in Serverless Computing \[[Paper](https://doi.org/10.1145/3767295.3769318)]
    * TJU & THU & IEIT Systems & Inspur
    * Uses local routing-table mechanisms to manage serverless workflows.
  * DROPS: Managing Serverless Resource Pools in Microsoft Azure Functions \[[Paper](https://doi.org/10.1145/3767295.3769350)]
    * Waterloo & MSR & Microsoft
    * Manages serverless resource pools in Azure Functions to improve allocation efficiency.
  * Squeezy: Rapid VM Memory Reclamation for Serverless Functions \[[Paper](https://doi.org/10.1145/3767295.3769357)]
    * NTUA & UIUC
    * Reclaims VM memory quickly for serverless functions to improve density and responsiveness.
  * Demystifying Serverless Costs on Public Platforms: Bridging Billing, Architecture, and OS Scheduling \[[Paper](https://doi.org/10.1145/3767295.3769374)]
    * UBC & Johns Hopkins
    * Connects public-platform billing behavior with architecture and OS scheduling effects in serverless systems.
  * Fix: externalizing network I/O in serverless computing \[[Paper](https://doi.org/10.1145/3767295.3769387)]
    * Stanford
    * Externalizes network I/O from serverless functions to reduce runtime overhead and simplify function execution.
* GPU Cluster Management
  * Bridging the GPU Utilization Gap: Predictive Multi-Dimensional Resource Scheduling for AI Workloads \[[Paper](https://doi.org/10.1145/3767295.3803579)]
    * THU & Alibaba & SJTU
    * Uses predictive multidimensional scheduling to improve GPU utilization for AI workloads.
  * Untangling GPU Power Consumption: Job-Level Inference in Cloud Shared Settings \[[Paper](https://doi.org/10.1145/3767295.3769333)] \[[PDF](https://hal.science/hal-05291033v1/file/GPU_power_Eurosys.pdf)]
    * ETS & Inria & OVHcloud & CNRS
    * Present practical job-level power estimation methods for GPUs under temporal sharing, spatial sharing, and passthrough deployment modes in cloud environments.
    * Show that GPU sharing can improve energy efficiency for small AI workloads, and identify substantial GPU underutilization in an IaaS GPU cluster.

## Acronyms

* LLM: Large Language Model
* LoRA: Low-Rank Adaptation
* MoE: Mixture-of-Experts
