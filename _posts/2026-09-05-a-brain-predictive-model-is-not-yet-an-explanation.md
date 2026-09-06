---
title: "A Brain-Predictive Model Is Not Yet an Explanation"
date: 2026-09-05 15:44:00 -0500
summary: "What known-truth recovery tests reveal about the gap between neural predictivity, model identification, and mechanism."
tags: [neuroai, neural-encoding, model-identification, methodology, neuroscience]
writing_type: "Research Note"
toc: true
citation: true
---

*What known-truth recovery tests reveal about neural encoding benchmarks*

A neural encoding result often ends with a number: a model predicts held-out brain responses with some correlation or explained variance. The natural next sentence is that the model has captured something about the brain's representation.

I think that sentence is sometimes justified. But it contains more than one claim.

A model can predict. It can be more predictive than another model. Its features can contain information that a linear readout can use. The evaluation pipeline can distinguish it from plausible alternatives. And the model can instantiate something like the mechanism that generated the neural response.

Those statements are related. They are not equivalent.

The question in this note is deliberately narrow:

> **When a model predicts held-out neural responses, what exactly has been established?**

I have been exploring this question with a set of known-truth simulations and visual neural benchmarks. The main lesson is not that neural predictivity is weak evidence. It is that **predictivity is evidence relative to an evaluator**, and the scientific meaning of a good score depends on what that evaluator could have distinguished in the first place.

---

## Prediction is a claim about a system, not a representation in isolation

An encoding benchmark is rarely just a comparison between a neural network and a brain. It is closer to:

`representation + mapping + regularization + layer search + split + metric + data`

That whole system produces the score.

This is obvious operationally but easy to forget interpretively. If I allow a flexible readout between a candidate representation and neural responses, then the score tells me that information useful for predicting those responses is accessible *through that readout*. It does not automatically tell me that the candidate representation is uniquely identified.

This distinction is closely related to the system-identification question raised by Han, Poggio, and Cheung (2023), who replaced neural recordings with known ground-truth models and asked whether common brain-model comparison methods could recover the generating system. Recovery depended strongly on the evaluator and stimulus set. More recent proposals such as the NeuroAI Turing Test argue that behavior should be supplemented by representational correspondence, while perturbation-based work has shown that highly predictive encoding models can still diverge under interventions that ordinary prediction scores do not expose.

My preferred way to organize the evidence is as a ladder:

1. **Predictive adequacy** — does the declared representation-readout system predict held-out responses?
2. **Incremental specificity** — does it explain something beyond claim-aligned controls?
3. **Candidate discrimination** — can the evaluator recover the right model among plausible alternatives?
4. **Generalization** — does the effect survive the scientific unit named in the claim?
5. **Mechanistic evidence** — do temporal, causal, or interventional tests support the proposed mechanism?

Passing one rung does not make the others unnecessary.

---

## The easiest way to test identification is to know the truth

Real brain data cannot tell us which computational model generated the response, because we do not know the answer. Synthetic data can.

So I started with a simple question: if I generate responses from a known representation, then run the same kind of evaluation used on neural data, can the pipeline recover the source?

In a favorable high-signal regime, it could: the evaluator recovered the generating candidate in **100/100** trials. That is important because a recovery benchmark that cannot succeed when the truth is easy to identify is not useful.

But recovery was not a constant property of the candidate representation. It varied sharply with the information available to the evaluator. Across controlled sweeps, exact recovery ranged from roughly **24% to 100% with signal level**, **52% to 100% with sample size**, and **84% to 100% with feature dimension**.

Changing the mapping family while holding the synthetic reference problem fixed also changed recovery: ridge recovered the generating candidate in all trials in one favorable setting, PCA-plus-ridge in 72%, and PLS in 38%.

Nothing about the ground truth changed.

The evaluator did.

That is the first result I want to keep in view:

> **A neural predictivity score is partly a property of the representation and partly a property of the question the evaluator is capable of asking.**

---

## Selection can manufacture a winner

There is a second failure mode that is conceptually simpler.

Suppose there is no real signal, but I search over enough candidate models and use the same held-out data both to choose the winner and to report its performance. A winner will eventually appear.

In a controlled null experiment with **32 candidates**, reusing the outer test set for selection inflated the reported score by about **0.0915** and produced false positives in **52%** of runs. When the selected candidate was evaluated on a genuinely untouched confirmation set, the mean apparent gain collapsed to about **0.00087**, and the false-positive rate returned to **4%**.

