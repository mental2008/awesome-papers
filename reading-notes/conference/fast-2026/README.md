# FAST 2026

## Meta Info

Homepage: [https://www.usenix.org/conference/fast26](https://www.usenix.org/conference/fast26)

Paper list: [https://www.usenix.org/conference/fast26/technical-sessions](https://www.usenix.org/conference/fast26/technical-sessions)

### Acceptance Rate

17.5% (= 31 / 177)

## Papers

### AI for Systems

* Generative File Systems
  * Sharpen the Spec, Cut the Code: A Case for Generative File System with SYSSPEC \[[Personal Notes](sysspec.md)] \[[Paper](https://www.usenix.org/conference/fast26/presentation/liu-qingyuan)] \[[PDF](https://www.usenix.org/system/files/fast26-liu-qingyuan.pdf)] \[[arXiv](https://arxiv.org/abs/2512.13047)] \[[Code](https://github.com/SJTU-IPADS/specfs)] \[[Homepage](https://llmnativeos.github.io/specfs/)] \[[Slides](https://www.usenix.org/system/files/fast26_slides_liu-qingyuan.pdf)] \[[Video](https://www.youtube.com/watch?v=aMxAPuYhAkk)]
    * SJTU
    * **Best Paper**; **Distinguished Artifact Award**
    * Introduce generative file systems, where LLMs generate and evolve a file system from specifications instead of ambiguous natural-language prompts.
    * Use a multi-part SYSSPEC specification for functionality, modularity, and concurrency, plus DAG-structured patches for feature evolution without violating existing invariants.
    * Generate SPECFS, a concurrent file system that matches a manually coded baseline across regression tests and integrates 10 real-world Ext4 features.

### GPU Systems

* Checkpointing and Restore
  * GPU Checkpoint/Restore Made Fast and Lightweight \[[Paper](https://www.usenix.org/conference/fast26/presentation/zeng)] \[[Code](https://github.com/thustorage/GCR)]
    * THU
    * **Distinguished Artifact Award**
    * **GCR** separates driver-managed control-state C/R from data-buffer C/R through selective memory-allocation interception and asynchronous copying.
    * Uses CPU shadow execution and dirty templates for instruction-level dirty-buffer tracking and incremental checkpointing, with less than 1% steady-state overhead.
