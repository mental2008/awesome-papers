# SIGCOMM 2024

## Meta Info

Homepage: [https://conferences.sigcomm.org/sigcomm/2024/](https://conferences.sigcomm.org/sigcomm/2024/)

### Paper list

* [https://conferences.sigcomm.org/sigcomm/2024/program/](https://conferences.sigcomm.org/sigcomm/2024/program/)
* [https://dl.acm.org/doi/proceedings/10.1145/3651890](https://dl.acm.org/doi/proceedings/10.1145/3651890)

## Papers

### Large Language Models (LLMs)

* Systems/Networking for LLM
  * CacheGen: KV Cache Compression and Streaming for Fast Large Language Model Serving \[[Paper](https://dl.acm.org/doi/10.1145/3651890.3672274)] \[[arXiv](https://arxiv.org/abs/2310.07240)] \[[Code](https://github.com/UChi-JCL/CacheGen)] \[[Video](https://www.youtube.com/watch?v=H4\_OUWvdiNo)]
    * UChicago & Microsoft & Stanford
    * **CacheGen**: A context-loading module for LLM systems.
      * Use a custom tensor encoder to encode a KV cache into more compact bitstream representations with negligible decoding overhead.
      * Adapt the compression level of different parts of a KV cache to cope with changes in available bandwidth.
    * Objective: Focus on reducing the network delay in fetching the KV cache → TTFT reduction.
  * Alibaba HPN: A Data Center Network for Large Language Model Training \[[Paper](https://doi.org/10.1145/3651890.3672265)] \[[Video](https://www.youtube.com/watch?v=s-3VLs9sd10)]
    * Alibaba Cloud
    * Experience Track
    * LLM training's characteristics
      * Produce a small number of periodic, bursty flows (e.g., 400Gbps) on each host.
      * Require GPUs to complete iterations in synchronization; more sensitive to single-point failure.
    * Alibaba High-Performance Network (**HPN**): Introduce a 2-tier, dual-plane architecture capable of interconnecting 15K GPUs within one Pod.
      * Benefits: eliminate hash polarization; simplify the optimal path selections.
  * RDMA over Ethernet for Distributed Training at Meta Scale \[[Paper](https://dl.acm.org/doi/10.1145/3651890.3672233)] \[[Blog](https://engineering.fb.com/2024/03/12/data-center-engineering/building-metas-genai-infrastructure/)]
    * Meta
    * Experience Track
    * Deploy a combination of centralized traffic engineering and an Enhanced ECMP (Equal-Cost Multi-Path) scheme to achieve optimal load distribution for training workloads.
    * Design a receiver-driven traffic admission via the collective library -> Co-tune both the collective library configuration and the underlying network configuration.
* LLMs for Networking
  * NetLLM: Adapting Large Language Models for Networking \[[Paper](https://dl.acm.org/doi/10.1145/3651890.3672268)]
    * CUHK-Shenzhen & Tsinghua SIGS & UChicago
    * **NetLLM**: Empower the LLM to process multimodal data in networking and generate task-specific answers.
    * Study three networking-related use cases: viewport prediction, adaptive bitrate streaming, and cluster job scheduling.

### Distributed Training

* Crux: GPU-Efficient Communication Scheduling for Deep Learning Training \[[Paper](https://dl.acm.org/doi/10.1145/3651890.3672239)] \[[Dataset](https://github.com/alibaba/alibaba-lingjun-dataset-2023)]
  * Alibaba Cloud
  * Observation: Communication contention among different deep learning training (DLT) jobs seriously influences the overall GPU computation utilization -> Low efficiency of the training cluster.
  * **Crux**: A communication scheduler
    * Objective: Mitigate the communication contention among DLT jobs -> Maximize GPU computation utilization.
    * Designs: reduce the GPU utilization problem to a flow optimization problem; GPU intensity-aware communication scheduling; prioritize the DLT flows with high GPU computation intensity.
* Accelerating Model Training in Multi-cluster Environments with Consumer-grade GPUs \[[Paper](https://dl.acm.org/doi/10.1145/3651890.3672228)]
  * KAIST & UC Irvine & VMware Research
  * **StellaTrain**: Cache-aware gradient compression; a CPU-based sparse optimizer.
  * Adapt training configurations to fluctuating dynamic network bandwidth -> Enable co-training using on-premises and cloud clusters.

### Data Processing

* Turbo: Efficient Communication Framework for Large-scale Data Processing Cluster \[[Paper](https://dl.acm.org/doi/10.1145/3651890.3672241)]
  * Tencent & FDU & NVIDIA & THU
  * Experience Track
  * Network throughput & scalability: A dynamic block-level flowlet transmission mechanism; a non-blocking communication middleware.
  * System reliability: Utilize an external shuffle service as well as TCP serving as a backup.
  * Integrated into Apache Spark.

### Data Transfers

* An exabyte a day: Throughput-oriented, Large-scale, Managed Data Transfers with Effingo \[[Paper](https://dl.acm.org/doi/10.1145/3651890.3672262)]
  * Google
  * Experience Track
  * **Effingo**: A copy system, integrated with resource management and authorization systems.
    * Per-cluster deployments -> Limit failure domains to individual clusters.
    * Separation from the bandwidth management layer (BwE) -> A modular design that reduces dependencies.
