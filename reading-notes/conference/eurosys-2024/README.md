# EuroSys 2024

## Meta Info

Homepage: [https://www.eurosys.org/news/eurosys-2024](https://www.eurosys.org/news/eurosys-2024)

Acceptance rate: 14.7% (= 71 / 484)

## Papers

### GPU Sharing

* Orion: Interference-aware, Fine-grained GPU Sharing for ML Applications \[[Personal Notes](orion-interference-aware-fine-grained-gpu-sharing-for-ml-applications.md)] \[[Paper](https://anakli.inf.ethz.ch/papers/orion_eurosys24.pdf)]
  * ETH

### Resource Scheduler for DL

* Blox: A Modular Toolkit for Deep Learning Schedulers \[[arXiv](https://arxiv.org/abs/2312.12621)] \[[Code](https://github.com/msr-fiddle/blox)]
  * UW-Madison & MSR

### Fault Tolerance for DL Training

* Just-In-Time Checkpointing: Low Cost Error Recovery from Deep Learning Training Failures \[[Personal Notes](jit-checkpointing.md)] \[[Paper](https://dl.acm.org/doi/10.1145/3627703.3650085)] \[[Homepage](https://www.microsoft.com/en-us/research/publication/just-in-time-checkpointing-low-cost-error-recovery-from-deep-learning-training-failures/)]
  * MSR India
  * Creates recovery state only when a failure occurs, avoiding periodic checkpoint-frequency tuning and steady-state checkpoint overhead.
  * Recovers by replaying a single minibatch iteration across GPUs, reducing failure recovery from minutes to seconds per GPU with nearly zero steady-state overhead.
