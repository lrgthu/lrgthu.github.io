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

Saussure emphasized that linguistic units do not carry value independently. Their meaning is shaped by relations and contrasts within a larger symbolic system. Chomsky shifted attention toward an internal faculty capable of constructing an unbounded range of hierarchical expressions from finite means.

These traditions are often treated as competitors. I think modern neuroscience and machine learning suggest a different reading: they illuminate different parts of a coupled system.

An algorithm needs a representation to operate on. A representation is useful partly because of the operations it supports. In a learned system, computation continually changes representation; the resulting representational geometry shapes the next computation. Both are molded by experience. Communication exposes internal states to other agents. Coordination changes the shared environment. Culture preserves the consequences and turns them into data for the next learner.

The resulting picture is not

`representation + computation + communication`

as a set of independent modules. It is closer to a loop:

`world → experience → representation ↔ computation → communication → coordination → culture → new experience`

Classical theories illuminate different transitions in this loop. Contemporary neuroscience is beginning to connect them. Large language models make some of those connections computationally explicit.

The deeper possibility is that intelligence does not reside in any single component. It emerges from the organization of the whole system.

---

## 1. Saussure: meaning as relational structure

Saussure's *Course in General Linguistics* introduced a distinction between *langue*, the socially shared system of language, and *parole*, particular acts of speaking. A linguistic sign joins a *signifier*—a sound pattern or other form—to a *signified*, a concept. The connection is largely arbitrary: there is nothing intrinsically tree-like about the sound *tree*.

The more consequential claim is relational. A linguistic unit has value because of its position in a system of differences. Meaning is therefore not exhausted by a lookup table:

`word → object`

It depends on a network:

`word → relations to other signs within a system`

Saussure was not proposing vector embeddings, and it would be anachronistic to read modern distributional semantics directly back into structural linguistics. His theory was social and semiotic, not a neural representation model. But the family resemblance is hard to miss: both make **relations among representations** central to meaning.

Modern language models sharpen that intuition. A lexical item is represented within a high-dimensional space, and its useful properties depend on its position relative to other representations. Contextual models go further: the representation itself is reconstructed as context changes. *Bank* in *river bank* and *bank loan* is not simply a fixed symbol handed to two different downstream rules; its internal state is different in the two contexts.

A modern computational restatement of the Saussurean intuition might therefore be:

> **Meaning partly lives in representational geometry.**

The important word is *partly*. Human meaning is not reducible to geometry in a text-trained model. It also depends on perception, action, memory, goals, social knowledge, and the world to which language is ultimately connected. But relational structure is no longer just a philosophical metaphor. It is something we can measure in both models and brains.

---

## 2. Chomsky: language as generative computation

Chomsky changed the center of gravity. The central mystery of language, on this view, is not only that words have meanings, but that humans can generate and understand expressions they have never encountered before.

A finite vocabulary supports an effectively unbounded number of sentences. More importantly, sentences have hierarchical structure.

Consider:

> Alice thinks Bob believes Carol left.

The sentence is not merely a sequence of six lexical items. It contains nested relations:

`Alice thinks [Bob believes [Carol left]]`

Human language therefore appears to depend on operations that construct and manipulate structured representations. Across different stages of Chomsky's work, the formal machinery changed substantially, but the durable idea is that language should be explained in terms of an **internal generative system**, not merely a catalog of external utterances.

The computer-science analogy is an algorithm operating over structured states.

If Saussure asks how the symbolic space is organized, Chomsky asks what transformations can generate new structure within that space.

This makes the apparent disagreement look less like a contradiction than a difference in explanatory target. In Marr's terminology, questions about representation, algorithm, and physical implementation need not have one-to-one answers. A theory can be insightful at one level while incomplete at another.

Language needs both structure and operations over structure.

---

## 3. What neuroscience preserved from Chomsky—and what it complicated

Modern cognitive neuroscience gives substantial support to one broad Chomskyan intuition: language is not merely an observable pattern of speech or a social convention. There is a reproducible internal neural system supporting linguistic processing.

