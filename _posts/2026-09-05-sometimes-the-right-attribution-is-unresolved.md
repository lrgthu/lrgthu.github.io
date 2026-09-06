---
title: "Sometimes the Right Attribution Is ‘Unresolved’"
date: 2026-09-05 15:40:00 -0500
summary: "A causal attribution method should be allowed to confirm, exclude, remain unresolved, or declare that the intervention did not identify the feature at all."
tags: [causal-inference, neural-encoding, attribution, neuroscience, methodology]
writing_type: "Research Note"
toc: true
citation: true
---

*Why interpretability needs an explicit abstention state*

Interpretability methods are usually designed to produce an answer.

A feature gets a score. A layer gets a color. A region gets an attribution. A ranking appears, and even if the differences are small, the visualization encourages us to read the ordering as if the underlying question had been resolved.

I have become increasingly interested in the opposite design principle:

> **What would an attribution method look like if “I cannot identify this effect” were a first-class scientific output?**

This question grew out of a problem I kept running into with neural encoding models. Correlated features can produce stable predictions while making observational attribution ambiguous. If two feature families are both sufficient to predict the response, more careful regression may quantify the ambiguity, but it does not create the intervention that would separate their causal roles.

So the next step is not another predictive attribution score.

It is a different experiment.

The method I have been developing assumes randomized, matched stimulus interventions designed to selectively change candidate features. Its output is deliberately not a continuous importance ranking. For every target–feature hypothesis, it returns one of four states:

`confirmed`

`excluded`

`unresolved`

`not_identified`

The last two are not failures of the interface.

They are part of the inference.

---

## From predictive attribution to an interventional question

Suppose an encoding analysis suggests that a neural response is associated with some intermediate visual feature family.

With observational natural images, several explanations can remain compatible with the same result because candidate features co-vary. A Conv-3-like feature may predict the response, but so may a correlated Conv-4 or semantic feature.

The causal question I actually want is:

> **If I selectively change candidate feature k while holding relevant nuisance structure fixed, does the neural response change by a practically meaningful amount?**

That is a potential-outcome question, not a regression-weight question.

For participant `i`, feature intervention `k`, and neural target `v`, imagine a paired contrast:

`Delta_(i,v,k) = response(edit_k) - response(control_k)`

The statistical problem is then to decide whether the participant-level effect is large enough, small enough, or too uncertain to classify relative to a preregistered practical threshold.

Crucially, there is another question before significance:

> Did the image edit actually isolate feature k?

If the intervention changes multiple candidate features inseparably, then the neural effect may be real while the **feature-specific causal attribution is not identified**.

That motivates the four-state output.

---

## Four answers instead of one score

The decision logic is intentionally asymmetric.

A feature is **confirmed** when the simultaneous lower confidence bound is above the frozen practical-effect threshold.

It is **excluded** when the simultaneous upper bound is at or below that threshold.

It is **unresolved** when the experiment is specific enough to test the feature, but uncertainty does not support either confirmation or exclusion.

It is **not identified** when the response-free stimulus-specificity gate says the intervention did not isolate the intended feature well enough for a feature-specific neural conclusion.

The important distinction is:

`unresolved != no effect`

and

`not_identified != unresolved`

“Unresolved” means the experiment asked the right causal question but did not answer it sharply enough.

“Not identified” means the intervention did not isolate the question in the first place.

I find this separation useful far beyond this particular method.

---

## Why an interval is much harder than a set of local effects

The candidate features are ordered, so it is tempting to summarize the result as one causal interval:

`feature a -> ... -> feature b`

But an interval claim contains much more structure than a list of local effects.

For an interval to be returned, the rule I froze requires:

1. every candidate edit to pass the specificity/identification gate;
2. every feature inside the interval to be confirmed;
3. every feature outside the interval to be excluded;
4. the confirmed support to be contiguous.

If any one of those conditions fails, the method abstains at interval level.

This is deliberately harsh.

A noncontiguous pattern such as:

`confirmed, excluded, confirmed`

should not be compressed into a smooth interval just because intervals are easier to plot.

Similarly, a pattern with one clearly confirmed feature and several unresolved neighbors should not magically acquire hard boundaries.

The plot should not be more certain than the experiment.

---

## Known-truth calibration before neural data

Before using the method on real neural responses, I wanted to know whether the decision rule behaved sensibly in scenarios where the truth was known.

The frozen calibration used eight simulated participants, a practical effect of `0.20`, noise standard deviation `0.12`, and **5,000 Monte Carlo replications** per scenario.

