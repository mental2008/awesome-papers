# GPU Sharing

## GPU Temporal Sharing

* Transparent GPU Sharing in Container Clouds for Deep Learning Workloads ([NSDI 2023](../../reading-notes/conference/nsdi-2023/)) \[[Paper](https://www.usenix.org/conference/nsdi23/presentation/wu)] \[[Code](https://github.com/pkusys/TGS)]
  * PKU
  * TGS: _Transparent_ GPU sharing; adaptive rate control; unified memory.
* Microsecond-scale Preemption for Concurrent GPU-accelerated DNN Inferences ([OSDI 2022](../../reading-notes/conference/osdi-2022/)) \[[Personal Notes](../../reading-notes/conference/osdi-2022/reef.md)] \[[Paper](https://www.usenix.org/conference/osdi22/presentation/han)] \[[Code](https://github.com/SJTU-IPADS/reef)] \[[Benchmark](https://github.com/SJTU-IPADS/disb)] \[[Artifact](https://github.com/SJTU-IPADS/reef-artifacts/tree/osdi22-ae)]
  * SJTU
  * REEF: GPU kernel preemption; dynamic kernel padding.
* Gemini: Enabling Multi-Tenant GPU Sharing Based on Kernel Burst Estimation ([TCC 2021](../../reading-notes/journal/tcc/tcc-2021/)) \[[Paper](https://ieeexplore.ieee.org/document/9566822)] \[[Code](https://github.com/NTHU-LSALAB/Gemini)]
  * National Tsing Hua University
  * Enable fine-grained GPU allocation; launch kernels together.
* AntMan: Dynamic Scaling on GPU Clusters for Deep Learning ([OSDI 2020](../../reading-notes/conference/osdi-2020/)) \[[Paper](https://www.usenix.org/conference/osdi20/presentation/xiao)] \[[Code](https://github.com/alibaba/GPU-scheduler-for-deep-learning)]
  * Alibaba
  * Enable GPU sharing in DL frameworks (TensorFlow/PyTorch); schedule operators.
* KubeShare: A Framework to Manage GPUs as First-Class and Shared Resources in Container Cloud ([HPDC 2020](../../reading-notes/conference/hpdc-2020/)) \[[Personal Notes](../../reading-notes/conference/hpdc-2020/kubeshare.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3369583.3392679)] \[[Code](https://github.com/NTHU-LSALAB/KubeShare)]
  * National Tsing Hua University
  * Kubernetes; CUDA API remoting.
* GaiaGPU: Sharing GPUs in Container Clouds ([ISPA/IUCC/BDCloud/SocialCom/SustainCom 2018](../../reading-notes/conference/ispa-iucc-bdcloud-socialcom-sustaincom-2018/)) \[[Personal Notes](../../reading-notes/conference/ispa-iucc-bdcloud-socialcom-sustaincom-2018/gaiagpu.md)] \[[Paper](https://ieeexplore.ieee.org/document/8672318)] \[[Code](https://github.com/tkestack/gpu-manager)]
  * PKU & Tencent
  * Kubernetes; CUDA API remoting.

## GPU Spatial Sharing

* Paella: Low-latency Model Serving with Software-defined GPU Scheduling (SOSP 2023) \[[Paper](https://dl.acm.org/doi/10.1145/3600006.3613163)]
  * UPenn & DBOS, Inc.
* MuxFlow: Efficient and Safe GPU Sharing in Large-Scale Production Deep Learning Clusters (arXiv 2303.13803) \[[Paper](https://arxiv.org/abs/2303.13803)]
  * PKU & ByteDance
  * Utilize NVIDIA MPS
* NVIDIA Multi-Instance GPU (MIG) \[[Homepage](https://www.nvidia.com/en-us/technologies/multi-instance-gpu/)]
  * Partition the GPU into as many as _seven instances_, each _fully isolated_ with its own high-bandwidth memory, cache, and compute cores.
  * Available for NVIDIA H100, A100, and A30 GPUs.
* NVIDIA Multi-Process Service (MPS) \[[Docs](https://docs.nvidia.com/deploy/mps/index.html)]
  * Transparently enable co-operative multi-process CUDA applications.
  * Terminating an MPS client without synchronizing with all outstanding GPU work (via Ctrl-C / program exception such as segfault / signals, etc.) can leave the MPS server and other MPS clients in an undefined state, which may result in hangs, unexpected failures, or corruptions.
* NVIDIA CUDA Multi-Stream \[[Docs](https://docs.nvidia.com/cuda/cuda-runtime-api/group\_\_CUDART\_\_STREAM.html)]
  * Stream: a sequence of operations that execute in issue-order on the GPU.
  * Perform multiple CUDA operations _simultaneously_.

## Survey

* GPU Virtualization and Scheduling Methods: A Comprehensive Survey ([CSUR 2017](../../reading-notes/journal/csur/csur-2017/)) \[[Personal Notes](../../reading-notes/journal/csur/csur-2017/gpu-virtualization-survey.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3068281)]
  * Queen’s University Belfast
