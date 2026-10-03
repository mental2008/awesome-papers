# ISCA 2026

## Meta Info

Homepage: [https://iscaconf.org/isca2026/](https://iscaconf.org/isca2026/)

Paper list: [https://www.iscaconf.org/isca2026/program/](https://www.iscaconf.org/isca2026/program/)

### Acceptance Rate

18.9% (= 161 / 850)

## Papers

### Large Language Models (LLMs)

* LLM Inference
  * Accelerator Architectures
    * MLX: Multi-Layer Execution for Structured LLM Workload Acceleration on Spatial Architectures \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00017)]
      * ICT, CAS & KAUST
      * Structured butterfly projections expose dependencies and limited bulk parallelism, making them difficult to map efficiently to GPUs.
      * **MLX** co-designs semantic-aware FFT compression, hierarchical sparse projections, and a spatial dataflow architecture with closed dependency components, bounded-hop routing, and decoupled compute/transfer.
      * A 12nm prototype reports 3.2x speedup and 3.1x energy savings over Jetson Xavier, with near-linear scaling on an 8x8 mesh.
    * SHyLA: 3D-Stacked NVM-DRAM Hybrid LLM-Inference Architecture Exploiting Data and Memory Heterogeneity \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00058)]
      * THU & HiSilicon
      * NVM–DRAM hybrids must balance capacity and bandwidth while LLM parameters and KV caches have different access and placement requirements.
      * **SHyLA** jointly characterizes data and memory heterogeneity, places LLM data across 3D-stacked NVM/DRAM, and uses bandwidth-utilization-centric dataflow.
      * A two-stage design-space exploration maximizes throughput under per-user constraints, achieving up to 5.84x over DRAM-only and 6.03x over NVM-only baselines.
    * Bridging Efficiency and Scalability in LLM System via 3D Hybrid PIM with 2D In-Transit Computation \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00182)]
      * THU & HKUST & University of Macau & Guangdong Institute of Intelligence Science and Technology & Lynxi Technologies
      * DRAM-PIM offers capacity and parallelism but suffers inter-bank communication overhead, while SRAM-PIM offers low latency but limited capacity.
      * **CompAir** combines DRAM-PIM and SRAM-PIM through hybrid bonding, and **CompAirNoC** embeds arithmetic units in the NoC to perform nonlinear operations during data movement.
      * A hierarchical ISA provides programmability; the system reports 1.83x–7.98x faster prefill, 1.95x–6.28x faster decoding, and 3.52x lower energy than GPU–PIM hybrids.
  * MoE Inference
    * Patterns Behind Chaos: Forecasting Data Movement for Efficient Large-Scale MoE LLM Inference \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00021)] \[[arXiv](https://arxiv.org/abs/2510.05497)] \[[Code](https://github.com/zhongkaiyu/waferscale_gpu_moe_sim)] \[[Trace](https://huggingface.co/datasets/core12345/MoE_expert_selection_trace)]
      * UCSD & Indiana University Bloomington & Columbia & Samsung & NVIDIA
      * **Best Paper Award**
      * Random expert selection makes data movement the dominant bottleneck in multi-unit MoE serving.
      * Profiles four 200B–1000B MoE models across more than 24,000 requests, extracting temporal and spatial principles for system design.
      * Lightweight wafer-scale changes achieve 6.6x average speedup, while prefill-aware expert placement reaches up to 1.25x on existing GPUs.
    * STEP: Adaptive Spatio-Temporal Expert Prefetching for Low-Latency and Memory-Efficient MoE Inference \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00101)]
      * SJTU & ZJU & Alibaba
      * Sparse MoE reduces arithmetic work but introduces irregular expert accesses and high latency under constrained memory.
      * **STEP** uses layer-wise expert allocation based on computational importance, plus temporal/spatial locality-aware expert prediction and prefetching.
      * A token-aware adaptive window improves prefetch accuracy and yields up to 3.12x speedup without changing model accuracy.
  * Speculative Decoding
    * HybridSpec: Exploiting Hybrid-bonding Memory to Accelerate LLM Serving through Heterogeneous Architecture and Speculative Decoding \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00054)]
      * THU
      * Speculative decoding separates a bandwidth-hungry draft model from a capacity- and compute-hungry target model.
      * **HybridSpec** maps them to hybrid-bonding memory and LPDDR5X respectively, communicating only at draft–verification boundaries.
      * Asynchronous batching, utilization-aware speculation, and prefill–verification arbitration improve latency by 3.02x and energy efficiency by 1.96x over GPU baselines.
  * Long-Context Inference
    * Combating the Memory Walls: Optimization Pathways for Long-Context Agentic LLM Inference \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00023)] \[[arXiv](https://arxiv.org/abs/2509.09505)] \[[Code](https://github.com/AICrossSim/PLENA_Simulator)]
      * Cambridge & ICL & Edinburgh
      * Agentic LLMs create both bandwidth and capacity walls as context and intermediate states grow across multi-step interactions.
      * **PLENA** combines asymmetric quantization units, a flattened systolic array with native FlashAttention support, and a custom ISA, compiler, simulator, and design-space exploration flow.
      * It supports GQA, MHA, MLA, dense, and MoE models, reaching up to 8.5x higher utilization than existing accelerators.
  * Attention–FFN Disaggregation (AFD)
    * CHIME: A Case for Efficient Long-Context Attention-FC Disaggregated Inference with DIMM-PIM \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00056)] \[[arXiv](https://arxiv.org/abs/2504.17584)]
      * SJTU
      * Attention–FC disaggregation is limited by an accelerator’s memory bandwidth or capacity, which prior designs do not balance explicitly.
      * **CHIME** introduces a disaggregated roofline model and integrates DIMM-PIM for the attention side of long-context inference.
      * Bubble-free pipelining, hybrid-grained re-layout, rankset-granular overlap, and alignment-predicting scheduling deliver up to 5.15x speedup over HBM-PIM solutions.
  * Parallelism and Partitioning
    * Tetris: Efficient Long-context LLM Serving with Chunkwise Dynamic Sequence Parallelism \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00098)] \[[arXiv](https://arxiv.org/abs/2511.06247)]
      * PKU & ByteDance
      * Static sequence-parallelism choices over-allocate resources for some stages and leave fragmented capacity unused.
      * **Tetris** introduces chunkwise dynamic sequence parallelism, assigning different parallelism degrees to token segments and adapting expansion to current load.
      * It searches chunking plans to consume resource fragments, reducing TTFT by up to 4.35x and increasing maximum request capacity by 45%.
  * KV Cache Management
    * ConServe: Contiguity-Preserving Memory Management for Multi-Turn LLM Serving \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00075)]
      * UC Riverside
      * PagedAttention reduces physical fragmentation but scatters a conversation’s KV cache, increasing address-translation overhead in multi-turn serving.
      * **ConServe** reserves a contiguous virtual-address slice per conversation, maps physical pages on demand with CUDA VMM, and grows the slice through lazy copy-free remapping.
      * It reports up to 74.4% lower TTFT and 35.1% higher end-to-end throughput than vLLM.
  * Compression
    * Approaching Shannon Bound with Lossless LLM Weight Compression \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00024)] \[[arXiv](https://arxiv.org/abs/2606.15789)]
      * NUS & ETH Zurich
      * Quantized LLM weights contain substantial statistical redundancy beyond their nominal bit width, but general lossless compression does not align with GPU execution.
      * The design performs tile-level ANS compression and on-the-fly decompression aligned with GPU GEMM tiles, integrating with SGLang without changing weight values.
      * It expands feasible serving batch sizes and improves throughput by up to 1.2x/1.6x on representative models.
    * OASIS: Outlier-Aware LUT-Based GEMM with Dual-Side Quantization for LLM Inference Acceleration \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00036)] \[[arXiv](https://arxiv.org/abs/2507.23035)]
      * Duke
      * Weight-only quantization incurs dequantization cost, while uniform weight-and-activation quantization can lose accuracy on non-uniform LLM distributions.
      * **OASIS** uses Cartesian-product LUTs to execute non-uniform weight-and-activation GEMM without dequantization, reducing LUT size and increasing parallelism.
      * Its outlier-aware quantization runs LUT computation with error compensation, while **Orizuru** performs real-time top-k outlier detection; the reported accuracy drop is 1.98% from FP16.
    * Omni-LUT: Energy-Efficient LUT-based Accelerator with Hardware-Aware KV Cache Quantization \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00037)]
      * National Yang Ming Chiao Tung University
      * Existing LUT accelerators mainly target activation–weight GEMM, leaving the activation–activation GEMM in long-context attention expensive.
      * **Omni-LUT** supports both GEMM types and combines offline calibration, lightweight online KV-cache quantization, and quantization compensation.
      * A phase-adaptive hybrid-stationary LUT systolic array improves energy efficiency by 1.25x–1.91x over a same-throughput LUT accelerator.
    * SingularBit: Exploiting Synergy of Singular Value Decomposition and Low-Bit Quantization for Weight and KV Compression in LLM Inference \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00079)]
      * KAIST
      * LLM inference faces a dual memory wall: repeated weight accesses and a growing KV cache compete for bandwidth and capacity.
      * **SingularBit** combines SVD with low-bit quantization for both offline weights and online KV cache, assigning precision according to singular-value, rank, token, and feature importance.
      * A rank-wise mixed-precision weight engine and a KV-cache compression engine specialize the two compression paths.
    * EVA: Accelerating LLM Decoding via an Efficient Vector Quantization Architecture \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00102)] \[[arXiv](https://arxiv.org/abs/2605.24144)] \[[Code](https://github.com/dbw6/Eva)]
      * Duke
      * Vector-quantized decoding still suffers from low GEMV utilization, bank conflicts, and the cost of reconstructing quantized weights.
      * **EVA** directly computes input–codebook dot products, reformulates the operation as GEMM, and uses a structured conflict-free intermediate lookup compatible with prefill.
      * It reports up to 11.17x speedup and 7.17x energy-efficiency improvement over lookup-based architectures.
    * ENEC: A Lossless AI Model Compression Method Enabling Fast Inference on Ascend NPUs \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00100)] \[[arXiv](https://arxiv.org/abs/2604.03298)] \[[Code](https://github.com/hpdps-group/ENEC)]
      * ICT, CAS & UCAS & Huawei
      * On Ascend NPUs, model-weight transfer and decompression can dominate inference despite the weights being compressible.
      * **ENEC** uses block-based fixed-length lossless encoding with hierarchical bit-packing, vectorized branch-free integer transforms, and dependency-decoupled prefix-sum decoding.
      * It achieves 3.43x higher decompression throughput than DietGPU and up to 6.3x end-to-end speedup.
  * Mapping and Communication
    * Mapping and Communication Optimizations with Fault Tolerance for Wafer-Scale LLM Inference \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00076)] \[[Code](https://github.com/redbird-arch/isca2026-busybarn-artifact)]
      * HKUST-GZ
      * Wafer-scale LLM inference faces asymmetric mesh bandwidth, irregular communication, and failures that can invalidate otherwise good mappings.
      * **BusyBarn** uses hierarchical mapping based on Transformer and die-array symmetry, while **BALD** balances link load and distance for point-to-point and multicast traffic.
      * Fault tolerance is integrated into the mapping and communication optimization; communication improves by up to 2.55x in the reported evaluation.
  * Multimodal Inference
    * AQuant: Repurposing CODEC for VLM Acceleration via Adaptive Quantization \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00106)]
      * SJTU & KAUST
      * VLM image/video inputs contain many similar visual tokens, but generic quantization misses this redundancy and pays repeated floating-point comparison/conversion costs.
      * **AQuant** converts similar tokens into delta values, detects similarity from exponent information, and extends a video CODEC with a mixed-precision NPU.
      * The co-designed path reports 4.5x, 2.8x, and 6.9x speedups over LLM.265, CMC, and Xavier AGX, respectively, with negligible accuracy loss.
    * Symbiotic MLLM Serving: Dynamically Balancing Parallelism Across GPUs and Resources Within GPUs \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00173)]
      * ICT, CAS & TJU & Beijing University of Technology & UIUC & University of Aberdeen & University of Leeds
      * MLLM encoders have input-dependent compute and small memory footprints, while decoders are memory- and compute-intensive; static placement leaves interference and slack.
      * **Resonator** shares SM/HBM resources between encoder and decoder within a GPU, and selects encoder DP or TP across GPUs using resolution, batch size, and a performance atlas.
      * It reports up to 5.1x lower TTFT, 3x lower TPOT, 4.9x lower end-to-end latency, and 3.4x higher throughput.
  * Workload Characterization
    * Understanding Inference Scaling for LLMs: Bottlenecks, Trade-offs, and Performance Principles \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00084)] \[[arXiv](https://arxiv.org/abs/2605.19775)]
      * Micron & Argonne National Laboratory
      * Industry Track
      * Reasoning-centric inference generates long chains of tokens, shifting the system from prefill-heavy compute pressure toward a capacity-bound regime.
      * Characterizes 8B–671B models across data, tensor, and pipeline parallelism, exposing a capacity trap for data parallelism caused by fragmented KV cache and a tensor-parallel crossover near 32B.
      * Dense frontier models become memory-bandwidth/interconnect-bound, while MoE models are limited by routing and synchronization and benefit from hybrid parallelism.
* LLM Training
  * Scheduling and Parallelism
    * DisDP: Disaggregating Compute, Network, and Storage for Model-Sharded Data-Parallel Training \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00171)]
      * ZJU
      * Model-sharded data parallelism reduces GPU capacity requirements but serializes GEMM, collective communication, and optimizer-state storage operations.
      * **DisDP** fully disaggregates these resources: SmartNICs/SmartSwitches execute collectives, while a switch-enhanced parameter server provides scalable optimizer-state access.
      * On eight GPUs training a 175B model, it reports 3.98x speedup over state-of-the-art training systems.
  * MoE Training
    * Accelerating MoE with Dynamic In-Switch Computing on Multi-GPUs \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00074)] \[[arXiv](https://arxiv.org/abs/2605.05607)]
      * HKUST & SJTU & Huawei & PKU
      * Existing NVLink SHARP targets static collectives and cannot directly handle MoE’s dynamic, irregular expert destinations.
      * **DySHARP** adds dynamic multimem addressing across the ISA, hardware, and runtime, then fuses dispatch, expert computation, and combine around token-level dependencies.
      * The token-centric pipeline balances the asymmetric traffic directions and reports up to 1.79x speedup.
    * MoE-Hub: Taming Software Complexity for Seamless MoE Overlap with Hardware-Accelerated Communication on Multi-GPU Systems \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00172)] \[[arXiv](https://arxiv.org/abs/2605.05888)]
      * SJTU & Huawei & PKU
      * MoE routing produces dynamic token-to-expert mappings, whereas GPU communication expects static destination addresses and requires software mediation before transfer.
      * **MoE-Hub** decouples data transmission from address allocation: producers send by logical destination, and GPU-hub hardware allocates addresses, manages packets, and signals data availability.
      * The design reports 1.40x–3.08x per-layer and 1.21x–1.98x end-to-end speedups over software-only baselines.
* Workload Modeling and Characterization
  * Scalable Synthesis of Distributed LLM Workloads Through Symbolic Tensor Graphs \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00170)] \[[arXiv](https://arxiv.org/abs/2511.10480)] \[[Code](https://github.com/astra-sim/stage)]
    * Georgia Tech & NVIDIA
    * Real execution traces are expensive to collect, tied to existing platforms, and difficult to extrapolate to future model or cluster configurations.
    * **STAGE** represents LLM modules and tensor distributions symbolically, propagating partition, duplication, and partial-sum semantics to generate compute and collective communication graphs.
    * It synthesizes tensor-accurate traces for dense and MoE workloads at up to 32K GPUs and supports systematic parallel-strategy exploration.

### Recommendation Models

* LoKA: Low-precision Kernel Applications for Recommendation Models At Scale \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00103)] \[[arXiv](https://arxiv.org/abs/2605.10886)]
  * Meta AI
  * Recommendation models are numerically sensitive, dominated by small GEMMs and normalization, and communication-intensive during training, so direct FP8 adoption can hurt quality and runtime.
  * **LoKA Probe** learns activation/weight statistics online and quantifies per-layer error to identify safe and profitable FP8 sites.
  * **LoKA Mods** improves numerical stability and execution efficiency, while **LoKA Dispatch** selects the fastest kernel that satisfies accuracy constraints.

### Deep Learning Compilation

* Kernel Generation
  * KernelEvolve: Scaling Agentic Kernel Coding for Heterogeneous AI Accelerators at Meta \[[Personal Notes](kernelevolve.md)] \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00063)] \[[arXiv](https://arxiv.org/abs/2512.23236)] \[[Blog](https://engineering.fb.com/2026/04/02/developer-tools/kernelevolve-how-metas-ranking-engineer-agent-optimizes-ai-infrastructure/)]
    * Meta
    * Present **KernelEvolve**, an agentic kernel coding framework that automates kernel generation and optimization from kernel specifications across heterogeneous AI accelerators.
    * Combine tree-search-based kernel exploration, retrieval-augmented hardware knowledge injection, and profiling-driven evaluation feedback in a single optimization loop.
    * Validate 100% correctness on 160 ATen operators across H100, MI350, and MTIA v3, and achieve a 100% pass rate on all 250 KernelBench problems.
* Architecture-Aware Optimization
  * QiMeng-Tensify: Scaling up Tensor Computation Optimization via Architecture-Aware LLM-Guided MCTS \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00038)]
    * USTC & ICT, CAS & IS, CAS & Cambricon Technologies
    * LLM tensor graphs contain hundreds or thousands of operators and dynamic control flow, making manual optimization and flat autotuning difficult to scale.
    * **QiMeng-Tensify** formulates graph-level tensor optimization as sequential decision making and uses architecture-aware LLM guidance with Monte Carlo tree search.
    * It searches transformations and schedules across the full graph while incorporating target-architecture feedback, outperforming common compiler and autotuning baselines in the reported evaluation.
