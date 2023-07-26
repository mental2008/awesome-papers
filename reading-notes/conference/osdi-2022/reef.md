---
description: '#deep_learning_inference_system #GPU_kernel_preemption #co-location'
---

# Microsecond-scale preemption for concurrent GPU-accelerated DNN inferences

## Meta Info

Presented in [OSDI 2022](https://www.usenix.org/conference/osdi22/presentation/han).

Authors: Mingcong Han, Hanze Zhang, Rong Chen, Haibo Chen (_SJTU_).

Code: [https://github.com/SJTU-IPADS/reef](https://github.com/SJTU-IPADS/reef)

DNN Inference Serving Benchmark: [https://github.com/SJTU-IPADS/disb](https://github.com/SJTU-IPADS/disb)

Artifact: [https://github.com/SJTU-IPADS/reef-artifacts/tree/osdi22-ae](https://github.com/SJTU-IPADS/reef-artifacts/tree/osdi22-ae)

## Understanding the paper

### TL;DR

This paper presents a GPU-accelerated DNN inference serving system named **REEF**, which enables microsecond-scale **kernel preemption** and controlled **concurrent execution** in GPU scheduling.

### Technical details

* Two execution modes
  * Normal mode
    * when the real-time task queue is empty
    * assign tasks to the associated GPU streams
  * Real-time mode
    * when encountering real-time tasks
    * Dynamic kernel padding (DKP)
      * combine appropriate best-effort kernels and real-time kernels into a single one
      * use a GPU stream to launch it
      * Two rules
        * The execution time: best-effort kernels < real-time kernel
        * The CU occupancy: best-effort kernels > real-time kernel

<figure><img src="../../../.gitbook/assets/image (2).png" alt=""><figcaption><p>Extended GPU runtime for instant preemption.</p></figcaption></figure>

* For host queues (HQs), dequeue all buffered kernels and reclaim memory
* For device queues (DQs), inject a piece of code at the beginning of each kernel in advance and terminate itself when preemption flag is true.
* For compute units (CUs), retrofit the kernel killing function of GPU driver on AMD GPUs.
* For _closed-source NVIDIA GPUs_, propose a stricted version of reset-based preemption named **Reef-N**.
  * GPU runtime has to be treated as a black box. Cannot proactively kill running kernels.
  * Intercepts three CUDA APIs related to kernel launch and stream management. Maintain a virtual host queue (vHQs).
