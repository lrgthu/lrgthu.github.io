---
title: "A Brain-Predictive Model Is Not Yet an Explanation"
date: 2026-09-05 15:44:00 -0500
summary: "Known-truth recovery and neural benchmarks separate predictive adequacy from model identification and mechanism."
tags: [neuroai, neural-encoding, model-identification, methodology, neuroscience]
writing_type: "Research Note"
toc: true
citation: true
source_repo: "lrgthu/neuroai-salmon"
---

<section class="research-note-abstract" markdown="1">

## Abstract

Neural encoding benchmarks are commonly used to compare artificial representations with brain responses, but a high held-out score does not by itself establish that the evaluated representation is uniquely identified or mechanistically correct. This note summarizes a set of known-truth simulations and visual-neural benchmarks designed to separate **predictive adequacy**, **candidate identification**, and **mechanistic interpretation**. In favorable synthetic conditions, the evaluator recovered the generating representation in 100/100 trials, but recovery varied strongly with signal level, sample size, feature dimension, and mapping family. Reusing a held-out set for candidate selection inflated a 32-candidate null by 0.0915 and produced 52% false positives; untouched confirmation reduced the mean gain to 0.00087 and the false-positive rate to 4%. On real V4/IT data, trained, untrained, fixed hierarchical, and pixel features all produced nonzero neural predictivity, and four bounded effects replicated on an independent dataset. The resulting claim is deliberately narrow: **held-out encoding establishes predictive adequacy of a declared representation–readout–data system under a declared evaluation contract. Identification and mechanism require additional evidence.**

</section>

<section class="research-note-key-result" markdown="1">

**Key result.** Valid and independently replicated neural prediction can remain insufficient for identifying the generating representation. The limiting factor is not only model quality; it is also what distinctions the evaluator is capable of resolving.

</section>

## 1. Research question

The primary question was:

> **When a model predicts held-out neural responses, what scientific claim has actually been established?**

A neural encoding score is produced by more than a representation. The evaluated object is approximately

`representation + mapping + regularization + layer search + split + metric + data`.

Accordingly, a predictive result can support several distinct claims of increasing strength:

1. **Predictive adequacy:** the declared representation–readout system predicts held-out neural responses.
2. **Incremental specificity:** it explains information not captured by claim-aligned controls.
3. **Candidate discrimination:** the evaluator can recover the correct candidate among plausible alternatives.
4. **Generalization:** the result survives the biological or stimulus unit named in the claim.
5. **Mechanistic evidence:** temporal, causal, or interventional tests support the proposed computation.

The experiments below target the separation between the first three levels.

## 2. Known-truth recovery

Real neural data do not reveal which computational representation generated the measured responses. Synthetic responses provide a known source and therefore permit a direct identification test.

Responses were generated from a declared candidate representation and evaluated with the same class of encoding procedures used on neural data. The diagnostic first had to pass a favorable anchor: under high signal and an identifiable reference problem, the generating representation was recovered in **100/100** trials.

Recovery was then measured while changing the information available to the evaluator. Exact recovery ranged approximately:

| Manipulation | Recovery range |
| --- | ---: |
| Signal level | 24%–100% |
| Sample size | 52%–100% |
| Feature dimension | 84%–100% |

Mapping family also changed recovery under a fixed synthetic reference problem:

| Mapping | Exact recovery |
| --- | ---: |
| Ridge | 100% |
| PCA + ridge | 72% |
| PLS | 38% |

The generating representation was unchanged across these comparisons. The change was in the evaluator.

This result establishes that **predictivity and identification are evaluator-relative**: a representation can generate predictable responses while the evaluation procedure remains unable to distinguish it reliably from plausible alternatives.

## 3. Selection inflation under a null

A separate experiment tested candidate search when no true predictive advantage was present.

Thirty-two null candidates were compared under two procedures:

- **non-nested selection:** the same held-out data were used to choose and report the winning candidate;
- **untouched confirmation:** the selected candidate was evaluated on data excluded from the search.