* Compilers
  * CODO: An Automated Compiler for Comprehensive Dataflow Optimization \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00018)] \[[arXiv](https://arxiv.org/abs/2604.12618)] \[[Code](https://github.com/sjtu-zhao-lab/codo-artifact)]
    * SJTU
    * FPGA dataflow designs can be functionally invalid or inefficient because coarse/fine-grained dependencies, on/off-chip movement, and resource limits interact.
    * **CODO** detects and eliminates dataflow violations, optimizes memory movement, and automatically schedules kernels while balancing bandwidth, resources, and latency.
    * It reports 1.45x–4.52x kernel-latency improvements, 3.7x–33.8x faster DNN synthesis, and board-level gains on CNN and GPT-2 workloads.
  * DCC: Data-Centric Compilation of Machine Learning Kernels for Processing-In-Memory Architectures \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00180)] \[[arXiv](https://arxiv.org/abs/2511.15503)] \[[Code](https://github.com/SPIN-Research-Group/DCC)]
    * UofT & Barcelona Supercomputing Center & ETH Zurich & NVIDIA & Max Planck Institute for Software Systems
    * Host processors and PIM cores prefer different data layouts, so data rearrangement can dominate the kernel and cannot be optimized independently of compute partitioning.
    * **DCC** provides a multi-layer PIM abstraction and jointly searches data distribution, loop partitioning, PIM-specific code transformations, and schedules across backends.
    * Its predictor selects end-to-end schedules, reporting up to 7.68x speedup on HBM-PIM, 13.17x on AttAcc, and up to 7.71x for LLaMA-2 inference over GPU-only execution.

### Resource Management

* Power Management
  * PowerGrad: Hierarchical Power Management for Power-Limited ML Inference Clusters \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00166)]
    * UIUC & UNC Chapel Hill & IBM & AMD
    * Power-limited clusters need to allocate a shared power budget without prior workload profiling, especially when every node is individually oversubscribed.
    * **PowerGrad** estimates each workload’s performance gradient from hardware measurements, then uses local and hierarchical controllers to move power from low-gradient to high-gradient workloads.
    * It reduces average and tail latency by 22.9% and 23.0% on dual-CPU nodes, and by 9.0% and 9.9% on accelerated single-CPU nodes.
  * Power Sloshing in Compound Servers for Large-Scale AI Inference Workloads \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00167)]
    * Georgia Tech & Meta
    * Production AI services show large power variation across models, time, and CPU/GPU components, making fixed per-server limits either wasteful or performance-limiting.
    * The paper characterizes compound servers and studies dynamic power-limit exchange, or “power sloshing,” across components according to workload demand.
    * Controlled sloshing saves up to 30% power in experiments; the automated fleet-level algorithm targets up to 11% savings without degrading QoS.

