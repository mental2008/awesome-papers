---
description: '#rCUDA #distributed_OS #disaggregated_system #GPU_adaptor #device_adaptor'
---

# Slashing the disaggregation tax in heterogeneous data centers with FractOS

## Meta Info

Presented in [EuroSys 2022](https://doi.org/10.1145/3492321.3519569).

Homepage:: [https://lsds.doc.ic.ac.uk/projects/fractos](https://lsds.doc.ic.ac.uk/projects/fractos)

## Understanding the paper

### TL;DR

This paper presents **FractOS**, a distributed OS that is designed to minimize the network overheads of disaggregation in heterogeneous data centers.

It enables _direct P2P data transfers between different devices_, without centralized application and OS control.

### Existing problem

* _Current software stacks introduce unnecessary messages_ through the shared data-center network in a disaggregated system.

### How to manage accelerators (GPUs)

* Compared to rCUDA
  * rCUDA accesses remote GPUs transparently by _interposing CUDA driver calls_.
  * FractOS GPU service uses _a single roundtrip Request invocation_ per kernel invocation.
* FractOS
  * Build _a GPU adaptor_ to _expose_ a disaggregated GPU.
  * The GPU adaptor _runs on the host CPU_, _using the OS GPU driver_, and _offers several RPCs_ exposed through _Requests_: GPU context initialization, memory de/allocation, kernel loading, kernel invocation, and cleanup.

### Implementation

* 17.5K LoC of C++.
