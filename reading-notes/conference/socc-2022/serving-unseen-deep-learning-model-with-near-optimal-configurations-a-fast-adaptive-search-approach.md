# Serving unseen deep learning model with near-optimal configurations: A fast adaptive search approach

## Meta Info

Presented in [SoCC 2022](https://doi.org/10.1145/3542929.3563485).

Authors: Yuewen Wu, Heng Wu, Diaohan Luo, Yuanjia Xu, Yi Hu, Wenbo Zhang, Hua Zhong, _Institute of Software, Chinese Academy of Sciences_

Code: [https://github.com/dos-lab/Falcon](https://github.com/dos-lab/Falcon)

## Understanding the paper

## TL;DRs

This paper presents **Falcon**, a novel _configuration recommender system_ that can quickly adapt to unseen DL models.

### Existing Problem

There exists a _cold start problem_ when searching a configuration of DL models.

### Key Insights

* Some _Key Operators (KOPs)_ can be used to estimate the performance of DL models.
* The resource sensitivity can be represented by four typical _Key Operator Resource Curves (KOP-RCs)_, including Slope, Convex, Concave, and Plane.

### Solutions

* A DL model can be characterized by its KOPs and corresponding KOP-RCs.
* Use a combination of _Monte Carlo Tree Search and Bayesian Optimization (MCTS-BO)_ to search the configurations.

### Evaluation

* Compared to Morphling.
