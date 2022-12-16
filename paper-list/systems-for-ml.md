# Systems for ML

## Data Pre-processing

* \[**tf.data service** | arXiv 2210.14826 | ETH & Google] [A case for disaggregation of ML data processing](https://arxiv.org/abs/2210.14826)
* \[Meta's end-to-end data storage and ingestion (**DSI**) pipeline | ISCA 2022 | Industry Track] [Understanding data storage and ingestion for large-scale deep recommendation model training](https://doi.org/10.1145/3470496.3533044)

## Scheduling for DL Workloads

### Schedulers for DL training

* \[**Muri** | PKU & ByteDance | SIGCOMM 2022] [Multi-resource interleaving for deep learning training](https://doi.org/10.1145/3544216.3544224) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/Rivendile/Muri)<mark style="background-color:orange;">]</mark>
  * Pack jobs along multiple resource types in the time dimension.
  * Integrate with PyTorch.
* \[**Singularity** | Microsoft | arXiv 2202.07848] [Singularity: Planet-scale, preemptive and elastic scheduling of AI workloads](https://arxiv.org/abs/2202.07848)
  * Enable live GPU job migration.

{% content-ref url="../reading-notes/miscellaneous/arxiv/singularity-planet-scale-preemptive-and-elastic-scheduling-of-ai-workloads.md" %}
[singularity-planet-scale-preemptive-and-elastic-scheduling-of-ai-workloads.md](../reading-notes/miscellaneous/arxiv/singularity-planet-scale-preemptive-and-elastic-scheduling-of-ai-workloads.md)
{% endcontent-ref %}

* \[**Pollux** | Petuum & CMU | OSDI 2021] [Pollux: Co-adaptive cluster scheduling for goodput-optimized deep learning](https://www.usenix.org/conference/osdi21/presentation/qiao) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/petuum/adaptdl)<mark style="background-color:orange;">]</mark>
  * Co-adaptively allocates resources (number of GPUs) and tunes the hyperparameters (batch size and learning rate) for all DL training jobs.

{% content-ref url="../Conference/OSDI-2021/pollux.md" %}
[pollux.md](../Conference/OSDI-2021/pollux.md)
{% endcontent-ref %}

* \[**MAPA** | Topology-aware scheduling | SC 2021] [MAPA: Multi-accelerator pattern allocation policy for multi-tenant GPU servers](https://doi.org/10.1145/3458817.3480853) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/socal-ucr/MAPA)<mark style="background-color:orange;">]</mark>
  * Consider emerging multi-GPU accelerator topologies such as single/double NVLink.
* \[**Astraea** | PKU & NTU & SenseTime | TPDS 2021] [Astraea: A fair deep learning scheduler for multi-tenant GPU clusters](https://ieeexplore.ieee.org/abstract/document/9655467)
  * Long-term GPU-time fairness.
  * Consider both the temporal and spatial impacts; both at the tenant and job levels.
* \[**AntMan** | Alibaba | OSDI 2020] [AntMan: Dynamic scaling on GPU clusters for deep learning](https://www.usenix.org/conference/osdi20/presentation/xiao) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/alibaba/GPU-scheduler-for-deep-learning)<mark style="background-color:orange;">]</mark>
  * Co-locate resource-guarantee and opportunistic jobs.
* \[**HiveD** | MSRA | OSDI 2020] [HiveD: Sharing a GPU cluster for deep learning with guarantees](https://www.usenix.org/conference/osdi20/presentation/zhao-hanyu) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/microsoft/hivedscheduler)<mark style="background-color:orange;">]</mark>
  * Virtual private clusters; resource isolation and management for multi-tenant clusters.

{% content-ref url="../Conference/OSDI-2020/hived.md" %}
[hived.md](../Conference/OSDI-2020/hived.md)
{% endcontent-ref %}

* \[**Gavel** | MSR & Stanford | OSDI 2020] [Heterogeneity-aware cluster scheduling policies for deep learning workloads](https://www.usenix.org/conference/osdi20/presentation/narayanan-deepak) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/stanford-futuredata/gavel)<mark style="background-color:orange;">]</mark>
  * Consider performance heterogeneity across multiple accelerator types.
* \[**Themis** | UW-Madison & MSR | NSDI 2020] [Themis: Fair and efficient GPU cluster scheduling](https://www.usenix.org/conference/nsdi20/presentation/mahajan)
  * A long-term fairness metric, _finish-time_ fairness, which is the ratio of the running time in a shared cluster with N jobs to running alone in a 1/N cluster.
  * Minimize the maximum finish time fairness across all ML jobs.
* \[**GandivaFair** | MSR India | EuroSys 2020] [Balancing efficiency and fairness in heterogeneous GPU clusters for deep learning](https://doi.org/10.1145/3342195.3387555)
  * Achieve efficiency and fairness despite cluster heterogeneity.
* \[**Tiresias** | UMich SymbioticLab | NSDI 2019] [Tiresias: A GPU cluster manager for distributed deep learning](https://www.usenix.org/conference/nsdi19/presentation/gu) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/SymbioticLab/Tiresias)<mark style="background-color:orange;">]</mark>
  * Relax consolidated placement constraint.
* \[**Gandiva** | MSRA | OSDI 2018] [Gandiva: Introspective cluster scheduling for deep learning](https://www.usenix.org/conference/osdi18/presentation/xiao)
  * Hyper-parameter tuning jobs.
  * Job packing; migration; grow-shrink; time-slicing.
* \[**Optimus** | HKU & ByteDance | EuroSys 2018] [Optimus: An efficient dynamic resource scheduler for deep learning clusters](https://doi.org/10.1145/3190508.3190517) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/pengyanghua/optimus)<mark style="background-color:orange;">]</mark>
  * Minimize JCT based on online resource-performance models.
* \[**Topology-aware scheduling** | SC 2017] [Topology-aware GPU scheduling for learning workloads in cloud environments](https://doi.org/10.1145/3126908.3126933) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/HiEST/gpu-topo-aware)<mark style="background-color:orange;">]</mark>
  * Consider multiple link technologies such as PCI-e and NVLink.

### Trace Analysis

* \[HKUST & Alibaba PAI | NSDI 2022 | GPU sharing] [MLaaS in the Wild: Workload analysis and scheduling in large-scale heterogeneous GPU clusters](https://www.usenix.org/conference/nsdi22/presentation/weng) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Trace Released</mark>](https://github.com/alibaba/clusterdata/tree/master/cluster-trace-gpu-v2020)<mark style="background-color:orange;">]</mark>
* \[SenseTime **Helios** | NTU & SenseTime | SC 2021] [Characterization and prediction of deep learning workloads in large-scale GPU datacenters](https://doi.org/10.1145/3458817.3476223) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Trace Released</mark>](https://github.com/S-Lab-System-Group/HeliosData)<mark style="background-color:orange;">]</mark>
* \[Microsoft **Philly** | ATC 2019 | DL training] [Analysis of large-scale multi-tenant GPU clusters for DNN training workloads](https://www.usenix.org/conference/atc19/presentation/jeon) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Trace Released</mark>](https://github.com/msr-fiddle/philly-traces)<mark style="background-color:orange;">]</mark>
* \[Alibaba PAI | IISWC 2019 | DL training] [Characterizing Deep Learning Training Workloads on Alibaba-PAI](https://ieeexplore.ieee.org/document/9042047)

### Survey

\[NTU & PKU & SenseTime | arXiv 2205.11913] [Deep Learning Workload Scheduling in GPU Datacenters: Taxonomy, Challenges and Vision](https://arxiv.org/abs/2205.11913) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Paper List</mark>](https://github.com/S-Lab-System-Group/Awesome-DL-Scheduling-Papers)<mark style="background-color:orange;">]</mark>

## Model Serving

### Inference Serving System

* \[**INFaaS** | Stanford | ATC 2021] [INFaaS: Automated model-less inference serving](https://www.usenix.org/conference/atc21/presentation/romero) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/stanford-mast/INFaaS)<mark style="background-color:orange;">]</mark>
  * Consider diverse model-variants.
  * VM-level horizontal autoscaling; model-level autoscaling.
* \[**Clipper** | UC Berkeley | NSDI 2017] [Clipper: A low-latency online prediction serving system](https://www.usenix.org/conference/nsdi17/technical-sessions/presentation/crankshaw) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/ucbrise/clipper)<mark style="background-color:orange;">]</mark>
  * Communicate frameworks and applications through REST/RPC APIs, respectively.
  * Caching; batching; adaptive model selection.
* \[**TensorFlow Serving** | Google | arXiv 1712.06139] [TensorFlow-Serving: Flexible, high-performance ML serving](http://arxiv.org/abs/1712.06139)

### Auto Configuration

* \[**Falcon** | CAS | SoCC 2022] [Serving unseen deep learning models with near-optimal configurations: A fast adaptive search approach](https://doi.org/10.1145/3542929.3563485) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/dos-lab/Falcon)<mark style="background-color:orange;">]</mark>
* \[**Morphling** | HKUST & Alibaba | SoCC 2021] [Morphling: Fast, near-optimal auto-configuration for cloud-native model serving](https://doi.org/10.1145/3472883.3486987) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/kubedl-io/morphling)<mark style="background-color:orange;">]</mark>
  * Meta-learning; stress-test; Kubernetes.

### Survey

* \[George Mason University & Microsoft & University of Maryland | arXiv 2203.09040] [A survey of multi-tenant deep learning inference on GPU](https://arxiv.org/abs/2203.09040)
* \[George Mason University & Microsoft & University of Pittsburgh & University of Maryland | arXiv 2111.14247] [A survey of large-scale deep learning serving system optimization: Challenges and opportunities](https://arxiv.org/abs/2111.14247)

## ML Framework

* \[**OneFlow** | arXiv 2110.15032] [OneFlow: Redesign the distributed deep learning framework from scratch](https://arxiv.org/abs/2110.15032) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/Oneflow-Inc/oneflow)<mark style="background-color:orange;">]</mark>
* \[**Jittor** | Tsinghua | Science China Information Sciences 2020] [Jittor: A novel deep learning framework with meta-operators and unified graph execution](http://scis.scichina.com/en/2020/222103.pdf) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/Jittor/Jittor) <mark style="background-color:orange;">|</mark> [<mark style="background-color:orange;">Homepage</mark>](https://cg.cs.tsinghua.edu.cn/jittor/)<mark style="background-color:orange;">]</mark>
* \[**PyTorch** | FAIR | NeurIPS 2019] [PyTorch: An imperative style, high-performance deep learning library](https://proceedings.neurips.cc/paper/2019/file/bdbca288fee7f92f2bfa9f7012727740-Paper.pdf) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/pytorch/pytorch) <mark style="background-color:orange;">|</mark> [<mark style="background-color:orange;">Homepage</mark>](https://pytorch.org/)<mark style="background-color:orange;">]</mark>
* \[**XDL** | Alibaba | DLP-KDD 2019] [XDL: An industrial deep learning framework for high-dimensional sparse data](https://doi.org/10.1145/3326937.3341255) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/alibaba/x-deeplearning)<mark style="background-color:orange;">]</mark>
* \[**Ray** | UC Berkeley | OSDI 2018] [Ray: A distributed framework for emerging AI applications](https://www.usenix.org/conference/osdi18/presentation/moritz) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/ray-project/ray) <mark style="background-color:orange;">|</mark> [<mark style="background-color:orange;">Homepage</mark>](https://www.ray.io/)<mark style="background-color:orange;">]</mark>
  * Reinforcement Learning Framework.

{% content-ref url="../reading-notes/conference/osdi-2018/ray-a-distributed-framework-for-emerging-ai-applications.md" %}
[ray-a-distributed-framework-for-emerging-ai-applications.md](../reading-notes/conference/osdi-2018/ray-a-distributed-framework-for-emerging-ai-applications.md)
{% endcontent-ref %}

* \[**TensorFlow** | Google Brain | OSDI 2016] [TensorFlow: A system for large-scale machine learning](https://www.usenix.org/system/files/conference/osdi16/osdi16-abadi.pdf) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/tensorflow/tensorflow) <mark style="background-color:orange;">|</mark> [<mark style="background-color:orange;">Homepage</mark>](https://www.tensorflow.org/)<mark style="background-color:orange;">]</mark>
* \[**MXNet** | arXiv 1512.01274] [MXNet: A flexible and efficient machine learning library for heterogeneous distributed systems](https://arxiv.org/abs/1512.01274) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/apache/mxnet) <mark style="background-color:orange;">|</mark> [<mark style="background-color:orange;">Homepage</mark>](https://mxnet.apache.org/)<mark style="background-color:orange;">]</mark>
* \[**Caffe** | UC Berkeley | arXiv 1408.5093] [Caffe: Convolutional architecture for fast feature embedding](https://arxiv.org/abs/1408.5093) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/BVLC/Caffe/) <mark style="background-color:orange;">|</mark> [<mark style="background-color:orange;">Homepage</mark>](http://caffe.berkeleyvision.org/)<mark style="background-color:orange;">]</mark>
* \[**CNTK** | Microsoft |  MSR TR 2014] [An introduction to computational networks and the computational network toolkit](https://www.microsoft.com/en-us/research/publication/an-introduction-to-computational-networks-and-the-computational-network-toolkit/) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/microsoft/CNTK) <mark style="background-color:orange;">|</mark> [<mark style="background-color:orange;">Homepage</mark>](https://learn.microsoft.com/en-us/cognitive-toolkit/)<mark style="background-color:orange;">]</mark>

## ML Compiler

* \[**MLIR** | Google | CGO 2021] [MLIR: Scaling compiler infrastructure for domain specific computation](https://research.google/pubs/pub49988/) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Homepage</mark>](https://mlir.llvm.org/)<mark style="background-color:orange;">]</mark>
* \[**TVM** | UW | OSDI 2018] [TVM: An automated end-to-end optimizing compiler for deep learning](https://www.usenix.org/conference/osdi18/presentation/chen) <mark style="background-color:orange;">\[</mark>[<mark style="background-color:orange;">Code</mark>](https://github.com/apache/tvm) <mark style="background-color:orange;">|</mark> [<mark style="background-color:orange;">Homepage</mark>](https://tvm.apache.org/)<mark style="background-color:orange;">]</mark>
