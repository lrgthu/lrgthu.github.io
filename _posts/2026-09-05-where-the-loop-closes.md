---
title: "Where the Loop Closes"
date: 2026-09-05 15:50:00 -0500
summary: "A research perspective on language, brains, and large language models organized around one question: at what scale does the explanatory loop close?"
tags: [language, neuroscience, cognitive-science, llm, neuroai]
series: adaptive-intelligence
series_order: 1
---

*Language, representation, and cognition from Saussure and Chomsky to large language models*

A single question keeps returning whenever I move between linguistics, neuroscience, and large language models:

> **At what scale does the explanatory loop close?**

Recognizing a spoken word in two hundred milliseconds can be explained largely within a cortical population. Acquiring a first language cannot: the mechanism spans a developing brain and a structured communicative environment. Accounting for why human languages share recurrent grammatical patterns widens the frame again, across generations of learners who filter and reshape what they transmit. And in contemporary AI, the object that governs behavior is rarely a frozen checkpoint in isolation; it includes context, retrieval, tools, users, and the data pipeline through which outputs re-enter future training.

Choosing among those scales does not require holistic hand-waving, nor does it imply that larger boundaries are always better. The operational test I find sharpest is counterfactual. Fix the phenomenon, the timescale, and the class of interventions at stake; then ask whether variables left outside a proposed boundary still carry systematic predictive or counterfactual leverage once the states inside it are conditioned on. Where external conditions remain effectively stationary—a word recognized under controlled stimulation, a short-horizon sensorimotor reflex, a fixed readout under a stable distribution—a local, open-loop model is the right scientific object. Where actions or transmissions alter the inputs that return, truncating the boundary misattributes properties of the loop to a single part inside it. The goal is the **smallest causal boundary that remains adequate under the relevant interventions**.

Reading the history of language science through that criterion changes the shape of an old divide. Ferdinand de Saussure treated language as a socially shared system of relations in which each sign takes its value from contrasts with other signs. Noam Chomsky turned inward, asking what generative procedures inside an individual mind construct and interpret unbounded hierarchical expressions. In rough computer-science terms, Saussure described something like the **data structure** and Chomsky something like the **algorithm**—an analogy instructive mainly at the point where it breaks down. In any system that learns and communicates, computation reshapes representation, representation constrains subsequent computation, and utterances alter the social environment from which the next learner draws evidence. Instead of asking whether language is essentially representation, computation, or communication, we can ask which causal boundary closes the accounting for a given question—turning structural linguistics, generative grammar, cortical physiology, and large language models into complementary cuts through the same multiscale process.

---

## 1. Two Cuts Through the Same System

Saussure's *Course in General Linguistics* rests on two distinct claims that are worth keeping separate because modern discussions often conflate them. The first is **internal relationality**: a word does not acquire its role through an isolated link from label to object, because its value depends on contrasts and oppositions within a structured vocabulary. That relational intuition—stripped of any anachronistic claim that Saussure anticipated vector spaces—survives wherever meaning is modeled through geometry rather than atomistic symbols. The second claim is **social distribution**: *langue* does not reside privately inside one speaker. Every child encounters a linguistic convention already stabilized across a community, and no individual invents Mandarin, French, or English from scratch.

Chomsky shifted the explanatory target from the shared convention to creative competence. Humans routinely produce and parse nested structures they have never heard before, such as *Alice thinks [Bob believes [Carol left]]*, where linear word order matters less than hierarchical constituency. Across decades of changing formalisms, the core internalist commitment held steady: an explanatory theory must specify the generative machinery inside an individual mind rather than catalog observable corpora.

Seen through a boundary lens, debates over the "poverty of the stimulus" are disagreements about where the books must balance. If one draws a tight boundary around an individual child facing sparse, noisy utterances over a few years, strong innate structural priors appear mandatory to explain rapid convergence. If one widens the boundary across generations of speakers, weak perceptual, memory, and learning biases in individuals can be amplified through repeated cultural bottlenecks until languages themselves adapt to become learnable by brains like ours (Kirby, Cornish, & Smith, 2008; Christiansen & Chater, 2008). Neither cut refutes the need for internal machinery or external input; each assigns structural credit differently because it closes the loop at a different scale.

---

## 2. Inside One Brain—and Its Limits

Within the millisecond-to-second horizon of online comprehension, modern neuroscience preserves Chomsky's internalist level of question better than it vindicates any classical box-and-arrow implementation. Across modalities and languages, fMRI and lesion studies identify a predominantly left-lateralized frontotemporal language network that is tightly interconnected, causally required for comprehension and production, and functionally dissociable from neighboring domain-general executive regions (Fedorenko, Ivanova, & Regev, 2024). That network tracks hierarchical linguistic structure rather than flat word statistics alone, yet precision imaging reveals syntactic and semantic sensitivity distributed across overlapping cortical territory rather than segregated into separate modules (Shain et al., 2024). Functional specialization at the network boundary coexists with tight representational integration inside it.

Intracranial recordings during natural narrative listening add a geometric view of those internal states. Population activity patterns carry word-in-context information in their relational geometry, and contextual embeddings from deep language models align with this neural geometry substantially better than static word vectors do (Goldstein et al., 2022; Goldstein et al., 2024). Here the distinction between Saussure's two claims matters. Cortical embedding alignment illustrates **relational coding within one brain**, not social *langue* by itself. Even more importantly, **inference-time sufficiency is not developmental or historical sufficiency**: the representational geometry deployed inside two hundred milliseconds of listening was sculpted on far slower clocks by years of individual learning in a culturally structured language.

