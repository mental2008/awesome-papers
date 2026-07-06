# On-Policy Distillation

> **On-Policy Distillation (OPD)**: student model generates its own rollouts; teacher provides per-token / per-sequence supervision (typically reverse KL) on those self-generated trajectories. Contrasts with off-policy SeqKD (SFT on teacher-generated text). Conceptually equivalent to "RL with the teacher's log-prob as a dense reward."

## Core Methods

* DistiLLM-2: A Contrastive Approach Boosts the Distillation of LLMs (ICML 2025) \[[arXiv](https://arxiv.org/abs/2503.07067)]
  * KAIST & MSR
  * Couples loss formulation to data source (different loss on teacher- vs. student-generated tokens); contrastive objective compounds OPD gains.
* BOND: Aligning LLMs with Best-of-N Distillation (arXiv:2407.14622) \[[arXiv](https://arxiv.org/abs/2407.14622)]
  * Google DeepMind
  * OPD variant where the **teacher is a reward model's implicit Best-of-N policy**, distilled into the student via Jeffreys-divergence on student rollouts.
* DistiLLM: Towards Streamlined Distillation for Large Language Models (ICML 2024) \[[arXiv](https://arxiv.org/abs/2402.03898)] \[[Code](https://github.com/jongwooko/distillm)]
  * KAIST & MSR
  * **Skew-KL** (bounded-gradient variant of reverse-KL) + adaptive off-policy mix to cut per-step rollout cost.
* On-Policy Distillation of Language Models: Learning from Self-Generated Mistakes / GKD (ICLR 2024) \[[arXiv](https://arxiv.org/abs/2306.13649)]
  * Google DeepMind
  * **Generalized Knowledge Distillation (GKD)**: unifies SFT, SeqKD, and OPD as a mixture of teacher- and student-generated data with arbitrary divergence (JSD, fwd/rev KL).
  * Shows on-policy student samples are essential at high compression ratios. *The canonical OPD reference.*
* MiniLLM: Knowledge Distillation of Large Language Models (ICLR 2024) \[[arXiv](https://arxiv.org/abs/2306.08543)] \[[Code](https://github.com/microsoft/LMOps/tree/main/minillm)]
  * THU & MSR
  * Replace forward-KL (mode-covering) with **reverse-KL** optimized via policy-gradient on student rollouts.
  * Mode-seeking reduces hallucination and exposure bias; the first widely-cited OPD recipe for modern LLMs.

## Analysis of On-Policy Data

* Retaining by Doing: The Role of On-Policy Data in Mitigating Forgetting (arXiv:2510.18874) \[[arXiv](https://arxiv.org/abs/2510.18874)]
  * Princeton
  * On-policy data is the active ingredient in RL's forgetting resistance; on-policy SFT alone closes much of the gap to full RL.
* RL's Razor: Why Online Reinforcement Learning Forgets Less (arXiv:2509.04259) \[[arXiv](https://arxiv.org/abs/2509.04259)]
  * MIT
  * On-policy training (incl. OPD) is biased toward KL-minimal solutions; explains why it preserves prior skills vs. SFT.

## Production Recipes

* MiMo-V2-Flash Technical Report (arXiv:2601.02780) \[[arXiv](https://arxiv.org/abs/2601.02780)] \[[Code](https://github.com/XiaomiMiMo)]
  * Xiaomi LLM-Core
  * **Multi-Teacher On-Policy Distillation (MOPD)**: multiple domain-specialized RL teachers provide dense token-level reward; student perfectly inherits expertise.
  * 309B total / 15B active MoE; matches DeepSeek-V3.2 and Kimi-K2 with 1/2 and 1/3 of total parameters.
  * MTP repurposed as speculative-decoding draft: 3.6 acceptance length, 2.6× decoding speedup.
* On-Policy Distillation (Thinking Machines Lab Blog, 2025-10) \[[Blog](https://thinkingmachines.ai/blog/on-policy-distillation/)] \[[Code](https://github.com/thinking-machines-lab/tinker-cookbook/tree/main/tinker_cookbook/recipes/distillation)]
  * Thinking Machines Lab
  * Treat per-token reverse KL as a dense reward; one-line change on top of an RL trainer (swap KL regularizer for teacher).
  * Replicates Qwen3: **AIME'24 60 → 70 % in ~150 steps, ≈9–30× cheaper than RL**.
  * Framing: `OPD = on-policy + dense`; `SFT = off-policy + dense`; `RL = on-policy + sparse`.
  * Re-energized the systems/ML community around OPD in late 2025.
* Qwen3 Technical Report (arXiv:2505.09388) \[[arXiv](https://arxiv.org/abs/2505.09388)]
  * Alibaba Qwen Team
  * Reports OPD reaching **74.4 % AIME'24 vs. 67.6 % for RL at 1/10 the GPU hours** — the result that inspired the TML blog.
  * First public production demonstration that OPD beats RL on the small reasoning model line.

## Acronyms

* GKD: Generalized Knowledge Distillation
* KD: Knowledge Distillation
* KL: Kullback–Leibler (divergence)
* MoE: Mixture-of-Experts
* MOPD: Multi-Teacher On-Policy Distillation
* MTP: Multi-Token Prediction
* OPD: On-Policy Distillation
* RL: Reinforcement Learning
* SeqKD: Sequence-Level Knowledge Distillation
* SFT: Supervised Fine-Tuning
