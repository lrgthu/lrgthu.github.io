---
title: "Stable Predictions, Unstable Explanations"
date: 2026-09-05 15:42:00 -0500
summary: "Coming next: why highly reproducible neural prediction can coexist with fragile feature attribution and uncertain representational boundaries."
tags: [neuroscience, neural-encoding, attribution, variance-partitioning, methodology]
writing_type: "Research Note"
placeholder: true
citation: false
source_repo: "lrgthu/Stacking_GPU"
---

*Forthcoming research note*

Neural prediction can be extraordinarily stable while the explanation attached to that prediction is much less so.

The motivating question is:

> **When two analysis pipelines produce nearly identical held-out predictions, how much confidence should we place in the feature or layer attribution they imply?**

Across native and leakage-free PCA feature routes, predictive scores can agree almost perfectly. Yet mixture weights, thresholded layer intervals, and adaptive boundary support can remain substantially less stable. When a fixed 95% rule is replaced by a support distribution over possible boundaries, many apparently crisp intervals become uncertain or logically incoherent.

The distinction is:

`prediction stability ≠ attribution identification`

This note will use structured variance partitioning as a concrete case study in why an interpretable brain map may look more certain than the evidence supporting its labels.

The finished version will focus on one empirical contrast: predictions that barely move under a representation change versus explanations that do. The goal is not to reject attribution, but to argue that attribution itself needs calibration.
