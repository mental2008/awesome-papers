# AGENTS.md

## Scope

This file defines repository-specific conventions for `awesome-papers`.

For general GitBook syntax, custom blocks, frontmatter, configuration, and platform behavior, consult:

* `./skills/gitbook-skill.md`
* `./skills/affiliation-abbreviations.md` for common institution-name abbreviations used in this repository
* `./skills/conference-papers-skill.md` for updating conference venue pages and curating accepted papers based on the repository's focus
* `./skills/git-workflow-skill.md` for repository-specific Git workflow, change-summary flow, and commit-message conventions

Treat `skills/gitbook-skill.md` as the default GitBook skill for this repository. Do not duplicate its generic guidance here unless the repository intentionally overrides it.
Default to the abbreviations in `skills/affiliation-abbreviations.md` when writing affiliation lines in notes and paper lists.
Use `skills/conference-papers-skill.md` when updating `reading-notes/conference/` pages, syncing official accepted lists, or deciding which conference papers should be curated into a venue page.
Use `skills/git-workflow-skill.md` when summarizing pending changes, proposing commit messages, creating commits, or pushing to the remote branch.

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

When the official conference website is available, infer `When`, `Where`, homepage, and similar venue metadata directly from the official site instead of leaving placeholders like `TBD`.

For conference metadata placement:

* keep `When` and `Where` in `reading-notes/conference/README.md` or the relevant parent conference index
* default to **not** repeating `When` or `Where` inside the per-conference venue page's `## Meta Info`
* in the venue page itself, usually keep only `Homepage` plus paper-list/proceedings links and other page-local metadata
* only duplicate `When` / `Where` inside a venue page when the user explicitly asks for it or when preserving a clear legacy local style is more important

When updating conference entries in `reading-notes/conference/README.md`, set the `Remarks` field relative to the current date:

* use `Incoming` for conferences that have not started yet
* remove `Incoming` once the conference has already finished
* keep other remarks such as `🧐`, `😎`, `👨‍💻`, or co-location notes as applicable

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

For conference venue pages, accepted-paper curation, grouping logic, and metadata/index update workflow, use `skills/conference-papers-skill.md`.

### Leaf paper notes in `reading-notes/`

Typical structure:

* title
* `## Meta Info`
* optional `Presented in ...`
* `## Understanding the paper` or `### TL;DR`
* background / challenges / designs / implementation / evaluation / limitations

These pages are the most detailed content units in the repository.

### Images and figures in `reading-notes/`

When adding images to note pages or venue pages:

* download the image into `.gitbook/assets/` instead of hotlinking the external URL in Markdown
* use a stable, descriptive filename that matches the paper or figure content when possible
  * examples: `SpotServe-overview.png`, `KernelEvolve-overview.png`
* reference the image with a relative path from the current Markdown file to `.gitbook/assets/`
  * examples: `../../../.gitbook/assets/SpotServe-overview.png`, `../../.gitbook/assets/Falcon-hardware-transport-layers.png`
* prefer the GitBook-friendly figure form with caption for important architecture or result figures:

```html
<figure><img src="../../../.gitbook/assets/<image-file>.png" alt=""><figcaption><p>Short caption.</p></figcaption></figure>
```

* use plain Markdown image syntax such as `![caption](../../../.gitbook/assets/<image-file>.png)` only when the local page already uses that style and no explicit figure caption block is needed
* keep the image path relative; do not use absolute filesystem paths in committed Markdown

### Topic pages in `paper-list/`

Typical entry structure:

* paper title
* venue or source link
* optional `Personal Notes`, `Paper`, `Code`, `Docs`, `Homepage`, `Slides`, `Artifact`, `Benchmark`, `Trace`
* affiliation line
* 1 to 3 lines of concise technical summary when useful

These pages are topic-centric and act as curated research maps.

### Current `paper-list/` formatting style

Use the current hand-maintained `paper-list/` pages as the formatting reference.

Typical item shape:

