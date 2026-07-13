# SOSP 2025

## Meta Info

Homepage: [https://sigops.org/s/conferences/sosp/2025/](https://sigops.org/s/conferences/sosp/2025/)

### Paper List

* [https://sigops.org/s/conferences/sosp/2025/accepted.html](https://sigops.org/s/conferences/sosp/2025/accepted.html)
* [https://dl.acm.org/doi/proceedings/10.1145/3731569](https://dl.acm.org/doi/proceedings/10.1145/3731569)

### Acceptance Rate

17.7% (= 65 / 368)

## Papers

### LLM

* LLM Training
  * Robust LLM Training Infrastructure at ByteDance \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764838)]
    * HKU & ByteDance Seed
    * **ByteRobust**
  * Mycroft: Tracing Dependencies in Collective Communication Towards Reliable LLM Training \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764848)]
    * CUHK & ByteDance & ByteDance Seed
    * A lightweight distributed tracing and root cause analysis system.
    * Trace collective communication states and leverage internal control and data dependencies.
  * DCP: Addressing Input Dynamism In Long-Context Training via Dynamic Context Parallelism \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764849)]
    * HKU & AWS
    * Introduce fine-grained blockwise partitioning of both data and computation.
  * TrainVerify: Equivalence-Based Verification for Distributed LLM Training \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764850)]
    * UMich & MSRA
    * Formally verify that a distributed parallel execution plan is mathematically equivalent to the logical specification.
    * Introduce a stage-wise parallel verification algorithm and shape-reduction techniques → Reduce complexity while preserving formal correctness.
* LLM Inference
  * Jenga: Effective Memory Management for Serving LLM with Heterogeneity \[[Personal Notes](jenga.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764823)] \[[arXiv](https://arxiv.org/abs/2503.18292)]
    * THU & UChicago & UC Berkeley
    * Two challenges
      * Recent models have heterogeneous embeddings with different sizes.
      * Some new architectures use only a subset of the prefix tokens to generate the next token.
    * Designs
      * Two-level memory allocator: choose the page size as least common multiple of token embedding sizes.
      * Enable attention variants to customize this mechanism by precisely specifying the exact prefix subset.
  * PrefillOnly: An Inference Engine for Prefill-only Workloads in Large Language Model Applications \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764834)] \[[arXiv](https://arxiv.org/abs/2505.07203)]
    * Chicago & THU & LinkedIn & UC Berkeley
    * Hybrid prefilling: Prefill non-attention layers chunk-by-chunk, but prefill the attention layers normally.
    * Suffix KV cache discarding / offloading: Discard the useless KV cache.
    * Continuous JCT calibration: Continuously reestimate the JCT of each request based on what requests are previously scheduled, and then schedule just one request with the lowest JCT.
  * IC-Cache: Efficient Large Language Model Serving via In-context Caching \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764829)]
    * UIUC & Google
    * Leverage historical request-response pairs from larger models as in-context examples.
  * Aegaeon: Effective GPU Pooling for Concurrent LLM Serving on the Market \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764815)]
    * PKU & Alibaba Cloud
    * Schedule multimodel requests and make auto-scaling decisions on a per-token basis to maximize service quality.
    * Reduce auto-scaling overhead through component reuse, explicit memory management, and fine-grained KV cache synchronization.
  * Characterizing Mobile SoC for Accelerating Heterogeneous LLM Inference \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764808)]
    * SJTU IPADS & THU & SenseTime
* LLM Applications
  * Pie: A Programmable Serving System for Emerging LLM Applications \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764814)]
    * Yale
    * Decompose the traditional generation loop into fine-grained service handlers exposed via an API and delegates control of the generation process to user-provided programs, called _inferlets_.
    * Enable applications to implement new KV cache strategies, bespoke generation logic, and seamlessly integrate computation and I/O—entirely within the application, without requiring modifications to the serving system.
* RAG Systems
  * METIS: Fast Quality-Aware RAG Systems with Configuration Adaptation \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764855)] \[[arXiv](https://arxiv.org/abs/2412.10543)]
    * Chicago & Princeton & MSR
    * Jointly schedule queries and adapt the key RAG configurations of each query (e.g., the number of retrieved text chunks, synthesis methods).
  * HeteRAG: Co-Optimizing Generation and Retrieval for Heterogeneous RAG Workflows \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764806)] \[[arXiv](https://arxiv.org/abs/2507.09138)] \[[Artifact](https://github.com/Leo9660/HedraRAG_AE)]
    * UCSD
    * RAGraph, a graph-based abstraction → Expose optimization opportunities across stage-level parallelism, intra-request similarity, and inter-request skewness.
* KV Cache Management
  * DiffKV: Differentiated Memory Management for Large Language Models with Parallel KV Compaction \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764810)]
    * Huawei & CUHK & SJTU
    * Exploit three levels of differentiation in the KV cache:
      * The differing impact of keys and values on attention computation.
      * The varying importance of tokens.
      * The diverse dynamic sparsity patterns across attention heads.
    * An on-GPU memory manager → Compact fragmented free memory list into contiguous regions in parallel.
