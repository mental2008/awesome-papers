---
description: >-
  #RDMA #performance_isolation #test_suite #RNIC #virtual_machine
  #RDMA_microarchitecture_resource
---

# Understanding RDMA microarchitecture resources for performance isolation

## Meta Info

Presented in [NSDI 2023](https://www.usenix.org/conference/nsdi23/presentation/kong).

Authors: Xinhao Kong, Jingrong Chen (_Duke University_), Wei Bai (_Microsoft_), Yechen Xu (SJTU), Mahmoud Elhaddad, Shachar Raindel, Jitendra Padhye (_Microsoft_), Alvin R. Lebeck, Danyang Zhuo (_Duke University_).

Benchmark suite: [https://github.com/host-bench/husky](https://github.com/host-bench/husky)

## Understanding the paper

### Background

* Cloud providers are working towards supporting RDMA in _general-purpose guest VMs_ to benefit third-party workloads (as opposed to first-party workloads such as storage and ML). Thus they must provide _performance isolation_ for tenants sharing the same RNIC.
* RDMA brings unique challenges to network performance isolation due to its complex NIC microarchitecture resources (e.g., NIC cache and processing units).
* This work looks at _how these microarchitecture resources affect RDMA performance isolation_ from _a public cloud provider’s perspective_. The cloud provider has _no knowledge and control of tenants’ RDMA applications_, and tenants can consume RNIC microarchitecture resources in arbitrary manners.

### Contributions

* Study the impact of all types of control verbs and exceptions on RDMA microarchitecture resource consumption.
* Present a model that represents how RDMA operations use RNIC resources.
* Develop a _test suite_ to evaluate RDMA performance isolation solutions. It shows that none of the existing solutions can pass the test suite, including three major RNIC vendors, NVIDIA (acknowledge their results), Chelsio and Intel.

### Key findings

* Microarchitecture resources
  * NIC caches
    * _Control verbs_ can cause excessive cache misses and a drastic performance reduction.
    * _Data verbs_ contend for different RNIC caches.
    * Wide range access across many objects (QP, CQ, MR) causes ICM cache misses.
  * Processing units
    * Performance interference between different _data verbs_ depends on the complexity of verbs.
    * _Error handling_ can stall RNIC processing units and hang all the applications.
    * The impact of _control verbs_ is restricted by its kernel involvement.
  * PCIe bandwidth
    * Will only become the bottleneck when the request size is in a specific range.
