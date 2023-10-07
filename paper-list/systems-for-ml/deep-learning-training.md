# Deep Learning Training

## Parallelism

* Supporting Very Large Models using Automatic Dataflow Graph Partitioning ([EuroSys 2019](../../reading-notes/conference/eurosys-2019.md)) \[[Paper](https://doi.org/10.1145/3302424.3303953)]
  * NYU
  * Tofu: _Automatic partition_ a dataflow graph of fine-grained tensor operations.
* One weird trick for parallelizing convolutional neural networks (arXiv 1404.599) \[[Paper](https://arxiv.org/abs/1404.5997)]
  * Google
  * _Data parallelism_ for _convolutional layers_; _model parallelism_ for _fully-connected layers_.

## Optimizing Network Communication

* A Unified Architecture for Accelerating Distributed DNN Training in Heterogeneous GPU/CPU Clusters ([OSDI 2020](../../reading-notes/conference/osdi-2020/)) \[[Personal Notes](../../reading-notes/conference/osdi-2020/a-unified-architecture-for-accelerating-distributed-dnn-training-in-heterogeneous-gpu-cpu-clusters.md)] \[[Paper](https://www.usenix.org/conference/osdi20/presentation/jiang)] \[[Code](https://github.com/bytedance/byteps)]
  * THU & ByteDance
  * BytePS: Communication framework
  * Leverage spare CPU and bandwidth resources
  * Consider network topology

## Reduce GPU Memory Footprints

### GPU Sharing

* Zico: Efficient GPU Memory Sharing for Concurrent DNN Training ([ATC 2021](../../reading-notes/conference/atc-2021/)) \[[Personal Notes](../../reading-notes/conference/atc-2021/zico.md)] \[[Paper](https://www.usenix.org/conference/atc21/presentation/lim)]
  * UNIST & Ajou & Alibaba & KAIST
  * Reduce the _overall_ GPU consumption for _co-located_ DNN training jobs
  * Utilize NVIDIA MPS
* Salus: Fine-Grained GPU Sharing Primitives for Deep Learning Applications ([MLSys 2020](../../reading-notes/conference/mlsys-2020.md)) \[[Paper](https://proceedings.mlsys.org/paper\_files/paper/2020/hash/d9cd83bc91b8c36a0c7c0fcca59228f2-Abstract.html)] \[[Code](https://github.com/symbioticlab/salus)]
  * UMich SymbioticLab
  * Fine-grained GPU sharing; customized TensorFlow.
* Gandiva: Introspective Cluster Scheduling for Deep Learning ([OSDI 2018](../../reading-notes/conference/osdi-2018/)) \[[Paper](https://www.usenix.org/conference/osdi18/presentation/xiao)]
  * MSRA
  * Time slicing; suspend and resume; mini-batch granularity.

### Tensor Swapping / Recomputation

* SwapAdvisor: Pushing Deep Learning Beyond the GPU Memory Limit via Smart Swapping ([ASPLOS 2020](../../reading-notes/conference/asplos-2020.md)) \[[Paper](https://dl.acm.org/doi/10.1145/3373376.3378530)]
  * NYU
  * Tensor swapping
  * Consider both GPU memory allocation and operator scheduling
* Capuchin: Tensor-based GPU Memory Management for Deep Learning ([ASPLOS 2020](../../reading-notes/conference/asplos-2020.md)) \[[Paper](https://dl.acm.org/doi/10.1145/3373376.3378505)]
  * HUST & MSRA & USC
  * Combination of tensor swapping and recomputation.
* Checkmate: Breaking the Memory Wall with Optimal Tensor Rematerialization ([MLSys 2020](../../reading-notes/conference/mlsys-2020.md)) \[[Paper](https://proceedings.mlsys.org/paper\_files/paper/2020/hash/0b816ae8f06f8dd3543dc3d9ef196cab-Abstract.html)] \[[Code](https://github.com/parasj/checkmate)]
  * UC Berkeley
  * Define tensor recomputation as an optimization problem.
* SuperNeurons: Dynamic GPU Memory Management for Training Deep Neural Networks (PPoPP 2018) \[[Paper](https://dl.acm.org/doi/10.1145/3200691.3178491)]
  * Brown & UESTC & Los Alamos National Laboratory & Pacific Northwest National Laboratory & MIT
  * Cost-aware recomputation
  * Remove the convolutional layer tensor with low computational overhead
* vDNN: Virtualized Deep Neural Networks for Scalable, Memory-Efficient Neural Network Design (MICRO 2016) \[[Paper](https://dl.acm.org/doi/10.5555/3195638.3195660)]
  * NVIDIA
  * Predictively swap tensors to overlap the CPU-GPU communication time.
* Training Deep Nets with Sublinear Memory Cost (arXiv 1604.06174) \[[Personal Notes](../../Miscellaneous/arXiv-2016/training-deep-nets-with-sublinear-memory-cost.md)] \[[Paper](https://arxiv.org/abs/1604.06174)] \[[Code](https://github.com/dmlc/mxnet-memonger)]
  * UW & Dato Inc. & MIT
  * Memory Monger
  * Sublinear memory cost; trade computation for memory.

### Compression

* Echo: Compiler-based GPU Memory Footprint Reduction for LSTM RNN Training (ISCA 2020) \[[Paper](https://dl.acm.org/doi/abs/10.1109/ISCA45697.2020.00092)]
  * UofT
  * LSTM RNN training
* Gist: Efficient Data Encoding for Deep Neural Network Training (ISCA 2018) \[[Paper](https://www.microsoft.com/en-us/research/uploads/prod/2018/04/fiddle-gist-isca18.pdf)]
  * MSR & UMich & UofT
  * Data encoding
