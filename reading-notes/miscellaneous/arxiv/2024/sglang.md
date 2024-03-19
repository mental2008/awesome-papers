---
description: LLM Inference
---

# Efficiently programming large language models using SGLang

## Meta Info

Presented in [arxiv:2312.07104](https://arxiv.org/abs/2312.07104). \[ [Code](https://github.com/sgl-project/sglang) ]

Authors: Lianmin Zheng, Liangsheng Yin, Zhiqiang Xie, Jeff Huang, Chuyue Sun, Cody Hao Yu, Shiyi Cao, Christos Kozyrakis, Ion Stoica, Joseph E. Gonzalez, Clark Barrett, Ying Sheng (UCB, Stanford)

## Understanding the paper

### Background

* **A single generation call** = The process of taking a sequence of input tokens and generating a sequence of output tokens
* **Programming LLMs** = The development of computer programs that control the generation processes of LLMs
* The paradigm of programming LLMs changes
  * Single and straightforward generation calls → Multiple and interdependent generation calls interleaved with control flow
  * User cases
    * Prompting techniques
      * Basic: few-shot prompting, chain-of-thought prompting, retrieval-augmented generation
      * Meta-reasoning
        1. LLM initially generates multiple solutions through chain-of-thought prompting;
        2. It then performs meta-reasoning across these solutions to derive the final resolution.
      * Skeleton-of-thought
        1. LLM first generates a skeleton of the answer;
        2. It then issues multiple _parallel_ calls to elaborate the skeleton into a detailed explanation.
      * Tree-of-thought
        * Integrate LLM calls within tree search algorithms (e.g., BFS).
    * LLM-based agents
      * The behavior of the agent is controlled by loops and conditional statements

### Central question

* How to manage the multiple API calls of LLMs?
* A good system should include LLM state management, decoding process control, and smooth integration with external tools.

### Key insight

_Co-design_ both the front-end language (**programming interface**) and the back-end **runtime**

### System overview

* **SGLang**
  * An embedded domain-specific language in Python
* **Interpreter**
  * Manage the prompt state and execute SGLang programs
  * Treat a prompt as a stream and submit primitive operations to this stream for asynchronous execution
* **Compiler**
  * Compiled as a computational graph and enable further optimizations
* **SGVM**
  * A custom serving engine/runtime
  * RadixAttention

### Key designs

* SGLang Primitives
  * Enable the manipulation of prompts and generations
    * `gen`: call LLM generation
    * `select`: let the LLM choose the option with the highest probability from a list
    * `extend` or `+=`: extend the current prompt
  * Control of parallelism
    * `fork`: fork the current prompt state
    * `join`: rejoin the forked prompt states
* Compilation optimizations
  * Code movement for improving prefix sharing
    * Doesn't strictly preserve the original computation —— aggressive
    * Prompt GPT-4 to re-order graph nodes
* Runtime
  * **RadixAttention**
    * Utilize a radix tree (w/ efficient prefix search, reuse, insertion, eviction)
    * Least Recently Used (LRU) eviction policy
  * Cache-aware scheduling → Increase the cache hit rate
    * Key idea: Sort the requests by **matched prefix length**
  * Newly “extend” CUDA kernel

### Implementation

* Approximately 9k lines of Python code
* SGVM reuses some components from LightLLM
