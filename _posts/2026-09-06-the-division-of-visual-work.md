---
title: "The Division of Visual Work"
date: 2026-09-06 13:00:00 -0500
updated: 2026-11-14
permalink: /blog/the-division-of-visual-work/
summary: "An essay revisiting my doctoral maps of human visual cortex through David Marr: why seeing is organized not as a single ladder toward labels, but as a division of work across representations."
description: "An essay on visual representation, geometry, and David Marr, revisiting doctoral maps of human visual cortex across space and time."
tags: [vision, neuroscience, representation-learning, philosophy, neuroai]
writing_type: Perspective
toc: true
toc_open: false
og_image: /assets/blog/og-04-the-division-of-visual-work.png
frontispiece:
  plate: "Plate IV"
  src: /assets/blog/plate-04-the-division-of-visual-work.webp
  alt: "Copperplate engraving of a wooden chair refracted into three parallel representations: occluding contour versus shadow, 2.5D surface-normal needles, and spatial ground-plane reach geometry."
  caption: "One retinal scene refracted into concurrent downstream formats: occluding contour separated from cast shadow, 2.5D surface-normal needles, and action-ready spatial layout."
---

*Representation, geometry, and David Marr across the visual cortex*

Among the figures I spent the longest hours making during my doctoral years at Carnegie Mellon are inflated surfaces of human visual cortex painted by neural-network layer. Sweeping forward from the occipital pole into ventral temporal and parietal cortex, cool blues give way to greens, ochres, and deep reds—joining two processes that at first glance have no business speaking a common tongue: an artificial network multiplying matrices of pixels and a living human brain looking at photographs of the world.

Pictures that clean carry a quiet metaphysics. Assign every cortical vertex a layer index, and the eye almost cannot stop itself from reading a **single ladder** into sight—one scalar axis along which architectural depth in a network, invariance to appearance, anatomical distance across cortex, and elapsed milliseconds after stimulus onset all climb together toward a verbal category at the top. Calling a region "higher" or "more abstract" then sounds like a scientific explanation, when it is often just a spatial metaphor borrowing authority from a wiring diagram.

Look up from the screen at an ordinary wooden chair caught in afternoon light. Before a word forms in mind, sight has already sorted out what kind of object stands there, where its backrest occludes the wall behind it, where a cast shadow darkens the floorboards without raising an obstacle to your shoe, how steeply the seat tilts relative to gravity, and how far your hand would need to reach to pull it out. Returning to my dissertation experiments alongside David Marr's posthumous book *Vision*—published in 1982, two years after leukemia ended his life at thirty-five—brought into focus the question those smooth cortical maps had been hiding:

> **What has to become explicit, and in what format, for a visual system to make sense of—and act within—what it sees?**

Three empirical threads from my doctoral work—comparing networks trained for different visual goals, partitioning shared variance across overlapping layers, and following cortical responses millisecond by millisecond in magnetoencephalography—each pried loose one rung of the single-ladder story. Taken together, they point toward a different picture of visual cortex: not a solitary escalator ascending toward object nouns, but a **division of visual work** across representations formatted for concurrent, sometimes incompatible demands.

`single ladder toward labels ≠ division of visual work`

---

## Two Ways of Seeing the Same Chair

Walk three steps to your left and look at the chair again, or photograph it from two corners of the room. Judging that both views show the *same* piece of furniture and judging *how* the chair is angled relative to your hand are equally genuine achievements of vision, yet they treat the pixel differences between the two images in opposite ways. Recognition treats viewpoint change as nuisance variation to be factored out; reaching or sitting treats that exact geometric transformation as the signal to preserve.

Marr's foundational distinction between **what is computed** and **how a representation formats it** explains why no single feature space gets both jobs for free. Every notation makes certain relations effortless to read at the price of burying others. Arabic and Roman numerals denote the exact same positive integers, yet try multiplying MCMLXXXII by XLVII without translating the marks on the page: decimal place value makes powers of ten explicit, whereas Roman notation leaves them implicit. Visual representations obey the same law of conservation of convenience.

Marr himself still crowned his pipeline with a single viewer-independent three-dimensional model—an inner sculpture of the object detached from where the observer happens to stand. Philosophy of perception had long been drawn to a cognate ideal, what Richard Rorty called the *mirror of nature*: the assumption that perception aims to assemble one canonical inner copy of the external room, ready for thought to inspect. Decades of systems neuroscience quietly dismantled that singular ideal. Clinical dissociations studied by Melvyn Goodale and David Milner between ventral recognition and dorsal visuomotor control, alongside population physiology synthesized by James DiCarlo and David Cox, showed that primate vision answers to plural consumers at once. Ventral temporal pathways untangle identity across lighting, distance, and pose; dorsal parietal and scene-selective pathways keep viewer-centered metric slant, reach envelopes, and navigable boundaries alive, echoing James J. Gibson's insistence that an animal perceives surfaces in relation to locomotion and grasp. "Abstraction" is therefore not height on a single pole. A representation that discards viewpoint to stabilize naming becomes functionally blind for guiding a hand.

