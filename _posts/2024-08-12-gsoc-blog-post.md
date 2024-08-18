# Final Report | GSoC 2024 @SageMath


## Overview
Google Summer of Code (GSoC) project: [Implementation of Tropical Polynomials and its Corresponding Tropical Hypersurfaces](https://summerofcode.withgoogle.com/myprojects/details/j1yAryTd). 

Description

## Work Report

### New class for Tropical Polynomials
Developed new element classes specifically designed to handle tropical polynomials, building on the existing tropical semiring implementation in SageMath. We've created a separate class for univariate and multivariate cases, along with a parent class that encapsulates the semiring structure. These classes support operations like (tropical) addition, multiplication, and exponentiation (with scalar).

### Graph of Univariate Tropical Polynomials
We developed and implemented an algorithm to find the tropical roots of univariate tropical polynomials. These roots allow us to determine the tropical polynomial function, which is essentially a piecewise linear function. Using these result, we can then plot the graph of the tropical polynomial. Here are a few examples of the graph:

<div align="center">
  <img src="https://github.com/verreld7/verreld7.github.io/blob/main/images/polyplot1.png" alt="Your image description" width="50%"/>
  <p>Figure 1: $3x^3 + 1x^2 + 2x + 4$ (max-plus algebra) </p>
</div>

<div align="center">
  <img src="https://github.com/verreld7/verreld7.github.io/blob/main/images/polyplot2.png" alt="Your image description" width="50%"/>
  <p>Figure 2: $3x^3 + 1x^2 + 2x + 4$ (min-plus algebra) </p>
</div>

[Image](graphic.html)

<iframe src="images/graphic.html" style="border:none; width:100%; height:500px;"></iframe>


```python
print(f"test")
```

### Tropical Variety
A tropical variety is defined as the corner locus of a tropical polynomial function, consisting of all points in `\RR^n` where the minimum (or maximum) of the function is attained at least twice. We developed and implemented an algorithm to compute the tropical variety for any multivariate tropical polynomial, with the ability to visualize these varieties in the cases of two and three variables. For dimensions greater than three, the result is also referred to as a tropical hypersurface.

#### Tropical Curve
A tropical curve is a piecewise linear structure in `R^2` which can be seen as "tropical roots" of tropical polynomials in two variables.  For these polynomials, we can also plot their graphs, which consist of multiple surfaces in three dimensions. Some examples of these are:

#### Tropical Surface
A tropical surface is a piecewise linear structure in `R^2` which can be seen as "tropical roots" of tropical polynomials in three variables.  The tropical surface consists of planar regions and facets, referred to as cells. Some examples of these are:

### Dual Subdivision
Dual subdivision is a subdivision of the Newton polygon of tropical polynomials. This subdivision is "dual" in the sense that each face of the subdivision corresponds to a vertex of the tropical curve, and each edge of the subdivision corresponds to an edge of the tropical curve. This analogy extends to tropical varieties in higher dimensions, where the dual subdivision similarly reflects the structure of the variety. Some examples of these are:

### Balanced Vectors
As seen before, a tropical curve consists of line segments and half-lines, referred to as edges. These edges meet at a vertices, where the balancing condition is satisfied. This balancing condition ensures that the sum of the outgoing slopes at each vertex is zero, reflecting the equilibrium.

### TODO
***

### Final Thoughts
***



