# MLSys 2026

## Meta Info

Homepage: [https://mlsys.org/Conferences/2026](https://mlsys.org/Conferences/2026)

Paper list: [https://mlsys.org/virtual/2026/papers.html?filter=titles](https://mlsys.org/virtual/2026/papers.html?filter=titles)

### Acceptance Rate

26.8% (= 135 / 504)

## Papers

### Large Language Models (LLMs)

* LLM Training
  * Parallelism
    * AXLearn: Modular, Hardware-Agnostic Large Model Training \[[Paper](https://openreview.net/forum?id=41x11EB3bc)]
      * Google
      * Present **AXLearn**, a production system for scalable large model training with modular software interfaces and hardware-agnostic support across TPUs and GPUs.
    * NEST: Network- and Memory-Aware Device Placement for Distributed Deep Learning \[[Paper](https://openreview.net/forum?id=jpIoO2zSKA)]
      * UW
      * Propose **NEST**, a device placement framework that jointly optimizes parallelism strategy, memory, and network topology for distributed training.
    * veScale-FSDP: Flexible and High-Performance FSDP at Scale \[[Paper](https://openreview.net/forum?id=3Lj8R0F48P)]
      * ByteDance & THU
      * Present **veScale-FSDP**, a flexible FSDP system supporting block-structured sharding formats for structure-aware training methods like block-wise quantization and Shampoo optimizers.
    * DreamDDP: Accelerating Low-Bandwidth Geo-Distributed LLM Training with Layer-wise Partial Synchronization \[[Paper](https://openreview.net/forum?id=cnvw0mbZQp)]
      * HKUST-GZ
      * Propose **DreamDDP** with layer-wise partial synchronization to accelerate geo-distributed LLM training under low-bandwidth conditions beyond Local SGD.
    * Unleashing Scalable Context Parallelism for Foundation Models Pre-Training via FCP \[[Paper](https://openreview.net/forum?id=MPVycRsIn6)]
      * CMU & UC Berkeley
      * Propose **FCP**, a flexible context parallelism system that adaptively handles variable sequence lengths with efficient sharding and bin-packing for pre-training.
    * Efficient Long-Context Language Model Training by Core Attention Disaggregation \[[Paper](https://openreview.net/forum?id=oIonqkc8hM)]
      * UC Berkeley & UCSD
      * Present core attention disaggregation (**CAD**), scheduling the parameter-free softmax(QK^T)V computation on a separate resource pool to resolve load imbalance in long-context training.
    * MTraining: Distributed Dynamic Sparse Attention for Efficient Ultra-Long Context Training \[[Paper](https://openreview.net/forum?id=h6SD2zgwGq)]
      * MSR
      * Propose **MTraining**, a distributed dynamic sparse attention system for efficient ultra-long context LLM training in multi-GPU settings.
  * Low-Rank Training
    * BOOST: BOttleneck-Optimized Scalable Training Framework for Low-Rank Large Language Models \[[Paper](https://openreview.net/forum?id=JhN5hldx4V)]
      * Argonne National Lab
      * Propose **BOOST**, a scalable training framework for low-rank LLMs that addresses excessive communication and poor GPU utilization under standard tensor parallelism.
  * Memory Management
    * ProTrain: Efficient LLM Training via Automatic Memory Management \[[Paper](https://openreview.net/forum?id=XDkOn0iTiH)]
      * UMass Amherst
      * Introduce **ProTrain**, an automatic memory management system that adaptively configures memory-saving techniques for LLM training without manual tuning or system expertise.
  * Fault Tolerance
    * GUARD: Scalable Straggler Detection and Node Health Management for Large-Scale Training \[[Paper](https://openreview.net/forum?id=JFEwQ821MS)]
      * Meta
      * Present **Guard**, a scalable system for detecting fail-slow stragglers and managing node health during frontier-scale foundation model training on tens of thousands of GPUs.
    * Sparing Strategies to Minimize Reliability Impact On Large Training Jobs \[[Paper](https://openreview.net/forum?id=18jPgte2tM)]
      * Meta
      * Present an analytical framework for optimizing sparing strategies (compute block size, spare count, spare GPU trays) to minimize reliability impact on Meta's large-scale LLM training jobs.
  * RL Post-Training
    * Beat the long tail: Distribution-Aware Speculative Decoding for RL Training \[[Paper](https://openreview.net/forum?id=kMeqqPBjSl)]
      * Together AI & Stanford & UCSD
      * Identify rollout length long-tail as a major bottleneck in RL training and apply distribution-aware speculative decoding to accelerate the generation phase.
    * HetRL: Efficient Reinforcement Learning for LLMs in Heterogeneous Environments \[[Paper](https://openreview.net/forum?id=LRLyuaz1W7)]
      * Amazon
      * Propose **HetRL**, a system for efficient LLM reinforcement learning across heterogeneous GPU environments with multi-generation hardware.
    * ReSpec: Towards Optimizing Speculative Decoding in Reinforcement Learning Systems \[[Paper](https://openreview.net/forum?id=HhDSxs7x2R)]
      * NTU & HPC-AI Tech
      * Identify critical gaps in integrating speculative decoding into RL systems (diminishing speedups, drafter staleness, draft-verification misalignment) and propose **ReSpec** to address them.
  * Heterogeneous Training
    * HexiScale: Facilitating Large Language Model Training over Heterogeneous Hardware \[[Paper](https://openreview.net/forum?id=KgcqSNio0U)]
      * PKU & HKUST & Cambridge
      * Propose **HexiScale**, a system supporting asymmetric partition of training computations across heterogeneous GPUs with flexible data, tensor, and pipeline parallelism.
    * Zorse: Optimizing LLM Training Efficiency on Heterogeneous GPU Clusters \[[Paper](https://openreview.net/forum?id=40leuGH3iO)]
      * U Waterloo & Microsoft
      * Propose **Zorse** for optimizing LLM training on heterogeneous GPU clusters through careful workload partitioning across different GPU generations.
    * FlexTrain: Scalable Hybrid-Parallel Training with Elastic Resource Utilization and Consistent Accuracy \[[Paper](https://openreview.net/forum?id=h2yhNcbwSL)]
      * CUHK-SZ & ByteDance
      * Propose **FlexTrain**, an elastic training system that dynamically adjusts GPU allocations to harness idle resources while maintaining accuracy consistency with minimal profiling overhead.
  * Data Pipeline
    * Matrix: Peer-to-Peer Multi-Agent Synthetic Data Generation Framework \[[Paper](https://openreview.net/forum?id=ok96wGyPdI)]
      * Meta
      * Present **Matrix**, a peer-to-peer multi-agent framework for scalable synthetic data generation with decentralized orchestration eliminating central bottlenecks.

* LLM Inference
  * Speculative Decoding
    * Accelerating Large-Scale Reasoning Model Inference with Sparse Self-Speculative Decoding \[[Paper](https://openreview.net/forum?id=yeqrwcWjPu)]
      * CMU & MIT & UC Berkeley
      * Propose sparse self-speculative decoding that exploits activation sparsity in reasoning models for lossless inference acceleration without auxiliary draft models.
    * PRISM: Parametrically Refactor Inference for Speculative Decoding Draft Models \[[Paper](https://openreview.net/forum?id=cvU2HuuxEf)]
      * CUHK & ICT, CAS
      * Propose **PRISM**, which parametrically refactors draft models for speculative decoding to balance draft quality and computational overhead.
    * SpecDiff-2: Scaling Diffusion Drafter Alignment For Faster Speculative Decoding \[[Paper](https://openreview.net/forum?id=o42VU86ZsV)]
      * UVA
      * Propose **SpecDiff-2**, scaling diffusion drafter alignment for speculative decoding to enable parallel drafting and reduce token rejections.
    * Speculative Decoding: Performance or Illusion? \[[Paper](https://openreview.net/forum?id=fzkqtezFEi)]
      * UC Berkeley
      * Present the first systematic study of speculative decoding on production-grade inference engines (vLLM), revealing practical limitations at realistic batch sizes and workloads.
  * KV Cache Management
    * Kitty: Accurate and Efficient 2-bit KV Cache Quantization with Dynamic Channel-wise Precision Boost \[[Paper](https://openreview.net/forum?id=r3mQiuYKIN)]
      * Together AI & U Sydney
      * Propose **Kitty**, an algorithm-system co-design for mixed-precision 2-bit KV cache quantization with dynamic channel-wise precision boost that maintains accuracy on long-context reasoning.
    * FlexiCache: Leveraging Temporal Stability of Attention Heads for Efficient KV Cache Management \[[Paper](https://openreview.net/forum?id=GgX6dPJx9M)]
      * UC Irvine
      * Propose **FlexiCache**, exploiting temporal stability variations of critical tokens across KV heads for efficient per-head cache management policies.
    * OPKV: A High-Throughput Plugin-Driven Framework for Recallable Sparsity in Paged KV Cache Systems \[[Paper](https://openreview.net/forum?id=EB5bgzv4qA)]
      * SEU & GDUT
      * Propose **OPKV**, a high-throughput plugin-driven framework for recallable KV cache sparsity that scales recall efficiency under high batch sizes.
    * SkipKV: Selective Skipping of KV Generation and Storage for Efficient Inference with Large Reasoning Models \[[Paper](https://openreview.net/forum?id=cJcZKzdwkP)]
      * USC & Intel
      * Propose **SkipKV**, selectively skipping KV generation and storage for thinking tokens in reasoning models to reduce cache overhead without degrading accuracy.
    * Using Span Queries to Optimize Cache and Attention Locality \[[Paper](https://openreview.net/forum?id=qcGGSXpFcM)]
      * IBM Research
      * Propose span queries as a unified abstraction for non-linear KV cache access patterns, improving cache hit rates across diverse inference workflows beyond chat completion.
    * MorphServe: Efficient and Workload-Aware LLM Serving via Runtime Quantized Layer Swapping and KV Cache Resizing \[[Paper](https://openreview.net/forum?id=PDu13oOl4G)]
      * GMU & UVA
      * Present **MorphServe**, a dynamic LLM serving framework that swaps quantized layers and resizes KV caches at runtime to adapt to workload fluctuations while meeting SLOs.
  * Request Scheduling
    * PLA-Serve: A Prefill-Length-Aware LLM Serving System \[[Paper](https://openreview.net/forum?id=dzjCkSEDyG)]
      * MBZUAI
      * Propose **PLA-Serve**, a prefill-length-aware serving system that disaggregates requests by prompt length for adaptive scheduling to reduce TTFT latency.
    * SuperInfer: SLO-Aware Rotary Scheduling and Memory Management for LLM Inference on Superchips \[[Paper](https://openreview.net/forum?id=RuslSHdIHa)]
      * Microsoft
      * Propose **SuperInfer**, an SLO-aware serving system with rotary scheduling and NVLink-based KV cache offloading on superchips to sustain responsiveness under high request rates.
    * BatchLLM: Optimizing Large Batched LLM Inference with Global Prefix Sharing and Throughput-oriented Token Batching \[[Paper](https://openreview.net/forum?id=IuVHde07l6)]
      * Microsoft
      * Propose **BatchLLM**, optimizing large-batch offline LLM inference with global prefix sharing and throughput-oriented token batching.
    * Stream2LLM: Overlap Context Streaming and Prefill for Reduced Time-to-First-Token \[[Paper](https://openreview.net/forum?id=FuRo7Ur5Ib)]
      * UW
      * Propose **Stream2LLM**, overlapping context retrieval with LLM prefill computation via streaming to reduce time-to-first-token under concurrent requests.
    * BEAM: Joint Resource–Power Optimization for Energy-Efficient LLM Inference under SLO contraints \[[Paper](https://openreview.net/forum?id=BfNBXM8CCT)]
      * KAIST
      * Propose **BEAM**, jointly optimizing resource allocation and power management for energy-efficient LLM inference while meeting latency SLOs.
  * Long-Context Inference
    * ContextPilot: Fast Long-Context Inference via Context Reuse \[[Paper](https://openreview.net/forum?id=RnKvDy1jv2)]
      * U Edinburgh
      * Propose **ContextPilot**, accelerating long-context inference through context reuse that preserves reasoning quality while improving KV cache utilization.
    * MAC-Attention: a Match--Amend--Complete scheme for fast and accurate attention computation \[[Paper](https://openreview.net/forum?id=b6HBRCejb7)]
      * Ohio State & Google
      * Propose **MAC-Attention**, reusing prior attention computations for semantically similar queries to accelerate long-context decoding without fidelity or access loss.
  * Sparsity
    * Attribution-based Sparse Activation in Large Language Models \[[Paper](https://openreview.net/forum?id=gJFigZeb5D)]
      * U Pittsburgh & NTU
      * Propose attribution-based sparse activation for runtime-adaptive lossless neuron deactivation without model retraining, adapting to different tasks and inputs.
    * BLASST: Dynamic BLocked Attention Sparsity via Softmax Thresholding \[[Paper](https://openreview.net/forum?id=6INSBXTQ4x)]
      * NVIDIA & MIT
      * Introduce **BLASST**, a drop-in dynamic sparse attention mechanism that uses a fixed scalar threshold to skip attention blocks, accelerating long-context inference.
  * Quantization
    * MixLLM: LLM Quantization with Global Mixed-precision between Output-features and Highly-efficient System Design \[[Paper](https://openreview.net/forum?id=VBbMRQ4VOc)]
      * Microsoft
      * Propose **MixLLM**, exploring global mixed-precision quantization between output features based on per-feature importance for efficient LLM compression.
    * Search Your Block Floating Point Scales! \[[Paper](https://openreview.net/forum?id=innqECyZPK)]
      * Cornell & Together AI
      * Propose **ScaleSearch**, optimizing block floating point scales beyond the default max-magnitude choice to reduce quantization error for low-precision inference.
    * CAGE: Curvature-Aware Gradient Estimation For Accurate Quantization-Aware Training \[[Paper](https://openreview.net/forum?id=Fubm1TtWeo)]
      * IST Austria
      * Introduce **CAGE**, a curvature-aware gradient estimation method for quantization-aware training that bridges the accuracy gap with native-precision training via multi-objective optimization.
  * Prefill-Decode Disaggregation
    * Beyond the Buzz: A Pragmatic Take on Inference Disaggregation \[[Paper](https://openreview.net/forum?id=NqC5tcBsa0)]
      * NVIDIA
      * Present the first systematic study of prefill-decode disaggregated inference at scale, revealing the complexity of the optimization space and coordination challenges for production deployment.
    * TokenWeave: Efficient Compute-Communication Overlap for Distributed LLM Inference \[[Paper](https://openreview.net/forum?id=rh2Ylffkq6)]
      * MSR India
      * Propose **TokenWeave**, achieving practical compute-communication overlap for tensor-parallel LLM serving with minimal integration effort into existing engines.
    * TriInfer: Hybrid EPD Disaggregation for Efficient Multimodal Large Language Model Inference \[[Paper](https://openreview.net/forum?id=nNovi8fvGN)]
      * Beihang
      * Propose **TriInfer**, a hybrid encode-prefill-decode disaggregation system for multimodal LLM inference with stage-aware resource management and SLO guarantees.
  * Retrieval-Augmented Generation (RAG)
    * TeleRAG: Efficient Retrieval-Augmented Generation Inference with Lookahead Retrieval \[[Paper](https://openreview.net/forum?id=YsOyCpMUYD)]
      * UW & CMU & UC Berkeley
      * Propose **TeleRAG**, a lookahead retrieval system that preloads embeddings to reduce RAG latency and improve throughput with minimal GPU memory overhead.
  * Heterogeneous/Edge Inference
    * ExecuTorch - A Unified PyTorch Solution to Run ML Models On-Device \[[Paper](https://openreview.net/forum?id=jmE5nwC9kb)]
      * Meta
      * Introduce **ExecuTorch**, a unified PyTorch-native framework for deploying ML models across heterogeneous edge devices with portable compilation and hardware delegation.
    * Efficient, VRAM-Constrained xLM Inference on Clients \[[Paper](https://openreview.net/forum?id=VKqQYg6JPb)]
      * Intel
      * Enable efficient lossless inference of large language and vision models on VRAM-constrained client systems through adaptive CPU-GPU partitioning.
    * Rethinking DVFS for Mobile LLMs: Unified Energy-Aware Scheduling with CORE \[[Paper](https://openreview.net/forum?id=PSyHQ8kVUT)]
      * CUHK & Purdue & SJTU
      * Propose **CORE**, a unified energy-aware scheduling framework for mobile LLMs that coordinates DVFS decisions across heterogeneous compute units.
    * Locality-Aware Beam Scheduling for Efficient Test-Time Compute with a Consumer-grade GPU \[[Paper](https://openreview.net/forum?id=dTo8jAXm9K)]
      * National Taiwan U
      * Propose locality-aware beam scheduling for efficient test-time compute on consumer GPUs by managing the expanding KV cache during step-wise beam search.
    * SHIP: SRAM-Based Huge Inference Pipelines for Fast LLM Serving \[[Paper](https://openreview.net/forum?id=IZaXDwDtL1)]
      * Groq
      * Present the first large-scale SRAM-based LLM inference deployment (Groq's public cloud) serving hundreds of billions of tokens daily with deterministic latency guarantees.
    * Dataflow Is All You Need \[[Paper](https://openreview.net/forum?id=7wOOhxkuN8)]
      * SambaNova
      * Demonstrate that dataflow architectures achieve superior memory bandwidth utilization for autoregressive LLM decoding compared to GPU-based systems.
  * Profiling
    * ProfInfer: An eBPF-based Fine-Grained LLM Inference Profiler \[[Paper](https://openreview.net/forum?id=tYHWS7YPof)]
      * SJTU
      * Develop **ProfInfer**, a non-intrusive eBPF-based profiler providing fine-grained operator-level visibility into LLM inference engines at runtime.
    * Optimizing Deployment Configurations for LLM Inference \[[Paper](https://openreview.net/forum?id=gEbKQeIdxB)]
      * Meta
      * Present a systematic framework for navigating Meta's production LLM deployment configuration space across hardware, parallelism strategies, and runtime choices.
    * DriftBench: Measuring and Predicting Infrastructure Drift in LLM Serving Systems \[[Paper](https://openreview.net/forum?id=Xfzzp6grRP)]
      * Gianluigi Vitale
      * Present **DriftBench**, a measurement and prediction framework for assessing output consistency risks when LLM serving infrastructure changes across hardware, precision, and frameworks.
    * Breaking the Ice: Analyzing Cold Start Latency in vLLM \[[Paper](https://openreview.net/forum?id=eoEobeKTNZ)]
      * VU Amsterdam & TU Darmstadt
      * Present the first detailed performance analysis of cold start latency in vLLM, identifying key bottlenecks in the engine startup process.
    * Charon: A Unified and Fine-Grained Simulator for Large-Scale LLM Training and Inference \[[Paper](https://openreview.net/forum?id=19O6GAS7Su)]
      * Mengtian Yang
      * Introduce **Charon**, a unified modular simulator for accurately predicting LLM training and inference performance across parallelism strategies and hardware configurations.
  * Fault Tolerance
    * GhostServe: A Lightweight Checkpointing System in the Shadow for Fault-Tolerant LLM Serving \[[Paper](https://openreview.net/forum?id=xKjYiUgeOK)]
      * UCF
      * Present **GhostServe**, a lightweight checkpointing system for fault-tolerant LLM serving that protects long-running agent tasks against hardware and software failures.
    * RaidServe: High-performance Resilient Serving \[[Paper](https://openreview.net/forum?id=5pl9fdbEkq)]
      * Stanford
      * Present **RaidServe**, a fault-tolerant tensor-parallel serving system that sustains high performance under GPU failures through computation and memory rebalancing.
  * Automatic Configuration
    * Meeting SLOs, Slashing Hours: Automated Enterprise LLM Optimization with OptiKIT \[[Paper](https://openreview.net/forum?id=om4H7AI2hc)]
      * Nicholas Santavas
      * Present **OptiKIT**, an automated system for enterprise LLM optimization that enables teams to efficiently deploy models across heterogeneous GPU infrastructure without specialized expertise.
  * Live Inference
    * AIRS: Scaling Live Inference in Resource Constrained Environments \[[Paper](https://openreview.net/forum?id=g1RWik4Gy1)]
      * Microsoft
      * Present **AIRS**, a system for scaling LLM-based live inference for search quality evaluation under resource-constrained environments.
  * Serverless
    * FaaScale: Unlocking Fast LLM Scaling for Serverless Inference \[[Paper](https://openreview.net/forum?id=jgL8LuOVyT)]
      * CUHK-SZ & UVA & HKUST & Alibaba & Nokia Bell Labs
      * Present **FaaScale**, a serverless LLM system enabling fast model scaling through pipelined multicast inference that synergizes data transfer with cross-node pipeline execution.
  * Multi-model Serving
    * BOute: Cost-Efficient LLM Serving with Heterogeneous LLMs and GPUs via Multi-Objective Bayesian Optimization \[[Paper](https://openreview.net/forum?id=ZVQb92umqX)]
      * Cambridge
      * Propose **BOute**, using multi-objective Bayesian optimization for cost-efficient LLM serving across heterogeneous models and GPUs with joint routing and placement.
    * HELIOS: Adaptive Model And Early-Exit Selection for Efficient LLM Inference Serving \[[Paper](https://openreview.net/forum?id=CV52m9NJFK)]
      * UT Austin & NVIDIA
      * Propose **HELIOS**, adaptively selecting models and early-exit layers across multiple early-exit LLMs to improve inference throughput beyond single-model serving.
  * Agent Serving
    * FlashAgents: Accelerating Multi-Agent LLM Systems via Streaming Prefill Overlap \[[Paper](https://openreview.net/forum?id=m14PPUfgEc)]
      * ICT, CAS & Microsoft
      * Propose **FlashAgents**, accelerating multi-agent LLM workflows through token-level streaming and prefix-aware prefill overlap between sequential agents.
    * AgenticCache: Cache-Driven Asynchronous Planning for Embodied AI Agents \[[Paper](https://openreview.net/forum?id=UfABxFoSXH)]
      * Stanford
      * Introduce **AgenticCache**, a cache-driven asynchronous planning framework that reuses cached plan transitions to avoid per-step LLM calls for embodied agents.
    * Ontology-Guided Long-Term Agent Memory for Conversational RAG \[[Paper](https://openreview.net/forum?id=wpZHLPz4N0)]
      * Sharon Cao
      * Present an ontology-guided dialogue-aware RAG system that jointly addresses what to store and how to retrieve for long-term multi-session agent memory.
    * Hippocampus: An Efficient and Scalable Memory Module for Agentic AI \[[Paper](https://openreview.net/forum?id=0sUYZh9D4a)]
      * HP Labs
      * Introduce **Hippocampus**, an agentic memory system using compact binary signatures for semantic search and lossless token-ID streams for scalable content storage.

* MoE Training
  * MoEBlaze: Breaking the Memory Wall for Efficient MoE Training on Modern GPUs \[[Paper](https://openreview.net/forum?id=L8qKfWWkry)]
    * Meta
    * Propose **MoEBlaze**, breaking the memory wall for MoE training by addressing activation memory overheads from sparse routing buffers and intermediate tensor buffering on GPUs.
  * FP8-Flow-MoE: A Casting-Free FP8 Recipe without Double Quantization Error \[[Paper](https://openreview.net/forum?id=wyH60Su6G7)]
    * Fengjuan Wang
    * Propose **FP8-Flow-MoE**, a casting-free FP8 dataflow for MoE training that eliminates redundant quantize-dequantize conversions while avoiding double quantization error.
  * FarSkip-Collective: Unhobbling Blocking Communication in Mixture of Experts Models \[[Paper](https://openreview.net/forum?id=ruOpvLzsGV)]
    * NVIDIA
    * Present **FarSkip-Collective**, modifying MoE architecture with skip connections to enable overlapping computation with blocking all-to-all communication.
* MoE Inference
  * CRAFT: Fine-Grained Cost-Aware Expert Replication For Efficient Mixture-of-Experts Serving \[[Paper](https://openreview.net/forum?id=zdRvzU9ZCe)]
    * UofT & AWS
    * Propose **CRAFT**, a fine-grained cost-aware expert replication strategy for MoE serving that balances load across devices in large-scale deployments.
  * From Tokens to Layers: Redefining Stall-Free Scheduling for MoE Serving with Layered Prefill \[[Paper](https://openreview.net/forum?id=yyDbI3HXco)]
    * SNU
    * Propose layered prefill, redefining stall-free scheduling for MoE serving by splitting along the layer dimension to avoid expert-induced load imbalance.
  * Demystifying the Mixture of Experts Serving Tax \[[Paper](https://openreview.net/forum?id=lELxqcgrsN)]
    * UW
    * Comprehensively study the MoE serving tax, finding MoE models perform 2-3x worse than FLOP-equivalent dense models, and categorize the underlying overhead sources.

### Deep Learning Compilation

* Compiler
  * ApproxMLIR : Accuracy-Aware Compiler for Compound ML System \[[Paper](https://openreview.net/forum?id=nKm25GWbuB)]
    * UIUC
    * Propose **ApproxMLIR**, an accuracy-aware compiler for compound ML systems that enables end-to-end quality-performance tradeoffs across ML and non-ML components.
  * Wave: A Symbolic Python DSL And Compiler for High-Performance Machine Learning \[[Paper](https://openreview.net/forum?id=gcXV1E8HRH)]
    * AMD
    * Introduce **Wave**, a Python-embedded DSL for GPU kernel authoring that automates complex address computations for matrix cores while matching or surpassing state-of-the-art performance.
  * CATWILD: Compiler Autotuning for TPU workloads in the Wild \[[Paper](https://openreview.net/forum?id=hB3nov3gIP)]
    * Google
    * Present **CATWILD**, a compiler autotuning system for diverse production TPU workloads using ML-guided search to optimize configurations at scale.
  * DynaFlow: Transparent and Flexible Intra-Device Parallelism via Programmable Operator Scheduling \[[Paper](https://openreview.net/forum?id=i0yqC9954S)]
    * CMU & UC Berkeley
    * Present **DynaFlow**, enabling transparent intra-device parallelism via programmable operator scheduling without invasive model-specific code changes.
  * Event Tensor: A Unified Abstraction for Compiling Dynamic Megakernel \[[Paper](https://openreview.net/forum?id=PJqFhAbUHa)]
    * CMU
    * Present **Event Tensor**, a unified compiler abstraction for dynamic megakernels that handles dynamic shapes and data-dependent computation to eliminate kernel launch overheads.
* Kernel Optimization
  * AccelOpt: A Self-Improving LLM Agentic System for AI Accelerator Kernel Optimization \[[Paper](https://openreview.net/forum?id=SBS4NJHYjZ)]
    * Stanford & UofT & AWS
    * Present **AccelOpt**, a self-improving LLM agentic system that autonomously optimizes kernels for AI accelerators through iterative generation with optimization memory.
  * Agentic Operator Generation for ML ASICs \[[Paper](https://openreview.net/forum?id=O3Bx0nNGnW)]
    * Meta
    * Present **TritorX**, an agentic AI system that generates correct Triton kernels at scale for Meta's MTIA accelerator using LLMs with compilation-based validation.
  * Optimizing PyTorch Inference with LLM-Based Multi-Agent Systems \[[Paper](https://openreview.net/forum?id=MJxhiX3sSd)]
    * LBNL
    * Study LLM-based multi-agent systems for GPU kernel optimization, analyzing dynamics and effectiveness compared to existing compilers and manual development.
* Attention
  * FlashAttention-4: Algorithm and Kernel Pipelining Co-Design for Asymmetric Hardware Scaling \[[Paper](https://openreview.net/forum?id=mN5RtvuYl3)]
    * Together AI & NVIDIA
    * Propose **FlashAttention-4**, co-designing algorithm and kernel pipelining for Blackwell GPUs where tensor core throughput growth outpaces memory bandwidth.
  * Flashlight: PyTorch Compiler Extensions to Accelerate Attention Variants \[[Paper](https://openreview.net/forum?id=lboOMA8XWr)]
    * UW & UT Austin
    * Present **Flashlight**, PyTorch compiler extensions that automatically generate efficient implementations for diverse attention variants through composable primitives.
  * IntAttention: A Fully Integer Attention Pipeline for Efficient Edge Inference \[[Paper](https://openreview.net/forum?id=CPCRITwAaP)]
    * SUSTech
    * Propose **IntAttention**, a fully integer attention pipeline eliminating the costly dequantize-softmax-requantize detour for end-to-end integer dataflow on edge hardware.

### Diffusion / Generative Models

* StreamDiffusionV2: A Streaming System for Dynamic and Interactive Video Generation \[[Paper](https://openreview.net/forum?id=p9WALNBvc6)]
  * MIT & UC Berkeley & Stanford
  * Present **StreamDiffusionV2**, a streaming system for real-time dynamic and interactive video generation with temporal consistency built on video diffusion advances.
* CDLM: Consistency Diffusion Language Models for Faster Sampling \[[Paper](https://openreview.net/forum?id=eB8yjR6alL)]
  * UC Berkeley & Together AI
  * Introduce **CDLM**, applying consistency modeling to diffusion language models for faster sampling with fewer refinement steps and KV caching support.
* db-SP: Accelerating Sparse Attention for Visual Generative Models with Dual-Balanced Sequence Parallelism \[[Paper](https://openreview.net/forum?id=XgKteNxNe0)]
  * THU
  * Propose **db-SP**, a dual-balanced sequence parallelism scheme for accelerating sparse attention in DiT models with improved workload balance across head and block dimensions.

### GPU Systems

* GPU Programming
  * HipKittens: Fast and Furious AMD Kernels \[[Paper](https://openreview.net/forum?id=xxSSrndQrI)]
    * Stanford & AMD
    * Port ThunderKittens to AMD GPUs via HIP, enabling high-performance tile-based AI kernel development on AMD hardware with hardware-aware primitives.
  * ParallelKittens: Systematic and Practical Simplification of Multi-GPU AI Kernels \[[Paper](https://openreview.net/forum?id=Cv5e5uRXFb)]
    * Stanford
    * Propose **ParallelKittens**, a set of simple reusable principles for systematically designing multi-GPU kernels with optimal compute-communication overlap.
  * Spira: Exploiting Voxel Data Structural Properties for Efficient Sparse Convolution in Point Cloud Networks \[[Paper](https://openreview.net/forum?id=YQMilw805Q)]
    * NTUA & UofT
    * Propose **Spira**, exploiting voxel data structural properties (integer-valued, bounded, geometrically continuous) for efficient sparse convolution in point cloud networks.
* Profiling
  * XProf: An Open, Scalable, and Extensible Profiling System for the Modern ML Stack \[[Paper](https://openreview.net/forum?id=KqRLAdGK6C)]
    * Google
    * Present **XProf**, an open ML profiler for the OpenXLA ecosystem providing actionable optimization suggestions and full-stack performance analysis across TPUs and GPUs.
  * Hawkeye: Reproducing GPU-Level Non-Determinism \[[Paper](https://openreview.net/forum?id=JnmgsTFQQv)]
    * Stanford & Hebrew U
    * Present **Hawkeye**, a system for reproducing GPU-level arithmetic operations on CPU to analyze and verify non-determinism in ML training and inference workflows.
* Confidential Computing
  * Blueprint, Bootstrap, and Bridge: A Security Look at NVIDIA GPU Confidential Computing \[[Paper](https://openreview.net/forum?id=t9RDCO1aL7)]
    * IBM Research & Ohio State
    * Provide the first comprehensive security analysis of NVIDIA GPU Confidential Computing by reconstructing the architecture from firmware and driver analysis.

### Communication

* A Lightweight High-Throughput Collective-Capable NoC for Large-Scale ML Accelerators \[[Paper](https://openreview.net/forum?id=VDuS8N9RCx)]
  * ETH Zurich
  * Present a lightweight collective-capable Network-on-Chip supporting efficient barrier, broadcast, reduce, and scatter operations for large-scale on-chip ML accelerator arrays.
* fabric-lib: RDMA Point-to-Point Communication for LLM Systems \[[Paper](https://openreview.net/forum?id=SjVa05wEiY)]
  * Nandor Licker
  * Present **fabric-lib**, a uniform RDMA-based messaging layer bridging diverse NICs to provide portable point-to-point communication for disaggregated LLM inference and MoE routing.

### Resource Management

* Machine Learning Fleet Efficiency: Improving TPU Systems at Scale with ML Productivity Goodput \[[Paper](https://openreview.net/forum?id=y31QSL9yMG)]
  * Google & Harvard
  * Introduce a systematic framework for analyzing ML fleet efficiency on Google's production TPU infrastructure, revealing performance dependencies across the full system stack.
* SAKURAONE: An Open Ethernet–Based AI HPC System and Its Observed Workload Dynamics in a Single-Tenant LLM Development Environment \[[Paper](https://openreview.net/forum?id=n7o6C3p3wk)]
  * SAKURA Internet
  * Present **SAKURAONE**, an open Ethernet-based AI HPC system (TOP500 #49) using vendor-neutral 800 GbE with SONiC networking, with workload analysis from single-tenant LLM training.

### Recommendation Systems

* FreeScale: Distributed Training for Sequence Recommendation Models with Minimal Scaling Cost \[[Paper](https://openreview.net/forum?id=MY0BIdK4hn)]
  * Meta
  * Introduce **FreeScale**, a distributed training system for sequence recommendation models that minimizes scaling cost by addressing computational bubbles from data heterogeneity and straggler imbalance.

## Acronyms

* BFP: Block Floating Point
* CP: Context Parallelism
* DiT: Diffusion Transformer
* FSDP: Fully Sharded Data Parallel
* KV: Key-Value
* LLM: Large Language Model
* LoRA: Low-Rank Adaptation
* MoE: Mixture-of-Experts
* NoC: Network-on-Chip
* PD: Prefill-Decode
* QAT: Quantization-Aware Training
* RAG: Retrieval-Augmented Generation
* RL: Reinforcement Learning
* SLO: Service Level Objective
* TPU: Tensor Processing Unit
