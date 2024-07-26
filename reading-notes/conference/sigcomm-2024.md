# SIGCOMM 2024

## Meta Info

Homepage: [https://conferences.sigcomm.org/sigcomm/2024/](https://conferences.sigcomm.org/sigcomm/2024/)

Paper list: [https://conferences.sigcomm.org/sigcomm/2024/program/](https://conferences.sigcomm.org/sigcomm/2024/program/)

## Papers

### Large Language Models (LLMs)

* Systems/Networking for LLM
  * CacheGen: KV Cache Compression and Streaming for Fast Large Language Model Serving \[[arXiv](https://arxiv.org/abs/2310.07240)] \[[Code](https://github.com/UChi-JCL/CacheGen)]
    * UChicago & Microsoft & Stanford
      * Use a custom tensor encoder to encode a KV cache into more compact bitstream representations with negligible decoding overhead.
      * Adapt the compression level of different parts of a KV cache to cope with changes in available bandwidth.
      * Focus on reducing the network delay in fetching the KV cache. → TTFT reduction.
  * Alibaba HPN: A Data Center Network for Large Language Model Training
    * Alibaba Cloud
    * Experience Track
* LLMs for Networking
  * NetLLM: Adapting Large Language Models for Networking
    * CUHK-Shenzhen & Tsinghua SIGS & UChicago

### Distributed Training

* Crux: GPU-Efficient Communication Scheduling for Deep Learning Training \[[Dataset](https://github.com/alibaba/alibaba-lingjun-dataset-2023)]
  * Alibaba Cloud
* RDMA over Ethernet for Distributed Training at Meta Scale
  * Meta
  * Experience Track
* Accelerating Model Training in Multi-cluster Environments with Consumer-grade GPUs
  * KAIST & UC Irvine & VMware Research

### Data Processing

* Turbo: Efficient Communication Framework for Large-scale Data Processing Cluster
  * Tencent & FDU & NVIDIA & THU
    * Experience Track

### Data Transfers

* An exabyte a day: Throughput-oriented, Large-scale, Managed Data Transfers with Effingo
  * Google
  * Experience Track
