---
description: '#GPU_sharing #GPU_time_sharing #API_remoting #kernel_burst'
---

# Gemini: Enabling multi-tenant GPU sharing based on kernel burst estimation

## Meta Info

Presented in [TCC 2021](https://ieeexplore.ieee.org/document/9566822).

Authors: Hung-Hsin Chen, En-Te Lin, Yu-Min Chou, Jerry Chou (_National Tsing Hua University_).

Code: [https://github.com/NTHU-LSALAB/Gemini](https://github.com/NTHU-LSALAB/Gemini)

## Understanding the paper

* This paper proposes **Gemini**, a user-space runtime scheduling framework to _enable fine-grained GPU allocation_ control with support.
  * Introduce _Kernel burst_, a group of consecutive kernels launched together without being interrupted by synchronous events.
    * Typical GPU programming model
      1. copy data to GPU device memory
      2. launch CUDA kernels without data dependency
      3. wait for kernels to complete
      4. copy results back to CPU host memory
  * Propose a low overhead _event-driven monitor_ and _a dynamic time-sharing scheduler_.