This is not a subtle representational issue. It is ordinary selection bias.

But it matters for interpretation because the final object presented to a reader is still a perfectly respectable-looking held-out prediction score. Without reconstructing the selection path, the score alone does not reveal whether it was a test or part of the search procedure.

This is one reason I increasingly think that **the evaluation protocol belongs inside the scientific object**.

---

## Real neural data make the distinction less comfortable

The known-truth experiments tell us what the evaluator can and cannot establish. The real-data question is whether those limitations matter in practice.

On visual V4/IT benchmarks, they do.

Under a strict, capacity-matched evaluation, trained ResNet-50 features were predictive, as expected. But so were several deliberately weaker controls: an untrained hierarchical network, a fixed hierarchical network we called *DeadNet*, and even pixel-based features. A Gaussian control remained essentially at zero.

The point is not that training does not matter. It does. The training advantage was much clearer in IT than V4. Under one frozen 128-dimensional comparison, trained and untrained ResNet-50 were nearly tied in V4 but separated substantially in IT.

The point is narrower:

> **Nonzero held-out neural prediction does not uniquely identify task learning, a representational geometry, or a mechanism.**

That conclusion became more interesting after independent replication. On a separate visual neural dataset, four predeclared bounded effects replicated in both recorded animals, including an IT training advantage and DeadNet-over-pixels contrasts. The prediction results became more credible.

But replication did not change their logical type.

They were still prediction results.

A result can therefore become **more reproducibly predictive without becoming more mechanistically identified**.

I think this is an important distinction because “replicated” often feels like the end of an epistemic argument. Sometimes it is only the end of one layer of it.

---

## What would make the claim stronger?

If two candidates are nearly tied under ordinary neural predictivity, there are several ways to ask for more evidence.

Known-truth recovery asks whether the evaluator could identify them if one were actually correct. Perturbation tests ask whether the models respond differently under targeted changes. Model metamers probe invariances that ordinary neural benchmarks can miss. Behavioral comparisons constrain what internal similarity is functionally useful. Closed-loop experiments ask whether matched states occupy similar causal roles in action and adaptation.

These tests are not substitutes for prediction. They are ways of **making alternative explanations disagree**.

That is the standard I now find most useful:

> **A stronger experiment is one that forces models which currently look equivalent to make different predictions.**

This is also why I do not want to turn “predictivity is not identification” into another slogan against encoding models. Encoding is often exactly the right first question. Prediction can rule out weak models, localize information, compare feature spaces, and discover robust regularities.

The mistake is only in asking the score to establish more than the experiment identified.

---

## The claim I am comfortable making

After working through these controls, the statement I would defend is deliberately modest:

> **Successful held-out neural encoding establishes predictive adequacy of a declared representation–readout–data system under a declared evaluation contract.**

What it establishes beyond that depends on the alternatives and interventions built into the experiment.

If a model defeats a Gaussian null, we learn something different than if it defeats pixels. If it defeats an untrained architecture, we learn something different than if it defeats a matched non-neural target. If the evaluator can recover known ground truth, we can trust its discriminative claim more than if many candidates are observationally equivalent under its readout. If a result transfers across animals, tasks, or perturbations, the scope changes again.

The score is not meaningless.

It is simply not self-interpreting.

That is the result I wanted from this project: not a reason to stop measuring brain predictivity, but a more explicit answer to what I think a predictive result earns us—and what still has to be tested afterward.

---

## References

- Han, Y., Poggio, T. A., & Cheung, B. (2023). [System Identification of Neural Systems: If We Got It Right, Would We Know?](https://proceedings.mlr.press/v202/han23d.html) *ICML*.
- Feather, J., Khosla, M., Murty, N. A. R., & Nayebi, A. (2025). [Brain-Model Evaluations Need the NeuroAI Turing Test](https://arxiv.org/abs/2502.16238).
- McNeal, N., Deb, M., & Murty, N. A. R. (2024). [Small-scale adversarial perturbations expose differences between predictive encoding models of human fMRI responses](https://proceedings.mlr.press/v285/mcneal24a.html). *UniReps*.
- Feather, J., Leclerc, G., Mądry, A., & McDermott, J. H. (2023). [Model metamers reveal divergent invariances between biological and artificial neural networks](https://www.nature.com/articles/s41593-023-01442-0). *Nature Neuroscience*.
