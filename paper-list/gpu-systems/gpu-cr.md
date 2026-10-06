# GPU Checkpoint and Restore

System-level GPU checkpoint/restore (C/R) captures GPU memory and execution state, together with host process state, to support fault recovery, process migration, task switching, and fast startup.

## System-Level Checkpoint and Restore

* GPU Checkpoint/Restore Made Fast and Lightweight ([FAST 2026](../../reading-notes/conference/fast-2026/)) \[[Paper](https://www.usenix.org/conference/fast26/presentation/zeng)] \[[Code](https://github.com/thustorage/GCR)]
  * THU
  * **Distinguished Artifact Award**
  * **GCR** separates control-state C/R in the GPU driver from data-buffer C/R through selective memory-allocation interception and asynchronous copying.
  * Uses CPU shadow execution and dirty templates to identify modified GPU buffers at instruction granularity for incremental checkpointing.
  * Reports less than 1% steady-state overhead.
* PhoenixOS: Concurrent OS-level GPU Checkpoint and Restore with Validated Speculation ([SOSP 2025](../../reading-notes/conference/sosp-2025/)) \[[Paper](https://dl.acm.org/doi/10.1145/3731569.3764813)] \[[arXiv](https://arxiv.org/abs/2405.12079)] \[[Code](https://github.com/SJTU-IPADS/PhoenixOS)] \[[Docs](https://phoenixos.readthedocs.io/)]
  * SJTU IPADS
  * **PhOS** speculates about kernel memory accesses from launch arguments and validates them with runtime binary instrumentation.
  * Implements soft copy-on-write, soft recopy, and on-demand restore to overlap C/R with application execution.
  * Coordinates checkpoint transfers and reuses pooled GPU contexts to reduce stalls during recovery, migration, and cold starts.
* CRIUgpu: Transparent Checkpointing of GPU-Accelerated Workloads (arXiv:2502.16631) \[[arXiv](https://arxiv.org/abs/2502.16631)] \[[Code](https://github.com/checkpoint-restore/criu)]
  * Oxford & Masaryk & NVIDIA & Google & Red Hat & Lisbon
  * Combines GPU-driver checkpointing capabilities with CRIU plugins to capture CPU and GPU state in a unified snapshot without device-API interception.
  * Supports CUDA and ROCm workloads, including multi-GPU applications; integrates with Podman for container C/R without steady-state overhead.
* On-demand and Parallel Checkpoint/Restore for GPU Applications ([SoCC 2024](../../reading-notes/conference/socc-2024.md)) \[[Paper](https://dl.acm.org/doi/10.1145/3698038.3698510)]
  * SJTU & SAIRI
  * **gCROP** uses a GPU Restore Server to parallelize restore stages and CPU/GPU page faults to restore data on demand in a profile-guided order.
  * Targets serverless cold starts; combines multiple checkpoints with deduplication to reduce image storage and evaluates startup on AMD GPUs, including GPT-2-Large.
* NVIDIA cuda-checkpoint ([Initial release, 2024](https://github.com/NVIDIA/cuda-checkpoint/commit/a40358fd0b57468c879f38ffd3781d0c298661e0)) \[[Code](https://github.com/NVIDIA/cuda-checkpoint)]
  * NVIDIA
  * Provides driver-supported CUDA-state C/R; copies device memory to host memory and releases GPU resources while suspended.
  * Works with open-source CRIU to checkpoint the complete Linux process, including its CPU state.
  * Provides a binary-only command-line utility and source-visible examples under NVIDIA's proprietary license; CUDA C/R APIs are public, but their implementation in the CUDA user-space driver remains closed source.
* CRAC: Checkpoint-Restart Architecture for CUDA with Streams and UVM (SC 2020) \[[Paper](https://doi.org/10.1109/SC41405.2020.00081)] \[[arXiv](https://arxiv.org/abs/2008.10596)] \[[Code](https://github.com/DMTCP-CRAC/CRAC-early-development)]
  * Northeastern University
  * Uses a split-process architecture within one address space to separate checkpointed application state from CUDA library and driver state.
  * Recreates GPU resources on restart while supporting CUDA streams and Unified Virtual Memory (UVM), avoiding inter-process proxy communication.
* CRUM: Checkpoint-Restart Support for CUDA's Unified Memory (CLUSTER 2018) \[[Paper](https://doi.org/10.1109/CLUSTER.2018.00047)] \[[arXiv](https://arxiv.org/abs/1808.00117)]
  * Northeastern University & NVIDIA
  * Uses a proxy process and shadow-page synchronization to checkpoint CUDA UVM applications, including distributed CUDA workloads using Message Passing Interface (MPI).
  * Forked checkpointing overlaps GPU computation with writing the checkpoint image to storage.

## Transparent Migration and Elasticity

* Singularity: Planet-Scale, Preemptive and Elastic Scheduling of AI Workloads (arXiv:2202.07848) \[[Personal Notes](../../reading-notes/miscellaneous/arxiv/2022/singularity.md)] \[[arXiv](https://arxiv.org/abs/2202.07848)]
  * Microsoft
  * Combines CRIU host-process snapshots with a device proxy that saves GPU memory and replays stateful device APIs, quiescing collective communication for migration.
  * Makes unmodified distributed deep learning (DL) jobs preemptible, migratable, and elastically resizable across accelerator allocations.

## Acronyms

* C/R: Checkpoint/Restore
* CRIU: Checkpoint/Restore in Userspace
* UVM: Unified Virtual Memory