### GPU Systems

* GPU Memory Management
  * Observability-aided GPU Memory Oversubscription \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00108)] \[[Code](https://github.com/csl-iisc/ObservUVM)]
    * Indian Institute of Science
    * UVM drivers observe faults for non-resident pages but lack visibility into accesses to pages already resident in HBM, limiting eviction and prefetch decisions.
    * **ObservUVM** repurposes hardware access counters originally used for PCIe/CPU-DRAM tracking to provide sampled observability of HBM-resident GPU accesses.
    * The userspace framework enables policy exploration and reports 34% geometric-mean speedup over the UVM baseline across 14 applications.
  * Coarse-Grained Duplication First, Fine-Grained Deduplication Later: Duplication-Centric Multi-GPU Memory Management \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00109)]
    * UC Santa Cruz & University of Rochester
    * Multi-GPU UVM suffers from remote-access overhead, but modern NVLink behavior favors coarse transfers while indiscriminate duplication wastes memory and increases update traffic.
    * **CDFD** first duplicates data at coarse granularity to use available bandwidth, then selectively deduplicates fine-grained regions to reduce unnecessary remote updates.
    * It uses idle GPU memory capacity and dynamic refinement to improve performance by 66% over GPS and 65% over GRIT on average.
  * Reducing Page Faults via Invalidation-based Mapping Propagation in Multi-GPU Systems \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00110)]
    * Yonsei & UCSD
    * During UVM migration, non-destination GPUs receive invalidations but not the new mapping, so later accesses trigger redundant page faults and page-table walks.
    * **ShadowUpdate** propagates the new mapping in the existing invalidation broadcast and uses an in-flight migration tracker to hold translation requests until the copy completes.
    * Across 14 multi-GPU UVM workloads, it improves overall performance by 1.40x over the baseline design.
  * LIBRA: A High-Accuracy, Cost-Aware, and Coordinated Multi-GPU Page Prefetcher \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00158)]
    * UC Santa Cruz & University of Rochester
    * Existing multi-GPU prefetchers can mispredict access patterns and repeatedly move pages between GPUs, while ignoring whether remote access is cheaper than migration.
    * **LIBRA** combines stride-based prediction with benefit/cost estimation and coordinates prefetch requests using predicted demand and current page locations.
    * It reports 30% and 35% improvements over reactive GRIT and predictive Forest migration methods, respectively.
