# MLSys 2025

## Meta Info

Homepage: [https://mlsys.org/Conferences/2025](https://mlsys.org/Conferences/2025)

Paper list: [https://mlsys.org/virtual/2025/papers.html?filter=titles](https://mlsys.org/virtual/2025/papers.html?filter=titles)

### Acceptance Rate

22.5% (= 61 / 271)

## Papers

### Large Language Models (LLMs)

* LLM Training
  * Lumos: Efficient Performance Modeling and Estimation for Large-scale LLM Training \[[Paper](https://mlsys.org/virtual/2025/poster/3240)]
    * Cornell & Meta & MIT
  * PipeFill: Using GPUs During Bubbles in Pipeline-parallel LLM Training \[[Paper](https://mlsys.org/virtual/2025/poster/3283)] \[[arXiv](https://arxiv.org/abs/2410.07192)]
    * CMU & AWS
  * Scaling Deep Learning Training with MPMD Pipeline Parallelism \[[Paper](https://mlsys.org/virtual/2025/poster/3257)] \[[arXiv](https://arxiv.org/abs/2412.14374)]
    * NVIDIA
  * Training Ultra Long Context Language Model with Fully Pipelined Distributed Transformer \[[Paper](https://mlsys.org/virtual/2025/poster/3268)] \[[arXiv](https://arxiv.org/abs/2408.16978)]
    * OSU & Microsoft
  * APOLLO: SGD-like Memory, AdamW-level Performance \[[Paper](https://mlsys.org/virtual/2025/poster/3241)] \[[Homepage](https://zhuhanqing.github.io/APOLLO/)] \[[arXiv](https://arxiv.org/abs/2412.05270)] \[[Code](https://github.com/zhuhanqing/APOLLO)]
    * UT-Austin & Meta AI
    * **Outstanding Paper Honorable Mention**
  * Radius: Range-based Gradient Sparsity for Large Foundation Model Pre-training \[[Paper](https://mlsys.org/virtual/2025/poster/3256)]
    * Rutgers
  * Photon: Federated LLM Pre-Training \[[Paper](https://mlsys.org/virtual/2025/poster/3280)] \[[arXiv](https://arxiv.org/abs/2411.02908)]
    * UCambridge
  * Balancing Pipeline Parallelism with Vocabulary Parallelism \[[Paper](https://mlsys.org/virtual/2025/poster/3237)] \[[arXiv](https://arxiv.org/abs/2411.05288)] \[[Code](https://github.com/sail-sg/VocabularyParallelism)]
    * Sea AI Lab
  * Youmu: Efficient Columnar Data Pipeline for LLM Training \[[Paper](https://mlsys.org/virtual/2025/poster/3272)] \[[Slides](https://mlsys.org/media/mlsys-2025/Slides/3272.pdf)]
    * UVA & UofT & CUHK
* LLM Inference
  * XGrammar: Flexible and Efficient Structured Generation Engine for Large Language Models \[[Paper](https://mlsys.org/virtual/2025/poster/3235)] \[[arXiv](https://arxiv.org/abs/2411.15100)] \[[Homepage](https://xgrammar.mlc.ai)] \[[Code](https://github.com/mlc-ai/xgrammar)]
    * CMU & NVIDIA & SJTU & UC Berkeley
  * Seesaw: High-throughput LLM Inference via Model Re-sharding \[[Paper](https://mlsys.org/virtual/2025/poster/3253)] \[[arXiv](https://arxiv.org/abs/2503.06433)]
    * UofT
    * **Outstanding Paper Honorable Mention**
  * NEO: Saving GPU Memory Crisis with CPU Offloading for Online LLM Inference \[[Paper](https://mlsys.org/virtual/2025/poster/3230)] \[[arXiv](https://arxiv.org/abs/2411.01142)]
    * Harvard & UC Berkeley
  * FlexInfer: Flexible LLM Inference with CPU Computations \[[Paper](https://mlsys.org/virtual/2025/poster/3234)]
    * GaTech
  * SOLA: Optimizing SLO Attainment for Large Language Model Serving with State-Aware Scheduling \[[Paper](https://mlsys.org/virtual/2025/poster/3231)]
    * THU
  * Marconi: Prefix Caching for the Era of Hybrid LLMs \[[Paper](https://mlsys.org/virtual/2025/poster/3260)] \[[arXiv](https://arxiv.org/abs/2411.19379)]
    * Princeton & AWS
    * **Outstanding Paper Honorable Mention**
  * Rethinking Key-Value Cache Compression Techniques for Large Language Model Serving \[[Paper](https://mlsys.org/virtual/2025/poster/3236)]
  * QServe: W4A8KV4 Quantization and System Co-design for Efficient LLM Serving \[[Paper](https://mlsys.org/virtual/2025/poster/3288)] \[[arXiv](https://arxiv.org/abs/2405.04532)] \[[Homepage](https://hanlab.mit.edu/projects/qserve)] \[[Code](https://github.com/mit-han-lab/omniserve)]
    * MIT
  * ThunderServe: High-performance and Cost-efficient LLM Serving in Cloud Environments \[[Paper](https://mlsys.org/virtual/2025/poster/3284)] \[[arXiv](https://arxiv.org/abs/2502.09334)]
    * UCambridge & PKU & ETH
  * Efficient LLM Inference using Dynamic Input Pruning and Cache-Aware Masking \[[Paper](https://mlsys.org/virtual/2025/poster/3251)] \[[arXiv](https://arxiv.org/abs/2412.01380)]
    * Qualcomm AI Research
  * Context Parallelism for Scalable Million-Token Inference \[[Paper](https://mlsys.org/virtual/2025/poster/3255)] \[[arXiv](https://arxiv.org/abs/2411.01783)]
    * Meta
  * MEADOW: Memory-efficient Dataflow and Data Packing for Low Power Edge LLMs \[[Paper](https://mlsys.org/virtual/2025/poster/3244)] \[[arXiv](https://arxiv.org/abs/2503.11663)]
    * Yale & IIT Roorkie & IBM Research
* Attention Mechanisms
  * FlashInfer: Efficient and Customizable Attention Engine for LLM Inference Serving \[[Paper](https://mlsys.org/virtual/2025/poster/3259)] \[[arXiv](https://arxiv.org/abs/2501.01005)] \[[Homepage](https://flashinfer.ai)] \[[Code](https://github.com/flashinfer-ai/flashinfer)]
    * UW & NVIDIA
    * **Outstanding Paper Award**
  * LServe: Efficient Long-sequence LLM Serving with Unified Sparse Attention \[[Paper](https://mlsys.org/virtual/2025/poster/3270)] \[[arXiv](https://arxiv.org/abs/2502.14866)] \[[Homepage](https://hanlab.mit.edu/projects/lserve)] \[[Code](https://github.com/mit-han-lab/omniserve)]
    * MIT & NVIDIA
  * FastTree: Optimizing Attention Kernel and Runtime for Tree-Structured LLM Inference \[[Paper](https://mlsys.org/virtual/2025/poster/3278)]
    * UCSD & AWS
  * FlexAttention: A Programming Model for Generating Fused Attention Variants \[[Paper](https://mlsys.org/virtual/2025/poster/3286)] \[[arXiv](https://arxiv.org/abs/2412.05496)]
    * Meta
  * LeanAttention: Hardware-Aware Scalable Attention Mechanism for the Decode-Phase of Transformers \[[Paper](https://mlsys.org/virtual/2025/poster/3269)] \[[arXiv](https://arxiv.org/abs/2405.10480)]
    * Microsoft
  * TurboAttention: Efficient Attention Approximation for High Throughputs LLMs \[[Paper](https://mlsys.org/virtual/2025/poster/3250)] \[[arXiv](https://arxiv.org/abs/2412.08585)]
    * Microsoft & GaTech
  * SampleAttention: Near-Lossless Acceleration of Long Context LLM Inference with Adaptive Structured Sparse Attention \[[Paper](https://mlsys.org/virtual/2025/poster/3258)] \[[arXiv](https://arxiv.org/abs/2406.15486)]
    * PKU & CUHK & Zhipu AI & THU & Shanghai AI Lab
* RLHF Training
  * ReaL: Efficient RLHF Training of Large Language Models with Parameter Reallocation \[[Paper](https://mlsys.org/virtual/2025/poster/3228)] \[[arXiv](https://arxiv.org/abs/2406.14088)] \[[Code](https://github.com/openpsi-project/ReaLHF)]
    * THU
* MoE Inference
  * COMET: Fine-grained Computation-communication Overlapping for Mixture-of-Experts \[[Paper](https://mlsys.org/virtual/2025/poster/3246)] \[[arXiv](https://arxiv.org/abs/2502.19811)]
    * ByteDance Seed & SJTU
    * **Outstanding Paper Honorable Mention**
  * MiLo: Efficient Quantized MoE Inference with Mixture of Low-Rank Compensators \[[Paper](https://mlsys.org/virtual/2025/poster/3266)] \[[Code](https://github.com/Supercomputing-System-AI-Lab/MiLo)]
    * UIUC
* LoRA Fine-tuning
  * HyC-LoRA: Memory Efficient LoRA Fine-tuning with Hybrid Activation Compression \[[Paper](https://mlsys.org/virtual/2025/poster/3254)] \[[Slides](https://mlsys.org/media/mlsys-2025/Slides/3254_Yq1cyy5.pdf)]
    * THU
* LLM Distillation
  * Self-Data Distillation for Recovering Quality in Pruned Large Language Models \[[Paper](https://mlsys.org/virtual/2025/poster/3247)] \[[arXiv](https://arxiv.org/abs/2410.09982)]
    * Cerebras Systems
* LLM Agent Simulation
  * AI Metropolis: Scaling Large Language Model-based Multi-Agent Simulation with Out-of-order Execution \[[Paper](https://mlsys.org/virtual/2025/poster/3243)] \[[arXiv](https://arxiv.org/abs/2411.03519)]
    * Stanford & GaTech
* LLM for Relational Data Analytics
  * Optimizing LLM Queries in Relational Data Analytics Workloads \[[Paper](https://mlsys.org/virtual/2025/poster/3261)] \[[arXiv](https://arxiv.org/abs/2403.05821)]
    * UC Berkeley

### Diffusion Models

* Video Generation
  * ScaleFusion: Scalable Inference of Spatial-Temporal Diffusion Transformers for High-Resolution Long Video Generation \[[Paper](https://mlsys.org/virtual/2025/poster/3252)]
    * UofT & AWS
* Image Generation
  * DiffServe: Efficiently Serving Text-to-Image Diffusion Models with Query-Aware Model Scaling \[[Paper](https://mlsys.org/virtual/2025/poster/3287)] \[[arXiv](https://arxiv.org/abs/2411.15381)]
    * UMass Amherst & Adobe Research
    * Construct model cascades → Easy queries can be processed by more lightweight diffusion models

### Resource Management

* Scheduling
  * LAVA: Lifetime-Aware VM Allocation with Learned Distributions and Adaptation to Mispredictions \[[Paper](https://mlsys.org/virtual/2025/poster/3281)] \[[arXiv](https://arxiv.org/abs/2412.09840)]
    * Google
    * **Outstanding Paper Honorable Mention**
  * Rubick: Exploiting Job Reconfigurability for Deep Learning Cluster Scheduling \[[Paper](https://mlsys.org/virtual/2025/poster/3232)] \[[arXiv](https://arxiv.org/abs/2408.08586)]
    * ECNU & Alibaba & HUST
* Virtual CPU Oversubscription
  * ProtoRAIL: A Risk-cognizant Imitation Agent for Adaptive vCPU Oversubscription In the Cloud \[[Paper](https://mlsys.org/virtual/2025/poster/3277)] \[[Slides](https://mlsys.org/media/mlsys-2025/Slides/3277_0U2rb6k.pdf)]
    * Microsoft
* AIOps
  * AIOpsLab: A Holistic Framework to Evaluate AI Agents for Enabling Autonomous Clouds \[[Paper](https://mlsys.org/virtual/2025/poster/3285)] \[[arXiv](https://arxiv.org/abs/2501.06706)]
    * Microsoft

### Deep Learning Compilation

* TileLink: Generating Efficient Compute-Communication Overlapping Kernels using Tile-Centric Primitives \[[Paper](https://mlsys.org/virtual/2025/poster/3248)]
  * ByteDance Seed

### Super-Resolution

* VoLUT: Efficient Volumetric streaming enhanced by LUT-based super-resolution \[[Paper](https://mlsys.org/virtual/2025/poster/3275)] \[[arXiv](https://arxiv.org/abs/2502.12151)]
  * UW-Madison & USC & MSRA

### PDF Parsing

* AdaParse: An Adaptive Parallel PDF Parsing and Resource Scaling Engine \[[Paper](https://mlsys.org/virtual/2025/poster/3229)] \[[Code](https://github.com/7shoe/AdaParse)] \[[Slides](https://mlsys.org/media/mlsys-2025/Slides/3229.pdf)]
  * UChicago & Argonne National Laboratory

## Acronyms

* RLHF: Reinforcement Learning from Human Feedback
* MoE: Mixture-of-Experts
* LoRA: Low-Rank Adaptation
* LUT: Lookup Table
