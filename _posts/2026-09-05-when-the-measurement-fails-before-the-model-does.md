---
title: "When the Measurement Fails Before the Model Does"
date: 2026-09-05 15:41:00 -0500
summary: "Five instruction models could choose the larger quantity, yet their first-token margins failed as calibrated quantitative measurements."
tags: [llm, measurement, calibration, logits, methodology]
writing_type: "Research Note"
toc: true
citation: true
source_repo: "lrgthu/distributions-to-decisions"
---

<section class="research-note-abstract" markdown="1">

## Abstract

This note evaluates whether a first-token binary logit margin can serve as a calibrated quantitative readout when an instruction-tuned language model compares two positive numbers. Five open models (8B–14B parameters) were tested under a frozen selection protocol comprising **5,760 binary forward passes** and **1,440 mapping-corrected measurements**. Four models achieved perfect high-margin categorical accuracy, yet none met the preregistered quantitative readout criteria. Correlation between corrected margin and ideal log-ratio ranged from **0.703 to 0.814** against a required 0.95, while maximum nuisance-to-signal RMS ratios ranged from **1.344 to 4.471** against a required value below 0.25. The terminal decision was `NO-ELIGIBLE-MODEL`; no downstream posterior-compression experiment was run. The result is a measurement conclusion, not a capability conclusion: **correct categorical behavior did not imply that the chosen token-level margin was a valid scalar instrument for the represented quantity.**

</section>

<section class="research-note-key-result" markdown="1">

**Key result.** Several models solved the behavioral task while failing the measurement task. The experiment stopped because the proposed readout lacked calibration and nuisance invariance, not because the models failed to compare numbers.

</section>

## 1. Research question

The planned downstream study required a scalar readout of relative numerical evidence. A convenient candidate was

`margin = logit(A) - logit(B)`

for two answer tokens associated with the displayed quantities.

Before interpreting this margin as a quantitative internal variable, the following measurement question was tested:

> **Does the first-token binary margin track the numerical ratio while remaining stable to transformations that should not change that ratio?**

The measurement standard was intentionally stronger than categorical accuracy because the margin was intended to support later mechanistic inference.

## 2. Frozen selection protocol

Five instruction-tuned models were registered at exact revisions:

| Model | Parameters |
| --- | ---: |
| Qwen3-8B | 8.19B |
| Gemma 3 12B | 12.19B |
| Qwen3-14B | 14.77B |
| Llama 3.1 8B Instruct | 8.03B |
| Ministral 8B Instruct | 8.02B |

The scientific screen used **5,760 binary forward passes** and yielded **1,440 corrected measurements**. Sampling was disabled and full-vocabulary logits were used.

The principal gates required:

- high-margin categorical accuracy ≥ **0.98**;
- corrected margin vs. ideal log-ratio correlation ≥ **0.95**;
- cross-alphabet and candidate-order correlations near unity;
- every nuisance-to-signal RMS ratio < **0.25**.

Nuisance manipulations changed answer alphabets, candidate order, and equivalent quantity-to-token mappings while preserving the underlying numerical comparison.

## 3. Results

Four models achieved perfect high-margin categorical accuracy, but the quantitative margin failed across the full panel.

| Model | High-margin accuracy | Ratio correlation | Max nuisance / signal | Gate |
| --- | ---: | ---: | ---: | --- |
| Qwen3-8B | 1.000 | 0.798 | 4.471 | fail |
| Gemma 3 12B | 1.000 | 0.814 | 1.344 | fail |
| Qwen3-14B | 1.000 | 0.811 | 3.353 | fail |
| Llama 3.1 8B | 0.870 | 0.703 | 3.737 | fail |
| Ministral 8B | 1.000 | 0.748 | 2.274 | fail |

No candidate reached the 0.95 ratio-correlation requirement. More importantly, every model violated the nuisance criterion by a wide margin. Even Gemma 3 12B, the least nuisance-sensitive candidate, showed a largest nuisance effect **1.344 times** the scientific signal RMS.

The terminal decision was:

`NO-ELIGIBLE-MODEL`

No model advanced to confirmation, and no posterior, probability, or hidden-state experiment was authorized within this protocol.

## 4. Behavioral validity versus construct validity

The result separates two questions:

1. **Can the model make the correct categorical choice?**
2. **Does the proposed scalar behave like the quantitative construct assigned to it?**

For four models, the answer to the first question was yes on the high-margin items. The answer to the second was no under the frozen criteria.

There is no contradiction. A first-token logit difference is a local projection of a larger conditional system shaped by tokenization, instruction tuning, answer conventions, candidate position, and prompt context. Correct output behavior does not imply that one convenient projection is calibrated to the underlying quantity.

The relevant failure is therefore **construct validity of the measurement interface**, not numerical competence of the model.

## 5. Relation to prior evaluation findings

Prior work has shown several related pathologies. First-token multiple-choice probabilities can disagree with generated text answers; option ordering can alter multiple-choice performance; and token logits can exhibit systematic probability and order biases.

The present result isolates a narrower condition: behavioral choice can remain correct while the **magnitude** of the binary margin is still unsuitable as a quantitative instrument.

The relevant distinction is:

`correct categorical behavior ≠ calibrated scalar readout`.

This matters whenever logits are used as scientific measurements—for example as confidence, evidence strength, latent probability, or preference intensity—rather than merely as ranking scores.

## 6. Why the experiment stopped

Several post-result modifications could plausibly improve the measurement:

- full-string rather than first-token scoring;
- a different prompt or answer alphabet;
- post-hoc calibration;
- hidden-state probes;
- continuous numerical outputs;
- a different model family.

Any of these would define a new measurement experiment. They cannot retroactively satisfy the frozen interface-selection gate.

Accordingly, failure of the readout did **not** falsify the downstream hypothesis about uncertainty or finite-capacity representation. It prevented that hypothesis from being tested with this instrument.

This distinction is important for negative results:

> **A failed measurement can terminate an experiment without becoming evidence against the scientific mechanism the experiment was meant to study.**

## 7. Claim boundary

The evidence supports:

- high categorical numerical competence in four of five tested models under the registered high-margin items;
- failure of the first-token binary margin as a quantitatively faithful and nuisance-stable readout under the frozen criteria;
- termination of the downstream route for this registered model/interface panel.

It does **not** establish:

- that instruction models cannot compare numbers;
- that token logits are generally useless;
- that no alternative readout can recover a calibrated numerical quantity;
- anything about posterior geometry, uncertainty compression, or KL-like behavior, because those hypotheses were not reached.

## 8. Reproducibility boundary

The full experiment is retained in a private research repository. The versioned record includes exact model revisions, frozen selection and confirmation manifests, raw selection outputs, corrected measurements, per-candidate gate decisions, nuisance diagnostics, and the terminal `NO-ELIGIBLE-MODEL` record. No confirmation raw directory or selected-model artifact exists because no candidate passed the registered gate.

This public note reports only the aggregate measurement-validation result and claim boundary.

## References

- Wang, X., Ma, B., Hu, C., et al. (2024). [“My Answer is C”: First-Token Probabilities Do Not Match Text Answers in Instruction-Tuned Language Models](https://aclanthology.org/2024.findings-acl.441/). *Findings of ACL*.
- Pezeshkpour, P., & Hruschka, E. (2024). [Large Language Models Sensitivity to The Order of Options in Multiple-Choice Questions](https://aclanthology.org/2024.findings-naacl.130/). *Findings of NAACL*.
- Lovering, C., Krumdick, M., Lai, V. D., et al. (2024). [Are Language Model Logits Calibrated?](https://arxiv.org/abs/2410.16007).