* first line:
  * `* <Paper Title> (<Venue/Source>) [[Personal Notes]] [[Paper]] [[arXiv]] [[Code]] ...`
* second line:
  * `  * <Affiliation 1> & <Affiliation 2> ...`
* optional following lines:
  * `  * <1 short technical point>`
  * `  * <1 short technical point>`

Practical conventions:

* keep the venue or source immediately after the title in parentheses
  * examples: `([OSDI 2024](...))`, `(arXiv:2502.11101)`, `(SIGMOD 2025)`
* keep resource links on the same title line
* prefer this resource-link order when available:
  * `Personal Notes`, `Paper`, `arXiv`, `Code`, `Docs`, `Homepage`, `Slides`, `Artifact`, `Benchmark`, `Trace`, `Video`, `Blog`
* keep the affiliation as a separate bullet line directly under the title line
* within the same section or subsection of a `paper-list/` page, sort papers by publication time in reverse chronological order by default
  * use conference/journal publication time when available
  * for arXiv-only papers, use the arXiv posting time
  * if a page already has a clear local ordering convention, preserve it unless the user asks to reorder
* use 1 to 3 short summary bullets only when they add real value
* preserve emphasis already common in the repo for standout signals
  * examples: `**Best Paper Award**`, system names such as `**Sarathi-Serve**`
* for topic pages, concise phrases are preferred over long prose paragraphs
* when a paper already has a personal note, keep `[[Personal Notes](...)]` near the front of the resource links
* do not collapse existing useful source distinctions
  * for example, keep both `Paper` and `arXiv` if both are useful
  * keep `Project` or `Homepage` when they are distinct from the ACM/USENIX paper page

### Acronyms and section titles

Default to keeping both the full term and the acronym in section titles when the acronym is widely used and helps readability.

Example:

* prefer `### Large Language Models (LLMs)`
* similarly keep forms like `Retrieval-Augmented Generation (RAG)` when they help readers recognize the topic faster

The `## Acronyms` section is still useful as a glossary, but it does not imply that the acronym must be removed from headings.

When a page includes `## Acronyms`, sort acronym entries alphabetically by the acronym itself unless the user explicitly requests a different order.

### Paper entry enrichment

When adding paper entries to venue pages or topic pages:

* keep the author affiliation line
* add relevant links when available, prioritizing `Paper`, then `arXiv`, then `Code`
* add 1 to 3 short lines summarizing the technical contribution, such as:
  * key mechanism
  * systems design
  * optimization target
  * difference from prior work
* when possible, ground contribution summaries in the paper abstract rather than in title-only inference
* prefer this contribution pattern:
  * what system, method, or analysis the paper introduces
  * what key mechanism, control policy, or architectural idea it uses
  * what target, guarantee, or tradeoff it improves
* avoid vague filler such as `Likely`, `Suggest`, or `Focus on` when the paper contribution can be stated directly
* in contribution summaries, avoid promotional adjectives such as `efficient`, `robust`, or similar paper-title modifiers unless the adjective itself is the technical point

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

For LLM grouping and conference-paper curation, treat `paper-list/systems-for-ml/llm.md` as the reference taxonomy and follow `skills/conference-papers-skill.md`.

## Local Preview

The source of truth is GitBook-oriented Markdown in the repository.

If local preview support exists, it must not require rewriting repository source away from GitBook-native syntax. Prefer compatibility preprocessing for local preview over changing the committed GitBook content.

Current local preview commands are defined in `package.json`.

Interpret user requests as follows:

* when the user asks to "本地构建预览页面" or otherwise asks for a local preview, default to starting the local preview server rather than only running a static build
* only running `build` is insufficient for that request unless the user explicitly asks for build-only verification

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

For repository-specific Git workflow, change-summary behavior, and commit-message conventions, use `skills/git-workflow-skill.md`.

The intended sequence is:

1. summarize changes
2. propose commit message
3. wait for user confirmation
4. create local commit
5. push to the remote branch
