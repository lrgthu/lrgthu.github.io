---
title: "What Representations Are For"
date: 2026-09-06 13:00:00 -0500
permalink: /blog/what-representations-are-for/
summary: "Revisiting my PhD through Marr: from matching neural-network layers to brain activity toward understanding what representations make possible."
description: "A research perspective on David Marr, visual representations, and my doctoral work on brain encoding models, structured variance partitioning, and the persistence of intermediate visual representations."
tags: [neuroscience, representation-learning, cognitive-science, neuroai]
writing_type: Perspective
toc: true
toc_open: false
---

*Revisiting my PhD through Marr*

My dissertation contains maps of cortex colored by the layers of a neural network. Different colors indicate which features help predict the measured responses to images. Viewed from a distance, such a map can look like a translation between two visual systems: an artificial network on one side, a human brain on the other.

The appeal is easy to understand. A network transforms an image through successive representations. The brain also transforms visual input. Perhaps comparing the two will reveal something about how seeing works.

My PhD, *Bridging visual representations in deep neural networks and the human brain*, investigated what these correspondences could tell us. It developed methods for combining and comparing representations, examined how the correspondence depended on the artificial network, and followed its evolution through time ([Lin, 2024](#ref-thesis)).

Looking back, the question I find most important is slightly different from the one a colored brain map invites:

> **What does a representation make possible for the system that uses it?**

A match can help us approach that question. It does not answer it by itself. To get further, we need to connect the information a representation makes available to the operations that use it.

This is the thread I now see more clearly in my doctoral work. Marr gives me a way to follow it.

## The part of Marr I return to

Marr's three levels distinguish the problem a system solves and why that computation is appropriate, the representations and algorithms that solve it, and their physical realization. The distinction I want to recover is inside the middle level: **representation and algorithm**, together ([Marr, 1982](#ref-marr)).

A representation is not merely a container with some information inside. Its format matters because different formats make different operations straightforward.

Marr illustrates this with number systems. Decimal and binary notation can express the same number, yet make different properties immediately apparent: powers of ten are easy to recognize in decimal, powers of two in binary. The choice of notation changes what is explicit and what requires work to recover.

For me, the useful shift is from asking whether information is present to asking how it has been prepared for use.

Consider a photograph of a cup. One description might emphasize its category, another its contour, another the position of its handle. These are not simply more or less detailed answers to the same question. They could support different questions. Recognizing the cup and judging which way its handle points need not benefit from exactly the same description.

That example also exposes a limitation of a common research habit. We can characterize a representation extensively—measure its geometry, identify predictable variables, compare it with another representation—while leaving its role in a computation uncertain.

This does not make characterization unimportant. It gives characterization a direction. I want to know not only what distinctions a representation preserves, but which subsequent operations can exploit them, under what constraints, and at what time.

Three parts of my thesis bring that question into focus.

## From the best match to the missing contribution

The first problem was statistical, but its implications were conceptual.

An encoding model learns to predict measured brain responses from a description of the stimulus. In our case, those descriptions could be the activations of different neural-network layers. We fitted mappings from those features to brain measurements and evaluated their predictions on held-out data ([Lin et al., 2024](#ref-stacking)).

A natural next step is to ask which layer predicts a brain region best. But layers are not independent contestants. They process the same images, and later layers are computed from earlier ones. Several can predict overlapping aspects of a response. A winning layer does not tell us which alternatives are genuinely dispensable.

Our stacking approach combined the predictions of separate encoding models rather than requiring a single feature space to carry the whole explanation. Structured variance partitioning then used known relationships among the feature spaces to organize comparisons: what predictive contribution remained when other descriptions were already available?

That changed the question from *Which layer wins?* to *What do we lose by leaving this description out?*

The second question is closer to the kind of explanation I care about. It asks whether a candidate representation supplies something the tested alternatives fail to supply. But the meaning of “supplies” still needs care.

Suppose a later layer improves a linear encoding model beyond what an earlier layer provides. It is tempting to conclude that the later layer contains new information. Yet in a deterministic feedforward network, its activations are computed from the earlier ones. They cannot add new evidence about the image that was absent from their input. They can reorganize that evidence.

A small mathematical example makes the distinction concrete. Two binary inputs completely determine whether they differ—the exclusive-or function. But a single linear decision boundary cannot separate the two possible answers in the original input space. A suitable nonlinear transformation makes the answer linearly accessible. Nothing new has been observed. What changed is the work the readout must do.

This is why I now read an incremental prediction result as a statement about **information, format, and the allowed mapping together**. It can reveal that one description makes a relationship accessible to our model that another does not. It does not, by itself, establish that the brain contains a distinct store of information corresponding to that network layer.

Correlations among predictors, regularization, and the generalization tested all matter for interpreting an encoding model ([Kriegeskorte & Douglas, 2019](#ref-encoding)). Stacking and variance partitioning do not make those dependencies disappear. They make particular comparisons more explicit.

Nor is our fitted mapping automatically the readout used by the brain. A linear encoding model is an analytical choice, not a discovered neural circuit. Still, the question of accessibility is valuable: it begins to connect a description of a representation with a description of what can be done with it.

## A layer number is not a cognitive coordinate

The next part of the thesis examined something easy to forget when looking at a brain map: its colors belong to a particular artificial model.

In an exploratory analysis of one participant from the Natural Scenes Dataset, we compared features from networks trained for object and scene classification. For AlexNet, the stacking-weight patterns in early visual regions shifted from Conv-3 toward Conv-4 between those training conditions. The corresponding ResNet50 comparison did not show the same shift. Networks trained for edge detection also did not simply reproduce a progression from deeper network layers to higher visual regions ([Lin, 2024, chapter 4](#ref-thesis)).

These comparisons have important limits. They concern one participant, and the object-versus-scene comparison changed the training dataset along with the task. They do not isolate an effect of the objective alone, or establish a universal difference between architectures.

What they do interrupt is a too-literal reading of a layer-to-brain correspondence.

“Layer five” is a location in a model, not a unit of cognitive complexity. The useful question is what transformations precede it, what distinctions it preserves, and what subsequent processing it supports. Those properties need not remain fixed when the architecture or training conditions change.

This makes the comparison more demanding, but also more interesting. We are not looking for a universal conversion from network depth to cortical position. We are testing whether particular ways of organizing visual information help explain particular neural responses.

The comparison can also run in the other direction. Independently established knowledge about biological vision can help us formulate hypotheses about what an artificial representation is doing. But this has to remain a comparison between independently constrained accounts. Two poorly understood systems do not explain each other merely because their responses correlate.

For me, the lasting point is that a representation's identity cannot be exhausted by its address in a network. We need to understand its role.

The temporal results made that need harder to ignore.

## Why is the middle still there?

The final empirical part of my thesis asked whether intermediate visual representations are merely transient steps toward a more abstract description, or remain relevant later in perception.

There is an intuitive story in which vision proceeds like a relay. Early features hand off to intermediate features, which hand off to a high-level representation. Once the object is recognized, the important computational work is done.

That is a useful hypothesis to make explicit, not a fair summary of everything visual neuroscience already knows. It is also a stronger claim than the existence of a hierarchy. A hierarchy specifies relationships among stages; it does not, by itself, determine when earlier descriptions cease to be useful.

We used network features to predict MEG and EEG responses over time. In the MEG analyses, intermediate AlexNet features remained predictive beyond the initial progression through layers. A targeted comparison was especially suggestive: adding Conv-5 to an encoding model using FC-7 provided a more sustained predictive contribution than the reverse addition of FC-7 to Conv-5 ([Lin, 2024, chapter 5](#ref-thesis)).

The finding does not mean that semantics disappeared. FC-7 is one learned feature space, not the full set of things a brain can represent about an object. Indeed, a supplementary analysis found additional predictive value from features derived from behavioral similarity judgments beyond the AlexNet features. A limited contribution from one network layer cannot establish the absence of a cognitive process.

What interests me is the persistence of predictive value in a representation we call “intermediate.”

> **Intermediate is a position in our model. It need not mean temporary in perception.**

Return to the cup. Producing the category label might settle whether it is a cup rather than a bowl. It does not settle which way the handle points, how its contour differs from another cup, or where one would grasp it. A description useful for those operations need not become obsolete when the category is available.

This is a possible functional interpretation, not something these experiments established. The recordings did not test those uses. But it changes the question I would bring to the result. Instead of asking why the brain has not finished moving to a higher representation, I would ask what further operations still benefit from the information made accessible at an intermediate level.

There is a second distinction to preserve. Sustained predictability is not the same as demonstrating a stable neural state, active maintenance, or feedback. Fitting the same static feature space at multiple time points does not show that the same neural code persists, much less identify the process producing it. Continued sensory input, different temporal response properties, and recurrent processing can all be relevant candidates. These analyses did not distinguish them.

The network has an algorithm, and the neural measurements have a time course. Aligning the network's features to that time course does not automatically give us the brain's algorithm.

This is where the result becomes a starting point rather than an endpoint. A functional account would need to connect the later availability of a description to an operation that benefits from it. For example, does a later disruption selectively impair judgments of shape or orientation while sparing an already available category judgment? That would address a different question from whether a feature space remains predictive.

The distinction is not between a useful experiment and a useless one. It is between learning that a candidate description continues to capture something about the response and learning why the system continues to make that kind of information available.

## What I would now ask of a representation

I do not think the right retrospective is that my thesis mapped representations but therefore failed to explain anything. Nor do I think its three empirical chapters can be assigned neatly to Marr's three levels, as though they completed an explanatory checklist.

Most of the work connected candidate representations to neural measurements. It made some comparisons more discriminating, showed how their interpretation depended on the model, and characterized temporal patterns that a fuller account should explain.

Those are contributions to explanation. They are not a substitute for specifying the transformations that generate the representations or the functions that make those transformations useful.

Marr helps me keep these contributions and open questions in the same picture. His distinction between levels is not a demand that every study solve every problem. It is a reminder to identify which question an observation actually bears on.

A computational account, as I would now pursue it, needs more than the name of a benchmark task. Saying that vision recognizes objects does not yet explain which distinctions must be preserved, which can be ignored, or why a particular format is useful. Even for a narrowly defined task, those decisions depend on the conditions under which the system has to succeed.

Likewise, identifying a representation is only part of an algorithmic account. I also want to understand how the representation is constructed, how it changes, and what processes can use it. Its neural realization then constrains which of those accounts are plausible.

That perspective leaves me with a more specific question than whether a representation is brain-like:

**What information must remain available, in what form, and at what time, for the system to do what comes next?**

The answer will not always require a larger model or a more elaborate experiment. Sometimes it may require a sharper comparison between two descriptions we already have. Sometimes it will require changing the task, or measuring what happens when access to a particular kind of information is disrupted.

My doctoral work gave me tools for asking where and when candidate representations help predict the brain. Revisiting it through Marr helps me see what I want those tools to serve: an account of how information is organized for use.

A brain map can show where a model finds a correspondence. The next question is what that correspondence helps us understand about seeing.

---

## Sources and further reading

<p id="ref-marr"><strong>Marr, D. (1982).</strong> <em>Vision: A Computational Investigation into the Human Representation and Processing of Visual Information.</em> W. H. Freeman. Chapter 1, especially the discussion of representation, process, and the three levels. <a href="https://www.contrib.andrew.cmu.edu/~kk3n/80-300/marr2.pdf">Chapter excerpt</a>.</p>

<p id="ref-stacking"><strong>Lin, R., Naselaris, T., Kay, K., &amp; Wehbe, L. (2024).</strong> Stacked regressions and structured variance partitioning for interpretable brain maps. <em>NeuroImage, 298</em>, 120772. <a href="https://doi.org/10.1016/j.neuroimage.2024.120772">Paper</a>.</p>

<p id="ref-thesis"><strong>Lin, R. (2024).</strong> <em>Bridging visual representations in deep neural networks and the human brain.</em> PhD dissertation, Carnegie Mellon University, chapters 3–5. The task/architecture comparisons and temporal results discussed here are drawn from the dissertation; the published methods paper above is a separate source. <a href="https://www.cmu.edu/compbio/news/2024/ruogu-lin-thesis-defense.html">Defense announcement and abstract</a>.</p>

<p id="ref-encoding"><strong>Kriegeskorte, N., &amp; Douglas, P. K. (2019).</strong> Interpreting encoding and decoding models. <em>Current Opinion in Neurobiology, 55</em>, 167–179. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6705607/">Open-access manuscript</a>.</p>