A large body of work identifies a predominantly left-lateralized frontotemporal **core language network**. Across individuals, it is strongly interconnected, works across input and output modalities, is causally important for language, and is functionally distinguishable from several neighboring systems involved in domain-general control and other forms of cognition (Fedorenko, Ivanova, & Regev, 2024).

This is much closer to an internal computational conception of language than to a theory restricted to external linguistic behavior.

There is also strong evidence that the brain represents linguistic organization above the level of linear word sequences. During continuous speech, neural activity can track structure at multiple linguistic timescales—words, phrases, and sentences—even when those boundaries are not directly marked in the acoustic signal (Ding et al., 2016).

The broad principle

> **language is structure, not merely sequence**

has survived remarkably well.

What has not survived as cleanly is a strongly modular picture of how that structure is neurally implemented.

Precision fMRI work increasingly suggests that syntactic and semantic sensitivity is distributed across overlapping portions of the language network. Shain and colleagues (2024), for example, found widespread sensitivity to both syntax and semantics across frontotemporal language regions, with specialization appearing more graded than categorical.

So neuroscience gives an interesting verdict.

There is an identifiable internal language system. There is hierarchical and compositional processing. But the division of labor inside that system may be considerably more distributed and integrated than a simple architecture of independent symbolic modules would suggest.

In that sense, **the existence of language computation looks Chomskyan; its neural implementation looks less cleanly modular.**

---

## 4. What neuroscience makes newly Saussurean

The representational side of the story has changed just as dramatically.

Contemporary computational neuroscience often describes neural representations geometrically: stimuli correspond to patterns in high-dimensional population activity, and information is expressed through relations among those patterns. This shift has made language models unusually useful scientific comparison systems.

Goldstein and colleagues (2024) recorded intracranial activity from the inferior frontal gyrus while participants listened to natural speech and constructed neural population representations—"brain embeddings"—for individual words. They found that the relational geometry of these neural representations could be aligned with contextual embeddings from deep language models. Contextual embeddings captured the geometry better than static word embeddings.

The result requires caution. The study involved three participants, and geometric correspondence does not imply that cortex implements the same algorithm as a transformer. But the conceptual point is important: a neural representation can be characterized partly by **its relations to other representations in a continuous space**.

That is an unexpectedly modern echo of Saussure.

Recent work also suggests that this comparison may extend beyond language narrowly construed. Doerig and colleagues (2025) showed that LLM representations derived from descriptions of natural scenes can explain high-level visually evoked brain activity, with controlled analyses indicating that the advantage depends on integration of complex contextual information rather than isolated words alone.

This should not be interpreted as evidence that visual cortex secretly represents scenes in English. A more interesting interpretation is that language models may learn a relational coordinate system that approximates some of the conceptual structure useful to the brain.

The modernized Saussurean claim is therefore not that meaning is "just language." It is that:

> **Meaning may be deeply relational, and relational structure can be expressed as geometry.**

---

## 5. Representation and computation do not stay separate

At this point, the algorithm/data-structure analogy starts to break down in a productive way.

In a conventional program, we can cleanly imagine an algorithm acting on a data structure. In a deep network, the separation is less stable.

At layer `l`, the system contains a representation `h(l)`. A learned transformation maps it to a new representation:

`h(l) → fθ(h(l)) → h(l+1)`

The output representation is the input state for the next computation.

Computation therefore creates representation, while representation determines the state over which the next computation operates:

`representation ↔ computation`

This may be one of the most useful lessons machine learning contributes to cognitive theory. The structure on which an algorithm operates is not necessarily fixed in advance. A learned system can construct the representational space that makes its own later computations possible.

Language models provide a particularly striking demonstration. They are not explicitly programmed with a traditional symbolic grammar, yet prediction-trained models develop internal states that encode substantial lexical, syntactic, semantic, and contextual structure.

Some of these learned states predict human neural responses.

Goldstein and colleagues (2022), using intracranial recordings during natural speech, reported correspondences between autoregressive language models and human neural processing in contextual word representations, pre-word prediction, and post-word surprise. Caucheteux and King (2022), using fMRI and MEG, found that a model's ability to predict words from context was strongly associated with its ability to predict human brain responses.

