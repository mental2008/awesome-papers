# Hybrid, Scalable, Trace-Driven Performance Modeling of GPGPUs

## Metadata

​Presented in [SC '21](https://dl.acm.org/doi/10.1145/3458817.3476221). \[ [Paper](https://dl.acm.org/doi/pdf/10.1145/3458817.3476221) ]

Authors: Yehia Arafa, Abdel-Hameed Badawy, Ammar ElWazir, Atanu Barai, Ali Eker, Gopinath Chennupati, Nandakishore Santhi, Stephan Eidenbenz _New Mexico State University, State University of New York at Binghamton, Amazon Alexa, Los Alamos National Laboratory_

Code

1. PPT-GPU: https://github.com/NMSU-PEARL/PPT-GPU
2. GPGPUs-Workloads: https://github.com/NMSU-PEARL/GPGPUs-Workloads

## Understanding the paper

​The authors present a **scalable** performance prediction toolkit (PPT-GPU) for NVIDIA GPUs. Its modeling methodology uses a hybrid combination of analytical and event-driven modeling approaches. It can be easily extended to model the new features in contemporary GPUs (interesting, how to achieve this?). It has been verified against NVIDIA profiling tools (nv-nsight).



![The overview of PPT-GPU](https://user-images.githubusercontent.com/22493630/145553951-c72e7df2-27b4-485c-9349-844709aaaa0f.png)

* Memory Model: predict memory metrics such as memory requests, transactions, hit rates, and divergence.
* Compute Model: predict computational metrics such as cycles, instructions executed, and occupancy.