* Multi-GPU Operator Optimization
  * Mercury: Unlocking Multi-GPU Operator Optimization for LLMs via Remote Memory Scheduling \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764798)] \[[Artifact](https://github.com/ChandlerGuan/mercury_artifact)]
    * UCSD & Meta
    * A multi-GPU operator compiler based on a loop-based intermediate representation, CommIR.
    * Treat remote GPU memory as an explicitly managed extension of the memory hierarchy.
    * Automatically reproduce the performance of hand-optimized baselines like RingAttention and Ulysses.

### MoE

* MoE Inference
  * KTransformers: Unleashing the Full Potential of CPU/GPU Hybrid Inference for MoE Models \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764843)] \[[Code](https://github.com/kvcache-ai/ktransformers)]
    * THU & Approaching.AI
    * Employ optimized, AMX-specialized kernels to fully utilize the computational capabilities of modern CPUs and incorporate an asynchronous CPU-GPU task scheduling mechanism to minimize overhead.
    * Expert Deferral → Overlap CPU and GPU computations.

### Distributed Training

* Sailor: Automating Distributed Training over Dynamic, Heterogeneous, and Geo-distributed Clusters \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764839)]
  * ETH & MIT & HES-SO
  * Combine an efficient search space exploration algorithm, accurate runtime and memory footprint simulation, and a distributed training framework → Support different types of heterogeneity to optimize training throughput and cost.

### Deep Learning Compilation

* Tempo: Compiled Dynamic Deep Learning with Symbolic Dependence Graphs \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764840)]
  * ICL
  * Temporal relationships: a tensor at one timestep may depend on tensors from earlier or later timesteps.
  * Construct a symbolic dependence graph → Concisely encode dynamic dependencies between operators, and apply whole-program optimizations.

### GPU

* GPU OS
  * LithOS: An Operating System for Efficient Machine Learning on GPUs \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764818)] \[[arXiv](https://arxiv.org/abs/2504.15465)]
    * CMU & Meta
    * A TPC Scheduler → Support spatial scheduling at the granularity of individual TPCs.
    * A kernel atomizer → Reduce head-of-line blocking and allow dynamic resource reallocation mid-execution.
    * A lightweight hardware right-sizing mechanism → Dynamically determine the minimal TPC resources needed per atom.
    * A power management mechanism → Reduce power consumption based upon in-flight work characteristics.
    * Built in Rust.
* GPU Checkpointing
  * PhoenixOS: Concurrent OS-level GPU Checkpoint and Restore with Validated Speculation \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764813)] \[[arXiv](https://arxiv.org/abs/2405.12079)]
    * SJTU IPADS
    * Proactively detect GPU memory reads and writes through a two-step process:
      * Speculate about GPU memory accesses based on the arguments used when launching GPU kernels.
      * Validate these accesses efficiently at runtime using binary instrumentation.
    * Coordinated checkpoint data transfer and execution context pool.
* GPU Storage
  * Managing Scalable Direct Storage Accesses for GPUs with GoFS \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764857)]
    * UIUC
    * GPU-orchestrated file system to offload the storage management to the GPU → Scale the direct storage accesses for GPU programs.

### RDMA

* Live Migration
  * Device-Assisted Live Migration of RDMA Devices \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764795)]
    * NVIDIA
    * A generic device-hypervisor interface.
    * The design and implementation of live migration support for the NVIDIA ConnectX family of network adapters.
    * Quiesce direct communication over the memory fabric (e.g., PCIe).

### CXL

* PCIe Pooling
  * Oasis: Pooling PCIe Devices Over CXL to Boost Utilization \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764812)]
    * Columbia & Microsoft Azure
    * Provide a control plane and datapath over CXL pools → Map and route PCIe device traffic across host boundaries.

### OS

* Proto: A Guided Journey through Modern OS Construction \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764811)]
  * UVA
* How to Copy Memory? Coordinated Asynchronous Copy as a First-Class OS Service \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764800)]
  * SJTU IPADS & Huawei
  * Copier, a new OS service of _coordinated asynchronous copy_, to serve both user-mode applications and OS services.

### Resource Management

* Serverless Computing
  * Unlocking True Elasticity for the Cloud-Native Era with Dandelion \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764803)]
    * ETH
    * Dandelion, an elastic cloud platform with _a declarative cloud-native programming model_ that replaces POSIX-based network interfaces with higher-level (e.g., HTTP-based) interfaces for applications to interact with remote services (e.g., cloud storage, databases, and AI inference services).
    * Execute applications expressed as DAGs of pure compute functions and communication functions.
  * Quilt: Resource-aware Merging of Serverless Workflows \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764830)]
    * UPenn
    * Automatically merge workflows that consist of many functions (possibly in different languages) into one process → Avoid high invocation latency, communication overhead, and long chains of cold starts.
* Resource Allocation
  * COpter: Efficient Large-Scale Resource-Allocation via Continual Optimization \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764846)]
    * Microsoft & Meta & CMU
    * Reframe round-based resource allocation as a sequence of interconnected problems.
    * Provide a method for continual optimization of LP and MILP formulations of resource allocation problems.
* Cloud Deployment
  * Moirai: Optimizing Placement of Data and Compute in Hybrid Clouds \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764802)]
    * CMU & Uber

### Video

* SAND: A New Programming Abstraction for Video-based Deep Learning \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764847)]
  * KAIST
  * Integrate system-level optimizations to simplify the preprocessing pipeline and maximize resource efficiency.

## Acronyms

* OS: Operating System
* LLM: Large Language Model
* MoE: Mixture-of-Experts
* RAG: Retrieval Augmented Generation
* RDMA: Remote Direct Memory Access
* CXL: Compute Express Link
* LP: Linear Program
* MILP: Mixed Integer Linear Program
