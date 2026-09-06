---
title: "When the Measurement Fails Before the Model Does"
date: 2026-09-05 15:41:00 -0500
summary: "Coming next: why coarse behavioral competence does not guarantee that a model's logit margin is a valid quantitative measurement of internal belief."
tags: [llm, measurement, uncertainty, methodology, model-evaluation]
writing_type: "Research Note"
placeholder: true
citation: false
source_repo: "lrgthu/distributions-to-decisions"
---

*Forthcoming research note*

A model can answer a numerical comparison correctly while the quantity we extract from it is still unusable as a scientific measurement.

The question is:

> **What has to be true before a model score can be treated as a calibrated internal variable?**

In the motivating experiment, several instruction models achieved near-perfect coarse binary-choice accuracy, yet their first-token logit margins were strongly distorted by answer order, answer alphabet, and other nuisance choices. Every preregistered candidate failed the quantitative-interface gate, so no posterior or hidden-state hypothesis was tested.

The key distinction is:

`behavioral competence ≠ measurement validity`

The scientific failure occurred before the downstream theory could be evaluated. Changing the prompt, readout, tokenizer, or scoring rule afterward would therefore be a new experiment, not a rescue of the original one.

The finished note will argue that mechanistic and uncertainty studies need to validate the measurement interface itself before interpreting what it says about the model.
