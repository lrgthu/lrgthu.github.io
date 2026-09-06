---
title: "When Brain Supervision Helps for the Wrong Reason"
date: 2026-09-05 15:43:00 -0500
summary: "A positive gain from neural supervision failed the pairing-specificity test against matched non-neural and shuffled-neural controls."
tags: [neuroai, neural-supervision, fmri, representation-learning, falsification]
writing_type: "Research Note"
toc: true
citation: true
source_repo: "lrgthu/neuroresidual-ood"
---

<section class="research-note-abstract" markdown="1">

## Abstract

This note tests whether a gain from fMRI-supervised representation learning is **specific to correctly paired neural information**. A residual adapter was evaluated in eight leave-one-participant-out folds against three preregistered comparators: the strongest matched non-neural target, a within-category shuffled neural target, and a direct nonlinear readout. The paired neural adapter outperformed the nonlinear readout in all eight participants (mean difference **+0.0683**), but it was worse than the best matched non-neural target in all eight participants (mean **−0.0221**) and was effectively indistinguishable from the pairing-broken neural control (mean **−0.00073**, 1/8 positive participants). The frozen decision was therefore `stop_adapter_claim`; the reserved OOD neural evaluation remained sealed. The result does not show that neural supervision is ineffective. It shows that **a neural-supervised gain is not sufficient evidence for a neural-specific gain unless correct neural pairing defeats matched alternatives.**

</section>

<section class="research-note-key-result" markdown="1">

**Key result.** The model passed a generic gain test and failed the claim-specific controls. The positive result survived only at the level of “the adapter learned something useful,” not “correctly paired brain residuals supplied the useful information.”

</section>

## 1. Research question

The tested claim was:

> **Does correctly paired fMRI residual supervision teach a shared visual adapter information that is not reproduced by matched non-neural targets, pairing-broken neural targets, or a more flexible readout?**

This is stronger than asking whether neural supervision improves prediction. A positive gain can arise from target structure, regularization, category information, added trainable capacity, or participant-specific fitting without requiring stimulus-specific neural pairing.

The identifying contrast is therefore between **correct pairing** and controls that preserve as much nuisance structure as possible while removing the information named in the claim.

## 2. Experimental design

The analysis used eight leave-one-participant-out folds. The held-out participant's neural responses were not used to train the shared adapter.

For each fold, the correctly paired residual-neural target was compared against:

1. **best matched non-neural target** — same image and capacity budget without neural supervision;
2. **within-category shuffled neural target** — preserves broad neural/category structure while breaking stimulus-specific pairing;
3. **direct nonlinear readout** — a flexible baseline for whether the adapter learns signal beyond a conventional decoder.

The candidate grid contained 36 adapter configurations per fold, for **288 completed candidates**. The decisive controls and stopping rule were frozen before the held-out outcomes were released.

The reserved NSD-synthetic evaluation was designated as a downstream OOD test and could be opened only if the pairing-specificity gate passed.

## 3. Primary results

The three central contrasts gave different answers:

| Contrast | Mean difference | Positive participants | Decision |
| --- | ---: | ---: | --- |
| Paired neural − direct nonlinear readout | **+0.0683** | **8/8** | pass |
| Paired neural − best matched non-neural | **−0.0221** | **0/8** | fail |
| Paired neural − within-category shuffled neural | **−0.00073** | **1/8** | fail |

The median recovered fraction of the independently defined recoverable residual gap was approximately **0.0124%**, below the frozen **10%** practical requirement.

The pattern can be summarized as:

`paired brain target > nonlinear readout`

but

`paired brain target < best matched non-neural target`

and

`paired brain target ≈ pairing-broken neural target`.

The terminal decision was therefore:

`stop_adapter_claim`

No rescue adapter, OOD neural evaluation, or post-result threshold change was authorized.

## 4. Why the shuffled control is diagnostic

A fully random target would remove nearly all useful structure and would provide a weak specificity test. The within-category shuffle preserves broad distributional and category-related structure while destroying the exact stimulus–brain correspondence required by the neural-specific hypothesis.

If correctly paired residual fMRI supplied a transferable stimulus-specific teaching signal, breaking those pairings should have produced a measurable loss relative to the paired target.

That separation was not observed.

The result therefore does not imply that the shuffled neural target is meaningless. It implies that the experiment did not identify **which component of the neural target produced the gain**.

## 5. Interpretation

Two findings remain supported.

First, the paired adapter learned signal beyond the direct nonlinear baseline. The positive +0.0683 contrast is real under the frozen evaluation.

Second, that gain was **not pairing-specific** under the decisive controls. The best non-neural target was better in every participant, and the pairing-broken neural target produced essentially the same outcome.

These observations rule out the stronger interpretation:

`prediction gain -> neural-specific representational improvement`.

They do not rule out the weaker statement:

`the tested adapter/objective can exploit residual structure not captured by the direct nonlinear readout`.

The next admissible scientific question is therefore not how to rescue the adapter, but how to characterize the repeat-reliable residual itself: which components reproduce across models and participants, and whether they reflect missing representation or missing content-dependent routing.

## 6. Claim boundary

The experiment supports:

- a positive paired-neural gain over the direct nonlinear readout;
- failure of the preregistered pairing-specificity claim;
- stopping the adapter-to-OOD branch under the frozen decision rule.

It does **not** support:

- the claim that neural supervision is generally ineffective;
- the claim that the residual contains no repeat-reliable or cross-participant structure;
- a causal assignment of any residual feature;
- an OOD neural-transfer conclusion, because the reserved OOD responses remained sealed;
- a conclusion about other adapters, target constructions, or neural modalities not tested here.

## 7. Reproducibility

The research record is maintained in [`lrgthu/neuroresidual-ood`](https://github.com/lrgthu/neuroresidual-ood). The frozen R1 production used exact source commit `82b8450b54a4914c05e17f276d6204e7d83a4a7e`. All eight leave-one-participant-out folds and 288 candidates completed; held-out evaluations were opened once per participant; lineage and completion audits passed; NSD-synthetic responses remained sealed.

The public aggregate and stop decision are documented in `docs/R1_RESULTS.md`. Participant-level neural data, protected residuals, and owner-only artifacts remain outside the public repository.

## References

- Lu, Z., Wang, Y., & Golomb, J. D. (2024). [Achieving more human brain-like vision via human EEG representational alignment](https://pubmed.ncbi.nlm.nih.gov/38351926/).
- [Teaching CORnet human fMRI representations for enhanced model-brain alignment](https://pubmed.ncbi.nlm.nih.gov/40242427/) (2025).
- [Human-like cognitive generalization for large models via mental representation-guided supervision](https://www.nature.com/articles/s41467-026-71267-5) (2026).
