# Why Google stores billions of lines of code in a single repository

## Meta Info

Presented in [Communications of the ACM 2016](https://doi.org/10.1145/2854146).

Authors: Rachel Potvin, Josh Levenberg (_Google_)

## Understanding the paper

### TL;DR

* Google chose to stick with the central repository due to its advantages.
* The monolithic model of source code management is _not for everyone_, e.g., organizations where large parts of the codebase are _private_ or _hidden_ between groups.

### Key systems

* **Piper**: The distributed source-code repository
  * Implemented on top of standard Google infrastructure (originally [Bigtable](app://obsidian.md/@chang2006Bigtable), now [Spanner](app://obsidian.md/@corbett2012Spanner))
  * Reply on the [Paxos](app://obsidian.md/@lamport1998Paxos) algorithm to guarantee consistency across replicas
* **CitC** (Clients in the Cloud): The workspace client
  * With _a cloud-based storage backend_ and _a Linux-only FUSE13 file system_
* **Critique**: The code-review tool
* **Tricorder**: Static analysis system
  * Code quality, test coverage, and test results
* **Rosie**: large-scale cleanups and code changes
  1. Create a large patch; find-and-replace
  2. Split the large patch into smaller patches; test them independently; send for code review; commit them automatically once they pass tests and a code review

### Statistics

* Google’s monolithic software repository is used by 95% of its software developers worldwide.
* The Google codebase includes
  * approximately _1 billion files_
  * a history of _35 million commits_
  * 86TB of data (excluding release branches)
* Over 99% of files stored in Piper are visible to all full-time Google engineers.
* Over 80% of Piper users today use CitC.

### Advantages of a monolithic codebase

* Unified versioning → a single source of truth
* Code sharing and reuse
* Simplified dependency management
  * Avoid _diamond dependency problem_
* Atomic changes
* Large-scale refactoring
* Collaboration across teams
* Flexible team boundaries and code ownership
* Code visibility and clear tree structure → implicit team namespacing

### Costs and trade-offs

* Tooling investments for both development and execution
  * Code-indexing system
  * Automated test infrastructure
  * Build infrastructure
  * Code search and browsing tools
* Codebase complexity
  * Unnecessary dependencies → binary size bloating
* Efforts invested in code health

### Alternatives

* Git (distributed version control systems)
  * A team at Google is focused on supporting Git, which is used by _Google’s Android and Chrome teams_ outside the main Google repository.
  * Important for these teams due to _external partner and open source collaborations_.
  * The Git community strongly suggests and prefers developers have _more and smaller repositories_.
    * Git-clone will copy all content to one’s local machine.
* Mercurial
  * An experimental effort
