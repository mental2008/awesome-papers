# Who limits the resource efficiency of my datacenter: An analysis of Alibaba datacenter traces

## Metadata

Presented in [IWQoS 2019](https://doi.org/10.1145/3326285.3329074).

Authors: Jing Guo, Zihao Chang, Sa Wang, Haiyang Ding, Yihui Feng, Liang Mao, Yungang Bao (_ICT, CAS_ & _Alibaba_)

Trace: [https://github.com/alibaba/clusterdata/tree/v2018](https://github.com/alibaba/clusterdata/tree/v2018)

## Understanding the paper

This paper analyzes the Alibaba production trace, which co-locates different workloads to improve resource efficiency.

Trace: Homogeneous cluster. Each server with 96 cores and 1 unit memory normalized.

### Key insights

1. Memory becomes the new bottleneck of datacenters => require efficient memory reclaim techniques
2. Batch-processing applications are treated as second-class citizens and restricted to utilize limited resources => potentially overprotect latency-critical applications
3. More than 90% of latency-critical applications are written in Java => massive self-contained JVMs complicate resource management

### Questions

There are many Java applications in Alibaba, which may cause these issues. Is this a common scenario?
