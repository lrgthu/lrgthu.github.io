---
title: "Sometimes the Right Attribution Is ‘Unresolved’"
date: 2026-09-05 15:40:00 -0500
summary: "Known-truth calibration of a four-state causal attribution rule that distinguishes confirmed, excluded, unresolved, and not-identified effects."
tags: [causal-inference, neural-encoding, attribution, neuroscience, methodology]
writing_type: "Research Note"
toc: true
citation: true
source_repo: "lrgthu/Stacking_GPU"
---

<section class="research-note-abstract" markdown="1">

## Abstract

This note describes a known-truth calibration of a causal feature-assignment procedure designed to **abstain when an intervention does not support a feature-specific conclusion**. The method consumes participant-level contrasts from randomized matched stimulus interventions and returns one of four states for each target–feature hypothesis: `confirmed`, `excluded`, `unresolved`, or `not_identified`. An ordered causal interval is reported only when every candidate edit is identified, confirmed support is contiguous, all interior features are confirmed, and all exterior features are excluded. In 5,000-replication simulations with eight participants, simultaneous coverage was approximately **0.92–0.93** and boundary-null family-wise false confirmation was **0.0214**. Exact interval recovery was 0.826 for a unique cause, 0.878 for contiguous causes, 0.956 under correlated noise, and 0.808 under context-dependent effects. Critically, the method returned no forced interval for noncontiguous causes and classified failed-specificity and inseparable-redundancy scenarios as `not_identified` in **100%** of replications. These are calibration results, not human-cortex causal findings.

</section>

<section class="research-note-key-result" markdown="1">

**Key result.** The procedure was evaluated not only on whether it recovered effects when identification was possible, but also on whether it refused to manufacture an interval when the intervention could not identify one.

</section>

## 1. Research question

Observational neural encoding can localize predictive information while leaving causal attribution ambiguous when candidate features are correlated. A causal feature claim requires an intervention that changes the candidate feature while preserving relevant nuisance structure.

The methodological question was:

> **Can an attribution procedure distinguish evidence for an effect, evidence against an effect, insufficient precision, and failure of feature-specific identification?**

These cases should not be collapsed into one continuous “importance” score.

## 2. Estimand and decision states

For participant `i`, neural target `v`, and feature intervention `k`, define a paired response contrast

`Delta_(i,v,k) = response(edit_k) - response(control_k)`.

The decision rule compares participant-level effects with a preregistered practical-effect threshold while controlling simultaneous uncertainty across the candidate feature family.

The four output states are:

| State | Interpretation |
| --- | --- |
| `confirmed` | simultaneous lower bound exceeds the practical-effect threshold |
| `excluded` | simultaneous upper bound is at or below the threshold |
| `unresolved` | the feature-specific estimand is identified, but uncertainty supports neither confirmation nor exclusion |
| `not_identified` | the response-free stimulus-specificity gate fails; the intervention does not isolate the feature well enough for a feature-specific claim |

The distinction between the last two states is central. `Unresolved` is a precision statement about an identified estimand. `Not_identified` is an experimental-design statement: the required causal contrast was not isolated.

## 3. Interval-release rule

Candidate features are ordered, but a causal interval is a stronger object than a collection of local feature decisions.

The frozen interval rule returns an ordered interval only if:

1. every candidate edit passes the feature-specificity gate;
2. all features inside the proposed interval are `confirmed`;
3. all features outside the interval are `excluded`;
4. confirmed support is contiguous.

Otherwise the method abstains at interval level.

Thus a noncontiguous pattern such as

`confirmed, excluded, confirmed`

cannot be compressed into a contiguous causal interval, and unresolved neighboring features do not acquire artificial hard boundaries.

## 4. Known-truth calibration

The frozen calibration used:

- **8 simulated participants**;
- practical effect: **0.20**;
- noise SD: **0.12**;
- **5,000 Monte Carlo replications** per scenario.

The scenario family included a boundary null, unique cause, contiguous causes, correlated noise, noncontiguous causes, failed specificity, inseparable redundancy, and context-dependent effects.

Simultaneous coverage was approximately **0.92–0.93** across scenarios. Boundary-null family-wise false confirmation was **0.0214**, below the frozen 0.075 ceiling.

For scenarios in which a contiguous interval was scientifically meaningful, exact interval recovery was:

| Scenario | Exact interval recovery |
| --- | ---: |
| Unique cause | 0.8256 |
| Contiguous causes | 0.8780 |
| Correlated noise | 0.9558 |
| Context dependent | 0.8078 |

The context-dependent scenario is the limiting sensitivity and remains part of the method's claim boundary.

## 5. Calibration of abstention

Three scenarios specifically tested whether the procedure would produce an explanation when the experimental contrast did not warrant one.

### Noncontiguous causes

The true support was noncontiguous, so a single ordered interval would be incorrect. The method returned a forced interval in **0.0%** of replications.

### Failed specificity

The stimulus intervention did not isolate the intended feature. The method returned `not_identified` in **100%** of replications and no forced interval.

### Inseparable redundancy

Two candidate features could not be manipulated independently. Feature-specific attribution was therefore not identified by construction. The method again returned `not_identified` in **100%** of replications and no forced interval.

These are not missing outputs. They are intended decisions under the frozen estimand.

## 6. Interpretation

The calibration supports a design principle for causal interpretability: **the output space should reflect distinct reasons that a positive attribution is unavailable**.

The following statements carry different information:

- the effect is below the practical threshold (`excluded`);
- the effect is estimable but insufficiently precise (`unresolved`);
- the feature-specific effect cannot be isolated by the intervention (`not_identified`).

Collapsing these cases into low scores or a forced ranking conflates estimation, power, and identification.

This is especially consequential under feature redundancy. An intervention that jointly changes A and B may identify the effect of the joint edit while leaving the individual effects of A and B unidentified. A predictive attribution algorithm can still assign weights, but the intervention has not generated the contrast needed for feature-specific causal credit.

## 7. Claim boundary

The current evidence supports:

- correctness of the four-state decision logic under the frozen simulation family;
- controlled false-confirmation behavior;
- calibrated recovery of several contiguous known-truth scenarios;
- correct abstention under noncontiguous, failed-specificity, and inseparable-redundancy scenarios.

It does **not** establish:

- any causal feature assignment in human cortex;
- that the interval rule has high power under arbitrary context dependence;
- that the simulated participant/noise model covers every relevant neural-data regime;
- that observational encoding weights become causal under this procedure.

A human neural application would require response-free validation of selective image edits, randomized presentation, participant-level neural contrasts, and a separately frozen confirmation analysis.

## 8. Reproducibility boundary

The method and calibration are maintained in a private research repository. The versioned record includes the frozen simulation specification, decision thresholds, 5,000-replication calibration outputs, machine-readable decision summaries, and the response-free stimulus-specificity logic. No human neural outcomes were accessed during this calibration stage.

This public note reports the publication-safe aggregate calibration and explicitly does not claim a cortical causal result.

## Related note

[*Stable Predictions, Unstable Explanations*](/blog/stable-predictions-unstable-explanations/) motivates the interventional step by showing that robust neural prediction can coexist with weak interval-level attribution under correlated feature families.
