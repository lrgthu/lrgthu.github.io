---
title: "When Prediction Changes What It Predicts"
date: 2026-09-05 15:45:00 -0500
summary: "Coming next: a small research note on distinguishing preference discovery from preference formation when recommender actions change the user state they are trying to predict."
tags: [recommender-systems, user-modeling, causal-inference, performative-prediction, ai]
series: adaptive-intelligence
series_order: 4
placeholder: true
---

*Forthcoming research note*

The first three essays in this series argue for a change in viewpoint: choose the right system boundary, compare causal organization rather than representation alone, and treat recommendation as part of the dynamics of the user it models.

The next question is deliberately smaller:

> **What result becomes different once we take that viewpoint seriously?**

The case I want to use is recommendation and preference formation.

A user listens to more jazz after receiving more jazz recommendations. That observation alone does not tell us whether the system discovered a pre-existing preference, increased opportunity, created familiarity, reinforced a habit, or changed the user's valuation of jazz.

In shorthand:

`observed behavior ≠ identified preference mechanism`

and

`future user state = f(current user state, recommendation policy, context)`

The research problem is to find interventions that can distinguish **preference discovery** from **preference formation** rather than merely fit both with the same dynamic model.

The minimal case study I have in mind combines randomized recommendation exposure, evaluation on a common content set, delayed re-evaluation, and carefully interpreted self-report. The goal is not to recover a metaphysically "true preference." It is to ask which competing causal explanations remain compatible with the data after intervention.

If this perspective is useful, it should do at least one of three things: predict something a passive user model does not, reject an explanation that observational logs alone would accept, or motivate an experiment we otherwise would not run.

That is the standard I want the next piece to meet.
