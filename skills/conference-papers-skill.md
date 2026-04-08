# Conference Papers Skill

Use this skill when updating conference venue pages under `reading-notes/conference/`, adding accepted papers from an official conference website, or curating venue pages based on the repository's research focus.

## When To Use

Use this skill for tasks such as:

* updating `reading-notes/conference/<venue>-<year>.md`
* creating a new conference venue page
* syncing a venue page with an official accepted paper list, program, or proceedings
* selecting which accepted papers to keep in a venue page
* reorganizing a venue page's `## Papers` section into topic groups

This repository is curated, not exhaustive. Do not mirror an entire accepted paper list unless the user explicitly asks for a complete dump.

## Core Principle

Conference pages should reflect the repository's interests, not every accepted paper.

Prefer selective curation:

* keep papers aligned with the repository's main focus areas
* preserve and enrich papers that are already present in the page
* add new papers only when they fit the page's existing curation logic
* avoid replacing a hand-maintained page with a raw accepted-paper dump

## Selection Standard

When curating from a full accepted list, prioritize papers in or near these areas:

* LLM systems
  * training
  * inference
  * alignment / post-training
  * multimodal model systems
* model serving
  * request scheduling
  * KV cache management
  * prefill-decode disaggregation
  * speculative decoding
  * LoRA serving
  * serverless inference
  * edge-cloud or heterogeneous inference
* distributed training infrastructure
  * parallelism
  * memory planning
  * data loading
  * checkpointing / failover / fault tolerance
  * collective communication for ML
* GPU and accelerator systems
  * scheduling / sharing
  * communication
  * runtime / compilation
  * NPU / DPU / SmartNIC / FPGA support when clearly relevant to ML systems
* diffusion / generative model systems
* resource management for ML workloads
  * serverless systems
  * cluster scheduling
  * storage or caching paths tightly coupled to model serving or training

Usually skip papers that are primarily about:

* generic networking without an ML/systems-for-ML angle
* OS, security, storage, or blockchain topics with no clear connection to the repository's focus
* broad systems papers that do not naturally fit the surrounding venue-page taxonomy

When uncertain, prefer consistency with nearby pages like:

* `reading-notes/conference/eurosys-2025.md`
* `reading-notes/conference/asplos-2026.md`
* `paper-list/systems-for-ml/llm.md`

## Update Workflow

1. Inspect the target page and nearby venue pages first.
   * Match the local style before adding anything.
   * Treat existing manual curation as the baseline.
2. Read the official source.
   * Use the official conference site, program, proceedings, or accepted paper list.
   * Infer metadata such as `Homepage`, `When`, `Where`, and paper-list links from the official source when available.
3. Decide whether the task is:
   * preserving and extending an existing curated page
   * creating a new venue page
   * selectively importing from a new accepted list
4. Keep existing curated content unless the user explicitly asks for cleanup.
   * Do not delete existing notes, links, or remarks just because the official page is sparse.
   * Prefer additive edits over replacement.
5. Select papers using the curation standard above.
   * Do not dump all accepted papers into `## Papers`.
   * If useful, add a short note in `## Meta Info` pointing to the full official paper list.
6. Group selected papers into the page's `## Papers` section.
   * Group by systems problem or lifecycle, not by arbitrary acceptance-order listing.
7. Add or preserve links and concise summaries where they add value.
   * Only write contribution bullets when they are supported by an additional source such as a paper page, arXiv abstract, proceedings abstract, or author/project page.
   * Do not write contribution bullets from title-only inference.
   * If the official conference page only provides title plus authors/affiliations, then by default keep only title plus affiliations.
   * Preserve existing hand-maintained remarks such as `**Our work!**`, `**Best Paper Award**`, or other explicit manual notes.
8. Update cross-references only when needed.
   * `reading-notes/conference/README.md`
   * `SUMMARY.md`
   * relevant `paper-list/` pages

## Venue Page Structure

Typical conference page structure:

* title
* `## Meta Info`
* `Homepage: ...`
* either:
  * `Paper list: ...`
* or, if multiple paper-list-related links exist:
  * `### Paper List`
  * `Program: ...`
  * `Proceedings Volume 1: ...`
  * `Proceedings Volume 2: ...`
* optional `### Acceptance Rate`
* `## Papers`
* optional `## Acronyms`

For proceedings-heavy pages, use the current `reading-notes/conference/asplos-2026.md` style.

## Grouping Guidance For `## Papers`

Prefer topic-centric grouping over flat lists.

Common high-level groups:

* `### Large Language Models (LLMs)`
* `### Diffusion Models`
* `### Distributed Training`
* `### Model Serving`
* `### Deep Learning Compilation`
* `### Resource Management`
* `### GPU Systems`

Maintain the subgroup taxonomy in this skill and extend it over time as the repository evolves.

When organizing a conference page:

* prefer an existing subgroup from this skill before inventing a new one
* add a new subgroup only when the paper clearly does not fit the current taxonomy
* when adding a useful new subgroup, update this skill so later conference pages can reuse it

## Maintained Subgroup Taxonomy

This section is the maintained reference for major directions and their preferred second-level buckets.

### Large Language Models (LLMs)

