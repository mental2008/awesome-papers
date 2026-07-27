# Diffusion Models

## Diffusion Model Serving

### Image Generation

* DiFlow: A System for Micro-Serving Text-to-Image Diffusion Workflows ([SOSP 2026](../../reading-notes/conference/sosp-2026.md)) \[[arXiv](https://arxiv.org/abs/2604.08123)]
  * HKUST & Alibaba
  * **Our work!**
  * Decomposes text-to-image diffusion workflows into independently managed model-execution nodes.
  * Enables per-model scaling, cross-workflow model sharing, and adaptive model parallelism for bursty serving workloads.
* MixFusion: A Patch-Level Parallel Serving System for Mixed-Resolution Diffusion Models ([PPoPP 2026](../../reading-notes/conference/ppopp-2026.md)) \[[Paper](https://doi.org/10.1145/3774934.3786420)] \[[arXiv](https://arxiv.org/abs/2501.09253)] \[[Code](https://github.com/desenSunUBW/mixfusion)]
  * UWaterloo & CMU & Rice
  * Uses patch-level parallelism to batch mixed-resolution text-to-image diffusion requests.
  * Combines patch-tailored cache management with SLO-aware scheduling and online latency prediction.
* xDiT: an Inference Engine for Diffusion Transformers (DiTs) with Massive Parallelism (arXiv:2411.01738) \[[arXiv](https://arxiv.org/abs/2411.01738)] \[[Code](https://github.com/xdit-project/xDiT)]
  * Tencent
  * Several parallel approaches for DiTs.
* Katz: Efficient Workflow Serving for Diffusion Models with Many Adapters ([ATC 2025](../../reading-notes/conference/atc-2025.md)) \[[Paper](https://www.usenix.org/conference/atc25/presentation/li-suyi-katz)] \[[arXiv](https://arxiv.org/abs/2407.02031)] \[[Code](https://github.com/modelscope/Katz)] \[[Trace](https://modelscope.cn/datasets/mental2008/T2I-Model-Serving-Request-Trace)]
  * HKUST & Alibaba
  * **Our work!**
  * ControlNet-as-a-Service decouples ControlNets from the base model for caching, parallelization, and sharing.
  * Bounded Asynchronous Loading overlaps LoRA loading with initial denoising steps; latent parallelism accelerates the base model across GPUs.
* PipeFusion: Displaced Patch Pipeline Parallelism for Inference of Diffusion Transformer Models (arXiv:2405.14430) \[[arXiv](https://arxiv.org/abs/2405.14430)] \[[Code](https://github.com/xdit-project/xDiT)]
  * Tencent & HKU
* Cache Me if You Can: Accelerating Diffusion Models through Block Caching ([CVPR 2024](../../reading-notes/conference/cvpr-2024.md)) \[[Paper](https://openaccess.thecvf.com/content/CVPR2024/html/Wimbauer_Cache_Me_if_You_Can_Accelerating_Diffusion_Models_through_Block_CVPR_2024_paper.html)] \[[Homepage](https://fwmb.github.io/blockcaching/)]
  * Meta & TUM & MCML & Oxford
* DeepCache: Accelerating Diffusion Models for Free ([CVPR 2024](../../reading-notes/conference/cvpr-2024.md)) \[[Paper](https://openaccess.thecvf.com/content/CVPR2024/html/Ma_DeepCache_Accelerating_Diffusion_Models_for_Free_CVPR_2024_paper.html)] \[[Code](https://github.com/horseee/DeepCache)]
  * NUS
* DistriFusion: Distributed Parallel Inference for High-Resolution Diffusion Models ([CVPR 2024](../../reading-notes/conference/cvpr-2024.md)) \[[Paper](https://openaccess.thecvf.com/content/CVPR2024/html/Li_DistriFusion_Distributed_Parallel_Inference_for_High-Resolution_Diffusion_Models_CVPR_2024_paper.html)] \[[Code](https://github.com/mit-han-lab/distrifuser)]
  * MIT & Princeton & Lepton AI & NVIDIA
  * Split the model input into multiple patches and assign each patch to a GPU.
* Approximate Caching for Efficiently Serving Text-to-Image Diffusion Models ([NSDI 2024](../../reading-notes/conference/nsdi-2024.md)) \[[Paper](https://www.usenix.org/conference/nsdi24/presentation/agarwal-shubham)] \[[Slides](https://www.usenix.org/system/files/nsdi24_slides-agarwal_shubham.pdf)]
  * Adobe Research & UIUC
  * Skip a certain number of denoising steps.

### Video Generation

* Quant VideoGen: Auto-Regressive Long Video Generation via 2-Bit KV-Cache Quantization ([ICML 2026](../../reading-notes/conference/icml-2026.md)) \[[arXiv](https://arxiv.org/abs/2602.02958)] \[[Code](https://github.com/svg-project/Quant-VideoGen)]
  * UC Berkeley & MIT & NVIDIA & Amazon & UT Austin
  * Introduces **QVG**, a training-free 2-bit KV-cache quantization framework for auto-regressive video diffusion models.
  * Combines Semantic-Aware Smoothing with Progressive Residual Quantization to reduce KV-cache memory by up to 7.0x with less than 4% end-to-end latency overhead.
* StreamDiffusionV2: A Streaming System for Dynamic and Interactive Video Generation ([MLSys 2026](../../reading-notes/conference/mlsys-2026.md)) \[[Paper](https://openreview.net/forum?id=p9WALNBvc6)] \[[arXiv](https://arxiv.org/abs/2511.07399)] \[[Code](https://github.com/chenfengxu714/StreamDiffusionV2)] \[[Homepage](https://streamdiffusionv2.github.io/)]
  * UT Austin & UC Berkeley & Nunchaku AI & Stanford & First Intelligence & MIT & Shizuku AI
  * Introduces a training-free streaming pipeline that brings video diffusion models to interactive live generation under time-to-first-frame and per-frame latency SLOs.
  * Combines SLO-aware batching and block scheduling, a rolling KV cache, motion-aware noise control, and multi-GPU pipeline orchestration.
* Sparse VideoGen2: Accelerate Video Generation with Sparse Attention via Semantic-Aware Permutation (NeurIPS 2025) \[[arXiv](https://arxiv.org/abs/2505.18875)] \[[Code](https://github.com/svg-project/Sparse-VideoGen)]
  * UC Berkeley & MIT & NVIDIA & Stanford
  * Introduces **SVG2**, a training-free sparse-attention framework that clusters and reorders video tokens by semantic similarity.
  * Uses semantic-aware permutation, dynamic top-p budget control, and customized kernels to improve the quality-efficiency trade-off without padding scattered critical tokens.
* Fast Video Generation with Sliding Tile Attention ([ICML 2025](../../reading-notes/conference/icml-2025.md)) \[[Paper](https://proceedings.mlr.press/v267/zhang25m.html)] \[[OpenReview](https://openreview.net/forum?id=U74MOXPEJd)] \[[arXiv](https://arxiv.org/abs/2502.04507)] \[[Code](https://github.com/hao-ai-lab/FastVideo)]
  * UCSD & UMich & THU & UC Berkeley & MBZUAI
  * Introduces **STA**, a tile-wise local spatiotemporal attention mechanism for video DiTs that exploits localized attention score structure.
  * Uses a hardware-aware sliding-window design and kernel optimizations to speed up video diffusion attention and end-to-end HunyuanVideo generation.
* Sparse VideoGen: Accelerating Video Diffusion Transformers with Spatial-Temporal Sparsity ([ICML 2025](../../reading-notes/conference/icml-2025.md)) \[[Paper](https://proceedings.mlr.press/v267/xi25c.html)] \[[arXiv](https://arxiv.org/abs/2502.01776)] \[[Code](https://github.com/svg-project/Sparse-VideoGen)]
  * UC Berkeley & MIT & NVIDIA & THU
  * Introduces **SVG**, a training-free framework that dynamically classifies video DiT attention heads by spatial or temporal sparse patterns.
  * Combines online attention profiling with hardware-aware tensor layouts and customized kernels to accelerate video generation while preserving quality.
* Looking Backward: Streaming Video-to-Video Translation with Feature Banks (ICLR 2025) \[[arXiv](https://arxiv.org/abs/2405.15757)] \[[Code](https://github.com/Jeff-LiangF/streamv2v)] \[[Homepage](https://jeff-liangf.github.io/projects/streamv2v/)]
  * UT Austin & UC Berkeley
  * Introduces **StreamV2V**, a real-time streaming video-to-video translation system that supports unbounded input streams without diffusion-model fine-tuning.
  * Maintains a compact feature bank of past frames and extends self-attention and feature fusion to preserve temporal consistency at 20 FPS on one A100 GPU.
* FlexCache: Flexible Approximate Cache System for Video Diffusion (arXiv:2501.04012) \[[arXiv](https://arxiv.org/abs/2501.04012)]
  * UWaterloo
  * Cache for text-to-video diffusion models.

### Image Editing

* FlashPS: Efficient Generative Image Editing with Mask-aware Caching and Scheduling ([EuroSys 2026](../../reading-notes/conference/eurosys-2026.md)) \[[Paper](https://doi.org/10.1145/3767295.3769379)] \[[arXiv](https://arxiv.org/abs/2505.20600)] \[[Code](https://github.com/Sylvia-16/FlashPS)]
  * HKUST & Alibaba
  * **Our work!**
  * Uses mask-aware caching and scheduling to accelerate generative image editing workloads.
* CAT-DM: Controllable Accelerated Virtual Try-on with Diffusion Model ([CVPR 2024](../../reading-notes/conference/cvpr-2024.md)) \[[Paper](https://openaccess.thecvf.com/content/CVPR2024/html/Zeng_CAT-DM_Controllable_Accelerated_Virtual_Try-on_with_Diffusion_Model_CVPR_2024_paper.html)] \[[Code](https://github.com/zengjianhao/CAT-DM)]
  * TJU & Tencent
  * **CAT-DM**: **C**ontrollable **A**ccelerated virtual **T**ry-on with **D**iffusion **M**odel

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
