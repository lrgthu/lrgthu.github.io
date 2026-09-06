---
title: "When Brain Supervision Helps for the Wrong Reason"
date: 2026-09-05 15:43:00 -0500
summary: "Coming next: a negative-result note on why a neural-supervision gain is not yet evidence that the gain is neural-specific."
tags: [neuroai, fmri, brain-alignment, falsification, methodology]
writing_type: "Research Note"
placeholder: true
citation: false
source_repo: "lrgthu/neuroresidual-ood"
---

*Forthcoming research note*

A brain-supervised adapter can outperform a simple baseline and still fail the claim we actually care about.

The question is:

> **Did correctly paired neural supervision teach the model something specifically supplied by the neural pairing?**

In the motivating experiment, a residual adapter trained from paired fMRI targets beat a direct nonlinear readout, but it did not beat the strongest matched non-neural target and was effectively indistinguishable from a within-category shuffled neural target. The preregistered pairing-specific gate therefore failed and the adapter claim was stopped before opening the sealed OOD evaluation.

This is the scientific distinction the note will emphasize:

`positive gain ≠ neural-specific gain`

A result inherits the meaning of the controls it defeats. If a matched non-neural or shuffled target explains the same improvement, the gain may be real while the proposed mechanism is wrong.

The finished note will focus on the logic of the falsification gate, why the negative result was informative, and how stopping a claim can reveal a better next question than rescuing it.