The scenarios included:

- a boundary null;
- one unique causal feature;
- contiguous causal features;
- correlated noise;
- noncontiguous causes;
- failed intervention specificity;
- inseparable feature redundancy;
- context-dependent effects.

Across these conditions, simultaneous coverage was roughly **0.92–0.93**.

In the boundary-null case, family-wise false confirmation was **0.0214**, below the frozen ceiling of 0.075.

For the unique, contiguous, correlated-noise, and context-dependent causal scenarios, the exact confirmed support was recovered in essentially all replications under the local decision rule.

The stricter interval output was, appropriately, harder:

| Scenario | Exact interval recovery |
| --- | ---: |
| Unique cause | 0.826 |
| Contiguous causes | 0.878 |
| Correlated noise | 0.956 |
| Context dependent | 0.808 |

The context-dependent case remains the limiting sensitivity.

That number is important precisely because it is not perfect. The method is not licensed to describe interval recovery as trivial or universally high-powered.

---

## The most important successes were abstentions

Two scenarios were designed to punish a method that always insists on an interval.

In the **noncontiguous-cause** condition, forcing an interval would be scientifically wrong because the true support is not contiguous.

The calibrated method returned a forced interval in **0.0%** of replications.

In the **failed-specificity** and **inseparable-redundancy** conditions, feature-specific causal attribution is not identified by construction.

The method classified those cases as `not_identified` in **100%** of replications and again returned no forced interval.

Those are the results I care about most.

A method that accurately estimates effects when the experiment is clean is useful.

A method that refuses to invent an answer when the experimental manipulation does not support one is, to me, much closer to what a scientific attribution procedure should be.

---

## Why “unresolved” is not a weak result

There is a cultural pressure in interpretability work to convert uncertainty into ranking.

If feature A has an estimated effect of 0.21 and feature B has 0.18, the table has an order. But if the simultaneous uncertainty intervals overlap the practical threshold, the order may not answer the causal question we care about.

An `unresolved` label preserves that distinction.

It says:

> this intervention was specific enough that a feature-level question was meaningful, but the current participant sample and noise level do not justify confirmation or exclusion.

That is actionable information.

It tells us what a larger experiment might resolve. It separates low power from failed specificity. It prevents a weak positive estimate from being narrated as a discovered mechanism.

And it makes power analysis more honest because the ambiguous cases remain visible rather than being absorbed into a continuous heatmap.

---

## Abstention is especially important when features are redundant

Redundancy is one of the hardest problems in neural representation analysis.

Suppose two feature edits cannot be made independently: changing A inevitably changes B. If neural responses change, the causal effect of the **joint edit** may be identified, but the individual contributions of A and B are not.

A predictive model may still assign weights.

A feature attribution method may still rank them.

But the intervention has not generated the contrast needed to decide between them.

That is exactly what `not_identified` is for.

The category prevents a subtle but common inference error:

`effect of intervention containing A`

therefore

`causal effect of A`

The second statement needs feature specificity that the first does not provide.

---

## The method is not yet a result about human cortex

This is an important boundary.

The known-truth calibration says that the decision procedure behaves as intended under the frozen simulation family. It does **not** establish a causal visual-feature map in human cortex.

That next step would require real selective image edits, response-free validation that the edits isolate the declared feature contrasts, randomized presentation, participant-level neural contrasts, and a frozen confirmation analysis.

The distinction is the same one I have been emphasizing elsewhere:

> a method can pass its calibration without the scientific hypothesis having been tested yet.

I want the calibration to earn permission for the neural experiment, not substitute for it.

---

## A broader principle for interpretability

The method-specific details may change, but I think the design principle generalizes.

Interpretability systems often have three conceptually different reasons not to produce a positive attribution:

1. **excluded** — evidence supports an effect below the relevant threshold;
2. **unresolved** — the estimand is identified, but the data are not decisive;
3. **not identified** — the experiment cannot isolate the estimand.

Collapsing all three into “low importance” destroys information.

Likewise, forcing all nonzero estimates into a ranked explanation confuses estimation with identification.

So the research note I want to carry forward is simple:

> **A trustworthy attribution method should be designed not only to discover effects, but to know when the experiment has not earned an attribution.**

Sometimes the right answer is confirmed.

Sometimes it is excluded.

And sometimes the most informative answer is **unresolved**.

---

## Related note

This methods direction follows directly from [*Stable Predictions, Unstable Explanations*](/blog/stable-predictions-unstable-explanations/), where correlated feature families supported robust neural prediction but much weaker interval-level attribution.