One further neural dissociation sharpens the internal boundary. People with severe aphasia and extensive damage to the frontotemporal language network can retain intact arithmetic, causal reasoning, executive planning, and theory of mind (Fedorenko, Piantadosi, & Gibson, 2024). Language cortex is therefore specialized without serving as the seat of all thought. Even inside a single skull, the explanatory loop for human cognition requires transformations across representational spaces and interfaces to nonlinguistic systems.

---

## 3. Across Speakers and Generations

Follow a single mundane utterance—*"We will meet tomorrow at three"*—past the boundary of one brain. Within each participant, acoustic waveforms are mapped onto lexical and syntactic states in hundreds of milliseconds. Between the two people, however, something qualitatively different occurs: where no shared plan existed before the sentence was spoken, a coordinated commitment organizes both agents' behavior the next afternoon.

`joint state before utterance → utterance → updated joint state`

Pragmatics and shared intentionality live on this dyadic clock. Successful communication relies on common ground, joint attention, and recursive models of what a partner knows or intends (Tomasello, 2008), and natural storytelling induces measurable speaker–listener neural coupling whose strength predicts comprehension (Stephens, Silbert, & Hasson, 2010). The linguistic representations inside each brain function as control interfaces for updating states distributed across brains.

Step back one timescale further and the dyad becomes a transmission chain. Laboratory iterated-learning experiments demonstrate that initially unstructured signaling systems, passed from one cohort of learners to the next under pressures for both expressivity and learnability, spontaneously develop compositional syntax (Kirby, Cornish, & Smith, 2008). Brains constrain what forms survive transmission, while culturally evolved grammars reshape the developmental niche encountered by every subsequent infant (Christiansen & Chater, 2008).

> **What looks like one closed loop is a hierarchy of nested loops running on different clocks.**

Neural trajectories unfold in milliseconds, conversational alignment in seconds and minutes, ontogenetic plasticity over years, and grammatical evolution across generations. Human language owes its leverage to the way structured internal computation, dyadic coordination, and cumulative culture lock together across those four clocks rather than residing in any single layer alone.

---

## 4. What Large Language Models Actually Inherit

Large language models turn this boundary question into an experimental discipline because they allow interventions that biology entangles. Holding architecture fixed while altering data curation, scaling parameters under a fixed objective, or grafting retrieval, memory, and tool execution onto a frozen backbone lets us watch capabilities appear or vanish as the effective boundary moves.

The sharpest lesson of that perturbation program is often misread. When syntactic competence, discourse coherence, and world knowledge emerge from next-token prediction, it is tempting to draw the explanatory boundary tightly around the architecture and autoregressive loss—concluding that sequence prediction alone reconstructs intelligence from raw data. Our counterfactual criterion exposes what that boundary leaves out:

`world → human cognition → communicative coordination → cultural text → LLM`

Pretraining corpora are not unmediated samples of physical reality. Books, proofs, source code, encyclopedia entries, and recorded dialogues are distilled artifacts of human perception, causal experimentation, pragmatic repair, and centuries of institutional selection. Every lexical distinction and argumentative form in the training set has already passed through biological brains and social feedback loops. Autoregressive pretraining succeeds as spectacularly as it does partly because human culture has already paid the evolutionary and developmental cost of compressing the world into learnable symbolic traces. Attributing the resulting structure solely to next-token prediction makes the mirror mistake of radical nativism: both mislocate properties of a wider multi-agent history inside a narrow local mechanism.

At deployment, the engineering aphorism *model is data, data is infra, infra is model* points to the same boundary shift forward in time. Once a checkpoint is embedded in persistent context, external memory, tool execution, and user feedback that feeds subsequent post-training, the behavioral unit is a compound system:

`context + weights + memory + tools + user feedback`

Evaluating the checkpoint in open-loop isolation still answers useful local questions, much as controlled single-word physiology does in neuroscience. It ceases to close the explanatory loop the moment generated outputs alter external states or reshape the corpus on which successor models will be trained.

---

## Matching the Model to the Loop

The engineering phrase *the system is the model* carries a useful double meaning here. In AI practice, "the model" has expanded from a static parameter file into a compound socio-technical system. In cognitive science and NeuroAI, our **explanatory model** of an intelligent capacity has to match the smallest causal system whose states close the loop under the interventions we care about.

> **Intelligent capacities are explained not by locating essence in an isolated component, but by identifying the smallest causal boundary that remains predictively and counterfactually adequate at the timescale of the question.**

Drawing that boundary too wide dissolves tractable local mechanisms into vague holism; drawing it too narrow credits a cortical region or an autoregressive objective with structure generated by developmental, communicative, and cultural loops outside the frame. **The system is the model—once we specify which phenomenon, under which interventions, and on which clock.**

The companion essays in this series follow that commitment in two directions: [*When the World Pushes Back*](/blog/when-the-world-pushes-back/) asks what causal organization inside a closed organism–environment loop distinguishes genuine control from static representational similarity, and [*The User Is Not a Vector*](/blog/the-user-is-not-a-vector/) examines what happens when the adaptive loop couples a recommender system to a person whose preferences are still being formed.

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
- Shain, C., Kean, H., Casto, C., et al. (2024). [Distributed sensitivity to syntax and semantics throughout the language network](https://doi.org/10.1162/jocn_a_02164). *Journal of Cognitive Neuroscience, 36*(7), 1427–1471.
- Stephens, G. J., Silbert, L. J., & Hasson, U. (2010). [Speaker–listener neural coupling underlies successful communication](https://doi.org/10.1073/pnas.1008662107). *Proceedings of the National Academy of Sciences, 107*(32), 14425–14430.
- Tomasello, M. (2008). *Origins of Human Communication*. MIT Press.
