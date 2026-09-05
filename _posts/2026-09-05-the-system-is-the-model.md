---
title: "The System Is the Model"
date: 2026-09-05 15:50:00 -0500
summary: "From Saussure and Chomsky to neuroscience and large language models: a view of language as a coupled system of representation, computation, communication, coordination, and culture."
tags: [language, neuroscience, cognitive-science, llm, neuroai]
---

*Language, representation, and cognition from Saussure and Chomsky to large language models*

One of the oldest disagreements about language can be restated in surprisingly modern computational terms.

Ferdinand de Saussure asked, roughly, **what kind of representational system language is**. Noam Chomsky asked **what kind of internal computational system makes language possible**.

The analogy is deliberately loose, but useful:

> **Saussure is closer to the data structure; Chomsky is closer to the algorithm.**

Saussure emphasized that linguistic units do not carry value independently. Their meaning is shaped by relations and contrasts within a larger symbolic system. Chomsky shifted attention toward an internal faculty capable of constructing an open-ended range of hierarchical expressions from finite means.

These traditions are often treated as competitors. I think modern neuroscience and machine learning suggest a different reading: they illuminate different parts of a coupled system.

The central claim of this essay is not that representation and computation are the same thing. They are not. It is that, in a learned system, they are not causally independent either. Computation continually changes representation; the resulting representational structure determines what computations become easy or available next. Both are shaped by experience. Communication exposes internal states to other agents. Coordination changes shared environments. Culture preserves the consequences and turns them into data for future learners.

The resulting picture is therefore not

`representation + computation + communication`

as a collection of independently specified modules. It is closer to a loop:

`world → experience → representation ↔ computation → communication → coordination → culture → new experience`

The question is no longer only *where* language or intelligence resides. It is also **what sequence of transformations produces, communicates, stabilizes, and reconstructs it over time**.

Classical theories illuminate different transitions in this loop. Contemporary neuroscience is beginning to connect them. Large language models make some of those connections computationally explicit.

---

## 1. The old divide: representation and computation

### Saussure: meaning as relational structure

Saussure's *Course in General Linguistics* introduced a distinction between *langue*, the socially shared system of language, and *parole*, particular acts of speaking. A linguistic sign joins a *signifier*—a sound pattern or other form—to a *signified*, a concept. The connection is largely arbitrary: there is nothing intrinsically tree-like about the sound *tree*.

The more consequential claim is relational. A linguistic unit has value because of its position in a system of differences. Meaning is therefore not exhausted by a lookup table:

`word → object`

It depends on a network:

`word → relations to other signs within a system`

This is not a claim that modern embeddings implement Saussurean linguistics. That would be anachronistic. Saussure's theory was social and semiotic, not a neural representation model. The connection is at the level of an organizing intuition: **meaning is relational rather than atomistic**.

Modern language models make that intuition computationally concrete. A lexical item is represented within a high-dimensional space, and its useful properties depend partly on its position relative to other representations. Contextual models go further: the representation itself changes with context. *Bank* in *river bank* and *bank loan* is not simply a fixed symbol passed into two different downstream rules; its internal state is different in the two contexts.

A modern computational restatement of the Saussurean intuition might therefore be:

> **Meaning partly lives in representational geometry.**

The important word is *partly*. Human meaning is not reducible to geometry in a text-trained model. It also depends on perception, action, memory, goals, social knowledge, and the world to which language is ultimately connected. But relational structure is no longer only a philosophical metaphor. It is something we can measure in both models and brains.

### Chomsky: language as generative computation

Chomsky changed the center of gravity. The central mystery of language, on this view, is not only that words have meanings, but that humans can generate and understand expressions they have never encountered before.

A finite vocabulary supports an open-ended range of sentences. More importantly, sentences have hierarchical structure.

Consider:

> Alice thinks Bob believes Carol left.

The sentence is not merely a sequence of lexical items. It contains nested relations:

`Alice thinks [Bob believes [Carol left]]`

Human language therefore appears to depend on operations that construct and manipulate structured representations. Across different stages of Chomsky's work, the formal machinery changed substantially, but the durable idea is that language should be explained in terms of an **internal generative system**, not merely a catalog of external utterances.

The computer-science analogy is an algorithm operating over structured states.

If Saussure asks how a symbolic space is organized, Chomsky asks what transformations can generate new structure within that space.

