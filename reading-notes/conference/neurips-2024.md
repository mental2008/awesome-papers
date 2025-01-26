# NeurIPS 2024

## Meta Info

Homepage: [https://neurips.cc/Conferences/2024](https://neurips.cc/Conferences/2024)

Paper list: [https://neurips.cc/virtual/2024/papers.html?filter=titles](https://neurips.cc/virtual/2024/papers.html?filter=titles)

### Acceptance Rate

* Total: 15671
* Accept: 25.8% (4037)
  * Poster: 23.3% (3650)
  * Spotlight: 2.1% (326)
  * Oral: 0.4% (61)

## Papers

### Large Language Models (LLMs)

* LLM Inference
  * SGLang: Efficient Execution of Structured Language Model Programs \[[Paper](https://openreview.net/forum?id=VqkAKQibpq)] \[[Code](https://github.com/sgl-project/sglang)] \[[arXiv](https://arxiv.org/abs/2312.07104)]
    * Stanford & UC Berkeley
    * Co-design both the front-end language (programming interface) and the back-end runtime
    * SGLang Primitives
      * Enable the manipulation of prompts and generations
        * `gen`: call LLM generation
        * `select`: let the LLM choose the option with the highest probability from a list
        * `extend` or `+=`: extend the current prompt
      * Control of parallelism
        * `fork`: fork the current prompt state
        * `join`: rejoin the forked prompt states
    * Compilation optimizations
      * Code movement for improving prefix sharing
        * Doesn't strictly preserve the original computation —— aggressive
        * Prompt GPT-4 to re-order graph nodes
    * Runtime
      * RadixAttention
        * Utilize a radix tree (w/ efficient prefix search, reuse, insertion, eviction)
        * LRU eviction policy
      * Cache-aware scheduling → Increase the cache hit rate
        * Key idea: Sort the requests by matched prefix length
  * Efficient LLM Scheduling by Learning to Rank \[[Paper](https://openreview.net/forum?id=wlLjYl0Gi6)] \[[Code](https://github.com/hao-ai-lab/vllm-ltr)]
    * UCSD & THU & Snowflake & UC-Berkeley
    * Insight: it is possible to _predict the relative ranks of output lengths in a batch of requests_.
    * Develop a scheduler for LLM inference that can approximate the _shortest-job-first_ (SJF) schedule better than existing approaches
* Compound AI Systems
  * Are More LM Calls All You Need? Towards the Scaling Properties of Compound AI Systems \[[Paper](https://openreview.net/forum?id=m5106RRLgx)] \[[Code](https://github.com/lchen001/CompoundAIScalingLaws)]
    * Stanford & UC Berkeley & Princeton
    * Systematically study _how the number of LM calls affects the performance of two natural inference strategy designs_.
      * **Vote**: Aggregate LM responses via majority voting
      * **Filter-Vote**: Majority voting after filtering results with an LM
    * Insight
      * More LM calls lead to higher performance on “easy” queries, but lower performance on “hard” queries, and nonmonotone behavior can emerge when a task contains both types of queries.
    * An analytical scaling model to predict the performance of Vote and Filter-Vote systems and find the optimal number of LM calls to make.

### Diffusion Models

* Adapter Selection
  * Stylus: Automatic Adapter Selection for Diffusion Models \[[Paper](https://openreview.net/forum?id=3Odq2tGSpp)] \[[Homepage](https://stylus-diffusion.github.io)] \[[Code](https://github.com/stylus-diffusion/stylus)]
    * UC Berkeley & CMU & Google DeepMind
    * Problem: how to match the prompt to a set of relevant adapters
    * Stylus
      * Select and automatically compose task-specific adapters based on a prompt's keywords
      * Three-stage approach
        1. Refiner: Leverage visual-language foundational models (VLM) to generate semantic descriptions of adapters then translate them into embeddings
        2. Retriever: Fetch the most relevant adapters over the entirety of the user’s prompt using cosine similarity
        3. Composer: Segment the prompt into tasks from a prompt’s keywords and assign retrieved adapters to tasks
    * StylusDocs
      * An adapter dataset consists of 75K LoRAs (sourced from Civitai) with pre-computed adapter embeddings
* Inference
  * Reverse Transition Kernel: A Flexible Framework to Accelerate Diffusion Inference \[[Paper](https://openreview.net/forum?id=C2xCLze1kS)]
    * HKUST & HKU & Salesforce AI Research & UIUC
    * Develop a general RTK (reverse transition kernel) framework that enables a more balanced subproblem decomposition
    * Propose leveraging two fast sampling algorithms, the Metropolis-Adjusted Langevin Algorithm (MALA) and Underdamped Langevin Dynamics (ULD), for solving these strongly log-concave subproblems
  * Accelerating Diffusion Models with Parallel Sampling: Inference at Sub-Linear Time Complexity \[[Paper](https://openreview.net/forum?id=F9NDzHQtOl)]
    * Stanford
    * Propose to divide the sampling process into $$O(1)$$ blocks with parallelizable Picard iterations within each block
* Talking Face Video Generation
  * &#x20;VASA-1: Lifelike Audio-Driven Talking Faces Generated in Real Time \[[Paper](https://openreview.net/forum?id=5zSCSE0k41)] \[[Homepage](https://www.microsoft.com/en-us/research/project/vasa-1/)]
    * MSRA
    * A framework to generate lifelike talking faces with appealing visual affective skills (VAS).
    * A diffusion-based holistic facial dynamics and head movement generation model that works in a face latent space.
    * Support the online generation of 512×512 videos at up to 40 FPS.
* Facial Parts Swapping
  * FuseAnyPart: Diffusion-Driven Facial Parts Swapping via Multiple Reference Images \[[Paper](https://openreview.net/forum?id=X2UMdvcmMo)] \[[Code (coming...)](https://github.com/Thomas-wyh/FuseAnyPart)]
    * Alibaba
    * Facial parts from different people are assembled into a complete face in latent space within the Mask-based Fusion Module
    * The consolidated feature is dispatched to the Addition-based Injection Module for fusion within the UNet of the diffusion model to create novel characters

### Autoregressive Image Generation

* Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction \[[Paper](https://openreview.net/forum?id=gojL67CfS8)] \[[Code](https://github.com/FoundationVision/VAR)] \[[arXiv](https://arxiv.org/abs/2404.02905)]
  * PKU & ByteDance
  * **Best Paper Award**
  * **VAR**: Visual Autoregressive Modeling
  * Redefine the autoregressive learning on images as coarse-to-fine “**next-scale prediction**” or “**next-resolution prediction**”
  * Multi-scale token maps are autoregressively generated from coarse to fine scales (**lower to higher resolutions**), with parallel token generation within each scale
* Autoregressive Image Generation without Vector Quantization \[[Paper](https://openreview.net/forum?id=VNBIF0gmkb)] \[[Code](https://github.com/LTH14/mar)] \[[arXiv](https://arxiv.org/abs/2406.11838)]
  * MIT & Google DeepMind & THU
  * Propose to model the per-token probability distribution using a diffusion procedure
  * Define a _Diffusion Loss_ function to model the per-token probability
  * Evaluated across a wide range of cases, including standard autoregressive models and generalized _masked autoregressive_ (**MAR**) variants

### Text-to-Video Generation

* Inference
  * Fast and Memory-Efficient Video Diffusion Using Streamlined Inference \[[Paper](https://openreview.net/forum?id=iNvXYQrkpi)] \[[Code](https://github.com/wuyushuwys/FMEDiffusion)]
    * NEU
    * **Streamlined Inference**: Leverage the temporal and spatial properties of video diffusion models
    * Three core components
      * **Feature Slicer**: Partition input features into sub-features
      * **Operator Grouping**: Process each sub-feature with a group of consecutive operators
      * **Step Rehash**: Accelerate inference through skipping unnecessary steps
* Evaluation
  * VidProM: A Million-scale Real Prompt-Gallery Dataset for Text-to-Video Diffusion Models \[[Paper](https://openreview.net/forum?id=pYNl76onJL)] \[[Homepage](https://vidprom.github.io)] \[[Code](https://github.com/WangWenhao0716/VidProM)] \[[Dataset](https://huggingface.co/datasets/WenhaoWang/VidProM)]
    * UTS & ZJU
    * 1.67M unique text-to-video Prompts from real users.
    * 6.69M videos generated by four state-of-the-art diffusion models (Pika, VideoCraft2, Text2Video-Zero, ModelScope).
  * Evaluation of Text-to-Video Generation Models: A Dynamics Perspective \[[Paper](https://openreview.net/forum?id=tmX1AUmkl6)] \[[Homepage](https://t2veval.github.io/DEVIL/)] \[[Code](https://github.com/MingXiangL/DEVIL)]
    * UCAS & HIT & Adelaide & Baidu
      * Existing evaluation protocols primarily focus on temporal consistency and content continuity, yet largely _ignore the dynamics of video content_.
      * **DEVIL**: An evaluation protocol that centers on the dynamics dimension to evaluate T2V generation models
  * Boosting Text-to-Video Generative Model with MLLMs Feedback \[[Paper](https://openreview.net/forum?id=3ivnixHy16)]
    * MSRA
      * Utilize Multimodal Large Language Models (MLLMs) to perform fine-grained video preference annotations → **VideoPrefer** (13.5K preference annotations)
      * **VideoRM**: The reward model for text-to-video alignment
