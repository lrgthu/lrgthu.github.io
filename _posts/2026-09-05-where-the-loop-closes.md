---
title: "Where the Loop Closes"
date: 2026-09-05 15:50:00 -0500
summary: "An essay on language, brains, and large language models organized around one question: at what scale does an explanation close its books?"
tags: [language, neuroscience, cognitive-science, philosophy, llm, neuroai]
series: adaptive-intelligence
series_order: 1
---

*Language, representation, and mind from Saussure and Chomsky to large language models*

Someone across a table says *"salt,"* or *"watch the step,"* or *"we will meet tomorrow at three."* Within two hundred milliseconds, populations of neurons along the listener's left temporal lobe settle into a trajectory that separates that utterance from thousands of phonetic and semantic neighbors. If all we ask is how an adult brain recognizes a familiar word in quiet air, the story nearly begins and ends inside a few square centimeters of cortex.

Ask almost any neighboring question and the skull stops being a closed vessel. How a child comes to possess those words in the first place cannot be answered inside one head; the mechanism spans a plastic nervous system and an adult world already organized around speech. Why languages spoken on opposite sides of the earth keep reinventing compositional grammar widens the frame again, across generations of learners who filter and reshape what passes through them. And when a contemporary language model replies in fluent prose, the object governing what happens next is rarely a frozen table of weights; it reaches outward into context windows, search indices, tools, human interlocutors, and the training pipelines through which today's outputs become tomorrow's corpus.

Moving back and forth among linguistics, cortical physiology, and machine learning has left me convinced that many of our fiercest theoretical disputes are disguised disagreements about a single prior question:

> **At what scale does the explanatory loop close?**

Philosophy of mind has often been tempted by one of two extremes when confronted with that question. Reductionism hunts for the true locus of intelligence inside an isolated part—a circuit, a gene, a formal grammar, a loss function—treating the surrounding world as mere input tape. Holism recoils in the opposite direction, insisting that brain, body, society, and history are so thoroughly entangled that any boundary falsifies the whole. Yet science cannot model the universe at once, and engineering cannot debug it. What rescues boundary-drawing from arbitrariness is a **counterfactual test**. Fix the phenomenon, the clock on which it unfolds, and the interventions at stake; then ask whether variables left outside a proposed cut still carry systematic leverage once the states inside it are conditioned on.

Where the surrounding world holds effectively still—a word recognized under controlled presentation, a reflex arc, a readout evaluated under a stationary distribution—an open-loop local model is the right scientific object. Where an organism's or system's outputs alter the conditions that return to it, severing the loop mistakes properties of the traffic for properties of a single vehicle. What we are looking for is neither the smallest part nor the widest totality, but **the smallest causal boundary that closes its books under intervention**.

---

## Sign, Rule, and Where the Books Must Balance

Read through that lens, the foundational schism of modern language science looks less like a war between incompatible ontologies than like two cuts taken at different radii.

Ferdinand de Saussure began from the fact that no word means anything on its own. A sign acquires *value* not through a private tag linking sound to object, but through differences and oppositions within a structured vocabulary—the way a knight in chess is defined not by the wood it is carved from, but by how its permitted moves stand in relation to every other piece on the board. Alongside that **relational** claim sat an equally decisive **social** one. *Langue* does not live complete inside any solitary speaker. Every infant is born into a convention already stabilized across a community; none of us invents Mandarin, French, or English from first principles.

Half a century later, Noam Chomsky turned the spotlight from the public institution to the generative mind. A speaker routinely utters and understands sentences that have never been spoken in the history of the species—nesting clauses inside clauses, as in *Alice thinks [Bob believes [Carol left]]*, where surface adjacency matters less than invisible constituency. Cataloging corpora could never explain that productivity; an adequate theory had to specify the recursive procedures inside an individual head. Philosophy of language spent the same decades pulling along the opposite seam: Ludwig Wittgenstein questioning how a rule could bind if its criteria lived purely in private mental episodes, Hilary Putnam arguing that reference itself reaches past internal states into the physical and social division of linguistic labor.

In loose computational terms, Saussure described something like the shared **representation**, Chomsky the internal **algorithm**, and externalist philosophy the **world-involving semantics**—an analogy instructive mainly at the moment it gives way. In any living communicative system, internal computation reshapes representation, representation channels subsequent computation, and public utterances alter the niche from which the next mind learns.

Even the long argument over the "poverty of the stimulus" changes character once we notice where each camp draws its ledger line. Enclose a single child facing a few years of fragmentary speech, and rich innate grammatical structure looks unavoidable if the books are to balance so fast. Widen the boundary across dozens of generations, as Simon Kirby, Morten Christiansen, Nick Chater, and their colleagues did in models and laboratory transmission chains, and another mechanism enters the accounting: weak perceptual, memory, and learning biases inside individual brains act as a recurring sieve, amplifying regularities cohort after cohort until languages themselves evolve to fit the minds that must learn them. Neither cut abolishes internal machinery or external experience; each assigns structural credit differently because it closes the loop on a different clock.

---

## Inside the Skull—and What Stops at Its Edge

