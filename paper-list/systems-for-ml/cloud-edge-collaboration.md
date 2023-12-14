# Cloud-Edge Collaboration

{% hint style="warning" %}
No active maintenance.
{% endhint %}

## Framework

* Walle: An End-to-End, General-Purpose, and Large-Scale Production System for Device-Cloud Collaborative Machine Learning ([OSDI 2022](../../reading-notes/conference/osdi-2022/)) \[[Paper](https://www.usenix.org/conference/osdi22/presentation/lv)] \[[Code](https://github.com/alibaba/MNN)] \[[中文官网](http://www.mnn.zone/)]
  * Alibaba
  * Production system; support for collaborative ML; optimized for mobile devices.

## Automatic Graph Partitioning

* SPINN: Synergistic Progressive Inference of Neural Networks over Device and Cloud (MobiCom 2020) \[[Paper](https://dl.acm.org/doi/10.1145/3372224.3419194)]
  * Samsung AI Center & Cambridge
  * Early-exit; split CNNs at runtime.
* Dynamic Adaptive DNN Surgery for Inference Acceleration on the Edge (INFOCOM 2019) \[[Paper](https://ieeexplore.ieee.org/document/8737614)]
  * PolyU & Sydney
  * DNN surgery: Consider different network conditions; characterize DNNs as DAG rather than a chain.
* Distributed Deep Neural Networks Over the Cloud, the Edge and End Devices (ICDCS 2017) \[[Paper](https://ieeexplore.ieee.org/document/7979979)] \[[Code](https://github.com/kunglab/ddnn)]
  * Harvard
  * DDNN: Distribute DNN across the cloud, the edge and end devices.
* Neurosurgeon: Collaborative Intelligence Between the Cloud and Mobile Edge ([ASPLOS 2017](../../reading-notes/conference/asplos-2017/)) \[[Personal Notes](../../reading-notes/conference/asplos-2017/neurosurgeon.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3037697.3037698)]
  * UMich
  * At the granularity of NN layers; select _one_ partition point.
