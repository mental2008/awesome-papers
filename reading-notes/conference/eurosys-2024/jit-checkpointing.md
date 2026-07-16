# Just-In-Time Checkpointing: Low Cost Error Recovery from Deep Learning Training Failures

## Meta Info

Presented in [EuroSys 2024](https://doi.org/10.1145/3627703.3650085).

Authors: Tanmaey Gupta, Sanjeev Krishnan, Rituraj Kumar, Abhishek Vijeev, Bhargav Gulavani, Nipun Kwatra, Ramachandran Ramjee, Muthian Sivathanu (_MSR India_)

Homepage: [https://www.microsoft.com/en-us/research/publication/just-in-time-checkpointing-low-cost-error-recovery-from-deep-learning-training-failures/](https://www.microsoft.com/en-us/research/publication/just-in-time-checkpointing-low-cost-error-recovery-from-deep-learning-training-failures/)

## Understanding the paper

### TL;DR

**Just-In-Time (JIT) Checkpointing** moves checkpoint creation from the normal training path to the failure path. Instead of periodically materializing large model and optimizer states, it constructs recovery state after a failure and rolls the distributed job back by only one minibatch iteration.

The key insight is to exploit the structure already present in synchronous training. A minibatch boundary is a natural consistency point: all ranks can replay the same iteration and resume from a globally consistent state. This changes recovery from “redo everything since the last periodic checkpoint” to “redo one iteration,” while avoiding checkpoint I/O when no failure occurs.

### Key design

* **Failure-triggered recovery state.** The system preserves enough information during execution to reconstruct a checkpoint only when a failure is detected. The expensive materialization step therefore leaves the steady-state training path.
* **Single-iteration rollback.** Recovery returns every worker to the beginning of the failed minibatch. All GPUs replay that iteration together, restoring the synchronization and parameter state expected by the next step.
* **Replay context.** Correct replay requires the minibatch identity and the relevant execution state, including rank placement and other nondeterministic inputs, to be reproducible after workers restart.
* **Transparent deployment.** The paper considers both training-code support and infrastructure-level mechanisms, aiming to provide JIT checkpointing without requiring users to redesign their training programs.

The resulting cost model differs from periodic checkpointing. Periodic schemes continuously trade checkpoint frequency against expected lost work: short intervals waste I/O, while long intervals increase replay after failures. JIT checkpointing pays primarily when a failure actually occurs—constructing recovery state, coordinating workers, and replaying one step—so it avoids choosing a checkpoint interval under changing failure rates.

### Evidence

The evaluation reports nearly zero steady-state checkpoint overhead. Recovery is reduced from several minutes of lost work to a few seconds per GPU because replay is bounded to one minibatch rather than the time since an earlier checkpoint.

The systems insight matters more than the absolute number: checkpoint cost should be evaluated across the whole GPU fleet. At large scale, repeatedly pausing every healthy GPU to protect against occasional failures can consume more resources than moving work into the uncommon recovery path.

### Caveats

* The approach assumes enough state survives a failure to construct a valid recovery point; correlated or cluster-wide failures may violate that assumption.
* Single-iteration replay must reproduce data-loader position, random state, rank mapping, and distributed execution consistently.
* JIT checkpoints do not fully replace durable periodic checkpoints needed for disaster recovery, long-term restart, or experiment reproducibility.
* Transparent deployment still requires integration with the training runtime and cluster control plane.
