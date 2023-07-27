---
description: '#serverless #API_remoting'
---

# DGSF: Disaggregated GPUs for serverless functions

## Meta Info

Presented in [IPDPS 2022](https://ieeexplore.ieee.org/document/9820659).

## Understanding the paper

### TL;DR

This paper presents **DGSF**, a platform that transparently enables serverless functions to use GPUs through CUDA APIs.

### GPU disaggregation challenges

* Support API transparency.
* Hide the latency of communication with remote GPUs.
* Load-balancing access to heavily shared GPUs.

### Implementation

* The prototype uses OpenFaaS v0.21.1 as serverless platform.
* Assume all functions are invoked _without a cold start_.

### Evaluation

* The cost of API remoting?
* The impact of DGSF's optimization?
* Utilization increase and performance gains when consolidating functions?
* The overhead of migration?