This makes their apparent disagreement look less like a contradiction than a difference in explanatory target. In Marr's terms, representational, algorithmic, and implementational questions need not have one-to-one answers. A theory can identify the right level of question while remaining incomplete about the mechanism.

That distinction becomes important once we look at the brain.

---

## 2. What neuroscience preserves—and what it complicates

Modern cognitive neuroscience has vindicated the **internalist turn** more clearly than it has vindicated any particular Chomskyan implementation.

A large body of work identifies a predominantly left-lateralized frontotemporal **core language network**. Across individuals, this network is strongly interconnected, works across input and output modalities, is causally important for language, and is functionally distinguishable from several neighboring systems involved in domain-general control and other forms of cognition (Fedorenko, Ivanova, & Regev, 2024).

There is also strong evidence that linguistic processing cannot be reduced to a linear sequence of words. During continuous speech, neural activity tracks information at multiple linguistic timescales, including words, phrases, and sentences, even when those boundaries are not directly marked in the acoustic signal (Ding et al., 2016).

So two broad Chomskyan intuitions have aged well:

1. language is supported by an internal biological system; and
2. linguistic computation is sensitive to structure beyond surface sequence.

But neuroscience has been much less kind to a cleanly modular interpretation of that system.

Precision fMRI work suggests that syntactic and semantic sensitivity is distributed across overlapping portions of the language network. Shain and colleagues (2024), for example, found widespread sensitivity to both syntax and semantics across frontotemporal language regions, with specialization appearing more graded than categorical.

So the strongest conclusion is not that neuroscience has "proved Chomsky." It is narrower and, I think, more interesting:

> **Chomsky's level of question has survived better than many specific answers to it.**

The brain does seem to contain an internal language system capable of structured computation. Its implementation, however, appears more distributed and interactive than a simple collection of independent symbolic modules.

### A relational geometry of meaning

The representational side of the story has changed just as dramatically.

Contemporary computational neuroscience often describes neural representations geometrically: stimuli correspond to patterns in high-dimensional population activity, and information is expressed through relations among those patterns. This has made language models unusually useful comparison systems.

Goldstein and colleagues (2024) recorded intracranial activity from the inferior frontal gyrus while participants listened to natural speech and constructed neural population representations—"brain embeddings"—for individual words. They found that the relational geometry of these neural representations could be aligned with contextual embeddings from deep language models. Contextual embeddings captured the geometry better than static word embeddings.

The result requires caution. The study involved three participants, and geometric correspondence does not imply that cortex implements the same algorithm as a transformer. Still, the conceptual point is important: a neural representation can be characterized partly by **its relations to other representations in a continuous space**.

That is not Saussure implemented in cortex. It is a modern empirical result that resonates with a Saussurean organizing principle: the informational role of an element depends on its relations within a larger system.

Recent work suggests that this comparison may extend beyond language narrowly construed. Doerig and colleagues (2025) showed that LLM representations derived from descriptions of natural scenes can explain high-level visually evoked brain activity, with controlled analyses indicating that the advantage depends on integration of complex contextual information rather than isolated words alone.

This should not be interpreted as evidence that visual cortex secretly represents scenes in English. A more useful interpretation is that language models may learn a relational coordinate system that approximates some of the conceptual structure also useful to the brain.

### Language is not the same thing as thought

A further result complicates both classical linguistics and modern enthusiasm about LLMs: the core language network can be dissociated from several forms of nonlinguistic cognition.

People with severe aphasia can retain substantial capacities for reasoning, while demanding tasks in mathematics, executive control, or social inference need not strongly recruit language-selective cortex. Fedorenko, Piantadosi, and Gibson (2024) synthesize this literature into a provocative thesis: in modern humans, language is primarily a tool for communication rather than the machinery of thought itself.

Whether one accepts that conclusion in its strongest form, the dissociation matters. It suggests that we should distinguish at least two questions:

1. What systems construct and manipulate thoughts?
2. What systems map those thoughts into communicable linguistic form?

A parallel distinction is useful for thinking about LLMs. Mahowald and colleagues (2024) distinguish **formal linguistic competence**—mastery of linguistic patterns and structure—from **functional linguistic competence**, which requires using language together with world knowledge, reasoning, goals, and social context.

The familiar question "Does an LLM understand language?" can therefore be decomposed into more tractable ones: What representational structures has it acquired? What computations can it perform over them? What is grounded in perception or action? Can it infer communicative intentions? What additional machinery is required when language becomes persistent action and social commitment?

