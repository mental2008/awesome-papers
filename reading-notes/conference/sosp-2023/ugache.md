---
description: '#DLRM_inference #GPU_embedding_cache'
---

# UGache: A unified GPU cache for embedding-based deep learning

## Meta Info

Presented in [SOSP 2023](https://doi.org/10.1145/3600006.3613169).

Authors: Xiaoniu Song, Yiwen Zhang, Rong Chen, Haibo Chen (_SJTU_)

## Understanding the paper

### TL;DR

* UGache — A unified cache across multiple GPUs
* Exploit _cross-GPU interconnects_ (e.g., NVLink, NVSwitch)
  * Provide an optimal data placement with a unified abstraction for various GPU interconnects and bandwidths

### Background

* Performance bottleneck
  * Fetch embedding entries
    * Example: GNN training (31.3 ms)
      * Embedding extraction: 20.7 ms
      * Fetch missing data from host memory: 17.9 ms (out of 20.7 ms)
  * Memory limitation in a single GPU

### Limitation of prior works

* Single GPU embedding cache
  * Only let each GPU cache the hottest embeddings independently
  * The hit rate is limited due to the single GPU’s memory capacity, and the time of embedding extraction still dominates the entire model
* Multi-GPU embedding cache
  * _Fail_ to address challenges related to _cache policy_ and _extraction mechanism_
  * _Replication_ cache
    * Directly port single-GPU cache to multi-GPU platform → Each GPU caches the hottest entries independently
    * Drawbacks
      * Each GPU covers similar requests
      * Waste bandwidth across GPUs
  * _Partition_ cache
    * Cache as many individual entries as possible and serve the majority of accesses through _fast GPU interconnects_
    * Drawbacks
      * Increasing cache capacities using a partition policy does not lead to proportional increases in hit rates

### Characteristics of Embedding Access

* Read-only
  * Inference
  * Pre-training → The embedding table is trained beforehand and distributed across different downstream workloads
* Batched access
  * Only access a subset of embedding entries using batched sparse inputs as keys
* Skewed hotness
  * Power-law distribution
* Predictable pattern workload
  * The skewness of accessing embeddings is predictable and stable

### System design

* **Extractor**
  * A factored extraction mechanism to extract embedding entries from _multiple sources_
  * Statically dedicate GPU cores to access different sources
* **Solver**
  * Find a balance between _caching more distinct entries to improve global hit rate_ and _caching more replicas to improve local hit rate_
  * Define _a hotness metric_ to measure the access frequency for each entry
  * _Profile_ hardware platform’s information to _estimate embedding extraction time_
  * Utilize Mixed-Integer Linear Programming to solve a cache policy to minimize the extraction time

### Implementation

* Integrated into TensorFlow and PyTorch.

### Evaluation

* Two representative applications: DLRM inference, GNN training
