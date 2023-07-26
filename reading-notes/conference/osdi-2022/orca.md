---
description: >-
  #distributed_serving_system #batch_serving #selective_batching
  #transformer-based_model #iteration-level_scheduling
---

# Orca: A distributed serving system for transformer-based generative models

## Meta Info

Presented in [OSDI 2022](https://www.usenix.org/conference/osdi22/presentation/yu).

Authors: Gyeong-In Yu, Joo Seong Jeong, Geon-Woo Kim, Soojeong Kim, Byung-Gon Chun (_Seoul National University, FriendliAI_)

## Understanding the paper

### TL;DRs

This paper presents a distributed serving system called **Orca**, which applies _selective batching_ and _iteration-level scheduling_ (instead of request, each time run only a single iteration of the model) to a Transformer-based model.

### Background

* ML inference serving: serving system + execution engine
  * Example: Triton (group multiple client requests into a batch) + FasterTransformer (conduct the inference procedure in the batched manner)

### Key observations

The _transformer-based generative models_ generate a next token _in an autoregressive manner_, so they need to be executed _multiple times_ to process an inference request.

### Design

* Key designs
  * Schedule the execution at the granularity of _iteration_ instead of _request_
  * Selective batching
    * Split the batch and process each request individually for _the attention operation_
      * The decision not to batch the executions of the Attention operation has _only a small impact on efficiency_
    * Apply batching to _other operations_
* Others
  * Simple first-come-first-served algorithm
  * Adopt intra-layer and inter-layer model parallelism
  * Reserve "max tokens" slots of GPU memory for storing the keys & values in advance
  * Tune the maximum batch size to maximize throughput while satisfying one’s latency budget
  * Separate the communication channels for control messages (plus tokens) and tensor data transfer

### Implementation

* 13k lines of C++, based on CUDA.
* Used gRPC for communication in the control plane.
* Used NCCL in the data plane.
* Implemented fused kernels for LayerNorm, Attention, and GeLU operators.

### Evaluation

* Models
  * GPT-3 models (13B, 101B, 175B, 341B)
  * No actual model checkpoint
  * Synthesized the trace of client requests
* **Orca** outperforms NVIDIA FasterTransformer: 36.9x throughput improvement at the same level of latency.
