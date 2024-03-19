# Large Language Model (LLM)

{% hint style="info" %}
I am actively maintaining this list.
{% endhint %}

## LLM Training

* Oobleck: Resilient Distributed Training of Large Models Using Pipeline Templates ([SOSP 2023](../../reading-notes/conference/sosp-2023/)) \[[Paper](https://dl.acm.org/doi/abs/10.1145/3600006.3613152)] \[[arXiv](https://browse.arxiv.org/abs/2309.08125)] \[[Code](https://github.com/SymbioticLab/Oobleck)]
  * UMich SymbioticLab & AWS & PKU
* Gemini: Fast Failure Recovery in Distributed Training with In-Memory Checkpoints ([SOSP 2023](../../reading-notes/conference/sosp-2023/)) \[[Paper](https://dl.acm.org/doi/10.1145/3600006.3613145)]
  * Rice & AWS
* Bamboo: Making Preemptible Instances Resilient for Affordable Training of Large DNNs ([NSDI 2023](../../reading-notes/conference/nsdi-2023/)) \[[Paper](https://www.usenix.org/conference/nsdi23/presentation/thorpe)] \[[Code](https://github.com/uclasystem/bamboo)]
  * UCLA & CMU & MSR & Princeton
  * Resilient distributed training
* Alpa: Automating Inter- and Intra-Operator Parallelism for Distributed Deep Learning ([OSDI 2022](../../reading-notes/conference/osdi-2022/)) \[[Paper](https://www.usenix.org/conference/osdi22/presentation/zheng-lianmin)] \[[Code](https://github.com/alpa-projects/alpa)] \[[Docs](https://alpa.ai/)]
  * UC Berkeley & AWS & Google & SJTU & CMU & Duke
  * Generalize the search through _parallelism strategies_.

## LLM Inference

* Efficiently Programming Large Language Models using SGLang (arXiv 2312.07104) \[[Personal Notes](../../reading-notes/miscellaneous/arxiv/2024/sglang.md)] \[[arXiv](https://arxiv.org/abs/2312.07104)] \[[Code](https://github.com/sgl-project/sglang)]
  * UC Berkeley & Stanford
  * Co-design the front-end programming interface and back-end serving runtime
  * SGLang; SGVM w/ **RadixAttention**
  * Reuse KV cache across multiple calls and programs
* PowerInfer: Fast Large Language Model Serving with a Consumer-grade GPU (arXiv 2312.12456) \[[arXiv](https://arxiv.org/abs/2312.12456)]
  * SJTU
  * A GPU-CPU hybrid inference engine
  * Hot-activated neurons are preloaded onto the GPU for fast access; cold-activated neurons are computed on the CPU
* LLM in a flash: Efficient Large Language Model Inference with Limited Memory (arXiv 2312.11514) \[[arXiv](https://arxiv.org/abs/2312.11514)]
  * Apple
* Splitwise: Efficient Generative LLM Inference Using Phase Splitting (arXiv 2311.18677) \[[arXiv](https://arxiv.org/abs/2311.18677)] \[[Blog](https://www.microsoft.com/en-us/research/blog/splitwise-improves-gpu-usage-by-splitting-llm-inference-phases/)]
  * UW & Microsoft
  * Split the two phases (i.e., prefill and decode) of a LLM inference request to separate machines
* SpotServe: Serving Generative Large Language Models on Preemptible Instances ([ASPLOS 2024](../../reading-notes/conference/asplos-2024/)) \[[Personal Notes](../../reading-notes/conference/asplos-2024/spotserve.md)] \[[arXiv](https://arxiv.org/abs/2311.15566)] \[[Code](https://github.com/Hsword/SpotServe)]
  * CMU & PKU & CUHK
  * Distributed LLM serving system on preemptible/spot instances
  * Techniques
    * Dynamically adapt the LLM parallelization configuration
    * Minimize the cost of migrating instances for dynamic reparallelization
    * Stateful inference recovery
* HexGen: Generative Inference of Foundation Model over Heterogeneous Decentralized Environment (arXiv 2311.11514) \[[Personal Notes](../../reading-notes/miscellaneous/arxiv/2023/hexgen.md)] \[[arXiv](https://arxiv.org/abs/2311.11514)] \[[Code](https://github.com/Relaxed-System-Lab/HexGen)]
  * HKUST & ETH & CMU
  * Support _asymmetric_ tensor model parallelism and pipeline parallelism under the _heterogeneous_ setting (i.e., each pipeline parallel stage can be assigned with a different number of layers and tensor model parallel degree)
  * Propose _a heuristic-based evolutionary algorithm_ to search for the optimal layout
* S-LoRA: Serving Thousands of Concurrent LoRA Adapters (arXiv 2311.03285) \[[arXiv](https://arxiv.org/abs/2311.03285)] \[[Code](https://github.com/S-LoRA/S-LoRA)]
  * UC Berkeley
  * A system to serve many LoRA adapters
  * Store all adapters in the main memory and fetch the adapters used by the currently running queries to the GPU memory
  * Unified Paging — a unified memory pool to manage dynamic adapter weights with different ranks and KV cache tensors with varying sequence lengths
  * Employ a tensor parallelism strategy and highly optimized custom CUDA kernels for heterogeneous batching of LoRA computation
  * Built on top of [LightLLM](https://github.com/ModelTC/lightllm)
* Punica: Multi-Tenant LoRA Serving (arXiv 2310.18547) \[[arXiv](https://arxiv.org/abs/2310.18547)] \[[Code](https://github.com/punica-ai/punica)]
  * UW & Duke
  * A system to serve multiple LoRA models in a shared GPU cluster
  * A CUDA kernel — Segmented Gather Matrix-Vector Multiplication (SGMV)
    * Batch GPU operations for concurrent execution of different LoRA models
    * A GPU only needs to store a single copy of the pre-trained model
  * A request scheduling mechanism to consolidate multi-tenant LoRA serving workloads
    * Route the new request to a small set of active GPUs
    * Allocate additional GPU resources when the existing GPUs are fully utilized
    * Periodically migrate existing requests for consolidation
* Efficient Memory Management for Large Language Model Serving with PagedAttention ([SOSP 2023](../../reading-notes/conference/sosp-2023/)) \[[Paper](https://dl.acm.org/doi/10.1145/3600006.3613165)] \[[arXiv](https://browse.arxiv.org/abs/2309.06180)] \[[Code](https://github.com/vllm-project/vllm)] \[[Homepage](https://vllm.ai/)]
  * UC Berkeley & Stanford & UCSD
  * vLLM, PagedAttention
  * Partition the KV cache of each sequence into blocks, each block containing the keys and values for a fixed number of tokens
* Deja Vu: Contextual Sparsity for Efficient LLMs at Inference Time ([ICML 2023](../../reading-notes/conference/icml-2023.md)) \[[Paper](https://proceedings.mlr.press/v202/liu23am.html)] \[[Code](https://github.com/FMInference/DejaVu)]
  * Rice & ZJU & Stanford & UCSD & ETH & Adobe & Meta AI & CMU
  * A system to predict _contextual sparsity_ (small, input-dependent sets that yield _approximately_ the same output).
* FlexGen: High-Throughput Generative Inference of Large Language Models with a Single GPU ([ICML 2023](../../reading-notes/conference/icml-2023.md)) \[[Personal Notes](../../reading-notes/miscellaneous/arxiv/2023/flexgen.md)] \[[Paper](https://proceedings.mlr.press/v202/sheng23a.html)] \[[Code](https://github.com/FMInference/FlexGen)]
  * Stanford & UC Berkeley & ETH & Yandex & HSE & Meta & CMU
  * _High-throughput serving; only use a single GPU._
* Fast Distributed Inference Serving for Large Language Models (arXiv 2305.05920) \[[Paper](https://arxiv.org/abs/2305.05920)]
  * PKU
  * Skip-join multi-level feedback queue scheduling instead of first-come-frist-serve.
  * Proactive KV cache swapping.
  * Compared to Orca
* AlpaServe: Statistical Multiplexing with Model Parallelism for Deep Learning Serving ([OSDI 2023](../../reading-notes/conference/osdi-2023.md)) \[[Paper](https://arxiv.org/abs/2302.11665)] \[[Code](https://github.com/alpa-projects/mms)]
  * UC Berkeley & PKU & UPenn & Stanford & Google
  * Trade-off between _the overhead of model parallelism_ and _reduced serving latency by statistical multiplexing_.
* Efficiently Scaling Transformer Inference ([MLSys 2023](../../reading-notes/conference/mlsys-2023.md)) \[[Paper](https://proceedings.mlsys.org/paper\_files/paper/2023/hash/523f87e9d08e6071a3bbd150e6da40fb-Abstract-mlsys2023.html)]
  * Google
  * **Outstanding Paper Award**
  * Model partitioning; PaLM; TPUv4
* DeepSpeed-Inference: Enabling Efficient Inference of Transformer Models at Unprecedented Scale ([SC 2022](../../reading-notes/conference/sc-2022.md)) \[[Paper](https://dl.acm.org/doi/abs/10.5555/3571885.3571946)] \[[Code](https://github.com/microsoft/DeepSpeed)] \[[Homepage](https://www.deepspeed.ai/inference/)]
  * Microsoft DeepSpeed
  * Leverage CPU/NVMe/GPU memory.
* Orca: A Distributed Serving System for Transformer-Based Generative Models ([OSDI 2022](../../reading-notes/conference/osdi-2022/)) \[[Personal Notes](../../reading-notes/conference/osdi-2022/orca.md)] \[[Paper](https://www.usenix.org/conference/osdi22/presentation/yu)]
  * Seoul National University & FriendliAI
  * Iteration-level scheduling; selective batching.

### Speculative Decoding

* Online Speculative Decoding (arXiv: 2310.07177) \[[Paper](https://arxiv.org/abs/2310.07177)]
  * UC Berkeley & UCSD & Sisu Data & SJTU
* SpecInfer: Accelerating Generative LLM Serving with Speculative Inference and Token Tree Verification (arXiv: 2305.09781) \[[Paper](https://arxiv.org/abs/2305.09781)] \[[Code](https://github.com/flexflow/FlexFlow/tree/inference)]
  * CMU
* Speculative Decoding with Big Little Decoder (NeurIPS 2023) \[[Paper](https://arxiv.org/abs/2302.07863)]
  * UC Berkeley & ICSI & LBNL
* Fast Inference from Transformers via Speculative Decoding ([ICML 2023](../../reading-notes/conference/icml-2023.md)) \[[Paper](https://openreview.net/pdf?id=C9NEblP8vS)]
  * Google Research

## LLMs

* Llama 2: Open Foundation and Fine-Tuned Chat Models (arXiv 2307.09288) \[[Paper](https://arxiv.org/abs/2307.09288)] \[[Homepage](https://ai.meta.com/llama/)]
  * Released with a _permissive_ community license and is available for commercial use.
* LLaMA: Open and Efficient Foundation Language Models (arXiv 2302.13971) \[[Paper](https://arxiv.org/abs/2302.13971)] \[[Code](https://github.com/facebookresearch/llama)]
  * Meta AI
  * **6.7B, 13B, 32.5B, 65.2B**
  * Open-access
* PaLM: Scaling Language Modeling with Pathways (JMLR 2023) \[[Paper](https://www.jmlr.org/papers/v24/22-1144.html)] \[[PaLM API](https://developers.googleblog.com/2023/03/announcing-palm-api-and-makersuite.html)]
  * **540B**; open access to PaLM APIs in March 2023.
* BLOOM: A 176B-Parameter Open-Access Multilingual Language Model (arXiv 2211.05100) \[[Paper](https://arxiv.org/abs/2211.05100)] \[[Model](https://huggingface.co/bigscience/bloom)] \[[Blog](https://bigscience.huggingface.co/blog/bloom)]
  * **176B**
  * open-access
* OPT: Open Pre-trained Transformer Language Models (arXiv: 2205.01068) \[[Paper](https://arxiv.org/abs/2205.01068)] \[[Code](https://github.com/facebookresearch/metaseq/tree/main/projects/OPT)]
  * Meta AI
  * Range from 125M to 175B parameters.
  * Open-access

## Acronyms

* LLM: Large Language Model
