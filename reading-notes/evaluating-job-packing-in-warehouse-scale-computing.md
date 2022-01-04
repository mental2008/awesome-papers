# Evaluating job packing in warehouse-scale computing

## ​Metadata

Presented in [CLUSTER '14](https://static.googleusercontent.com/media/research.google.com/en/pubs/archive/43103.pdf).

Authors: Abhishek Verma, Madhukar Korupolu, John Wilkes

## Understanding the paper

The paper compares four metrics for evaluating the packing efficiency of schedulers.

1. Aggregate utilization
   * Metric: the allocation rate of each type (e.g., CPU, RAM).
   * Adv.
     * Simple, most commonly used.
   * Disadv.
     * Cannot distinguish between schedulers that place all tasks.
     * Hide fragmentation effects.
     * Hide stranding resources.
2. Hole filling
   * Method: count how many appropriately-sized units of size U can fit into the holes.
   * Adv.
     * Fast and simple.
   * Disadv.
     * Ignore constraints.
     * Ignore heterogenity of workloads.
3. Workload inflation
   * Method: scale up the original workload until it no longer fits.
   * An improved version of hole filling (consider the heterogenity).
   * **Perspective of workloads.**
   * Details
     * Horizontal scaling.
     * Vertical scaling.
     * Monte-Carlo technique.
   * Adv.
     * Answer "what if?" questions about future workload growth.
   * Disadv.
     * Multiple policy choices.
4. Cluster compaction
   * Method: shrink the cluster until the workload no longer fits.
   * **Perspective of machines.**
   * Evaluation methodology in Borg.
   * Steps
     * Generate a random permutation of machines.
     * Binary search to determine the minimum machines to run the workload.
     * Repeated trials to obtain a distribution of the compacted cluster sizes.
   * Adv.
     * Directly answer "how small a cluster could be used to run this workload?".
     * Fewer policy choices.
   * Disadv.
     * Longer running time.

|                         | Aggregate utilization |      Hole filling      | Workload inflation | Cluster compaction |
| ----------------------: | :-------------------: | :--------------------: | :----------------: | :----------------: |
|                Accuracy |          low          |         medium         |        high        |        high        |
| Fragmentation/stranding |           no          |           yes          |         yes        |         yes        |
|  Attributes/constraints |           no          |           no           |         yes        |         yes        |
|    Time for computation |        < 1 min        |       \~ 30 mins       |     \~ 2 hours     |     \~ 5 hours     |
|    Context where useful |  quick approximation  | fixed-size slot counts |  cluster operators |  capacity planners |