More recent work asks not only whether model representations align with neural data, but whether representational transformations across depth show comparable organization. Mischler and colleagues (2024) reported that higher-performing LLMs showed stronger brain predictivity and more similar hierarchical feature-extraction trajectories. Gao and colleagues (2025) found, in naturalistic reading datasets, that increasing model scale was associated with stronger alignment to human behavioral and neural measures than instruction tuning alone.

None of these results establishes mechanistic identity between transformers and cortex.

A model can predict a neural response for the wrong reason. Different algorithms can generate similar representational geometries. Encoding accuracy is therefore a constraint on theory, not proof of shared implementation.

But LLMs have changed what kinds of theories are experimentally available. We can now compare complete computational systems to brain data and ask which properties—architecture, objective, context, scale, training data, or intermediate representations—improve explanatory power.

Instead of debating only whether the brain is "symbolic" or "statistical," we can study how particular computations generate particular geometries, and how both compare with biology.

---

## 6. Language is not the same thing as thought

The success of language models creates a temptation to collapse language, meaning, and thought into a single system. Human neuroscience gives us good reasons not to do so.

One of the strongest findings in the modern neurobiology of language is the dissociation between the core language network and several forms of nonlinguistic cognition. People with severe aphasia can retain substantial capacities for reasoning, while demanding tasks in mathematics, executive control, or social inference need not strongly recruit language-selective cortex.

Fedorenko, Piantadosi, and Gibson (2024) synthesize this evidence into a provocative thesis: in modern humans, language is primarily a tool for communication rather than the machinery of thought itself.

Whether one accepts that conclusion in its strongest form, the dissociation matters. It suggests that we should distinguish at least two questions:

1. What system constructs and manipulates thoughts?
2. What system maps those thoughts into communicable linguistic form?

A parallel distinction is useful for thinking about LLMs. Mahowald and colleagues (2024) distinguish **formal linguistic competence**—mastery of linguistic patterns and structure—from **functional linguistic competence**, which requires using language together with world knowledge, reasoning, goals, and social context.

This reframes the familiar question "Does an LLM understand language?"

The answer need not be binary. We can ask instead:

- What representational structures has the model acquired?
- What computations can it perform over them?
- What parts of those representations are grounded in perception or action?
- Can it infer communicative intentions?
- Can it maintain persistent goals and social commitments?
- What additional systems are required when language becomes action?

Those are different scientific questions, and treating them separately makes the comparison between brains and models more precise.

---

## 7. From communication to coordination

Language does more than transfer an internal representation from one brain to another.

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

Once linguistic structures are transmitted across many people and generations, another level appears. Kirby, Cornish, and Smith (2008) showed experimentally that artificial languages passed through chains of learners can become progressively more structured and learnable. Some properties of a language can therefore arise through **cultural transmission**, not only from the inductive biases of one learner considered in isolation.

The causal arrow becomes circular:

`brains shape language`

and

`languages adapt to brains`

Communication becomes coordination. Coordination becomes culture. Culture becomes the learning environment of the next generation.

---

## 8. Culture is part of the computational loop

This feedback loop makes the boundary of the language system difficult to draw.

Consider reading. Writing is far too recent a cultural invention for natural selection to have produced a dedicated reading organ. Yet literacy produces reproducible functional organization in the brain. Dehaene and Cohen's neuronal recycling hypothesis proposes that cultural inventions occupy and reshape evolutionarily older neural circuits whose pre-existing properties make them suitable for new functions.

Culture is therefore not merely output from a fixed biological brain.

Cultural structures alter developmental input and change how neural machinery is recruited:

`brain → culture`

and

`culture → brain`

The same intuition appears in a more philosophical form in Clark and Chalmers's extended-mind argument. If an external resource is reliably integrated into cognition, why must the relevant cognitive system stop at the skull?

A notebook can participate in memory. A calendar can participate in prospective cognition. A search engine can participate in information retrieval. Language may be the oldest and most consequential example of cognitive infrastructure outside a single brain: it allows representations to persist outside the organism, move between individuals, and accumulate across generations.

