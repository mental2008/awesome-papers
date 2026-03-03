# Large Language Model (LLM)

{% hint style="info" %}
I am actively maintaining this list.
{% endhint %}

## LLM Training

### Hybrid parallelism

* Accelerating the Training of Large Language Models using Efficient Activation Rematerialization and Optimal Hybrid Parallelism ([ATC 2024](../../reading-notes/conference/atc-2024.md)) \[[Paper](https://www.usenix.org/conference/atc24/presentation/yuan)] \[[Code](https://github.com/kwai/Megatron-Kwai/tree/atc24ae/examples/atc24)]
  * Kuaishou
* Alpa: Automating Inter- and Intra-Operator Parallelism for Distributed Deep Learning ([OSDI 2022](../../reading-notes/conference/osdi-2022/)) \[[Paper](https://www.usenix.org/conference/osdi22/presentation/zheng-lianmin)] \[[Code](https://github.com/alpa-projects/alpa)] \[[Docs](https://alpa.ai/)]
  * UC Berkeley & AWS & Google & SJTU & CMU & Duke
  * Generalize the search through _parallelism strategies_.

### Fault tolerance

* Oobleck: Resilient Distributed Training of Large Models Using Pipeline Templates ([SOSP 2023](../../reading-notes/conference/sosp-2023/)) \[[Paper](https://dl.acm.org/doi/abs/10.1145/3600006.3613152)] \[[arXiv](https://browse.arxiv.org/abs/2309.08125)] \[[Code](https://github.com/SymbioticLab/Oobleck)]
  * UMich SymbioticLab & AWS & PKU
* Gemini: Fast Failure Recovery in Distributed Training with In-Memory Checkpoints ([SOSP 2023](../../reading-notes/conference/sosp-2023/)) \[[Paper](https://dl.acm.org/doi/10.1145/3600006.3613145)]
  * Rice & AWS
* Bamboo: Making Preemptible Instances Resilient for Affordable Training of Large DNNs ([NSDI 2023](../../reading-notes/conference/nsdi-2023/)) \[[Paper](https://www.usenix.org/conference/nsdi23/presentation/thorpe)] \[[Code](https://github.com/uclasystem/bamboo)]
  * UCLA & CMU & MSR & Princeton
  * Resilient distributed training

## LLM Inference

* CacheGen: KV Cache Compression and Streaming for Fast Large Language Model Serving ([SIGCOMM 2024](../../reading-notes/conference/sigcomm-2024.md)) \[[arXiv](https://arxiv.org/abs/2310.07240)] \[[Code](https://github.com/UChi-JCL/CacheGen)] \[[Video](https://www.youtube.com/watch?v=H4_OUWvdiNo)]
  * UChicago & Microsoft & Stanford
* Tender: Accelerating Large Language Models via Tensor Decomposition and Runtime Requantization ([ISCA 2024](../../reading-notes/conference/isca-2024.md))
* ALISA: Accelerating Large Language Model Inference via Sparsity-Aware KV Caching ([ISCA 2024](../../reading-notes/conference/isca-2024.md))
* LLM in a flash: Efficient Large Language Model Inference with Limited Memory (arXiv 2312.11514) \[[arXiv](https://arxiv.org/abs/2312.11514)]
  * Apple
* SpotServe: Serving Generative Large Language Models on Preemptible Instances ([ASPLOS 2024](../../reading-notes/conference/asplos-2024/)) \[[Personal Notes](../../reading-notes/conference/asplos-2024/spotserve.md)] \[[arXiv](https://arxiv.org/abs/2311.15566)] \[[Code](https://github.com/Hsword/SpotServe)]
  * CMU & PKU & CUHK
* Fast Distributed Inference Serving for Large Language Models (arXiv 2305.05920) \[[Paper](https://arxiv.org/abs/2305.05920)]
  * PKU
  * Skip-join multi-level feedback queue scheduling instead of first-come-frist-serve.
  * Proactive KV cache swapping.
  * Compared to Orca
* AlpaServe: Statistical Multiplexing with Model Parallelism for Deep Learning Serving ([OSDI 2023](../../reading-notes/conference/osdi-2023.md)) \[[Paper](https://arxiv.org/abs/2302.11665)] \[[Code](https://github.com/alpa-projects/mms)]
  * UC Berkeley & PKU & UPenn & Stanford & Google
  * Trade-off between _the overhead of model parallelism_ and _reduced serving latency by statistical multiplexing_.
* Efficiently Scaling Transformer Inference ([MLSys 2023](../../reading-notes/conference/mlsys-2023.md)) \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2023/hash/523f87e9d08e6071a3bbd150e6da40fb-Abstract-mlsys2023.html)]
  * Google
  * **Outstanding Paper Award**
  * Model partitioning; PaLM; TPUv4
* DeepSpeed-Inference: Enabling Efficient Inference of Transformer Models at Unprecedented Scale ([SC 2022](../../reading-notes/conference/sc-2022.md)) \[[Paper](https://dl.acm.org/doi/abs/10.5555/3571885.3571946)] \[[Code](https://github.com/microsoft/DeepSpeed)] \[[Homepage](https://www.deepspeed.ai/inference/)]
  * Microsoft DeepSpeed
  * Leverage CPU/NVMe/GPU memory.

### LLM-based Applications

* Teola: Towards End-to-End Optimization of LLM-based Applications ([ASPLOS 2025](../../reading-notes/conference/asplos-2025.md)) \[[arXiv](https://arxiv.org/abs/2407.00326)]
  * CUHK
  * An orchestration framework for LLM-based applications: utilize task primitives as the basic units; represent each query’s workflow as a primitive-level dataflow graph.
  * Enable larger design space for optimization including graph optimization (i.e., parallelization and pipelining) and application-aware scheduling.
* Parrot: Efficient Serving of LLM-based Applications with Semantic Variable ([OSDI 2024](../../reading-notes/conference/osdi-2024.md)) \[[Paper](https://www.usenix.org/conference/osdi24/presentation/lin-chaofan)] \[[Code](https://github.com/microsoft/ParrotServe)]
  * SJTU & MSRA
* SGLang: Efficient Execution of Structured Language Model Programs ([NeurIPS 2024](../../reading-notes/conference/neurips-2024.md)) \[[Personal Notes](../../reading-notes/miscellaneous/arxiv/2024/sglang.md)] \[[Paper](https://openreview.net/forum?id=VqkAKQibpq)] \[[arXiv](https://arxiv.org/abs/2312.07104)] \[[Code](https://github.com/sgl-project/sglang)]
  * UC Berkeley & Stanford
  * Co-design the front-end programming interface and back-end serving runtime
  * **SGLang**; SGVM w/ **RadixAttention**
  * Reuse KV cache across multiple calls and programs

### Retrieval-Augmented Generation (RAG)

* CacheFocus: Dynamic Cache Re-Positioning for Efficient Retrieval-Augmented Generation (arXiv:2502.11101) \[[arXiv](https://arxiv.org/abs/2502.11101)]
  * Jeonbuk National University & Seoul National University
  * Leverage query-independent, offline caching to reuse a context KV cache store.
  * _Cache Re-Positioning_: shift keys to different positions in the encoding space.
  * _Layer-Adaptive Cache Pruning_: discard low-relevance caches for documents during pre-filling.
  * _Adaptive Positional Allocation_: adjust cache positions to maximize the use of the available positional encoding range.
* Cache-Craft: Managing Chunk-Caches for Efficient Retrieval-Augmented Generation (SIGMOD 2025) \[[arXiv](https://arxiv.org/abs/2502.15734)]
  * Adobe Research & IIT Bombay & IIT Kanpur
  * Identify the reusability of chunk-caches; perform a small fraction of recomputation to fix the cache to maintain output quality; store and evict chunk-caches.
  * A wrapper around vLLM; built on Xformers backend optimized with Triton.
* RAGCache: Efficient Knowledge Caching for Retrieval-Augmented Generation (arXiv:2404.12457) \[[arXiv](https://arxiv.org/abs/2404.12457)]
  * PKU & ByteDance
  * Organize the intermediate states of retrieved knowledge in a knowledge tree; cache them in the GPU and host memory.
  * Replacement policy: evaluate each node based on its access frequency, size, and access cost.
    * Priority= Clock + (Frequency × Cost Size) / Size
    * Nodes with lower priority are evicted first.
  * Built on vLLM.

### Request Scheduling

* Llumnix: Dynamic Scheduling for Large Language Model Serving ([OSDI 2024](../../reading-notes/conference/osdi-2024.md)) \[[Paper](https://www.usenix.org/conference/osdi24/presentation/sun-biao)] \[[Code](https://github.com/AlibabaPAI/llumnix)]
  * Alibaba
* Orca: A Distributed Serving System for Transformer-Based Generative Models ([OSDI 2022](../../reading-notes/conference/osdi-2022/)) \[[Personal Notes](../../reading-notes/conference/osdi-2022/orca.md)] \[[Paper](https://www.usenix.org/conference/osdi22/presentation/yu)]
  * Seoul National University & FriendliAI
  * Iteration-level scheduling; selective batching.

### KV Cache Management

* Efficient Memory Management for Large Language Model Serving with PagedAttention ([SOSP 2023](../../reading-notes/conference/sosp-2023/)) \[[Paper](https://dl.acm.org/doi/10.1145/3600006.3613165)] \[[arXiv](https://browse.arxiv.org/abs/2309.06180)] \[[Code](https://github.com/vllm-project/vllm)] \[[Homepage](https://vllm.ai/)]
  * UC Berkeley & Stanford & UCSD
  * vLLM, PagedAttention
  * Partition the KV cache of each sequence into blocks, each block containing the keys and values for a fixed number of tokens

### Prefill-Decode (PD) Disaggregation

* Mooncake: A KVCache-centric Disaggregated Architecture for LLM Serving (FAST 2025) \[[Paper](https://www.usenix.org/conference/fast25/presentation/qin)] \[[arXiv](https://arxiv.org/abs/2407.00079)] \[[Slides](https://www.usenix.org/system/files/fast25_slides-qin.pdf)] \[[Code](https://github.com/kvcache-ai/Mooncake)]
  * Mootshot AI & Tsinghua
  * **Best Paper Award**
  * Separate the prefill and decoding clusters; prediction-based early rejection.
  * Distributed multi-layer KVCache pool; prefix-hashed KVCache object storage.
* Inference without Interference: Disaggregate LLM Inference for Mixed Downstream Workloads (arXiv:2401.11181) \[[arXiv](https://arxiv.org/abs/2401.11181)]
  * ICT, CAS & Huawei Cloud
* DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving ([OSDI 2024](../../reading-notes/conference/osdi-2024.md)) \[[Paper](https://www.usenix.org/conference/osdi24/presentation/zhong-yinmin)] \[[Code](https://github.com/LLMServe/DistServe)]
  * PKU & UCSD
* Splitwise: Efficient Generative LLM Inference Using Phase Splitting ([ISCA 2024](../../reading-notes/conference/isca-2024.md)) \[[Paper](https://ieeexplore.ieee.org/document/10609649/)] \[[arXiv](https://arxiv.org/abs/2311.18677)] \[[Blog](https://www.microsoft.com/en-us/research/blog/splitwise-improves-gpu-usage-by-splitting-llm-inference-phases/)]
  * UW & Microsoft
  * **Best Paper Award**
  * Split the two phases (i.e., prefill and decode) of a LLM inference request to separate machines

### Chunked Prefill

* Taming Throughput-Latency Tradeoff in LLM Inference with Sarathi-Serve ([OSDI 2024](../../reading-notes/conference/osdi-2024.md)) \[[Paper](https://www.usenix.org/conference/osdi24/presentation/agrawal)] \[[Code](https://github.com/microsoft/sarathi-serve)] \[[arXiv](https://arxiv.org/abs/2403.02310)]
  * MSR India & GaTech
  * **Sarathi-Serve**

### Serverless Inference

* λScale: Enabling Fast Scaling for Serverless Large Language Model Inference (arXiv:2502.09922) \[[arXiv](https://arxiv.org/abs/2502.09922)]
  * CUHK-SZ & UVA & HKUST & Alibaba & Nokia Bell Labs
* ServerlessLLM: Low-Latency Serverless Inference for Large Language Models ([OSDI 2024](../../reading-notes/conference/osdi-2024.md)) \[[Paper](https://www.usenix.org/conference/osdi24/presentation/fu)] \[[Code](https://github.com/ServerlessLLM/ServerlessLLM)] \[[arXiv](https://arxiv.org/abs/2401.14351)]
  * Edinburgh

### LoRA Serving

* dLoRA: Dynamically Orchestrating Requests and Adapters for LoRA LLM Serving ([OSDI 2024](../../reading-notes/conference/osdi-2024.md)) \[[Paper](https://www.usenix.org/conference/osdi24/presentation/wu-bingyang)]
  * PKU & Shanghai AI Lab
* CaraServe: CPU-Assisted and Rank-Aware LoRA Serving for Generative LLM Inference (arXiv:2401.11240) \[[arXiv](https://arxiv.org/abs/2401.11240)]
  * HKUST & CUHK-Shenzhen & Shanghai AI Lab & Huawei Cloud
* S-LoRA: Serving Thousands of Concurrent LoRA Adapters ([MLSys 2024](../../reading-notes/conference/mlsys-2024.md)) \[[arXiv](https://arxiv.org/abs/2311.03285)] \[[Code](https://github.com/S-LoRA/S-LoRA)]
  * UC Berkeley
* Punica: Multi-Tenant LoRA Serving ([MLSys 2024](../../reading-notes/conference/mlsys-2024.md)) \[[arXiv](https://arxiv.org/abs/2310.18547)] \[[Code](https://github.com/punica-ai/punica)]
  * UW & Duke

### Position-Independent Caching (PIC)

* EPIC: Efficient Position-Independent Context Caching for Serving Large Language Models (ICML 2025) \[[arXiv](https://arxiv.org/abs/2410.15332)]
  * PKU & NJU & Huawei Cloud
  * Key insight: the initial tokens of each chunk separately absorb a disproportionate amount of attention, preventing subsequent tokens from attending to relevant parts.
  * Propose an algorithm named _LegoLink_ to recompute k (≤ 32) initial tokens on each chunk (except the first chunk) → Recognize their non-initial status and cripple their attention-absorbing ability.
  * Compared to CacheBlend, LegoLink reduces recomputation complexity and relies on static attention sparsity.
* CacheBlend: Fast Large Language Model Serving for RAG with Cached Knowledge Fusion (arXiv:2405.16444) \[[arXiv](https://arxiv.org/abs/2405.16444)] \[[Code](https://github.com/YaoJiayi/CacheBlend)]
  * UChicago
  * For an LLM input including multiple text chunks, reuse all KV caches but re-compute a small fraction of KV.
  * Objective: have both the speed of full KV reuse and the generation quality of full KV recompute.

### Sparsity

* InfiniGen: Efficient Generative Inference of Large Language Models with Dynamic KV Cache Management ([OSDI 2024](../../reading-notes/conference/osdi-2024.md)) \[[Paper](https://www.usenix.org/conference/osdi24/presentation/lee)]
  * Seoul National University
* PowerInfer: Fast Large Language Model Serving with a Consumer-grade GPU ([SOSP 2024](../../reading-notes/conference/sosp-2024.md)) \[[Paper](https://dl.acm.org/doi/10.1145/3694715.3695964)] \[[arXiv](https://arxiv.org/abs/2312.12456)] \[[Code](https://github.com/SJTU-IPADS/PowerInfer)]
  * SJTU
  * A GPU-CPU hybrid inference engine
  * Hot-activated neurons are preloaded onto the GPU for fast access; cold-activated neurons are computed on the CPU
* Deja Vu: Contextual Sparsity for Efficient LLMs at Inference Time ([ICML 2023](../../reading-notes/conference/icml-2023.md)) \[[Paper](https://proceedings.mlr.press/v202/liu23am.html)] \[[Code](https://github.com/FMInference/DejaVu)]
  * Rice & ZJU & Stanford & UCSD & ETH & Adobe & Meta AI & CMU
  * A system to predict _contextual sparsity_ (small, input-dependent sets that yield _approximately_ the same output).

### Speculative Decoding

* Online Speculative Decoding ([ICML 2024](../../reading-notes/conference/icml-2024.md)) \[[arXiv](https://arxiv.org/abs/2310.07177)]
  * UC Berkeley & UCSD & Sisu Data & SJTU
* SpecInfer: Accelerating Generative LLM Serving with Speculative Inference and Token Tree Verification ([ASPLOS 2024](../../reading-notes/conference/asplos-2024/)) \[[arXiv](https://arxiv.org/abs/2305.09781)] \[[Code](https://github.com/flexflow/FlexFlow/tree/inference)]
  * CMU
* Speculative Decoding with Big Little Decoder (NeurIPS 2023) \[[Paper](https://arxiv.org/abs/2302.07863)]
  * UC Berkeley & ICSI & LBNL
* Fast Inference from Transformers via Speculative Decoding ([ICML 2023](../../reading-notes/conference/icml-2023.md)) \[[Paper](https://openreview.net/pdf?id=C9NEblP8vS)]
  * Google Research

### Offloading

* FlexGen: High-Throughput Generative Inference of Large Language Models with a Single GPU ([ICML 2023](../../reading-notes/conference/icml-2023.md)) \[[Personal Notes](../../reading-notes/miscellaneous/arxiv/2023/flexgen.md)] \[[Paper](https://proceedings.mlr.press/v202/sheng23a.html)] \[[Code](https://github.com/FMInference/FlexGen)]
  * Stanford & UC Berkeley & ETH & Yandex & HSE & Meta & CMU
  * _High-throughput serving; only use a single GPU._

### Heterogeneous Environment

* Demystifying Cost-Efficiency in LLM Serving over Heterogeneous GPUs (arXiv:2502.00722) \[[arXiv](https://arxiv.org/abs/2502.00722)]
  * Cambridge & HKUST & PKU & ETH & Purdue
* HexGen-2: Disaggregated Generative Inference of LLMs in Heterogeneous Environment (ICLR 2025) \[[Paper](https://openreview.net/forum?id=Cs6MrbFuMq)] \[[arXiv](https://arxiv.org/abs/2502.07903)]
  * HKUST
* HexGen: Generative Inference of Foundation Model over Heterogeneous Decentralized Environment ([ICML 2024](../../reading-notes/conference/icml-2024.md)) \[[Personal Notes](../../reading-notes/miscellaneous/arxiv/2023/hexgen.md)] \[[arXiv](https://arxiv.org/abs/2311.11514)] \[[Code](https://github.com/Relaxed-System-Lab/HexGen)]
  * HKUST & ETH & CMU
  * Support _asymmetric_ tensor model parallelism and pipeline parallelism under the _heterogeneous_ setting (i.e., each pipeline parallel stage can be assigned with a different number of layers and tensor model parallel degree)
  * Propose _a heuristic-based evolutionary algorithm_ to search for the optimal layout

### Fairness

* Locality-aware Fair Scheduling in LLM Serving (arXiv:2501.14312) \[[arXiv](https://arxiv.org/abs/2501.14312)]
  * UC Berkeley
* Fairness in Serving Large Language Models ([OSDI 2024](../../reading-notes/conference/osdi-2024.md)) \[[Paper](https://www.usenix.org/conference/osdi24/presentation/sheng)] \[[Code](https://github.com/Ying1123/VTC-artifact)]
  * UC Berkeley

### LLM Reliability & Debugging

* WFGY 1.0: A Framework for LLM Self-Healing and Debugging (Figshare) \[[DOI](https://doi.org/10.6084/m9.figshare.30338884)] \[[PDF](https://github.com/onestardao/WFGY/blob/main/I_am_not_lizardman/WFGY_All_Principles_Return_to_One_v1.0_PSBigBig_Public.pdf)] \[[Code](https://github.com/onestardao/WFGY)]
  * Framework paper on detecting, isolating, and repairing reasoning failures in LLM pipelines; open-source implementation available.

## LLM Alignment

* PUZZLE: Efficiently Aligning Large Language Models through Light-Weight Context Switch ([ATC 2024](../../reading-notes/conference/atc-2024.md)) \[[Paper](https://www.usenix.org/conference/atc24/presentation/lei)]
  * THU

## Acronyms

* LLM: Large Language Model
* LoRA: Low-Rank Adaptation
