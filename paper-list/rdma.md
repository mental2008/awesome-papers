# Remote Direct Memory Access (RDMA)

## Notes

PFC: Priority Flow Control

RoCE: RDMA over Converged Ethernet

IBoE: InfiniBand over Ethernet

## General RDMA

<table><thead><tr><th>Name</th><th width="114" align="center">Conference</th><th width="162">Institute</th><th width="134">Links</th><th>Remarks</th></tr></thead><tbody><tr><td><strong>X-RDMA</strong></td><td align="center"><a href="../reading-notes/conference/cluster-2019.md">CLUSTER 2019</a></td><td><ul><li>Alibaba</li></ul></td><td><ul><li><a href="https://ieeexplore.ieee.org/document/8891004">Paper</a></li></ul></td><td>Focus on robustness, scalability, and maintainability.</td></tr><tr><td><strong>FreeFlow</strong></td><td align="center"><a href="../reading-notes/conference/nsdi-2019.md">NSDI 2019</a></td><td><ul><li>CMU</li><li>Microsoft</li><li>Alibaba</li><li>ByteDance</li></ul></td><td><ul><li><a href="https://www.usenix.org/conference/nsdi19/presentation/kim">Paper</a></li><li><a href="https://github.com/Microsoft/Freeflow">Code</a></li></ul></td><td>A software-based RDMA virtualization framework designed for containerized clouds.</td></tr><tr><td><strong>IRN</strong></td><td align="center"><a href="../reading-notes/conference/sigcomm-2018/">SIGCOMM 2018</a></td><td><ul><li>UC Berkeley</li><li>ICSI</li><li>Mellanox</li><li>NYU</li><li>UW</li></ul></td><td><ul><li><a href="../reading-notes/conference/sigcomm-2018/irn.md">Personal Notes</a></li><li><a href="https://dl.acm.org/doi/10.1145/3230543.3230557">Paper</a></li></ul></td><td>Better handling of packet losses; eliminate the need for PFC.</td></tr><tr><td><strong>RDMA over commodity Ethernet at scale</strong></td><td align="center">SIGCOMM 2016</td><td><ul><li>Microsoft</li></ul></td><td><ul><li><a href="https://dl.acm.org/doi/10.1145/2934872.2934908">Paper</a></li></ul></td><td>Challenges using <em>RoCEv2</em>; a DSCP (Differentiated Services Code Point) based PFC mechanism.</td></tr><tr><td><strong>DCQCN</strong></td><td align="center">SIGCOMM 2015</td><td><ul><li>Microsoft</li><li>Mellanox</li><li>UCSB</li></ul></td><td><ul><li><a href="https://dl.acm.org/doi/10.1145/2785956.2787484">Paper</a></li></ul></td><td>A congestion control scheme for <em>RoCEv2</em>, to alleviate the problems of PFC.</td></tr></tbody></table>

## RDMA for Deep Learning

| Name              |           Conference           | Institute               | Links                                                                                                                                                                                          | Remarks                    |
| ----------------- | :----------------------------: | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **DL over RDMA**  |          EuroSys 2019          | <ul><li>MSRA</li></ul>  | <ul><li><a href="https://dl.acm.org/doi/10.1145/3302424.3303975">Paper</a></li></ul>                                                                                                           | Distributed deep learning. |
| **ZeroCopy RDMA** | SIGCOMM 2017 Posters and Demos | <ul><li>HKUST</li></ul> | <ul><li><a href="https://dl.acm.org/doi/10.1145/3123878.3131975">Paper</a></li><li><a href="https://github.com/tensorflow/networking/tree/master/tensorflow_networking/gdr">Code</a></li></ul> | Merged into TensorFlow.    |

## RDMA for Storage

<table><thead><tr><th width="126">Name</th><th width="125" align="center">Conference</th><th width="146">Institute</th><th width="121">Links</th><th>Remarks</th></tr></thead><tbody><tr><td><strong>RDMA in Azure Storage</strong></td><td align="center"><a href="../reading-notes/conference/nsdi-2023/">NSDI 2023</a></td><td><ul><li>Microsoft</li></ul></td><td><ul><li><a href="https://www.usenix.org/conference/nsdi23/presentation/bai">Paper</a></li></ul></td><td>Production experience; around <strong>70%</strong> of traffic in Azure is RDMA<strong>.</strong></td></tr><tr><td><strong>Pangu</strong></td><td align="center"><a href="../reading-notes/conference/nsdi-2021.md">NSDI 2021</a></td><td><ul><li>Alibaba</li></ul></td><td><ul><li><a href="https://www.usenix.org/conference/nsdi21/presentation/gao">Paper</a></li></ul></td><td>Production experience; two workarounds to handle PFC storms: <em>shutdown, RDMA/TCP switching</em>.</td></tr></tbody></table>

## Performance Isolation

| Name      |                      Conference                     | Institute                                                        | Links                                                                                                                                                                                                                                                          | Remarks                                                                    |
| --------- | :-------------------------------------------------: | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Husky** | [NSDI 2023](../reading-notes/conference/nsdi-2023/) | <ul><li>Duke University</li><li>Microsoft</li><li>SJTU</li></ul> | <ul><li><a href="../reading-notes/conference/nsdi-2023/husky.md">Personal Notes</a></li><li><a href="https://www.usenix.org/conference/nsdi23/presentation/kong">Paper</a></li><li><a href="https://github.com/host-bench/husky">Benchmark Suite</a></li></ul> | Develop a _test suite_ to _evaluate_ RDMA performance isolation solutions. |
