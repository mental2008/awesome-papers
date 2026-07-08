# EuroSys 2025

## Meta Info

Homepage: [https://2025.eurosys.org](https://2025.eurosys.org)

Paper list: [https://2025.eurosys.org/accepted-papers.html](https://2025.eurosys.org/accepted-papers.html)

Proceedings: [https://dl.acm.org/doi/proceedings/10.1145/3689031](https://dl.acm.org/doi/proceedings/10.1145/3689031)

### Acceptance Rate

* Overall: 12.2% (= 85 / 696)
  * Total: 85 (= 44 + 41)
  * 11 revised papers from EuroSys'25 Fall
* Fall: 8.2% (= 30 / 367)
  * 14 revised papers from EuroSys'25 Spring
  * Total: 44 (= 30 + 14)
* Spring: 9.7% (= 32 / 329)
  * 9 revised papers from EuroSys'24 Fall
  * Total: 41 (= 32 + 9)

## Papers

### Large Language Models (LLMs)

* LLM Training
  * Mist: Efficient Distributed Training of Large Language Models via Memory-Parallelism Co-Optimization
    * UofT
  * MEPipe: Democratizing LLM Training with Memory-Efficient Slice-Level Pipeline Scheduling on Cost-Effective Accelerators
    * THU & Zhipu AI
* LLM Inference
  * Fast State Restoration in LLM Serving with HCache
    * THU
  * Stateful Large Language Model Serving with Pensieve
    * NYU
  * CacheBlend: Fast Large Language Model Serving for RAG with Cached Knowledge Fusion \[[Paper](https://doi.org/10.1145/3689031.3696098)] \[[arXiv](https://arxiv.org/abs/2405.16444)] \[[Code](https://github.com/YaoJiayi/CacheBlend)]
    * CUHK-Shenzhen & UChicago & Stanford
    * **Best Paper Award (Spring)**
    * Reuses multiple precomputed KV caches for RAG inputs and selectively recomputes a small fraction of tokens to recover generation quality.
  * T-MAC: CPU Renaissance via Table Lookup for Low-Bit LLM Deployment on Edge
    * USTC & MSRA
  * DeltaZip: Efficient Serving of Multiple Full-Model-Tuned LLMs
    * ETH & MIT
  * SpInfer: Leveraging Low-Level Sparsity for Efficient Large Language Model Inference on GPUs
    * HKUST-GZ
    * **Best Paper Award (Fall)**
* LLM Fine-Tuning
  * HybridFlow: A Flexible and Efficient RLHF Framework
    * HKU & ByteDance
* Mixture-of-Experts (MoEs)
  * Samoyeds: Accelerating MoE Models with Structured Sparsity Leveraging Sparse Tensor Cores
    * SJTU

### Distributed Training

* JABAS: Joint Adaptive Batching and Automatic Scaling for DNN Training on Heterogeneous GPUs
  * UNIST & Samsung
* FlowCheck: Decoupling Checkpointing and Training of Large-Scale Models
  * SJTU & Alibaba Cloud
* Comprehensive Deadlock Prevention for GPU Collective Communication
  * PKU & OneFlow

### Model Serving

* A House United Within Itself: SLO-Awareness for On-Premises Containerized ML Inference Clusters via Faro
  * UIUC & IBM Research
* SkyServe: Serving AI Models across Regions and Clouds with Spot Instances \[[Paper](https://dl.acm.org/doi/10.1145/3689031.3717459)] \[[Code](https://github.com/skypilot-org/skypilot)] \[[arXiv](https://arxiv.org/abs/2411.01438)]
  * UC Berkeley
  * Manage a mixture of spot and on-demand replicas across regions and clouds.
  * Improve availability, reduce correlated preemptions, overprovision cheap spot replicas.
  * Baselines: AWS Auto-scaling Group (ASG), MArk \[ATC'19], AWS spot node pool (AWSSpot), [SpotServe](asplos-2024/spotserve.md)

### Deep Learning Compilation

* SpaceFusion: Advanced Deep Learning Operator Fusion via Space-Mapping Graph
  * SJTU

### Resource Management

* Scheduling
  * Towards VM Rescheduling Optimization Through Deep Reinforcement Learning
    * UC Merced & UC Berkeley & ByteDance
  * Eva: Cost-Efficient Cloud-Based Cluster Scheduling
    * UW-Madison
* Serverless Computing
  * Serverless Cold Starts and Where to Find Them
    * Huawei
  * SeBS-Flow: Benchmarking Serverless Cloud Function Workflows
    * Karlsruhe Institute of Technology & ETH
  * AlloyStack: A Library Operating System for Serverless Workflow Applications
    * TJU & THU
* GPU Sharing
  * Improving GPU Sharing Performance through Adaptive Bubbleless Spatial-Temporal Sharing
    * SJTU & Microsoft & Alibaba
  * Multiplexing Dynamic Deep Learning Workloads with SLO-awareness in GPU Clusters
    * University of Macau & SIAT, CAS

## Acronyms

* RLHF: Reinforcement Learning from Human Feedback
* ML: Machine Learning
