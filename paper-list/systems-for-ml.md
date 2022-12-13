# Systems for ML

## Data Pre-processing

* \[**tf.data service** | arXiv 2210.14826 | ETH & Google] [A case for disaggregation of ML data processing](https://arxiv.org/abs/2210.14826)
* \[Meta's end-to-end data storage and ingestion (**DSI**) pipeline | ISCA 2022 | Industry Track] [Understanding data storage and ingestion for large-scale deep recommendation model training](https://doi.org/10.1145/3470496.3533044)

## Scheduling for DL Workloads

### Schedulers for DL training

* \[**Muri** | PKU & ByteDance | SIGCOMM 2022] [Multi-resource interleaving for deep learning training](https://doi.org/10.1145/3544216.3544224)
  * Pack jobs along multiple resource types in the time dimension.
  * Integrate with PyTorch.
* \[**Singularity** | Microsoft | arXiv 2202.07848] [Singularity: Planet-scale, preemptive and elastic scheduling of AI workloads](https://arxiv.org/abs/2202.07848)
  * Enable live GPU job migration.
* \[**MAPA** | Topology-aware scheduling | SC 2021] [MAPA: Multi-accelerator pattern allocation policy for multi-tenant GPU servers](https://doi.org/10.1145/3458817.3480853)
  * Emerging multi-GPU accelerator topologies.
* \[**AntMan** | Alibaba | OSDI 2020] [AntMan: Dynamic scaling on GPU clusters for deep learning](https://www.usenix.org/conference/osdi20/presentation/xiao)
  * Co-locate resource-guarantee and opportunistic jobs.
* \[**HiveD** | MSRA | OSDI 2020] [HiveD: Sharing a GPU cluster for deep learning with guarantees](https://www.usenix.org/conference/osdi20/presentation/zhao-hanyu)
  * Virtual private clusters; resource isolation and management for multi-tenant clusters.

{% content-ref url="../Conference/OSDI-2020/hived.md" %}
[hived.md](../Conference/OSDI-2020/hived.md)
{% endcontent-ref %}

* \[**Themis** | UW-Madison & MSR | NSDI 2020] [Themis: Fair and efficient GPU cluster scheduling](https://www.usenix.org/conference/nsdi20/presentation/mahajan)
  * A long-term fairness metric, _finish-time_ fairness, which is the ratio of the running time in a shared cluster with N jobs to running alone in a 1/N cluster.
  * Minimize the maximum finish time fairness across all ML jobs.
* \[**GandivaFair** | MSR India | EuroSys 2020] [Balancing efficiency and fairness in heterogeneous GPU clusters for deep learning](https://doi.org/10.1145/3342195.3387555)
  * Achieve efficiency and fairness despite cluster heterogeneity.
* \[**Tiresias** | UMich | NSDI 2019] [Tiresias: A GPU cluster manager for distributed deep learning](https://www.usenix.org/conference/nsdi19/presentation/gu)
  * Relax consolidated placement constraint.
* \[**Gandiva** | MSRA | OSDI 2018] [Gandiva: Introspective cluster scheduling for deep learning](https://www.usenix.org/conference/osdi18/presentation/xiao)
  * Hyper-parameter tuning jobs.
  * Job packing; migration; grow-shrink; time-slicing.
* \[**Topology-aware scheduling** | SC 2017] [Topology-aware GPU scheduling for learning workloads in cloud environments](https://doi.org/10.1145/3126908.3126933)
  * Multiple link technologies such as PCI-e and NVLink.

### Trace Analysis

* \[HKUST & Alibaba PAI | NSDI 2022 | GPU sharing] [MLaaS in the Wild: Workload analysis and scheduling in large-scale heterogeneous GPU clusters](https://www.usenix.org/conference/nsdi22/presentation/weng) <mark style="background-color:orange;">\[Trace Released]</mark>
* \[SenseTime **Helios** | NTU & SenseTime | SC 2021] [Characterization and prediction of deep learning workloads in large-scale GPU datacenters](https://doi.org/10.1145/3458817.3476223) <mark style="background-color:orange;">\[Trace Released]</mark>
* \[Microsoft **Philly** | ATC 2019 | DL training] [Analysis of large-scale multi-tenant GPU clusters for DNN training workloads](https://www.usenix.org/conference/atc19/presentation/jeon) <mark style="background-color:orange;">\[Trace Released]</mark>
* \[Alibaba PAI | IISWC 2019 | DL training] [Characterizing Deep Learning Training Workloads on Alibaba-PAI](https://ieeexplore.ieee.org/document/9042047)

### Survey

\[NTU & PKU & SenseTime | arXiv 2205.11913] [Deep Learning Workload Scheduling in GPU Datacenters: Taxonomy, Challenges and Vision](https://arxiv.org/abs/2205.11913)

## Model Serving

### Auto Configuration

* \[**Falcon** | CAS | SoCC 2022] [Serving unseen deep learning models with near-optimal configurations: A fast adaptive search approach](https://doi.org/10.1145/3542929.3563485)
* \[**Morphling** | HKUST & Alibaba | SoCC 2021] [Morphling: Fast, near-optimal auto-configuration for cloud-native model serving](https://doi.org/10.1145/3472883.3486987)

### Survey

* \[George Mason University & Microsoft & University of Maryland | arXiv 2203.09040] [A survey of multi-tenant deep learning inference on GPU](https://arxiv.org/abs/2203.09040)
* \[George Mason University & Microsoft & University of Pittsburgh & University of Maryland | arXiv 2111.14247] [A survey of large-scale deep learning serving system optimization: Challenges and opportunities](https://arxiv.org/abs/2111.14247)
