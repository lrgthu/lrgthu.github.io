---
title: "When the Measurement Fails Before the Model Does"
date: 2026-09-05 15:41:00 -0500
summary: "Five instruction models could choose the larger quantity, yet their first-token logit margins failed as calibrated quantitative measurements."
tags: [llm, measurement, calibration, logits, methodology]
writing_type: "Research Note"
toc: true
citation: true
---

*Behavioral competence is not the same thing as a valid readout*

A language model can answer a question correctly while the internal quantity we use to explain that answer is badly measured.

That sounds obvious in the abstract. In practice, I find it surprisingly easy to forget.

Many experiments on language models need some scalar that looks more informative than the final text output: a confidence score, a preference strength, a latent probability, a degree of evidence. One convenient choice is a logit difference between two answer tokens.

If the model chooses A over B, perhaps

`logit(A) - logit(B)`

measures how strongly it prefers A.

Sometimes that is a useful engineering score.

But if I want to interpret it scientifically—as a calibrated readout of a quantitative belief—the bar should be higher.

I recently ran into this problem while trying to build a neutral measurement interface for a larger experiment about uncertainty and finite-capacity representations. Before asking anything about the hypothesis, I asked a simpler question:

> **Can first-token binary logit margins faithfully represent a numerical quantity that the model behaviorally understands?**

For the five instruction models I tested, the answer was no.

The important part is that several models still got the categorical answers essentially right.

The measurement failed before the scientific hypothesis was reached.

---

## The experiment I wanted to run

The larger project began from a question about how multimodal uncertainty is compressed before decision. I initially hoped to use open instruction-tuned LLMs as one model system.

But there was an obvious measurement problem.

Suppose the prompt presents two positive numbers and asks the model to choose according to their relative magnitude. If I later want to interpret an internal margin as a quantitative readout, I first need to know that the margin changes appropriately with the ratio of the numbers—and not mainly with arbitrary details of the interface.

So I froze a model-selection screen around a deliberately boring task.

The models had to do two things at once:

1. make the correct high-margin categorical choice;
2. produce a first-token binary margin that tracked the displayed numerical ratio and remained stable under nuisance transformations.

The nuisance transformations changed things that should not alter the underlying quantity:

- which answer alphabet was used;
- which candidate appeared first;
- equivalent mappings between quantities and answer tokens;
- common score rescalings introduced by the interface.

If the margin were a useful quantitative instrument, the scientific signal should dominate those nuisance effects.

---

## Five models, one frozen gate

I tested five open instruction models at frozen revisions:

- Qwen3-8B;
- Gemma 3 12B;
- Qwen3-14B;
- Llama 3.1 8B Instruct;
- Ministral 8B Instruct.

Across the full registered screen, the experiment used **5,760 binary forward passes** and produced **1,440 mapping-corrected measurements**.

The selection criteria were intentionally strict because the readout was going to support a later mechanistic claim. Among other requirements, I asked for:

- high-margin categorical accuracy of at least 0.98;
- correlation of the corrected margin with the ideal log-ratio of at least 0.95;
- near-invariance to answer alphabet and candidate order;
- nuisance-to-signal RMS ratios strictly below 0.25.

The point of a frozen gate is that I do not get to redefine “good enough” after I see which model comes closest.

---

## The models often knew the answer

Four of the five models achieved **1.000 high-margin categorical accuracy** in the frozen summary. Llama 3.1 8B was weaker at about **0.870**.

If the scientific question had been simply:

> Which number is larger?

then several models would have passed comfortably.

But the quantitative margins told a different story.

The correlation between the corrected first-token margin and the ideal numerical log-ratio was only:

| Model | Ratio correlation |
| --- | ---: |
| Qwen3-8B | 0.798 |
| Gemma 3 12B | 0.814 |
| Qwen3-14B | 0.811 |
| Llama 3.1 8B | 0.703 |
| Ministral 8B | 0.748 |

None reached the frozen 0.95 criterion.

More damagingly, nuisance effects were not small relative to the quantity I wanted to measure. The maximum nuisance-to-signal RMS ratios ranged from about **1.34** for Gemma to **4.47** for Qwen3-8B.

The allowed maximum was 0.25.

So even the least nuisance-sensitive candidate had interface effects larger than the scientific signal itself.

The terminal decision was therefore:

`NO-ELIGIBLE-MODEL`

No candidate advanced to the confirmation screen.

No posterior-compression experiment was run.

---

## Correct choice, distorted margin

This is the part of the result I find most useful.

A model can implement enough numerical competence to choose correctly while the local token-level score we read out is a poor measurement of that competence.

That means these two statements can both be true:

> The model knows which quantity is larger.

and

> The logit margin between two answer tokens is not a calibrated measure of the represented quantity.

