# Lucid: A non-intrusive, scalable and interpretable scheduler for deep learning training jobs

## Meta Info

Presented in [ASPLOS 2023](https://doi.org/10.1145/3575693.3575705).

Authors: Qinghao Hu, Meng Zhang, Peng Sun, Yonggang Wen, Tianwei Zhang, _Nanyang Technological University, Shanghai AI Laboratory, SenseTime_

Code: [https://github.com/S-Lab-System-Group/Lucid](https://github.com/S-Lab-System-Group/Lucid)

## Understanding the paper

### TL;DRs

This paper presents **Lucid**, a non-intrusive _DL scheduler_ based on _interpretable models_.

It introduces _a two-dimensional optimized profiler_ for efficient job metric collection and timely debugging job feedback; utilizes _a packing strategy_ to circumvent interference; allocates resources based on _estimated job priority values and sharing scores_.

### Interpretable Models

* Decision Tree (DT) for Packing Analyze Model
* Additive model algorithm GA$$^2$$M for Throughput Predict Model & Workload Estimate Model
