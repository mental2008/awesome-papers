# Elastic Parameter Server Load Distribution in Deep Learning Clusters

## Metadata

Presented in [SoCC 2020](https://dl.acm.org/doi/10.1145/3419111.3421307).

Authors: Yangrui Chen, Yanghua Peng, Yixin Bao, Chuan Wu, Yibo Zhu, Chuanxiong Guo

## Understanding the paper

A work across HKU and ByteDance.

### Motivation

* Parameter servers (PS) are widely used in distributed DNN training. But their performance will be damaged by **stragglers** for some reasons (e.g., _imbalanced parameter distribution_, _bandwidth contention_, or _computation interference_).
* **Few** studies have investigated **efficient parameter (aka load) distribution** among parameter servers (PS).

### Solution

* Propose a **dynamic** parameter server load distribution scheme called **PSLD**.
  * Mitigate PS straggler issues and accelerate distributed model training.
  * An _exploitation-exploration_ method is used to 1) scale in and out parameter servers, 2) adjust parameter distribution among PSs.
  * Implemented on BytePS and vanilla MXNet PS architectures.

![The workflow of PSLD](../../../.gitbook/assets/psld-workflow.png)

Not read the details of the algorithms.