Those are different scientific questions.

---

## 3. Learned systems: when representation and computation co-adapt

The algorithm/data-structure analogy now starts to break down in a productive way.

In a conventional program, we can imagine an algorithm acting on a data structure that is specified independently. In a learned neural system, the separation is less stable.

At layer `l`, a network contains a representation `h(l)`. A learned transformation maps it to a new representation:

`h(l) → fθ(h(l)) → h(l+1)`

The output representation becomes the input state for the next computation.

This does **not** imply

`representation = computation`.

The distinction remains analytically useful. But it does imply something weaker and more consequential:

> **In a learned system, representation and computation need not be independent causal modules.**

Computation constructs new representational states; those states constrain what subsequent computations are easy or even possible. Training changes both together.

Language models provide a striking demonstration. They are not explicitly programmed with a traditional symbolic grammar, yet prediction-trained models develop internal states that encode substantial lexical, syntactic, semantic, and contextual structure.

Some of these learned states also predict human neural responses.

Goldstein and colleagues (2022), using intracranial recordings during natural speech, reported correspondences between autoregressive language models and human neural processing in contextual word representations, pre-word prediction, and post-word surprise. Caucheteux and King (2022), using fMRI and MEG, found that a model's ability to predict words from context was strongly associated with its ability to predict human brain responses.

More recent work asks not only whether model representations align with neural data, but whether representational transformations across depth show comparable organization. Mischler and colleagues (2024) reported that higher-performing LLMs showed stronger brain predictivity and more similar hierarchical feature-extraction trajectories. Gao and colleagues (2025) found, in naturalistic reading datasets, that increasing model scale was associated with stronger alignment to human behavioral and neural measures than instruction tuning alone.

None of these results establishes mechanistic identity between transformers and cortex.

A model can predict a neural response for the wrong reason. Different algorithms can generate similar representational geometries. Encoding accuracy is therefore a constraint on theory, not proof of shared implementation.

But LLMs have changed what kinds of theories are experimentally available. We can now compare complete computational systems to brain data and ask which properties—architecture, objective, context, scale, training data, or intermediate representations—improve explanatory power.

This is one reason language models are useful to neuroscience even if brains are not transformers. They let us study, in explicit computational systems, how learning rules produce representational geometries and how those geometries support later computation.

The useful comparison is therefore not "symbolic versus statistical." It is:

`experience → learned representation ↔ learned computation`

and then, separately, which parts of that transformation resemble biology.

---

## 4. From individual language to a coupled cognitive system

So far the unit of analysis has mostly been one agent. Language becomes more interesting when the boundary expands.

Suppose I say:

> We will meet tomorrow at three.

Before the utterance, two people may have no shared plan. After a successful exchange, they do.

The relevant transformation is not merely

`information in A → information in B`

but

`joint state before language → joint state after language`

Promises, requests, agreements, declarations, instructions, contracts, and plans all have this character. Language changes the state of a social system.

This is the insight behind pragmatics and speech-act theory, and it becomes particularly important in Tomasello's account of human communication. Human language operates on top of an infrastructure of **shared intentionality**: joint attention, common ground, cooperative goals, and representations of what others know and intend.

Neuroscience has begun to move in the same direction. Classical language experiments typically isolate one participant and present words or sentences. Natural communication is intrinsically interpersonal. Stephens, Silbert, and Hasson (2010) showed that during natural storytelling, speaker and listener brain activity becomes coupled, and stronger coupling is associated with better comprehension.

The unit of analysis can therefore expand from one language system to an interacting pair.

### Coordination becomes culture

Once linguistic structures are transmitted across many people and generations, another level appears. Kirby, Cornish, and Smith (2008) showed experimentally that artificial languages passed through chains of learners can become progressively more structured and learnable. Some properties of a language can therefore arise through **cultural transmission**, not only from the inductive biases of one learner considered in isolation.

The causal arrow becomes circular:

`brains shape language`

and

`languages adapt to brains`

Communication becomes coordination. Coordination becomes culture. Culture becomes the learning environment of the next generation.

Reading provides a concrete example of this feedback. Writing is far too recent a cultural invention for natural selection to have produced a dedicated reading organ. Yet literacy produces reproducible functional organization in the brain. Dehaene and Cohen's neuronal recycling hypothesis proposes that cultural inventions recruit and reshape evolutionarily older neural circuits whose pre-existing properties make them suitable for new functions.

