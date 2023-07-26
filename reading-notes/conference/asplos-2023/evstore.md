---
description: >-
  #deep_learning_recommender_system #embedding_lookup #recommendation_inference
  #cache
---

# EVStore: Storage and caching capabilities for scaling embedding tables in deep recommendation system

## Meta Info

Presented in [ASPLOS 2023](https://doi.org/10.1145/3575693.3575718).

Authors: Daniar H. Kurniawan, Ruipu Wang, Kahfi S. Zulkifli, Fandi A. Wiranata, John Bent, Ymir Vigfusson, Haryadi S. Gunawi.

Code: [https://github.com/ucare-uchicago/ev-store-dlrm](https://github.com/ucare-uchicago/ev-store-dlrm)

## Understanding the paper

### Challenge

Each recommendation inference requires _multiple EV table lookups_, but if any memory access is slow, the whole inference request is slow.

### Limitation of existing work

Open-source DLRMs such as [Facebook DLRM](https://github.com/facebookresearch/dlrm), store the full embedding tables in DRAM and lack support for responding to lookups from backend storage when memory is exhausted.

### Key designs

* Propose EVStore, add _a caching layer_ within DLRS; optimize for access patterns.
* Three layers
  * EVCache (L1)
    * Extend various cache replacement algorithms.
  * EVMix (L2)
    * Store lower precision embedding (e.g., fp8).
  * EVProx (L3)
    * A _key-to-key_ caching layer that maps a key to a surrogate key with a similar embedding value.
    * Key mapping built in an _offline_ preprocessing manner; adopt the statistical measures of _Euclidean and cosine distances_ to calculate similarity.
    * In general, the remapping should be done when L3 hit rate drops significantly.

### Implementation

Integrated within Facebook DLRM.

### Evaluation

* Use the Criteo 1TB Click Logs dataset.
  * 13 dense integer features and 26 sparse categorical features (26 EV tables)
  * All EV tables have the same embedding dimensions of 36
  * 156 billion total feature values and over 800 million unique attribute values
