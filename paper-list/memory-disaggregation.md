# Memory Disaggregation

## CXL-based Disaggregation

* \[**Pond** | Microsoft Azure | ASPLOS 2023] [Pond: CXL-based memory pooling systems for cloud platforms](https://www.microsoft.com/en-us/research/publication/pond-cxl-based-memory-pooling-systems-for-cloud-platforms/)
* \[**DirectCXL** | KAIST | ATC 2022] [Direct access, high-performance memory disaggregation with DirectCXL](https://www.usenix.org/conference/atc22/presentation/gouk)
  * The first work that brings CXL 2.0 into a real system and analyzes the performance characteristics.
  * For real-world applications, DirectCXL exhibits **3x** better performance than RDMA-based memory disaggregation.

{% content-ref url="../reading-notes/conference/atc-2022/direct-access-high-performance-memory-disaggregation-with-directcxl.md" %}
[direct-access-high-performance-memory-disaggregation-with-directcxl.md](../reading-notes/conference/atc-2022/direct-access-high-performance-memory-disaggregation-with-directcxl.md)
{% endcontent-ref %}

## RDMA-based Disaggregation

* \[**Hydra** | UMich SymbioticLab | FAST 2022] [Hydra: Resilient and highly available remote memory](https://www.usenix.org/conference/fast22/presentation/lee) \[[Code](https://github.com/SymbioticLab/Hydra)]
  * Leverage online _erasure coding_ to achieve single-digit μs latency under failures.
* \[**Kona** | ASPLOS 2021] [Rethinking software runtimes for disaggregated memory](https://doi.org/10.1145/3445814.3446713) \[[Code](https://github.com/project-kona/asplos21-ae)]
  * Remote memory caching and cache-line dirty data tracking based on cache coherence.
* \[**Infiniswap** | UMich SymbioticLab | NSDI 2017] [Efficient memory disaggregation with Infiniswap](https://www.usenix.org/conference/nsdi17/technical-sessions/presentation/gu) \[[Code](https://github.com/SymbioticLab/Infiniswap)]
  * Divide the swap space of each machine into many slabs and distribute them across many machines' remote memory.
  * Decentralized slab placements and evictions.