Culture is therefore not merely output from a fixed biological brain. It changes the developmental inputs under which brains organize themselves.

`brain → culture → developmental environment → brain`

This is where extended-cognition arguments become relevant, though they are not required for the narrower claim of this essay. Clark and Chalmers ask whether a reliably integrated external resource can sometimes count as part of a cognitive process. One need not accept the strongest constitutive version of that thesis to recognize a weaker empirical point: external structures can be **causally indispensable components of intelligent behavior**.

A notebook can participate in memory. A calendar can participate in prospective cognition. Language can preserve representations outside individual brains, transmit them between people, and accumulate them across generations.

The closed loop is therefore not meant as a metaphysical claim that "everything is cognition." It is an explanatory proposal about the appropriate causal unit:

```text
WORLD
  ↓
EXPERIENCE / DATA
  ↓
REPRESENTATION
  ↕
COMPUTATION
  ↓
LANGUAGE / EXTERNALIZATION
  ↓
COMMUNICATION
  ↓
COORDINATION
  ↓
CULTURE / SOCIAL ENVIRONMENT
  ↓
NEW EXPERIENCE / DATA
  ↺
```

The individual brain remains essential. It is simply not the only part of the loop that explains what the system becomes over time.

---

## 5. The system is the model

This is where an apparently unrelated engineering intuition becomes useful.

In modern machine learning one sometimes hears the deliberately provocative maxim:

> **model is data, data is infra, infra is model.**

Taken literally, this is false. A checkpoint is not a dataset, and a cluster scheduler is not a transformer.

The analogy I want to draw is also **not** between GPUs and neurons. It is between two failures of modular decomposition.

In both cases, boundaries that are useful for engineering or analysis can become misleading when they are mistaken for causal independence.

### Model is data

A trained parameter vector is partly a compressed consequence of the distribution it has encountered:

`parameters = F(architecture, data, objective, optimization, training dynamics)`

Change the data mixture and you change the effective model. Change filtering, curriculum, synthetic-data generation, preference data, or sampling and you change what capabilities emerge.

The training distribution has been folded into the parameters. What looks like one component contains the causal history of another.

### Data is infrastructure

At large scale, "the dataset" is not a static file. It is a running system of acquisition, filtering, deduplication, ranking, tokenization, mixing, storage, streaming, retrieval, feedback, and refresh.

The effective data distribution is an infrastructural product.

### Infrastructure is model

Infrastructure constrains the class of systems that can exist economically and reliably. Memory affects context length. Interconnect topology affects parallelism. Serving systems determine whether retrieval, external memory, tool use, mixture-of-experts routing, or long-horizon agents are feasible.

For a deployed AI system, the effective model increasingly looks like:

`parameters + context + retrieval + memory + tools + orchestration + serving system`

The point is not that these things are literally identical. It is that they **jointly determine the behavior of the deployed system**.

That is structurally similar to the argument developed above for language and cognition:

`representation ↔ computation ↔ interaction ↔ environment`

The explanatory boundaries remain useful. They should not be mistaken for independent causes.

### Why LLMs make the old debate newly interesting

Large language models introduce an unusual intervention into this history because their training data is not simply raw sensory experience.

It is largely the accumulated symbolic output of other minds.

A simplified causal chain is:

```text
world
→ human perception and cognition
→ language
→ cultural artifacts
→ text
→ LLM training
```

Books, scientific papers, software, laws, conversations, histories, arguments, and stories are not raw observations of the world. They are products of human perception, abstraction, reasoning, communication, and coordination.

An LLM is therefore trained on what we might call **compressed traces of human cognition and culture**.

This matters when interpreting what emerges from prediction objectives. The remarkable linguistic and conceptual structure acquired by LLMs does not by itself demonstrate that prediction can reconstruct intelligence from unstructured data. The data is already profoundly structured. It was generated by intelligent agents living in a shared world and filtered through language and culture.

This complicates the classical opposition between innate structure and learning from data.

Data can contain structure. Architecture determines what regularities can be extracted. Optimization converts those regularities into internal geometry. Internal geometry changes what computations become accessible. Outputs alter the environment that produces future data.

Again, we return to the loop.

### What might be uniquely human?

This framework also changes how I would pose the question of whether language is uniquely human.

