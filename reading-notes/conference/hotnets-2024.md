# HotNets 2024

## Meta Info

Homepage: [https://conferences.sigcomm.org/hotnets/2024/index.html](https://conferences.sigcomm.org/hotnets/2024/index.html)

Paper list: [https://conferences.sigcomm.org/hotnets/2024/program.html](https://conferences.sigcomm.org/hotnets/2024/program.html)

## Papers

### Large Language Models (LLMs)

* Networking for LLM training
  * I’ve Got 99 Problems But FLOPS Ain’t One \[[Paper](https://conferences.sigcomm.org/hotnets/2024/papers/hotnets24-333.pdf)]
    * University Politehnica of Bucharest
    * The future of large-scale AI infrastructure requires
      * (1) novel wide-area transports for inter-DC communication;
      * (2) a multipath transport and novel datacenter topologies for intra-datacenter communication;
      * (3) high-speed scale-up networks and transport.
* LLM for networking
  * Designing Network Algorithms via Large Language Models \[[Paper](https://conferences.sigcomm.org/hotnets/2024/papers/hotnets24-88.pdf)]
    * MSR
    * **NADA**: Network Algorithm Design Automation via LLMs

### Congestion Control

* MLTCP: A Distributed Technique to Approximate Centralized Flow Scheduling For Machine Learning \[[Paper](https://conferences.sigcomm.org/hotnets/2024/papers/hotnets24-166.pdf)]
  * MIT
  * Scale the congestion window size (or sending rate) based on the number of bytes sent at each iteration.

### Trading Systems

* Network Design Considerations for Trading Systems \[[Paper](https://conferences.sigcomm.org/hotnets/2024/papers/hotnets24-262.pdf)]
  * Jane Street

### Caching

* Revisiting Cache Freshness for Emerging Real-Time Applications \[[Paper](https://conferences.sigcomm.org/hotnets/2024/papers/hotnets24-21.pdf)]
  * UC Berkeley
  * At real-time timescales, making freshness decisions in response to incoming writes is more efficient than TTL-based policies.
* Rethinking Web Caching: An Optimization for the Latency-Constrained Internet \[[Paper](https://conferences.sigcomm.org/hotnets/2024/papers/hotnets24-124.pdf)]
  * Shahid Beheshti University & Università della Svizzera italiana & Institute for Research in Fundamental Sciences & Sharif University of Technology
  * Web servers _proactively_ provide clients with the latest validation tokens for resources during the initial step of page loading → Allow browsers to use unchanged cached content without unnecessary round trips.

### Performance Analysis

* End-to-End Performance Analysis of Learning-enabled Systems \[[Paper](https://conferences.sigcomm.org/hotnets/2024/papers/hotnets24-138.pdf)]
  * USC & Hebrew University of Jerusalem & Rice University & Microsoft
  * A gray-box approach (leverage partial information) → Use gradient to analyze the performance of DNNs.
* Buffy: A Formal Language-Based Framework for Network Performance Analysis \[[Paper](https://conferences.sigcomm.org/hotnets/2024/papers/hotnets24-2.pdf)]
  * UWaterloo & Princeton
  * Language abstractions to enable users to model network functionality and analysis tasks in an imperative solver-agnostic program.
  * A framework to transform them into a representation that can be analyzed by the appropriate solver.

### Reliability

* Automatic Configuration Repair \[[Paper](https://conferences.sigcomm.org/hotnets/2024/papers/hotnets24-398.pdf)]
  * XJTU & ByteDance
  * Draw some insights from the field of Automatic Software Repair (ASR).
  * Propose **localize-fix-validate** as a possible approach to realize **Automatic Configuration Repair (ACR)**.

## Acronyms

* TTL: Time-To-Live
* DNN: Deep Neural Network
* DC: Datacenter