* `LLM Training`
  * `MoE Training`
  * `LoRA Fine-Tuning`
  * `Memory and Data Pipeline`
  * `Scheduling and Parallelism`
  * `Multimodal Training`
  * `RL Post-Training`
  * `Fault Tolerance and Rescheduling`
  * `Training Monitoring and Diagnosis`
* `LLM Inference`
  * `LLM-based Applications`
  * `Retrieval-Augmented Generation (RAG)`
  * `Request Scheduling`
  * `KV Cache Management`
  * `Prefill-Decode (PD) Disaggregation`
  * `Chunked Prefill`
  * `Serverless Inference`
  * `LoRA Serving`
  * `Position-Independent Caching (PIC)`
  * `Speculative Decoding`
  * `Sparsity`
  * `Compression`
  * `MoE Inference`
  * `Attention Mechanisms`
  * `Offloading`
  * `Heterogeneous Environment`
  * `Trusted Execution`
* `LLM Alignment`
  * `RLHF Systems`
  * `Post-Training Infrastructure`
  * `Safety and Verification`

### Diffusion Models

* `Image Generation`
* `Video Generation`
* `Diffusion Model Serving`
* `Diffusion Model Training`
* `Multimodal Diffusion Systems`

### Distributed Training

* `Runtime Optimization`
* `Communication`
* `Checkpointing and Recovery`
* `Parallelism`
* `Data Pipeline`
* `Heterogeneous Training`

### Model Serving

* `End-to-End Serving`
* `Serving Runtime`
* `Scheduling`
* `Multi-Tenant Serving`
* `Cross-Region and Multi-Cloud Serving`
* `Edge-Cloud Serving`

### Deep Learning Compilation

* `Operator Fusion`
* `Tensor Program Optimization`
* `Sparse Compilation`
* `Serving-Aware Compilation`
* `Code Generation`

### Resource Management

* `Serverless Computing`
* `Scheduling`
* `GPU Clusters`
* `GPU Scheduling and Sharing`

### GPU Systems

* `GPU Communication`
* `GPU Programming`
* `GPU Virtualization`
* `Heterogeneous Accelerators`

Inside an LLM section, prefer the taxonomy already used in `paper-list/systems-for-ml/llm.md`:

* `LLM Training`
* `LLM Inference`
* `LLM Alignment`

When `LLM Inference` gets crowded, prefer existing subtopics before creating new ones:

* `LLM-based Applications`
* `Retrieval-Augmented Generation (RAG)`
* `Request Scheduling`
* `KV Cache Management`
* `Prefill-Decode (PD) Disaggregation`
* `Chunked Prefill`
* `Serverless Inference`
* `LoRA Serving`
* `Position-Independent Caching (PIC)`
* `Sparsity`
* `Speculative Decoding`
* `Offloading`
* `Heterogeneous Environment`
* `Fairness`

Prefer adding a second-level subtopic layer under major conference-page buckets even before they become crowded.

Examples:

* `LLM Inference -> Prefill-Decode (PD) Disaggregation`
* `LLM Training -> Scheduling and Parallelism`
* `Resource Management -> Serverless Computing`

Do not wait until a section becomes crowded before introducing the extra layer. For conference pages in this repository, the default preference is:

* major bucket
* subtopic bucket
* paper entries

Only keep a major bucket flat when there is a very strong reason not to add a meaningful subtopic layer.

## Entry Formatting

Use the current venue-page style.

Typical item shape:

* first line:
  * `* <Paper Title> \[[Paper](...)] \[[arXiv](...)] \[[Code](...)] \[[Project](...)] \[[Artifact](...)] \[[Video](...)] ...`
* following lines:
  * `  * <Affiliations>`
  * `  * <Short contribution summary>`
  * `  * <Short contribution summary>`

Practical conventions:

* keep all resource links on the same title line
* for conference venue pages, use escaped GitBook link brackets like `\[[Paper](...)]` rather than plain `[[Paper](...)]`
* treat the leading `\` as intentional repository style, matching pages such as `reading-notes/conference/asplos-2026.md`
* prefer `Paper` first when an official proceedings link exists
* keep affiliations on the next bullet line
* keep 1 to 3 short summary bullets only when they are backed by a source beyond the title itself
* if no abstract, paper page, arXiv page, or equivalent source is available, omit contribution bullets
* preserve existing links and notes
* preserve existing emphasis such as `**Best Paper Award**` or `**Our work!**`

For affiliations, default to the abbreviations in `skills/affiliation-abbreviations.md`.

## Metadata And Index Updates

When creating a new venue page, usually update:

* the new page itself
* `reading-notes/conference/README.md` or the relevant parent index
* `SUMMARY.md`
* any relevant `paper-list/` pages

When updating `reading-notes/conference/README.md`:

* set `Remarks` relative to the current date
* use `Incoming` for conferences that have not started yet
* remove `Incoming` once the conference has already finished
* keep other remarks such as `🧐`, `😎`, `👨‍💻`, or co-location notes when applicable

## Anti-Patterns

Avoid these failure modes:

* replacing curated sections with a full accepted-paper dump
* deleting existing notes, links, or manual remarks during expansion
* grouping papers by acceptance-order instead of topic
* adding many marginally related systems papers that dilute the venue page's focus
* inventing vague contribution summaries from the title alone when better source text is available
* writing contribution bullets from title-only inference when no abstract or paper page has been checked
