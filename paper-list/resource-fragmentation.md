# Resource Fragmentation

* \[**HiveD** | MSRA | OSDI 2020] [HiveD: Sharing a GPU cluster for deep learning with guarantees](https://www.usenix.org/conference/osdi20/presentation/zhao-hanyu)
  * Quota cannot capture the GPU affinity requirements of DL training jobs.
  * Sharing anomaly: A tenant's request (within quota) cannot be satisfied in the shared cluster.

{% content-ref url="../Conference/OSDI-2020/hived.md" %}
[hived.md](../Conference/OSDI-2020/hived.md)
{% endcontent-ref %}

* \[**Borg** | Google | EuroSys 2015] [Large-scale cluster management at Google with Borg](https://doi.org/10.1145/2741948.2741964)
  * The scheduler tries to reduce the amount of stranded resources - ones that cannot be used because another resource on the machine is fully allocated.
  * Two ways of scheduling:
    * Best Fit: fill machines as tightly as possible; hurt applications with bursty loads.
    * Worst Fit: leave headroom for load spikes; increase fragmentation.
* \[**Tetris** | Microsoft | SIGCOMM 2014] [Multi-resource packing for cluster schedulers](https://doi.org/10.1145/2619239.2626334)
  * Pack jobs to avoid resource fragmentation and over-allocation.
