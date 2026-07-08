# PPoPP 2026

## Meta Info

Homepage: [https://ppopp26.sigplan.org/](https://ppopp26.sigplan.org/)

Paper list: [https://ppopp26.sigplan.org/track/PPoPP-2026-papers](https://ppopp26.sigplan.org/track/PPoPP-2026-papers)

## Papers

### LLM

* LLM training
  * CCL-D: A High-Precision Diagnostic System for Slow and Hang Anomalies in Large-Scale Model Training
    * ICT, CAS & Ant Group
  * COCCL: A Collective Communication Library Supporting Easy Integration and Configuration of Customized Compression for Scalable LLM Training
    * ICT, CAS & CUHK-SZ
  * Elastor: Elastic and Efficient Model Partitioning and Checkpointing for Fault-tolerant Distributed Training
    * PKU
  * HelixPipe: Efficient Distributed Training of Long Sequence Transformers with Attention Parallel Pipeline Parallelism \[[arXiv](https://arxiv.org/abs/2507.00394)] \[[Code](https://github.com/zxgx/Megatron-LM/tree/dev)]
    * NUS
* LLM inference
  * JanusQuant: Accurate and Efficient 2-bit KV Cache Quantization for Long-context Inference
    * WHU
  * Laser: Unlocking Layer-Level Scheduling for Efficient Multi-SLO LLM Serving
    * SYSU
  * High-Throughput Non-Uniformly Quantized 3-bit LLM Inference
    * CUHK & HKUST
  * Accelerating Sparse Transformer Inference on GPU
    * CUP-Beijing & BUAA
* Attention
  * FlashAttention-T: Towards Fully Tensorized Attention by Exploiting Tensor-Vector Parallelism
    * USTC & ICT, CAS
  * MetaAttention: A Unified and Performant Attention Framework Across Hardware Backends \[[arXiv](https://arxiv.org/abs/2502.15349)] \[[Code](https://github.com/microsoft/AttentionEngine)]
    * SJTU, IPADS & PKU & MSRA

### Diffusion Models

* Difflow: A Data-Characteristic-Aware Serving System for Diffusion Models
  * THU
* MixFusion: A Patch-Level Parallel Serving System for Mixed-Resolution Diffusion Models \[[Paper](https://doi.org/10.1145/3774934.3786420)] \[[arXiv](https://arxiv.org/abs/2501.09253)] \[[Code](https://github.com/desenSunUBW/mixfusion)]
  * UWaterloo & CMU & Rice
  * Use patch-level parallelism to batch mixed-resolution text-to-image diffusion requests.
  * Combine patch-tailored cache management with SLO-aware scheduling and online latency prediction.

### GNN

* APERTURE: Algorithm-System Co-Optimization for Temporal Graph Network Inference
  * BUAA
* ElasGNN: An Elastic Training Framework for Distributed GNN Training
  * BUAA
* TAC: Cache-based System for Accelerating Billion-Scale GNN Training on Multi-GPU Platform
  * UCAS

### Sparse Matrix

* ASM-SpMM: Unleashing the Potential of Arm SME for Sparse Matrix Multiplication Acceleration
  * SYSU
* Exploiting Efficient Mapping and Pipelined Execution for Accelerating SpMV on Tensor Cores
  * BUAA
* VDHA: Vector-Driven Hash Aggregation for Sparse Matrix–Sparse Vector Multiplication on GPUs
  * THU

### Quantization

* RoMeo: Mitigating Dual-dimensional Outliers with Rotated Mixed Precision Quantization \[[Artifact](https://github.com/thu-pacman/RoMeo)]
  * THU

### Cache Management

* Cacheman: A Comprehensive Last-Level Cache Management System for Multi-tenant Clouds
  * Alibaba Cloud

### Misc

* Scaling GPU-to-CPU Migration for Efficient Distributed Execution on CPU Clusters
  * GaTech
* zBuffer: Zero-Copy and Metadata-Free Serialization for Fast RPC with Scatter-Gather Reflection
  * XMU & Alibaba & SJTU

## Acronyms

* LLM: Large Language Model
* GNN: Graph Neural Network
* SpMM: Sparse Matrix-Matrix Multiplication
* SpMV: Sparse Matrix-Vector Multiplication
* RPC: Remote Procedure Call
