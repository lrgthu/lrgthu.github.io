---
title: "What I Now Ask Before Calling a Representation Brain-Aligned"
date: 2026-09-05 15:39:00 -0500
summary: "A personal research retrospective on how my standard for brain alignment changed from better prediction to specificity, transfer, identification, and intervention."
tags: [neuroai, representation-learning, brain-alignment, methodology, retrospective]
writing_type: "Research Note"
toc: true
citation: true
---

*A research retrospective on how my evidential standard changed*

Several years ago, I worked on a simple idea: use brain responses to reshape an artificial feature space.

Take a pretrained visual representation. Present the same images to a person in an fMRI experiment. Use similarities between neural response patterns to define which image pairs should move closer together or farther apart in the artificial space. Train a Siamese mapping with a contrastive objective. Then ask whether the transformed representation becomes more similar to the neural geometry and predicts held-out brain activity better.

The project was called *Contrastive Representation Learning in the Brain*.

At the time, the logic felt natural:

`brain-supervised transformation`

`-> better neural geometry`

`-> better encoding prediction`

`-> more brain-aligned representation`

I still think the first three arrows can describe a useful experiment.

It is the last arrow that I would write much more carefully now.

The question I have learned to ask is not only:

> **Did neural supervision improve alignment?**

It is:

> **What alternative explanation did the experiment make impossible?**

That change—from improvement to identification—has probably been the biggest shift in how I think about NeuroAI evidence.

---

## What I thought “brain-aligned” meant

The original project began from a real limitation of standard encoding models.

Artificial visual features are usually learned for objectives such as classification. There is no reason their geometry must match the dimensions emphasized by a particular brain region. If a feature space can be warped using neural similarity, perhaps the resulting representation will better reflect the neural organization of the stimuli.

The method was straightforward.

For each pair of images, I computed similarity between their fMRI response patterns in a region of interest. Pairs with high neural similarity became positive pairs; dissimilar pairs became negative pairs. A shared nonlinear mapping `f(x)` was trained with a contrastive loss so that the transformed visual features reproduced those pairwise relationships more closely.

Then I evaluated the transformed space in two ways:

1. did pairwise geometry become more similar to the fMRI geometry?
2. did an encoding model built on the transformed features predict held-out fMRI responses better than the original features?

Both moved in the intended direction in the pilot analysis.

The draft therefore used language like:

> the induced latent space is a more accurate model of the brain.

I understand why I wrote that sentence.

I would not write it that way today.

---

## The result was real; the interpretation was underspecified

This is an important distinction.

I do not now think the earlier project was meaningless because it did not satisfy standards I developed later. If a neural-supervised mapping improves held-out brain prediction and representational similarity, that is a real empirical fact about the representation–mapping–dataset system.

The problem is what follows from it.

Several explanations remain possible:

- the neural target provided stimulus-specific information unavailable elsewhere;
- the target mainly acted as a regularizer;
- broad semantic/category structure in the brain responses was enough, even if the exact image–brain pairing did not matter;
- another non-neural target with similar structure would have produced the same gain;
- the nonlinear mapping simply created a more convenient basis for the downstream encoding readout;
- the effect was specific to one participant, ROI, split, or stimulus distribution.

Better prediction does not distinguish these explanations.

Neither does a prettier representational geometry.

That does not invalidate the measurements. It limits the claim they identify.

---

## NeuroAI has made the original idea more relevant, not less

The broader research direction has grown substantially since that pilot.

Recent studies explicitly optimize artificial vision models toward human EEG or fMRI representations and report improved model–brain alignment. ReAlnet used non-invasive EEG to train visual representations toward human neural structure; related work extended the approach to fMRI. Other recent frameworks align semantic or conceptual model spaces with human neural representations and evaluate transfer across datasets or modalities.

I find this work exciting because it turns brain-model comparison into something more intervention-like: neural data does not merely score the model after training; it changes the representation.

But stronger optimization makes the evidential problem more important.

If I deliberately train a model to pass a neural similarity metric, then improvement on that metric is no longer surprising by itself.

The harder questions become:

- does the effect generalize to neural data not used to define the objective?
- does it survive held-out participants or stimulus distributions?
- does correct neural pairing matter?
- is the gain specific to neural information rather than a matched non-neural target?
- does the transformed model reproduce brain-relevant invariances, behavior, or causal responses that were not directly optimized?

The more capable the alignment method becomes, the more important these out-of-objective tests become.

---

## The control that changed my mind most: break the pairing

A recent project gave me a concrete version of this lesson.

I trained a small residual adapter using correctly paired fMRI-derived targets. Under one comparison, the result looked exactly like the kind of positive neural-supervision effect I would once have found persuasive: the paired neural adapter outperformed a direct nonlinear readout in **all eight participants**.

But the experiment had stronger controls.

The paired neural target lost to the best matched non-neural target in **all eight participants**.

And when the neural targets were shuffled *within category*—preserving broad structure while breaking the exact stimulus-specific neural pairing—the result was essentially unchanged.

So this pattern held:

`brain supervision > nonlinear baseline`

while

`brain supervision < matched non-neural target`

and

`brain supervision ≈ pairing-broken neural target`

Under my older standard, I might have emphasized the first line.

Under my current standard, the second and third lines determine the claim.

The adapter learned something useful.

The experiment did not establish that the useful information was specific to the correctly paired neural signal.

That is a much more precise conclusion.

---

## The evidence ladder I now use

I no longer think “brain-aligned” should be one binary label.

I find it more useful to ask what level of evidence a result has reached.

### 1. Predictive alignment

Can the model or representation predict held-out neural responses?

