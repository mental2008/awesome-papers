# Remote Direct Memory Access (RDMA)

## General RDMA

* X-RDMA: Effective RDMA Middleware in Large-scale Production Environments ([CLUSTER 2019](../reading-notes/conference/cluster-2019.md)) \[[Paper](https://ieeexplore.ieee.org/document/8891004)]
  * Alibaba
  * Focus on robustness, scalability, and maintainability.
* FreeFlow: Software-based Virtual RDMA Networking for Containerized Clouds ([NSDI 2019](../reading-notes/conference/nsdi-2019.md)) \[[Paper](https://www.usenix.org/conference/nsdi19/presentation/kim)] \[[Code](https://github.com/Microsoft/Freeflow)]
  * CMU & Microsoft & Alibaba & ByteDance
  * A software-based RDMA virtualization framework designed for containerized clouds.
* Revisiting Network Support for RDMA ([SIGCOMM 2018](../reading-notes/conference/sigcomm-2018/)) \[[Personal Notes](../reading-notes/conference/sigcomm-2018/irn.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3230543.3230557)]
  * UC Berkeley & ICSI & Mellanox & NYU & UW
  * IRN: Better handling of packet losses; eliminate the need for PFC.
* RDMA over Commodity Ethernet at Scale (SIGCOMM 2016) \[[Paper](https://dl.acm.org/doi/10.1145/2934872.2934908)]
  * Microsoft
  * Challenges using _RoCEv2_; a DSCP (Differentiated Services Code Point) based PFC mechanism.
* Congestion Control for Large-Scale RDMA Deployments (SIGCOMM 2015) \[[Paper](https://dl.acm.org/doi/10.1145/2785956.2787484)]
  * Microsoft & Mellanox & UCSB
  * DCQCN: A congestion control scheme for _RoCEv2_, to alleviate the problems of PFC.

## RDMA for Deep Learning

* Fast Distributed Deep Learning over RDMA (EuroSys 2019) \[[Paper](https://dl.acm.org/doi/10.1145/3302424.3303975)]
  * MSRA
* Towards Zero Copy Dataflows using RDMA (SIGCOMM 2017 Posters and Demos) \[[Paper](https://dl.acm.org/doi/10.1145/3123878.3131975)] \[[Code](https://github.com/tensorflow/networking/tree/master/tensorflow\_networking/gdr)]
  * HKUST
  * Merged into TensorFlow.

## RDMA for Storage

* Empowering Azure Storage with RDMA ([NSDI 2023](../reading-notes/conference/nsdi-2023/)) \[[Paper](https://www.usenix.org/conference/nsdi23/presentation/bai)]
  * Microsoft
  * Production experience in Microsoft Azure
  * Around **70%** of traffic in Azure is RDMA**.**
* When Cloud Storage Meets RDMA ([NSDI 2021](../reading-notes/conference/nsdi-2021.md)) \[[Paper](https://www.usenix.org/conference/nsdi21/presentation/gao)]
  * NJU & Alibaba
  * Pangu
  * Production experience in Alibaba Cloud
  * Two workarounds to handle PFC storms: _shutdown, RDMA/TCP switching_.

## Performance Isolation

* Understanding RDMA Microarchitecture Resources for Performance Isolation ([NSDI 2023](../reading-notes/conference/nsdi-2023/)) \[[Personal Notes](../reading-notes/conference/nsdi-2023/husky.md)] \[[Paper](https://www.usenix.org/conference/nsdi23/presentation/kong)] \[[Benchmark Suite](https://github.com/host-bench/husky)]
  * Duke & Microsoft & SJTU
  * Develop a _test suite_ to _evaluate_ RDMA performance isolation solutions.

## Acronyms

* PFC: Priority Flow Control
* RoCE: RDMA over Converged Ethernet
* IBoE: InfiniBand over Ethernet
