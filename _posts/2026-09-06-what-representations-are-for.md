---
title: "What Visual Representations Are For"
date: 2026-09-06 13:00:00 -0500
updated: 2026-11-14
permalink: /blog/what-representations-are-for/
summary: "Revisiting my visual neuroscience work through Marr: what visual descriptions make explicit, how they relate, and how their organization changes across cortex and time."
description: "A personal rethink of visual representation, hierarchy, and computation, grounded in my doctoral work on brain encoding models and revisited through Marr."
tags: [vision, neuroscience, representation-learning, neuroai]
writing_type: Perspective
toc: true
toc_open: false
---

*Rethinking my doctoral work through Marr*

Some of the most satisfying figures in my PhD dissertation (Lin, 2024) are maps of human visual cortex colored by neural-network layer. A smooth progression of hues links two processes that initially seem hard to compare: an artificial network transforming pixels and a biological brain responding to a natural scene.

Those maps make a complex correspondence legible, yet their visual neatness invites a quiet conceptual slip. Once every cortical vertex wears a layer index, it is tempting to assume a **single ladder** orders four things at once: computational depth in a network, invariance to appearance change, anatomical position across cortex, and temporal sequence during a response. Calling one region "higher" or "more abstract" then feels like an explanation rather than a label waiting to be unpacked.

Consider a photograph of a chair in a room. Seeing it involves recovering occluding contours, surface slant, three-dimensional pose, object identity, and navigable layout relative to the viewer. Some of those properties build on others; some preserve metric geometry that others deliberately discard. Returning to my doctoral studies through David Marr's *Vision* (1982) sharpened the question underneath the cortical maps:

> **What has to become explicit, and in what format, for a visual system to make sense of—and act within—what it sees?**

Across three lines of my thesis—comparing networks trained on distinct objectives, partitioning shared variance across layers, and tracking millisecond MEG dynamics—each empirical result pried apart one link of the single-ladder picture. Together they point toward a different organizing principle: visual cortex is structured less like a single escalator toward category labels than like a **division of computational work** across formats tailored to concurrent downstream demands.

---

## 1. Computational Goals and Divergent Invariances

Take two photographs of the same chair captured from different viewpoints. Judging that both images show the same piece of furniture and judging how the chair has rotated are equally genuine visual achievements, yet they treat the pixel differences between the two photographs in opposite ways. Identification treats viewpoint change as nuisance variation to be factored out; pose estimation or reach planning treats that exact geometric transformation as the signal to recover.

Marr's (1982) distinction between computational theory and representational format clarifies why no single feature space gets both jobs for free. Every format makes certain relationships explicit at the price of burying others. Marr himself still placed a viewer-independent three-dimensional object model at the apex of his visual pipeline, but decades of subsequent neuroscience showed that primate vision serves heterogeneous, concurrent consumers: ventral temporal pathways untangle object identity across viewing conditions, while dorsal parietal and scene-selective pathways retain viewer-centered metric geometry, surface orientation, and obstacle boundaries needed to guide eye movements, grasping, and locomotion (Goodale & Milner, 1992; DiCarlo & Cox, 2007). "Abstraction" is therefore not a scalar rank. A representation that discards viewpoint to stabilize category readout becomes impoverished for motor control.

When we use an ImageNet object classifier to map human visual cortex, we inherit the asymmetries of its training objective—the distinctions its loss rewards and the geometric variations it can afford to collapse. That dependence surfaced directly when I compared encoding models built from networks trained for object classification, scene classification, and boundary detection (Lin, 2024, chapter 4). Even in exploratory single-participant comparisons where task and training data covaried, switching objectives shifted layer-to-cortex correspondences in AlexNet—though not uniformly in ResNet-50—and boundary-detection networks induced a distinct cortical arrangement again. Model choice is never a neutral ruler held up against the brain; a candidate network probes cortex through the particular invariances its objective forced it to build.

---

## 2. Explicitness Beyond the Researcher's Readout

In a fixed deterministic feedforward network, a deeper layer cannot introduce physical evidence about the scene that was absent from retinal pixels. Every feature in layer eight is a deterministic function of layer one. When a deeper layer improves a regularized linear encoding model of fMRI activity, its contribution lies entirely in **reformatting** existing information—untangling curved, overlapping manifolds from pixel space so that behaviorally relevant variables become linearly separable (DiCarlo & Cox, 2007).

Separating two roles of linearity avoids a subtle circularity in encoding research. At first glance, saying that a feature space "makes structure accessible to our fitted linear readout" explains why ridge or partial-least-squares regression achieves a higher correlation on held-out stimuli, not why cortex itself formats activity that way. The biological bridge is that downstream neural populations face an analogous readout constraint: bounded dendritic and synaptic integration can combine afferent population codes roughly linearly within a single step, without re-running deep nonlinear untangling for every behavioral decision.

An array of raw luminance values and an explicit map of contour junctions carry information about the same photograph, yet only the second lets a simple downstream circuit separate an occluding limb from a cast shadow in one step. Likewise, learned deep-network layers rarely correspond to tidy verbal nouns such as "texture" or "semantics." Treating a layer-to-cortex match seriously means asking which geometric invariances and equivariances that transformation has already paid the computational cost to untangle—and which downstream judgments can therefore read from it directly.

---

## 3. Shared Work Across Overlapping Descriptions

