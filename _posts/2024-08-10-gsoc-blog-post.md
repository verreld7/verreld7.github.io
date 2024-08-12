# Final Report - Google Summer of Code 2024


## Overview

## Report

### New class for Tropical Polynomials
Developed new element classes specifically designed to handle tropical polynomials, building on the existing tropical semiring implementation in SageMath. We've created a separate class for univariate and multivariate cases, along with a parent class that encapsulates the semiring structure. The univariate class handles single-variable polynomials, supporting operations like (tropical) addition, multiplication, and exponentiation (with scalar). Similarly, the multivariate class extends these functionalities to handle polynomials with multiple variables, which includes more specialized methods to address its geometric structure.

### Graph of Univariate Tropical Polynomials
We developed and implemented an algorithm to find the tropical roots of univariate tropical polynomials. These roots allow us to determine the tropical polynomial function, which is essentially a piecewise linear function. Using these result, we can then plot the graph of the tropical polynomial. Here are a few examples of the graph:

```python
print(f"test")
```

### Tropical Variety
A tropical variety here is defined as the corner locus of a tropical polynomial function, consisting of all points in `\RR^n` where the minimum (or maximum) of the function is attained at least twice. These are the points where the tropical polynomial changes behavior, creating a piecewise-linear structure. We developed and implemented an algorithm to compute the tropical variety for any multivariate tropical polynomial, with the ability to visualize these varieties in the cases of two and three variables.

#### Tropical Curve
Designed and implemented an algorithm to find tropical curves for tropical polynomials in two variables. For these polynomials, we can also plot their graphs, which consist of multiple flat surfaces in three dimensions. Some examples of these visualizations are shown as follows:

#### Tropical Surface


### Dual Subdivision
Dual subdivision is a subdivision of the Newton polygon of tropical polynomials. This subdivision is "dual" in the sense that each face of the subdivision corresponds to a vertex of the tropical curve, and each edge of the subdivision corresponds to an edge of the tropical curve. This analogy extends to tropical varieties in higher dimensions, where the dual subdivision similarly reflects the structure of the variety. Some examples of these are:

### Balanced Vectors

### TODO

### Final Thoughts




