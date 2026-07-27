# Kernel Generation

Papers on using LLMs or agents for kernel generation, tensor program generation, and compiler optimization.

## Agent-Based Kernel Generation

* KernelEvolve: Scaling Agentic Kernel Coding for Heterogeneous AI Accelerators at Meta (ISCA 2026) \[[Personal Notes](../../reading-notes/conference/isca-2026/kernelevolve.md)] \[[arXiv](https://arxiv.org/abs/2512.23236)] \[[Blog](https://engineering.fb.com/2026/04/02/developer-tools/kernelevolve-how-metas-ranking-engineer-agent-optimizes-ai-infrastructure/)]
  * Meta
  * Present **KernelEvolve**, an agentic kernel coding framework that automates kernel generation and optimization from kernel specifications for recommendation workloads across heterogeneous accelerators.
  * Search over kernels across multiple programming abstractions, from Triton and CuTe DSL to low-level hardware-agnostic languages, using graph-based search with runtime-aware retrieval-augmented prompt synthesis.
  * Validate 100% pass rates on all 250 KernelBench problems and on 160 PyTorch ATen operators across NVIDIA GPUs, AMD GPUs, and Meta accelerators, while reducing kernel development time from weeks to hours.
* AccelOpt: A Self-Improving LLM Agentic System for AI Accelerator Kernel Optimization ([MLSys 2026](../../reading-notes/conference/mlsys-2026.md)) \[[Paper](https://openreview.net/forum?id=SBS4NJHYjZ)]
  * Stanford & UofT & AWS
  * Present **AccelOpt**, a self-improving LLM agentic system that optimizes AI accelerator kernels through iterative generation and optimization memory.
* Agentic Operator Generation for ML ASICs ([MLSys 2026](../../reading-notes/conference/mlsys-2026.md)) \[[Paper](https://openreview.net/forum?id=O3Bx0nNGnW)]
  * Meta
  * Present **TritorX**, an agentic AI system that generates correct Triton kernels for Meta's MTIA accelerator at scale.
  * Use LLM-driven generation with compilation-based validation to target an ML ASIC backend rather than only commodity GPUs.
* Optimizing PyTorch Inference with LLM-Based Multi-Agent Systems ([MLSys 2026](../../reading-notes/conference/mlsys-2026.md)) \[[Paper](https://openreview.net/forum?id=MJxhiX3sSd)]
  * LBNL
  * Study LLM-based multi-agent systems for GPU kernel optimization and compare their dynamics against existing compilers and manual development.
* ARGUS: Agentic GPU Optimization Guided by Data-Flow Invariants (arXiv:2604.18616) \[[arXiv](https://arxiv.org/abs/2604.18616)]
  * CausalFlow Inc. & HKUST & THU & Stanford & UCAS & UC Riverside
  * Present **ARGUS**, an agentic GPU kernel optimization framework that uses compile-time data-flow invariants to turn global kernel constraints into dense, structured feedback.
  * Provide a tile-based Pythonic DSL with propagated tags and tag assertions, verifying invariants through abstract interpretation and SMT solving while returning concrete counterexamples for targeted fixes.
  * On AMD MI300X GPUs, generated GEMM, flash-attention, and MoE kernels reach 99-104% of state-of-the-art hand-optimized assembly throughput; ARGUS also solves 100% of KernelBench Level 1 and 90% of Level 2 tasks.
* Improving Efficiency of GPU Kernel Optimization Agents using a Domain-Specific Language and Speed-of-Light Guidance (arXiv:2603.29010) \[[arXiv](https://arxiv.org/abs/2603.29010)]
  * NVIDIA
  * Introduce two efficiency principles for LLM-based GPU kernel optimization agents: a compact domain-specific language and Speed-of-Light (SOL) guidance.
  * Implement these ideas in **muCUTLASS**, a CUTLASS-backed DSL that exposes kernel configuration, epilogue fusion, and multi-stage pipeline choices while SOL analysis steers search, budgets trials, and flags benchmark gaming.
  * On 59 KernelBench problems, moving from low-level code generation to DSL code raises GPT-5-mini from a 0.40x regression to a 1.27x speedup over PyTorch; adding SOL-guided steering increases this to 1.56x while SOL-guided budgeting saves 19-43% of tokens.
* AVO: Agentic Variation Operators for Autonomous Evolutionary Search (arXiv:2603.24517) \[[arXiv](https://arxiv.org/abs/2603.24517)]
  * NVIDIA
  * Introduce **AVO**, a family of evolutionary variation operators that replaces fixed mutation, crossover, and hand-designed heuristics with autonomous coding agents.
  * Treat variation as a self-directed agent loop that consults the current lineage, a domain-specific knowledge base, and execution feedback to propose, repair, critique, and verify kernel edits.
  * Run 7 days of autonomous evolution on attention kernels for NVIDIA Blackwell B200 GPUs, outperforming cuDNN by up to 3.5% and FlashAttention-4 by up to 10.5%, with additional transfer gains on grouped-query attention after 30 minutes of adaptation.
* AutoKernel: Autonomous GPU Kernel Optimization via Iterative Agent-Driven Search (arXiv:2603.21331) \[[arXiv](https://arxiv.org/abs/2603.21331)] \[[Code](https://github.com/RightNow-AI/autokernel)]
  * RightNow AI
  * Introduce an autonomous GPU kernel optimizer that starts from end-to-end PyTorch models and iteratively optimizes the most impactful kernels.
  * Use Amdahl's law to rank kernel opportunities and a five-stage correctness pipeline to validate candidate optimizations.
  * Report strong kernel-level and end-to-end model speedups across matmul, attention, convolution, and MLP workloads on H100 GPUs.
* Towards Cold-Start Drafting and Continual Refining: A Value-Driven Memory Approach with Application to NPU Kernel Synthesis (arXiv:2603.10846) \[[arXiv](https://arxiv.org/abs/2603.10846)] \[[Homepage](https://evokernel.zhuo.li/)] \[[Dataset](https://huggingface.co/datasets/noahli/EvoKernel)]
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

* SOL-ExecBench: Speed-of-Light Benchmarking for Real-World GPU Kernels Against Hardware Limits (arXiv:2603.19173) \[[arXiv](https://arxiv.org/abs/2603.19173)] \[[Code](https://github.com/NVIDIA/SOL-ExecBench)] \[[Benchmark](https://research.nvidia.com/benchmarks/sol-execbench)]
  * NVIDIA
  * Present a benchmark of 235 CUDA kernel optimization problems extracted from 124 production and emerging AI models, targeting NVIDIA Blackwell GPUs.
  * Measure candidate kernels against analytically derived Speed-of-Light bounds via **SOLAR**, using a SOL Score that quantifies how much of the remaining gap to hardware-efficient execution is closed.
  * Provide a sandboxed evaluation harness with GPU clock locking, L2 cache clearing, isolated subprocess execution, and static-analysis-based checks against reward hacking.
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