* GPU Communication
  * RoCC: Harnessing Raster Operations Pipeline for Efficient Tensor Collective Communication \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00094)] \[[Code](https://github.com/Yfeng-44/rocc-src)]
    * UC Merced & UC Riverside
    * GPU collective communication competes with tensor computation for the same execution resources, limiting overlap in distributed LLM workloads.
    * **RoCC** reverse-engineers raster-operations pipelines and offloads collective reductions and messaging to these underutilized, memory-adjacent units.
    * Small hardware extensions provide asynchronous collective execution, enabling fine-grained communication/computation overlap without consuming the main compute pipelines.
* Performance Modeling
  * PIPEWEAVE: Synergizing Analytical and Learning Models for Unified GPU Performance Prediction \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00126)] \[[arXiv](https://arxiv.org/abs/2601.14910)] \[[Code](https://github.com/zksainx/pipeweave)]
    * SJTU & Alibaba
    * Purely data-driven models generalize poorly across GPU generations, while analytical models struggle with production kernels and nonlinear microarchitectural interactions.
    * **PIPEWEAVE** extracts analytical demand features for heterogeneous GPU instruction pipelines and feeds them to an MLP that learns cross-pipeline dependencies.
    * It reports 6.1% average kernel-level error and 8.5% end-to-end inference error across 11 GPUs, and uses the model to guide a 1.7x fused-MoE-kernel optimization.
* Reliability
  * RangeGuard: Efficient, Bounded Approximate Error Correction for Reliable DNNs \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00097)] \[[arXiv](https://arxiv.org/abs/2605.04563)]
    * Sungkyunkwan University
    * Multi-bit DRAM faults can create extreme numerical outliers that are amplified by attention, residual, and normalization layers even when small perturbations are tolerable.
    * **RangeGuard** stores compact range identifiers instead of protecting every raw bit, focusing redundancy on range changes that indicate harmful semantic errors.
    * Upon detection, it restores the range and substitutes a representative value; 16 parity bits tolerate 64+ flipped bits without noticeable accuracy loss in the reported evaluation.
* Energy Efficiency
  * PowerWeave: Unlocking Energy-Efficient ML on GPUs with OS-Level Spatial Power Management \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00168)]
    * CMU
    * A single device-wide DVFS domain is poorly matched to GPU workloads that mix compute-bound prefill, memory-bound decode, and multiple co-located streams.
    * **PowerWeave** adds a transparent OS-level governor that learns per-stream frequency/latency behavior and adjusts spatial GPU DVFS using request rate, tail latency, and SLO slack.
    * It reduces energy by 28% on average in evaluated serving settings, reaches up to 8x improvement over device-wide DVFS, and avoids SLO violations.