This is already meaningful. It establishes neural accessibility under the declared readout and evaluation contract.

### 2. Representational alignment

Do the internal geometries or decodable variables resemble those measured in the brain beyond what predictive performance alone captures?

This strengthens the description of *what* is similar, but it still need not identify mechanism.

### 3. Specificity

Does the aligned representation beat controls that preserve nuisance structure while removing the information named in the claim?

For neural supervision, this includes matched non-neural targets and broken neural pairings.

### 4. Generalization

Does the result transfer across people, stimuli, tasks, datasets, or modalities without choosing the representation using those outcomes?

This determines the scope of the claim.

### 5. Identification

Could the evaluator distinguish the proposed representation from plausible alternatives if one were actually the ground truth?

Known-truth recovery tests are useful here because real neural data cannot tell us the answer directly.

### 6. Causal or mechanistic alignment

Do interventions produce the predicted changes in internal states, neural responses, behavior, or closed-loop dynamics?

This is the point at which “shares a useful representation” can begin to approach “implements a related mechanism.”

Not every project needs to reach level six.

The important thing is to name the level it actually reaches.

---

## A higher benchmark score can still miss the thing we care about

Several results in the broader literature have reinforced this change in perspective for me.

Model metamers can reveal dramatic differences between artificial and human invariances even when standard neural prediction benchmarks are similar. Adversarial perturbations can separate encoding models that look nearly tied under ordinary fMRI predictivity. Known-truth system-identification tests can fail to recover architecture even when similarity scores look good.

These results all make the same methodological point from different directions:

> **Similarity under one observation operator does not imply equivalence of the underlying systems.**

This is also the bridge to my broader view in [*Intelligence Is in the Loop*](/blog/intelligence-is-in-the-loop/). If internal states matter because of the causal roles they play in action, learning, and feedback, then representational alignment is one slice of the comparison—not the endpoint.

---

## What I would do differently with the old experiment

If I were rebuilding the original contrastive brain-alignment study today, I would keep the central idea but redesign the evidence around it.

I would want at least:

- **held-out stimuli** for the basic representation and encoding gain;
- **held-out participants** if the claim is about shared human structure;
- **matched non-neural supervision** with the same architecture, data, capacity, and optimization budget;
- **pairing-broken neural controls** that preserve broad neural structure while destroying stimulus-specific correspondence;
- **frozen external neural or behavioral tests** not used to choose the objective;
- **known-truth recovery** to calibrate what the evaluation pipeline can identify;
- eventually, **targeted interventions or metamers** that force aligned and control models to disagree.

The most important addition would not be a bigger model.

It would be a better set of alternatives.

---

## Brain alignment as a scientific claim, not a training objective

There is a subtle language problem here.

“Brain alignment” can mean:

1. an **optimization objective**—we explicitly train a model to reduce some distance to neural data;
2. an **evaluation result**—the optimized model scores better on a neural metric;
3. a **scientific claim**—the model has captured a brain-relevant representation or mechanism.

The first does not guarantee the second on independent data.

The second does not guarantee the third.

Keeping those meanings separate has helped me think more clearly about this whole research area.

A model can be *brain-aligned by training* without yet being *brain-aligned in the stronger explanatory sense*.

That stronger claim has to be earned by tests the training objective could not trivially satisfy.

---

## The question I now ask

When I see a representation described as more brain-like, I no longer begin with:

> How much did the neural score improve?

I begin with:

> **What alternative model of the result would have produced the same improvement, and what experiment rules it out?**

Sometimes the answer is a shuffled target.

Sometimes it is a matched non-neural objective.

Sometimes it is a held-out participant or new stimulus distribution.

Sometimes it is a perturbation that forces two predictive models to diverge.

And sometimes the honest answer is that the current experiment does not distinguish the alternatives yet.

That is not a reason to abandon alignment work.

It is a reason to make the word *alignment* more precise.

The change in my thinking is therefore less dramatic than it may sound.

I still want to use artificial models and brain data to meet in a common representational space.

I just no longer think that meeting in the same space is enough to tell us why they are there.

---

## Related notes

- [*A Brain-Predictive Model Is Not Yet an Explanation*](/blog/a-brain-predictive-model-is-not-yet-an-explanation/) — predictivity versus identification.
- [*When Brain Supervision Helps for the Wrong Reason*](/blog/when-brain-supervision-helps-for-the-wrong-reason/) — a pairing-specificity falsification.

---

## References

- Han, Y., Poggio, T. A., & Cheung, B. (2023). [System Identification of Neural Systems: If We Got It Right, Would We Know?](https://proceedings.mlr.press/v202/han23d.html). *ICML*.
- Feather, J., Leclerc, G., Mądry, A., & McDermott, J. H. (2023). [Model metamers reveal divergent invariances between biological and artificial neural networks](https://www.nature.com/articles/s41593-023-01442-0). *Nature Neuroscience*.
- McNeal, N., Deb, M., & Murty, N. A. R. (2024). [Small-scale adversarial perturbations expose differences between predictive encoding models of human fMRI responses](https://proceedings.mlr.press/v285/mcneal24a.html).
- Lu, Z., Wang, Y., & Golomb, J. D. (2024). [Achieving more human brain-like vision via human EEG representational alignment](https://pubmed.ncbi.nlm.nih.gov/38351926/).
- [Teaching CORnet human fMRI representations for enhanced model-brain alignment](https://pubmed.ncbi.nlm.nih.gov/40242427/) (2025).
- [Human-like cognitive generalization for large models via mental representation-guided supervision](https://www.nature.com/articles/s41467-026-71267-5) (2026).
