---
title: "Stable Predictions, Unstable Explanations"
date: 2026-09-05 15:42:00 -0500
summary: "Why nearly identical neural predictions can coexist with much weaker confidence about which feature family deserves the explanation."
tags: [neural-encoding, attribution, variance-partitioning, uncertainty, neuroscience]
writing_type: "Research Note"
toc: true
citation: true
---

*The instability here is inferential, not numerical*

One of the most reassuring results in an encoding analysis is numerical stability.

Change the implementation, compress the features, rerun the estimator, and the held-out predictions barely move. That is exactly what we want from a robust analysis.

But I have become increasingly cautious about the next step:

> **If the predictions are stable, is the explanation attached to them equally stable?**

In a recent audit of structured visual encoding models, the answer was no.

The surprising part was not that one preprocessing choice produced a different map. In fact, two substantially different feature implementations produced almost identical predictions and strongly overlapping attribution distributions.

The problem appeared later, when a continuous uncertainty analysis asked whether those directional attributions really supported one clean interval of network layers.

Most did not.

This distinction matters because an explanation can look precise for a reason that has nothing to do with the underlying evidence being precise: **the analysis may have forced a hard answer from a soft, redundant problem.**

---

## The original problem: correlated features

Naturalistic stimuli do not come with orthogonal explanatory variables.

Features from adjacent layers of a deep network are correlated. Low-, mid-, and high-level visual properties coexist in the same image. An encoding model can therefore predict a neural response well even when multiple feature families contain overlapping predictive information.

This is the problem that motivated our earlier work on stacked regressions and structured variance partitioning: estimate predictive models robustly, then compare cumulative feature families so correlated predictors do not get interpreted as if each lived in isolation.

The method asks directional questions such as:

- how far through an ordered feature hierarchy must I go before a forward prefix reaches most of the full model's predictive performance?
- how far backward can I move from the other end while retaining most of that performance?

Historically, we summarized these paths with a fixed retained-performance threshold such as 95%.

That produces a pair of endpoints.

And endpoints are psychologically powerful. Once a voxel receives a lower and upper layer boundary, it is difficult not to see an interval.

---

## First, the good news: the predictions were extraordinarily stable

Before worrying about attribution, I wanted to make sure the estimator itself was not fragile.

One comparison replaced native visual features with a leakage-controlled nested PCA representation. The dimensionality reduction changed computation substantially, but the fold-averaged whole-cortex predictive scores were almost unchanged: the native-versus-PCA score correlation for an initial participant was about **0.999864**.

Across the full eight-participant audit, nested PCA was about **3.8× faster on average**, while its mean held-out score differed from the native representation by only about **0.000113**.

At the historical 95% threshold, native and PCA structured intervals also agreed for roughly **93.8%** of eligible targets.

If I had stopped there, the conclusion would have been comforting:

> the prediction is stable, the interval mostly reproduces, and the analysis appears robust to a major implementation change.

That statement is true.

It is also incomplete.

---

## A hard threshold hides the question we actually care about

The 95% endpoint answers:

> Where is the first crossing at this one chosen threshold?

But the scientific question is closer to:

> How much support is there for each possible boundary, and how sensitive is the answer to the retained-performance criterion?

Those are not the same thing.

So instead of selecting another “better” threshold, I treated the retained-performance level itself as a source of uncertainty. The analysis integrated boundary support across a frozen domain from 80% to 99% and returned distributions over possible lower and upper boundaries.

This changed the object from:

`one threshold -> one lower boundary + one upper boundary`

into:

`range of defensible thresholds -> support over boundaries`

The marginal distributions were not useless. Lower boundaries were often fairly concentrated. Across the eight participants, mean modal support for the lower boundary was about **0.834** in both native and nested-PCA arms.

Upper boundaries were broader: modal support was about **0.69–0.70**, and the average 80% support set spanned more than two layers.

Native and PCA still agreed strongly. Their mean support overlap was about **0.943** for lower boundaries and **0.907** for upper boundaries.

So preprocessing was not the main problem.

The uncertainty survived the robustness check.

---

## The interval itself was often the unsupported object

The more consequential result appeared when I asked whether the lower and upper boundary distributions jointly supported a logically ordered interval.

For an interval interpretation, the lower boundary should not lie after the upper boundary.

Across all cortex, the mean probability mass assigned to logically ordered intervals was only about **0.414–0.415**.

Only about **21.3%** of eligible targets placed at least 80% of their support on logically ordered intervals.

That means a large fraction of targets could support each directional summary marginally without supporting their combination as one coherent “this neural response lies between layers X and Y” statement.