Human cognition is therefore embedded in a larger loop:

`brain ↔ language ↔ tools ↔ culture ↔ environment`

This does not require claiming that every external artifact is literally part of the brain. It requires recognizing that the causal system producing intelligent behavior often extends beyond it.

---

## 9. "Model is data, data is infra, infra is model"

There is a strikingly similar intuition in modern machine-learning engineering.

A useful, deliberately provocative maxim is:

> **model is data, data is infrastructure, infrastructure is model.**

Taken literally, this is false. A checkpoint is not a dataset, and a cluster scheduler is not a transformer.

Taken as a systems principle, however, it captures something important.

### Model is data

A trained parameter vector is partly a compressed consequence of the distribution it has encountered.

`parameters = F(architecture, data, objective, optimization, training dynamics)`

Change the data mixture and you change the effective model. Change filtering, curriculum, synthetic-data generation, preference data, or sampling and you change what capabilities emerge.

The architecture is not the whole model. The training distribution has been folded into the parameters.

### Data is infrastructure

At large scale, "the dataset" is not a static file. It is a running system of acquisition, filtering, deduplication, ranking, tokenization, mixing, storage, streaming, retrieval, feedback, and refresh.

The effective data distribution is an infrastructural product.

### Infrastructure is model

Infrastructure also constrains the space of models that can exist economically and reliably. Memory affects context length. Interconnect topology affects parallelism. Serving systems determine whether retrieval, external memory, tool use, mixture-of-experts routing, or long-horizon agents are feasible.

For a deployed AI system, the effective model increasingly looks like:

`parameters + context + retrieval + memory + tools + orchestration + serving system`

The model has become a system.

This is structurally similar to what happens when we move from a narrow view of language to a broader view of cognition.

The brain matters enormously. But so do developmental data, learned representations, cultural history, interlocutors, external symbols, and tools.

The explanatory boundaries remain useful. They should not be mistaken for causal independence.

---

## 10. The full stack

The picture can now be written as a cycle:

```text
WORLD
  ↓
EXPERIENCE / DATA
  ↓
REPRESENTATION
  ↕
COMPUTATION
  ↓
PREDICTION / THOUGHT
  ↓
EXTERNALIZATION / LANGUAGE
  ↓
COMMUNICATION
  ↓
PRAGMATIC INFERENCE
  ↓
COORDINATION
  ↓
CULTURE / SOCIAL ENVIRONMENT
  ↓
NEW EXPERIENCE / DATA
  ↺
```

Different intellectual traditions emphasize different transitions.

**Saussure** helps us think about the relational organization of symbolic representations.

**Chomsky** helps us think about the internal computations that build compositional and hierarchical structure.

**Grice, Austin, and Searle** move from sentence meaning toward inference and action.

**Tomasello** emphasizes shared intentionality and cooperative coordination.

**Cultural-evolution approaches** ask how languages themselves are reshaped through transmission.

**Extended-cognition theories** question whether the relevant system boundary should always be placed at the skull.

Modern neuroscience can increasingly measure several of these levels. Modern AI can increasingly instantiate them.

The corresponding AI stack has a similar organization:

```text
DATA
  ↕
MODEL
  ↕
INFRASTRUCTURE
  ↕
AGENT
  ↕
ENVIRONMENT
```

Neither diagram should be interpreted as a literal one-to-one analogy between brains and artificial networks. The deeper similarity is organizational:

> **the behavior of the whole system cannot be understood by treating its components as independently specified.**

---

## 11. Why LLMs make this question newly interesting

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

This matters when interpreting what emerges from prediction objectives.

The remarkable linguistic and conceptual structure acquired by LLMs does not by itself demonstrate that prediction can reconstruct intelligence from unstructured data. The data is already profoundly structured. It was generated by intelligent agents living in a shared world and filtered through language and culture.

This complicates the classical opposition between innate structure and learning from data.

Data can contain structure.

Architecture determines what regularities can be extracted.

Optimization converts regularities into internal geometry.

Internal geometry changes what computations become accessible.

Outputs alter the environment that produces future data.

We are back to the loop.

---

