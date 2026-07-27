# Agentic System Generation

Papers on using LLMs or coding agents to synthesize and optimize end-to-end systems and application deployments.

## Serving System Generation

* FlashRT: Agent Harness for Guiding Agents to Deploy Real-Time Multimodal Applications (arXiv:2607.18171) \[[arXiv](https://arxiv.org/abs/2607.18171)] \[[Code](https://github.com/Infini-AI-Lab/FlashRT)] \[[Homepage](https://infini-ai-lab.github.io/flashrt-blog)]
  * CMU & AMD & University at Buffalo
  * Introduces **FlashRT**, an agent harness that transforms simple single-GPU multimodal reference applications into optimized multi-GPU deployments.
  * Uses a chain-of-program workflow to derive and validate an intermediate representation, identify candidate transformations through static analysis, and iteratively implement, verify, and benchmark them.
  * Optimizes placement, streaming, and intra-model parallelism across hardware budgets and latency or throughput objectives.
* VibeServe: Can AI Agents Build Bespoke LLM Serving Systems? (arXiv:2605.06068) \[[arXiv](https://arxiv.org/abs/2605.06068)] \[[Code](https://github.com/uw-syfi/vibe-serve)]
  * UW
  * Introduces **VibeServe**, a multi-agent loop that synthesizes complete LLM serving stacks for a target model, workload, and hardware configuration.
  * Uses an outer loop to plan and track the system-design search and an inner loop to implement candidates, check correctness, and benchmark performance.
  * Remains competitive with vLLM in standard deployments and exploits specialization opportunities in six non-standard serving scenarios.
