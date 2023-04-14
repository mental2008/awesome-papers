---
description: >-
  #deep_learning_training_workloads #multi_resource_scheduler
  #multi_resource_interleaving #PyTorch #iterative_process #blossom_algorithm
---

# Multi-resource interleaving for deep learning training

## Meta Info

Presented in [SIGCOMM 2022](https://doi.org/10.1145/3544216.3544224).

Authors: Yihao Zhao, Yuanqiang Liu, Yanghua Peng, Yibo Zhu, Xuanzhe Liu, Xin Jin.

Code: [https://github.com/Rivendile/Muri](https://github.com/Rivendile/Muri)

## Understanding the paper

### TL;DRs

This paper presents **Muri**, a DL _cluster scheduler_ that utilizes _multi-resource interleaving_ to improve cluster and job efficiency.\
It designs a scheduling algorithm based on _Blossom algorithm_ for multi-resource multi-job packing.

### Key Insights

* DL training jobs have a unique staged, _iterative computation pattern_.
  * Motivate fine-grained multi-resource interleaving in _time_.
  * Each iteration is composed of a sequence of stages like _data loading (Storage IO)_, _preprocessing (CPUs)_, _forward and backward propagation (GPUs)_, and _gradient synchronization (Network IO)_.

### Implementation

Built a prototype of Muri with \~7k LoC and integrated it with **PyTorch**.
