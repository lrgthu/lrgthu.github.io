---
title: "A Brain-Predictive Model Is Not Yet an Explanation"
date: 2026-09-05 15:44:00 -0500
updated: 2026-09-06
summary: "A disjoint-support control reveals three pooled correct-image advantages and an inconclusive TVSD IT comparison—and clarifies what neural prediction does not establish."
update_note: "Added the disjoint-support results and all eight animal strata; corrected the recovery near-tie and LOO-control interpretations. The research repository remains private."
tags: [neuroai, neural-encoding, model-identification, methodology, neuroscience]
writing_type: "Research Note"
toc: true
citation: true
---

<section class="research-note-abstract" markdown="1">

## Abstract

A model's ability to predict held-out neural responses does not, by itself, identify the representation or mechanism responsible for that success. This updated research note reports a supplementary comparison between correctly paired, trained visual features and a **disjoint-support prototype**: every query image in an object or category receives the same mean feature vector from other images. Correct-image features met the predeclared predictive-advantage criterion in pooled Majaj-Hong V4, Majaj-Hong IT, and amended TVSD V4, but not in amended TVSD IT. The latter result is inconclusive, not an equivalence finding or evidence that neural responses lack image-specific information. All animal-level results are retained. The update also corrects the interpretation of an earlier leave-one-out control and places a 53/100 recovery result in the context of almost indistinguishable prediction scores. **Successful encoding supports a specified representation–readout–data system; stronger explanations require tests of the particular property being claimed.**

</section>

<section class="research-note-key-result" markdown="1">

**Key result.** Correctly paired image features have a clear, predeclared predictive advantage over a labeled support mean in three pooled comparisons. That advantage is not established in amended TVSD IT. Neither outcome identifies a unique representation or biological mechanism.

</section>

*Status: an unreviewed research note reporting aggregate results from my ongoing work. This revision supersedes the earlier note's recovery interpretation; it does not rewrite the original experimental decisions.*

## 1. Research question

This project began with a thought experiment: what would a “dead model” test reveal about the way we evaluate models of the brain? The useful question turned out to be more specific than whether an implausible model could obtain a nonzero score:

> **When a model predicts held-out neural responses, which scientific distinction has the evaluation actually resolved?**

An encoding score belongs to a system: representation, learned mapping, preprocessing, regularization, stimulus split, metric, and aggregation. Prediction, specificity against a control, candidate identification, generalization, and mechanism are different claims about that system—not interchangeable rewards for a high score.

