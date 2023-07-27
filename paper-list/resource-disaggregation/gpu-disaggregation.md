# GPU Disaggregation

## Remote Procedure Call

| Title       |                          Conference                          | Institute                                                                                                              | Links                                                                                                                                                                                                                                               | Remarks                                                                                                                                |
| ----------- | :----------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **FractOS** | [EuroSys 2022](../../reading-notes/conference/eurosys-2022/) | <ul><li>ICL</li><li>Technion - Israel Institute of Technology</li><li>Barkhausen Institut</li><li>TU Dresden</li></ul> | <ul><li><a href="../../reading-notes/conference/eurosys-2022/slashing-the-disaggregation-tax-in-heterogeneous-data-centers-with-fractos.md">Personal Notes</a></li><li><a href="https://dl.acm.org/doi/10.1145/3492321.3519569">Paper</a></li></ul> | A _GPU adaptor_ offers several RPCs: GPU context initialization, memory de/allocation, kernel loading, kernel invocation, and cleanup. |

## Remote CUDA

| Title     |                        Conference                        | Institute                                                                         | Links                                                                                                                                                                                                                 | Remarks                                    |
| --------- | :------------------------------------------------------: | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **DGSF**  | [IPDPS 2022](../../reading-notes/conference/ipdps-2022/) | <ul><li>UT-Austin</li><li>Katana Graph</li></ul>                                  | <ul><li><a href="../../reading-notes/conference/ipdps-2022/dgsf.md">Personal Notes</a></li><li><a href="https://ieeexplore.ieee.org/document/9820659">Paper</a></li></ul> | Serverless functions; intercept CUDA APIs. |
| **rCUDA** |                         HPCS 2010                        | <ul><li>Universidad Politécnica de Valencia</li><li>Universidad Jaume I</li></ul> | <ul><li><a href="https://ieeexplore.ieee.org/document/5547126">Paper</a></li><li><a href="http://www.rcuda.net/">Homepage</a></li></ul>                                                                               | Remote GPU acceleration; HPC clusters.     |

## Industrial Products

| Name                         | Links                                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------------------- |
| **VMware vSphere Bitfusion** | <ul><li><a href="https://docs.vmware.com/en/VMware-vSphere-Bitfusion/index.html">Docs</a></li></ul> |
| **VirtAI Tech Orion**        | <ul><li><a href="https://github.com/virtaitech/orion">GitHub</a> (in Chinese)</li></ul>             |
