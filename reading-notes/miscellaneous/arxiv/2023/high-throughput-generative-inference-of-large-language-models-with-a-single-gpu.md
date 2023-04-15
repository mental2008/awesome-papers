---
description: >-
  #large_language_model #offloading_system #memory_hierarchy #tensor_placement
  #compression #LLM_inference
---

# High-throughput generative inference of large language models with a single GPU

## Meta Info

Presented in [arxiv:2303.06865](https://arxiv.org/abs/2303.06865).

Authors: Ying Sheng (_Stanford_), Lianmin Zheng (_UC Berkeley_), Binhang Yuan (_ETH_), Zhuohan Li (_UC Berkeley_), Max Ryabinin (_Yandex & HSE University_), Daniel Y. Fu, Zhiqiang Xie (_Stanford_), Beidi Chen (_Meta & CMU_), Clark Barrett (_Stanford_), Joseph E. Gonzalez (_UC Berkeley_), Percy Liang, Christopher Ré (_Stanford_), Ion Stoica (_UC Berkeley_), Ce Zhang (_ETH_).

Code: [https://github.com/FMInference/FlexGen](https://github.com/FMInference/FlexGen)

## Understanding the paper

### TL;DRs

This paper presents **FlexGen**, _an offloading framework_ for _high-throughput LLM inference_.\
It _aggregates memory_ from the _GPU, CPU, and disk_, and efficiently _schedules I/O operations_, along with _possible compression methods_ and _distributed pipeline parallelism_.

### Evaluation

* NVIDIA T4 GPU instances from Google Cloud.
  * GPU: NVIDIA T4, 16 GB
  * CPU: Intel Xeon @ 2.00GHz, 208 GB
  * Disk: Cloud default SSD (NVMe), 1.5 TB
* Model
  * [OPT](https://ai.facebook.com/blog/democratizing-access-to-large-scale-language-models-with-opt-175b/) models with 6.7B to 175 parameters.
* Baseline
  * DeepSpeed-Inference

### Implementation

* Implemented on top of **PyTorch**.
* Manage _multiple CUDA streams_ and _CPU threads_ to overlap I/O with compute.
* Create files for tensors stored on the disk and maps them as virtual memory.
