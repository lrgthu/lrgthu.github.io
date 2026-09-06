---
title: "When Brain Supervision Helps for the Wrong Reason"
date: 2026-09-05 15:43:00 -0500
summary: "A positive gain from neural supervision is not yet evidence that the gain came from the correctly paired brain signal."
tags: [neuroai, neural-supervision, fmri, representation-learning, falsification]
writing_type: "Research Note"
toc: true
citation: true
---

*What a failed pairing-specificity test taught me about brain-aligned learning*

There is an appealing idea in NeuroAI: if we train an artificial representation using neural data, and the resulting model predicts brain responses better, perhaps the brain has taught the model something that ordinary supervision missed.

I still think this is a promising direction. Recent work has shown that optimizing visual models with human EEG or fMRI can improve measured model–brain alignment, and neural supervision is increasingly being used to reshape learned feature spaces.

But a positive gain leaves a harder question unanswered:

> **Did the gain come from the correctly paired brain signal, or would another target have taught the model something equally useful?**

I recently ran a falsification-first experiment built around that question. The result was negative in exactly the way I hoped the experiment could detect.

The brain-supervised model improved over a conventional nonlinear baseline.

It still failed the neural-specific claim.

---

## A positive result can support more than one explanation

Suppose we start with a strong frozen vision model, fit an ordinary encoding model to fMRI, and examine the residual neural structure that remains predictable across repetitions and people.

A natural next step is to train a small adapter on that residual signal.

If the adapter then improves neural prediction, one tempting interpretation is:

`paired brain supervision -> brain-specific representational improvement`

But the same observation could also arise from less interesting mechanisms:

- the adapter simply receives a useful regularization target;
- the target preserves category or stimulus structure that is available without the brain;
- a shuffled neural target still contains enough coarse structure to help;
- the adapter has more useful capacity than the baseline readout;
- the improvement is specific to the training participants and does not transfer.

So the real experiment is not:

> Does brain supervision help?

It is:

> **What does brain supervision beat when everything except the information content of the target is matched?**

That changes the control group from an afterthought into the center of the claim.

---

## The test I wanted the model to survive

The experiment used eight leave-one-participant-out folds. The adapter never trained on the held-out participant's neural responses.

For each fold, the central comparison was between a correctly paired residual-brain target and several matched alternatives, including:

- the strongest non-neural target available under the same image and capacity budget;
- a within-category shuffled neural target;
- a direct nonlinear readout with comparable flexibility.

The goal was not merely to show that the adapter could fit something useful. It was to isolate whether **correct pairing to brain residuals** supplied the useful information.

That is an important distinction. If a paired neural target and a shuffled neural target perform similarly, then whatever the model learned cannot be confidently attributed to stimulus-specific brain pairing. If a non-neural target performs better, then a neural-specific story becomes even harder to sustain.

The experiment was preregistered around that logic. The decisive controls were specified before the held-out results were opened.

---

## The result looked positive until the right comparison was made

One comparison passed cleanly.

The paired brain-residual adapter outperformed the direct nonlinear readout in **all 8 participants**, with a mean advantage of about **0.0683** under the frozen metric.

If that had been the only control, I could have written a very satisfying result:

> neural supervision improves the model beyond a flexible nonlinear baseline.

But two more specific comparisons failed.

Against the best matched non-neural target, the paired brain-residual model was worse in **all 8 participants**, with a mean difference of about **−0.0221**.

Against the within-category shuffled neural target, it was effectively tied: only **1 of 8** participant contrasts was positive, and the mean difference was about **−0.00073**.

The independently defined recovered fraction of the available residual gap was also essentially zero relative to the preregistered practical threshold.

So the pattern was:

`paired brain target > nonlinear readout`

but

`paired brain target < best matched non-neural target`

and

`paired brain target ≈ shuffled brain target`

This is not evidence that neural supervision did nothing.

It is evidence that the improvement was **not specific enough to support the claim I wanted to make**.

---

## Why the shuffled target matters

Shuffling controls are often treated as generic sanity checks. Here the exact form matters.

