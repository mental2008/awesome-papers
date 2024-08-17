# Diffusion Models

## Image Generation

### Diffusion Transformer (DiT)

* FLUX.1 \[[Code](https://github.com/black-forest-labs/flux)]
  * Black Forest Labs
  * Text-to-image generation
  * Models
    * FLUX.1-dev: [https://huggingface.co/black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev)
    * FLUX.1-schnell: [https://huggingface.co/black-forest-labs/FLUX.1-schnell](https://huggingface.co/black-forest-labs/FLUX.1-schnell)
* Scaling Rectified Flow Transformers for High-Resolution Image Synthesis (arXiv:2403.03206) \[[arXiv](https://arxiv.org/abs/2403.03206)] \[[Blog](https://stability.ai/news/stable-diffusion-3)]
  * Stability AI
  * **Stable Diffusion 3 (SD3)**
  * Multimodal Diffusion Transformer (MMDiT)
  * Models
    * Stable Diffusion 3 Medium: [https://huggingface.co/stabilityai/stable-diffusion-3-medium](https://huggingface.co/stabilityai/stable-diffusion-3-medium)
* Scalable Diffusion Models with Transformers (ICCV 2023) \[[arXiv](https://arxiv.org/abs/2212.09748)] \[[Paper](https://openaccess.thecvf.com/content/ICCV2023/html/Peebles\_Scalable\_Diffusion\_Models\_with\_Transformers\_ICCV\_2023\_paper.html)] \[[Code](https://github.com/facebookresearch/DiT)] \[[Homepage](https://www.wpeebles.com/DiT)]
  * UC Berkeley & NYU
  * **DiT**

### UNet

* Kolors: Effective Training of Diffusion Model for Photorealistic Text-to-Image Synthesis \[[Technical Report](https://github.com/Kwai-Kolors/Kolors/blob/master/imgs/Kolors\_paper.pdf)]
  * Kuaishou Kolors
  * Text-to-image generation
  * Model: [https://huggingface.co/Kwai-Kolors/Kolors](https://huggingface.co/Kwai-Kolors/Kolors)
* SDXL: Improving Latent Diffusion Models for High-Resolution Image Synthesis (arXiv:2307.01952) \[[arXiv](https://arxiv.org/abs/2307.01952)]
  * Stability AI
  * Models
    * [https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0)
    * [https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0](https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0)
* High-Resolution Image Synthesis with Latent Diffusion Models (CVPR 2022) \[[Paper](https://openaccess.thecvf.com/content/CVPR2022/html/Rombach\_High-Resolution\_Image\_Synthesis\_With\_Latent\_Diffusion\_Models\_CVPR\_2022\_paper)] \[[arXiv](https://arxiv.org/abs/2112.10752)] \[[Code](https://github.com/CompVis/stable-diffusion)]
  * LMU Munich & Runway ML
  * Latent Diffusion Models (LDMs)
  * Models
    * Stable-Diffusion-v1-5: [https://huggingface.co/runwayml/stable-diffusion-v1-5](https://huggingface.co/runwayml/stable-diffusion-v1-5)
      * Initialized with the weights of the **Stable-Diffusion-v1-2** checkpoint and subsequently fine-tuned on 595k steps at resolution 512x512.

## Video Generation

* Stable Video 4D (SV4D)
  * Stability AI
  * Model: [https://huggingface.co/stabilityai/sv4d](https://huggingface.co/stabilityai/sv4d)
    * Generate **40** frames (5 video frames x 8 camera views) at 576x576 resolution, given 5 reference frames of the same size.
* Stable Video Diffusion: Scaling Latent Video Diffusion Models to Large Datasets (arXiv:2311.15127) \[[arXiv](https://arxiv.org/abs/2311.15127)] \[[Blog](https://stability.ai/news/stable-video-diffusion-open-ai-video-model)]
  * Stability AI
  * **Stable Video Diffusion** (SVD)
  * Text-to-video and image-to-video generation
  * Models
    * [https://huggingface.co/stabilityai/stable-video-diffusion-img2vid](https://huggingface.co/stabilityai/stable-video-diffusion-img2vid)
      * Generate **14** frames at resolution **576x1024** given a context frame of the same size.
    * [https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt](https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt)
      * Fine-tuned from the SVD-img2vid.
      * Generate **25** frames at resolution **576x1024** given a context frame of the same size.

## Acronyms

* LLM: Large Language Model
