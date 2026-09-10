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

### Megakernel Compilation

* Event Tensor: A Unified Abstraction for Compiling Dynamic Megakernel ([MLSys 2026](../../reading-notes/conference/mlsys-2026.md)) \[[Paper](https://mlsys.org/virtual/2026/poster/3592)] \[[arXiv](https://arxiv.org/abs/2604.13327)]
  * CMU
  * Introduce **Event Tensor**, a unified compiler abstraction that represents tiled-task dependencies as first-class tensors for dynamic megakernels.
  * Support both symbolic-shape dynamism and data-dependent dynamism, then lower the abstraction through the **Event Tensor Compiler (ETC)** with static and dynamic scheduling transformations.
  * Achieve state-of-the-art LLM serving latency, including up to 1.40x speedup on fused GEMM and Reduce-Scatter kernels, up to 1.23x on MoE workloads, and up to 3.5x lower engine warmup overhead.
* Mirage Persistent Kernel: A Compiler and Runtime for Mega-Kernelizing Tensor Programs (arXiv:2512.22219) \[[arXiv](https://arxiv.org/abs/2512.22219)] \[[Code](https://github.com/mirage-project/mirage)] \[[Homepage](https://catalyst.cs.cmu.edu/projects/mpk.html)]
  * CMU
  * Introduce **Mirage Persistent Kernel (MPK)**, the first compiler and runtime system that automatically transforms multi-GPU model inference into a single high-performance megakernel.
  * Use an SM-level graph representation and an in-kernel parallel runtime with decentralized scheduling to enable cross-operator software pipelining and fine-grained kernel overlap.
  * Reduce end-to-end LLM inference latency by up to 1.7x over kernel-per-operator serving systems while preserving flexible tensor-programming workflows.

### General Tensor Program Generation

* DITRON: Distributed Multi-level Tiling Compiler for Parallel Tensor Programs ([ICML 2026](../../reading-notes/conference/icml-2026.md)) \[[arXiv](https://arxiv.org/abs/2605.02953)] \[[Code](https://github.com/ByteDance-Seed/Triton-distributed)]
  * ByteDance Seed & PKU & THU & ZJU & SJTU
  * Introduce **DITRON**, a distributed tensor compiler with Core-, Device-, and Task-level tiling interfaces that map computation and communication onto the memory hierarchy of GPU clusters.
  * Reorder tiles through distributed swizzling to overlap computation with communication, and use task dependencies and scheduling to fuse registered Triton kernels into megakernels.
  * Support NVIDIA and AMD GPUs through hardware-specific SHMEM backends; report 6-30% speedups on isolated kernels and 5-30% gains in end-to-end vLLM inference over expert-tuned CUDA baselines.
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
