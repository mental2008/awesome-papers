# Diffusion Models

## Diffusion Model Serving

* PatchedServe: A Patch Management Framework for SLO-Optimized Hybrid Resolution Diffusion Serving (arXiv:2501.09253) \[[arXiv](https://arxiv.org/abs/2501.09253)]
  * UWaterloo & CMU & Rice
  * Serve requests with hybrid resolutions.
* FlexCache: Flexible Approximate Cache System for Video Diffusion (arXiv:2501.04012) \[[arXiv](https://arxiv.org/abs/2501.04012)]
  * UWaterloo
  * Cache for text-to-video diffusion models.
* xDiT: an Inference Engine for Diffusion Transformers (DiTs) with Massive Parallelism (arXiv:2411.01738) \[[arXiv](https://arxiv.org/abs/2411.01738)] \[[Code](https://github.com/xdit-project/xDiT)]
  * Tencent
  * Several parallel approaches for DiTs.
* SwiftDiffusion: Efficient Diffusion Model Serving with Add-on Modules (arXiv:2407.02031) \[[arXiv](https://arxiv.org/abs/2407.02031)]
  * HKUST & Alibaba
* PipeFusion: Displaced Patch Pipeline Parallelism for Inference of Diffusion Transformer Models (arXiv:2405.14430) \[[arXiv](https://arxiv.org/abs/2405.14430)] \[[Code](https://github.com/xdit-project/xDiT)]
  * Tencent & HKU
* Cache Me if You Can: Accelerating Diffusion Models through Block Caching ([CVPR 2024](../../reading-notes/conference/cvpr-2024.md)) \[[Paper](https://openaccess.thecvf.com/content/CVPR2024/html/Wimbauer_Cache_Me_if_You_Can_Accelerating_Diffusion_Models_through_Block_CVPR_2024_paper.html)] \[[Homepage](https://fwmb.github.io/blockcaching/)]
  * Meta & TUM & MCML & Oxford
* CAT-DM: Controllable Accelerated Virtual Try-on with Diffusion Model ([CVPR 2024](../../reading-notes/conference/cvpr-2024.md)) \[[Paper](https://openaccess.thecvf.com/content/CVPR2024/html/Zeng_CAT-DM_Controllable_Accelerated_Virtual_Try-on_with_Diffusion_Model_CVPR_2024_paper.html)] \[[Code](https://github.com/zengjianhao/CAT-DM)]
  * TJU & Tencent
  * **CAT-DM**: **C**ontrollable **A**ccelerated virtual **T**ry-on with **D**iffusion **M**odel
* DeepCache: Accelerating Diffusion Models for Free ([CVPR 2024](../../reading-notes/conference/cvpr-2024.md)) \[[Paper](https://openaccess.thecvf.com/content/CVPR2024/html/Ma_DeepCache_Accelerating_Diffusion_Models_for_Free_CVPR_2024_paper.html)] \[[Code](https://github.com/horseee/DeepCache)]
  * NUS
* DistriFusion: Distributed Parallel Inference for High-Resolution Diffusion Models ([CVPR 2024](../../reading-notes/conference/cvpr-2024.md)) \[[Paper](https://openaccess.thecvf.com/content/CVPR2024/html/Li_DistriFusion_Distributed_Parallel_Inference_for_High-Resolution_Diffusion_Models_CVPR_2024_paper.html)] \[[Code](https://github.com/mit-han-lab/distrifuser)]
  * MIT & Princeton & Lepton AI & NVIDIA
  * Split the model input into multiple patches and assign each patch to a GPU.
* Approximate Caching for Efficiently Serving Text-to-Image Diffusion Models ([NSDI 2024](../../reading-notes/conference/nsdi-2024.md)) \[[Paper](https://www.usenix.org/conference/nsdi24/presentation/agarwal-shubham)] \[[Slides](https://www.usenix.org/system/files/nsdi24_slides-agarwal_shubham.pdf)]
  * Adobe Research & UIUC
  * Skip a certain number of denoising steps.

## Diffusion Model Training

* DiffusionPipe: Training Large Diffusion Models with Efficient Pipelines ([MLSys 2024](../../reading-notes/conference/mlsys-2024.md)) \[[Paper](https://proceedings.mlsys.org/paper_files/paper/2024/file/45c1f6a8cbf2da59ebf2c802b4f742cd-Paper-Conference.pdf)] \[[Slides](https://mlsys.org/media/mlsys-2024/Slides/2636_X1xLHC2.pdf)]
  * HKU & AWS & OSU
  * Fill the computation of non-trainable model parts into idle periods of the pipeline training of the backbones.

## Supporting Add-on Modules

* X-Adapter: Adding Universal Compatibility of Plugins for Upgraded Diffusion Model ([CVPR 2024](../../reading-notes/conference/cvpr-2024.md)) \[[Paper](https://openaccess.thecvf.com/content/CVPR2024/html/Ran_X-Adapter_Adding_Universal_Compatibility_of_Plugins_for_Upgraded_Diffusion_Model_CVPR_2024_paper.html)] \[[Homepage](https://showlab.github.io/X-Adapter/)] \[[Code](https://github.com/showlab/X-Adapter)]
  * NUS & Tencent & FDU

## Domain-Specific Accelerator (DSA)

* Cambricon-D: Full-Network Differential Acceleration for Diffusion Models ([ISCA 2024](../../reading-notes/conference/isca-2024.md)) \[[Paper](https://ieeexplore.ieee.org/document/10609724)]
  * ICT, CAS

## Acronyms

* DiT: Diffusion Transformer
