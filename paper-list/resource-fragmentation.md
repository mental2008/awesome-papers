# Resource Fragmentation

## GPU Fragmentation

* Beware of Fragmentation: Scheduling GPU-Sharing Workloads with Fragmentation Gradient Descent ([ATC 2023](../reading-notes/conference/atc-2023/)) \[[Paper](https://www.usenix.org/conference/atc23/presentation/weng)] \[[Code](https://github.com/hkust-adsl/kubernetes-scheduler-simulator)]
  * HKUST & Alibaba
  * Quantify GPU fragmentation in GPU-sharing clusters.
  * Guided scheduling with _fragmentation gradient descent._
* HiveD: Sharing a GPU Cluster for Deep Learning with Guarantees ([OSDI 2020](../reading-notes/conference/osdi-2020/)) \[[Personal Notes](../reading-notes/conference/osdi-2020/hived.md)] \[[Paper](https://www.usenix.org/conference/osdi20/presentation/zhao-hanyu)] \[[Code](https://github.com/microsoft/hivedscheduler)]
  * PKU & HKU & MSRA
  * Consider GPU affinity; resource reservation.

## General Fragmentation

* Large-scale cluster management at Google with Borg (EuroSys 2015) \[[Paper](https://dl.acm.org/doi/10.1145/2741948.2741964)]
  * Google
  * Reduce _stranded resources_ that cannot be used because another resource on the machine is fully allocated.
* Multi-Resource Packing for Cluster Schedulers (SIGCOMM 2014) \[[Paper](https://dl.acm.org/doi/10.1145/2619239.2626334)]
  * Microsoft
  * Tetris: _Pack_ jobs to avoid resource fragmentation and over-allocation.
* Evaluating job packing in warehouse-scale computing ([CLUSTER 2014](../reading-notes/conference/CLUSTER-2014/)) \[[Personal Notes](../reading-notes/conference/cluster-2014/evaluating-job-packing.md)] \[[Paper](https://static.googleusercontent.com/media/research.google.com/en/pubs/archive/43103.pdf)]
  * Google
  * **Four** metrics for evaluating the packing efficiency of schedulers: _aggregate utilization_, _hole filling_, _workload inflation_, and _cluster compaction_.