<div class="living-plate" data-living-plate="marr-chair">
  <noscript><p><em>Interactive Plate IV: Interactive 3D chair projection contrasting view-invariant category readout, view-equivariant 2.5D surface normals, and contour-versus-shadow separation.</em></p></noscript>
</div>

Once we remember that trade-off, using an ImageNet object classifier to chart human visual cortex stops looking like holding a neutral ruler up to the brain. Every trained network interrogates cortex through the particular invariances its loss rewarded and the geometric distinctions its loss allowed it to forget. When I built brain encoding models from networks trained instead for scene classification or contour boundary detection, the cortical correspondence maps shifted in telling ways. Changing the objective reorganized layer-to-cortex alignments in architectures like AlexNet—even where deeper residual backbones absorbed more shared structure—and boundary-detection networks carved out a distinct cortical pattern again. Even where training datasets shifted alongside task losses, the philosophical lesson held firm: a candidate model probes the visual system with an implicit commitment about which variations count as noise and which count as world.

---

## What Linear Readout Really Asks of Cortex

Consider a quiet paradox at the heart of neural encoding models. Take a deterministic feedforward network with frozen weights and feed it a photograph. By the data-processing inequality, layer eight cannot contain a single bit of physical evidence about the room that was not already present in layer one; deterministic transformations can preserve or discard information from retinal pixels, never conjure new evidence out of thin air. Why, then, does a deep layer predict activity in high-level visual cortex when early pixel-like features fail?

The answer lies entirely in **reformatting**. Raw pixel intensities already "contain" whether a chair sits in the room in the thin mathematical sense that an encrypted dispatch contains its message, yet the manifolds of chairs seen across shifting shadows, distances, and angles lie tangled together like crumpled sheets of paper. Cascaded nonlinear transformations bend, stretch, and separate those sheets until behaviorally decisive distinctions lie across flat hyperplanes:

`retinal image → parallel reformatting → distinct downstream readers`

Keeping two meanings of linearity apart saves encoding research from a subtle circularity. When a neuroscientist reports that a feature space predicts held-out fMRI voxels under ridge or partial-least-squares regression, linearity starts out as *our* statistical convenience—a safeguard against overfitting noisy measurements. If the story ended there, saying that cortex "makes object identity linearly explicit" would merely congratulate our regression script. What turns linear separability into a biological claim is a biophysical constraint inside the brain itself: a downstream cortical population integrating synaptic currents across dendritic trees within a single membrane window can combine incoming population activity roughly linearly in one step, without running a fresh ten-layer nonlinear search every time the organism must judge whether to step over an obstacle or sit down.

Return to the chair on oak floorboards. A sharp drop in luminance across the wood could mark either the physical edge of the chair's front leg or the boundary of its cast shadow. Both are present in the pixel array; only a representation that has already untangled border ownership and surface slant lets a single downstream step separate what can be walked across from what will trip a foot. Learned deep-network layers seldom correspond to tidy dictionary nouns like *texture* or *semantics*. Taking a layer-to-cortex correspondence seriously means asking what geometric tangles that transformation has already paid the metabolic and synaptic cost to undo—and which downstream readers can therefore act on it without delay.

---

## Overlapping Maps of a Shared Room

Winner-take-all brain maps color each cortical voxel by its single highest-scoring layer, quietly legislating that every millimeter of visual cortex belongs on one rung of the ladder. Everyday rooms refuse to cooperate with that neatness. A photograph of a study varies simultaneously in wood grain and woven upholstery, floor-and-wall planes, occluding furniture, and its identity as a place to read or work—and neighboring layers of a deep network capture overlapping slices of that variation.

That tension led Thomas Naselaris, Kendrick Kay, Leila Wehbe, and me to replace winner-take-all layer assignment with stacked regressions and structured variance partitioning. Instead of crowning a solitary victor at each voxel, we combined candidate feature spaces and separated the variance each explained uniquely from the variance they shared. Across human fMRI recordings, scene-selective cortex drew upon a markedly wider span of network layers than face- or body-selective territories. Ecologically, the asymmetry makes immediate sense: recognizing a face turns on subtle configural proportions within a bounded contour, whereas perceiving a navigable room binds local surface material, mid-level floor-and-wall layout, and landmark identity at the same moment.

Returning later to audit those maps across eight participants in the Natural Scenes Dataset taught me the methodological humility that biological overlap demands. Alternative feature implementations achieved virtually indistinguishable predictive accuracy on held-out photographs, yet continuous weight distributions across layers refused to collapse onto narrow, isolated rungs for most visual voxels. Shared variance stabilizes prediction precisely because multiple descriptions carry overlapping truth about the scene, while leaving hard single-layer stories underdetermined. That overlap is neither a statistical blemish to be regularized away nor proof that visual cortex literally runs researcher-style regression stacking; it is the signature of cortical areas coordinating partially redundant descriptions whose contributions diverge only when specific geometric questions force them apart.

