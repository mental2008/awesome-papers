# AGENTS.md

## Scope

This file defines repository-specific conventions for `awesome-papers`.

For general GitBook syntax, custom blocks, frontmatter, configuration, and platform behavior, consult:

* `./skills/gitbook-skill.md`

Treat `skills/gitbook-skill.md` as the default GitBook skill for this repository. Do not duplicate its generic guidance here unless the repository intentionally overrides it.

## Repo Nature

This repository is a content-first knowledge base, not a runnable software project.

Its core logic is:

* `README.md` explains the repository purpose, changelog, and external website.
* `SUMMARY.md` defines the published navigation tree.
* `paper-list/` organizes papers by topic.
* `reading-notes/` organizes notes by venue and year.
* `.gitbook/assets/` stores images embedded in notes.

Think of the repository as a manually curated knowledge graph built with Markdown and relative links.

## Content Model

The repository has a stable 3-layer structure:

1. Global navigation
   * `SUMMARY.md`
2. Aggregation pages
   * topic pages under `paper-list/`
   * venue/year pages under `reading-notes/`
3. Leaf pages
   * paper-specific reading notes under `reading-notes/**`

The main repository logic is link structure:

* `SUMMARY.md` links to visible pages in the published site.
* `paper-list/` links to venue pages or personal note pages.
* `reading-notes/` links outward to paper/code/homepage resources.
* When available, topic pages link back to personal notes via `[[Personal Notes](...)]`.

## How To Add A New Paper Note

When adding a new paper note, update 2 to 4 places depending on scope.

### Minimum path

1. Add the note in `reading-notes/`.
   * If the venue already uses a directory form, add a new leaf note there.
   * Example: `reading-notes/conference/asplos-2024/spotserve.md`
2. Add an entry from the venue aggregation page.
   * If the venue uses `README.md` inside a directory, update that `README.md`.
   * Example: `reading-notes/conference/asplos-2024/README.md`
   * If the venue is a single yearly file, update that yearly file directly.
   * Example: `reading-notes/conference/osdi-2024.md`

### Common extra steps

3. If the paper belongs to an existing topic, add it to the relevant `paper-list/` page.
   * Example: `paper-list/systems-for-ml/llm.md`
   * Prefer linking back to the note with `[[Personal Notes](...)]` when a note exists.
4. Update `SUMMARY.md` only when you create a new page that should appear in site navigation.
   * Adding content to an already-listed page usually does not require touching `SUMMARY.md`.

### When creating a new venue page

If you introduce a brand new venue/year page, usually update:

* the new page itself
* `reading-notes/conference/README.md` or the relevant parent index
* `SUMMARY.md`
* any relevant `paper-list/` pages if the paper should be surfaced by topic

## Naming Conventions

### `reading-notes/`

Common patterns:

* yearly aggregation page: `conference-name-year.md`
  * Example: `reading-notes/conference/osdi-2024.md`
* directory-style venue page: `conference-name-year/README.md`
  * used when the venue has multiple leaf notes
  * Example: `reading-notes/conference/atc-2023/README.md`
* leaf note file: short slug or abbreviated paper identifier in lowercase
  * Examples: `spotserve.md`, `lina.md`, `zico.md`, `fgd.md`

Do not force one rigid scheme if the surrounding directory already follows an older pattern. Match the local style first.

### `paper-list/`

Common patterns:

* pages are named by topic, not by venue
* first-level grouping is a domain bucket
  * examples: `systems-for-ml`, `cloud-computing`, `resource-disaggregation`
* second-level pages are topic taxonomies
  * examples: `llm.md`, `model-serving.md`, `gpu-disaggregation.md`

## Repo-Specific Writing Conventions

### Venue aggregation pages in `reading-notes/`

Typical structure:

* title
* `## Meta Info`
* `Homepage: ...`
* `Paper list: ...`
* `## Papers`
* optional `## Acronyms`

These pages are venue-centric and time-centric.

### Leaf paper notes in `reading-notes/`

Typical structure:

* title
* `## Meta Info`
* optional `Presented in ...`
* `## Understanding the paper` or `### TL;DR`
* background / challenges / designs / implementation / evaluation / limitations

These pages are the most detailed content units in the repository.

### Topic pages in `paper-list/`

Typical entry structure:

* paper title
* venue or source link
* optional `Personal Notes`, `Paper`, `Code`, `Docs`, `Homepage`, `Slides`, `Artifact`, `Benchmark`, `Trace`
* affiliation line
* 1 to 3 lines of concise technical summary when useful

These pages are topic-centric and act as curated research maps.

## Maintenance Habits

The repository intentionally maintains two parallel views:

* `reading-notes/`: organized by venue and year
* `paper-list/`: reorganized by research topic

The expected maintenance flow is:

* archive or summarize by venue in `reading-notes/`
* surface important papers by topic in `paper-list/`
* cross-link the two when personal notes exist

This repository is manually curated and has evolved over time. Mixed styles are normal:

* some venues are single-file yearly pages
* some venues are directory-based with `README.md` plus multiple leaf notes

Prefer consistency with the local neighborhood over repo-wide cleanup.

## LLM Topic Taxonomy

`paper-list/systems-for-ml/llm.md` is one of the most mature topic pages in the repository. Treat it as a reference taxonomy for LLM systems content.

Its top-level structure is:

* `LLM Training`
* `LLM Inference`
* `LLM Alignment`
* `Acronyms`

Its inference section is further broken down by systems problem, not just by model family:

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

This reflects the intended classification logic:

1. split first by lifecycle
   * training / inference / alignment
2. within inference, classify by systems bottleneck or optimization mechanism
   * cache management, scheduling, disaggregation, speculative decoding, offloading
3. keep scenario-driven slices when they are stable enough
   * RAG, serverless inference, LoRA serving, LLM-based applications
4. keep environment or deployment constraints visible
   * heterogeneous environment, fairness

When adding LLM content:

* first decide whether it belongs to training, inference, or alignment
* if inference-related, prefer an existing subsection before creating a new one
* create a new subsection only when the topic is clearly recurring and not well represented by the current taxonomy

## Local Preview

The source of truth is GitBook-oriented Markdown in the repository.

If local preview support exists, it must not require rewriting repository source away from GitBook-native syntax. Prefer compatibility preprocessing for local preview over changing the committed GitBook content.

Current local preview commands are defined in `package.json`.

## Practical Editing Guidance

Before editing, determine which of these you are changing:

* a leaf note only
* a venue aggregation page
* a topic page
* site navigation in `SUMMARY.md`

A small note addition often needs:

* one new file under `reading-notes/`
* one update to the related venue page
* optionally one update to a topic page in `paper-list/`

Avoid treating this repo like an application codebase. The primary quality bar here is:

* clean structure
* consistent naming relative to nearby files
* useful summaries
* correct cross-links
* minimal but sufficient navigation updates

## Commit Workflow

For this repository, use the following commit workflow:

* When the user says "总结一下这次的改动" or asks for a summary of the current changes, first provide:
  * a concise change summary
  * a proposed git commit message that records the substance of the changes
* Do not create the commit until the user confirms the summary/message or explicitly says the changes are OK.
* After the user confirms, create the local commit and then push it to the remote branch.
* Do not split commit and push into two separate confirmation steps unless the user explicitly asks for that.

The intended sequence is:

1. summarize changes
2. propose commit message
3. wait for user confirmation
4. create local commit
5. push to the remote branch
