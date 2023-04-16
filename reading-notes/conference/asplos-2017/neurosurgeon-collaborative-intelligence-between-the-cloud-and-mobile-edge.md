---
description: >-
  #graph_partitioning #cloud-edge_collaboration #prediction_model
  #computation_offloading
---

# Neurosurgeon: Collaborative intelligence between the cloud and mobile edge

## Meta Info

Presented in [ASPLOS 2017](https://doi.org/10.1145/3037697.3037698).

Authors: Yiping Kang, Johann Hauswald, Cao Gao, Austin Rovinski, Trevor Mudge, Jason Mars, Lingjia Tang (UMich).

## Understanding the paper

### TL;DRs

This paper presents **Neurosurgeon**, a lightweight scheduler to _automatically partition DNN computation_ between mobile devices and data centers _at the granularity of neural network layers_.

It doesn't require per-application profiling.

### Overview

<figure><img src="../../../.gitbook/assets/image (1) (1) (2).png" alt=""><figcaption><p>System Overview.</p></figcaption></figure>

### Dynamic DNN Partitioning

1. Analysis of the target DNN (use the prediction models to estimate)
2. Partition point selection (for _best end-to-end latency_ or _best mobile energy consumption_)

### Related Work

Previous research efforts focus on _offloading computation from the mobile to the cloud_.
