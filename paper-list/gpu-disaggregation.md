# GPU Disaggregation

## Remote Procedure Call (RPC)

* \[**FractOS** | EuroSys 2022] [Slashing the disaggregation tax in heterogeneous data centers with FractOS](https://doi.org/10.1145/3492321.3519569)
  * A distributed OS to minimize the network overheads of disaggregation.
  * Build a GPU adaptor that offers several RPCs: GPU context initialization, memory de/allocation, kernel loading, kernel invocation, and cleanup.

## Remote CUDA (rCUDA)

* \[DGSF | UT-Austin & Katana Graph | IPDPS 2022] [DGSF: Disaggregated GPUs for serverless functions](https://ieeexplore.ieee.org/document/9820659)
  * Transparently enable serverless functions to use GPUs through intercepting CUDA APIs.
  * Support API transparency; hide the communication latency with remote GPUs; load-balance access to heavily shared GPUs.
* \[**rCUDA** | HPCS 2010] [rCUDA: Reducing the number of GPU-based accelerators in high performance clusters](https://ieeexplore.ieee.org/document/5547126)
  * Enable remote GPU acceleration in HPC clusters.
