# HexGen: Generative inference of foundation model over heterogeneous decentralized environment

## Meta Info

Presented in [arxiv:2311.11514](https://arxiv.org/abs/2311.11514).

## Understanding the paper

### TL;DR

* Formally define the scheduling of serving the inference of multiple copies of the same foundation model concurrently over a heterogeneous set of GPU devices as _a constrained optimization problem_
  * Each pipeline stage can consider a different tensor model parallel degree
  * Propose _a heuristic-based evolutionary algorithm_ to search for the optimal layout
* HexGen — a distributed inference engine
  * Support asymmetric tensor model parallelism and pipeline parallelism under the _heterogeneous_ setting
  * Select a leader GPU node in a pipeline stage
    * Manage the peer-to-peer communication between pipeline stages
    * Manage the broadcast operation of the received activations within its tensor model parallel group

### Formulation

* $$\textbf{D} = \{ d_1, \cdots, d_N \}$$ — a set of $$N$$ GPU devices
  * $$M_d$$ — GPU memory limit
  * $$m_d$$ — GPU memory bandwidth
  * $$c_d$$ — Tensor core computation power
  * $$\textbf{A} \in \mathbb{R}_{+}^{N \times N}$$ — The communication _delay_ matrix between these devices
    * $$\alpha_{d, d'}$$ — The delay between device $$d$$ and $$d'$$
  * $$\textbf{B} \in \mathbb{R}_{+}^{N \times N}$$ — The communication _bandwidth_ matrix between these devices
    * $$\beta_{d, d'}$$ — The bandwidth between the device $$d$$ and $$d'$$
  * $$L$$ — The total number of layers in the model
* $$\sigma$$ — An assignment $$\textbf{D} \rightarrow \{ \textbf{d}_{i,j}, l_{i,j} \}$$
  * $$\textbf{d}_{i,j}$$ — A subset of GPU devices
    * Serve the $$i$$-th model replica as an independent pipeline
    * Serve the $$j$$-th stage in the -th pipeline
    * $$l_{i,j}$$ — Transformer layers
    * $$\left \| \textbf{d}_{i,j} \right\| > 1$$ → Run tensor model parallelism
  * An optimal assignment $$\sigma^{*} = \text{arg},\mathop{\text{max}}\limits_{\sigma \in \sum}\quad\mathbb{E}_{\textbf{T} \sim \varphi}[\text{SLO}(C_{\text{comm}}(\sigma) + C_{\text{comp}}(\sigma))]$$
    * s.t. $$C_{\text{mem}}^{d}(\sigma) \le M_d, \forall d \in \textbf{D}$$
    * $$C_{\text{comm}}(\sigma)$$ — The communication cost
    * $$C_{\text{comp}}(\sigma)$$ — The computation cost
    * $$C_{\text{mem}}^{d}(\sigma)$$ — Memory consumption for the device $$d$$
    * Objective: Find an _optimal_ assignment that _partitions the device set to represent multiple independent inference pipeline groups_ that can _maximize the inference service SLO_ considering the computation cost, communication cost, and memory consumption constraints

### Implementation

* Essential change: _each pipeline parallel stage can be assigned with a different number of layers and tensor model parallel degree_
* Steps
  * Each stage selects _a leader GPU_ to initialize an independent tensor model parallel group
  * Only the leader node in each stage (i.e., tensor model parallel group) sends the activation to the leader GPU in the next stage
  * After receiving the activation, the leader GPU broadcasts this activation among its tensor model parallel group to execute the tensor model parallel computation

### Evaluation

* Compared to [Petals](https://aclanthology.org/2023.acl-demo.54)
  * Petals depends on _dynamic adjustment_ of the collective learning paradigm to ensure elasticity → a dynamic design compromises the inference service performance
  * HexGen carefully designs _static_ scheduling of the inference workflow
* Metrics
  * SLO attainment
    * Generate some inference workload according to _a Poisson process_ parameterized by _request rate_
    * For a target SLO goal (e.g., 99%)
      * _The minimum latency deadline_ to achieve the desired attainment
      * The system’s resilience to _peak request rate_
    * Llama 2 70B model
    * Real-world prompts: https://huggingface.co/datasets/lmsys/chatbot\_arena\_conversations
    * Output sequence length: 32, 64, 128
    * Request rates vary between 0.125 - 10 requests per second
    * $$\text{SLO Scale}=T$$ → the default SLO is set as tight as $$T \times$$ inference latency
