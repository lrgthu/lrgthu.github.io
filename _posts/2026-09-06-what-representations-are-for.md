---
title: "What Representations Are For"
date: 2026-09-06 13:00:00 -0500
updated: 2026-09-06
permalink: /blog/what-representations-are-for/
summary: "Revisiting my visual neuroscience work through Marr: what visual descriptions make explicit, how they relate, and how their organization changes across cortex and time."
description: "A personal rethink of visual representation, hierarchy, and computation, grounded in my doctoral work on brain encoding models and revisited through Marr."
tags: [vision, neuroscience, representation-learning, neuroai]
writing_type: Perspective
toc: true
toc_open: false
update_note: "Rewritten around the questions my doctoral work raises about visual computation and the organization of representations."
---

*Rethinking visual computation through my doctoral work*

Some of the most satisfying figures in my dissertation are maps of visual cortex colored by neural-network layer. A progression of colors connects two things that initially seem difficult to compare: a network transforming an image and a brain responding to it.

The maps make a complicated relationship legible. But they also invite a particular way of thinking. Once each location has a color, it is easy to imagine that we have assigned it a place on a ladder: a little more abstract here, a little closer to recognition there.

Looking back at my [doctoral work](#ref-thesis), I want to understand what that ladder is supposed to organize.

A photograph of a chair can be described in terms of its contours, visible surfaces, orientation, category, or position within a room. Some descriptions depend on others. Some preserve distinctions that others make easier to ignore. Calling one description “higher” does not yet explain these relationships.

This is the question I now bring back to my work:

> **What has to become explicit, and in what form, for a visual system to make sense of what it sees?**

Marr helps me ask it. The results that give the question substance come from the work itself: comparing related feature spaces, examining their changing correspondence with cortex, and following their predictive contributions through time. Together, they have made me rethink what I am looking for when I study a visual representation.

## What is the visual problem?

Take two photographs of the same chair from different angles. Recognizing that they show the same object and describing how its appearance has changed are both visual achievements. They require us to treat the difference between the images differently.

For the identity judgment, some of that difference should not affect the answer. For the orientation judgment, it is precisely what we need to recover. There is no contradiction. The same scene gives rise to different computational questions.

This is where Marr's perspective matters to me. His computational level asks what problem is being solved and why the proposed computation is appropriate. His account of representation asks which information a description makes explicit; the format matters because it affects the operations that can be performed on it ([Marr, 1982](#ref-marr)).

Applied to my work, this changes the meaning of a familiar phrase: *a more abstract visual representation*.

More abstract with respect to what? A representation might become less sensitive to viewpoint while making object identity easier to distinguish. Another might organize surface orientation more explicitly. Both involve substantial computation. One is not simply further along a universal scale of understanding.

I do not take this to mean that object recognition is the wrong problem. It is a powerful way to constrain a model. But when I use that model to study human vision, I also inherit a particular emphasis: the distinctions its training rewards, and the variations it can afford to treat as equivalent.

That emphasis became tangible in my comparisons of networks trained for different visual tasks. Changing from object to scene classification altered some layer-to-cortex correspondences in AlexNet, while the analogous ResNet50 comparison did not show the same pattern. The edge-detection models provided another arrangement of correspondences ([dissertation, chapter 4](#ref-thesis)). These were exploratory analyses of one participant, and the classification comparisons changed training data along with task. They do not isolate a single cause. They do make the choice of visual model part of the question rather than a neutral measuring device.

I now want to know what a model's features help us ask about vision. A classifier, a boundary detector, and a model of scene structure offer different starting descriptions. Their usefulness should depend on the visual distinction under investigation, not only on how far their layers are from the input.

## What a representation makes easy

My encoding models learned mappings from image features to measured brain responses. Different layers supplied different descriptions of the same images. A detail of this setup now seems more important to me than it did in the language of “matching layers”: the mapping has to be able to use the description.

Consider an array of pixel intensities and a description of contour junctions derived from it. Both concern the same image, but they do not make the same comparisons straightforward. The second has already done work that a system starting from pixels would still have to do.

Something similar matters when a later network layer improves a linear encoding model. In a deterministic feedforward network, that layer is computed from the earlier ones. It cannot introduce new evidence about the image that was absent from its input. It can reorganize what is available, making some relationships easier for a linear mapping to recover.

For visual neuroscience, I find this distinction productive. It directs attention toward the transformation: which distinctions become easier to express, which become less accessible, and what visual computation benefits from that change?

This is also why Marr put representation and algorithm together. A description has a format, and a process constructs or transforms it. His proposed descriptions of image structure, visible surfaces, and three-dimensional shape made that connection concrete, although my network-layer comparisons do not test those particular proposals ([Marr, 1982](#ref-marr)).

A learned feature space may mix several kinds of visual variation, without admitting a tidy verbal label. Calling it a representation of “shape,” or “semantics,” should begin an investigation into what it makes accessible, rather than conclude one.

This has changed how I read my own maps. A correspondence is interesting partly because it tells me that a particular organization of image information is useful for accounting for a neural response. To understand that organization, I need to look beyond its address in the network.

## Understanding a description through other descriptions

A representation considered alone can seem more self-contained than it is.

Suppose a feature space predicts responses to photographs of rooms. It might capture differences in spatial layout, texture, object content, or combinations of these. Natural images do not conveniently vary each property in isolation. The success of the feature space becomes more informative when I ask what another description can already account for.

This was the motivation behind our work on [stacked regressions and structured variance partitioning](#ref-stacking). We combined predictions made from different feature spaces and used their relationships to organize comparisons. The methodological details matter for the results; what has stayed with me is the shift in question. Instead of assigning each region a winner, I could ask how its response was accounted for by related descriptions together.

In the cortical analyses, some scene-selective regions were associated with broader ranges of network features than some face- and body-selective regions. A single preferred depth could obscure that difference. These ranges describe the behavior of the tested encoding models, not a collection of separate neural compartments, or proof that each layer in a range is individually necessary.

Still, they changed what I wanted to understand about a visual region. Where does it sit in a hierarchy? What mixture of visual distinctions helps characterize its responses? How does that mixture differ from the one useful elsewhere? Those questions are related, but the first cannot substitute for the others.

I find the relational aspect especially important. Two descriptions can be partly redundant without being interchangeable. One may expose distinctions that are awkward to recover from the other. Their overlap is not merely an inconvenience for statistical analysis; it is part of what an account of visual computation needs to explain.

This does not imply that the brain implements our stacking procedure. Combining predictions is something we did as researchers. The biological question it helps bring into view is how several descriptions of a scene might share work, and where their contributions diverge.

I would find “this region represents scenes” more satisfying if I could say which distinctions among scenes matter there, how those distinctions relate to other visual descriptions, and why that organization is useful. The map gives me somewhere to begin.

## Depth, location, and time

Once I think in terms of organization, three kinds of order become worth keeping separate: depth in a network, position in visual cortex, and time during a response.

My work related all three. It did not make them interchangeable.

The network comparisons are one reason. A layer's depth specifies how it is reached within a particular architecture. It does not assign it a fixed amount of biological processing. When the preferred layer changes between trained models, the brain has not moved to a different rung. We have changed the descriptions against which we are measuring it.

The temporal analyses exposed another distinction. The early responses showed a progression through network features, but the later pattern was not adequately summarized by advancing to the final layer. In one MEG comparison, an intermediate feature space, Conv-5, added predictive value beyond a later one, FC-7, more persistently than the reverse addition ([dissertation, chapter 5](#ref-thesis)).

That finding concerns particular model features under particular viewing conditions. It does not show when participants recognized an object, or establish feedback or active maintenance. The image was still present during much of the MEG interval. What it does give me is a reason to distinguish when a description first becomes relevant from how long it remains useful for predicting the response.

The larger question is not whether the middle or the top of a network is more important. It is how the different descriptions participate in an unfolding visual computation.

A static cortical map and a time course answer different parts of that question. The map characterizes variation across locations. The time course characterizes how relationships with image features change during viewing. Reading them together should sharpen the account of visual processing, without pretending that separate datasets reconstruct a single observed flow through the brain.

I now see hierarchy as something an explanation must specify, rather than a word that supplies the explanation. What is ordered: receptive-field scale, the transformations required to recover a property, tolerance to a change in appearance, or the time at which a distinction becomes available? A useful model may relate these properties. Their relationship is a result to establish, not an equivalence to assume.

## The organization I want to understand

**The view I am working toward is that visual representations should be understood through the division of computational work among descriptions of the same scene.**

That need not mean a separate store for every property, or a separate pathway for every judgment. A population code could preserve orientation while allowing an identity readout to ignore it. Conversely, making identity accessible does not guarantee that the same readout can recover orientation. The relevant organization includes both what is available and how it can be used.

This is a more specific ambition than saying that vision is complex or that several levels matter. I want an account that explains why a particular description is useful for a particular visual distinction, how it relates to the descriptions around it, and how those relationships change during viewing.

The question also gives my methods a clearer purpose. Comparing feature spaces can help determine which candidate descriptions substitute for one another. Changing the visual task can reveal which distinctions our model has been organized to preserve. Examining time can constrain when a proposed contribution belongs in the computation. None of these investigations has to provide the whole account; they can make different parts of it less arbitrary.

Return to the chair. Recognizing it, recovering its visible shape, distinguishing a shadow from a surface boundary, and locating it within a room are not simply four positions on a single ladder. They involve different relationships between the image and the scene. A theory of vision should explain how these problems are connected, where they share computations, and where they require different descriptions.

Marr's value for me is in keeping that connection between a visual problem and a representational choice in view. My thesis gave me ways to investigate those choices in measured brain responses. Rethinking the work now, I want to use the correspondences to understand the organization they hint at.

The colors on the cortical map still matter. I am asking something more specific of them now: not just where a feature space fits, but what visual work its way of describing an image helps us understand.

---

## Sources

<p id="ref-thesis"><strong>Lin, R. (2024).</strong> <em>Bridging visual representations in deep neural networks and the human brain.</em> PhD dissertation, Carnegie Mellon University. The network comparisons and temporal results discussed here draw on chapters 4 and 5; the methods in chapter 3 are also reported in the article below. <a href="https://www.cmu.edu/compbio/news/2024/ruogu-lin-thesis-defense.html">Defense announcement and abstract</a>.</p>

<p id="ref-stacking"><strong>Lin, R., Naselaris, T., Kay, K., &amp; Wehbe, L. (2024).</strong> Stacked regressions and structured variance partitioning for interpretable brain maps. <em>NeuroImage, 298</em>, 120772. <a href="https://doi.org/10.1016/j.neuroimage.2024.120772">Paper</a>.</p>

<p id="ref-marr"><strong>Marr, D. (1982).</strong> <em>Vision: A Computational Investigation into the Human Representation and Processing of Visual Information.</em> W. H. Freeman. Chapter 1, especially sections 1.2 and 1.3. <a href="https://www.contrib.andrew.cmu.edu/~kk3n/80-300/marr2.pdf">Chapter excerpt</a>.</p>
