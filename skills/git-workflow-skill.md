# Git Workflow Skill

Use this skill for repository-specific Git operations such as:

* summarizing the current changes
* proposing or polishing commit messages
* creating a local commit
* pushing to the remote branch

## Summary and Commit Flow

When the user asks to summarize the current changes:

1. Inspect the working tree first.
   * Prefer `git status --short` and `git diff --stat`.
   * If needed, inspect targeted diffs for the files relevant to the task.
2. First provide:
   * a concise change summary
   * a proposed git commit message
3. Do not create the commit until the user confirms the summary/message or explicitly says the changes are OK.
4. After the user confirms:
   * stage only the files relevant to the confirmed change
   * create the local commit
   * push to the current remote branch
5. Do not split commit and push into two separate confirmation steps unless the user explicitly asks for that.
6. If push fails, report:
   * the local commit hash
   * the failure reason

## Commit Message Format

Use the following format for proposed and final commit messages:

* `type(scope): summary`

Recommended `type` values in this repository:

* `curate`
  * organizing conference pages, curation, taxonomy cleanup, paper summaries
* `paper-list`
  * creating or updating topic pages under `paper-list/`
* `refactor`
  * restructuring directories, navigation, or page organization
* `fix`
  * fixing links, typos, affiliations, ordering, or formatting mistakes
* `docs`
  * updating `README.md`, `AGENTS.md`, or repository workflow/skill guidance

Practical commit-message rules:

* choose one primary `type`
* use a short `scope` that names the main page, topic, or area being changed
  * examples: `nsdi-2026`, `kernel-generation`, `ml-for-systems`, `repo`
* keep the title single-purpose; do not chain multiple message fragments like `refactor: ...; fix: ...`
* if a commit includes secondary changes, keep them in the commit body or absorb them into the summary instead of adding another title fragment

## Examples

* `curate(nsdi-2026): refine taxonomy and add arXiv summaries`
* `paper-list(kernel-generation): add agent papers and benchmarks`
* `refactor(ml-for-systems): split topic into directory page`
* `fix(kernel-generation): reorder papers by publication time`
* `docs(repo): clarify paper-list ordering rule`
