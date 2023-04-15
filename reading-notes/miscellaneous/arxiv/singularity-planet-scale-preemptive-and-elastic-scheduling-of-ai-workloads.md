---
description: Live GPU job migration.
---

# Singularity: Planet-scale, preemptive and elastic scheduling of AI workloads

## Metadata

Presented in [arXiv:2202.07848](https://arxiv.org/abs/2202.07848).

Authors: Dharma Shukla, Muthian Sivathanu, Srinidhi Viswanatha, Bhargav Gulavani, Rimma Nehme, Amey Agrawal, Chen Chen, Nipun Kwatra, Ramachandran Ramjee, Pankaj Sharma, Atul Katiyar, Vipul Modi, Vaibhav Sharma, Abhishek Singh, Shreshth Singhal, Kaustubh Welankar, Lu Xun, Ravi Anupindi, Karthik Elangovan, Hasibur Rahman, Zhou Lin, Rahul Seetharaman, Cheng Xu, Eddie Ailijiang, Suresh Krishnappa, Mark Russinovich (_Microsoft_)

## Understanding the paper

### TL;DR

This paper proposes a transparent and robust mechanism to **checkpoint generic DNN training jobs** that are written _**without checkpointing support**_, thus making all (even _**unmodified**_) jobs _automatically checkpointable_, _preemptible_, _migratable_, and _elastic_.

### Benefits to Users

* Improved fault tolerance.
* Opportunistic usage of capacity.
  * Enable BE jobs to opportunistically use spare capacity, and be quickly preempted (**without lost work**) when Prod jobs arrive.
* Background defragmentation for locality.
  * Migration of small jobs enables the scheduler to defragment locality domains to place larger jobs.
* Online upgrades.
  * Cluster-wide.

### Previous work

* Propose migration and elastic resource sharing as an enabler for better scheduling (e.g., Gandiva, GandivaFair).
* Don't address the problem of how to deal with the vast majority of jobs that are not migratable or elastic.

### A remarkably simple user experience

_The user focuses only on the ML task and does not need to think about checkpointing or elasticity._

### How to checkpoint?

1. Program state (CPU)
2. Device state (GPU)
3. Communication state (NCCL)
4. File system state

#### CRIU

* Homepage: [https://criu.org/Main\_Page](https://criu.org/Main\_Page)
* Provide address-space migration to **checkpoint program state**.
* Key limitation: cannot handle device mappings by processes using GPU.
* Related Issues
  * criu dump failed for /dev/fb0: [https://github.com/checkpoint-restore/criu/issues/527](https://github.com/checkpoint-restore/criu/issues/527)
  * CRIU Cuda support: [https://github.com/checkpoint-restore/criu/issues/534](https://github.com/checkpoint-restore/criu/issues/534)

#### Device Proxy

Intercept the CUDA API via the `LD_PRELOAD` mechanism.

Server component: one per device. Client component: embedded in each process interacting with the device.

Two types of interceptors:

* Dispatch Interceptors ($$\text{D}_{\text{Int}}$$)
  * Ship the API cross-address-space to the device proxy server.
  * Handle serialization/deserialization of parameters/response.
* Semantics-Aware Interceptors ($$\text{SA}_{\text{Int}}$$)
  * Memory allocation.
  * Communication. (Barrier)
  * Device Synchronization.

<figure><img src="../../../.gitbook/assets/image (1) (2).png" alt=""><figcaption><p>Overview of Device Proxy</p></figcaption></figure>

#### Checkpoint device state

* Model state (e.g., parameters) is checkpointed by the device-proxy process via device-to-host memcpy.
* All stateful API calls (e.g., creation of context, stream, event, etc.) are annotated, and the $$\text{D}_{\text{Int}}$$ for those calls automatically log them for replay upon restore.

#### Checkpoint communication state

* Cannot handle in-flight communication.
* Quiesce the job to ensure that there are no collective calls in flight (acquire the barrier).

#### Checkpoint file system state

* The libc I/O libraries (e.g., open, read, write, etc.) are intercepted by a $$\text{SA}_{\text{Int}}$$ to track/log updates made by the job to the local file system.
* Mutated files can be migrated along with the process checkpoint.

#### Checkpoint/Restore flow

1. Acquire the barrier.
2. Generate a GPU and CRIU dump.
3. Upload the dump to remote storage.
4. Download the dump on a different set of nodes.
5. Restore the CRIU dumps and GPU dumps, and release the barrier.

### Transparent checkpointing

1. On-demand: when job needs to be preempted.
2. Periodically: specified by the user (epoch-level or time-based)

### Transparent elasticity

<figure><img src="../../../.gitbook/assets/image (1) (1) (1).png" alt=""><figcaption><p>Elasticity in Singularity vs. today</p></figcaption></figure>
