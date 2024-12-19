# NSDI 2023

## Meta Info

Homepage: [https://www.usenix.org/conference/nsdi23](https://www.usenix.org/conference/nsdi23)

Paper list: [https://www.usenix.org/conference/nsdi23/technical-sessions](https://www.usenix.org/conference/nsdi23/technical-sessions)

### Accepted Papers

* Spring: [https://www.usenix.org/conference/nsdi23/spring-accepted-papers](https://www.usenix.org/conference/nsdi23/spring-accepted-papers)
* Fall: [https://www.usenix.org/conference/nsdi23/fall-accepted-papers](https://www.usenix.org/conference/nsdi23/fall-accepted-papers)

## Papers

### Large Language Model (LLM)

* Bamboo: Making Preemptible Instances Resilient for Affordable Training of Large DNNs \[[Paper](https://www.usenix.org/conference/nsdi23/presentation/thorpe)] \[[Code](https://github.com/uclasystem/bamboo)]
  * UCLA & CMU & MSR & Princeton
  * Resilient distributed training

### Model Serving

* Shepherd: Serving DNNs in the wild \[[Paper](https://www.usenix.org/conference/nsdi23/presentation/zhang-hong)] \[[Personal Notes](shepherd.md)]
  * UWaterloo & Yale & UC Berkeley
  * Handle the short-term workload unpredictability.
  * Aggregate request streams into moderately-sized groups; leverage preemption and model-specific batching.

### RDMA

* Understanding RDMA Microarchitecture Resources for Performance Isolation \[[Personal Notes](husky.md)] \[[Paper](https://www.usenix.org/conference/nsdi23/presentation/kong)] \[[Benchmark Suite](https://github.com/host-bench/husky)]
  * Duke & Microsoft & SJTU
  * Develop a _test suite_ to _evaluate_ RDMA performance isolation solutions.
