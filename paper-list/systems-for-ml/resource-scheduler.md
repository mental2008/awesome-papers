# Resource Scheduler

## DL Training Schedulers

* \[**Lucid** | NTU & Shanghai AI Lab & SenseTime | ASPLOS 2023] [Lucid: A non-intrusive, scalable and interpretable scheduler for deep learning training jobs](https://doi.org/10.1145/3575693.3575705) \[[Code](https://github.com/S-Lab-System-Group/Lucid)]
  * Apply interpretable models.

{% content-ref url="../../reading-notes/conference/asplos-2023/lucid-a-non-intrusive-scalable-and-interpretable-scheduler-for-deep-learning-training-jobs.md" %}
[lucid-a-non-intrusive-scalable-and-interpretable-scheduler-for-deep-learning-training-jobs.md](../../reading-notes/conference/asplos-2023/lucid-a-non-intrusive-scalable-and-interpretable-scheduler-for-deep-learning-training-jobs.md)
{% endcontent-ref %}

* \[**Shockwave** | UW-Madison & UT-Austin | NSDI 2023] [Shockwave: Fair and efficient cluster scheduling for dynamic adaptation in machine learning](https://www.usenix.org/conference/nsdi23/presentation/zheng-0) \[[Code](https://github.com/uw-mad-dash/shockwave)]
  * Consider elastic resource requirements; extend market theory.

{% content-ref url="../../reading-notes/conference/nsdi-2023/shockwave-fair-and-efficient-cluster-scheduling-for-dynamic-adaptation-in-machine-learning.md" %}
[shockwave-fair-and-efficient-cluster-scheduling-for-dynamic-adaptation-in-machine-learning.md](../../reading-notes/conference/nsdi-2023/shockwave-fair-and-efficient-cluster-scheduling-for-dynamic-adaptation-in-machine-learning.md)
{% endcontent-ref %}

* \[**Muri** | PKU & ByteDance | SIGCOMM 2022] [Multi-resource interleaving for deep learning training](https://doi.org/10.1145/3544216.3544224) \[[Code](https://github.com/Rivendile/Muri)]
  * Pack jobs along multiple resource types in the time dimension; integrate with PyTorch.
* \[**Aryl** | ByteDance & CityU & CUHK | arXiv 2202.07896] [Aryl: An elastic cluster scheduler for deep learning](https://arxiv.org/abs/2202.07896)
  * Introduce capacity loaning to loan idle inference GPU servers for elastic training jobs.

{% content-ref url="../../reading-notes/miscellaneous/arxiv/2022/aryl-an-elastic-cluster-scheduler-for-deep-learning.md" %}
[aryl-an-elastic-cluster-scheduler-for-deep-learning.md](../../reading-notes/miscellaneous/arxiv/2022/aryl-an-elastic-cluster-scheduler-for-deep-learning.md)
{% endcontent-ref %}

* \[**Singularity** | Microsoft | arXiv 2202.07848] [Singularity: Planet-scale, preemptive and elastic scheduling of AI workloads](https://arxiv.org/abs/2202.07848)
  * Enable live GPU job migration.

{% content-ref url="../../reading-notes/miscellaneous/arxiv/singularity-planet-scale-preemptive-and-elastic-scheduling-of-ai-workloads.md" %}
[singularity-planet-scale-preemptive-and-elastic-scheduling-of-ai-workloads.md](../../reading-notes/miscellaneous/arxiv/singularity-planet-scale-preemptive-and-elastic-scheduling-of-ai-workloads.md)
{% endcontent-ref %}

* \[**Pollux** | Petuum & CMU | OSDI 2021] [Pollux: Co-adaptive cluster scheduling for goodput-optimized deep learning](https://www.usenix.org/conference/osdi21/presentation/qiao) \[[Code](https://github.com/petuum/adaptdl)]
  * Co-adaptively allocates resources (number of GPUs) and tunes the hyperparameters (batch size and learning rate) for all DL training jobs.

{% content-ref url="../../Conference/OSDI-2021/pollux.md" %}
[pollux.md](../../Conference/OSDI-2021/pollux.md)
{% endcontent-ref %}

* \[**MAPA** | Topology-aware scheduling | SC 2021] [MAPA: Multi-accelerator pattern allocation policy for multi-tenant GPU servers](https://doi.org/10.1145/3458817.3480853) \[[Code](https://github.com/socal-ucr/MAPA)]
  * Consider emerging multi-GPU accelerator topologies such as single/double NVLink.
* \[**Astraea** | PKU & NTU & SenseTime | TPDS 2021] [Astraea: A fair deep learning scheduler for multi-tenant GPU clusters](https://ieeexplore.ieee.org/abstract/document/9655467)
  * Long-term GPU-time fairness.
  * Consider both the temporal and spatial impacts; both at the tenant and job levels.
* \[**AntMan** | Alibaba | OSDI 2020] [AntMan: Dynamic scaling on GPU clusters for deep learning](https://www.usenix.org/conference/osdi20/presentation/xiao) \[[Code](https://github.com/alibaba/GPU-scheduler-for-deep-learning)]
  * Co-locate resource-guarantee and opportunistic jobs.
* \[**HiveD** | MSRA | OSDI 2020] [HiveD: Sharing a GPU cluster for deep learning with guarantees](https://www.usenix.org/conference/osdi20/presentation/zhao-hanyu) \[[Code](https://github.com/microsoft/hivedscheduler)]
  * Virtual private clusters; resource isolation and management for multi-tenant clusters.

{% content-ref url="../../Conference/OSDI-2020/hived.md" %}
[hived.md](../../Conference/OSDI-2020/hived.md)
{% endcontent-ref %}

* \[**Gavel** | MSR & Stanford | OSDI 2020] [Heterogeneity-aware cluster scheduling policies for deep learning workloads](https://www.usenix.org/conference/osdi20/presentation/narayanan-deepak) \[[Code](https://github.com/stanford-futuredata/gavel)]
  * Consider performance heterogeneity across multiple accelerator types.
* \[**Themis** | UW-Madison & MSR | NSDI 2020] [Themis: Fair and efficient GPU cluster scheduling](https://www.usenix.org/conference/nsdi20/presentation/mahajan)
  * A long-term fairness metric, _finish-time_ fairness, which is the ratio of the running time in a shared cluster with N jobs to running alone in a 1/N cluster.
  * Minimize the maximum finish time fairness across all ML jobs.
* \[**GandivaFair** | MSR India | EuroSys 2020] [Balancing efficiency and fairness in heterogeneous GPU clusters for deep learning](https://doi.org/10.1145/3342195.3387555)
  * Achieve efficiency and fairness despite cluster heterogeneity.
* \[**Tiresias** | UMich SymbioticLab | NSDI 2019] [Tiresias: A GPU cluster manager for distributed deep learning](https://www.usenix.org/conference/nsdi19/presentation/gu) \[[Code](https://github.com/SymbioticLab/Tiresias)]
  * Relax consolidated placement constraint.
* \[**Gandiva** | MSRA | OSDI 2018] [Gandiva: Introspective cluster scheduling for deep learning](https://www.usenix.org/conference/osdi18/presentation/xiao)
  * Hyper-parameter tuning jobs.
  * Job packing; migration; grow-shrink; time-slicing.
* \[**Optimus** | HKU & ByteDance | EuroSys 2018] [Optimus: An efficient dynamic resource scheduler for deep learning clusters](https://doi.org/10.1145/3190508.3190517) \[[Code](https://github.com/pengyanghua/optimus)]
  * Minimize JCT based on online resource-performance models.
* \[**Topology-aware scheduling** | SC 2017] [Topology-aware GPU scheduling for learning workloads in cloud environments](https://doi.org/10.1145/3126908.3126933) \[[Code](https://github.com/HiEST/gpu-topo-aware)]
  * Consider multiple link technologies such as PCI-e and NVLink.

## ML Training Schedulers

* \[**SLAQ** | Princeton | SoCC 2017] [SLAQ: Quality-driven scheduling for distributed machine learning](https://doi.org/10.1145/3127479.3127490)
  * Fine-grained job-level scheduler; leverage the iterative nature of general ML training algorithms.

{% content-ref url="../../reading-notes/conference/socc-2017/slaq-quality-driven-scheduling-for-distributed-machine-learning.md" %}
[slaq-quality-driven-scheduling-for-distributed-machine-learning.md](../../reading-notes/conference/socc-2017/slaq-quality-driven-scheduling-for-distributed-machine-learning.md)
{% endcontent-ref %}

## Trace Analysis

* \[HKUST & Alibaba PAI | NSDI 2022 | GPU sharing] [MLaaS in the Wild: Workload analysis and scheduling in large-scale heterogeneous GPU clusters](https://www.usenix.org/conference/nsdi22/presentation/weng) \[[Trace](https://github.com/alibaba/clusterdata/tree/master/cluster-trace-gpu-v2020)]
* \[SenseTime **Helios** | NTU & SenseTime | SC 2021] [Characterization and prediction of deep learning workloads in large-scale GPU datacenters](https://doi.org/10.1145/3458817.3476223) \[[Trace](https://github.com/S-Lab-System-Group/HeliosData)]
* \[Microsoft **Philly** | ATC 2019 | DL training workloads] [Analysis of large-scale multi-tenant GPU clusters for DNN training workloads](https://www.usenix.org/conference/atc19/presentation/jeon) \[[Trace](https://github.com/msr-fiddle/philly-traces)]
* \[Alibaba PAI | IISWC 2019 | DL training workloads] [Characterizing Deep Learning Training Workloads on Alibaba-PAI](https://ieeexplore.ieee.org/document/9042047)

## Survey

\[NTU & PKU & SenseTime | arXiv 2205.11913] [Deep Learning Workload Scheduling in GPU Datacenters: Taxonomy, Challenges and Vision](https://arxiv.org/abs/2205.11913) \[[Paper List](https://github.com/S-Lab-System-Group/Awesome-DL-Scheduling-Papers)]
