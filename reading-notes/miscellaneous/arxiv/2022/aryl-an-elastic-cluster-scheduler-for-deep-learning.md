# Aryl: An elastic cluster scheduler for deep learning

## Metadata

Presented in [arxiv:2202.07896](https://arxiv.org/abs/2202.07896).

Authors: Jiamin Li, Hong Xu, Yibo Zhu, Zherui Liu, Chuanxiong Guo, Cong Wang, _ByteDance, City University of Hong Kong, The Chinese University of Hong Kong_

## Understanding the paper

### TL;DRs

This paper presents **Aryl**, a cluster scheduler that introduces _capacity loaning_ to _loan idle inference GPU servers for training jobs_.

It exploits _elastic scaling_ that scales a training job’s GPU allocation to better utilize loaned resources.
