---
title: "What Representations Are For"
date: 2026-09-06 13:00:00 -0500
updated: 2026-09-06
permalink: /blog/what-representations-are-for/
summary: "What my doctoral work taught me about visual hierarchy: intermediate image descriptions matter not only on the way to recognition, but in the spatial and temporal organization of perception."
description: "A retrospective on visual representations in my PhD: cortical encoding maps, task-dependent layer correspondences, and the time course of intermediate features in MEG and EEG, revisited through Marr."
tags: [vision, neuroscience, representation-learning, neuroai]
writing_type: Perspective
toc: true
toc_open: false
update_note: "Refocused on the visual findings of my dissertation: spatial hierarchy, model-dependent correspondences, and the temporal contribution of intermediate features."
---

*Visual hierarchy and the middle of perception — revisiting my PhD through Marr*

The word *intermediate* carries an expectation. An intermediate result is something we produce on the way to the answer. Once the answer is available, we can move on.

In vision, that expectation gives us an appealing story: edges become shapes, shapes become objects, and recognition completes the journey. But the order in which descriptions become available does not tell us when they stop being useful.

My doctoral work gave me a concrete reason to separate those questions. We used neural-network features to predict brain responses to images, first across visual cortex and then through time. Intermediate features were not simply displaced by later ones. They contributed to predictions in parts of higher visual cortex, and their predictive contribution extended beyond the initial progression through network layers ([Lin, 2024](#ref-thesis)).

Looking back, this is the question that most interests me:

> **What happens to intermediate visual information as perception unfolds?**

It connects the three empirical parts of my thesis more closely than a search for the single most brain-like network. The spatial analyses asked which descriptions helped account for different parts of visual cortex. Comparisons across networks tested how those descriptions depended on training and architecture. The temporal analyses asked how long they continued to matter.

Marr helps me interpret that progression. But the Marr I want to return to here is not only the author of three levels of analysis. It is also the researcher who asked what kinds of descriptions allow a visual system to recover the structure of a scene.

## A hierarchy is not yet a timetable

There is good reason to study vision as a hierarchy. In the account developed by DiCarlo, Zoccolan, and Rust, successive transformations make object identity easier to read out despite changes in appearance. The central achievement is not simply more information, but a format in which recognition becomes easier ([DiCarlo et al., 2012](#ref-recognition)).

This perspective helps explain the attraction of deep networks as models of vision. They provide successive, computable descriptions of the same image. We can ask whether those descriptions capture differences in neural responses across images.

But three kinds of order can easily slip into one another: depth in an artificial network, position in a cortical hierarchy, and time after an image appears.

A later network layer has undergone more transformations. A higher cortical area occupies a particular place in an anatomical and functional organization. A later response occurs further into an episode of viewing. None of these facts, alone, makes the three axes interchangeable.

In particular, a progression toward more recognizable objects does not specify that intermediate descriptions should disappear once recognition is possible. That would be an additional temporal hypothesis, not a consequence of hierarchical organization.

This is not an argument against the visual hierarchy. It is a question about what the hierarchy leaves unspecified. My work approached it first through space.

## What the cortical maps kept in the middle

In the fMRI work, our basic measurement was an encoding model: a learned mapping from image features to the response of a voxel, evaluated on held-out images. Each network layer offered a different candidate description of the images ([Lin et al., 2024](#ref-stacking)).

Choosing the best-performing layer gives a simple map. But I wanted to know whether a single layer was an adequate summary. Several layers can predict overlapping aspects of a response, while contributing something different when used together.

With Thomas Naselaris, Kendrick Kay, and Leila Wehbe, I developed stacked regressions and structured variance partitioning to make those comparisons. Stacking combined predictions from separately fitted feature spaces. Structured comparisons then examined how much predictive performance remained as groups of layers were added or removed in their architectural order.

For this essay, the important result is not the fitting procedure. It is what the procedure made visible.

The analyses recovered broad differences across visual cortex, but some regions were better characterized by a range of network descriptions than by one preferred depth. In the reported maps, predictions in parts of the parahippocampal place area, a scene-selective region, drew on a range extending from intermediate convolutional layers toward later fully connected layers. Other regions had narrower ranges ([Lin et al., 2024](#ref-stacking)).

These ranges summarize comparisons among encoding models; they are not inventories of separate neural modules, and they do not establish that every enclosed layer is individually necessary. What matters here is the spatial observation: features from the middle of the network could remain useful for accounting for responses in cortex conventionally described as higher-level.

That result sits naturally beside work by Henderson, Tarr, and Wehbe showing sensitivity to texture statistics across the visual hierarchy, including higher-order statistics in higher visual areas ([Henderson et al., 2023](#ref-texture)). Their model specifies different features from ours, but it helps pose a shared question: what visual structure remains relevant in regions that also respond to categories?

A scene is not exhausted by its name. Calling an image a kitchen does not specify its surfaces, textures, boundaries, or spatial arrangement. Different descriptions may help distinguish different kitchens, not merely kitchens from beaches.

The cortical maps therefore made the middle interesting in its own right. It was not only a bridge between an early visual area and a category-selective one. Its contribution could extend into the latter.

## The model changes what “middle” means

There is an obvious complication: middle according to which network?

Another part of the thesis compared representations learned under different tasks and architectures. In an exploratory analysis of one Natural Scenes Dataset participant, we examined AlexNet trained on object classification and on scene classification. The stacking-weight patterns in early visual regions shifted from Conv-3 toward Conv-4 between those training conditions. The analogous ResNet50 comparison did not show the same shift ([Lin, 2024, chapter 4](#ref-thesis)).

The edge-detection models provided a further contrast. They did not simply reproduce a map in which deeper layers better predicted higher visual areas. Earlier features could outperform later ones even for face- and place-selective regions.

These are bounded comparisons. The object and scene models differed in training data as well as task, and the analysis does not establish a population-wide effect or isolate the objective as its cause. But it does show why I hesitate to treat network depth as a fixed ruler for biological vision.

A network trained to classify an image and one trained to recover its boundaries are being asked to make different distinctions explicit. Their layer numbers do not guarantee equivalent visual descriptions. Even with the same architecture, changing the training conditions can alter what a layer contributes to brain prediction.

For the rest of the thesis, this meant that “intermediate” needed an operational meaning. Conv-5 denotes a specific feature space in a specific AlexNet, not a discovered biological stage. It may mix contour, texture, configuration, and category-related variation. The label is useful for organizing comparisons; understanding which visual properties drive its contribution remains another task.

With that qualification in place, the spatial findings suggested the next question. If intermediate features helped account for responses in higher visual cortex, were they relevant only briefly, while a more abstract description was being computed? Or did their contribution continue during viewing?

## Following the middle through time

The temporal work used MEG and EEG recordings from people viewing natural images. Instead of assigning one feature space to a location, we could examine its predictive contribution at different delays after an image appeared ([Lin, 2024, chapter 5](#ref-thesis)).

In the THINGS-MEG analysis, four participants viewed images for half a second. The early pattern contained a rapid progression: early network features were prominent around 100 milliseconds, followed by intermediate and later features during the next part of the response.

The result that holds my attention comes after that initial progression. Intermediate features continued to account for responses during the later viewing period. The model did not simply arrive at its latest layer and stay there.

A targeted comparison makes this easier to see. We compared an encoding model using Conv-5 and FC-7 together with models using either feature space alone. Adding Conv-5 to FC-7 provided a more sustained predictive contribution than adding FC-7 to Conv-5. The intermediate feature space therefore captured something about the later response that this later-layer alternative did not substitute for.

I find that result more informative than a peak latency alone. A peak tells us when a particular model predicts especially well. The comparison asks whether another description accounts for what it predicts. Here, moving to the later layer did not make the intermediate one dispensable throughout the time course.

The EEG analysis added a useful contrast. In THINGS-EEG1, images appeared in a rapid stream: 50 milliseconds on screen followed by a 50-millisecond interval. The thesis reported an early progression and a later contribution from intermediate features, with the latter extending to roughly 300 milliseconds rather than across the longer viewing period seen in MEG.

The two datasets differ in participants, recording modality, presentation, and analysis, so this is not a controlled demonstration that presentation rate caused the difference. Nevertheless, the comparison keeps the temporal question concrete. A representation's observed time course belongs to a viewing condition, not just to its place in a network.

Two qualifications are essential to the interpretation. First, FC-7 is not a complete measure of semantics. Features derived from behavioral similarity judgments added predictive value beyond AlexNet in a supplementary analysis. A limited late contribution from FC-7 does not mean that meaning has disappeared from perception.

Second, sustained predictability does not establish active maintenance, a stable neural code, or feedback. In MEG the image was still present for much of the interval, and separately fitted time-point models do not identify the mechanism generating successive responses. The analyses also did not measure when each participant recognized each object.

The finding is narrower, and still interesting: **intermediate image features retained predictive value beyond their place in the initial progression through layers.** Their contribution was not confined to an early stepping stone toward the latest network representation.

That is the result I want a theory of vision to explain.

## Seeing more than an identity

Returning to Marr after these experiments, I am drawn to his proposed visual descriptions: a primal sketch organizing image structure, a viewer-centered description of visible surfaces, and an object-centered description of three-dimensional shape. Each makes different properties explicit, rather than merely moving further from the pixels ([Marr, 1982](#ref-marr)).

My network layers are not tests of those particular representations. I cannot identify Conv-5 with a 2½-D sketch. What I take from Marr is a way to ask a more concrete question about the middle: which aspects of visual structure does it make available?

Consider a chair. Recognizing it across changes in viewpoint is one achievement. Seeing the particular chair in front of us also involves distinctions about its outline, orientation, surfaces, and relation to surrounding objects. A description useful for identity need not be equally useful for every one of those judgments.

Nor does tolerance to a change in appearance require deleting all information about that change. DiCarlo and colleagues explicitly discuss population representations that support identity readout while retaining information about variables such as position and size ([DiCarlo et al., 2012](#ref-recognition)). The alternative to a one-way relay is not necessarily a collection of isolated stores. Different visual properties can remain available in overlapping or differently organized codes.

This gives me a possible reading of the sustained intermediate contribution: perhaps some descriptions remain relevant because seeing continues to involve the structure of the particular image, not only the object's identity. That is a functional hypothesis prompted by the results, not an explanation they have already established.

It also makes the next empirical question more specific. Which properties account for the later Conv-5 contribution—texture statistics, contour relationships, spatial configuration, or something else? Does that contribution vary with a demand to judge orientation or shape rather than category? Such comparisons would help turn “intermediate” from an address in AlexNet into a clearer account of visual information.

This is where the three parts of my work now meet. The cortical maps showed that one depth could be an incomplete description of a region. The network comparisons showed that depth itself was model-dependent. The temporal analyses showed that the order of appearance did not settle the duration of predictive relevance.

Together, they have made me less interested in finding the last representation of an image, and more interested in how different descriptions contribute to a continuing episode of seeing.

> **A visual hierarchy is not a schedule for discarding visual information.**

That is not a rejection of hierarchical recognition. It is the distinction I have learned to keep beside it: becoming able to recognize an object and finishing with its visual structure are different things.

My thesis did not determine exactly how the brain uses each description. It gave me a reason to study the middle as something more than the route to the top.

---

## Sources and further reading

<p id="ref-thesis"><strong>Lin, R. (2024).</strong> <em>Bridging visual representations in deep neural networks and the human brain.</em> PhD dissertation, Carnegie Mellon University, chapters 3–5. The task/architecture comparisons and MEG/EEG results discussed here are drawn from the dissertation. <a href="https://www.cmu.edu/compbio/news/2024/ruogu-lin-thesis-defense.html">Defense announcement and abstract</a>.</p>

<p id="ref-stacking"><strong>Lin, R., Naselaris, T., Kay, K., &amp; Wehbe, L. (2024).</strong> Stacked regressions and structured variance partitioning for interpretable brain maps. <em>NeuroImage, 298</em>, 120772. <a href="https://doi.org/10.1016/j.neuroimage.2024.120772">Paper</a>.</p>

<p id="ref-marr"><strong>Marr, D. (1982).</strong> <em>Vision: A Computational Investigation into the Human Representation and Processing of Visual Information.</em> W. H. Freeman. Especially section 1.3, “A Representational Framework for Vision.” <a href="https://www.contrib.andrew.cmu.edu/~kk3n/80-300/marr2.pdf">Chapter excerpt</a>.</p>

<p id="ref-recognition"><strong>DiCarlo, J. J., Zoccolan, D., &amp; Rust, N. C. (2012).</strong> How does the brain solve visual object recognition? <em>Neuron, 73</em>(3), 415–434. <a href="https://doi.org/10.1016/j.neuron.2012.01.010">Paper</a>.</p>

<p id="ref-texture"><strong>Henderson, M. M., Tarr, M. J., &amp; Wehbe, L. (2023).</strong> A texture statistics encoding model reveals hierarchical feature selectivity across human visual cortex. <em>Journal of Neuroscience, 43</em>(22), 4144–4161. <a href="https://doi.org/10.1523/JNEUROSCI.1822-22.2023">Paper</a>.</p>
