---
title: "What Representations Are For"
date: 2026-09-06 13:00:00 -0500
updated: 2026-09-06
permalink: /blog/what-representations-are-for/
summary: "Revisiting my doctoral work through Marr: how comparing visual systems changed the questions I ask about visual problems, representational form, and neural organization."
description: "A personal research perspective on vision through Marr, grounded in my work on brain encoding, task-dependent representations, and the spatial and temporal organization of visual processing."
tags: [vision, neuroscience, representation-learning, neuroai]
writing_type: Perspective
toc: true
toc_open: false
update_note: "Revised the perspective on visual computation, representational choices, and the relationship between artificial and biological vision."
---

*Rethinking my work on vision through Marr*

My dissertation was called *Bridging visual representations in deep neural networks and the human brain*. Looking back, I find myself returning to the word *bridging*.

Much of the work involved making correspondences measurable. We used features from neural networks to predict responses to images, compared the contributions of different feature spaces, and examined how those relationships varied across cortex and through time ([Lin, 2024](#ref-thesis)). A successful comparison could give us a map: this description of an image helps account for activity here, or at this moment.

What interests me now is how to read that map as an account of vision.

A location in a network is easy to name. So is a brain region. The harder question is what makes the relationship between them intelligible: what is being made explicit about an image, and why is that a useful thing for a visual system to compute?

This is why I return to Marr. His distinction between the computational problem, representation and algorithm, and physical implementation separates questions that can otherwise collapse into one another ([Marr, 1982](#ref-marr)). But I do not want to assign my experiments to three boxes. I want to reconsider the assumptions that made their questions seem natural.

**I now think the most useful bridge between artificial and biological vision is built around visual problems and representational choices, not simply around matching parts.**

My work gives me several reasons to think so. Some came from developing better comparisons. Others came from noticing how much the interpretation changed when I changed the model, or asked when rather than where a representation mattered.

## The visual problem hidden in the model

Choosing a network for a brain experiment already introduces a view of vision.

A model trained to classify objects is organized around a particular success condition. Using its representations to study the brain is a reasonable way to investigate recognition. But it is also a decision about which visual distinctions to foreground. I now think that decision deserves as much attention as the eventual match.

Consider two photographs of the same chair taken from different angles. For a judgment of identity, their differences may be something to look past. For a judgment of orientation, those differences are the point. A description that makes one answer easy need not make the other equally easy.

Nothing about a change in viewpoint makes it intrinsically irrelevant. Its relevance depends on the visual problem. Nor does a successful classifier have to discard viewpoint information internally. The narrower point is that its training criterion does not require every useful property of an image to be equally accessible.

Marr's computational level asks for more than the name of a task: it asks what relationship should be computed and why that relationship is appropriate to the problem. His analysis connects the computation to assumptions about the world that produces the images ([Marr, 1982](#ref-marr)).

That distinction helps me reread my comparisons of networks trained under different conditions. In one exploratory fMRI analysis, moving between object- and scene-classification models changed the preferred layer patterns for AlexNet, but did not produce the same change for ResNet50. These were comparisons in one participant, and task changed together with training data; they did not isolate a universal effect of the objective ([Lin, 2024, chapter 4](#ref-thesis)).

What I take from them is a reason to stop treating depth as a ready-made description of visual function. A layer's position acquires meaning through the transformations around it and the conditions under which those transformations were learned. The same layer number need not denote the same visual work.

There is also a more basic lesson. Changing the task label does not amount to changing one isolated ingredient in a theory of vision. Architecture, experience, and the distinctions required at the output jointly shape the candidate representations we bring to the experiment.

I would therefore now ask more explicitly what each candidate is proposing. Is it useful because it preserves local appearance, separates objects despite changes in appearance, captures spatial arrangement, or makes some combination of these accessible? Those possibilities are more informative than calling a representation simply “higher-level.”

The question is not whether object recognition is the wrong problem. It is whether I have specified the problem precisely enough to understand what a successful model has taught me.

## What a representation makes easy

Once the visual problem is clearer, the meaning of representation changes too.

Marr treats representation and algorithm together. A format makes some properties explicit and leaves others requiring further computation; its usefulness depends on the operations it supports ([Marr, 1982](#ref-marr)).

I find this distinction more illuminating than the familiar idea that successive layers contain increasingly rich information. For a fixed deterministic feedforward network, a later layer receives no new observation of the image. It transforms what was available earlier. What can improve is the accessibility of particular relationships, even as other distinctions become harder to recover.

Take a binary silhouette of an elongated object. The pixels specify its shape, but a description of the object's major axis makes its orientation directly available. The information needed to estimate the axis was already in the silhouette. Producing that description nevertheless does real computational work.

This is the distinction I now keep in mind when interpreting my encoding analyses. A feature space may help predict brain responses because it puts relevant variation into a form that our fitted mapping can use. That is a statement about the organization of information, not only its presence.

Developing stacked regressions and structured variance partitioning with Thomas Naselaris, Kendrick Kay, and Leila Wehbe made this especially concrete. Rather than asking every layer to compete alone, we combined the predictions of separate encoding models and examined what contribution remained when other feature spaces were available ([Lin et al., 2024](#ref-stacking)).

The scientific question behind that procedure is one I still find compelling: *what does this description provide that the alternatives do not provide in the same usable form?*

The qualification matters. An additional predictive contribution depends on the mapping, the data, and the alternatives tested. It does not establish a new source of sensory information or a separate neural module. Our fitted readout is also not automatically the readout used by the brain.

But I no longer see those dependencies only as inconveniences. They help specify what kind of representational question an encoding model can ask. Holding the mapping class fixed lets us compare how readily different descriptions expose relationships in the measured response. Varying that mapping would ask a different question about accessibility.

That gives the methodological work a place in my understanding of vision. Comparing representations is partly a way of examining where computational work has already been done: which distinctions no longer need to be extracted from a less convenient description.

It also makes me cautious about searching for a single best representation of an image. A contour description and an identity-oriented description may each simplify different operations. Before ranking them, I need to say what I expect the ranking to explain.

## Letting the brain change the question

There is an asymmetry in using a trained network to interpret neural data. The network arrives with named layers and a known training task. The neural response arrives as something to explain. It is easy to let the former supply the vocabulary for the latter.

My cortical maps make that temptation visible. Coloring a region by its best-predicting layer can make the region look like a biological instance of that layer. Yet the color was selected from the descriptions I supplied. It is not the brain's own label for its function.

The broader comparisons in our fMRI work were useful precisely because they allowed a less tidy picture. Some regions were better summarized by a range of candidate feature spaces than by a single preferred depth ([Lin et al., 2024](#ref-stacking)). I would not infer a collection of independent neural stores from those ranges. I would instead ask whether my original one-region, one-description question was too restrictive.

That is a substantive question about vision. A photograph can simultaneously vary in shape, texture, layout, and identity. An account of a visual region should help explain which of those distinctions are relevant to its responses and how they are organized. Assigning it a degree of abstraction is, at best, a beginning.

The comparisons with edge-detection networks raised a related issue from the other side. In the thesis analyses, later layers of those networks were not consistently better predictors of higher visual regions; earlier features could be more useful even there ([Lin, 2024, chapter 4](#ref-thesis)). I would not conclude that a face-selective region was therefore performing edge detection. The more interesting possibility is that the network's task name was an incomplete description of what its features made available.

This is where I see value in making the bridge run both ways. Artificial models provide candidate transformations of images. Independently established properties of biological vision can help us ask better questions about those transformations. Neither system has to be treated as a transparent explanation of the other.

For me, the implementation level is therefore not just the destination at which an abstract theory receives a brain address. Neural organization can push back on the descriptions we thought were sufficient. A pattern that does not fit a simple correspondence may reveal a limitation in our vocabulary for vision, rather than merely a model that needs a better score.

That is a different ambition from finding a neural counterpart for every network component. I want the comparison to improve the visual question itself.

## A representation has a place in a process

Time makes the distinction sharper.

A map of visual cortex and a sequence of network layers can both suggest an ordering, but an ordering does not yet describe a computation unfolding. It does not tell us when a description is constructed, whether it remains available, or how it participates in what happens next.

The temporal part of my thesis gave this issue a specific form. In our MEG analyses, an intermediate AlexNet feature space continued to add predictive value after a later feature space was included; the reverse contribution was more limited in time. The early progression through layers did not settle their later predictive relevance ([Lin, 2024, chapter 5](#ref-thesis)).

I take this as one reason to question how readily I translate architectural depth into processing time, not as a complete account of temporal vision. The result did not establish feedback or active maintenance. Nor did it measure the moment of recognition or show that semantic processing had ended. Static network features fitted at successive time points constrain a process without specifying the process that generated it.

The broader issue is how to turn a set of useful descriptions into an account of seeing. Recognizing the chair, estimating its orientation, and distinguishing its visible parts need not correspond to three self-contained stages with a fixed completion order. They might use overlapping descriptions, produced and revised on different timescales. That is a possibility to investigate, not an architecture established by these data.

What matters to me is the change in question. Instead of asking only which representation comes later, I want to understand what transformations connect the descriptions and how their timing serves the visual problem. Intermediate features are one empirical entry point into that question. The question extends to every candidate representation we use.

## What I now mean by a bridge

It would be easy to turn Marr into a retrospective grading scheme: this experiment reached one level, that one failed to reach another. I find that much less useful than asking how the levels can constrain one another.

My work largely began from the representational side, with computable image descriptions and measured brain responses. It did not begin from a complete theory of what human vision ought to compute. I do not regard that direction of inquiry as a mistake. It exposed questions that were less obvious when the task, the representation, and the brain map seemed to line up neatly.

What I want to recover now is the connection between them.

A visual problem specifies distinctions that matter. A representation makes some of those distinctions accessible in a particular form. An algorithm constructs and uses that form. Neural organization constrains how such operations could occur in a biological system. The interesting explanation lies in the relationships among these claims, rather than in completing any one description in isolation.

This does not require me to abandon learned representations for a hand-designed account of vision. Learned models let me explore visual descriptions I would not know how to specify in advance. But their usefulness as scientific tools increases when I can say more clearly what problems those descriptions help solve.

Marr gives an example of that specificity in his own visual proposals: image structure, visible surfaces, and three-dimensional shape are descriptions with different contents and reference frames, not just successive amounts of abstraction ([Marr, 1982](#ref-marr)). My thesis did not test those particular proposals. What I take from them is an obligation to explain what I mean when I call a learned feature space a visual representation.

Looking back at my own work, the most lasting shift is from treating a correspondence as an assignment to treating it as a question about computational organization. Why is this way of describing an image useful here? Which distinctions does it expose? How does that usefulness depend on the problem and the moment in processing?

Those questions preserve what drew me to comparing brains and networks. They make the comparison less like translating between two diagrams and more like investigating two ways of making visual information usable.

I still want to know which representations predict the brain. I now want that answer to help explain **why vision takes the representational forms that it does**.

---

## References

<p id="ref-marr"><strong>Marr, D. (1982).</strong> <em>Vision: A Computational Investigation into the Human Representation and Processing of Visual Information.</em> W. H. Freeman. Especially chapter 1, on computational explanation, representation, and a representational framework for vision. <a href="https://www.contrib.andrew.cmu.edu/~kk3n/80-300/marr2.pdf">Chapter excerpt</a>.</p>

<p id="ref-stacking"><strong>Lin, R., Naselaris, T., Kay, K., &amp; Wehbe, L. (2024).</strong> Stacked regressions and structured variance partitioning for interpretable brain maps. <em>NeuroImage, 298</em>, 120772. <a href="https://doi.org/10.1016/j.neuroimage.2024.120772">Paper</a>.</p>

<p id="ref-thesis"><strong>Lin, R. (2024).</strong> <em>Bridging visual representations in deep neural networks and the human brain.</em> PhD dissertation, Carnegie Mellon University. The network comparisons and temporal observations discussed here come from chapters 4 and 5; the published methods work is cited separately above. <a href="https://www.cmu.edu/compbio/news/2024/ruogu-lin-thesis-defense.html">Defense announcement and abstract</a>.</p>
