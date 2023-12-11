# Deep Learning Compiler

{% hint style="info" %}
No active maintenance.
{% endhint %}

## System Architecture

* MLIR: Scaling Compiler Infrastructure for Domain Specific Computation (CGO 2021) \[[Paper](https://research.google/pubs/pub49988/)] \[[Homepage](https://mlir.llvm.org/)]
  * Google
* TVM: An Automated End-to-End Optimizing Compiler for Deep Learning ([OSDI 2018](../../reading-notes/conference/osdi-2018/)) \[[Paper](https://www.usenix.org/conference/osdi18/presentation/chen)] \[[Code](https://github.com/apache/tvm)] \[[Homepage](https://www.usenix.org/conference/osdi18/presentation/chen)]
  * UW & AWS & SJTU & UC Davis & Cornell

## Tensor Program Generation

* Cocktailer: Analyzing and Optimizing Dynamic Control Flow in Deep Learning ([OSDI 2023](../../reading-notes/conference/osdi-2023.md)) \[[Paper](https://www.usenix.org/conference/osdi23/presentation/zhang-chen)]
  * THU & MSRA
  * Co-optimize the execution of control flow and data flow.
* Welder: Scheduling Deep Learning Memory Access via Tile-graph ([OSDI 2023](../../reading-notes/conference/osdi-2023.md)) \[[Paper](https://www.usenix.org/conference/osdi23/presentation/shi)]
  * PKU & MSRA
  * Optimize memory access.
* Effectively Scheduling Computational Graphs of Deep Neural Networks toward Their Domain-Specific Accelerators ([OSDI 2023](../../reading-notes/conference/osdi-2023.md)) \[[Paper](https://www.usenix.org/conference/osdi23/presentation/zhao)]
  * Stream Computing
  * GraphTurbo: Scheduler for DSA.
* EINNET: Optimizing Tensor Programs with Derivation-Based Transformations ([OSDI 2023](../../reading-notes/conference/osdi-2023.md)) \[[Paper](https://www.usenix.org/conference/osdi23/presentation/zheng)]
  * THU & CMU
  * Leverage _transformations_ between general tensor algebra expressions.
* AStitch: Enabling a New Multi-dimensional Optimization Space for Memory-Intensive ML Training and Inference on Modern SIMT Architectures (ASPLOS 2022) \[[Paper](https://dl.acm.org/doi/10.1145/3503222.3507723)]
  * Alibaba
  * Memory-intensive operators.
* Ansor: Generating High-Performance Tensor Programs for Deep Learning ([OSDI 2020](../../reading-notes/conference/osdi-2020/)) \[[Paper](https://www.usenix.org/conference/osdi20/presentation/zheng)]
  * UC Berkeley

## Acronyms

* DSA: Domain-Specific Architecture
