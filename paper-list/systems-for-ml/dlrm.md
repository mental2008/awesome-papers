# Deep Learning Recommendation Model (DLRM)

## DLRM Training

* Heterogeneous Acceleration Pipeline for Recommendation System Training ([ISCA 2024](../../reading-notes/conference/isca-2024.md)) \[[arXiv](https://arxiv.org/abs/2204.05436)]
  * UBC & GaTech
  * **Hotline**: a runtime framework.
  * Utilize CPU main memory for non-popular embeddings and GPUs’ HBM for popular embeddings.
  * Fragment a mini-batch into popular and non-popular micro-batches (μ-batches).
* Accelerating Neural Recommendation Training with Embedding Scheduling ([NSDI 2024](../../reading-notes/conference/nsdi-2024.md)) \[[Paper](https://www.usenix.org/conference/nsdi24/presentation/zeng)] \[[Slides](https://www.usenix.org/system/files/nsdi24\_slides-zeng.pdf)] \[[Code](https://github.com/HKUST-SING/herald)]
  * HKUST
  * **Herald**: an adaptive location-aware inputs allocator to determine _where embeddings should be trained_ and an optimal communication plan generator to determine _which embeddings should be synchronized_.
* Bagpipe: Accelerating Deep Recommendation Model Training ([SOSP 2023](../../reading-notes/conference/sosp-2023/)) \[[Paper](https://dl.acm.org/doi/abs/10.1145/3600006.3613142)]
  * UW-Madison & UChicago

## DLRM Inference

* DisaggRec: Architecting Disaggregated Systems for Large-Scale Personalized Recommendation (arXiv 2212.00939) \[[Personal Notes](../../reading-notes/miscellaneous/arxiv/2022/disaggrec.md)] \[[Paper](https://arxiv.org/abs/2212.00939)]
  * Meta AI & WashU & UPenn & Cornell & Intel
  * _Disaggregated_ system; _decouple_ CPUs and memory resources; _partition embedding tables_.

## Pruning

* AdaEmbed: Adaptive Embedding for Large-Scale Recommendation Models ([OSDI 2023](../../reading-notes/conference/osdi-2023.md)) \[[Paper](https://www.usenix.org/conference/osdi23/presentation/lai)]
  * UMich SymbioticLab & Meta
  * In-training pruning.

## GPU Cache

* UGache: A Unified GPU Cache for Embedding-based Deep Learning ([SOSP 2023](../../reading-notes/conference/sosp-2023/)) \[[Personal Notes](../../reading-notes/conference/sosp-2023/ugache.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3600006.3613169)]
  * SJTU
  * A _unified multi-GPU cache_ system.
  * Used for GNN training and DLR inference.
* EVStore: Storage and Caching Capabilities for Scaling Embedding Tables in Deep Recommendation Systems ([ASPLOS 2023](../../reading-notes/conference/asplos-2023/)) \[[Personal Notes](../../reading-notes/conference/asplos-2023/evstore.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3575693.3575718)] \[[Code](https://github.com/ucare-uchicago/ev-store-dlrm)]
  * UChicago & Beijing University of Technology & Bandung Institute of Technology, Indonesia & Seagate Technology & Emory
  * A _caching_ layer optimized for embedding _access patterns_.

## Model Update

* Ekko: A Large-Scale Deep Learning Recommender System with Low-Latency Model Update ([OSDI 2022](../../reading-notes/conference/osdi-2022/)) \[[Paper](https://www.usenix.org/conference/osdi22/presentation/sima)]
  * Tencent & Edinburgh
  * P2P model update dissemination.

## Acronyms

* DLRM: Deep Learning Recommendation Model
