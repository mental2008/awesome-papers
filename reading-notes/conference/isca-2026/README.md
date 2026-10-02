# ISCA 2026

## Meta Info

Homepage: [https://iscaconf.org/isca2026/](https://iscaconf.org/isca2026/)

Paper list: [https://www.iscaconf.org/isca2026/program/](https://www.iscaconf.org/isca2026/program/)

## Papers

### Large Language Models (LLMs)

* LLM Inference
  * Accelerator Architectures
    * MLX: Multi-Layer Execution for Structured LLM Workload Acceleration on Spatial Architectures
      * ICT, CAS & KAUST
      * Structured butterfly projections expose dependencies and limited bulk parallelism, making them difficult to map efficiently to GPUs.
      * **MLX** co-designs semantic-aware FFT compression, hierarchical sparse projections, and a spatial dataflow architecture with closed dependency components, bounded-hop routing, and decoupled compute/transfer.
      * A 12nm prototype reports 3.2x speedup and 3.1x energy savings over Jetson Xavier, with near-linear scaling on an 8x8 mesh.
  * MoE Inference
    * Patterns Behind Chaos: Forecasting Data Movement for Efficient Large-Scale MoE LLM Inference
      * UCSD & Indiana University Bloomington & Columbia University & Samsung & NVIDIA
      * **Best Paper Award**
      * Random expert selection makes data movement the dominant bottleneck in multi-unit MoE serving.
      * Profiles four 200B–1000B MoE models across more than 24,000 requests, extracting temporal and spatial principles for system design.
      * Lightweight wafer-scale changes achieve 6.6x average speedup, while prefill-aware expert placement reaches up to 1.25x on existing GPUs.
    * Accelerating MoE with Dynamic In-Switch Computing on Multi-GPUs
      * HKUST & SJTU & Huawei & PKU
      * Existing NVLink SHARP targets static collectives and cannot directly handle MoE’s dynamic, irregular expert destinations.
      * **DySHARP** adds dynamic multimem addressing across the ISA, hardware, and runtime, then fuses dispatch, expert computation, and combine around token-level dependencies.
      * The token-centric pipeline balances the asymmetric traffic directions and reports up to 1.79x speedup.
    * DIAMoND: Dynamic Inference for Adaptive Edge MoE with Heterogeneous In-NAND and Near-DRAM Compute Architecture
      * PKU & Xiaomi
      * Edge MoE inference must hold very large parameter sets while serving single-batch decoding with high bandwidth demand and dynamic expert accesses.
      * **DIAMoND** integrates in-NAND and near-DRAM compute in a 2.5D package, using mask-based mapping for fixed NAND arrays and online in-NAND expert selection.
      * For Mixtral-8x7B, it reports 197.3 tokens/s and 5.8 tokens/J, with up to 9.7x the speed of GPU edge baselines.
    * STEP: Adaptive Spatio-Temporal Expert Prefetching for Low-Latency and Memory-Efficient MoE Inference
      * SJTU & ZJU & Alibaba
      * Sparse MoE reduces arithmetic work but introduces irregular expert accesses and high latency under constrained memory.
      * **STEP** uses layer-wise expert allocation based on computational importance, plus temporal/spatial locality-aware expert prediction and prefetching.
      * A token-aware adaptive window improves prefetch accuracy and yields up to 3.12x speedup without changing model accuracy.
    * SMoE: An Algorithm-System Co-Design for Pushing MoE to the Edge via Expert Substitution
      * NJU & THU & Honor
      * Dynamic expert offloading is costly on edge devices because device memory cannot hold the full MoE model.
      * **SMoE** replaces low-importance activated experts with functionally similar experts already cached on the GPU, and schedules requests to maximize cache reuse.
      * The design reduces decoding latency by 48%, achieves over 60% expert-cache hit rate, and keeps accuracy nearly lossless.
  * Speculative Decoding
    * Cassandra: Enabling Reasoning LLMs at Edge via Self-Speculative Decoding
      * KAIST
      * Low-batch edge reasoning workloads need speculative decoding, but an additional draft model and its state increase memory pressure.
      * **Cassandra** performs training-free self-speculation with fine-grained data selection, pruning, and mantissa truncation for draft weights and KV cache, followed by full-precision verification.
      * A lightweight encoder–decoder hardware module handles representation conversion; the design reports up to 2.41x BF16 speedup.
    * HybridSpec: Exploiting Hybrid-bonding Memory to Accelerate LLM Serving through Heterogeneous Architecture and Speculative Decoding
      * THU
      * Speculative decoding separates a bandwidth-hungry draft model from a capacity- and compute-hungry target model.
      * **HybridSpec** maps them to hybrid-bonding memory and LPDDR5X respectively, communicating only at draft–verification boundaries.
      * Asynchronous batching, utilization-aware speculation, and prefill–verification arbitration improve latency by 3.02x and energy efficiency by 1.96x over GPU baselines.
  * Long-Context Inference
    * Combating the Memory Walls: Optimization Pathways for Long-Context Agentic LLM Inference
      * Cambridge & ICL & Edinburgh
      * Agentic LLMs create both bandwidth and capacity walls as context and intermediate states grow across multi-step interactions.
      * **PLENA** combines asymmetric quantization units, a flattened systolic array with native FlashAttention support, and a custom ISA, compiler, simulator, and design-space exploration flow.
      * It supports GQA, MHA, MLA, dense, and MoE models, reaching up to 8.5x higher utilization than existing accelerators.
    * CHIME: A Case for Efficient Long-Context Attention-FC Disaggregated Inference with DIMM-PIM
      * SJTU
      * Attention–FC disaggregation is limited by an accelerator’s memory bandwidth or capacity, which prior designs do not balance explicitly.
      * **CHIME** introduces a disaggregated roofline model and integrates DIMM-PIM for the attention side of long-context inference.
      * Bubble-free pipelining, hybrid-grained re-layout, rankset-granular overlap, and alignment-predicting scheduling deliver up to 5.15x speedup over HBM-PIM solutions.
    * Tetris: Efficient Long-context LLM Serving with Chunkwise Dynamic Sequence Parallelism
      * PKU & ByteDance
      * Static sequence-parallelism choices over-allocate resources for some stages and leave fragmented capacity unused.
      * **Tetris** introduces chunkwise dynamic sequence parallelism, assigning different parallelism degrees to token segments and adapting expansion to current load.
      * It searches chunking plans to consume resource fragments, reducing TTFT by up to 4.35x and increasing maximum request capacity by 45%.
  * KV Cache and Model Compression
    * Approaching Shannon Bound with Lossless LLM Weight Compression
      * NUS & ETH Zurich
      * Quantized LLM weights contain substantial statistical redundancy beyond their nominal bit width, but general lossless compression does not align with GPU execution.
      * The design performs tile-level ANS compression and on-the-fly decompression aligned with GPU GEMM tiles, integrating with SGLang without changing weight values.
      * It expands feasible serving batch sizes and improves throughput by up to 1.2x/1.6x on representative models.
    * OASIS: Outlier-Aware LUT-Based GEMM with Dual-Side Quantization for LLM Inference Acceleration
      * Duke
      * Weight-only quantization incurs dequantization cost, while uniform weight-and-activation quantization can lose accuracy on non-uniform LLM distributions.
      * **OASIS** uses Cartesian-product LUTs to execute non-uniform weight-and-activation GEMM without dequantization, reducing LUT size and increasing parallelism.
      * Its outlier-aware quantization runs LUT computation with error compensation, while **Orizuru** performs real-time top-k outlier detection; the reported accuracy drop is 1.98% from FP16.
    * Omni-LUT: Energy-Efficient LUT-based Accelerator with Hardware-Aware KV Cache Quantization
      * National Yang Ming Chiao Tung University
      * Existing LUT accelerators mainly target activation–weight GEMM, leaving the activation–activation GEMM in long-context attention expensive.
      * **Omni-LUT** supports both GEMM types and combines offline calibration, lightweight online KV-cache quantization, and quantization compensation.
      * A phase-adaptive hybrid-stationary LUT systolic array improves energy efficiency by 1.25x–1.91x over a same-throughput LUT accelerator.
    * SingularBit: Exploiting Synergy of Singular Value Decomposition and Low-Bit Quantization for Weight and KV Compression in LLM Inference
      * KAIST
      * LLM inference faces a dual memory wall: repeated weight accesses and a growing KV cache compete for bandwidth and capacity.
      * **SingularBit** combines SVD with low-bit quantization for both offline weights and online KV cache, assigning precision according to singular-value, rank, token, and feature importance.
      * A rank-wise mixed-precision weight engine and a KV-cache compression engine specialize the two compression paths.
    * EVA: Accelerating LLM Decoding via an Efficient Vector Quantization Architecture
      * Duke
      * Vector-quantized decoding still suffers from low GEMV utilization, bank conflicts, and the cost of reconstructing quantized weights.
      * **EVA** directly computes input–codebook dot products, reformulates the operation as GEMM, and uses a structured conflict-free intermediate lookup compatible with prefill.
      * It reports up to 11.17x speedup and 7.17x energy-efficiency improvement over lookup-based architectures.
    * ENEC: A Lossless AI Model Compression Method Enabling Fast Inference on Ascend NPUs
      * ICT, CAS & UCAS & Huawei
      * On Ascend NPUs, model-weight transfer and decompression can dominate inference despite the weights being compressible.
      * **ENEC** uses block-based fixed-length lossless encoding with hierarchical bit-packing, vectorized branch-free integer transforms, and dependency-decoupled prefix-sum decoding.
      * It achieves 3.43x higher decompression throughput than DietGPU and up to 6.3x end-to-end speedup.
  * Heterogeneous and Edge Deployment
    * P3-LLM: An Integrated NPU-PIM Accelerator for Edge LLM Inference Using Hybrid Numerical Formats
      * Cornell & KU Leuven & Stanford
      * Edge LLM inference needs both NPU flexibility and PIM bandwidth, but conventional designs pay heavily for precision conversion and data movement.
      * **P3-LLM** co-designs an integrated NPU–PIM accelerator with mixed numerical formats for different operands, low-precision PIM units, and low-precision dataflow/operator fusion.
      * The reported average speedups are 4.9x, 2.0x, and 3.4x over HBM-PIM, Ecco, and PIMBA, respectively.
    * SMOOTH: Hardware-Assisted Fine-Grained On-Chip Memory Management for Efficient On-Device LLM Inference
      * DGIST & Samsung Research & Yonsei
      * Compiler-only tiling and lifetime allocation cannot fully handle bursty traffic and fragmentation during autoregressive decoding.
      * **SMOOTH** adds fine-grained block allocation and preloading, then uses buffer signals for hardware-assisted early reclamation of on-chip memory.
      * Evaluation reports 59.2% lower TTFT, 73% lower TTLT, and 51.2% lower average energy.
    * SHyLA: 3D-Stacked NVM-DRAM Hybrid LLM-Inference Architecture Exploiting Data and Memory Heterogeneity
      * THU & HiSilicon
      * NVM–DRAM hybrids must balance capacity and bandwidth while LLM parameters and KV caches have different access and placement requirements.
      * **SHyLA** jointly characterizes data and memory heterogeneity, places LLM data across 3D-stacked NVM/DRAM, and uses bandwidth-utilization-centric dataflow.
      * A two-stage design-space exploration maximizes throughput under per-user constraints, achieving up to 5.84x over DRAM-only and 6.03x over NVM-only baselines.
    * DynoPipe: Heterogeneous Edge-Cloud LLM Serving with Dynamically Orchestrated Pipeline Boundaries
      * UCAS & UCSD & University of Macau & SIAT, CAS
      * Static edge/cloud pipeline partitions break under resource heterogeneity and temporal volatility, while moving a boundary incurs state-transfer overhead.
      * **DynoPipe** uses boundary-constrained construction, proactive orchestration of multiple pipeline configurations, and hierarchical state management to move compute boundaries safely.
      * It reports 10.1x throughput over edge-only execution, 1.6x over cloud-only execution, and 99.2% lower latency in the evaluated settings.
    * Mapping and Communication Optimizations with Fault Tolerance for Wafer-Scale LLM Inference
      * HKUST-GZ
      * Wafer-scale LLM inference faces asymmetric mesh bandwidth, irregular communication, and failures that can invalidate otherwise good mappings.
      * **BusyBarn** uses hierarchical mapping based on Transformer and die-array symmetry, while **BALD** balances link load and distance for point-to-point and multicast traffic.
      * Fault tolerance is integrated into the mapping and communication optimization; communication improves by up to 2.55x in the reported evaluation.
    * ConServe: Contiguity-Preserving Memory Management for Multi-Turn LLM Serving
      * UC Riverside
      * PagedAttention reduces physical fragmentation but scatters a conversation’s KV cache, increasing address-translation overhead in multi-turn serving.
      * **ConServe** reserves a contiguous virtual-address slice per conversation, maps physical pages on demand with CUDA VMM, and grows the slice through lazy copy-free remapping.
      * It reports up to 74.4% lower TTFT and 35.1% higher end-to-end throughput than vLLM.
    * AQuant: Repurposing CODEC for VLM Acceleration via Adaptive Quantization
      * SJTU & KAUST
      * VLM image/video inputs contain many similar visual tokens, but generic quantization misses this redundancy and pays repeated floating-point comparison/conversion costs.
      * **AQuant** converts similar tokens into delta values, detects similarity from exponent information, and extends a video CODEC with a mixed-precision NPU.
      * The co-designed path reports 4.5x, 2.8x, and 6.9x speedups over LLM.265, CMC, and Xavier AGX, respectively, with negligible accuracy loss.
    * Bridging Efficiency and Scalability in LLM System via 3D Hybrid PIM with 2D In-Transit Computation
      * THU & HKUST & University of Macau & Guangdong Institute of Intelligence Science and Technology & Lynxi Technologies
      * DRAM-PIM offers capacity and parallelism but suffers inter-bank communication overhead, while SRAM-PIM offers low latency but limited capacity.
      * **CompAir** combines DRAM-PIM and SRAM-PIM through hybrid bonding, and **CompAirNoC** embeds arithmetic units in the NoC to perform nonlinear operations during data movement.
      * A hierarchical ISA provides programmability; the system reports 1.83x–7.98x faster prefill, 1.95x–6.28x faster decoding, and 3.52x lower energy than GPU–PIM hybrids.
    * Symbiotic MLLM Serving: Dynamically Balancing Parallelism Across GPUs and Resources Within GPUs
      * ICT, CAS & TJU & Beijing University of Technology & UIUC & University of Aberdeen & University of Leeds
      * MLLM encoders have input-dependent compute and small memory footprints, while decoders are memory- and compute-intensive; static placement leaves interference and slack.
      * **Resonator** shares SM/HBM resources between encoder and decoder within a GPU, and selects encoder DP or TP across GPUs using resolution, batch size, and a performance atlas.
      * It reports up to 5.1x lower TTFT, 3x lower TPOT, 4.9x lower end-to-end latency, and 3.4x higher throughput.
  * Workload Characterization
    * Understanding Inference Scaling for LLMs: Bottlenecks, Trade-offs, and Performance Principles
      * Micron & Argonne National Laboratory
      * Industry Track
      * Reasoning-centric inference generates long chains of tokens, shifting the system from prefill-heavy compute pressure toward a capacity-bound regime.
      * Characterizes 8B–671B models across data, tensor, and pipeline parallelism, exposing a capacity trap for data parallelism caused by fragmented KV cache and a tensor-parallel crossover near 32B.
      * Dense frontier models become memory-bandwidth/interconnect-bound, while MoE models are limited by routing and synchronization and benefit from hybrid parallelism.
* LLM Training
  * Scheduling and Parallelism
    * Scalable Synthesis of Distributed LLM Workloads Through Symbolic Tensor Graphs
      * Georgia Tech & NVIDIA
      * Real execution traces are expensive to collect, tied to existing platforms, and difficult to extrapolate to future model or cluster configurations.
      * **STAGE** represents LLM modules and tensor distributions symbolically, propagating partition, duplication, and partial-sum semantics to generate compute and collective communication graphs.
      * It synthesizes tensor-accurate traces for dense and MoE workloads at up to 32K GPUs and supports systematic parallel-strategy exploration.
    * DisDP: Disaggregating Compute, Network, and Storage for Model-Sharded Data-Parallel Training
      * ZJU
      * Model-sharded data parallelism reduces GPU capacity requirements but serializes GEMM, collective communication, and optimizer-state storage operations.
      * **DisDP** fully disaggregates these resources: SmartNICs/SmartSwitches execute collectives, while a switch-enhanced parameter server provides scalable optimizer-state access.
      * On eight GPUs training a 175B model, it reports 3.98x speedup over state-of-the-art training systems.
  * MoE Training
    * MoE-Hub: Taming Software Complexity for Seamless MoE Overlap with Hardware-Accelerated Communication on Multi-GPU Systems
      * SJTU & Huawei & PKU
      * MoE routing produces dynamic token-to-expert mappings, whereas GPU communication expects static destination addresses and requires software mediation before transfer.
      * **MoE-Hub** decouples data transmission from address allocation: producers send by logical destination, and GPU-hub hardware allocates addresses, manages packets, and signals data availability.
      * The design reports 1.40x–3.08x per-layer and 1.21x–1.98x end-to-end speedups over software-only baselines.

### Recommendation Models

* LoKA: Low-precision Kernel Applications for Recommendation Models At Scale
  * Meta AI
  * Recommendation models are numerically sensitive, dominated by small GEMMs and normalization, and communication-intensive during training, so direct FP8 adoption can hurt quality and runtime.
  * **LoKA Probe** learns activation/weight statistics online and quantifies per-layer error to identify safe and profitable FP8 sites.
  * **LoKA Mods** improves numerical stability and execution efficiency, while **LoKA Dispatch** selects the fastest kernel that satisfies accuracy constraints.

### Deep Learning Compilation

* Kernel Generation
  * KernelEvolve: Scaling Agentic Kernel Coding for Heterogeneous AI Accelerators at Meta \[[Personal Notes](kernelevolve.md)] \[[arXiv](https://arxiv.org/abs/2512.23236)] \[[Blog](https://engineering.fb.com/2026/04/02/developer-tools/kernelevolve-how-metas-ranking-engineer-agent-optimizes-ai-infrastructure/)]
    * Meta
    * Present **KernelEvolve**, an agentic kernel coding framework that automates kernel generation and optimization from kernel specifications across heterogeneous AI accelerators.
    * Combine tree-search-based kernel exploration, retrieval-augmented hardware knowledge injection, and profiling-driven evaluation feedback in a single optimization loop.
    * Validate 100% correctness on 160 ATen operators across H100, MI350, and MTIA v3, and achieve a 100% pass rate on all 250 KernelBench problems.
* Architecture-Aware Optimization
  * QiMeng-Tensify: Scaling up Tensor Computation Optimization via Architecture-Aware LLM-Guided MCTS
    * USTC & ICT, CAS & IS, CAS & Cambricon Technologies
    * LLM tensor graphs contain hundreds or thousands of operators and dynamic control flow, making manual optimization and flat autotuning difficult to scale.
    * **QiMeng-Tensify** formulates graph-level tensor optimization as sequential decision making and uses architecture-aware LLM guidance with Monte Carlo tree search.
    * It searches transformations and schedules across the full graph while incorporating target-architecture feedback, outperforming common compiler and autotuning baselines in the reported evaluation.
* Compilers
  * CODO: An Automated Compiler for Comprehensive Dataflow Optimization
    * SJTU
    * FPGA dataflow designs can be functionally invalid or inefficient because coarse/fine-grained dependencies, on/off-chip movement, and resource limits interact.
    * **CODO** detects and eliminates dataflow violations, optimizes memory movement, and automatically schedules kernels while balancing bandwidth, resources, and latency.
    * It reports 1.45x–4.52x kernel-latency improvements, 3.7x–33.8x faster DNN synthesis, and board-level gains on CNN and GPT-2 workloads.
  * Graph.hls: A Compiler Framework for Composable Graph Accelerator Design
    * PKU & SJTU
    * Existing graph-accelerator optimizations are scattered across incompatible HLS frameworks, while hardware emulation makes validation slow.
    * **Graph.hls** organizes design parameters into a hierarchy by modification cost and exposes a DSL for composing algorithm, platform, and implementation optimizations.
    * **GH-Architect** generates resource-aware hardware and **GH-Scope** validates designs through IR-level simulation; the framework reports 2.6x average speedup over ReGraph and 301.6x faster simulation than vendor C-Sim.
  * DCC: Data-Centric Compilation of Machine Learning Kernels for Processing-In-Memory Architectures
    * UofT & Barcelona Supercomputing Center & ETH Zurich & NVIDIA & Max Planck Institute for Software Systems
    * Host processors and PIM cores prefer different data layouts, so data rearrangement can dominate the kernel and cannot be optimized independently of compute partitioning.
    * **DCC** provides a multi-layer PIM abstraction and jointly searches data distribution, loop partitioning, PIM-specific code transformations, and schedules across backends.
    * Its predictor selects end-to-end schedules, reporting up to 7.68x speedup on HBM-PIM, 13.17x on AttAcc, and up to 7.71x for LLaMA-2 inference over GPU-only execution.

### GPU Systems

* GPU Memory Management
  * Observability-aided GPU Memory Oversubscription
    * Indian Institute of Science
    * UVM drivers observe faults for non-resident pages but lack visibility into accesses to pages already resident in HBM, limiting eviction and prefetch decisions.
    * **ObservUVM** repurposes hardware access counters originally used for PCIe/CPU-DRAM tracking to provide sampled observability of HBM-resident GPU accesses.
    * The userspace framework enables policy exploration and reports 34% geometric-mean speedup over the UVM baseline across 14 applications.
  * Coarse-Grained Duplication First, Fine-Grained Deduplication Later: Duplication-Centric Multi-GPU Memory Management
    * UC Santa Cruz & University of Rochester
    * Multi-GPU UVM suffers from remote-access overhead, but modern NVLink behavior favors coarse transfers while indiscriminate duplication wastes memory and increases update traffic.
    * **CDFD** first duplicates data at coarse granularity to use available bandwidth, then selectively deduplicates fine-grained regions to reduce unnecessary remote updates.
    * It uses idle GPU memory capacity and dynamic refinement to improve performance by 66% over GPS and 65% over GRIT on average.
  * Reducing Page Faults via Invalidation-based Mapping Propagation in Multi-GPU Systems
    * Yonsei & UCSD
    * During UVM migration, non-destination GPUs receive invalidations but not the new mapping, so later accesses trigger redundant page faults and page-table walks.
    * **ShadowUpdate** propagates the new mapping in the existing invalidation broadcast and uses an in-flight migration tracker to hold translation requests until the copy completes.
    * Across 14 multi-GPU UVM workloads, it improves overall performance by 1.40x over the baseline design.
  * LIBRA: A High-Accuracy, Cost-Aware, and Coordinated Multi-GPU Page Prefetcher
    * UC Santa Cruz & University of Rochester
    * Existing multi-GPU prefetchers can mispredict access patterns and repeatedly move pages between GPUs, while ignoring whether remote access is cheaper than migration.
    * **LIBRA** combines stride-based prediction with benefit/cost estimation and coordinates prefetch requests using predicted demand and current page locations.
    * It reports 30% and 35% improvements over reactive GRIT and predictive Forest migration methods, respectively.
* GPU Communication
  * RoCC: Harnessing Raster Operations Pipeline for Efficient Tensor Collective Communication
    * UC Merced & UC Riverside
    * GPU collective communication competes with tensor computation for the same execution resources, limiting overlap in distributed LLM workloads.
    * **RoCC** reverse-engineers raster-operations pipelines and offloads collective reductions and messaging to these underutilized, memory-adjacent units.
    * Small hardware extensions provide asynchronous collective execution, enabling fine-grained communication/computation overlap without consuming the main compute pipelines.
* Performance Modeling
  * PIPEWEAVE: Synergizing Analytical and Learning Models for Unified GPU Performance Prediction
    * SJTU & Alibaba
    * Purely data-driven models generalize poorly across GPU generations, while analytical models struggle with production kernels and nonlinear microarchitectural interactions.
    * **PIPEWEAVE** extracts analytical demand features for heterogeneous GPU instruction pipelines and feeds them to an MLP that learns cross-pipeline dependencies.
    * It reports 6.1% average kernel-level error and 8.5% end-to-end inference error across 11 GPUs, and uses the model to guide a 1.7x fused-MoE-kernel optimization.
* Reliability
  * RangeGuard: Efficient, Bounded Approximate Error Correction for Reliable DNNs
    * Sungkyunkwan University
    * Multi-bit DRAM faults can create extreme numerical outliers that are amplified by attention, residual, and normalization layers even when small perturbations are tolerable.
    * **RangeGuard** stores compact range identifiers instead of protecting every raw bit, focusing redundancy on range changes that indicate harmful semantic errors.
    * Upon detection, it restores the range and substitutes a representative value; 16 parity bits tolerate 64+ flipped bits without noticeable accuracy loss in the reported evaluation.
* Energy Efficiency
  * PowerGrad: Hierarchical Power Management for Power-Limited ML Inference Clusters
    * UIUC & UNC Chapel Hill & IBM & AMD
    * Power-limited clusters need to allocate a shared power budget without prior workload profiling, especially when every node is individually oversubscribed.
    * **PowerGrad** estimates each workload’s performance gradient from hardware measurements, then uses local and hierarchical controllers to move power from low-gradient to high-gradient workloads.
    * It reduces average and tail latency by 22.9% and 23.0% on dual-CPU nodes, and by 9.0% and 9.9% on accelerated single-CPU nodes.
  * Power Sloshing in Compound Servers for Large-Scale AI Inference Workloads
    * Georgia Tech & Meta
    * Production AI services show large power variation across models, time, and CPU/GPU components, making fixed per-server limits either wasteful or performance-limiting.
    * The paper characterizes compound servers and studies dynamic power-limit exchange, or “power sloshing,” across components according to workload demand.
    * Controlled sloshing saves up to 30% power in experiments; the automated fleet-level algorithm targets up to 11% savings without degrading QoS.
  * PowerWeave: Unlocking Energy-Efficient ML on GPUs with OS-Level Spatial Power Management
    * CMU
    * A single device-wide DVFS domain is poorly matched to GPU workloads that mix compute-bound prefill, memory-bound decode, and multiple co-located streams.
    * **PowerWeave** adds a transparent OS-level governor that learns per-stream frequency/latency behavior and adjusts spatial GPU DVFS using request rate, tail latency, and SLO slack.
    * It reduces energy by 28% on average in evaluated serving settings, reaches up to 8x improvement over device-wide DVFS, and avoids SLO violations.

### PIM and Near-Data Processing

* ML and LLM Acceleration
  * MERIDIAN: In-Memory Acceleration for RAG with Document Attention Decomposition
    * HUST & ICT, CAS & UNSW Sydney
    * Cached document K/V removes repeated encoding in RAG, but centralized KV reuse causes large off-chip transfers and leaves short-query GEMM/GEMV hardware underutilized.
    * **MERIDIAN** decomposes document attention across PIM memory modules: each module stores a K/V shard, computes local attention, and returns a compact partial summary for global aggregation.
    * A resource-conscious PIM substrate and coordination-aware hybrid scheduler improve both intra-device execution and inter-device scaling, with up to 6.64x throughput improvement over evaluated baselines.
  * Bringing Near Data Processing into the Low-Bit Floating-Point Era
    * THU & ICL & Nankai University & Institute of Microelectronics, CAS & Li Auto & Shanghai AI Lab & HKUST
    * Low-bit floating-point NDP must handle fine-grained scale access, DRAM row-buffer misses, and frequent high-precision dequantization.
    * **FlexQ-NDP** provides a low-bit-FP simulation/compiler stack with scale–value-interleaved layout and instruction reordering that hides dequantization latency.
    * Lightweight search-space pruning adapts compilation to quantization configurations and reports up to 3.29x speedup over existing NDP compilation strategies.
  * Early Silicon of Raptor: The First 3D-DRAM Accelerator for Generative Inference
    * d-Matrix & UBC
    * Generative decoding is memory-bound, while SRAM lacks capacity and HBM is constrained by bandwidth and power; 3D-DRAM integration also introduces mapping, power, reliability, and thermal challenges.
    * **Raptor** addresses them with stream-blocking for KV-cache channels, pinless DBI on the single-cycle microbump interface, topology-preserving redundancy with thermal-aware refresh, and interleaved ECC.
    * Across Llama, DeepSeek, Kimi, GPT-OSS, Whisper, and Canary, its 3D-DRAM configuration delivers 4.71x the throughput of HBM and 2.44x that of SRAM configurations.

### AI Accelerators

* Industry Systems
  * M100: An Orchestrated Dataflow Architecture Powering General AI Computing
    * Li Auto
    * Industry Track
    * GPGPUs provide flexibility at high cost, while narrow DSAs struggle to follow rapidly changing autonomous-driving and generative-AI models.
    * **M100** uses compiler/runtime-managed tensor streams, largely eliminates caching, and chooses the tensor as the common scheduling and execution granularity.
    * The architecture is evaluated across autonomous-driving, LLM, and intelligent-interaction inference, demonstrating a general dataflow path across these workloads.
  * MTIA 300: Meta’s First Training Chip Featuring Built-in NICs and Collective Offloading Engines
    * Meta
    * Industry Track
    * Recommendation-model training is communication-heavy because huge embedding tables require frequent AllReduce, AllToAll, and AllGather operations that compete with GPU computation.
    * **MTIA 300** integrates NIC chiplets on-package and dedicates message engines with near-memory reduction logic to execute collectives independently of the compute grid; HCCL compiles their dependencies and topology-aware schedules.
    * Meta reports up to 940 GB/s intra-rack communication and less than 0.5% compute degradation during concurrent collectives; a production 150B model runs communication 3.9x faster than an equivalent GPU cluster.
* LLM and Generative AI Accelerators
  * UniCore: A Bit-Width Scalable GEMM Unit for Unified LLM Inference
    * HKUST-GZ
    * LLM layers have different quantization sensitivities, but fixed-function units support few formats and naïvely composable multipliers grow hardware resources quadratically.
    * **UniCore** introduces composable S-FPMA adder slices with linear scaling, format conversion and dual-path compensation, plus the distribution-adaptive **DynFP** format.
    * It reports 1.24x–3.95x higher area efficiency for W4A4/W4A8/W8A8 and up to 5.26x for W16A16 over prior composable-multiplier designs.
  * XtraMAC: An Efficient MAC Architecture for Mixed-Precision LLM Inference on FPGA
    * NUS
    * Mixed-precision LLM execution requires runtime datatype changes, while fixed-datatype FPGA MACs and coarse resource sharing underutilize DSPs.
    * **XtraMAC** decomposes integer, floating-point, and mixed-precision MACs into a shared integer-mantissa product with lightweight sign/exponent handling and dynamic operand packing.
    * On an AMD Xilinx U55c, it achieves 1.4x–2.0x compute density, reduces LUT/FF/DSP use by 27%–51%, and improves energy efficiency by up to 1.9x.
  * DiTPA: A DiT-based Action Planner Accelerator Exploiting Action–Denoising–Multimodality Redundancy for Embodied Artificial Intelligence
    * HKUST
    * DiT-based action planners may generate hundreds of actions per task, with each action requiring 10–50 denoising steps, preventing real-time embodied-AI deployment.
    * **DiTPA** exploits orientation-conditioned action reuse, alternating denoising with feature reuse, and calibrated approximation from modality lifespan and attention sparsity.
    * Its action predictor, reconfigurable PE array, and multimodal scheduler reach 217.65 Hz at 1.05 W on LIBERO-Long while maintaining task success rate.
  * Dynamic Scheduling for AI Accelerators via TISA
    * Hunan University & EVAS Intelligence
    * Static compile-time schedules lose the operator boundaries, dependency types, and runtime contention information needed for heterogeneous accelerator utilization.
    * **TISA** preserves these semantics through lowering, encodes typed dependencies/resource intents/tile memory ranges, and uses a conflict-aware runtime to reorder tiles across tensor, vector, and DMA units.
    * It reports 1.52x–1.92x speedups over baseline schedules and 26.4% higher utilization than the state-of-the-art H100 implementation for FlashAttention-3.