### AI Accelerators

* Industry Systems
  * M100: An Orchestrated Dataflow Architecture Powering General AI Computing \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00082)] \[[arXiv](https://arxiv.org/abs/2604.17862)]
    * Li Auto
    * Industry Track
    * GPGPUs provide flexibility at high cost, while narrow DSAs struggle to follow rapidly changing autonomous-driving and generative-AI models.
    * **M100** uses compiler/runtime-managed tensor streams, largely eliminates caching, and chooses the tensor as the common scheduling and execution granularity.
    * The architecture is evaluated across autonomous-driving, LLM, and intelligent-interaction inference, demonstrating a general dataflow path across these workloads.
  * MTIA 300: Meta’s First Training Chip Featuring Built-in NICs and Collective Offloading Engines \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00085)]
    * Meta
    * Industry Track
    * Recommendation-model training is communication-heavy because huge embedding tables require frequent AllReduce, AllToAll, and AllGather operations that compete with GPU computation.
    * **MTIA 300** integrates NIC chiplets on-package and dedicates message engines with near-memory reduction logic to execute collectives independently of the compute grid; HCCL compiles their dependencies and topology-aware schedules.
    * Meta reports up to 940 GB/s intra-rack communication and less than 0.5% compute degradation during concurrent collectives; a production 150B model runs communication 3.9x faster than an equivalent GPU cluster.
