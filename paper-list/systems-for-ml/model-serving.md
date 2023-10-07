# Model Serving

{% hint style="info" %}
Large language models (LLMs) are _hot_ and _diverse_ compared to conventional models. Therefore, I have classified the related works for LLMs in [another paper list](llm.md).
{% endhint %}

## Model Serving Systems

* Microsecond-scale Preemption for Concurrent GPU-accelerated DNN Inferences ([OSDI 2022](../../reading-notes/conference/osdi-2022/)) \[[Personal Notes](../../reading-notes/conference/osdi-2022/reef.md)] \[[Paper](https://www.usenix.org/conference/osdi22/presentation/han)] \[[Code](https://github.com/SJTU-IPADS/reef)] \[[Benchmark](https://github.com/SJTU-IPADS/disb)] \[[Artifact](https://github.com/SJTU-IPADS/reef-artifacts/tree/osdi22-ae)]
  * SJTU
  * REEF: GPU kernel preemption; dynamic kernel padding.
* INFaaS: Automated Model-less Inference Serving ([ATC 2021](../../reading-notes/conference/atc-2021/)) \[[Paper](https://www.usenix.org/conference/atc21/presentation/romero)] \[[Code](https://github.com/stanford-mast/INFaaS)]
  * Stanford
  * **Best Paper**
  * Consider _model-variants_
* Clipper: A Low-Latency Online Prediction Serving System ([NSDI 2017](../../reading-notes/conference/nsdi-2017/)) \[[Personal Notes](../../reading-notes/conference/nsdi-2017/clipper.md)] \[[Paper](https://www.usenix.org/conference/nsdi17/technical-sessions/presentation/crankshaw)] \[[Code](https://github.com/ucbrise/clipper)]
  * UC Berkeley
  * Caching, batching, adaptive model selection.
* TensorFlow-Serving: Flexible, High-Performance ML Serving (NIPS 2017 Workshop on ML Systems) \[[Paper](https://arxiv.org/abs/1712.06139)]
  * Google

## Auto-Configuration for Model Serving

* Serving Unseen Deep Learning Models with Near-Optimal Configurations: a Fast Adaptive Search Approach ([SoCC 2022](../../reading-notes/conference/socc-2022/)) \[[Personal Notes](../../reading-notes/conference/socc-2022/falcon.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3542929.3563485)] \[[Code](https://github.com/dos-lab/Falcon)]
  * ISCAS
  * Characterize a DL model by its key operators.
* Morphling: Fast, Near-Optimal Auto-Configuration for Cloud-Native Model Serving ([SoCC 2021](../../reading-notes/conference/socc-2021.md)) \[[Paper](https://dl.acm.org/doi/10.1145/3472883.3486987)] \[[Code](https://github.com/kubedl-io/morphling)]
  * HKUST & Alibaba
  * Meta learning; bayesian optimization; Kubernetes.

## Survey

* A Survey of Multi-Tenant Deep Learning Inference on GPU (MLSys 2022 Workshop on Cloud Intelligence / AIOps) \[[Paper](https://arxiv.org/abs/2203.09040)]
  * George Mason & Microsoft & Maryland
* A Survey of Large-Scale Deep Learning Serving System Optimization: Challenges and Opportunities (arXiv 2111.14247) \[[Paper](https://arxiv.org/abs/2111.14247)]
  * George Mason & Microsoft & Pittsburgh & Maryland