Step down to the millisecond-to-second clock of comprehension, and contemporary neuroscience vindicates Chomsky's internalist *level of question* far better than it vindicates any classical symbol-manipulating diagram. Across spoken, written, and signed languages, functional imaging and lesion mapping—synthesized with particular clarity by Evelina Fedorenko and her collaborators—reveal a predominantly left-lateralized frontotemporal language network that is internally tightly coupled, causally indispensable for understanding and producing sentences, and sharply dissociable from neighboring cortex that supports executive control, logic, or social calculation.

Inside that territory, however, the brain refuses the neat modular separation of syntax from lexicon that early textbooks imagined. High-resolution recordings and precision fMRI by Cory Shain and colleagues show sensitivity to hierarchical phrase structure and word meaning braided across the same cortical populations. Functional specialization at the border of the language network coexists with dense integration inside it.

Intracranial recordings from neurosurgical patients listening to spoken stories add a geometric picture of how that cortex works in real time. Ariel Goldstein, Uri Hasson, and colleagues found that population activity trajectories encode words through context-dependent geometric relations, aligning far more closely with contextual embeddings from deep language models than with static word lookup tables. Here keeping Saussure's two claims distinct prevents an easy confusion. Embedding alignment in temporal cortex demonstrates **relational geometry inside a single brain**, not social *langue* in miniature. Deeper still, **sufficiency at the moment of comprehension is never sufficiency of origin**. The neural manifold that resolves a word in two hundred milliseconds of adult listening was chiseled on far slower clocks—by childhood plasticity operating inside an inherited linguistic world.

One further clinical fact marks the inner edge of language with startling clarity. Individuals with profound global aphasia following massive damage to the left frontotemporal language network—unable to parse or produce structured sentences—can still solve arithmetic problems, reason about physical cause and effect, plan multi-step actions, appreciate music, and infer what another person believes. Language cortex is a specialized instrument, not the theater in which human thought itself takes place. Even inside one skull, understanding how words touch reasoning requires watching representations cross boundaries into nonlinguistic mind.

---

## Four Clocks of a Living Language

Now follow a single unremarkable sentence—*"We will meet tomorrow at three"*—past the bone of the skull.

Within each speaker, hair cells and cortical columns convert pressure waves into lexical and syntactic states in fractions of a second. Between the two people, however, an event of a different order occurs. Where no joint future existed five seconds earlier, a shared obligation now coordinates two bodies across a city twenty-four hours later:

`joint state before utterance → utterance → updated joint state`

Pragmatics, irony, repair, and shared intentionality—the territory charted by Michael Tomasello in developmental psychology and measured physiologically in speaker–listener neural coupling by Greg Stephens, Lauren Silbert, and Uri Hasson—live on this dyadic clock. Viewed from this scale, the neural representations inside each head are not self-contained pictures of meaning; they are control interfaces by which one mind nudges the state of another toward temporary alignment.

Pull the camera back one step further and the conversation becomes a relay across decades. When laboratory participants are taught an initially random set of signals for scenes and their remembered outputs become the training input for the next cohort of participants, something remarkable happens without any designer intending it: accidental regularities are remembered better than arbitrary exceptions, bottlenecks reward reuse of parts, and within a handful of experimental generations a holistic code fractures into compositional grammar. Brains constrain which structures survive passage from mouth to ear; culturally accumulated grammars, in turn, rebuild the developmental landscape into which every subsequent infant wakes.

> **What we call "language" is not a single mechanism at a single address, but four nested loops turning on incompatible clocks.**

Neural trajectories turn in milliseconds, conversational repair in seconds and minutes, developmental wiring over years, and grammatical evolution across centuries. Each faster loop takes the slower ones around it as nearly fixed background—until we ask how that background got its shape.

<div class="living-plate" data-living-plate="boundary-caliper">
  <noscript><p><em>Interactive Plate I: Counterfactual boundary caliper across cortical, dyadic, ontogenetic, and cultural timescales.</em></p></noscript>
</div>

---

## Sedimented Minds in the Training Corpus

Large language models have turned these philosophical boundary questions into an unexpectedly concrete experimental science. Biology welds architecture, bodily survival, developmental timing, and social environment together; in silicon we can hold a network architecture fixed while rewriting its corpus, freeze its weights while granting it memory and tools, or strip away interaction while scaling next-token prediction to trillions of words. Watching which capacities appear—and which stubbornly fail to appear—as those boundaries move is the closest thing cognitive science has ever had to a controllable laboratory of scale.

Yet the headline lesson of that laboratory is routinely read upside down. When grammatical fluency, argument structure, and encyclopedic reach emerge from predicting the next token, it is seductive to draw a tight circle around the transformer and its autoregressive loss and declare that sequence prediction alone has reconstructed mind from raw data. Apply the counterfactual test, and the missing half of the circuit comes into view:

`world → human perception and action → communicative repair → cultural text → LLM`

