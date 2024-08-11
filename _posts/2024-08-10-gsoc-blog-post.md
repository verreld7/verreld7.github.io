# Implementation of Tropical Polynomials and its Corresponding Tropical Hypersurfaces - Google Summer of Code 2024

This summer, I worked on a Google Summer of Code (GSoC) project to implement a specialized class for working with tropical polynomials and its realted functionality in [SageMath](https://www.sagemath.org/). I would like to thank my mentors Travis Scrimshaw for helpful meetings and email exchanges. I would also like to thank Google for doing this event.

## Overview

## Report

### New class for Tropical Polynomials
Developed new element classes specifically designed to handle tropical polynomials, building on the existing tropical semiring implementation in SageMath. We've created a separate class for univariate and multivariate cases, along with a parent class that encapsulates the semiring structure. The univariate class handles single-variable polynomials, supporting operations like (tropical) addition, multiplication, and exponentiation (with scalar). Similarly, the multivariate class extends these functionalities to handle polynomials with multiple variables, which includes more specialized methods to address its geometric structure.

### Root and Graph of Tropical Polynomials
Designed and implemented an algorithm to find the tropical roots of univariate tropical polynomials. These roots allow us to determine the tropical polynomial function, which is essentially a piecewise linear function. Using this information, we can then plot the graph of the tropical polynomial, visualizing its structure as follows:

```python
print(f"test")
```

### Tropical Curve

### Dual Subdivision

### Balanced Vectors

### Tropical Surface

### Tropical Variety

### TODO

### Final Thoughts




