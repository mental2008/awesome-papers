# Hyper-Parameter Tuning (HPO)

HPO: Hyper-Parameter Optimization

## Optimizing HPO Workloads

|      Name      | Conference                                                   | Institution                                   | Links                                                                                                                                                                 | Remarks                                                 |
| :------------: | ------------------------------------------------------------ | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|    **Hydro**   | [OSDI 2023](../../reading-notes/conference/osdi-2023.md)     | <ul><li>NTU</li><li>Shanghai AI Lab</li></ul> | <ul><li><a href="https://www.usenix.org/conference/osdi23/presentation/hu">Paper</a></li><li><a href="https://github.com/S-Lab-System-Group/Hydro">Code</a></li></ul> | Surrogate models; co-locate HPO jobs with LLM training. |
|    **SEER**    | [SoCC 2021](../../reading-notes/conference/socc-2021.md)     | <ul><li>UC Berkeley</li></ul>                 | <ul><li><a href="https://dl.acm.org/doi/10.1145/3472883.3486989">Paper</a></li></ul>                                                                                  |                                                         |
| **RubberBand** | [EuroSys 2021](../../reading-notes/conference/eurosys-2021/) | <ul><li>UC Berkeley</li></ul>                 | <ul><li><a href="https://dl.acm.org/doi/10.1145/3447786.3456245">Paper</a></li></ul>                                                                                  |                                                         |

## HPO for System

<table><thead><tr><th width="141">Name</th><th width="123" align="center">Conference</th><th width="157">Institution</th><th width="108">Links</th><th>Remarks</th></tr></thead><tbody><tr><td><strong>Morphling</strong></td><td align="center"><a href="../../reading-notes/conference/socc-2021.md">SoCC 2021</a></td><td><ul><li>HKUST</li><li>Alibaba</li></ul></td><td><ul><li><a href="https://dl.acm.org/doi/10.1145/3472883.3486987">Paper</a></li><li><a href="https://github.com/kubedl-io/morphling">Code</a></li></ul></td><td>Meta-learning for tuning resources and runtime parameters in <em>model serving systems</em>.</td></tr><tr><td><strong>PARIS</strong></td><td align="center"><a href="../../reading-notes/conference/socc-2017/">SoCC 2017</a></td><td><ul><li>UC Berkeley</li><li>FAIR</li><li>MSR</li></ul></td><td><ul><li><a href="https://doi.org/10.1145/3127479.3131614">Paper</a></li></ul></td><td>Select the best VM across multiple cloud providers.</td></tr><tr><td><strong>CherryPick</strong></td><td align="center"><a href="../../reading-notes/conference/nsdi-2017/">NSDI 2017</a></td><td><ul><li>Yale</li><li>MSR</li><li>UC Berkeley</li><li>Alibaba</li></ul></td><td><ul><li><a href="https://www.usenix.org/conference/nsdi17/technical-sessions/presentation/alipourfard">Paper</a></li></ul></td><td>Pick the right cloud configuration for <em>big data analytics jobs</em>.</td></tr><tr><td><strong>Vizier</strong></td><td align="center">KDD 2017</td><td><ul><li>Google</li></ul></td><td><ul><li><a href="http://www.kdd.org/kdd2017/papers/view/google-vizier-a-service-for-black-box-optimization">Paper</a></li></ul></td><td>Black-box optimization.</td></tr></tbody></table>