---
description: >-
  #deep_learning_recommender_system #memory_disaggregation
  #total_cost_of_ownership #RDMA
---

# DisaggRec: Architecting disaggregated systems for large-scale personalized recommendation

## Meta Info

Presented in [arxiv:2212.00939](https://arxiv.org/abs/2212.00939).

Authors: Liu Ke (_Meta AI & UWash_), Xuan Zhang (_UWash_), Benjamin Lee (_Meta AI & UPenn_), G. Edward Suh (_Meta AI & Cornell_), Hsien-Hsin S. Lee (_Meta AI & Intel_).

## Understanding the paper

### TL;DRs

This paper presents **DisaggRec**, _a disaggregated system_ for _large-scale recommendation serving_, that decouples the compute and memory resources.

### Terminology

* Node
  * **Compute nodes (CNs)**: supply high-performance processors but only a limited amount of memory.
  * **Memory nodes (MNs)**: supply high-capacity DRAM devices.
* Strategy
  * **Scale-up**: equip _a single server_ with _sufficient resources_ to serve end-to-end model inference.
  * **Scale-out**: the model's SparseNet is _sharded and distributed across multiple servers_ when _the embedding tables_ cannot fit into a single server's memory.

### Problems

* Monolithic servers provision computing and memory in _fixed proportions_, leading to _idle resources_ and _wasted costs_.

### Technical Details

* _Co-optimize the partitioning strategies_ for recommendation models and design strategies for disaggregated CNs and MNs.
* Minimize the cost subject to latency targets and availability requirements.
* Focus on _two industry-grade models_ — a memory-intensive RM1 and a compute-intensive RM2.

### System Architecture

<figure><img src="../../../../.gitbook/assets/image (6).png" alt=""><figcaption><p>Disaggregated System Architecture.</p></figcaption></figure>

### Model Serving

<figure><img src="../../../../.gitbook/assets/image (1).png" alt=""><figcaption><p>RPC-based Model Serving.</p></figcaption></figure>
