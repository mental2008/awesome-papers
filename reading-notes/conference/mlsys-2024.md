# MLSys 2024

## Meta Info

Homepage: [https://mlsys.org/Conferences/2024](https://mlsys.org/Conferences/2024)

Paper list: [https://mlsys.org/Conferences/2024/AcceptedPapers](https://mlsys.org/Conferences/2024/AcceptedPapers)

## Papers

### Large Language Models (LLMs)

* LoRA serving
  * S-LoRA: Serving Thousands of Concurrent LoRA Adapters \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/906419cd502575b617cc489a1a696a67-Paper-Conference.pdf)] \[[arXiv](https://arxiv.org/abs/2311.03285)] \[[Code](https://github.com/S-LoRA/S-LoRA)]
    * UC Berkeley
      * A system to serve many LoRA adapters
      * Store all adapters in the main memory and fetch the adapters used by the currently running queries to the GPU memory
      * Unified Paging — a unified memory pool to manage dynamic adapter weights with different ranks and KV cache tensors with varying sequence lengths
      * Employ a tensor parallelism strategy and highly optimized custom CUDA kernels for heterogeneous batching of LoRA computation
      * Built on top of [LightLLM](https://github.com/ModelTC/lightllm)
  * Punica: Multi-Tenant LoRA Serving \[[arXiv](https://arxiv.org/abs/2310.18547)] \[[Code](https://github.com/punica-ai/punica)]
    * UW & Duke
      * A system to serve multiple LoRA models in a shared GPU cluster
      * A CUDA kernel — Segmented Gather Matrix-Vector Multiplication (SGMV)
        * Batch GPU operations for concurrent execution of different LoRA models
        * A GPU only needs to store a single copy of the pre-trained model
      * A request scheduling mechanism to consolidate multi-tenant LoRA serving workloads
        * Route the new request to a small set of active GPUs
        * Allocate additional GPU resources when the existing GPUs are fully utilized
        * Periodically migrate existing requests for consolidation
* LLM inference
  * Keyformer: KV Cache reduction through key tokens selection for Efficient Generative Inference \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/48fecef47b19fe501d27d338b6d52582-Paper-Conference.pdf)] \[[Code](https://github.com/d-matrix-ai/keyformer-llm)]
    * UBC & d-Matrix
  * Prompt Cache: Modular Attention Reuse for Low-Latency Inference \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/a66caa1703fe34705a4368c3014c1966-Paper-Conference.pdf)]
    * Yale & Google
  * HeteGen: Efficient Heterogeneous Parallel Inference for Large Language Models on Resource-Constrained Devices \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/5431dca75a8d2abc1fb51e89e8324f10-Paper-Conference.pdf)]
    * NUS
  * Vidur: A Large-scale Simulation Framework for LLM Inference \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/b74a8de47d2b3c928360e0a011f48351-Paper-Conference.pdf)] \[[Code](https://github.com/microsoft/vidur)]
    * GaTech & MSR India
  * FlashDecoding++: Faster Large Language Model Inference with Asynchronization, Flat GEMM Optimization, and Heuristics \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/5321b1dabcd2be188d796c21b733e8c7-Paper-Conference.pdf)]
    * THU & Infinigence-AI
* LLM fine-tuning
  * Fine-Tuning Language Models Using Formal Methods Feedback: A Use Case in Autonomous Systems \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/b0131b6ee02a00b03fc3320176fec8f5-Paper-Conference.pdf)]
    * UT-Austin
* LLM for data manipulation
  * UniDM: A Unified Framework for Data Manipulation with Large Language Models \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/dcb38c6ad7911842ab31081be9540b89-Paper-Conference.pdf)]
    * Alibaba & USTC

### Mixture-of-Experts (MoEs)

* MoE training
  * Lancet: Accelerating Mixture-of-Experts Training by Overlapping Weight Gradient Computation and All-to-All Communication \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/339caf45a6fa281cae8adc6465343464-Paper-Conference.pdf)]
    * HKU & AWS & Boson AI
