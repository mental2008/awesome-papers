# MLSys 2024

## Meta Info

Homepage: [https://mlsys.org/Conferences/2024](https://mlsys.org/Conferences/2024)

Paper list: [https://mlsys.org/Conferences/2024/AcceptedPapers](https://mlsys.org/Conferences/2024/AcceptedPapers)

## Papers

* S-LoRA: Serving Thousands of Concurrent LoRA Adapters \[[arXiv](https://arxiv.org/abs/2311.03285)] \[[Code](https://github.com/S-LoRA/S-LoRA)]
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
