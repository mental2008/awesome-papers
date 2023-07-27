# SLAQ: Quality-driven scheduling for distributed machine learning

## Metadata

Presented in [SoCC 2017](https://doi.org/10.1145/3127479.3127490).

Authors: Haoyu Zhang, Logan Stafman, Andrew Or, Michael J. Freedman, _Princeton University_

## Understanding the paper

### TL;DRs

This paper presents **SLAQ**, which is a cluster scheduling framework that hosts multi-tenant approximate _ML training jobs_ running on shared resources.\
It is a **fine-grained job-level scheduler**, which _focuses on the allocation of cluster resources_ between competing ML jobs, but does so _short time intervals_ (i.e., hundreds of milliseconds to a few seconds).

### Key Insights

* Leverage the _iterative nature_ of ML training algorithms.
  * Collect quality and resource usage information from concurrent jobs.
  * Generate quality-improvement predictions for future iterations.

### Limitation of Existing Work

Existing job-level schedulers (YARN, Mesos, Apollo, Hadoop Capacity, Quincy, etc.) mostly allocate resources based on _resource fairness_ or _priorities_.\
For ML training jobs, these schedulers often make _suboptimal_ scheduling decisions because they are agnostic to the progress (quality improvement) within each job.

### Implementation

The system is implemented within the _Apache Spark framework_ and utilizes _Spark MLlib_.
