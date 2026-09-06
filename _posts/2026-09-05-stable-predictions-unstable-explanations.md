---
title: "Stable Predictions, Unstable Explanations"
date: 2026-09-05 15:42:00 -0500
summary: "Nearly identical neural predictions coexist with weakly identified layer intervals once attribution uncertainty is modeled explicitly."
tags: [neural-encoding, attribution, variance-partitioning, uncertainty, neuroscience]
writing_type: "Research Note"
toc: true
citation: true
source_repo: "lrgthu/Stacking_GPU"
---

<section class="research-note-abstract" markdown="1">

## Abstract

This note examines whether numerical robustness of neural encoding predictions implies equally robust feature attribution. In an eight-participant NSD audit, native visual features and leakage-controlled nested PCA produced nearly identical held-out predictions: nested PCA was **3.8× faster on average** while changing mean held-out score by only **+0.000113**, and fixed-95 structured intervals agreed for **93.8%** of eligible targets. A continuous boundary-support analysis, however, produced a different inferential picture. Mean lower-boundary modal support was approximately **0.834**, upper-boundary support **0.690–0.695**, and only **21.3%** of eligible targets assigned at least 80% probability mass to logically ordered intervals. Independent reliability and visual masks did not rescue coherence; the corresponding fraction fell to approximately **0.2–1.8%**, and no predeclared mask passed the interval-release gate. The instability is therefore not primarily numerical or preprocessing-driven. It arises because correlated representations can support robust prediction while leaving the explanatory interval weakly identified.

</section>

<section class="research-note-key-result" markdown="1">

**Key result.** Predictive robustness and inferential coherence separated sharply: two feature implementations gave almost identical neural predictions, yet most targets did not support a single logically ordered layer interval with high probability.

</section>

## 1. Research question

Structured variance partitioning summarizes how ordered feature families contribute to a predictive neural model. The historical analysis used a fixed retained-performance threshold, such as 95%, to define forward and backward endpoints.

The question here was:

> **Does a stable predictive solution imply that the layer interval inferred from cumulative feature paths is itself well identified?**

This distinction matters because adjacent deep-network layers are correlated. Redundancy can make predictions insensitive to the chosen basis while simultaneously making attribution ambiguous.

## 2. Predictive robustness audit

The first analysis compared native visual features with leakage-controlled nested PCA features under matched folds and estimators.

For the initial participant, fold-averaged whole-cortex predictive scores correlated at approximately **0.999864** between the two feature implementations.

Across eight participants:

| Quantity | Result |
| --- | ---: |
| Mean speedup from nested PCA | **3.803×** |
| Mean held-out score difference (PCA − native) | **+0.000113** |
| Fixed-95 interval agreement | **93.811%** |

These results show that the estimator and high-level predictive conclusions were numerically stable to a substantial change in feature dimensionality and computation.

## 3. Continuous boundary support

A fixed 95% threshold answers a decision-rule question: where does each cumulative path first cross one chosen retained-performance level?

To evaluate uncertainty in the boundary itself, the follow-up analysis integrated first-crossing support over a frozen retained-performance domain from **80% to 99%**. The output was a distribution over possible lower and upper boundaries rather than one hard endpoint pair.

Across eight participants:

| Quantity | Native | Nested PCA |
| --- | ---: | ---: |
| Lower-boundary modal support | 0.8344 | 0.8338 |
| Upper-boundary modal support | 0.6947 | 0.6897 |
| Lower 80% support width (layers) | 1.678 | 1.682 |
| Upper 80% support width (layers) | 2.216 | 2.235 |
| Lower support overlap across arms | \- | **0.943** |
| Upper support overlap across arms | \- | **0.907** |

The marginal boundary distributions were therefore informative and highly reproducible across feature implementations. The uncertainty was not a PCA artifact.

## 4. Joint interval coherence

An interval interpretation requires the lower boundary to be no later than the upper boundary. The continuous analysis therefore measured the joint probability mass assigned to logically ordered endpoint pairs.

| Quantity | Native | Nested PCA |
| --- | ---: | ---: |
| Mean logical interval mass | 0.4146 | 0.4143 |
| Targets with logical mass ≥ 0.80 | **21.28%** | **21.25%** |
| Fixed-95 interval = support-mode interval | 44.91% | 44.36% |

Thus, lower and upper directional summaries could each be informative while their conjunction failed to support one coherent layer interval for most targets.

The fixed threshold did not produce a numerically incorrect result. It produced a **hard decision from a soft support surface**.

## 5. Reliability and ROI stratification

A natural explanation for low interval coherence is measurement noise. This hypothesis was tested prospectively with masks defined independently of model outcomes using official NSD noise ceilings, pRF labels, and ROI families.

The result was opposite to the rescue hypothesis.

| Confirmatory mask | Native: logical mass ≥ 0.80 | Nested PCA |
| --- | ---: | ---: |
| All cortex | 21.3% | 21.3% |
| Noise ceiling ≥ 10 | 1.8% | 1.7% |
| Noise ceiling ≥ 20 | 0.4% | 0.3% |
| Noise ceiling ≥ 20 + pRF | 0.3% | 0.2% |
| pRF visual union | 1.3% | 1.2% |

No predeclared independent mask passed the interval-release gate in both feature arms.

The low coherence therefore cannot be attributed mainly to near-zero-reliability targets. The more consistent interpretation is structural redundancy: an early forward prefix and a late backward suffix can each remain predictively sufficient without defining a unique interval between them.

## 6. Interpretation

The analysis separates three properties that are often conflated:

1. **Predictive robustness:** held-out predictions survive reasonable implementation changes.
2. **Attribution robustness:** directional feature-support distributions survive those changes.
3. **Inferential coherence:** the combined evidence supports the explanatory object being reported.

The first two properties were strong. The third was weak for interval-level claims.

This is not paradoxical. Correlated feature families can stabilize prediction because several representations carry similar useful information. The same redundancy can make causal or hierarchical attribution underdetermined.

The appropriate output is therefore not necessarily a single interval. Marginal support over lower and upper boundaries can remain reportable even when a joint interval is not.

## 7. Claim boundary

The evidence supports:

- high predictive agreement between native and nested-PCA feature implementations;
- reproducible marginal boundary-support distributions;
- substantial uncertainty in upper boundaries;
- rejection of unconditional interval-level claims under the frozen coherence rule.

It does **not** establish:

- that the historical fixed-95 computation was numerically incorrect;
- that any named deep-network layer is implemented by a neural population;
- causal responsibility of a feature family;
- that predictive redundancy alone explains every attribution ambiguity.

The next evidential step requires interventions designed to separate correlated candidate features, with an inference rule that can explicitly abstain when feature-specific effects are not identified.

## 8. Reproducibility boundary

The underlying analysis is maintained in a private research repository on the `method/causal-feature-assignment` branch. The public-safe record includes the aggregate continuous boundary-support results, reliability/ROI stratification, frozen thresholds, calibration identities, and checksum-bound summaries. Protected target-level attribution arrays and participant-level neural data remain outside the public website.

Participants, rather than voxels or folds, are treated as biological replication units. Threshold-support policies and confirmatory masks were frozen before the corresponding NSD outcome summaries were inspected.

## Reference

- Lin, R., Naselaris, T., Kay, K., & Wehbe, L. (2024). [Stacked regressions and structured variance partitioning for interpretable brain maps](https://doi.org/10.1016/j.neuroimage.2024.120772). *NeuroImage, 298*, 120772.
