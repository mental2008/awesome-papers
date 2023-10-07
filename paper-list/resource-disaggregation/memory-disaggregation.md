# Memory Disaggregation

## CXL-based Disaggregation

* CXL-ANNS: Software-Hardware Collaborative Memory Disaggregation and Computation for Billion-Scale Approximate Nearest Neighbor Search ([ATC 2023](../../reading-notes/conference/atc-2023/)) \[[Paper](https://www.usenix.org/conference/atc23/presentation/jang)]
  * KAIST & Panmnesia, Inc.
  * Approximate nearest neighbor search (ANNS) services.
* Overcoming the Memory Wall with CXL-Enabled SSDs ([ATC 2023](../../reading-notes/conference/atc-2023/)) \[[Paper](https://www.usenix.org/conference/atc23/presentation/yang-shao-peng)]
  * Syracuse & DGIST & FADU Inc. & Soongsil
  * CXL-flash: CXL-enabled _flash device_; caching and prefetching.
* TPP: Transparent Page Placement for CXL-Enabled Tiered-Memory ([ASPLOS 2023](../../reading-notes/conference/asplos-2023/)) \[[Personal Notes](../../reading-notes/conference/asplos-2023/tpp.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3582016.3582063)] \[[Code](https://lwn.net/Articles/876993/)]
  * UMich SymbioticLab & NVIDIA & Meta
  * CXL 1.1
  * Identify and place hot/cold pages to appropriate memory tiers (i.e., local memory or CXL memory).
* Pond: CXL-Based Memory Pooling Systems for Cloud Platforms ([ASPLOS 2023](../../reading-notes/conference/asplos-2023/)) \[[Paper](https://dl.acm.org/doi/abs/10.1145/3575693.3578835)]
  * Microsoft Azure
* Direct Access, High-Performance Memory Disaggregation with DirectCXL ([ATC 2022](../../reading-notes/conference/atc-2022/)) \[[Personal Notes](../../reading-notes/conference/atc-2022/directcxl.md)] \[[Paper](https://www.usenix.org/conference/atc22/presentation/gouk)]
  * KAIST
  * CXL 2.0
  * 6.2x shorter latency & 3x better performance than RDMA-based memory disaggregation.

## RDMA-based Disaggregation

* DisaggRec: Architecting Disaggregated Systems for Large-Scale Personalized Recommendation (arXiv 2212.00939) \[[Personal Notes](broken-reference)] \[[Paper](https://arxiv.org/abs/2212.00939)]
  * Meta AI & WashU & UPenn & Cornell & Intel
  * Deep learning recommendation models; partition _embedding tables_.
* Hydra: Resilient and Highly Available Remote Memory (FAST 2022) \[[Paper](https://www.usenix.org/conference/fast22/presentation/lee)] \[[Code](https://github.com/SymbioticLab/Hydra)]
  * UMich SymbioticLab
  * In-memory erasure coding.
* Rethinking Software Runtimes for Disaggregated Memory (ASPLOS 2021) \[[Paper](https://dl.acm.org/doi/10.1145/3445814.3446713)] \[[Code](https://github.com/project-kona/asplos21-ae)]
  * VMWare & Penn State & ETH & EPFL & UMich & Google
  * Kona
  * Cache coherence.
* Effectively Prefetching Remote Memory with Leap ([ATC 2020](../../reading-notes/conference/atc-2020/)) \[[Paper](https://www.usenix.org/conference/atc20/presentation/al-maruf)] \[[Code](https://github.com/SymbioticLab/leap)]
  * UMich SymbioticLab
  * **Best Paper**
  * Memory prefetching
* LegoOS: A Disseminated, Distributed OS for Hardware Resource Disaggregation ([OSDI 2018](../../reading-notes/conference/osdi-2018/)) \[[Paper](https://www.usenix.org/conference/osdi18/presentation/shan)] \[[Code](https://github.com/WukLab/LegoOS)]
  * Purdue
  * **Best Paper**
  * _Splitkernel_
* Efficient Memory Disaggregation with Infiniswap (NSDI 2017) \[[Paper](https://www.usenix.org/conference/nsdi17/technical-sessions/presentation/gu)] \[[Code](https://github.com/SymbioticLab/Infiniswap)]
  * UMich SymbioticLab
  * Remote memory paging system.