The non-nested procedure produced:

- mean score inflation: **0.0915**;
- false-positive rate: **52%**.

Untouched confirmation reduced these values to:

- mean apparent gain: **0.00087**;
- false-positive rate: **4%**.

The result is a controlled example of selection bias rather than a property of any neural representation. Its relevance is methodological: a final held-out score does not reveal whether that held-out set was part of the model-selection path.

## 4. Real-data case study

The synthetic experiments establish what the evaluator can and cannot identify. The real-data analysis asks whether those distinctions matter on visual neural benchmarks.

Under a frozen, capacity-matched V4/IT evaluation, the candidate panel included:

- trained ResNet-50 features;
- untrained ResNet-50 features;
- a fixed task-unoptimized hierarchical model (DeadNet);
- pixel features;
- Gaussian features.

Trained ResNet-50 was predictive, but nonzero predictivity was not specific to trained representations. DeadNet and pixel features also predicted held-out responses, whereas Gaussian features remained near zero. Under the frozen 128-dimensional comparison, the trained/untrained separation was small in V4 and substantially larger in IT.

A prospectively frozen analysis on an independent visual-neural dataset then replicated four bounded effects in both recorded animals, including an IT training advantage and DeadNet-over-pixels contrasts.

Independent replication strengthened the predictive evidence. It did **not** change the logical type of the result: the replicated effects remained statements about prediction under the declared evaluator, not demonstrations of representational identity or neural mechanism.

## 5. Interpretation

The combined experiments support three conclusions.

First, **successful prediction is informative but not self-interpreting**. It establishes that information relevant to the measured responses is accessible through the declared readout.

Second, **identification requires an evaluator that can discriminate the alternatives named in the claim**. Known-truth recovery provides one direct calibration of that capacity.

Third, **replication and identification answer different questions**. An effect can become more reproducible without becoming more uniquely attributable to one representation or mechanism.

A useful next experiment is therefore one that forces currently equivalent candidates to disagree—for example through known-truth recovery, targeted perturbation, metamers, behavioral constraints, or closed-loop intervention.

## 6. Claim boundary

The evidence supports the following statement:

> **Successful held-out neural encoding establishes predictive adequacy of a declared representation–readout–data system under a declared evaluation contract.**

The experiments do **not** establish that:

- neural predictivity is uninformative;
- trained models lack brain-relevant representations;
- any one task-unoptimized control is equivalent to a trained model;
- a predictive representation is uniquely identified;
- the evaluated model implements the biological mechanism;
- the bounded V4/IT results generalize beyond the declared datasets, animals, stimuli, mappings, and feature contracts.

## 7. Reproducibility boundary

The underlying research record is maintained in a private project repository with frozen experimental contracts, known-truth recovery outputs, evaluator-sensitivity analyses, independent real-data replication, claim audits, source identities, and integrity manifests. Raw neural arrays and large feature caches remain external to version control.

This public note reports only aggregate, publication-safe results and the released claim boundary. It is not a substitute for the full methods manuscript or the private execution record.

## References

- Han, Y., Poggio, T. A., & Cheung, B. (2023). [System Identification of Neural Systems: If We Got It Right, Would We Know?](https://proceedings.mlr.press/v202/han23d.html). *ICML*.
- Feather, J., Khosla, M., Murty, N. A. R., & Nayebi, A. (2025). [Brain-Model Evaluations Need the NeuroAI Turing Test](https://arxiv.org/abs/2502.16238).
- McNeal, N., Deb, M., & Murty, N. A. R. (2024). [Small-scale adversarial perturbations expose differences between predictive encoding models of human fMRI responses](https://proceedings.mlr.press/v285/mcneal24a.html). *UniReps*.
- Feather, J., Leclerc, G., Mądry, A., & McDermott, J. H. (2023). [Model metamers reveal divergent invariances between biological and artificial neural networks](https://www.nature.com/articles/s41593-023-01442-0). *Nature Neuroscience*.