The hard 95% interval made this easy to miss because it always returns an endpoint pair when the crossings exist.

A continuous support analysis is allowed to say something less satisfying:

> the two directional questions are informative, but their conjunction is not identified sharply enough to justify one interval.

That answer is scientifically weaker-looking and inferentially stronger.

---

## Reliability did not rescue the interval

A natural objection is that the incoherence may come from noisy voxels.

So I repeated the analysis in predeclared masks defined independently from the model outcomes: official NSD noise ceilings, pRF visual masks, and ROI families.

The result went in the opposite direction.

The high-reliability subsets were almost universally eligible for the adaptive analysis, but interval coherence became worse. In the all-cortex reference, about 21.3% of targets had logical interval mass at least 0.80. In the primary independent reliability and visual masks, that fraction fell to roughly **0.2–1.8%**, depending on the mask and feature arm.

No predeclared mask passed the frozen interval-release gate.

This matters because it rules out an easy story:

`low reliability -> unstable attribution`

The more plausible explanation is structural. Correlated feature families can each be predictively sufficient in different cumulative directions. A late suffix and an early prefix can both preserve much of the prediction even when there is no uniquely supported interval connecting them.

Prediction is stable because redundant features contain similar useful information.

Attribution is uncertain for the same reason.

---

## This is not a contradiction

At first, “stable predictions, unstable explanations” sounds paradoxical.

It is not.

Suppose two feature families, A and B, are highly correlated and both carry the information needed to predict a response. A flexible estimator can produce nearly identical held-out predictions whether it uses A, B, or a compressed basis spanning both.

That is excellent predictive robustness.

But if I then ask:

> Which family caused the predictive success?

or

> Where exactly in an ordered hierarchy does the represented information begin and end?

I have changed the question.

The same redundancy that stabilizes prediction can underdetermine attribution.

This is why I now distinguish three kinds of robustness:

1. **Predictive robustness** — do held-out predictions survive reasonable implementation changes?
2. **Attribution robustness** — do feature assignments survive those changes?
3. **Inferential coherence** — does the evidence support the explanatory object we want to report at all?

Passing the first does not guarantee the third.

---

## A fixed threshold is a decision rule, not a discovered fact

The historical 95% threshold is useful as a convention. It gives a reproducible endpoint and makes large maps easy to summarize.

What it should not do is acquire ontological status.

In the continuous analysis, the fixed-95 interval matched the modal support interval for only about **44–45%** of eligible targets. That does not mean the 95% result was numerically wrong. It means the endpoint chosen by that convention was often not the dominant summary once threshold uncertainty was made explicit.

This changed how I think about thresholds in interpretability work.

A threshold can be perfectly legitimate when it implements a decision we actually need to make. But if the scientific claim is that a boundary exists at a particular location, then sensitivity to the threshold belongs in the evidence, not in a footnote.

---

## The more honest output may be a distribution

I do not think the answer is to abandon structured attribution.

The marginal boundary distributions were informative. They were reproducible across native and nested-PCA features. Lower and upper directions showed different uncertainty profiles, which is itself useful information.

What I no longer want to do is collapse those distributions into a single interval unless a prespecified coherence criterion says the interval is supported.

The better output can therefore be:

`support over lower boundary`

and

`support over upper boundary`

without necessarily asserting:

`one identified interval`

This is a small methodological change, but it has a broader lesson:

> **Interpretability should be allowed to inherit the uncertainty of the predictive problem.**

A clean map is not automatically a better explanation than an uncertain one.

Sometimes the uncertainty is the result.

---

## Where this leads

The next step is not another threshold.

If correlated representations are predictively interchangeable, then observational encoding alone may not decide which feature family deserves causal credit. That requires a different kind of experiment: matched stimulus interventions that selectively manipulate candidate features and an inference procedure that is allowed to return **unresolved** when the manipulation does not identify the effect.

That is the direction I take in [*Sometimes the Right Attribution Is “Unresolved”*](/blog/sometimes-the-right-attribution-is-unresolved/).

The conceptual progression is simple:

`stable prediction`

`-> uncertain attribution`

`-> intervention`

`-> causal assignment or abstention`

The key is not to demand that every stage produce a sharper map than the last.

The key is to ask only for the resolution the evidence actually supports.

---

## Reference

- Lin, R., Naselaris, T., Kay, K., & Wehbe, L. (2024). [Stacked regressions and structured variance partitioning for interpretable brain maps](https://doi.org/10.1016/j.neuroimage.2024.120772). *NeuroImage, 298*, 120772.