Communication is not uniquely human. Representation is not uniquely human. Complex computation is not uniquely human. Social coordination is not uniquely human.

The distinctive feature may instead be their integration into a self-reinforcing system:

`rich representation`

`+ compositional computation`

`+ symbolic communication`

`+ shared intentionality`

`+ cumulative culture`

Human language makes private representations public. Public representations support coordination. Coordination creates cultural artifacts. Culture stores structure outside individual brains. That structure becomes developmental data for new brains.

The cycle compounds.

Under this view, human linguistic uniqueness may not reside in a single magical operation. It may lie in the way multiple capacities lock together and create a cultural ratchet.

LLMs complicate the picture because they show that an artificial system can acquire unexpectedly rich formal linguistic competence by learning from the outputs of that ratchet. But a text-trained model inherits an enormous cultural environment without independently reproducing the evolutionary, developmental, embodied, and interpersonal process that generated it.

That is precisely why LLMs are scientifically interesting: they let us experimentally separate components of a system that, in humans, normally arrive tightly coupled.

---

## Conclusion: from localization to dynamics

There is a methodological lesson here for both neuroscience and AI.

We often ask localization questions: Where is syntax? Where is meaning? Which brain region performs a computation? Which layer contains a concept? Where is knowledge stored in a model?

These are useful questions, but they can encourage an overly static picture.

A representation is useful partly because of the computations available over it. A computation is effective because of the representational state on which it operates. Those representations are shaped by learning. Learning is shaped by data. Data is shaped by previous agents and environments. Communication changes other agents. Collective action changes the environment.

The more complete scientific question is therefore not simply:

> Where is the representation?

but:

> **What sequence of transformations creates, uses, communicates, and updates it?**

And not simply:

> Where is intelligence located?

but:

> **What closed loop produces intelligent behavior?**

This reframing matters for NeuroAI. A model that matches a static representational geometry may still implement the wrong transformation. A model that predicts neural responses during passive comprehension may fail during interactive cognition. A system that performs well on linguistic benchmarks may still lack mechanisms required for grounded, persistent coordination.

Conversely, an artificial model need not resemble biological implementation at every level to provide a useful theory of a particular computation. The goal is not to decide whether brains "are transformers." It is to identify the levels at which artificial and biological systems converge, the levels at which they diverge, and the constraints that produce each pattern.

Saussure and Chomsky are useful here not because one must defeat the other. They identify different explanatory objects. Saussure helps us ask how representations acquire value through relations within a system. Chomsky helps us ask what internal computations construct new structured states. Modern neuroscience suggests that both questions matter, while learned systems show why their answers cannot always be cleanly separated.

The engineering intuition that *model is data, data is infra, infra is model* points toward the same methodological lesson.

The deeper principle is not that these categories are literally identical.

It is that **they mutually constrain the system we are trying to explain**.

For artificial intelligence, this suggests:

> **The system is the model.**

For cognitive science, a corresponding caution is:

> **The brain is not the whole explanatory system.**

The strongest claim I want to make is therefore methodological rather than metaphysical:

> **Intelligence is not well explained by locating it in a single component. It is better understood through the dynamics by which representations, computations, agents, and environments constrain and reconstruct one another over time.**

---

## References

Austin, J. L. (1962). *How to Do Things with Words*. Oxford University Press.

