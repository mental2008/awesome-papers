# MLSys 2025

## Meta Info

Homepage: [https://mlsys.org/Conferences/2025](https://mlsys.org/Conferences/2025)

Paper list: [https://mlsys.org/virtual/2025/papers.html?filter=titles](https://mlsys.org/virtual/2025/papers.html?filter=titles)

### Acceptance Rate

22.5% (= 61 / 271)

## Papers

### Large Language Models (LLMs)

* LLM Training
  * Lumos: Efficient Performance Modeling and Estimation for Large-scale LLM Training \[[Paper](https://mlsys.org/virtual/2025/poster/2961)]
  * PipeFill: Using GPUs During Bubbles in Pipeline-parallel LLM Training \[[Paper](https://mlsys.org/virtual/2025/poster/3004)] \[[arXiv](https://arxiv.org/abs/2410.07192)]
    * CMU & AWS
  * Scaling Deep Learning Training with MPMD Pipeline Parallelism \[[Paper](https://mlsys.org/virtual/2025/poster/2978)] \[[arXiv](https://arxiv.org/abs/2412.14374)]
    * NVIDIA
  * Training Ultra Long Context Language Model with Fully Pipelined Distributed Transformer \[[Paper](https://mlsys.org/virtual/2025/poster/2989)] \[[arXiv](https://arxiv.org/abs/2408.16978)]
    * OSU & Microsoft
  * APOLLO: SGD-like Memory, AdamW-level Performance \[[Paper](https://mlsys.org/virtual/2025/poster/2962)] \[[Homepage](https://zhuhanqing.github.io/APOLLO/)] \[[arXiv](https://arxiv.org/abs/2412.05270)] \[[Code](https://github.com/zhuhanqing/APOLLO)]
    * UT-Austin & Meta AI
  * Radius: Range-based Gradient Sparsity for Large Foundation Model Pre-training \[[Paper](https://mlsys.org/virtual/2025/poster/2977)]
  * SystemX: Federated LLM Pre-Training \[[Paper](https://mlsys.org/virtual/2025/poster/3001)]
  * Photon: Federated LLM Pre-Training \[[Paper](https://mlsys.org/virtual/2025/poster/2966)] \[[arXiv](https://arxiv.org/abs/2411.02908)]
    * UCambridge
  * Balancing Pipeline Parallelism with Vocabulary Parallelism \[[Paper](https://mlsys.org/virtual/2025/poster/2958)] \[[arXiv](https://arxiv.org/abs/2411.05288)] \[[Code](https://github.com/sail-sg/VocabularyParallelism)]
    * Sea AI Lab
  * Youmu: Efficient Columnar Data Pipeline for LLM Training \[[Paper](https://mlsys.org/virtual/2025/poster/2993)]
* LLM Inference
  * XGrammar: Flexible and Efficient Structured Generation Engine for Large Language Models \[[Paper](https://mlsys.org/virtual/2025/poster/2956)] \[[arXiv](https://arxiv.org/abs/2411.15100)] \[[Homepage](https://xgrammar.mlc.ai)] \[[Code](https://github.com/mlc-ai/xgrammar)]
    * CMU & NVIDIA & SJTU & UC Berkeley
  * Seesaw: High-throughput LLM Inference via Model Re-sharding \[[Paper](https://mlsys.org/virtual/2025/poster/2974)] \[[arXiv](https://arxiv.org/abs/2503.06433)]
    * UofT
  * NEO: Saving GPU Memory Crisis with CPU Offloading for Online LLM Inference \[[Paper](https://mlsys.org/virtual/2025/poster/2951)] \[[arXiv](https://arxiv.org/abs/2411.01142)]
    * Harvard & UC Berkeley
  * FlexInfer: Flexible LLM Inference with CPU Computations \[[Paper](https://mlsys.org/virtual/2025/poster/2955)]
    * GaTech
  * SOLA: Optimizing SLO Attainment for Large Language Model Serving with State-Aware Scheduling \[[Paper](https://mlsys.org/virtual/2025/poster/2952)]
    * THU
  * Marconi: Prefix Caching for the Era of Hybrid LLMs \[[Paper](https://mlsys.org/virtual/2025/poster/2981)] \[[arXiv](https://arxiv.org/abs/2411.19379)]
    * Princeton & AWS
  * Rethinking Key-Value Cache Compression Techniques for Large Language Model Serving \[[Paper](https://mlsys.org/virtual/2025/poster/2957)]
  * QServe: W4A8KV4 Quantization and System Co-design for Efficient LLM Serving \[[Paper](https://mlsys.org/virtual/2025/poster/3011)] \[[arXiv](https://arxiv.org/abs/2405.04532)] \[[Homepage](https://hanlab.mit.edu/projects/qserve)] \[[Code](https://github.com/mit-han-lab/omniserve)]
    * MIT
  * ThunderServe: High-performance and Cost-efficient LLM Serving in Cloud Environments \[[Paper](https://mlsys.org/virtual/2025/poster/3005)] \[[arXiv](https://arxiv.org/abs/2502.09334)]
    * UCambridge & PKU & ETH
  * Efficient LLM Inference using Dynamic Input Pruning and Cache-Aware Masking \[[Paper](https://mlsys.org/virtual/2025/poster/2972)] \[[arXiv](https://arxiv.org/abs/2412.01380)]
    * Qualcomm AI Research
  * Context Parallelism for Scalable Million-Token Inference \[[Paper](https://mlsys.org/virtual/2025/poster/2976)] \[[arXiv](https://arxiv.org/abs/2411.01783)]
    * Meta
  * MEADOW: Memory-efficient Dataflow and Data Packing for Low Power Edge LLMs \[[Paper](https://mlsys.org/virtual/2025/poster/2965)] \[[arXiv](https://arxiv.org/abs/2503.11663)]
    * Yale & IIT Roorkie & IBM Research
* Attention Mechanisms
  * FlashInfer: Efficient and Customizable Attention Engine for LLM Inference Serving \[[Paper](https://mlsys.org/virtual/2025/poster/2980)] \[[arXiv](https://arxiv.org/abs/2501.01005)] \[[Homepage](https://flashinfer.ai)] \[[Code](https://github.com/flashinfer-ai/flashinfer)]
    * UW & NVIDIA
  * LServe: Efficient Long-sequence LLM Serving with Unified Sparse Attention \[[Paper](https://mlsys.org/virtual/2025/poster/2991)] \[[arXiv](https://arxiv.org/abs/2502.14866)] \[[Homepage](https://hanlab.mit.edu/projects/lserve)] \[[Code](https://github.com/mit-han-lab/omniserve)]
    * MIT & NVIDIA
  * FastTree: Optimizing Attention Kernel and Runtime for Tree-Structured LLM Inference \[[Paper](https://mlsys.org/virtual/2025/poster/2999)]
    * UCSD & AWS
  * FlexAttention: A Programming Model for Generating Fused Attention Variants \[[Paper](https://mlsys.org/virtual/2025/poster/3007)] \[[arXiv](https://arxiv.org/abs/2412.05496)]
    * Meta
  * LeanAttention: Hardware-Aware Scalable Attention Mechanism for the Decode-Phase of Transformers \[[Paper](https://mlsys.org/virtual/2025/poster/2990)] \[[arXiv](https://arxiv.org/abs/2405.10480)]
    * Microsoft
  * TurboAttention: Efficient Attention Approximation for High Throughputs LLMs \[[Paper](https://mlsys.org/virtual/2025/poster/2971)] \[[arXiv](https://arxiv.org/abs/2412.08585)]
    * Microsoft & GaTech
  * SampleAttention: Near-Lossless Acceleration of Long Context LLM Inference with Adaptive Structured Sparse Attention \[[Paper](https://mlsys.org/virtual/2025/poster/2979)] \[[arXiv](https://arxiv.org/abs/2406.15486)]
    * PKU & CUHK & Zhipu AI & THU & Shanghai AI Lab
* RLHF Training
  * ReaL: Efficient RLHF Training of Large Language Models with Parameter Reallocation \[[Paper](https://mlsys.org/virtual/2025/poster/2949)] \[[arXiv](https://arxiv.org/abs/2406.14088)] \[[Code](https://github.com/openpsi-project/ReaLHF)]
    * THU
* MoE Inference
  * COMET: Fine-grained Computation-communication Overlapping for Mixture-of-Experts \[[Paper](https://mlsys.org/virtual/2025/poster/2967)] \[[arXiv](https://arxiv.org/abs/2502.19811)]
    * ByteDance Seed & SJTU
  * MiLo: Efficient Quantized MoE Inference with Mixture of Low-Rank Compensators \[[Paper](https://beichenhuang.github.io/assets/file/MiLo_effective_MoE_quantization.pdf)] \[[Code](https://github.com/Supercomputing-System-AI-Lab/MiLo) (incoming)]
    * UIUC
* LoRA Fine-tuning
  * HyC-LoRA: Memory Efficient LoRA Fine-tuning with Hybrid Activation Compression \[[Paper](https://mlsys.org/virtual/2025/poster/2975)]
* LLM Distillation
  * Self-Data Distillation for Recovering Quality in Pruned Large Language Models \[[Paper](https://mlsys.org/virtual/2025/poster/2968)] \[[arXiv](https://arxiv.org/abs/2410.09982)]
    * Cerebras Systems
* LLM Agent Simulation
  * AI Metropolis: Scaling Large Language Model-based Multi-Agent Simulation with Out-of-order Execution \[[Paper](https://mlsys.org/virtual/2025/poster/2964)] \[[arXiv](https://arxiv.org/abs/2411.03519)]
    * Stanford & GaTech
* LLM for Relational Data Analytics
  * Optimizing LLM Queries in Relational Data Analytics Workloads \[[Paper](https://mlsys.org/virtual/2025/poster/2982)] \[[arXiv](https://arxiv.org/abs/2403.05821)]
    * UC Berkeley

### Diffusion Models

* Video Generation
  * ScaleFusion: Scalable Inference of Spatial-Temporal Diffusion Transformers for High-Resolution Long Video Generation \[[Paper](https://mlsys.org/virtual/2025/poster/2973)]
* Image Generation
  * DiffServe: Efficiently Serving Text-to-Image Diffusion Models with Query-Aware Model Scaling \[[Paper](https://mlsys.org/virtual/2025/poster/3008)] \[[arXiv](https://arxiv.org/abs/2411.15381)]
    * UMass Amherst & Adobe Research
    * Construct model cascades → Easy queries can be processed by more lightweight diffusion models

### Resource Management

* Scheduling
  * LAVA: Lifetime-Aware VM Allocation with Learned Distributions and Adaptation to Mispredictions \[[Paper](https://mlsys.org/virtual/2025/poster/3002)] \[[arXiv](https://arxiv.org/abs/2412.09840)]
    * Google
  * Morphling: Exploiting Job Reconfigurability for Deep Learning Cluster Scheduling \[[Paper](https://mlsys.org/virtual/2025/poster/2953)] \[[arXiv](https://arxiv.org/abs/2408.08586)]
    * ECNU & Alibaba & HUST
* Virtual CPU Oversubscription
  * ProtoRAIL: A Risk-cognizant Imitation Agent for Adaptive vCPU Oversubscription In the Cloud \[[Paper](https://www.microsoft.com/en-us/research/publication/protorail-a-risk-cognizant-imitation-agent-for-adaptive-vcpu-oversubscription-in-the-cloud/?locale=zh-cn)]
    * Microsoft
* AIOps
  * AIOpsLab: A Holistic Framework to Evaluate AI Agents for Enabling Autonomous Clouds \[[Paper](https://mlsys.org/virtual/2025/poster/3006)] \[[arXiv](https://arxiv.org/abs/2501.06706)]
    * Microsoft

### Deep Learning Compilation

* TileLink: Generating Efficient Compute-Communication Overlapping Kernels using Tile-Centric Primitives \[[Paper](https://mlsys.org/virtual/2025/poster/2969)]

### Super-Resolution

* VoLUT: Efficient Volumetric streaming enhanced by LUT-based super-resolution \[[Paper](https://mlsys.org/virtual/2025/poster/2996)] \[[arXiv](https://arxiv.org/abs/2502.12151)]
  * UW-Madison & USC & MSRA

### PDF Parsing

* AdaParse: An Adaptive Parallel PDF Parsing and Resource Scaling Engine \[[Paper](https://mlsys.org/virtual/2025/poster/2950)] \[[Code](https://github.com/7shoe/AdaParse)]

## Acronyms

* RLHF: Reinforcement Learning from Human Feedback
* MoE: Mixture-of-Experts
* LoRA: Low-Rank Adaptation
* LUT: Lookup Table