---

## Depth on a Diagram, Time in a Brain

The last seductive equation in the single-ladder picture identifies *layer depth in an engineering diagram* with *anatomical place in cortex* and *elapsed milliseconds during seeing*—as though looking at a room meant marching a neural packet up a staircase to a categorical penthouse and letting the lower stories go dark once the label *chair* arrived.

`architectural depth ≠ perceptual time`

Separating three distinct orderings—**computational steps inside one chosen model**, **anatomical territory across cortex**, and **real-time dynamics during perception**—breaks that equation immediately. Layer index is relative to an architecture: swap a shallow convolutional trunk for a deeper residual or recurrent network, and the layer number best matching a cortical patch shifts without a single synapse changing in the person inside the scanner.

Tracking visual responses millisecond by millisecond with magnetoencephalography broke the temporal version of the escalator story as well. During the opening sweep after an image appeared, alignment across human brain signals progressed swiftly from shallow toward deeper network features. Across the hundreds of milliseconds of sustained viewing that followed, however, adding intermediate convolutional features such as Conv-5 on top of late fully connected features such as FC-7 produced a far more persistent gain in predicting ongoing neural activity than adding FC-7 on top of Conv-5.

Because the photograph remained visible throughout much of that recording window, passive MEG recordings alone cannot separate recurrent cortical maintenance from continuing retinal input. Even inside that honest experimental boundary, the representational contrast is unmistakable. Late fully connected layers pool across image coordinates to isolate *what* is present; intermediate convolutional maps preserve spatially indexed part and surface arrangement—*where* the seat meets the back, *how* the legs stand on the floor. Arriving at a category name does not retire spatial geometry; ongoing sight keeps configurational layout and conceptual identity active side by side. Static fMRI maps and millisecond MEG trajectories thus capture complementary shadows of an unfolding process that never collapses onto one scalar hierarchy.

---

## Beyond the Single Ladder

Letting go of a single inner mirror of nature does not splinter visual cortex into a hundred hermetically sealed boxes, nor does it retreat from realism about the world in front of us. A single neural population can hold surface slant explicit along one linear subspace while offering view-invariant identity along an orthogonal subspace—precisely because the real chair in the room possesses both enduring kindhood and viewpoint-relative geometry, and no finite code can make every true relation equally effortless to read in a single format.

Look back one final time at the chair across the room. Naming what kind of furniture it is, judging the tilt of its seat, separating its cast shadow from its wooden leg, finding a clear path across the rug, and finally shifting your weight to sit down in it—the threshold where sight enters the closed sensorimotor loop explored in [*When the World Pushes Back*](/blog/when-the-world-pushes-back/)—place genuinely different computational demands on the same stream of light entering the eye.

Marr's enduring gift was his insistence that no representation makes sense apart from the problem its format renders tractable. Those layer-colored brain maps from my dissertation still hang in my mind as real empirical clues; what changed is the question I bring to them. Rather than asking how high a patch of cortex sits on a single ladder of abstraction, I want to know what properties of the world its geometry refuses to forget, how neighboring descriptions share the load, and what kinds of thought and action that division of work makes possible.

---

## References and further reading

- DiCarlo, J. J., & Cox, D. D. (2007). [Untangling invariant object recognition](https://doi.org/10.1016/j.tics.2007.06.010). *Trends in Cognitive Sciences, 11*(8), 333–341.
- Gibson, J. J. (1979). *The Ecological Approach to Visual Perception*. Houghton Mifflin.
- Goodale, M. A., & Milner, A. D. (1992). [Separate visual pathways for perception and action](https://doi.org/10.1016/0166-2236(92)90344-8). *Trends in Neurosciences, 15*(1), 20–25.
- Lin, R. (2024). [*Bridging visual representations in deep neural networks and the human brain*](https://www.cmu.edu/compbio/news/2024/ruogu-lin-thesis-defense.html). PhD dissertation, Carnegie Mellon University (especially chapters 3–5).
- Lin, R., Naselaris, T., Kay, K., & Wehbe, L. (2024). [Stacked regressions and structured variance partitioning for interpretable brain maps](https://doi.org/10.1016/j.neuroimage.2024.120772). *NeuroImage, 298*, 120772.
- Marr, D. (1982/2010). [*Vision: A Computational Investigation into the Human Representation and Processing of Visual Information*](https://doi.org/10.7551/mitpress/9780262514620.001.0001). MIT Press.
- Rorty, R. (1979). *Philosophy and the Mirror of Nature*. Princeton University Press.
