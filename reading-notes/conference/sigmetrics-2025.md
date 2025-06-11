# SIGMETRICS 2025

## Meta Info

Homepage: [https://www.sigmetrics.org/sigmetrics2025/](https://www.sigmetrics.org/sigmetrics2025/)

### Paper List

* [https://www.sigmetrics.org/sigmetrics2025/program.html](https://www.sigmetrics.org/sigmetrics2025/program.html)
* [https://dl.acm.org/doi/proceedings/10.1145/3726854](https://dl.acm.org/doi/proceedings/10.1145/3726854)

## Papers

### Scheduling

* Improving Multiresource Job Scheduling with Markovian Service Rate Policies \[[Paper](https://dl.acm.org/doi/10.1145/3727117)]
  * UNC & NEU
  * MSR: Markovian Service Rate
* Robust Gittins for Stochastic Scheduling \[[Paper](https://dl.acm.org/doi/10.1145/3726854.3727315)]
  * CMU & Pittsburgh & Microsoft
  * How to design a robust scheduling policy to produce nearly optimal schedules even if there are _modest discrepancies between the predicted distributions and the underlying real distributions_?
  * The standard Gittins index policy is _not robust_ in this sense.
* A Gittins Policy for Optimizing Tail Latency \[[Paper](https://dl.acm.org/doi/10.1145/3727109)]
  * Cornell
  * A new scheduling policy to achieve strong tail optimality in the light-tailed M/G/1 with unknown job sizes.
  * The optimal policy turns out to be a variant of the Gittins policy.

### Resource Allocation

* Online Allocation with Multi-Class Arrivals: Group Fairness vs Individual Welfare \[[Paper](https://dl.acm.org/doi/10.1145/3727120)]
  * Alberta & Waterloo
* Allocating Public Goods via Dynamic Max-Min Fairness: Long-Run Behavior and Competitive Equilibria \[[Paper](https://dl.acm.org/doi/10.1145/3711695)]
  * Cornell
* Tight Bounds for Dynamic Bin Packing with Predictions \[[Paper](https://dl.acm.org/doi/10.1145/3700437)]
  * Northwestern & NTU
  * MinUsageTime Dynamic Bin Packing (DBP)
* Online Fair Allocation of Reusable Resources \[[Paper](https://dl.acm.org/doi/10.1145/3727121)]
  * UMass Amherst
* Learning-Augmented Competitive Algorithms for Spatiotemporal Online Allocation with Deadline Constraints \[[Paper](https://dl.acm.org/doi/10.1145/3711701)]
  * UMass Amherst & Caltech & Waterloo & MIT
  * Spatiotemporal Online Allocation with Deadline Constraints (SOAD)

### Serverless Computing

* Exploring Function Granularity for Serverless Machine Learning Application with GPU Sharing \[[Paper](https://dl.acm.org/doi/10.1145/3711699)]
  * NCSU & UCSC
  * Adaptive granularity → Improvement in SLO hit rates & reduction in resource coasts
* PipeCo: Pipelining Cold Start of Deep Learning Inference Services on Serverless Platforms \[[Paper](https://dl.acm.org/doi/10.1145/3727125)]
  * SJTU
  * Three techniques
    * Divide each inference services into multiple slices & prewarm slices in a sequential and overlapping manner.
    * Estimate periodic patterns in requests and idle containers for scheduling slices.
    * Incorporate a similarity-based container matcher for the reuse of idle containers.
  * Implemented upon OpenFaaS

### Autoscaling

* Exploiting Kubernetes Autoscaling for Economic Denial of Sustainability \[[Paper](https://dl.acm.org/doi/10.1145/3727114)]
  * Boston University & UMD
