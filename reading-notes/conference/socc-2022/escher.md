---
description: >-
  #ephemeral_resources #scheduling_flexibility #scheduling_requirements
  #Kubernetes #Ray
---

# ESCHER: Expressive scheduling with ephemeral resources

## Meta Info

Presented in [SoCC 2022](https://doi.org/10.1145/3542929.3563498).

Authors: Romil Bhardwaj (_UC Berkeley_), Alexey Tumanov (_Georgia Tech_), Stephanie Wang (_UC Berkeley_), Richard Liaw, Philipp Moritz, Robert Nishihara (_Anyscale_), Ion Stoica (_UC Berkeley_).

## Understanding the paper

* Goal: support custom scheduling constraints
* Evolvability
  * Monolithic schedulers (Kubernetes, YARN)
    * Applications state resource requirements
    * Scheduler provides a fixed set of supported policies (e.g., affinity)
    * Simple, but hard to evolve
  * Two-level schedulers (Mesos, Omega)
    * Applications implement end-to-end scheduling
    * Highly evolvable, but complex (application must implement a custom scheduler)
* ESCHER
  * Two key abstractions
    * **Resource matching scheduler**
    * **Applications create ephemeral resources and get cluster state at runtime through an API**
  * Application -> ESCHER Scheduling Library (ESL) -> Framework Scheduler
  * Add latency (because of RPC call), reduce the implementation burden
  * Implemented in Ray and Kubernetes
