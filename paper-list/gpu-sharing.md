# GPU Sharing

## GPU Temporal Sharing

* \[**KubeShare** | National Tsing Hua University | HPDC 2020] [KubeShare: A framework to manage GPUs as first-class and shared resources in container cloud](https://doi.org/10.1145/3369583.3392679)

{% content-ref url="../Conference/HPDC-2020/kubeshare.md" %}
[kubeshare.md](../Conference/HPDC-2020/kubeshare.md)
{% endcontent-ref %}

* \[**GaiaGPU** | Tencent & PKU | ISPA/IUCC/BDCloud/SocialCom/SustainCom 2018] [GaiaGPU: Sharing GPUs in container clouds](https://ieeexplore.ieee.org/document/8672318/)

{% content-ref url="../Conference/ISPA-IUCC-BDCloud-SocialCom-SustainCom-2018/gaiagpu.md" %}
[gaiagpu.md](../Conference/ISPA-IUCC-BDCloud-SocialCom-SustainCom-2018/gaiagpu.md)
{% endcontent-ref %}

## GPU Spatial Sharing

* [NVIDIA Multi-Instance GPU (MIG)](https://www.nvidia.com/en-us/technologies/multi-instance-gpu/)
  * Partition the GPU into as many as seven instances, each fully isolated with its own high-bandwidth memory, cache, and compute cores.
  * Available for NVIDIA H100, A100, and A30 GPUs.
* [NVIDIA Multi-Process Service (MPS)](https://docs.nvidia.com/deploy/mps/index.html)
  * Transparently enable co-operative multi-process CUDA applications.
  * Terminating an MPS client without synchronizing with all outstanding GPU work (via Ctrl-C / program exception such as segfault / signals, etc.) can leave the MPS server and other MPS clients in an undefined state, which may result in hangs, unexpected failures, or corruptions.

## Survey

* \[Queen’s University Belfast | ACM Computing Surveys 2017] [GPU virtualization and scheduling methods: A comprehensive survey](https://doi.org/10.1145/3068281)

{% content-ref url="../Journal/ACM-Computing-Surveys-2017/gpu-virtualization-survey.md" %}
[gpu-virtualization-survey.md](../Journal/ACM-Computing-Surveys-2017/gpu-virtualization-survey.md)
{% endcontent-ref %}
