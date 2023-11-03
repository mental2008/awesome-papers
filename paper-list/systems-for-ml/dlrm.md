# Deep Learning Recommendation Model (DLRM)

## Optimizing Embedding Tables

* UGache: A Unified GPU Cache for Embedding-based Deep Learning ([SOSP 2023](../../reading-notes/conference/sosp-2023/)) \[[Personal Notes](../../reading-notes/conference/sosp-2023/ugache-a-unified-gpu-cache-for-embedding-based-deep-learning.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3600006.3613169)]
  * SJTU
  * A _unified multi-GPU cache_ system.
  * Used for GNN training and DLR inference.
* Bagpipe: Accelerating Deep Recommendation Model Training ([SOSP 2023](../../reading-notes/conference/sosp-2023/)) \[[Paper](https://dl.acm.org/doi/abs/10.1145/3600006.3613142)]
  * UW-Madison & UChicago
* AdaEmbed: Adaptive Embedding for Large-Scale Recommendation Models ([OSDI 2023](../../reading-notes/conference/osdi-2023.md)) \[[Paper](https://www.usenix.org/conference/osdi23/presentation/lai)]
  * UMich SymbioticLab & Meta
  * In-training pruning
* EVStore: Storage and Caching Capabilities for Scaling Embedding Tables in Deep Recommendation Systems ([ASPLOS 2023](../../reading-notes/conference/asplos-2023/)) \[[Personal Notes](../../reading-notes/conference/asplos-2023/evstore.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3575693.3575718)] \[[Code](https://github.com/ucare-uchicago/ev-store-dlrm)]
  * UChicago & Beijing University of Technology & Bandung Institute of Technology, Indonesia & Seagate Technology & Emory
  * A _caching_ layer optimized for embedding _access patterns_.
* DisaggRec: Architecting Disaggregated Systems for Large-Scale Personalized Recommendation (arXiv 2212.00939) \[[Personal Notes](broken-reference)] \[[Paper](https://arxiv.org/abs/2212.00939)]
  * Meta AI & WashU & UPenn & Cornell & Intel
  * _Disaggregated_ system; _decouple_ CPUs and memory resources; _partition embedding tables_.

## Faster Model Update

* Ekko: A Large-Scale Deep Learning Recommender System with Low-Latency Model Update ([OSDI 2022](../../reading-notes/conference/osdi-2022/)) \[[Paper](https://www.usenix.org/conference/osdi22/presentation/sima)]
  * Tencent & Edinburgh
  * P2P model update dissemination.

## DLRM

* Efficient Long Sequential User Data Modeling for Click-Through Rate Prediction (DLP-KDD 2022) \[[Paper](https://arxiv.org/abs/2209.12212)]
  * Alibaba
  * ETA: _Efficient target attention_ network
  * Locality-sensitive hashing
  * Deployed on Taobao_._
* Wide & Deep Learning for Recommender Systems (DLRS 2016) \[[Personal Notes](../../reading-notes/miscellaneous/arxiv/2016/wide-and-deep-learning-for-recommender-systems.md)] \[[Paper](https://dl.acm.org/doi/10.1145/2988450.2988454)]
  * Google
  * WDL: Wide & Deep model

## Acronyms

* DLRM: Deep Learning Recommendation Model
