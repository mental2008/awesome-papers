# Skyplane: Optimizing transfer cost and throughput using cloud-aware overlays

### Meta Info

Presented in [NSDI 2023](https://www.usenix.org/conference/nsdi23/presentation/jain).

Authors: Paras Jain, Sam Kumar, Sarah Wooders, Shishir G Patil, Joseph E Gonzalez, Ion Stoica, _University of California, Berkeley_

Homepage: [https://skyplane.org/](https://skyplane.org/)

Code: [https://github.com/skyplane-project/skyplane](https://github.com/skyplane-project/skyplane)

## Understanding the paper

### TL;DRs

This paper presents **Skyplane**, a system for _bulk data transfer_ between _cloud object stores_ that uses _cloud-aware network overlays_ to optimally navigate _the trade-off between price and performance_.

Its planner uses _mixed-integer linear programming_ to _determine the optimal overlay path and resource allocation_ for data transfer, subject to _user-provided constraints on price or performance_.

### Comparison to Existing Work

* Consider price and elasticity (opposed to _Resilient overlay networks (RON), SOSP 2001_).
* Richer problem and solution space.

### Implementation

* Implemented in Python 3.
* Use the Gurobi library to solve MILP instances.
* Support three major cloud providers: Amazon Web Services, Microsoft Azure, and Google Cloud Platform.
