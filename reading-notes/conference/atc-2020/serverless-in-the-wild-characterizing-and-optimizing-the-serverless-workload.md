---
description: >-
  #serverless #Function_as_a_Service #FaaS #trace_analysis
  #reduce_code_start_invocations
---

# Serverless in the wild: Characterizing and optimizing the serverless workload

## Meta Info

Serverless in the wild: Characterizing and optimizing the serverless workload at a large cloud provider

Presented in [ATC 2020](https://www.usenix.org/conference/atc20/presentation/shahrad).

Trace: [https://github.com/Azure/AzurePublicDataset](https://github.com/Azure/AzurePublicDataset)

## Understanding the paper

### TL;DRs

This paper characterizes the entire production FaaS workload of _Azure Functions_.\
It also proposes a policy for reducing the number of cold start function executions.

### Background

* Function as a Service (FaaS): A software paradigm
  * Users simply upload the code of their functions to the cloud.
  * Functions get executed when “triggered” or “invoked” by events.
  * The cloud provider is responsible for _provisioning the needed resources_, _providing high function performance_, and _billing users for their actual function executions_.
* Function execution: Require the code (e.g., user code, language runtime libraries) in memory.
  * Warm start: The code is already in memory, so the function can be started quickly.
  * Cold start: The code has to be brought in from persistent storage.

### Some Observations

* Most functions are _invoked very infrequently_.
* The most popular functions are invoked _8 orders of magnitude_ more frequently than the least popular ones.
* Functions exhibit _a variety of triggers_, producing invocation patterns that are often _difficult to predict_.
* A 4x range of function memory usage and that 50% of functions run in less than 1 second.

### Existing Work

AWS and Azure use _a fixed “keep-alive” policy_ that retains the resources in memory for _10 and 20 minutes_ after a function execution, respectively.

### Proposed Policy

* To reduce the number of cold start invocations.
  * Use _a different keep-alive value for each user’s workload_, according to its actual invocation frequency and pattern.
  * Enable the provider to _pre-warm a function execution_ before its invocation happens (making it a warm start).

### Implementation

Implemented in simulation and for _Apache OpenWhisk FaaS platform_.
