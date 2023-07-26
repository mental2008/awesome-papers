# Shockwave: Fair and efficient cluster scheduling for dynamic adaptation in machine learning

## Metadata

Presented in [arxiv:2210.00093](https://arxiv.org/abs/2210.00093). (Accepted in NSDI 2023)

Authors: Pengfei Zheng, Rui Pan, Tarannum Khan, Shivaram Venkataraman, Aditya Akella, _University of Wisconsin-Madison, The University of Texas at Austin_

Code: [https://github.com/uw-mad-dash/shockwave](https://github.com/uw-mad-dash/shockwave)

## Understanding the paper

### TL;DRs

This paper presents **Shockwave**, an efficient and _fair_ scheduler for _DL training jobs_ with _elastic resource requirements_.\
It _extends classic market theory from static settings to dynamic settings_ to co-optimize efficiency and fairness; _utilizes stochastic dynamic programming_ to handle dynamic changes.

### Limitations of Existing Work

* Dynamically adjusting _model structure_ or _hyper-parameters_ (e.g., batch size) can significantly _accelerate training_ without _sacrificing accuracy_.
* Existing schedulers _fail to provide fairness and degrade system efficiency_ when _the training throughput changes over time_ under dynamic adaptation.

### Assumptions

* Treat dynamic adaptation as a part of the user’s program that cannot be modified.
  * Based on the measurement: automatically perform dynamic adaptation can hurt training accuracy.

### Challenges to Extend Market Theory

* The market needs to know _utility values_ in the future to compute _market equilibrium_; but it is hard to predict utility in the future since dynamic adaptations in jobs are non-deterministically triggered.
  * Solution: Use _Bayesian statistics_ to predict the patterns.
* Solving the dynamic market equilibrium for an (infinitely) long time horizon is difficult and impractical.
  * Solution: Only plan the schedule for _a finite length window_ (e.g., 30-60 mins).

### Evaluation

* Baselines
  * OSSP (Open Shop Scheduling)
  * AlloX
  * Themis
  * MSS (Max-Sum-Throughput)
  * GandivaFair
  * Pollux
* Improve makespan by 1.3x and fairness by 2x with existing _fair schedulers_.
