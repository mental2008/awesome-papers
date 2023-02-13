# Model Serving

## Inference Serving System

* \[**INFaaS** | Stanford | ATC 2021] [INFaaS: Automated model-less inference serving](https://www.usenix.org/conference/atc21/presentation/romero) \[[Code](https://github.com/stanford-mast/INFaaS)]
  * Consider diverse model-variants.
  * VM-level horizontal autoscaling; model-level autoscaling.
* \[**Clipper** | UC Berkeley | NSDI 2017] [Clipper: A low-latency online prediction serving system](https://www.usenix.org/conference/nsdi17/technical-sessions/presentation/crankshaw) \[[Code](https://github.com/ucbrise/clipper)]
  * Communicate frameworks and applications through REST/RPC APIs, respectively.
  * Caching; batching; adaptive model selection.
* \[**TensorFlow Serving** | Google | arXiv 1712.06139] [TensorFlow-Serving: Flexible, high-performance ML serving](http://arxiv.org/abs/1712.06139)

## Configuration Recommender System

* \[**Falcon** | CAS | SoCC 2022] [Serving unseen deep learning models with near-optimal configurations: A fast adaptive search approach](https://doi.org/10.1145/3542929.3563485) \[[Code](https://github.com/dos-lab/Falcon)]
  * Characterize a DL model by its key operators (KOPs).

{% content-ref url="../../reading-notes/conference/socc-2022/serving-unseen-deep-learning-model-with-near-optimal-configurations-a-fast-adaptive-search-approach.md" %}
[serving-unseen-deep-learning-model-with-near-optimal-configurations-a-fast-adaptive-search-approach.md](../../reading-notes/conference/socc-2022/serving-unseen-deep-learning-model-with-near-optimal-configurations-a-fast-adaptive-search-approach.md)
{% endcontent-ref %}

* \[**Morphling** | HKUST & Alibaba | SoCC 2021] [Morphling: Fast, near-optimal auto-configuration for cloud-native model serving](https://doi.org/10.1145/3472883.3486987) \[[Code](https://github.com/kubedl-io/morphling)]
  * Using a combination of Meta-learning and Bayesian Optimization to search an optimal configuration; stress-test; Kubernetes.

## Survey

* \[George Mason University & Microsoft & University of Maryland | arXiv 2203.09040] [A survey of multi-tenant deep learning inference on GPU](https://arxiv.org/abs/2203.09040)
* \[George Mason University & Microsoft & University of Pittsburgh & University of Maryland | arXiv 2111.14247] [A survey of large-scale deep learning serving system optimization: Challenges and opportunities](https://arxiv.org/abs/2111.14247)