Winner-take-all cortical maps color each voxel by a single best-predicting layer, quietly enforcing the assumption that every cortical locus belongs on one rung. Natural scenes resist that simplification. Photographs of indoor rooms vary simultaneously in local surface material, three-dimensional boundary layout, and landmark objects, and adjacent layers of a deep network capture overlapping slices of that structure.

That overlap motivated our work on stacked regressions and structured variance partitioning (Lin, Naselaris, Kay, & Wehbe, 2024). Rather than crowning a single winning feature space per voxel, we combined predictions across candidate layers and partitioned what they explained uniquely versus jointly. In human fMRI, scene-selective territories spanned a noticeably broader range of network layers than face- and body-selective regions. Computationally, that contrast makes functional sense: recognizing a face relies heavily on configural part relations within a bounded object, whereas parsing a navigable scene integrates local texture gradients, mid-level floor-and-wall geometry, and high-level place identity at the same time.

A later eight-participant NSD audit—reported in [*Stable Predictions, Unstable Explanations*](/blog/stable-predictions-unstable-explanations/)—revealed the methodological flip side of that biological overlap. Across alternative feature implementations, held-out cortical predictions were almost indistinguishable, yet continuous support distributions showed that most visual voxels did not isolate a single sharply bounded layer interval. Correlated representations stabilize prediction precisely because multiple layers share task-relevant structure, while making hard single-rung attribution underdetermined. Overlap across candidate descriptions is therefore neither a mere statistical nuisance nor proof that cortex runs researcher-style regression stacking; it is evidence that visual areas coordinate partially redundant representations whose contributions diverge only on specific geometric distinctions.

---

## 4. Network Depth, Cortical Place, and Perceptual Time

The final link in the single-ladder picture equates architectural depth with time during perception, as if viewing an image simply marched neural activity up to the final classification layer and left earlier stages behind. Keeping three orderings distinct—**depth in an architecture**, **anatomical position in cortex**, and **millisecond time course during seeing**—exposes why that equation fails.

Architectural depth counts computational steps inside one chosen model family; changing the architecture or training objective alters which layer aligns with a cortical patch without changing a single synapse in the measured brain. Temporal MEG analyses broke the dynamic version of the assumption as well (Lin, 2024, chapter 5). Early brain responses progressed rapidly from shallow to deeper network features, yet across sustained viewing intervals, adding intermediate Conv-5 features on top of late FC-7 features produced a substantially more persistent predictive gain than adding FC-7 on top of Conv-5.

Because the stimulus remained visible throughout much of the recording window, sustained predictivity alone does not separate recurrent cortical maintenance from ongoing feedforward drive. Even within that boundary, the representational contrast is revealing: FC-7 pools across spatial positions to isolate category identity, whereas Conv-5 preserves spatially indexed part and surface configuration. Reaching categorical recognition does not render mid-level spatial geometry obsolete; ongoing perception keeps configurational and categorical formats active side by side. Static fMRI maps and millisecond MEG time courses thus constrain complementary projections of an unfolding computation that never collapses onto one scalar hierarchy.

---

## Division of Work Over a Single Ladder

Putting these threads together replaces the ladder metaphor with a **division of computational work** across representations of the same scene. That division does not require an isolated cortical module for every visual adjective. A single neural population code can preserve surface orientation in one subspace while permitting an orthogonal linear readout to extract object identity invariantly—provided both subspaces are formatted for their respective consumers.

Return one last time to the chair. Recognizing what kind of object it is, recovering the slant of its seat, separating its cast shadow from its leg boundary, situating it within the room's layout, and ultimately guiding a body to sit in it or walk around it—where passive vision meets the closed sensorimotor loop explored in [*Intelligence Is in the Loop*](/blog/intelligence-is-in-the-loop/)—pose genuinely different computational demands on the same retinal input.

Marr's lasting gift is the insistence that representations cannot be understood apart from the problems their formats make tractable. The colored cortical maps from my dissertation still give me a map of correspondences worth studying; what changed is the question I bring to them. Instead of asking how high a cortical region sits on a single hierarchy, I want to specify which geometric and semantic properties its representation keeps explicit, how neighboring descriptions share the load, and what downstream work that organization makes possible.

---

## References and further reading

- DiCarlo, J. J., & Cox, D. D. (2007). [Untangling invariant object recognition](https://doi.org/10.1016/j.tics.2007.06.010). *Trends in Cognitive Sciences, 11*(8), 333–341.
- Goodale, M. A., & Milner, A. D. (1992). [Separate visual pathways for perception and action](https://doi.org/10.1016/0166-2236(92)90344-8). *Trends in Neurosciences, 15*(1), 20–25.
- Lin, R. (2024). [*Bridging visual representations in deep neural networks and the human brain*](https://www.cmu.edu/compbio/news/2024/ruogu-lin-thesis-defense.html). PhD dissertation, Carnegie Mellon University (especially chapters 3–5).
- Lin, R., Naselaris, T., Kay, K., & Wehbe, L. (2024). [Stacked regressions and structured variance partitioning for interpretable brain maps](https://doi.org/10.1016/j.neuroimage.2024.120772). *NeuroImage, 298*, 120772.
- Marr, D. (1982/2010). [*Vision: A Computational Investigation into the Human Representation and Processing of Visual Information*](https://doi.org/10.7551/mitpress/9780262514620.001.0001). MIT Press.