There is no contradiction because the final answer is generated by an entire conditional distribution shaped by instruction tuning, tokenization, answer conventions, positional preferences, and the prompt context. A difference between two particular first-token logits is only one projection of that system.

The error is treating convenient observability as construct validity.

---

## This problem has close relatives in the LLM evaluation literature

The result did not appear in a vacuum.

Wang and colleagues showed that first-token multiple-choice probabilities can disagree substantially with the text answers produced by instruction-tuned models, with severe mismatches under prompt perturbations. Pezeshkpour and Hruschka documented large sensitivity to answer-option ordering in multiple-choice evaluation. Lovering and colleagues directly examined whether language-model logits are calibrated to probabilistic information in text and found systematic biases, including order preferences and overconcentration on one option.

Those results already give good reasons to be careful with token probabilities.

The distinction I wanted to isolate is slightly different.

My models did not need to fail behaviorally for the measurement to fail. In several cases, categorical choice was perfect on the high-margin items. The problem was that **the strength of the first-token margin did not behave like the quantitative variable I wanted it to represent**.

So this is not only:

`first token != final text`

It is also:

`correct categorical behavior != calibrated scalar readout`

That matters whenever logits are used as scientific measurements rather than as ranking scores.

---

## Bigger models did not rescue the instrument

Another temptation was to treat the failure as a small-model problem.

The candidate pool ranged from roughly 8B to 14B parameters. Moving from Qwen3-8B to Qwen3-14B did not qualitatively solve the issue. Both were categorically strong; both had ratio correlations around 0.8; both failed the nuisance criterion by large margins.

Gemma 3 12B was the best-behaved candidate under several invariance checks, yet its largest nuisance effect was still about **1.34 times the scientific signal RMS**.

This does not show that scaling can never help.

It shows that within this registered pool, **parameter count was not a substitute for validating the measurement interface**.

I think this is a useful general rule: if an instrument is not measuring the intended construct, a larger system behind the instrument does not automatically make the readout valid.

---

## Why I did not “fix the prompt” and continue

Once the gate failed, there were many plausible rescue ideas:

- use a different answer alphabet;
- read probabilities over full answer strings;
- change the prompt template;
- calibrate the token scores post hoc;
- use hidden-state probes;
- switch to another model family;
- design a continuous numerical output task instead.

Any of these might produce a better measurement.

But they are **new experiments**.

The frozen screen had a specific job: decide whether this particular first-token interface was adequate for the planned downstream inference. It was not.

Changing the instrument after looking at the failure and then describing the new result as confirmation would erase the point of the gate.

So the downstream hypothesis remained untested.

That distinction is important:

> **A failed measurement does not falsify the scientific hypothesis. It prevents the experiment from reaching it.**

I wish more negative results were allowed to stop at that level.

---

## Measurement validity should come before mechanistic interpretation

Mechanistic LLM research often moves quickly from an accessible signal to an interpretation:

`logit difference -> confidence`

`probe accuracy -> encoded variable`

`activation direction -> concept`

`attention weight -> causal importance`

Sometimes those interpretations are well supported. But each arrow contains a measurement model.

Before asking whether an internal quantity tracks a scientific variable, I now want to ask three simpler questions:

1. **Behavioral validity:** does the model perform the underlying task?
2. **Calibration:** does the proposed scalar vary appropriately with the quantity?
3. **Invariance:** does the scalar survive transformations that should leave the quantity unchanged?

Only then do I want to use the scalar to compare models or make mechanistic claims.

This ordering can feel conservative because it may terminate an exciting experiment before the interesting figure is produced.

That is exactly why I think it is useful.

---

## The result

The scientific result here is not that these language models cannot compare numbers. Several clearly could.

It is not that logits are always meaningless. They are indispensable computational objects and can be useful scores.

The result is narrower:

> **For the tested instruction models and frozen first-token binary interface, categorical numerical competence did not imply a quantitatively faithful, nuisance-stable logit margin.**

So I did not use that margin to infer anything about posterior geometry, uncertainty compression, or KL-like behavior.

The measurement failed before the model hypothesis did.

And that, in this experiment, was the right place to stop.

---

## References

- Wang, X., Ma, B., Hu, C., et al. (2024). [“My Answer is C”: First-Token Probabilities Do Not Match Text Answers in Instruction-Tuned Language Models](https://aclanthology.org/2024.findings-acl.441/). *Findings of ACL*.
- Pezeshkpour, P., & Hruschka, E. (2024). [Large Language Models Sensitivity to The Order of Options in Multiple-Choice Questions](https://aclanthology.org/2024.findings-naacl.130/). *Findings of NAACL*.
- Lovering, C., Krumdick, M., Lai, V. D., et al. (2024). [Are Language Model Logits Calibrated?](https://arxiv.org/abs/2410.16007).