This concern is not new. [Han, Poggio, and Cheung (2023)](https://proceedings.mlr.press/v202/han23d.html) test identification with known ground-truth models; [Conwell and colleagues (2024)](https://www.nature.com/articles/s41467-024-53147-y) examine how model properties and linking methods shape visual brain predictivity. The contribution of the comparison below is narrower: **does the correct query image provide a predictive advantage over a representation that cannot distinguish query images within the same group?**

## 2. What the control actually removes

The distinction between two superficially similar controls matters.

The earlier **leave-one-out prototype** averaged all other image features in a group. Let `x_i` be an image's feature vector, `mean_g` the group mean, and `n_g` the number of images. Its algebra is:

```text
z_i = mean_g - (x_i - mean_g) / (n_g - 1)

z_i - z_j = -(x_i - x_j) / (n_g - 1)
```

Excluding an image from its own average does **not** make the resulting representation group-constant. The leave-one-out vectors retain the geometry of within-group differences, reversed and scaled. They cannot be treated as a control that deletes every image-level distinction. This is not neural-response leakage, and the identity alone does not prove what caused the historical scores or what a single global linear mapping can recover.

The new control instead uses a fixed, disjoint set of **support images**. The remaining **query images** supply the rows on which neural mappings are fitted and evaluated:

```text
z_i = mean(features of support images in group g)

for every query image i in group g
```

Every query in a group now receives exactly the same feature vector. Under a fitted deterministic readout, every query in that group also receives the same prediction. None of those query images contributes features to its support mean.

This is a property-specific control, not a nonsense model. It contains trained visual features from other images and has access to group labels and support images from held-out groups. It is neither a pure category code nor prediction of a novel category without support.

## 3. The supplementary comparison

The neural recordings come from two existing macaque visual datasets: the [Majaj-Hong study](https://doi.org/10.1523/JNEUROSCI.5181-14.2015) and the [THINGS ventral-stream spiking dataset, or TVSD](https://doi.org/10.1016/j.neuron.2024.12.003). The numerical comparisons here are my secondary analyses, not results claimed by those dataset papers.

Majaj-Hong contributes 64 objects, with 25 support and 25 query images per object: **1,600 queries**. The amended TVSD panel contributes 1,852 categories, with six support and six query images per category: **11,112 queries**.

Both systems use fixed ImageNet-trained ResNet-50 features with 128 coordinates, using the same preselected layer for each area: `layer2.3` for V4 and `layer4.0` for IT. Both are refitted with partial least squares regression using 25 components. They use exactly the same query training rows, query test rows, and neural response channels. Feature standardization and response centering use fitting queries only; support neural responses never enter fitting or evaluation. There is no new layer, model, or hyperparameter search.

The outer splits hold out entire objects in Majaj-Hong and entire categories in TVSD, using eight and six folds respectively. Test-group support images and labels remain available by design, but test-group neural responses are not used to fit the mapping. Matching coordinate counts is **not** a claim that effective rank, conditioning, or model capacity are matched.

### The image-identity amendment

Before the new scoring, an image-only audit identified a crop/resize alias connecting the `hay` and `straw1` categories across the intended boundaries. The supplementary panel excludes both complete categories—24 image rows—under an explicit identity-based rule. Every retained support/query role, outer-fold assignment, and feature value remains unchanged. No replacement images or alternative partition seeds were tried.

A separate same-photo pair lies wholly within the `moss` support group. Its original row weights were retained and disclosed: six support rows contain at most five distinct photographs. The audit covers specified transformations, not every conceivable edited duplicate.

This amendment followed image inspection and prior exposure to historical results, but preceded the new supplementary scores. It is not an untouched original preregistration or an independent replication. The duplicate discovery also does not, by itself, establish score inflation. New-versus-old score changes cannot be attributed to its removal: the control construction and evaluation domains also changed.

## 4. Results: three advantages and one inconclusive comparison

The score is the mean **signed Pearson correlation** across neural response channels within each outer test fold, then an equal average across folds. It is not noise-ceiling-normalized. Pooled animal contributions are weighted by their numbers of included channels, not equally by animal.

The difference below is correct-image score minus support-prototype score. Intervals are **98.75% paired bootstrap percentile intervals**, with Bonferroni adjustment for the four pooled comparisons. The predeclared criterion requires the interval's lower bound to exceed **0.01** and the Holm-adjusted p-value to be below **0.05**. The 0.01 threshold is a study-defined materiality reference, not a field-wide standard.

<!-- pooled-results -->

| Dataset / area | Correct image | Support mean | Difference | Simultaneous 98.75% interval | Criterion |
| --- | ---: | ---: | ---: | --- | --- |
| Majaj-Hong V4 | 0.4025 | 0.1898 | +0.2128 | [0.1666, 0.2784] | Met |
| Majaj-Hong IT | 0.3322 | 0.2353 | +0.0968 | [0.0655, 0.1482] | Met |
| Amended TVSD V4 | 0.2951 | 0.2209 | +0.0742 | [0.0600, 0.0883] | Met |
| Amended TVSD IT | 0.2690 | 0.2588 | +0.0102 | [−0.0039, 0.0246] | Not met |

<!-- end pooled-results -->

The first three Holm-adjusted p-values are approximately **0.0008**, at the attained Monte Carlo resolution. TVSD IT's is **0.0824**. All declared fits and the two 5,000-draw paired bootstraps completed without failed mappings or undefined draws; no corrected rerun, new seed, or post-score exclusion was used.

The TVSD IT point estimate is slightly above 0.01, but a point estimate above the threshold does not satisfy the interval requirement. Its interval permits both a small negative difference and a positive advantage larger than the declared threshold. **The result establishes neither the required advantage nor equivalence.**

There is no contradiction in a group-constant control obtaining a positive score: a correlation across many groups can capture differences *between* groups while a predictor ignores distinctions *within* each group. The result does not show that within-group neural variation is absent. It shows why an overall encoding score and the predictive value of correct image pairing need separate tests.

## 5. The animals do not tell an identical story

Pooled results should not hide the recorded animals. Here are all eight strata, including both systems' absolute scores. These intervals are **descriptive 95% paired conditional intervals**, not extra primary tests and not confidence statements about an animal population.

<!-- animal-results -->

| Dataset / area / animal | Correct image | Support mean | Difference | Descriptive 95% interval |
| --- | ---: | ---: | ---: | --- |
| Majaj-Hong V4 / Chabo | 0.3864 | 0.1994 | +0.1869 | [0.1513, 0.2427] |
| Majaj-Hong V4 / Tito | 0.4654 | 0.1521 | +0.3133 | [0.2508, 0.3900] |
| Majaj-Hong IT / Chabo | 0.2852 | 0.2478 | +0.0374 | [−0.0001, 0.0898] |
| Majaj-Hong IT / Tito | 0.3569 | 0.2288 | +0.1282 | [0.0999, 0.1767] |
| Amended TVSD V4 / monkeyF | 0.2841 | 0.2073 | +0.0768 | [0.0643, 0.0896] |
| Amended TVSD V4 / monkeyN | 0.3016 | 0.2289 | +0.0727 | [0.0592, 0.0864] |
| Amended TVSD IT / monkeyF | 0.2474 | 0.2132 | +0.0342 | [0.0229, 0.0460] |
| Amended TVSD IT / monkeyN | 0.2930 | 0.3095 | −0.0165 | [−0.0325, 0.0002] |

<!-- end animal-results -->

TVSD IT monkeyF favors the correct image; monkeyN's point estimate favors the prototype, but its interval includes zero. Majaj-Hong IT Chabo also has an interval including zero. Thus, the three pooled successes do not mean that every animal separately provides clear support. Conversely, requiring every animal to be significant was not an additional primary criterion. This is descriptive heterogeneity, not a tested animal interaction.

## 6. What else the earlier analysis needed to clarify

### Recovery: identification and almost-tied scores

The earlier version of this note described a favorable high-information result as **100/100 recovery of the generating representation**. That wording conflated recovery of a broad affine function class with recovery under the complete evaluator.

The corrected result is **53/100 exact-candidate recovery and 53/100 evaluator-class recovery**, alongside **100/100 affine function-class recovery**. The maximum observed outer-score difference between the generating and rotated candidates was only **5.91 × 10⁻⁶**. This is an important distinction between operational equivalence and predictive proximity—not a large predictive victory by an unrelated mechanism. Almost identical observed scores do not prove exact operator equivalence either.

A separate controlled synthetic analysis still found recovery ranging from 24% at signal-to-noise ratio 0.01 to 100% at 0.1 and above. Recovery depends on the available discriminating information and the evaluator. The stronger low-signal criterion in the actual-feature analysis remained unmet.

### Selection and metric sign are separate diagnostics

The earlier candidate-selection stress test deliberately reused evaluation data to select and report the winner. Untouched confirmation substantially reduced the resulting inflation. That demonstrates a consequence of non-nested selection; it does not show that a correctly protected evaluation necessarily produces false alignment.

The sign test is similarly specific. Explicitly negating predictions reverses signed correlation while leaving a squared-correlation metric unchanged. It diagnoses information lost by that metric, not ordinary fitting procedures choosing anti-predictors.

### Independent observations do not rescue a different comparison

A separate historical analysis found four fixed-system contrasts in independent TVSD neural observations, with positive point estimates in both named animals. Those involved trained versus untrained features and fixed-hierarchy versus pixel comparisons, not the new support-prototype experiment. They support bounded predictive evidence for those systems; they are not an independent replication of the supplementary result reported here.

The originally proposed DeadNet hierarchy hypothesis was not supported. The old full-panel specificity criterion also failed in TVSD IT. Those outcomes remain part of the record. Revising a control's interpretation does not turn an earlier failed criterion into a success.

## 7. Claim and uncertainty boundaries

The new result is a comparison of **two fixed feature–readout systems**, not a decomposition of unique neural information. Separate refitting does not amount to variance partitioning or conditional-mutual-information estimation. Nor do ratios of correlation scores give percentages of explained neural variance.

The paired bootstrap resamples groups and then query images within fixed outer folds, and response channels within each named animal. The same relevant draws are shared across systems; folds are not treated as independent replications. The intervals condition on the chosen support set, outer assignments, fitted mappings, named animals, and fixed model checkpoint. They do not cover support resampling, refitting, animal or model populations, training processes, or unidentified recording sessions.

These qualifications are consequential. The evidence cannot tell us that a different support set, new animal, or independently trained network would reproduce the same comparison. It also cannot identify a biological mechanism simply because a particular alternative is beaten.

My current conclusion is therefore not that neural encoding is useless, or that a “dead network” has defeated the field. It is that **prediction and the scientific distinction we care about must be evaluated separately**. Three comparisons established a specified predictive advantage. One did not. Both belong in the explanation of what the experiment taught us.

## 8. Reproducibility and publication status

I am keeping the research repository, full draft manuscript, and release candidate **private for now**. This public research note shares the aggregate comparisons, essential design choices, corrections, and limitations—not raw neural arrays, image collections, feature stores, or internal operational records.

The current tables, eleven manuscript figures, and two PDFs have been reconstructed from saved compact results in two clean extractions under operating-system sandbox restrictions. The generated files matched byte for byte in that tested environment. That checks **artifact reconstruction and presentation consistency**, not independent verification of neural statistics or end-to-end experimental replay. Neither of those stronger checks is claimed here, and the private package is not a publicly available reproduction resource.

The practical lesson remains the title of this note: a brain-predictive model can be useful evidence without yet being an explanation. What matters next is not merely whether a score is high, but whether the experiment has tested the particular inference we want to draw from it.

## References

- Han, Y., Poggio, T. A., & Cheung, B. (2023). [System Identification of Neural Systems: If We Got It Right, Would We Know?](https://proceedings.mlr.press/v202/han23d.html). *ICML*.
- Conwell, C., Prince, J. S., Kay, K. N., Alvarez, G. A., & Konkle, T. (2024). [A large-scale examination of inductive biases shaping high-level visual representation in brains and machines](https://www.nature.com/articles/s41467-024-53147-y). *Nature Communications, 15*, 9383.
- Majaj, N. J., Hong, H., Solomon, E. A., & DiCarlo, J. J. (2015). [Simple Learned Weighted Sums of Inferior Temporal Neuronal Firing Rates Accurately Predict Human Core Object Recognition Performance](https://doi.org/10.1523/JNEUROSCI.5181-14.2015). *Journal of Neuroscience, 35*, 13402–13418.
- Papale, P., Wang, F., Self, M. W., & Roelfsema, P. R. (2025). [An extensive dataset of spiking activity to reveal the syntax of the ventral stream](https://doi.org/10.1016/j.neuron.2024.12.003). *Neuron, 113*, 539–553.e5.
