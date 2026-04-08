# Kernel Generation

Papers on using LLMs or agents for kernel generation, tensor program generation, and compiler optimization.

## Agent-Based Kernel Generation

* AutoKernel: Autonomous GPU Kernel Optimization via Iterative Agent-Driven Search (arXiv:2603.21331) \[[arXiv](https://arxiv.org/abs/2603.21331)] \[[Code](https://github.com/RightNow-AI/autokernel)]
  * RightNow AI
  * Introduce an autonomous GPU kernel optimizer that starts from end-to-end PyTorch models and iteratively optimizes the most impactful kernels.
  * Use Amdahl's law to rank kernel opportunities and a five-stage correctness pipeline to validate candidate optimizations.
  * Report strong kernel-level and end-to-end model speedups across matmul, attention, convolution, and MLP workloads on H100 GPUs.
* Towards Cold-Start Drafting and Continual Refining: A Value-Driven Memory Approach with Application to NPU Kernel Synthesis (arXiv:2603.10846) \[[arXiv](https://arxiv.org/abs/2603.10846)] \[[Homepage](https://evokernel.zhuo.li/)]
  * SJTU & Shanghai AI Lab & MemTensor
  * Introduce **EvoKernel**, a self-evolving agentic framework for NPU kernel synthesis in data-scarce programming domains.
  * Formulate synthesis as a memory-based reinforcement learning task with value-driven retrieval and cross-task memory sharing for cold-start drafting and continual latency refinement.
  * Improve frontier models' correctness from 11.0% to 83.0% and achieve a median speedup of 3.60x over initial drafts on an NPU variant of KernelBench.
* CUDA Agent: Large-Scale Agentic RL for High-Performance CUDA Kernel Generation (arXiv:2602.24286) \[[arXiv](https://arxiv.org/abs/2602.24286)] \[[Code](https://github.com/BytedTsinghua-SIA/CUDA-Agent)] \[[Homepage](https://cuda-agent.github.io/)]
  * ByteDance Seed & Tsinghua AIR
  * Present a large-scale agentic RL system for high-performance CUDA kernel generation.
  * Combine scalable data synthesis, a skill-augmented CUDA development environment, and stable RL training for verifiable kernel optimization.
  * Outperform `torch.compile` by 100%, 100%, and 92% on the three KernelBench levels.

## Compiler Optimization

* Meta Large Language Model Compiler: Foundation Models of Compiler Optimization \[[Paper](https://ai.meta.com/research/publications/meta-large-language-model-compiler-foundation-models-of-compiler-optimization/)]
  * Meta AI

## Benchmarks

* TritonBench: Benchmarking Large Language Model Capabilities for Generating Triton Operators (arXiv:2502.14752) \[[arXiv](https://arxiv.org/abs/2502.14752)] \[[Benchmark](https://github.com/thunlp/TritonBench)]
  * THU-NLP
  * Present the first comprehensive benchmark for Triton operator generation.
  * Cover two evaluation channels: 184 real-world operators from GitHub and a collection of operators aligned with PyTorch interfaces.
  * Evaluate both functional correctness and efficiency on widely deployed GPUs.
* KernelBench: Can LLMs Write Efficient GPU Kernels? (arXiv:2502.10517) \[[arXiv](https://arxiv.org/abs/2502.10517)] \[[Benchmark](https://github.com/ScalingIntelligence/KernelBench)] \[[Homepage](https://scalingintelligence.stanford.edu/blogs/kernelbench/)]
  * Stanford
  * Provide an open-source benchmark for evaluating whether LMs can generate fast and correct GPU kernels for PyTorch ML workloads.
  * Cover 250 tasks spanning single-kernel operators, simple fusion patterns, and full model architectures.
  * Introduce `fast_p`, a metric that measures the fraction of generated kernels that are both correct and faster than a configurable baseline threshold.