* MoE inference
  * QMoE: Sub-1-Bit Compression of Trillion Parameter Models \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/c74b624843218d9b6713fcf299d6d5e4-Paper-Conference.pdf)] \[[Code](https://github.com/IST-DASLab/qmoe)]
    * Institute of Science and Technology Austria
  * SiDA: Sparsity-Inspired Data-Aware Serving for Efficient and Scalable Large Mixture-of-Experts Models

### Diffusion Models

* DiffusionPipe: Training Large Diffusion Models with Efficient Pipelines \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/45c1f6a8cbf2da59ebf2c802b4f742cd-Paper-Conference.pdf)]
  * HKU & AWS

### Deep Learning Recommendation Models (DLRMs)

* Disaggregated Multi-Tower: Topology-aware Modeling Technique for Efficient Large Scale Recommendation \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/78834433edc3291f4c6cbbd2759324db-Paper-Conference.pdf)]
  * Meta AI

### ML Compilation

* ACRoBat: Optimizing Auto-batching of Dynamic Deep Learning at Compile Time \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/096b1019463f34eb241e87cfce8dfe16-Paper-Conference.pdf)]
  * CMU
  * Perform hybrid static+dynamic compiler optimizations and end-to-end tensor code generation

### Quantization

* FP8
  * Efficient Post-training Quantization with FP8 Formats \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/dea9b4b6f55ae611c54065d6fc750755-Paper-Conference.pdf)]
    * Intel
* LLM
  * AWQ: Activation-aware Weight Quantization for On-Device LLM Compression and Acceleration \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/42a452cbafa9dd64e9ba4aa95cc1ef21-Paper-Conference.pdf)] \[[Code](https://github.com/mit-han-lab/llm-awq)]
    * MIT
    * **Best Paper Award**
  * Atom: Low-bit Quantization for Efficient and Accurate LLM Serving \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/5edb57c05c81d04beb716ef1d542fe9e-Paper-Conference.pdf)] \[[Code](https://github.com/efeslab/Atom)] \[[Slides](https://github.com/efeslab/Atom/blob/main/figures/atom_mlsys_slides.pdf)] \[[Poster](https://github.com/efeslab/Atom/blob/main/figures/atom_mlsys_poster.pdf)]
    * UW
  * Q-Hitter: A Better Token Oracle for Efficient LLM Inference via Sparse-Quantized KV Cache \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/bbb7506579431a85861a05fff048d3e1-Paper-Conference.pdf)] \[[Code](https://github.com/VITA-Group/Q-Hitter)]
    * UT-Texas & Oxford & Eindhoven University of Technology & Lawrence Livermore National Laboratory & CMU
* ML training
  * JIT-Q: Just-in-time Quantization with Processing-In-Memory for Efficient ML Training \[[Paper](https://arxiv.org/pdf/2311.05034)] \[[Slides](https://mlsys.org/media/mlsys-2024/Slides/2660.pdf)]
    * AMD

### Model Adaptation

* FLASH: Fast Model Adaptation in ML-Centric Cloud Platforms \[Paper] \[[Code](https://gitlab.engr.illinois.edu/DEPEND/flash)] \[[Slides](https://haoran-qiu.com/slides/flash-slides.pdf)]

### Cloud Configuration Generation

* CloudEval-YAML: A Practical Benchmark for Cloud Native YAML Configuration Generation \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/554e056fe2b6d9fd27ffcd3367ae1267-Paper-Conference.pdf)] \[[Homepage](https://cloudeval-yaml.github.io)] \[[Code](https://github.com/alibaba/CloudEval-YAML)] \[[Benchmark](https://huggingface.co/datasets/ai4cloud/CloudEval-YAML)]
  * Alibaba Cloud & UMich & UCLA & UC Merced

## Acronyms

* ML: Machine Learning
* LLM: Large Language Model
* LoRA: Low-Rank Adaptation
* MoE: Mixture-of-Experts
