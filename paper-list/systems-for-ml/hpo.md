# Hyper-Parameter Tuning (HPO)

{% hint style="info" %}
No active maintenance.
{% endhint %}

## Optimizing HPO Workloads

* Hydro: Surrogate-Based Hyperparameter Tuning Service in Datacenters ([OSDI 2023](../../reading-notes/conference/osdi-2023.md)) \[[Paper](https://www.usenix.org/conference/osdi23/presentation/hu)] \[[Code](https://github.com/S-Lab-System-Group/Hydro)]
  * NTU & Shanghai AI Lab
  * Surrogate models; co-locate HPO jobs with LLM training.
* Elastic Hyperparameter Tuning on the Cloud ([SoCC 2021](../../reading-notes/conference/socc-2021.md)) \[[Paper](https://dl.acm.org/doi/10.1145/3472883.3486989)]
  * UC Berkeley
  * SEER
* RubberBand: Cloud-based Hyperparameter Tuning ([EuroSys 2021](../../reading-notes/conference/eurosys-2021/)) \[[Paper](https://dl.acm.org/doi/10.1145/3447786.3456245)]
  * UC Berkeley

## HPO for Systems

* Morphling: Fast, Near-Optimal Auto-Configuration for Cloud-Native Model Serving ([SoCC 2021](../../reading-notes/conference/socc-2021.md)) \[[Paper](https://dl.acm.org/doi/10.1145/3472883.3486987)] \[[Code](https://github.com/kubedl-io/morphling)]
  * HKUST & Alibaba
  * Meta-learning for tuning resources and runtime parameters in model serving systems.
* Selecting the Best VM across Multiple Public Clouds: A Data-Driven Performance Modeling Approach ([SoCC 2017](../../reading-notes/conference/socc-2017/)) \[[Paper](https://doi.org/10.1145/3127479.3131614)]
  * UC Berkeley & FAIR & MSR
  * Select the best VM across multiple cloud providers.
* CherryPick: Adaptively Unearthing the Best Cloud Configurations for Big Data Analytics ([NSDI 2017](../../reading-notes/conference/nsdi-2017/)) \[[Paper](https://www.usenix.org/conference/nsdi17/technical-sessions/presentation/alipourfard)]
  * Yale & MSR & UC Berkeley & Alibaba
  * Pick the right cloud configuration for _big data analytics jobs_.
* Google Vizier: A Service for Black-Box Optimization (KDD 2017) \[[Paper](https://www.kdd.org/kdd2017/papers/view/google-vizier-a-service-for-black-box-optimization)]
  * Google
  * Black-box optimization.

## Acronyms

* HPO: Hyper-Parameter Tuning