## 12. What, then, might be uniquely human?

This framework also changes how I would pose the question of whether language is uniquely human.

Communication is not uniquely human.

Representation is not uniquely human.

Complex computation is not uniquely human.

Social coordination is not uniquely human.

The distinctive feature may instead be their integration into a self-reinforcing system:

`rich representation`

`+ compositional computation`

`+ symbolic communication`

`+ shared intentionality`

`+ cumulative culture`

Human language makes private representations public. Public representations support coordination. Coordination creates cultural artifacts. Culture stores structure outside individual brains. That structure becomes developmental data for new brains.

The cycle compounds.

Under this view, human linguistic uniqueness may not reside in a single magical operation. It may lie in the way multiple capacities lock together and create a cultural ratchet.

LLMs complicate the picture because they show that an artificial system can acquire unexpectedly rich formal linguistic competence by learning from the outputs of that ratchet.

But they do not make the distinction disappear. A text-trained model inherits an enormous cultural environment without independently reproducing the evolutionary, developmental, embodied, and interpersonal process that generated it.

That is precisely why LLMs are scientifically interesting.

They allow us to experimentally separate components of a system that, in humans, normally arrive tightly coupled.

---

## 13. From "where is intelligence?" to "what loop produces it?"

There is a methodological lesson here for both neuroscience and AI.

We often ask localization questions:

Where is syntax?

Where is meaning?

Where is memory?

Where is knowledge in a language model?

Which layer contains the concept?

Which brain region performs the computation?

These are useful questions, but they can encourage an overly static picture.

A representation is meaningful partly because of the computations available over it. A computation is useful because of the representational state on which it operates. Those representations are shaped by learning. Learning is shaped by data. Data is shaped by previous agents and environments. Communication changes other agents. Collective action changes the environment.

The more complete scientific question is therefore not simply:

> Where is the representation?

but:

> **What sequence of transformations creates, uses, communicates, and updates it?**

And not simply:

> Where is intelligence located?

but:

> **What closed loop produces intelligent behavior?**

This reframing matters for NeuroAI.

A model that matches a static representational geometry may still implement the wrong transformation. A model that predicts neural responses during passive comprehension may fail during interactive cognition. A system that performs well on linguistic benchmarks may still lack mechanisms required for grounded, persistent coordination.

Conversely, an artificial model need not resemble biological implementation at every level to provide a useful theory of a particular computation.

The goal is not to decide whether brains "are transformers."

It is to identify the levels at which artificial and biological systems converge, the levels at which they diverge, and the constraints that produce each pattern.

---

## Conclusion: the system is the model

Saussure and Chomsky are often presented as representatives of fundamentally different theories of language. From a contemporary computational perspective, I find it more useful to see them as describing different pieces of the same problem.

Saussure asks how symbols acquire value through a relational system.

Chomsky asks how an internal system constructs new structure from finite elements.

Modern neuroscience suggests that both questions matter. Language depends on an identifiable biological network and supports hierarchical processing, but its neural implementation is distributed, contextual, and naturally described in terms of population representations and representational geometry.

Modern language models make the interaction even harder to ignore. Their computations continually reshape representations; their representations are products of training data; their training data is a product of human culture; and their deployed capabilities increasingly depend on context, retrieval, memory, tools, and infrastructure.

At that point, the clean decomposition begins to dissolve:

> **representation is shaped by computation;  
> computation is shaped by representation;  
> both are shaped by data;  
> data is shaped by agents;  
> agents reshape the environment that generates future data.**

This is why the engineering intuition that *model is data, data is infra, infra is model* feels unexpectedly close to an old debate about language.

The deeper principle is not that these categories are literally identical.

It is that **they jointly constitute the system we are trying to explain**.

For artificial intelligence, this suggests:

> **The system is the model.**

For cognitive science, the corresponding claim is:

> **The brain is not the whole cognitive system.**

And perhaps the most useful hypothesis connecting the two is this:

> **Intelligence may not reside in a model, a representation, an algorithm, or a brain alone. It may be a property of the closed loop through which representations, computations, agents, and environments continually construct one another.**

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
