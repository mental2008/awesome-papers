---
description: '#CXL #memory_management #tiered_memory #Linux_kernel'
---

# TPP: Transparent page placement for CXL-enabled tiered-memory

## Meta Info

Presented in [ASPLOS 2023](https://doi.org/10.1145/3582016.3582063).

Authors: Hasan Al Maruf (_UMich_), Hao Wang (_NVIDIA_), Abhishek Dhanotia, Johannes Weiner (_Meta_), Niket Agarwal, Pallab Bhattacharya (_NVIDIA_), Chris Petersen (_Meta_), Mosharaf Chowdhury (_UMich_), Shobhit Kanaujia, Prakash Chauhan (_Meta_).

Code: [https://lwn.net/Articles/876993/](https://lwn.net/Articles/876993/)

## Understanding the paper

* **TPP: Transparent Page Placement**
* It characterizes memory usage patterns of applications in Meta.
  * Show the opportunities to _offload colder pages to slower memory tiers_.
* It proposes an OS-level application-transparent pace placement (TPP) for CXL-enabled memory.
  * It identifies and places hot/cold pages to appropriate memory tiers (i.e., local memory or CXL memory).

### Implementation

A major portion of it has been merged to Linux kernel v5.18. The rest of it is under an upstream discussion.

### Evaluation

* Evaluated in the production server fleet with early samples of new x86 CPUs with CXL 1.1.
* Improve application’s performance on default Linux by **18%**.
* Outperforms _NUMA Balancing_ and _AutoTiering_, two state-of-the-art tiered-memory management mechanisms, by **5–17%**.
