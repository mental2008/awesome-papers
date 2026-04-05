---
description: >-
  #model_serving_system #mixed-integer_linear_programming
  #workload_unpredictability
---

# Shepherd: Serving DNNs in the wild

## Meta Info

Presented in [NSDI 2023](https://www.usenix.org/conference/nsdi23/presentation/zhang-hong).

Authors: Hong Zhang (_UWaterloo_), Yupeng Tang, Anurag Khandelwal (_Yale_), Ion Stoica (_UC Berkeley_)

## Understanding the paper

### TL;DR

* This work presents **Shepherd**, a model serving system.
* It uses _a two-level design_ that decouples model serving into _planning_ and _serving_ modules.
  * Plan: aggregate request streams into _moderately-sized_ groups.
  * Serve: employ an online algorithm; leverage preemption and model-specific batching

### Challenges

* **Short-term workload unpredictability**
  * The request arrival rates can be quite unpredictable at smaller time granularities (e.g., milliseconds).
* Resource utilization v.s. scalability
  * (1) Make periodic provisioning and serving decisions for each user stream independently → Over-provisioning GPUs → Poor resource utilization
  * (2) Time-multiplex the GPU cluster across different user streams → Increased computational complexity when the number of the numbers of request streams and GPUs are large → Poor scalability

### Designs

* As indicated in Nexus (SOSP 2019), a simple linear model can accurately model the execution latency for varying batch sizes.
  * $${l}_{m} = \alpha_m \cdot | B | + \beta_m$$
  * $$B$$: the batch size.
  * $$\alpha_m$$: the latency for each additional request in the batch.&#x20;
  * $$\beta_m$$: the baseline execution latency for executing an empty batch on the model.

#### **Periodic planner (Herd)**

1. Each request stream has an average load $${rate}_i$$
2. Measure the maximum goodput $$T_i$$, i.e., each stream $$i$$ can achieve on a single GPU
3. Compute $$n_i = \frac{rate_i}{T_i}$$

***

Use an Integer Linear Programming (ILP) to **combine streams into serving groups** to maximize the minimum burst tolerance across all streams.

Burst tolerance metric: $$bt(i) = \sum_j \frac{size_j \cdot x_{ij}}{n_i}$$

* Decision variables
  * $$x_{ij} \in \{0,1\}$$: Is stream $$i$$ mapped to group $$j$$?
  * $$y_{cj} \in \{0,1\}$$: Is affinity-set $$c$$ mapped to group $$j$$?
  * $$z_{kj} \in \{0,1\}$$: Is model $$k$$ mapped to group $$j$$?
  * $$size_j$$: # of GPUs allocated to group $$j$$?
* Input parameters
  * $$mem$$: GPU memory capacity
  * $$G$$: Scalability limit for # of GPUs per group
  * $$N$$: # of GPUs in cluster
  * $$h_{ki} \in \{0,1\}$$: Does stream $$i$$ use model $$k$$?
  * $$q_{ck} \in \{0,1\}$$: Does affinity-set $$c$$ include model $$k$$?
* Optimization Objective
  * $$\text{maximize}\ min_{i}{\{bt(i)\}}$$
* **Constraints**
  * Cluster-size limit
    * $$\sum_j size_j \le N$$
  * Group-worker limit
    * $${size}_j \le G$$
  * GPU memory limit
    * $$\sum_{k}{z_{kj}} \cdot {m_k} \le mem$$
  * Group surjectivity (every stream $$i$$ is assigned to a single group $$j$$ and only if its associated model is also assigned to group $$j$$)
    * $$\sum_{j}{x_{ij}} = 1, , \forall {i}$$
    * $$h_{ki} \cdot x_{ij} \le z_{kj}, \forall {i,j,k}$$
      * Make sure if stream $$i$$ is mapped to group $$j$$ and stream $$i$$ uses model $$k$$, model $$k$$ must be mapped to group $$j$$.
  * Affinity-set surjectivity
    * $$\sum_{c}{y_{cj}} = 1, \forall j$$
    * $$q_{ck} \cdot z_{kj} \le y_{cj}, \forall {i,j,k}$$
  * **No per-stream SLO constraint.**

#### **Online serving algorithm (Flex)**

1. Each request $$r$$ has an arrival time $$a_r$$, deadline $$d_r$$, queries model $$m_r$$.
2. For a batch $$B$$
   1. Arrival time $$a(B)$$ is the arrival time of the most recent request in $$B$$
   2. Deadline $$d(B)$$ is the earliest deadline of all requests in $$B$$

Objective: **maximize the overall goodput**.

* Choose the largest feasible batch across all model priority queues (sorted by deadlines).
* Preempt the current batch if the generated batch is $$\lambda$$ times larger than currently running batch.
* Preemption
  * Insert exit points between different DNN layers
  * Trade-off the preemption and execution delay overheads

### Evaluation

* Baselines
  * Clockwork (OSDI 2020)
  * Nexus (SOSP 2019)
* Setup
  * Testbed: 12 `p3.2xlarge` instances (8 vCPUs, 61GB RAM, 1 V100 GPU with 16GB memory)
  * Emulation: `m4.16xlarge` instances (64 vCPUs, 256GB RAM)
  * The request router, periodic planner, and online schedulers are deployed on separate `m4.16xlarge` instances.

### Comments

#### Preemption

> If preemption occurs, requests in preempted batch that can still meet their SLOs are re-enqueued to their corresponding priority queues. The re-enqueued requests will be treated as newly arrived requests so they can be scheduled again.

The preempted batch doesn't contribute to system throughput. This leads to wasted GPUs.

#### Dynamic model swapping

> Shepherd only loads models onto GPU memory at the start of a planning period. An alternative solution is to dynamically swap models between GPU and CPU memory on-demand during online serving. However, since such swaps are likely to take much longer than serving a request, its cost must be weighed against the potential performance gains from swapping in a new model. We leave incorporating this decision as a part of online serving as future work.

It doesn't support to dynamically swap models between CPU and GPU memory.

#### Support large DNN models

> If a DNN model is so large that it cannot be co-located with other models in GPU memory, Herd must place it in an isolated group with reduced degree of multiplexing. It is possible, however, to break such large models into smaller partitions to group them with other models for better multiplexing.

AlpaServe (OSDI 2023) seems to adopt this way by partitioning large models.
