# Ray: A distributed framework for emerging AI applications

## Metadata

Presented in [OSDI 2018](https://www.usenix.org/conference/osdi18/presentation/moritz).

Authors: Philipp Moritz, Robert Nishihara, Stephanie Wang, Alexey Tumanov, Richard Liaw, Eric Liang, Melih Elibol, Zongheng Yang, William Paul, Michael I. Jordan, Ion Stoica (University of California, Berkeley)

Code: [https://github.com/ray-project/ray](https://github.com/ray-project/ray)

## Understanding the paper

### TL;DR

This paper presents **Ray**, a distributed system tailed for RL applications. It provides both an **actor-based (stateful)** and a **task-parallel (stateless)** programming abstraction. It employs **a distributed scheduler** and **a distributed fault-tolerant store** to manage the system's control state.

### Motivation

* A framework for RL applications must provide efficient support for **training, serving, and simulation**. All three of these workloads are tightly coupled in a single application.
* Fault tolerance really matters with AI applications. 1) Easy development; 2) Reproducibility; 3) Allow cheap resources like spot instances.

### Technical details

* Global control store (GCS)
  * Maintain the entire control state of the system.
  * Maintain fault tolerance and low latency.
* Two-level hierarchical scheduler (bottom-up)
  * Consist of a global scheduler and per-node local schedulers.
  * Tasks created at a node are submitted first to the node's local scheduler.
  * Global scheduler considers each node's load and task's constraints.
* In-memory distributed storage system
  * Store the inputs and outputs of every task.
  * Via shared memory; Apache Arrow.
  * Recover any objects through lineage re-execution.

### Evaluation

All experiments were run on AWS.

### Experience

* The authors believe that centralizing control state will be a key design component of future distributed systems.
* From [Ion Stoica — Spark, Ray, and Enterprise Open Source](https://wandb.ai/wandb\_fc/gradient-dissent/reports/Ion-Stoica-Spark-Ray-and-Enterprise-Open-Source--VmlldzoxNDEyMzY0)
  * Spark abstracts away parallels; Ray exposes parallels.
  * Ray fundamentally is an RPC framework, plus an actor framework, plus an object store which allows you to efficiently pass the data between different functions and actors by reference.
