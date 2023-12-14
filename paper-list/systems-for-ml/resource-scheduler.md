# Resource Scheduler

{% hint style="info" %}
I am actively maintaining this list.
{% endhint %}

## Scheduling for DL Training Workloads

* Interference-aware Multiplexing for Deep Learning in GPU Clusters: A Middleware Approach ([SC 2023](../../reading-notes/conference/sc-2023/)) \[[Personal Notes](../../reading-notes/conference/sc-2023/iadeep.md)] \[[Paper](https://doi.org/10.1145/3581784.3607060)] \[[Code](https://github.com/buzy-coder/IADeep)]
  * UMacau & SIAT, CAS
  * IADeep — a cluster scheduler to co-locate DL training tasks
  * Tune training configurations (e.g., batch size) across all co-located tasks; choose appropriate tasks to multiplex on a GPU device; consider PCIe bandwidth
* Sia: Heterogeneity-aware, goodput-optimized ML-cluster scheduling ([SOSP 2023](../../reading-notes/conference/sosp-2023/)) \[[Paper](https://dl.acm.org/doi/10.1145/3600006.3613175)]
  * CMU & Cornell & Petuum Inc.
* Lyra: Elastic Scheduling for Deep Learning Clusters ([EuroSys 2023](../../reading-notes/conference/eurosys-2023.md)) \[[Personal Notes](../../reading-notes/miscellaneous/arxiv/2022/aryl-an-elastic-cluster-scheduler-for-deep-learning.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3552326.3587445)] \[[arXiv](https://arxiv.org/abs/2202.07896)]
  * ByteDance & CityU & CUHK
  * Loan idle inference GPU servers for elastic training jobs.
* Shockwave: Fair and Efficient Cluster Scheduling for Dynamic Adaptation in Machine Learning ([NSDI 2023](../../reading-notes/conference/nsdi-2023/)) \[[Personal Notes](../../reading-notes/conference/nsdi-2023/shockwave.md)] \[[Paper](https://www.usenix.org/conference/nsdi23/presentation/zheng)] \[[Code](https://github.com/uw-mad-dash/shockwave)]
  * UW-Madison & UT-Austin
  * Elastic resource requirements; extend market theory.
* Lucid: A Non-intrusive, Scalable and Interpretable Scheduler for Deep Learning Training Jobs ([ASPLOS 2023](../../reading-notes/conference/asplos-2023/)) \[[Personal Notes](../../reading-notes/conference/asplos-2023/lucid.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3575693.3575705)] \[[Code](https://github.com/S-Lab-System-Group/Lucid)]
  * NTU & Shanghai AI Lab & SenseTime
  * Scheduling interpretability
* Multi-Resource Interleaving for Deep Learning Training ([SIGCOMM 2022](../../reading-notes/conference/sigcomm-2022/)) \[[Personal Notes](../../reading-notes/conference/sigcomm-2022/multi-resource-interleaving-for-deep-learning-training.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3544216.3544224)] \[[Code](https://github.com/Rivendile/Muri)]
  * PKU & ByteDance
  * Muri: Pack jobs along multiple resource types in the time dimension
  * Integrate with PyTorch
* Singularity: Planet-Scale, Preemptive and Elastic Scheduling of AI Workloads (arXiv 2202.07848) \[[Personal Notes](../../reading-notes/miscellaneous/arxiv/singularity-planet-scale-preemptive-and-elastic-scheduling-of-ai-workloads.md)] \[[Paper](https://arxiv.org/abs/2202.07848)]
  * Microsoft
  * Live GPU job migration
* Looking Beyond GPUs for DNN Scheduling on Multi-Tenant Clusters ([OSDI 2022](../../reading-notes/conference/osdi-2022/)) \[[Personal Notes](../../reading-notes/conference/osdi-2022/synergy.md)] \[[Paper](https://www.usenix.org/conference/osdi22/presentation/mohan)] \[[Code](https://github.com/msr-fiddle/synergy)]
  * MSR & UT-Austin & VMware Research
  * Consider the allocation of CPU and memory resources.
* Pollux: Co-adaptive Cluster Scheduling for Goodput-Optimized Deep Learning ([OSDI 2021](../../reading-notes/conference/osdi-2021/)) \[[Personal Notes](../../reading-notes/conference/osdi-2021/pollux.md)] \[[Paper](https://www.usenix.org/conference/osdi21/presentation/qiao)] \[[Code](https://github.com/petuum/adaptdl)]
  * Petuum & CMU
  * **Best Paper Award**
  * Co-adaptively allocates resources (number of GPUs) and tunes the hyperparameters (batch size and learning rate) for all DL training jobs.
* MAPA: Multi-Accelerator Pattern Allocation Policy for Multi-Tenant GPU Servers (SC 2021) \[[Paper](https://dl.acm.org/doi/10.1145/3458817.3480853)] \[[Code](https://github.com/socal-ucr/MAPA)]
  * UC Riverside & Pacific Northwest National Lab & USydney
  * Consider multi-GPU accelerator topologies such as single/double NVLink.
* Astraea: A Fair Deep Learning Scheduler for Multi-Tenant GPU Clusters (TPDS 2021) \[[Paper](https://ieeexplore.ieee.org/abstract/document/9655467)]
  * PKU & NTU & SenseTime
  * Long-term GPU-time fairness
* AntMan: Dynamic Scaling on GPU Clusters for Deep Learning ([OSDI 2020](../../reading-notes/conference/osdi-2020/)) \[[Paper](https://www.usenix.org/conference/osdi20/presentation/xiao)] \[[Code](https://github.com/alibaba/GPU-scheduler-for-deep-learning)]
  * Alibaba
  * Co-locate resource-guarantee and best-effort jobs.
* HiveD: Sharing a GPU Cluster for Deep Learning with Guarantees ([OSDI 2020](../../reading-notes/conference/osdi-2020/)) \[[Personal Notes](../../reading-notes/conference/osdi-2020/hived.md)] \[[Paper](https://www.usenix.org/conference/osdi20/presentation/zhao-hanyu)] \[[Code](https://github.com/microsoft/hivedscheduler)]
  * MSRA
  * Virtual private clusters; resource isolation and management for multi-tenant clusters.
* Heterogeneity-Aware Cluster Scheduling Policies for Deep Learning Workloads ([OSDI 2020](../../reading-notes/conference/osdi-2020/)) \[[Paper](https://www.usenix.org/conference/osdi20/presentation/narayanan-deepak)] \[[Code](https://github.com/stanford-futuredata/gavel)]
  * MSR & Stanford
  * Gavel: Consider performance heterogeneity across multiple accelerator types.
* Themis: Fair and Efficient GPU Cluster Scheduling ([EuroSys 2020](../../reading-notes/conference/eurosys-2020.md)) \[[Paper](https://www.usenix.org/conference/nsdi20/presentation/mahajan)]
  * UW-Madison & MSR
  * Long-term fairness
* AlloX: Compute Allocation in Hybrid Clusters ([EuroSys 2020](../../reading-notes/conference/eurosys-2020.md)) \[[Paper](https://doi.org/10.1145/3342195.3387547)] \[[Code](https://github.com/lenhattan86/allox)]
  * Stony Brook University & SUNY Korea & UMich
  * CPU-GPU hybrid clusters; min-cost bipartite matching.
* Balancing Efficiency and Fairness in Heterogeneous GPU Clusters for Deep Learning (EuroSys 2019) \[[Paper](https://dl.acm.org/doi/10.1145/3342195.3387555)]
  * MSR India
  * $$\text{Gandiva}_\text{Fair}$$: Achieve efficiency and fairness despite cluster heterogeneity
* Tiresias: A GPU Cluster Manager for Distributed Deep Learning (NSDI 2019) \[[Paper](https://www.usenix.org/conference/nsdi19/presentation/gu)] \[[Code](https://github.com/SymbioticLab/Tiresias)]
  * UMich SymbioticLab
  * Relax consolidated placement constraint
* Gandiva: Introspective Cluster Scheduling for Deep Learning ([OSDI 2018](../../reading-notes/conference/osdi-2018/)) \[[Paper](https://www.usenix.org/conference/osdi18/presentation/xiao)]
  * MSRA
  * Hyper-parameter tuning jobs; job packing; migration; grow-shrink; time-slicing.
* Optimus: An Efficient Dynamic Resource Scheduler for Deep Learning Clusters (EuroSys 2018) \[[Paper](https://dl.acm.org/doi/10.1145/3190508.3190517)] \[[Code](https://github.com/pengyanghua/optimus)]
  * HKU & ByteDance
  * Minimize JCT based on online resource-performance models.
* Topology-Aware GPU Scheduling for Learning Workloads in Cloud Environments (SC 2017) \[[Paper](https://dl.acm.org/doi/10.1145/3126908.3126933)] \[[Code](https://github.com/HiEST/gpu-topo-aware)]
  * Barcelona Supercomputing Center & IBM Watson Research Center
  * Consider multiple link technologies such as PCI-e and NVLink.

## Scheduling for General ML Training Workloads

* SLAQ: Quality-Driven Scheduling for Distributed Machine Learning ([SoCC 2017](../../reading-notes/conference/socc-2017/)) \[[Personal Notes](../../reading-notes/conference/socc-2017/slaq.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3127479.3127490)]
  * Princeton
  * Fine-grained job-level scheduler
  * Leverage the iterative nature of general ML training algorithms

## Trace Analysis

* MLaaS in the Wild: Workload Analysis and Scheduling in Large-Scale Heterogeneous GPU Clusters ([NSDI 2022](../../reading-notes/conference/nsdi-2022.md)) \[[Paper](https://www.usenix.org/conference/nsdi22/presentation/weng)] \[[Trace](https://github.com/alibaba/clusterdata/tree/master/cluster-trace-gpu-v2020)]
  * HKUSt & Alibaba
  * GPU sharing traces
* Characterization and Prediction of Deep Learning Workloads in Large-Scale GPU Datacenters (SC 2021) \[[Paper](https://dl.acm.org/doi/10.1145/3458817.3476223)] \[[Trace](https://github.com/S-Lab-System-Group/HeliosData)]
  * NTU & SenseTime
* Analysis of Large-Scale Multi-Tenant GPU Clusters for DNN Training Workloads (ATC 2019) \[[Paper](https://www.usenix.org/conference/atc19/presentation/jeon)] \[[Trace](https://github.com/msr-fiddle/philly-traces)]
  * MSR
* Characterizing Deep Learning Training Workloads on Alibaba-PAI (IISWC 2019) \[[Paper](https://ieeexplore.ieee.org/document/9042047)]
  * Alibaba PAI

## Survey

* Deep Learning Workload Scheduling in GPU Datacenters: Taxonomy, Challenges and Vision (arXiv 2205.11913) \[[Paper](https://arxiv.org/abs/2205.11913)] \[[Paper List](https://github.com/S-Lab-System-Group/Awesome-DL-Scheduling-Papers)]
  * NTU & PKU & SenseTime

## Acronyms

* DL: Deep Learning
* ML: Machine Learning
