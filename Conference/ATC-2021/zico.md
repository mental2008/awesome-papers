# Zico: Efficient GPU memory sharing for concurrent DNN training

## Metadata

Presented in [ATC 2021](https://www.usenix.org/conference/atc21/presentation/lim).

Authors: Gangmuk Lim, Jeongseob Ahn, Wencong Xiao, Youngjin Kwon, Myeongjae Jeon

## Understanding the paper

### TL;DR

This paper presents a system named **Zico**, which aims at **reducing the system-wide GPU memory consumption** for co-located DNN training jobs. It reclaims unused memory from the jobs by tracking their memory usage and automatically decides how to share memory across multiple training jobs while not exceeding the capacity.

### Thoughts

The authors support a spatial GPU sharing by (Multi-Process Service) MPS. They argue that **not all cases require strong isolation**, e.g., hyperparameter tuning driven by a single user.

I personally think it makes sense, but is this type of job a big part of the cluster? Is there enough scale to support this scenario?

## Related reference (for further reading)

1. Time-sharing / spatial-sharing
   * Gandiva: Introspective Cluster Scheduling for Deep Learning. In USENIX OSDI, 2018.
   * Salus: Fine-Grained GPU Sharing Primitives for Deep Learning Applications, In MLSys 2020.
2. Tensor swapping/recomputation
   * vDNN: Virtualized Deep Neural Networks for Scalable, Memory-efficient Neural Network Design. In MICRO, 2016.
     * Tensor swapping.
     * Predictively swap tensors to overlap the CPU-GPU communication time.
   * SwapAdvisor: Pushing Deep Learning Beyond the GPU Memory Limit via Smart Swapping. In ASPLOS, 2020.
     * Tensor swapping.
     * Consider both GPU memory allocation and operator scheduling.
   * Capuchin: Tensor-Based GPU Memory Management for Deep Learning. In ASPLOS, 2020.
     * Combination of tensor swapping and recomputation.
     * Computational graph agnostic.
   * Superneurons: Dynamic GPU Memory Management for Training Deep Neural Networks. In PPoPP, 2018.
     * Cost-aware recomputation.
     * Remove the convolutional layer tensor with low computational overhead.
   * Checkmate: Breaking the Memory Wall with Optimal Tensor Rematerialization. In MLSys, 2020.
     * Define tensor recomputation as an optimization problem and provide an approximate solution.
3. Compression
   * Gist: Efficient Data Encoding for Deep Neural Network Training. In ISCA, 2018.
   * Echo: Compiler-Based GPU Memory Footprint Reduction for LSTM RNN Training. In ISCA, 2020.

How to reduce the memory usage of DNN models is also a popular topic, and the common methods are **tensor swapping**, **recomputation**, and **compression** mentioned above.
