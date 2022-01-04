# Predicting CPU usage for proactive autoscaling

## ​Metadata

Presented in [EuroMLSys '21](https://dl.acm.org/doi/10.1145/3437984.3458831). The 1st Workshop on Machine Learning and Systems ([EuroMLSys](https://www.euromlsys.eu)), co-located with EuroSys '21.

Authors: Thomas Wang, Simone Ferlin, Marco Chiesa _Ericsson AB, KTH Royal Institute of Technology_

## Understanding the paper

A workshop paper.

### Key Observation

Existing **Kubernetes Vertical Pod Autoscaler (VPA)** performs poorly on workloads that **periodically change**.

### Solution

Propose a **predictive** method based on **Long Short-Term Memory (LSTM)**.

* Avoid **CPU insufficiency** for various CPU workloads.
* Generate stabler predictions than the method based on **Holt-Winters exponential smoothing (HW)**.

### Some Details

* The algorithms run with the container’s CPU usage sampled at regular intervals.
* A new prediction is generated every 10 minutes.
