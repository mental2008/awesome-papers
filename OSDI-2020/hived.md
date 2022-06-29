# HiveD: Sharing a GPU Cluster for Deep Learning with Guarantees

## Metadata

Presented in [OSDI 2020](https://www.usenix.org/conference/osdi20/presentation/zhao-hanyu). \[ [Paper](https://www.usenix.org/system/files/osdi20-zhao\_hanyu.pdf) | [Slides](https://www.usenix.org/sites/default/files/conference/protected-files/osdi20\_slides\_zhao.pdf) | [Video](https://www.youtube.com/watch?v=WYGxAZHccts) | [Code](https://github.com/microsoft/hivedscheduler) ]

Authors: Hanyu Zhao, _Peking University and Microsoft_; Zhenhua Han, _The University of Hong Kong and Microsoft_; Zhi Yang, _Peking University_; Quanlu Zhang, Fan Yang, Lidong Zhou, and Mao Yang, _Microsoft_; Francis C.M. Lau, _The University of Hong Kong_; Yuqi Wang, Yifan Xiong, and Bin Wang, _Microsoft_

## Understanding the paper

### Key motivation

The authors observe that some tenants may experience **worse queueing delay** in **multi-tenant GPU clusters** than **a private cluster** with allocated shares of GPUs (i.e., _quota_).

The main question is that _**quota**_ **cannot guarantee the a desirable GPU** _**affinity**_ for each deep learning jobs. Multi-GPU jobs have to wait in a queue or run at a relaxed affinity.

To ensure sharing safety, HiveD **reserves GPU affinity explicitly**.

### Limitation of existing solutions

Currently, there is no framework to consider sharing anomaly in multi-tenant GPU clusters.

### Strong points

* HiveD is **the first framework to address sharing anomaly** in multi-tenant GPU clusters. It defines a hierarchical cell structure, and each cell is a set of GPUs at a certain level of affinity. Each tenant reserves resources via a **Virtual Private Cluster (VC)**, which has multi-level cells, as shown in the figure.
  * Level-1 cell: GPU
  * Level-2 cell: PCI-e switch (2 GPUs)
  * Level-3 cell: CPU socket (4 GPUs)
  * Level-4 cell: Node (8 GPUs)
  * Level-5 cell: Rack (multi-node)

![System architecture: a two-layer design](hived-system-arch.png)

* HiveD separates **resource reservation** and **resource allocation** (which is determined by schedulers). Therefore, it can easily incorporate any state-of-the-art deep learning scheduler (e.g., YARN-CS, Gandiva, Tiresias), which means that each VC can apply a diverse scheduler to achieve different objectives (e.g., cluster utilization, job completion time, fairness).
* HiveD has been open-sourced and integrated in [OpenPAI](https://github.com/microsoft/pai).
* HiveD can be extended to **other affinity-aware resources** (e.g., NUMA-aware resources like affinitized GPUs and CPU cores under the same socket).

### Weak points

**VC assignment**

As for me, it's hard to determine the VC assignment to each tenant, specially the cell structures of GPUs. In the paper, Sec. 6 mentions this as a business process. Systems have to consider many factors, including overall capacity, tenant demands, composition of tenant workload, workload variation over time, business priority, budget constraints. But HiveD leaves the difficult problem to users.

### Implementation

> HiveD is implemented in 7,700+ lines of **Go** codes. It is implemented as a _scheduler extender_, a standalone process that works in tandem with the Kubernetes default scheduler.
>
> HiveD is deployed as a Kubernetes StatefulSet to ensure a single running instance. And it partitions and stores the cell binding decision for each pod in its "pod annotation".

### Evaluation

1. Experiments on a 96-GPU cluster on a public cloud
	- Deployed on Azure.
	- The cluster consists of 24 VMs, each with 4 NVIDIA K80 GPUs.
2. Trace-driven simulations on a production workload (i.e., Philly trace).

Choose three types of deep learning models: CV, NLP, and Speech (WaveNet, DeepSpeech).

## Questions

> How to define if a tenant suffers from sharing anomaly in the multi-tenant cluster?

In the trace, the GPU _affinity_ requirements of most jobs are hard. Therefore, the authors use queueing delay to evaluate the cluster sharing anomaly. They also evaluate the JCT when job's affinity requirement is soft.

## Related reference (for further reading)

**Doc**

* Scheduler extender. [https://github.com/kubernetes/community/blob/master/contributors/design-proposals/scheduling/scheduler\_extender.md](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/scheduling/scheduler\_extender.md), Jan. 2019.
* Kubernetes topology manager. [https://kubernetes.io/blog/2020/04/01/kubernetes-1-18-feature-topoloy-manager-beta](https://kubernetes.io/blog/2020/04/01/kubernetes-1-18-feature-topoloy-manager-beta), 2020.

**Resource fragmentation**

* Dror G Feitelson. Packing schemes for gang scheduling. In _Workshop on Job Scheduling Strategies for Parallel Processing_, pages 89–110. Springer, 1996.
* Robert Grandl, Ganesh Ananthanarayanan, Srikanth Kandula, Sriram Rao, and Aditya Akella. Multi- resource packing for cluster schedulers. _ACM SIG- COMM Computer Communication Review_, 44(4):455– 466, 2015.
* Mark S Johnstone and Paul R Wilson. The memory fragmentation problem: Solved? _ACM Sigplan Notices_, 34(3):26–36, 1998.

**DL schedulers**

* Juncheng Gu, Mosharaf Chowdhury, Kang G. Shin, Yibo Zhu, Myeongjae Jeon, Junjie Qian, Hongqiang Liu, and Chuanxiong Guo. Tiresias: A GPU cluster manager for distributed deep learning. In _16th USENIX Sympo- sium on Networked Systems Design and Implementation (NSDI 19)_, Boston, MA, 2019.
* Myeongjae Jeon, Shivaram Venkataraman, Amar Phan- ishayee, Junjie Qian, Wencong Xiao, and Fan Yang. Analysis of large-scale multi-tenant GPU clusters for DNN training workloads. In _2019 USENIX Annual Technical Conference (USENIX ATC 19)_, pages 947– 960, Renton, WA, July 2019. USENIX Association.
* Wencong Xiao, Romil Bhardwaj, Ramachandran Ram- jee, Muthian Sivathanu, Nipun Kwatra, Zhenhua Han, Pratyush Patel, Xuan Peng, Hanyu Zhao, Quanlu Zhang, et al. Gandiva: Introspective cluster scheduling for deep learning. In _13th USENIX Symposium on Operating Systems Design and Implementation (OSDI 18)_, pages 595–610, 2018.

## Others

> Fan Yang thanks the late Pearl, his beloved cat, for her faithful companion during writing this paper.

Funny to see this ;-)
