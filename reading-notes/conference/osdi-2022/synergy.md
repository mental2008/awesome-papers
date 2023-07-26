---
description: '#deep_learning_training_workloads #resource_scheduler #homogeneous_cluster'
---

# Looking beyond GPUs for DNN scheduling on multi-tenant clusters

## Meta Info

Presented in [OSDI 2022](https://www.usenix.org/conference/osdi22/presentation/mohan).

Authors: Jayashree Mohan, Amar Phanishayee, Janardhan Kulkarni (_Microsoft Research_), Vijay Chidambaram (_UT-Austin & VMware Research_).

Code: [https://github.com/msr-fiddle/synergy](https://github.com/msr-fiddle/synergy)

## Understanding the paper

### TL;DR

This paper presents a scheduler for DNN training jobs named **Synergy**, which considers the resource sensitivity to the allocation of CPU and memory resources.

### Limitations

It doesn't consider **fractional GPU allocations** (no GPU share).

### Scheduling algorithms

* It proposes two algorithms to enable **multi-dimensional bin-packing**.
  * **Synergy-Opt**
    * Find approximate solutions using **ILP formulation** (typical Microsoft style...).
    * Computationally expensive.
  * **Synergy-Tune**
    * Sort the pending jobs by their GPU demands, followed by CPU, and memory demand.
    * Pick the server with **the least amount of free resources** just enough to fit the demand vector of the job.
      * Code: [https://github.com/msr-fiddle/synergy/blob/master/simulator/resources/cluster.py#L382](https://github.com/msr-fiddle/synergy/blob/master/simulator/resources/cluster.py#L382)
    * The GPU demand is fixed, but **the auxiliary resource allocations (CPU, memory) are fungible**.
    * Within 10% of the optimal value (**Synergy-Opt**).
* Compared to a naive greedy algorithm **Synergy-Greedy**.
  * _First-fit_. Place the job on the server that can satisfy the job's demands in all dimensions.
  * Problems
    * Result in GPU fragmentation as auxiliary resources are exhausted by jobs.
    * Hurt the fairness as some jobs can be skipped over for a long time if their demands cannot be satisfied in the cluster.
  * (In my view, this is a poor baseline...)

### Implementation

A prototype of Synergy and an associate event-driven simulator are implemented in _Python_.

### Evaluation

* Testbed
  * 4 node cluster, each node with 500GB DRAM, 24 CPU cores, and 8 V100 GPUs
* Simulation
  * Consider two clusters:
    * 16-node cluster (same node configuration as above)
    * 64-node cluster (same node configuration as above)
* Assume a **CPU:GPU ratio of 3** and **fair-share memory of 62.5GB per GPU**.
