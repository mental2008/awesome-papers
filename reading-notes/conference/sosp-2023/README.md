# SOSP 2023

## Meta Info

Homepage: [https://sosp2023.mpi-sws.org/](https://sosp2023.mpi-sws.org/)

## Papers

### Large Language Models (LLMs)

* Efficient Memory Management for Large Language Model Serving with PagedAttention \[[Paper](https://dl.acm.org/doi/10.1145/3600006.3613165)] \[[arXiv](https://browse.arxiv.org/abs/2309.06180)] \[[Code](https://github.com/vllm-project/vllm)] \[[Homepage](https://vllm.ai/)]
  * UC Berkeley & Stanford & UCSD
  * vLLM, PagedAttention
* Oobleck: Resilient Distributed Training of Large Models Using Pipeline Templates \[[Paper](https://dl.acm.org/doi/abs/10.1145/3600006.3613152)] \[[arXiv](https://browse.arxiv.org/abs/2309.08125)] \[[Code](https://github.com/SymbioticLab/Oobleck)]
  * UMich SymbioticLab & AWS & PKU
* GEMINI: Fast Failure Recovery in Distributed Training with In-Memory Checkpoints \[[Paper](https://dl.acm.org/doi/10.1145/3600006.3613145)]
  * Rice & AWS

### Deep Learning Recommendation Models (DLRMs)

* UGache: A Unified GPU Cache for Embedding-based Deep Learning \[[Personal Notes](ugache.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3600006.3613169)]
  * SJTU
  * Multi-GPU embedding cache; exploit cross-GPU interconnects (NVLink, NVSwitch).
* Bagpipe: Accelerating Deep Recommendation Model Training \[[Paper](https://dl.acm.org/doi/abs/10.1145/3600006.3613142)]
  * UW-Madison & UChicago
