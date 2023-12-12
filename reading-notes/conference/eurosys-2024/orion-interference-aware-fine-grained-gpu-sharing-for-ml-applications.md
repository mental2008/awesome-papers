# Orion: Interference-aware, fine-grained GPU sharing for ML applications

## Meta Info

Presented in [EuroSys 2024](https://anakli.inf.ethz.ch/papers/orion\_eurosys24.pdf).

## Understanding the paper

* Orion — a system that transparently _intercepts GPU kernel launches_ from multiple clients sharing a GPU
* It schedules work on the GPU _at the granularity of individual operators_ and minimizes interference by taking into account _each operator’s compute and memory requirements_
* Integrated into PyTorch

### Technical details

* Influence the behavior of the hardware scheduler by using CUDA stream priorities
* CUDA Events to _monitor the progress of each stream_ in the GPU
* Schedule each `cudaMemcpy` operation by _considering its PCIe bandwidth requirements and current bus bandwidth utilization_
* Use [NVIDIA Nsight Compute](https://developer.nvidia.com/nsight-compute) and [NVIDIA Nsight Systems](https://developer.nvidia.com/nsight-systems) to collect _the compute throughput, memory throughput, and execution time of each kernel_

### Evaluation

* Baselines
  * Temporal sharing — time-slice the GPU by executing one job’s request at a time
  * NVIDIA MPS
  * CUDA Streams
  * [REEF](https://www.usenix.org/conference/osdi22/presentation/han)