A pretraining corpus is not raw nature. It is **sedimented human encounter**, the way limestone is sedimented marine life. Every theorem, diagnostic manual, novel, courtroom transcript, git commit, and encyclopedia entry in the training mixture is a trace left behind after biological organisms looked at the world, acted on it, suffered the consequences of error, argued with one another, and compressed what survived into words. Human evolution, child development, and institutional history have already done the hard, embodied work of carving continuous reality into named joints and causal narratives before gradient descent takes its first step. Crediting the resulting competence to next-token prediction in isolation commits the exact mirror image of extreme nativism: one crowds multi-generational cultural work into an infant's genome; the other crowds it into a loss function.

Turn from pretraining to deployment, and the boundary opens in the forward direction as well. Engineers have a wry shorthand for this—*model is data, data is infra, infra is model*—because in practice a bare weight file rarely acts alone. Surrounded by system prompts, retrieved documents, persistent memory, code interpreters, and human users whose preferences and corrections are harvested into the next round of post-training, the acting entity is an evolving composite:

`context + weights + memory + tools + user feedback`

Probing a frozen checkpoint on static benchmarks remains useful in the exact sense that single-word electrophysiology remains useful: it isolates local capacity while holding the surrounding loop open. The mistake begins the moment generated tokens start changing external states, steering human decisions, and re-entering the literary and digital bloodstream on which future models will be raised.

---

## Matching the Model to the Loop

The phrase *the system is the model* therefore holds two meanings that belong together. In contemporary AI engineering, what we ship and govern is no longer a static parameter tensor, but a coupled socio-technical arrangement. In cognitive science and philosophy of mind, our **explanatory model** of any intelligent capacity has to match the smallest causal system whose states actually close the loop under the interventions we care to make.

> **To explain an intelligent capacity is neither to shrink it to a privileged part nor to dissolve it into everything at once, but to find the smallest boundary at which the causal accounting balances.**

Draw that circle too wide, and tractable neural or algorithmic mechanisms vanish into mist. Draw it too narrow, and we mistake an open cross-section for a self-moved whole—crediting a patch of cortex, a child's solitary brain, or an autoregressive objective with order forged across the wider traffic of minds.

The next two essays in this arc follow what happens once we refuse that truncation. [*When the World Pushes Back*](/blog/when-the-world-pushes-back/) asks how NeuroAI changes when internal representations are judged not by static geometric resemblance to the brain, but by the causal roles they play inside an embodied feedback loop—and who supplies the purpose when optimization meets human institutions. [*The User Is Not a Vector*](/blog/the-user-is-not-a-vector/) brings the same lens home to personalization, asking what becomes of preference and self-authorship when a predictive system enters the very environment in which a person's future tastes are formed.

---

## References and further reading

- Chomsky, N. (1957). *Syntactic Structures*. Mouton.
- Christiansen, M. H., & Chater, N. (2008). [Language as shaped by the brain](https://doi.org/10.1017/S0140525X08004998). *Behavioral and Brain Sciences, 31*(5), 489–509.
- de Saussure, F. (1916/1959). *Course in General Linguistics* (W. Baskin, Trans.). Philosophical Library.
- Fedorenko, E., Ivanova, A. A., & Regev, T. I. (2024). [The language network as a natural kind within the broader landscape of the human brain](https://doi.org/10.1038/s41583-024-00802-4). *Nature Reviews Neuroscience, 25*, 289–312.
- Fedorenko, E., Piantadosi, S. T., & Gibson, E. A. F. (2024). [Language is primarily a tool for communication rather than thought](https://doi.org/10.1038/s41586-024-07522-w). *Nature, 630*, 575–586.
- Goldstein, A., Zada, Z., Buchnik, E., et al. (2022). [Shared computational principles for language processing in humans and deep language models](https://doi.org/10.1038/s41593-022-01026-4). *Nature Neuroscience, 25*, 369–380.
- Goldstein, A., Grinstein-Dabush, A., Schain, M., et al. (2024). [Alignment of brain embeddings and artificial contextual embeddings in natural language points to common geometric patterns](https://doi.org/10.1038/s41467-024-46631-y). *Nature Communications, 15*, 2768.
- Kirby, S., Cornish, H., & Smith, K. (2008). [Cumulative cultural evolution in the laboratory: An experimental approach to the origins of structure in human language](https://doi.org/10.1073/pnas.0707835105). *Proceedings of the National Academy of Sciences, 105*(31), 10681–10686.
- Putnam, H. (1975). The meaning of "meaning." In K. Gunderson (Ed.), *Language, Mind, and Knowledge* (Minnesota Studies in the Philosophy of Science, Vol. 7, pp. 131–193). University of Minnesota Press.
- Shain, C., Kean, H., Casto, C., et al. (2024). [Distributed sensitivity to syntax and semantics throughout the language network](https://doi.org/10.1162/jocn_a_02164). *Journal of Cognitive Neuroscience, 36*(7), 1427–1471.
- Stephens, G. J., Silbert, L. J., & Hasson, U. (2010). [Speaker–listener neural coupling underlies successful communication](https://doi.org/10.1073/pnas.1008662107). *Proceedings of the National Academy of Sciences, 107*(32), 14425–14430.
- Tomasello, M. (2008). *Origins of Human Communication*. MIT Press.
- Wittgenstein, L. (1953). *Philosophical Investigations* (G. E. M. Anscombe, Trans.). Basil Blackwell.
