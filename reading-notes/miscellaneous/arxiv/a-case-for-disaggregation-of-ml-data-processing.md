# A case for disaggregation of ML data processing

## Metadata

Presented in [arxiv:2210.14826](https://arxiv.org/abs/2210.14826).

Authors: Andrew Audibert, Yang Chen, Dan Graur, Ana Klimovic, Jiri Simsa, Chandramohan A Thekkath (_Google_ & _ETH Zurich_)

## Understanding the paper

### TL;DR

This paper present **tf.data service**, which is a disaggregated input data processing service built on top of **tf.data**.

### Features

* Disaggregate data preprocessing from ML computation.
* Horizontal scaling.
* Data sharing to reuse computation (e.g., hyperparameter tuning jobs).
* Coordinated data reads.

### Evaluation

* Speedups: up to 100x.
* Reduce job cost: up to 89x.
