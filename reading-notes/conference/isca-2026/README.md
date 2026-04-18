# ISCA 2026

## Meta Info

Homepage: [https://iscaconf.org/isca2026/](https://iscaconf.org/isca2026/)

## Papers

### Kernel Generation

* KernelEvolve: Scaling Agentic Kernel Coding for Heterogeneous AI Accelerators at Meta \[[Personal Notes](kernelevolve.md)] \[[arXiv](https://arxiv.org/abs/2512.23236)] \[[Blog](https://engineering.fb.com/2026/04/02/developer-tools/kernelevolve-how-metas-ranking-engineer-agent-optimizes-ai-infrastructure/)]
  * Meta
  * Present **KernelEvolve**, an agentic kernel coding framework that automates kernel generation and optimization from kernel specifications across heterogeneous AI accelerators.
  * Combine tree-search-based kernel exploration, retrieval-augmented hardware knowledge injection, and profiling-driven evaluation feedback in a single optimization loop.
  * Validate 100% correctness on 160 ATen operators across H100, MI350, and MTIA v3, and achieve a 100% pass rate on all 250 KernelBench problems.
