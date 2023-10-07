# Large Language Model (LLM)

## LLM Training

* Oobleck: Resilient Distributed Training of Large Models Using Pipeline Templates (SOSP 2023) \[[Paper](https://dl.acm.org/doi/abs/10.1145/3600006.3613152)] \[[arXiv](https://browse.arxiv.org/abs/2309.08125)] \[[Code](https://github.com/SymbioticLab/Oobleck)]
  * UMich SymbioticLab & AWS & PKU
* GEMINI: Fast Failure Recovery in Distributed Training with In-Memory Checkpoints (SOSP 2023) \[[Paper](https://dl.acm.org/doi/10.1145/3600006.3613145)]
  * Rice & AWS
* Bamboo: Making Preemptible Instances Resilient for Affordable Training of Large DNNs ([NSDI 2023](../../reading-notes/conference/nsdi-2023/)) \[[Paper](https://www.usenix.org/conference/nsdi23/presentation/thorpe)] \[[Code](https://github.com/uclasystem/bamboo)]
  * UCLA & CMU & MSR & Princeton
  * Resilient distributed training
* Alpa: Automating Inter- and Intra-Operator Parallelism for Distributed Deep Learning ([OSDI 2022](../../reading-notes/conference/osdi-2022/)) \[[Paper](https://www.usenix.org/conference/osdi22/presentation/zheng-lianmin)] \[[Code](https://github.com/alpa-projects/alpa)] \[[Docs](https://alpa.ai/)]
  * UC Berkeley & AWS & Google & SJTU & CMU & Duke
  * Generalize the search through _parallelism strategies_.

## LLM Inference

* Efficient Memory Management for Large Language Model Serving with PagedAttention (SOSP 2023) \[[Paper](https://dl.acm.org/doi/10.1145/3600006.3613165)] \[[arXiv](https://browse.arxiv.org/abs/2309.06180)] \[[Code](https://github.com/vllm-project/vllm)] \[[Homepage](https://vllm.ai/)]
  * UC Berkeley & Stanford & UCSD
  * vLLM, PagedAttention
* Deja Vu: Contextual Sparsity for Efficient LLMs at Inference Time ([ICML 2023](../../reading-notes/conference/icml-2023.md)) \[[Paper](https://proceedings.mlr.press/v202/liu23am.html)] \[[Code](https://github.com/FMInference/DejaVu)]
  * Rice & ZJU & Stanford & UCSD & ETH & Adobe & Meta AI & CMU
  * A system to predict _contextual sparsity_ (small, input-dependent sets that yield _approximately_ the same output).
* FlexGen: High-Throughput Generative Inference of Large Language Models with a Single GPU ([ICML 2023](../../reading-notes/conference/icml-2023.md)) \[[Personal Notes](../../reading-notes/miscellaneous/arxiv/2023/high-throughput-generative-inference-of-large-language-models-with-a-single-gpu.md)] \[[Paper](https://proceedings.mlr.press/v202/sheng23a.html)] \[[Code](https://github.com/FMInference/FlexGen)]
  * Stanford & UC Berkeley & ETH & Yandex & HSE & Meta & CMU
  * _High-throughput serving; only use a single GPU._
* Fast Distributed Inference Serving for Large Language Models (arXiv 2305.05920) \[[Paper](https://arxiv.org/abs/2305.05920)]
  * PKU
  * Skip-join multi-level feedback queue scheduling instead of first-come-frist-serve.
  * Proactive kv cache swapping.
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

## LLMs

* Llama 2: Open Foundation and Fine-Tuned Chat Models (arXiv 2307.09288) \[[Paper](https://arxiv.org/abs/2307.09288)] \[[Homepage](https://ai.meta.com/llama/)]
  * Released with a _permissive_ community license and is available for commercial use.
* LLaMA: Open and Efficient Foundation Language Models (arXiv 2302.13971) \[[Paper](https://arxiv.org/abs/2302.13971)] \[[Code](https://github.com/facebookresearch/llama)]
  * Meta AI
  * \[**6.7B, 13B, 32.5B, 65.2B**]; _open-access_.
* PaLM: Scaling Language Modeling with Pathways ([JMLR 2023](https://www.jmlr.org/papers/v24/22-1144.html)) \[[Paper](https://www.jmlr.org/papers/v24/22-1144.html)] \[[PaLM API](https://developers.googleblog.com/2023/03/announcing-palm-api-and-makersuite.html)]
  * **540B**; open access to PaLM APIs in March 2023.
* BLOOM: A 176B-Parameter Open-Access Multilingual Language Model (arXiv 2211.05100) \[[Paper](https://arxiv.org/abs/2211.05100)] \[[Model](https://huggingface.co/bigscience/bloom)] \[[Blog](https://bigscience.huggingface.co/blog/bloom)]
  * **176B**; _open-access_.

## Acronyms

* LLM: Large Language Model
