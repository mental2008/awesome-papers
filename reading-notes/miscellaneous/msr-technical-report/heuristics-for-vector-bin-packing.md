# Heuristics for vector bin packing

## Metadata

URL: [https://www.microsoft.com/en-us/research/publication/heuristics-for-vector-bin-packing/](https://www.microsoft.com/en-us/research/publication/heuristics-for-vector-bin-packing/)

Authors: Rina Panigrahy, Kunal Talwar, Lincoln Uyeda, Udi Wieder (_MSR_)

## Understanding the paper

### Background

The resource allocation problem is actually a vector bin packing problem.

Generally, two types of methods can be used to solve this problem. One is based on First Fit Decreasing (FFD) heuristics, and the other is formulated as Integer Linear Program (ILP) (the disadvantage is that it cannot scale).

### Algorithms

#### Step

* Item-centric
  * Sort items in decreasing order of "size".
  * Place items sequentially in the first bin with sufficient capacity.
* Bin-centric
  * Open one bin at any time.
  * Place the "largest" item that fits the current bin.
  * Open a fresh bin if there is no feasible item.

#### FFD-based heuristics

* **FFDProd**

$$
w(I) = \prod_{i \le d} I_i
$$

* **FFDSum**

$$
w(I) = \sum_{i \le d} a_i I_i
$$

* **FFDAvgSum**

$$
a_i = \frac{1}{n} \sum_{l=1}^{n} I_i^l
$$

* **FFDExpSum**

$$
a_i = exp(\epsilon \cdot \frac{1}{n} \sum_{l=1}^{n} I_i^l)
$$

#### Heuristics that consider the item's demand `I` and the bin's remaining capacity `r(t)`

* **Dot Product**: maximize

$$
\sum_i a_i I_i^l r(t)_i
$$

* **Norm-based Greedy (L\_n)**: minimize

$$
\sum_i a_i (I_i^l - r(t)_i)^n
$$

* **Grasp and Bubblesearch**: choose the _k_-th "largest" item, where _k_ is chosen with probability proportional to (1-p)^k. Random multiple times and pick the best allocation.
