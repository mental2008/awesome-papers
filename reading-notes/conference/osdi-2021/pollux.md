# Pollux: Co-adaptive cluster scheduling for goodput-optimized deep learning

## Metadata

Presented in [OSDI 2021](https://www.usenix.org/conference/osdi21/presentation/qiao).

Authors: Aurick Qiao, Sang Keun Choe, Suhas Jayaram Subramanya, Willie Neiswanger, Qirong Ho, Hao Zhang, Gregory R. Ganger, Eric P. Xing

Code (AdaptDL): [https://github.com/petuum/adaptdl](https://github.com/petuum/adaptdl)

## Understanding the paper

### TL;DR

This paper presents a deep learning cluster scheduler named **Pollux**, which co-adaptively **allocates resources** (the number of GPUs) and **tunes the hyperparameters** (the batch size and learning rate) for all **DL training jobs** in a shared cluster.

### Background

* The running time of each training iteration can be divided into two main components.
  * $$\text{T}_{\text{grad}}$$: the time spent computing the gradient.
  * $$\text{T}_{\text{sync}}$$: the time spent synchronizing across all GPUs.
    * Collective all-reduce => average gradient
    * Parameter servers => synchronize weight
* GNS (noise-to-signal ratio of the stochastic gradient)
  * A larger GNS => higher batch size or learning rate with less reduction of statistical efficiency
  * Vary greatly between different DL models
  * Non-constant, gradually increase during training
* Existing DL schedulers
  * Non-scale-adaptive: Tiresias, Gandiva => require users to specify the number of GPUs
  * Scale-adaptive: Optimus, SLAQ, Gavel, Antman, Themis

### Key designs

* Different number of GPUs, different stage of training => different best batch size => larger batch sizes can be more useful later in training
* Propose a formulation of **goodput** for DL jobs, which combines system throughput with model statistical efficiency.
* Focus on three configuration parameters
  * The number of GPUs
  * Per-GPU batch size
  * Number of gradient accumulation steps
* Adaptively co-optimize inter-dependent factors: 1) at the **per-job** level; 2) at the **cluster-wide** level.

### Evaluation

Compared to SOTA DL schedulers,

* reduce average job completion times (JCT)
* promote fairness among DL jobs
