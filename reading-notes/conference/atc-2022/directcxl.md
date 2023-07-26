# Direct access, high-performance memory disaggregation with DirectCXL

## Metadata

Presented in [ATC 2022](https://www.usenix.org/conference/atc22/presentation/gouk).

Authors: Donghyun Gouk, Sangwon Lee, Miryeong Kwon, Myoungsoo Jung (_KAIST_)

## Understanding the paper

### TL;DRs

The first work that brings CXL 2.0 into a real system and analyzes the performance characteristics of CXL-enabled disaggregated memory design.

### Existing works

* Two different approaches based on **how they manage data between a host and memory server(s)**
  * **Page-based**: utilize virtual memory techniques to use disaggregated memory without a code change; intercept paging requests when there is a page fault; swap the data to a remote memory node instead of the underlying storage.
  * **Object-based**: handle disaggregated memory from a remote using their own database (e.g., key-value store); directly intervene in RDMA data transfers; require significant source-level modifications and interface changes.
* All the existing approaches need to **move data from the remote memory to the host memory over RDMA** (or similar fine-grain network interfaces); data movement and its accompanying operations (e.g., page cache management) introduce **redundant memory copies and software fabric intervention**.

### Contributions

* Disaggregate memory over CXL and integrate the disaggregated memory into processor-side system memory.
  * Implement **CXL controller** that employs multiple DRAM modules on a remote side.
  * Implement **CXL software runtime** that allows users to utilize the underlying disaggregated memory resources through sheer load/store instructions.
* Prototype DirectCXL using many customized memory add-in-cards, 16nm FPGA-based processor nodes, a switch, and a PCIe backplane.

### CXL vs. RDMA

* RDMA-based: all DRAM modules and their interfaces are designed as passive peripherals; require the control computing resources at the remote side.
* CXL-based: allow the host computing resources directly access the underlying memory through PCIe buses.

### Performance evaluation

* Compared to RDMA-based memory disaggregation, 6.2x shorter latency & 3x better performance.
