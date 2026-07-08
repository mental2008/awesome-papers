# Research Radar Skill

Use this skill when checking whether a research direction has newly appeared papers worth adding to this repository.

Typical use cases:

* refreshing an existing `paper-list/` page
* checking whether a direction has recent arXiv or conference papers
* seeding searches with a small set of confirmed scholars before broader keyword sweeps
* deciding which scholar names should be queried first for a topic

## Core Principle

Maintain this file conservatively.

Do not aggressively pre-populate scholar lists for many directions. Build the seed set incrementally, and only keep scholars here after they are explicitly confirmed as useful long-term search seeds for this repository.

When a direction is not yet curated here, start from the nearest local `paper-list/` page and expand outward from recent papers instead of assuming a scholar shortlist.

When recording scholar seeds, use the default form `Name (Affiliation)` so the identity is unambiguous and the search seed carries its institutional context.

Sort each `Confirmed priority scholars` list alphabetically by surname, then given name, even though the display form remains `GivenName Surname (Affiliation)`.

## Workflow

1. Map the user request to the closest local taxonomy page.
2. If the direction has confirmed scholars in this skill, query them first.
3. Then do broader searches over recent arXiv papers, conference programs, DBLP, and nearby project names.
4. If a new scholar repeatedly surfaces strong, relevant work, propose adding them back into this skill rather than adding them silently.

## Query Patterns

Prefer high-precision scholar queries first:

* `"<Scholar Name>" "<direction keyword>" site:arxiv.org`
* `"<Scholar Name>" <venue> <year>`
* `site:dblp.org "<Scholar Name>" "<keyword>"`

Then broaden with:

* `"<direction keyword>" site:arxiv.org`
* `"<direction keyword>" <venue> <year>`
* nearby system, project, or benchmark names from recent relevant papers

## Maintained Direction Seeds

### Deep Learning Compilation

Closest local page:

* `paper-list/systems-for-ml/deep-learning-compiler.md`

Confirmed priority scholars:

* Tianqi Chen (CMU & NVIDIA)
* Zhihao Jia (CMU)

Notes:

* Start here for compiler abstractions, tensor program generation, serving-aware compilation, and megakernel compilation.
* Keep this seed list intentionally small until more names are explicitly confirmed.

### Diffusion Models

Closest local page:

* `paper-list/systems-for-ml/diffusion-models.md`

Confirmed priority scholars:

* Yuke Wang (Rice)
* Hao Zhang (UCSD)

Notes:

* Use this seed for diffusion model serving, video generation acceleration, patch-level serving, and generative image/video systems searches.
* Keep this seed list intentionally small until more names are explicitly confirmed.

### High-Performance Operator Optimization

Closest local pages:

* `paper-list/systems-for-ml/deep-learning-compiler.md`
* `paper-list/ml-for-systems/kernel-generation.md`

Confirmed priority scholars:

* Tri Dao (Princeton & Together AI)

Notes:

* Use this seed for hardware-aware operator design, high-performance attention kernels, IO-aware operator optimization, and related GPU kernel work.
* Keep this seed list intentionally small until more names are explicitly confirmed.

### LLM Inference

Closest local page:

* `paper-list/systems-for-ml/llm.md`

Confirmed priority scholars:

* Mingxing Zhang (THU)

Confirmed priority scholars by subdirection:

* `KV Cache Management`
  * Junchen Jiang (Chicago)

Notes:

* Use this seed for LLM inference and serving related searches.
* Use the subdirection seeds when refreshing a specific LLM inference subsection such as KV cache management.
* Keep this seed list intentionally small until more names are explicitly confirmed.

### Machine Learning Systems

Closest local page:

* `paper-list/systems-for-ml/README.md`

Confirmed priority scholars:

* Mosharaf Chowdhury (UMich)
* Bin Cui (PKU)
* Christos Kozyrakis (Stanford)
* Xupeng Miao (PKU)
* Ion Stoica (UC Berkeley)
* Wei Wang (HKUST)
* Chuan Wu (HKU)
* Matei Zaharia (UC Berkeley & Databricks)
* Mingxing Zhang (THU)
* Yibo Zhu (StepFun)

Notes:

* Use this seed for broader systems-for-ML searches before narrowing into a more specific subdirection such as LLM inference, compilation, training, or scheduling.
* Keep this seed list intentionally small until more names are explicitly confirmed.

## Missing Directions

If the target direction is not listed:

1. Find the nearest existing `paper-list/` page.
2. Look at the 5 to 10 most recent entries.
3. Extract repeated author names, lab names, project names, and system names from the linked papers.
4. Use them as temporary search seeds.
5. Only add them back into this skill after explicit confirmation that they are worth tracking long-term.
