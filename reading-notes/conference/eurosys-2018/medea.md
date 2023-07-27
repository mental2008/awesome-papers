# Medea: Scheduling of long running applications in shared production clusters

## Metadata

Presented in [EuroSys 2018](https://www.microsoft.com/en-us/research/publication/medea-scheduling-long-running-applications-shared-production-clusters/).

Authors: Panagiotis Garefalakis, Konstantinos Karanasos, Peter Pietzuch, Arun Suresh, Sriram Rao (_Imperial College London_ & _Microsoft_)

## Understanding the paper

### Methodology

* Medea adopts a two-scheduler design:
  * For the placement of long-running applications (LRAs), it uses a dedicated scheduler.
  * For the placement of task-based applications, it directly uses a traditional scheduler.
* It formulates the placement of LRAs with constraints as **an integer linear program (ILP)**, and solves it as an online optimization problem.
* It **considers multiple LRA container requests at once** to achieve higher-quality placements and global objectives (e.g., minimizing the violation of placement constraints, resource fragmentation, any load imbalance, or the number of machines used).
* It also investigates heuristics that trade placement quality for lower scheduling latency:
  1. **Tag popularity**: prioritizes the placement of containers that **have more constraints**.
  2. **Node candidate**s: prioritizes the placement of containers that **have smaller nodes allowed to be placed**.

### Implementation

Built as an extension to **Apache Hadoop YARN**.

### Evaluation

Evaluated on a 400-node pre-production cluster.