A completely random target would destroy almost every useful regularity and would be too easy to beat. The more diagnostic question is whether a target can preserve broad category or distributional structure while breaking the stimulus-specific neural pairing that the scientific claim depends on.

That is why the within-category shuffled target was important.

If correctly paired neural residuals contain a transferable stimulus-specific teaching signal, then preserving coarse structure while breaking the exact pairings should hurt.

It did not hurt enough.

The control therefore does not say that the neural target is meaningless. It says that the experiment did not isolate **what about the neural target mattered**.

That is the level at which I now want neural-supervision claims to be evaluated.

---

## This is not an argument against brain alignment

There is now a growing literature showing that neural data can be used to reshape artificial representations. ReAlnet, for example, has used human EEG to train visual models toward more brain-like representational structure; related work has extended neural alignment to fMRI, and newer approaches explicitly optimize model representations toward human conceptual structure.

Those results ask important questions about whether neural supervision can change an artificial representation in useful directions.

The question here is complementary:

> **When a neural target improves performance, how much of the gain requires the target to be the correctly paired neural signal?**

That is a specificity question, not a contradiction of the broader alignment program.

In fact, as neural supervision becomes more effective, I think the specificity question becomes more important. A sufficiently powerful training objective can extract useful structure from many correlated targets. Higher performance makes controls more necessary, not less.

---

## The part of the experiment I am happiest about is what did not happen next

The project had a reserved out-of-distribution neural evaluation that could have been opened after the in-distribution gate.

I did not open it.

The preregistered logic was that OOD evaluation would test the transfer of a **pairing-specific neural signal**. Once the pairing-specificity gate failed, the OOD branch no longer answered the original question.

It would have been easy to continue anyway:

- try another rank;
- alter the adapter;
- change the target construction;
- add more controls after looking at the result;
- open the OOD data and search for a subgroup that worked.

Any of those could be a legitimate new experiment.

None would rescue the failed one.

So the branch stopped.

I increasingly think this is an underappreciated part of experimental design: a good gate should be capable not only of authorizing the next analysis, but of making the next analysis scientifically unnecessary.

---

## What the negative result does establish

The result leaves at least two useful facts standing.

First, there is repeat-reliable, cross-participant residual neural structure beyond the frozen baseline model. The failure of this adapter does not make that residual disappear.

Second, the tested adapter and objective can learn something that a direct nonlinear readout misses. What they did **not** demonstrate is that the extra information was supplied specifically by the correct neural pairing.

That points to a different next question:

> **What is the reliable residual, before we decide how to learn from it?**

Instead of immediately fitting a more powerful rescue adapter, the next useful move is to characterize which residual components reproduce across models and participants, ask whether they reflect missing representation or missing routing of existing representations, and only then design interventions that force those explanations apart.

That is slower than saying “brain supervision helped.”

It is also more informative.

---

## The standard I want to use going forward

When I see a model improve after neural supervision, I now want to ask four questions in order:

1. **Gain:** does the neural-supervised model improve over a strong baseline?
2. **Specificity:** does correct neural pairing beat matched non-neural and shuffled-neural controls?
3. **Transfer:** does the effect survive held-out people, stimuli, or tasks without retuning?
4. **Mechanism:** can an intervention distinguish the proposed brain-derived feature from plausible alternatives?

The first question is valuable.

But it is only the first question.

The result of this experiment is therefore not “brain supervision does not work.” It is more precise:

> **A neural-supervised gain is not yet a neural-specific gain.**

That difference is exactly what the controls were designed to reveal.

---

## References

- Lu, Z., Wang, Y., & Golomb, J. D. (2024). [Achieving more human brain-like vision via human EEG representational alignment](https://pubmed.ncbi.nlm.nih.gov/38351926/).
- [Teaching CORnet human fMRI representations for enhanced model-brain alignment](https://pubmed.ncbi.nlm.nih.gov/40242427/) (2025).
- [Human-like cognitive generalization for large models via mental representation-guided supervision](https://www.nature.com/articles/s41467-026-71267-5) (2026).