* LLM and Generative AI Accelerators
  * UniCore: A Bit-Width Scalable GEMM Unit for Unified LLM Inference \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00176)] \[[Code](https://github.com/CLab-HKUST-GZ/isca53-unicore)]
    * HKUST-GZ
    * LLM layers have different quantization sensitivities, but fixed-function units support few formats and naïvely composable multipliers grow hardware resources quadratically.
    * **UniCore** introduces composable S-FPMA adder slices with linear scaling, format conversion and dual-path compensation, plus the distribution-adaptive **DynFP** format.
    * It reports 1.24x–3.95x higher area efficiency for W4A4/W4A8/W8A8 and up to 5.26x for W16A16 over prior composable-multiplier designs.
  * XtraMAC: An Efficient MAC Architecture for Mixed-Precision LLM Inference on FPGA \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00177)] \[[arXiv](https://arxiv.org/abs/2605.06052)] \[[Code](https://github.com/Xtra-Computing/XtraMAC)]
    * NUS
    * Mixed-precision LLM execution requires runtime datatype changes, while fixed-datatype FPGA MACs and coarse resource sharing underutilize DSPs.
    * **XtraMAC** decomposes integer, floating-point, and mixed-precision MACs into a shared integer-mantissa product with lightweight sign/exponent handling and dynamic operand packing.
    * On an AMD Xilinx U55c, it achieves 1.4x–2.0x compute density, reduces LUT/FF/DSP use by 27%–51%, and improves energy efficiency by up to 1.9x.
  * DiTPA: A DiT-based Action Planner Accelerator Exploiting Action–Denoising–Multimodality Redundancy for Embodied Artificial Intelligence \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00188)] \[[Code](https://github.com/fengbintu/ISCA2026-DiTPA)]
    * HKUST
    * DiT-based action planners may generate hundreds of actions per task, with each action requiring 10–50 denoising steps, preventing real-time embodied-AI deployment.
    * **DiTPA** exploits orientation-conditioned action reuse, alternating denoising with feature reuse, and calibrated approximation from modality lifespan and attention sparsity.
    * Its action predictor, reconfigurable PE array, and multimodal scheduler reach 217.65 Hz at 1.05 W on LIBERO-Long while maintaining task success rate.
* Runtime and Scheduling
  * Dynamic Scheduling for AI Accelerators via TISA \[[Paper](https://doi.org/10.1109/ISCA66397.2026.00174)]
    * Hunan University & EVAS Intelligence
    * Static compile-time schedules lose the operator boundaries, dependency types, and runtime contention information needed for heterogeneous accelerator utilization.
    * **TISA** preserves these semantics through lowering, encodes typed dependencies/resource intents/tile memory ranges, and uses a conflict-aware runtime to reorder tiles across tensor, vector, and DMA units.
    * It reports 1.52x–1.92x speedups over baseline schedules and 26.4% higher utilization than the state-of-the-art H100 implementation for FlashAttention-3.

## Acronyms

* AFD: Attention–FFN Disaggregation
* AI: Artificial Intelligence
* ANS: Asymmetric Numeral Systems
* CNN: Convolutional Neural Network
* CPU: Central Processing Unit
* CUDA: Compute Unified Device Architecture
* DIMM: Dual In-line Memory Module
* DiT: Diffusion Transformer
* DMA: Direct Memory Access
* DNN: Deep Neural Network
* DP: Data Parallelism
* DRAM: Dynamic Random-Access Memory
* DSA: Domain-Specific Architecture
* DSP: Digital Signal Processing
* DVFS: Dynamic Voltage and Frequency Scaling
* FC: Fully Connected
* FF: Flip-Flop
* FFN: Feed-Forward Network
* FFT: Fast Fourier Transform
* FP16: 16-bit Floating Point
* FP8: 8-bit Floating Point
* FPGA: Field-Programmable Gate Array
* GEMM: General Matrix-Matrix Multiplication
* GEMV: General Matrix-Vector Multiplication
* GPGPU: General-Purpose Computing on Graphics Processing Units
* GPU: Graphics Processing Unit
* GQA: Grouped-Query Attention
* HBM: High Bandwidth Memory
* ISA: Instruction Set Architecture
* KV: Key-Value
* LLM: Large Language Model
* LUT: Lookup Table
* MAC: Multiply-Accumulate
* MCTS: Monte Carlo Tree Search
* MHA: Multi-Head Attention
* ML: Machine Learning
* MLA: Multi-Head Latent Attention
* MLLM: Multimodal Large Language Model
* MLP: Multilayer Perceptron
* MoE: Mixture-of-Experts
* NIC: Network Interface Controller
* NoC: Network-on-Chip
* NPU: Neural Processing Unit
* NVM: Non-Volatile Memory
* OS: Operating System
* PCIe: Peripheral Component Interconnect Express
* PE: Processing Element
* PIM: Processing-in-Memory
* QoS: Quality of Service
* SHARP: [Scalable Hierarchical Aggregation and Reduction Protocol](https://networking-docs.nvidia.com/sharpum/380)
* SLO: Service Level Objective
* SM: Streaming Multiprocessor
* SVD: Singular Value Decomposition
* TP: Tensor Parallelism
* TPOT: Time Per Output Token
* TTFT: Time to First Token
* UVM: Unified Virtual Memory
* VLM: Vision-Language Model
* VMM: Virtual Memory Management
