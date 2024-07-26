# SIGCOMM 2024

## Meta Info

Homepage: [https://conferences.sigcomm.org/sigcomm/2024/](https://conferences.sigcomm.org/sigcomm/2024/)

Paper list: [https://conferences.sigcomm.org/sigcomm/2024/program/](https://conferences.sigcomm.org/sigcomm/2024/program/)

## Papers

### Large Language Models (LLMs)

* CacheGen: KV Cache Compression and Streaming for Fast Large Language Model Serving \[[arXiv](https://arxiv.org/abs/2310.07240)] \[[Code](https://github.com/UChi-JCL/CacheGen)]
  * UChicago & Microsoft & Stanford
  * Use a custom tensor encoder to encode a KV cache into more compact bitstream representations with negligible decoding overhead.
  * Adapt the compression level of different parts of a KV cache to cope with changes in available bandwidth.
  * Focus on reducing the network delay in fetching the KV cache. → TTFT reduction.