Caucheteux, C., & King, J.-R. (2022). Brains and algorithms partially converge in natural language processing. *Communications Biology, 5*, 134. [doi:10.1038/s42003-022-03036-1](https://doi.org/10.1038/s42003-022-03036-1)

Chomsky, N. (1957). *Syntactic Structures*. Mouton.

Clark, A., & Chalmers, D. (1998). The extended mind. *Analysis, 58*(1), 7–19. [doi:10.1093/analys/58.1.7](https://doi.org/10.1093/analys/58.1.7)

Dehaene, S., & Cohen, L. (2007). Cultural recycling of cortical maps. *Neuron, 56*(2), 384–398. [doi:10.1016/j.neuron.2007.10.004](https://doi.org/10.1016/j.neuron.2007.10.004)

Ding, N., Melloni, L., Zhang, H., Tian, X., & Poeppel, D. (2016). Cortical tracking of hierarchical linguistic structures in connected speech. *Nature Neuroscience, 19*, 158–164. [doi:10.1038/nn.4186](https://doi.org/10.1038/nn.4186)

Doerig, A., Kietzmann, T. C., Allen, E., et al. (2025). High-level visual representations in the human brain are aligned with large language models. *Nature Machine Intelligence, 7*, 1220–1234. [doi:10.1038/s42256-025-01072-0](https://doi.org/10.1038/s42256-025-01072-0)

Fedorenko, E., Ivanova, A. A., & Regev, T. I. (2024). The language network as a natural kind within the broader landscape of the human brain. *Nature Reviews Neuroscience, 25*, 289–312. [doi:10.1038/s41583-024-00802-4](https://doi.org/10.1038/s41583-024-00802-4)

Fedorenko, E., Piantadosi, S. T., & Gibson, E. A. F. (2024). Language is primarily a tool for communication rather than thought. *Nature, 630*, 575–586. [doi:10.1038/s41586-024-07522-w](https://doi.org/10.1038/s41586-024-07522-w)

Gao, C., Ma, Z., Chen, J., Li, P., Huang, S., & Li, J. (2025). Increasing alignment of large language models with language processing in the human brain. *Nature Computational Science, 5*, 1080–1090. [doi:10.1038/s43588-025-00863-0](https://doi.org/10.1038/s43588-025-00863-0)

Goldstein, A., Zada, Z., Buchnik, E., et al. (2022). Shared computational principles for language processing in humans and deep language models. *Nature Neuroscience, 25*, 369–380. [doi:10.1038/s41593-022-01026-4](https://doi.org/10.1038/s41593-022-01026-4)

Goldstein, A., Grinstein-Dabush, A., Schain, M., et al. (2024). Alignment of brain embeddings and artificial contextual embeddings in natural language points to common geometric patterns. *Nature Communications, 15*, 2768. [doi:10.1038/s41467-024-46631-y](https://doi.org/10.1038/s41467-024-46631-y)

Hauser, M. D., Chomsky, N., & Fitch, W. T. (2002). The faculty of language: What is it, who has it, and how did it evolve? *Science, 298*(5598), 1569–1579. [doi:10.1126/science.298.5598.1569](https://doi.org/10.1126/science.298.5598.1569)

Kirby, S., Cornish, H., & Smith, K. (2008). Cumulative cultural evolution in the laboratory: An experimental approach to the origins of structure in human language. *Proceedings of the National Academy of Sciences, 105*(31), 10681–10686. [doi:10.1073/pnas.0707835105](https://doi.org/10.1073/pnas.0707835105)

Mahowald, K., Ivanova, A. A., Blank, I. A., Kanwisher, N., Tenenbaum, J. B., & Fedorenko, E. (2024). Dissociating language and thought in large language models. *Trends in Cognitive Sciences, 28*(6), 517–540. [doi:10.1016/j.tics.2024.01.011](https://doi.org/10.1016/j.tics.2024.01.011)

Marr, D. (1982). *Vision: A Computational Investigation into the Human Representation and Processing of Visual Information*. W. H. Freeman.

Mischler, G., Li, Y. A., Bickel, S., Mehta, A. D., & Mesgarani, N. (2024). Contextual feature extraction hierarchies converge in large language models and the brain. *Nature Machine Intelligence, 6*, 1467–1477. [doi:10.1038/s42256-024-00925-4](https://doi.org/10.1038/s42256-024-00925-4)

de Saussure, F. (1916/1959). *Course in General Linguistics* (W. Baskin, Trans.). Philosophical Library.

Shain, C., Kean, H., Casto, C., et al. (2024). Distributed sensitivity to syntax and semantics throughout the language network. *Journal of Cognitive Neuroscience, 36*(7), 1427–1471. [doi:10.1162/jocn_a_02164](https://doi.org/10.1162/jocn_a_02164)

Stephens, G. J., Silbert, L. J., & Hasson, U. (2010). Speaker–listener neural coupling underlies successful communication. *Proceedings of the National Academy of Sciences, 107*(32), 14425–14430. [doi:10.1073/pnas.1008662107](https://doi.org/10.1073/pnas.1008662107)

Tomasello, M. (2008). *Origins of Human Communication*. MIT Press.

Tuckute, G., Kanwisher, N., & Fedorenko, E. (2024). Language in brains, minds, and machines. *Annual Review of Neuroscience, 47*, 277–301. [doi:10.1146/annurev-neuro-120623-101142](https://doi.org/10.1146/annurev-neuro-120623-101142)