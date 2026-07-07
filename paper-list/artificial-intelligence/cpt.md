# Continual Pre-training (CPT)

> **Continual Pre-training (CPT)** updates a pretrained language model on new corpora before downstream adaptation. The usual goal is to add domain, language, temporal, or agentic capability while controlling forgetting and retraining cost.

## Core Methods

* ADEPT: Continual Pretraining via Adaptive Expansion and Dynamic Decoupled Tuning (arXiv:2510.10071) \[[arXiv](https://arxiv.org/abs/2510.10071)] \[[Code](https://github.com/PuppyKnightUniversity/ADEPT)]
  * PKU & ZJU
  * Expands only layers that are less critical to general-domain competence, then applies unit-wise asymmetric learning rates.
  * Targets domain-adaptive CPT with less parameter update and less interference than full-parameter CPT.
* Revisiting Replay and Gradient Alignment for Continual Pre-Training of Large Language Models (CoLLAs 2025) \[[arXiv](https://arxiv.org/abs/2508.01908)]
  * UdeM & Mila & IBM Research & Fujitsu Research & Polytechnique Montreal
  * Studies replay and gradient alignment for Llama-family CPT across language streams with 100B tokens per language.
  * Shows low replay rates and efficient meta-experience replay can stabilize learning without the overhead of large replay budgets.
* Beyond Cosine Decay: On the Effectiveness of Infinite Learning Rate Schedule for Continual Pre-training (CoLLAs 2025) \[[arXiv](https://arxiv.org/abs/2503.02844)] \[[Code](https://github.com/Pauljanson002/beyond-cosine)]
  * Mila & Concordia & UdeM
  * Compares repeated cosine annealing with infinite learning-rate schedules for continual self-supervised pretraining.
  * Removes the need to precommit to a fixed token budget and reduces forgetting from LR re-warming.
* Efficient Continual Pre-training by Mitigating the Stability Gap (arXiv:2406.14833) \[[arXiv](https://arxiv.org/abs/2406.14833)]
  * PKU & HKUST & MIT-IBM Watson AI Lab
  * Identifies the early "stability gap" where domain performance drops before recovering during CPT.
  * Mitigates the gap through multi-epoch subset training, high-quality subset selection, and data mixtures closer to the original pretraining distribution.
* Simple and Scalable Strategies to Continually Pre-train Large Language Models (TMLR 2024) \[[Paper](https://openreview.net/forum?id=DimPeeCxKO)] \[[arXiv](https://arxiv.org/abs/2403.08763)]
  * UdeM & Concordia & Mila & EleutherAI
  * Combines LR re-warming, LR re-decaying, and replay of previous data for English-to-English and English-to-German CPT.
  * Shows the recipe can approach retraining-from-scratch baselines at 405M scale and in a 10B-model setting.
* Continual Pre-training of Language Models (ICLR 2023) \[[arXiv](https://arxiv.org/abs/2302.03241)] \[[Code](https://github.com/UIC-Liu-Lab/ContinualLM)]
  * UIC & PKU & KDDI Research
  * Formalizes continual domain-adaptive pretraining over a sequence of unlabeled domain corpora.
  * Introduces DAS with soft masking and contrastive knowledge integration to reduce forgetting while preserving transfer.

## Data Selection and Mixture

* Midtraining Bridges Pretraining and Posttraining Distributions (arXiv:2510.14865) \[[arXiv](https://arxiv.org/abs/2510.14865)]
  * CMU
  * Frames midtraining as distributional bridging: mixing specialized data with general pretraining data before posttraining.
  * Shows math/code midtraining can outperform specialized continued pretraining while reducing forgetting; timing and mixture weight interact through a plasticity window.
* Data Mixing Agent: Learning to Re-weight Domains for Continual Pre-training (arXiv:2507.15640) \[[arXiv](https://arxiv.org/abs/2507.15640)]
  * Manchester & MSR & ICL & UCLA
  * Trains a small agent to learn domain re-weighting heuristics from data-mixing trajectories and evaluation feedback.
  * Generalizes data-mixture control across source fields, target models, and domain spaces without retraining the agent.

## Scaling Laws and Training Dynamics

* Learning Dynamics in Continual Pre-Training for Large Language Models (ICML 2025) \[[Paper](https://proceedings.mlr.press/v267/wang25cx.html)] \[[arXiv](https://arxiv.org/abs/2505.07796)]
  * UCAS & IA, CAS & RitzzAI
  * Models CPT loss curves as a transition between original and domain-specific training trajectories.
  * Decouples distribution shift and LR annealing to predict loss over CPT steps, replay ratios, and schedules.
* D-CPT Law: Domain-specific Continual Pre-Training Scaling Law for Large Language Models (arXiv:2406.01375) \[[arXiv](https://arxiv.org/abs/2406.01375)]
  * Alibaba Group & University of Waterloo & Manchester & QMUL & HKUST & M-A-P
  * Predicts general and downstream performance as a function of domain/general mixture ratio, model size, and dataset size.
  * Extends the law to cross-domain settings, reducing the search cost for target-domain mixture ratios.

## Domain, Language, and Agent Adaptation

* Model Spec Midtraining: Improving How Alignment Training Generalizes (arXiv:2605.02087) \[[arXiv](https://arxiv.org/abs/2605.02087)]
  * Anthropic Fellows Program & Anthropic
  * Introduces MSM: train on synthetic documents discussing the Model Spec after pretraining and before alignment fine-tuning.
  * Shapes how models generalize from the same demonstration data; reduces Qwen3-32B agentic misalignment from 54% to 7% in the reported setup.
* Scaling Agents via Continual Pre-training (arXiv:2509.13310) \[[arXiv](https://arxiv.org/abs/2509.13310)] \[[Code](https://github.com/Alibaba-NLP/DeepResearch)] \[[Homepage](https://tongyi-agent.github.io/blog)]
  * Tongyi Lab, Alibaba Group
  * Adds Agentic CPT before post-training so the base model already contains tool-use and deep-research behaviors.
  * Builds AgentFounder with first-order and higher-order action synthesis plus subsequent agentic alignment.
* Disentangling Continued Pre-Training: Attention-Driven Routing and Semantic Hub Preservation in Language Adaptation (Findings ACL 2026) \[[Paper](https://aclanthology.org/2026.findings-acl.1218/)] \[[Code](https://github.com/ReML-AI/disentangling_cpt)]
  * University College Cork
  * Analyzes continued pretraining for language adaptation through attention routing and semantic hub preservation.
  * Provides a mechanism-level view of how language adaptation changes internal routing and shared representations.
* Hephaestus: Improving Fundamental Agent Capabilities of Large Language Models Through Continual Pre-Training (arXiv:2502.06589) \[[arXiv](https://arxiv.org/abs/2502.06589)]
  * Georgia Tech & Amazon
  * Introduces Hephaestus-Forge, a 103B-token agent pretraining corpus covering APIs, function-calling trajectories, reasoning, and feedback adaptation.
  * Uses CPT to improve fundamental agent capabilities before task-specific prompting or finetuning.
* Emergent Abilities of Large Language Models under Continued Pre-training for Language Adaptation (ACL 2025) \[[Paper](https://aclanthology.org/2025.acl-long.1547/)]
  * HiTZ Center, UPV/EHU & Reka AI
  * Shows English data in the mixture may be critical for downstream emergent abilities even when validation perplexity looks unchanged.
  * Uses language-agnostic ICL evaluation to expose early forgetting during target-language CPT.
* Towards Effective and Efficient Continual Pre-training of Large Language Models (ACL 2025) \[[Paper](https://aclanthology.org/2025.acl-long.289/)] \[[arXiv](https://arxiv.org/abs/2407.18743)] \[[Code](https://github.com/RUC-GSAI/Llama-3-SynE)]
  * RUC & UCSD
  * Presents Llama-3-SynE, a transparent CPT recipe for improving Chinese ability and scientific reasoning on Llama-3-8B.
  * Uses data curation, synthetic scientific QA, curriculum design, and performance-tracking mixture adjustment.
* Efficient Continual Pre-training for Building Domain Specific Large Language Models (Findings ACL 2024) \[[Paper](https://aclanthology.org/2024.findings-acl.606/)]
  * Amazon
  * Builds FinPythia through domain-adaptive CPT for finance.
  * Tests task-aware and task-agnostic data selection strategies that use a small fraction of the corpus while preserving open-domain ability.

## Analysis and Benchmarks

* How Do Large Language Models Learn Concepts During Continual Pre-Training? (arXiv:2601.03570) \[[arXiv](https://arxiv.org/abs/2601.03570)]
  * UC Davis & Virginia Tech & UCLA & Meta AI
  * Links concept learning and forgetting to internal concept circuits and graph metrics.
  * Studies interference and synergy across concepts during two-stage CPT.
* Continual Pre-training of MoEs: How Robust Is Your Router? (TMLR 2025) \[[Paper](https://openreview.net/forum?id=dR7C1K71Rs)] \[[arXiv](https://arxiv.org/abs/2503.05029)]
  * UdeM & Mila & Concordia & UChicago & Capital One
  * Studies dense and MoE transformers under CPT to test whether routing worsens forgetting or load imbalance.
  * Finds MoE routers remain robust under distribution shift and can retain sample-efficiency benefits during CPT.
* Investigating Continual Pretraining in Large Language Models: Insights and Implications (TMLR 2025) \[[Paper](https://openreview.net/forum?id=JzKFN5fWOk)] \[[arXiv](https://arxiv.org/abs/2402.17400)]
  * University of Tubingen & Cohere for AI
  * Studies continual domain-adaptive pretraining across domain sequences and model scales.
  * Finds domain semantic similarity, training order, and model size affect specialization, forward transfer, backward transfer, and forgetting.

## Acronyms

* ADEPT: Adaptive Expansion and Dynamic Decoupled Tuning
* AFT: Alignment Fine-Tuning
* CPT: Continual Pre-training
* DAP: Domain-Adaptive Pre-training
* DAS: Continual DA-pre-training of LMs with Soft-masking
* D-CPT: Domain-specific Continual Pre-training
* EMA: Exponential Moving Average
* ICL: In-Context Learning
* LR: Learning Rate
* MER: Meta-Experience Replay
* MoE: Mixture-of-Experts
* MSM: Model Spec Midtraining
