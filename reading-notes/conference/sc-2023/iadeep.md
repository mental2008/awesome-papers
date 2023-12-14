# Interference-aware multiplexing for deep learning in GPU clusters: A middleware approach

## Meta Info

Presented in [SC 2023](https://doi.org/10.1145/3581784.3607060).

## Understanding the paper

### Opportunities in co-locating DL training tasks

* Tune training configurations (e.g., batch size) across all co-located tasks
* Choose appropriate tasks to multiplex on a GPU device

### Challenges

* Trade-off between _mitigating interference_ and _accelerating training progress_ to achieve optimal training time
* Vast search space of task configurations
* Coupling between _adjusting task configurations_ and _designing task placement policies_
