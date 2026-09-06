---
title: "Sometimes the Right Attribution Is ‘Unresolved’"
date: 2026-09-05 15:40:00 -0500
summary: "Coming next: a methods note on causal feature assignment, calibrated abstention, and why scientific inference needs an explicit unresolved state."
tags: [causal-inference, neuroscience, attribution, methodology, uncertainty]
writing_type: "Research Note"
placeholder: true
citation: false
source_repo: "lrgthu/Stacking_GPU"
---

*Forthcoming research note*

Scientific attribution often forces a choice even when the evidence does not identify one.

The question is:

> **What would an attribution method look like if it were allowed to say that the answer is not identified?**

The motivating method uses randomized matched interventions and returns four states for each target-feature claim: `confirmed`, `excluded`, `unresolved`, or `not_identified`. It emits an ordered causal interval only when the entire support set is identified, contiguous, confirmed inside, and excluded outside. Otherwise it abstains.

The key idea is simple:

`forced attribution < calibrated abstention`

Known-truth calibration shows why this matters: noncontiguous causes, failed specificity, and inseparable redundancy should not be compressed into a clean-looking interval merely because the visualization expects one.

The finished note will focus on abstention as a positive scientific output rather than missing information—and on the difference between a method that always returns an explanation and one that can tell us when an explanation is not warranted.
