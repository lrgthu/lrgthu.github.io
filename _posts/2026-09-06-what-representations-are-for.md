---
title: "What Visual Representations Are For"
date: 2026-09-06 13:00:00 -0500
updated: 2026-09-06
permalink: /blog/what-representations-are-for/
summary: "Revisiting my visual neuroscience work through Marr: what visual descriptions make explicit, how they relate, and how their organization changes across cortex and time."
description: "A personal rethink of visual representation, hierarchy, and computation, grounded in my doctoral work on brain encoding models and revisited through Marr."
tags: [vision, neuroscience, representation-learning, neuroai]
writing_type: Perspective
toc: true
toc_open: false
---

*Rethinking my doctoral work through Marr*

Some of the most satisfying figures in my dissertation are maps of visual cortex colored by neural-network layer. A progression of colors connects two things that initially seem difficult to compare: a network transforming an image and a brain responding to it.

The maps make a complicated relationship legible. But they also invite a particular way of thinking. Once each location has a color, it is easy to imagine that we have assigned it a place on a ladder: a little more abstract here, a little closer to recognition there.

Looking back at my [doctoral work](#ref-thesis), I want to understand what that ladder is supposed to organize.

A photograph of a chair can be described in terms of its contours, visible surfaces, orientation, category, or position within a room. Some descriptions depend on others. Some preserve distinctions that others make easier to ignore. Calling one description “higher” does not yet explain these relationships.

This is the question I now bring back to my work:

> **What has to become explicit, and in what form, for a visual system to make sense of what it sees?**

Marr helps me ask it. I have come to think of visual representations less as rungs on a single ladder than as ways of making different properties of a scene available for computation. What interests me is how those descriptions relate: what they share, what each makes easier, and how their contributions unfold during seeing.

## What is the visual problem?

Take two photographs of the same chair from different angles. Recognizing that they show the same object and describing how its appearance has changed are both visual achievements. They require us to treat the difference between the images differently.

For the identity judgment, some of that difference should not affect the answer. For the orientation judgment, it is precisely what we need to recover. The same scene gives rise to different computational questions.

This is where Marr's perspective matters to me. His computational level asks what problem is being solved and why the proposed computation is appropriate. His account of representation asks which information a description makes explicit; the format matters because it affects the operations that can be performed on it ([Marr, 1982](#ref-marr)).

What, then, makes a visual representation “more abstract”? A representation might become less sensitive to viewpoint while making object identity easier to distinguish. Another might organize surface orientation more explicitly. Both involve substantial computation.

The issue is not whether vision is hierarchical, but what a particular hierarchy orders—and which relationships among visual descriptions that ordering leaves unspecified.

Object recognition is a powerful way to constrain a model. But when I use that model to study human vision, I also inherit a particular emphasis: the distinctions its training rewards, and the variations it can afford to treat as equivalent.

That emphasis became tangible in my comparisons of networks trained for different visual tasks. Changing from object to scene classification altered some layer-to-cortex correspondences in AlexNet, while the analogous ResNet50 comparison did not show the same pattern. The edge-detection models provided another arrangement of correspondences ([dissertation, chapter 4](#ref-thesis)). These were exploratory analyses of one participant, and the classification comparisons changed training data along with task. They do not isolate a single cause. They do make the choice of visual model part of the question rather than a neutral measuring device.

I now want to know what a model's features help us ask about vision. A classifier, a boundary detector, and a model of scene structure offer different starting descriptions. Their usefulness should depend on the visual distinction under investigation, not only on how far their layers are from the input.

## What a representation makes easy

My encoding models learned mappings from image features to measured brain responses. Each feature space offered a different description of the same images, and its predictive value depended on what the fitted mapping could recover.

Consider an array of pixel intensities and a description of contour junctions derived from it. Both concern the same image, but they do not make the same comparisons straightforward. The second has already done work that a system starting from pixels would still have to do.

Something similar matters when a later network layer improves a linear encoding model. In a fixed deterministic feedforward network, that layer is computed from the earlier ones. It cannot introduce new evidence about the image that was absent from its input. It can reorganize what is available, making some relationships easier for a linear mapping to recover.

The encoding result establishes usefulness to our fitted readout, within the models and data tested. It gives me a candidate organization of visual information whose role in the brain remains to be explained.

The question shifts from how much information a layer contains to which visual distinctions its transformations make accessible.

Marr’s pairing of representation and algorithm captures this distinction. A description has a format, and a process constructs or transforms it. His proposed descriptions of image structure, visible surfaces, and three-dimensional shape made that connection concrete, although my network-layer comparisons do not test those particular proposals ([Marr, 1982](#ref-marr)).

A learned feature space may mix several kinds of visual variation, without admitting a tidy verbal label. Calling it a representation of “shape” or “semantics” should begin an investigation into what it makes accessible, rather than conclude one.

To interpret a layer-to-cortex correspondence, I therefore need to look beyond the layer’s address in the network and ask what its organization of image information makes accessible.

## What descriptions share—and what they add

A representation considered alone can seem more self-contained than it is.

Suppose a feature space predicts responses to photographs of rooms. It might capture differences in spatial layout, texture, object content, or combinations of these. Natural images do not conveniently vary each property in isolation. The success of the feature space becomes more informative when I ask what another description can already account for.

This was the motivation behind our work on [stacked regressions and structured variance partitioning](#ref-stacking). We combined predictions made from different feature spaces and used their relationships to organize comparisons. Instead of assigning each region a winner, I could ask how its response was accounted for by related descriptions together.

In the cortical analyses, some scene-selective regions were associated with broader ranges of network features than some face- and body-selective regions. A single preferred depth could obscure that difference. These ranges summarize the tested encoding comparisons, not uniquely identified boundaries of cortical computation. I take them as a reason to investigate how visual descriptions relate, rather than as a settled map of their biological division of labor.

A region’s place in a hierarchy leaves another question open: which visual distinctions help characterize its responses, and how does that pattern differ elsewhere?

Two descriptions can be partly redundant without being interchangeable. One may expose distinctions that are awkward to recover from the other. Their overlap is not merely an inconvenience for statistical analysis; it is part of what an account of visual computation needs to explain.

This does not imply that the brain implements our stacking procedure. Combining predictions is something we did as researchers. The biological question it helps bring into view is how several descriptions of a scene might share work, and where their contributions diverge.

I would find “this region represents scenes” more satisfying if I could say which distinctions among scenes matter there, how those distinctions relate to other visual descriptions, and why that organization is useful. The map gives me somewhere to begin.

## Depth, location, and time

Three kinds of order need to be kept separate: depth in a network, position in visual cortex, and time during a response.

My work related all three. It did not make them interchangeable.

The network comparisons are one reason. A layer's depth specifies how it is reached within a particular architecture. It does not assign it a fixed amount of biological processing. A change in the preferred layer between trained models reflects a change in our candidate descriptions, not in the measured brain.

The temporal analyses exposed another distinction. The early responses showed a progression through network features, but the later pattern was not adequately summarized by advancing to the final layer. In one MEG comparison, adding the intermediate Conv-5 feature space to a model using late-layer FC-7 features produced a more sustained gain than the reverse addition ([dissertation, chapter 5](#ref-thesis)).

That finding concerns particular model features under particular viewing conditions. It does not show when participants recognized an object, or establish feedback or active maintenance. The image was still present during much of the MEG interval. What it does give me is a reason to distinguish when a description first becomes relevant from how long it remains useful for predicting the response.

The question is how these descriptions participate in an unfolding visual computation.

A static cortical map and a time course answer different parts of that question. The map characterizes variation across locations. The time course characterizes how relationships with image features change during viewing. The two constrain an account of visual processing, but separate datasets do not reconstruct a single observed flow through the brain.

What, then, does the proposed hierarchy order: receptive-field scale, the transformations required to recover a property, tolerance to a change in appearance, or the time at which a distinction becomes available? A useful model may relate these properties. Their relationship is a result to establish, not an equivalence to assume.

## The organization I want to understand

**The view I am working toward is that visual representations should be understood through the division of computational work among descriptions of the same scene.**

That need not mean a separate store for every property, or a separate pathway for every judgment. A population code could preserve orientation while allowing an identity readout to ignore it. Conversely, making identity accessible does not guarantee that the same readout can recover orientation. The relevant organization includes both what is available and how it can be used.

Return to the chair. Recognizing it, recovering its visible shape, distinguishing a shadow from a surface boundary, and locating it within a room pose different questions about the relationship between the image and the scene. A theory of vision should explain where these problems share computations and where they require different descriptions.

Marr's value for me is in keeping that connection between a visual problem and a representational choice in view. My thesis gave me ways to investigate those choices in measured brain responses. Rethinking the work now, I want to use the correspondences to understand the organization they hint at.

The colors on the cortical map still matter. I am asking something more specific of them now: not just where a feature space fits, but what visual work its way of describing an image helps us understand.

---

## Sources

<p id="ref-thesis"><strong>Lin, R. (2024).</strong> <em>Bridging visual representations in deep neural networks and the human brain.</em> PhD dissertation, Carnegie Mellon University. The network comparisons and temporal results discussed here draw on chapters 4 and 5; the methods in chapter 3 are also reported in the article below. <a href="https://www.cmu.edu/compbio/news/2024/ruogu-lin-thesis-defense.html">Defense announcement and abstract</a>.</p>

<p id="ref-stacking"><strong>Lin, R., Naselaris, T., Kay, K., &amp; Wehbe, L. (2024).</strong> Stacked regressions and structured variance partitioning for interpretable brain maps. <em>NeuroImage, 298</em>, 120772. <a href="https://doi.org/10.1016/j.neuroimage.2024.120772">Paper</a>.</p>

<p id="ref-marr"><strong>Marr, D. (1982).</strong> <em>Vision: A Computational Investigation into the Human Representation and Processing of Visual Information.</em> W. H. Freeman. Chapter 1, especially sections 1.2 and 1.3. <a href="https://www.contrib.andrew.cmu.edu/~kk3n/80-300/marr2.pdf">Chapter excerpt</a>.</p>
