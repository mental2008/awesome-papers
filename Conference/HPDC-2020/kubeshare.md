# KubeShare: A framework to manage GPUs as first-class and shared resources in container cloud

## Metadata

Presented in [HPDC 2020](https://doi.org/10.1145/3369583.3392679).

Authors: Ting-An Yeh, Hung-Hsin Chen, Jerry Chou

Share GPU between Pods in Kubernetes (KuberShare): [https://github.com/NTHU-LSALAB/KubeShare](https://github.com/NTHU-LSALAB/KubeShare)

GPU resource sharing system (Gemini): [https://github.com/NTHU-LSALAB/Gemini](https://github.com/NTHU-LSALAB/Gemini)

## Understanding the paper

### TL;DR

This paper presents a framework named **KubeShare**, which extends Kubernetes to **enable GPU sharing** with fine-grained allocation, thereby increasing GPU utilization.

### Technical details

- For GPU computing resources, it isolates the usage among containers in **a time-sharing manner** using an *token*.
    - vGPU is implemented by **a per-container frontend module** and **a per-node backend module**.
    - The frontend module is **a dynamic linking library** inside a container.
        - It intercepts all CUDA Library APIs related to memory and computing through the Linux `LD_PRELOAD` mechanism.
        - It blocks the intercepted CUDA calls until it re-acquires a valid *token*.
    - The backend module is **a standalone daemon** running on host machine for managing the *token* among containers.
        1. Track the GPU usage time of each container.
        2. Schedule the *token* to one of the requested containers.
        3. Determine the time quota of the *token*.
- For GPU memory, it **doesn't allow memory to be overcommitted**. The total memory demand must be less than or equal to the physical memory size.

### Scheduling algorithm

- No affinity label on device => **best-fit** algorithm
    - Intuition: utilize the resources of existing vGPUs as much as possible.
- With affinity label on device => **worst-fit** algorithm
    - Intuition: keep more space on the device with affinity label for future requests with the same affinity label.

After taking a look at the code implementation, the authors only consider GPU resources if other resources (e.g., CPU, memory) are sufficient to place the new pod. Therefore, for best-fit algorithm, it will choose the most compact GPU in the node.

### Implementation

Built on top of Kubernetes.

