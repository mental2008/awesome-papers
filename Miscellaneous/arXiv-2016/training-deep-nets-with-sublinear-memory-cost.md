# Training deep nets with sublinear memory cost

## Metadata

URL: [https://arxiv.org/abs/1604.06174](https://arxiv.org/abs/1604.06174)

Authors: Tianqi Chen (_UW_), Bing Xu (_Dato. Inc_), Chiyuan Zhang (_MIT_), Carlos Guestrin (_UW_).

### Code (memonger - memory monger)

* Original MXNet Implementation: [https://github.com/dmlc/mxnet-memonger](https://github.com/dmlc/mxnet-memonger)
* OpenAI's TensorFlow Implementation: [https://github.com/cybertronai/gradient-checkpointing](https://github.com/cybertronai/gradient-checkpointing)
* PyTorch Implementation: [https://github.com/Lyken17/pytorch-memonger](https://github.com/Lyken17/pytorch-memonger)

## Understanding the paper

### Problem

How to reduce the memory consumption of DNN training (to enable bigger models or larger batch size)?

### Solution

1. Mainly focus on reducing the memory cost to store intermediate results (feature maps) and gradients.
2. Design an algorithm to **trade computation for memory**. O(√n) memory cost with one extra forward computation per mini-batch.
   * Inplace operation: directly store the output values to memory of a input value.
   * Memory sharing: memory used by intermediate results that are no longer needed can be recycled and used in another node.
   * Re-computation: drop the results of low cost operations and re-compute the dropped intermediate results.

### Guidelines for DL frameworks

1. Enable option to drop result of low cost operations.
2. Provide planning algorithms to give efficient memory plan.
3. Enable user to set the mirror attribute (how many times a result can be recomputed) in the computation graph for memory optimization.
