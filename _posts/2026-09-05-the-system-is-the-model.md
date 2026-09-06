---
title: "The System Is the Model"
date: 2026-09-05 15:50:00 -0500
summary: "A research perspective on language, brains, and large language models—from Saussure and Chomsky to nested adaptive loops across minds, culture, and AI systems."
tags: [language, neuroscience, cognitive-science, llm, neuroai]
---

*Language, representation, and cognition from Saussure and Chomsky to large language models*

There is an old argument about language that increasingly reminds me of a familiar argument in machine learning.

Saussure treated language as a system of relations: a sign has value partly because of where it sits among other signs. Chomsky moved the problem inward, toward the computations that allow a finite system to generate an open-ended range of structured expressions.

A deliberately imperfect computer-science analogy is that Saussure gives us something like the **data structure**, while Chomsky gives us something like the **algorithm**.

The analogy works only briefly.

In a learned system, computation changes representation, representation constrains subsequent computation, and both are shaped by the data and objective that produced the system. The algorithm and the data structure remain useful concepts; they simply stop looking like independent causes.

I think language becomes easier to think about in much the same way.

Instead of

`representation + computation + communication`

as a stack of independently specified modules, consider a coupled process:

`world → experience → representation ↔ computation → language → other agents → shared environment → new experience`

The interesting question is then not only *where* language—or, eventually, intelligence—resides. It is also **which interactions have to be included before the explanation closes**.

That is where an old debate in linguistics begins to look unexpectedly contemporary.

---

## 1. The Old Divide

### Saussure: meaning is relational

Saussure's *Course in General Linguistics* begins from a simple but deep observation: linguistic signs do not acquire their value in isolation.

A word is not meaningful merely because it points to an object. Its role is also defined by contrasts and relations within a larger system. The sound *tree* is not intrinsically tree-like, and its linguistic value depends partly on how it differs from other possible signs.

In shorthand, meaning is not exhausted by:

`word → object`

It also depends on:

`word → position within a system of relations`

This is not a claim that modern vector embeddings implement Saussurean linguistics. That would be anachronistic. Saussure was writing about a social and semiotic system, not a neural representational space.

But the organizing intuition survives: **meaning is relational rather than atomistic**.

Modern representation learning makes that intuition computationally tangible. A word embedding is useful partly because of where it sits relative to other representations. A contextual model goes further: the representation itself changes with context. *Bank* in *river bank* and *bank loan* is not simply one fixed symbol passed into two downstream rules. The internal state is different.

The modern claim is therefore weaker than "meaning is geometry," but still important:

> **Semantic and contextual information can be carried by representational geometry.**

That is something we can now test in models and brains.

There is another part of Saussure that matters even more for where this essay eventually goes. His *langue* is not a private object inside one speaker. It is a socially shared system that no individual possesses alone.

That point will return later.

### Chomsky: language is generative computation

Chomsky changed the center of gravity.

The mystery is not only that words mean things. It is that humans can generate and understand expressions they have never encountered before.

A finite vocabulary supports an open-ended range of sentences, and those sentences are not just linear sequences. They contain hierarchical structure.

Consider:

> Alice thinks Bob believes Carol left.

This is naturally represented as something like:

`Alice thinks [Bob believes [Carol left]]`

The notation is not the point. The nesting is.

Across different stages of Chomsky's work, the formal machinery changed substantially. What remained remarkably stable was the explanatory target: language should be understood in terms of an **internal generative system**, not merely as a catalog of external utterances.

In the computer-science analogy, Chomsky asks about the operations that construct new structured states.

So Saussure and Chomsky may be less interesting as rival answers to one question than as different cuts through the same phenomenon.

Saussure asks how linguistic elements acquire value within a relational and social structure. Chomsky asks what computational machinery inside an individual can construct and manipulate linguistic structure.

This is close in spirit to Marr's distinction among computational, algorithmic/representational, and implementational levels: a useful explanation at one level need not specify the entire causal system.

That is roughly where modern neuroscience enters the story.

---

## 2. What the Brain Complicates

Modern cognitive neuroscience has vindicated the **internalist turn** more clearly than it has vindicated any particular Chomskyan implementation.

A large body of work identifies a predominantly left-lateralized frontotemporal core language network. It is strongly interconnected, generalizes across linguistic input and output modalities, is causally important for language, and is functionally distinguishable from several neighboring systems involved in domain-general control and other forms of cognition (Fedorenko, Ivanova, & Regev, 2024).

There is also substantial evidence that linguistic processing cannot be reduced to a flat sequence of words. Neural responses during continuous speech track information at multiple linguistic timescales, including words, phrases, and sentences (Ding et al., 2016).

So two broad Chomskyan intuitions have aged well:

1. language is supported by an internal biological system; and
2. linguistic computation is sensitive to structure beyond surface sequence.

But the neural implementation looks less cleanly modular than the simplest symbolic picture might suggest.

Precision fMRI work, for example, finds syntactic and semantic sensitivity distributed across overlapping portions of the language network (Shain et al., 2024). Spatial overlap does not prove that syntax and semantics are the same computation, and it does not rule out specialization at finer spatial or temporal scales. What it challenges is the simplest one-region-one-function mapping.

My reading is therefore not that neuroscience has "proved Chomsky." It is narrower:

> **Chomsky's level of question has survived better than many specific answers to it.**

The brain appears to support a specialized internal language system capable of structured computation. Its implementation is distributed, context-sensitive, and tightly integrated across the network.

### A geometry of linguistic information

The representational side is just as interesting.

Computational neuroscience increasingly describes representations geometrically: stimuli correspond to patterns in high-dimensional population activity, and information is expressed through relations among those patterns.

Goldstein and colleagues (2024) recorded intracranial activity while participants listened to natural speech and constructed neural population representations—"brain embeddings"—for individual words. The relational geometry of those representations aligned with contextual embeddings from deep language models, and contextual embeddings captured the neural geometry better than static word representations.

This does not mean that cortex implements a transformer. Nor does it mean that meaning *is* an embedding space.

What it suggests is that contextual and semantic information in the brain can be characterized partly through relations among distributed neural states.

That is not Saussure implemented in cortex. But it resonates with the older idea that the informational role of an element depends on its position within a larger system.

Recent work extends the comparison beyond language narrowly construed. Doerig and colleagues (2025) found that language-model representations derived from descriptions of natural scenes can explain high-level visually evoked brain activity, suggesting that contextual representations learned from language can approximate some conceptual structure useful for describing the visual system as well.

I would not conclude that visual cortex "speaks language." The more interesting possibility is that different systems can converge on related representational geometries when they need to organize aspects of the same world.

### Language is not the whole of thought

A further result prevents the story from becoming too language-centric.

The core language network can be dissociated from several forms of nonlinguistic cognition. People with severe aphasia can retain substantial reasoning abilities, while demanding tasks in mathematics, executive control, or social inference need not strongly recruit language-selective cortex.

Fedorenko, Piantadosi, and Gibson (2024) take this evidence toward a strong conclusion: in modern humans, language is primarily a tool for communication rather than the machinery of thought itself.

Whether or not one accepts that thesis in full, the dissociation matters. It means we should not casually use linguistic competence as a proxy for cognition in general.

The same caution helps with LLMs. Mahowald and colleagues (2024) distinguish **formal linguistic competence** from **functional linguistic competence**: mastering linguistic structure is not the same as using language together with world knowledge, reasoning, goals, and social context.

So instead of asking whether a language model "understands language," I find it more productive to decompose the question.

What representational structure has it learned? What computations can it perform over that structure? What is grounded in perception or action? What additional machinery is required when language becomes persistent action, commitment, and coordination?

Those questions lead naturally from the brain to learned systems.

---

## 3. When Representation and Computation Co-Adapt

This is where the algorithm/data-structure analogy begins to break down in a useful way.

In a conventional program, we can imagine an algorithm acting on a data structure specified independently. In a learned neural system, the separation is less stable.

At one layer, the network contains a representational state `h(l)`. A learned transformation creates the next state:

`h(l) → fθ(h(l)) → h(l+1)`

The output representation becomes the input to the next computation.

This does **not** imply:

`representation = computation`

The distinction remains analytically useful.

But it does imply something weaker and more consequential:

> **In a learned system, representation and computation need not be independent causal modules.**

Computation constructs new representational states. Those states constrain what computations become easy—or even possible—next. Learning changes both together.

This is where LLMs become unusually useful scientific objects.

Not because they are brains, and not because they settle old debates, but because they make some of the relevant variables manipulable. We can hold architecture roughly fixed and change the data. We can hold a training setup approximately fixed and scale the model. We can alter objectives, context length, post-training, retrieval, memory, or tool access and observe how the effective system changes.

Things that classical theory had to separate conceptually can now be perturbed far more directly than they can in biology.

Some of the resulting representations also predict human neural responses. Goldstein and colleagues (2022) reported correspondences between autoregressive language models and human neural processing in contextual word representations, pre-word prediction, and post-word surprise. Caucheteux and King (2022) found that a model's ability to predict words from context was strongly associated with its ability to predict fMRI and MEG responses. Mischler and colleagues (2024) further reported similarities in hierarchical feature-extraction trajectories between high-performing LLMs and the brain.

None of this establishes mechanistic identity.

A model can predict neural data for the wrong reason. Different algorithms can generate similar representational geometries. Brain predictivity is therefore a constraint on theory, not proof that the brain shares the model's implementation.

Still, the experimental opportunity is new.

Instead of arguing only about whether cognition is "symbolic" or "statistical," we can ask more specific questions:

`experience → learned representation ↔ learned computation`

Which training histories produce which geometries? Which geometries support which computations? Which of those transformations resemble biological systems, and which do not?

This is, to me, one of the most useful ways LLMs change the language debate: they turn parts of it into an intervention problem.

But an individual model still gives us only part of the picture, because language does something that a representation inside one agent cannot do by itself.

It lets one system change another.

---

## 4. Language Does Not Stop at One Brain

Suppose I say:

> We will meet tomorrow at three.

Before the utterance, two people may have no shared plan. After a successful exchange, they do.

The relevant transformation is not merely:

`information in A → information in B`

It is also:

`joint state before language → joint state after language`

Promises, requests, agreements, instructions, contracts, plans, and declarations all have this character. Language does not merely describe a social world. It helps update one.

This is the territory of pragmatics, speech-act theory, and Tomasello's account of shared intentionality. Human communication depends on joint attention, common ground, cooperative goals, and representations of what other people know and intend.

Neuroscience has begun to move in the same direction. Classical language experiments often isolate one participant and present words or sentences. Natural communication is inherently interpersonal. Stephens, Silbert, and Hasson (2010), for example, found speaker-listener neural coupling during natural storytelling, with stronger coupling associated with better comprehension.

The unit of analysis has already expanded from one brain to an interacting pair.

And this is where Saussure returns.

Chomsky tells us something important about the machinery inside an agent. Saussure reminds us that the linguistic system this machinery learns is partly constituted **between** agents. No individual invents English, Mandarin, or French from scratch. Each learner encounters a system already shaped by other learners.

Once language is transmitted across generations, the loop becomes more explicit.

Kirby, Cornish, and Smith (2008) showed experimentally that artificial languages passed through chains of learners can become progressively more structured and learnable. Christiansen and Chater (2008) developed the broader argument that languages themselves adapt, through cultural evolution, to the learning and processing constraints of human brains.

So the causal arrow runs both ways:

`brains shape language`

and

`language shapes the developmental environment of brains`

But this is not one loop running on one clock.

Neural representations update over milliseconds. Conversations reshape shared states over seconds and minutes. Learning reorganizes an individual over months and years. Cultural transmission changes the linguistic environment across generations.

> **What looks like one closed loop is really a set of nested loops operating at different timescales.**

For a word recognized in a fraction of a second, the relevant explanatory boundary may lie largely within a neural population or network. For language acquisition, the relevant system includes a developing learner and a structured environment. For the evolution of linguistic structure, it may include populations of learners and generations of cultural transmission.

The boundary of explanation is therefore not arbitrary, but neither is it fixed.

Extended-cognition arguments become interesting here without being necessary. Clark and Chalmers ask whether a reliably integrated external resource can sometimes count as part of a cognitive process. One need not accept the strongest version of that thesis to recognize a weaker empirical point: external structures can become causally indispensable to intelligent behavior.

A notebook can participate in memory. A calendar can participate in prospective cognition. Language can preserve representations outside individual brains, transmit them between people, and accumulate them across generations.

The brain remains essential.

It is simply not always the whole explanatory system.

---

## 5. The System Is the Model

This is where an apparently unrelated engineering intuition becomes useful.

In modern machine learning one sometimes hears the deliberately provocative maxim:

> **model is data, data is infra, infra is model.**

Taken literally, this is false. A checkpoint is not a dataset. A cluster scheduler is not a transformer.

The analogy I want to draw is also **not** between GPUs and neurons.

It is between two failures of modular decomposition.

In both cases, boundaries that remain useful for engineering or analysis become misleading when they are mistaken for causal independence.

**Model is data, in one limited sense.** A trained parameter vector is partly a compressed consequence of the distribution it encountered:

`parameters = F(architecture, data, objective, optimization, training dynamics)`

Change the data mixture and you change the effective model. Change filtering, curriculum, synthetic-data generation, preference data, or sampling and you change what capabilities emerge. The training distribution has been folded into the parameters; what looks like one component contains the causal history of another.

**Data is infrastructure.** At scale, "the dataset" is not a static file. It is a running system of acquisition, filtering, deduplication, ranking, tokenization, mixing, storage, streaming, retrieval, feedback, and refresh. The effective data distribution is an infrastructural product.

**Infrastructure is part of the effective model.** Infrastructure constrains which systems can exist economically and reliably. Memory affects usable context. Interconnect topology affects parallelism. Serving systems determine whether retrieval, external memory, tool use, or long-horizon agents are practical.

For a deployed AI system, the effective model increasingly looks less like a checkpoint and more like:

`parameters + context + retrieval + memory + tools + orchestration + serving system`

Again, these things are not identical. They simply **jointly determine the behavior of the deployed system**.

And, just as in human cognition, the relevant loop changes with timescale.

At inference time:

`context → model → action/tool → environment → new context`

During training:

`data → optimization → parameters → outputs → new/curated data`

Across deployment:

`users → system → behavior → feedback → training → new system`

The deeper analogy between brains and AI is therefore not:

`brain ≈ transformer`

It is closer to:

`nested adaptive loops ≈ nested adaptive loops`

### Why language models are an unusual case

Language models add one more twist because much of their training signal is not raw sensory experience. It is the accumulated symbolic output of other minds.

A simplified causal chain is:

```text
world
→ human perception and cognition
→ language
→ cultural artifacts
→ text
→ LLM training
```

Books, papers, software, laws, conversations, histories, arguments, and stories are not unstructured observations of the world. They are products of human perception, abstraction, reasoning, communication, and coordination.

An LLM is therefore trained on something like **compressed traces of human cognition and culture**.

This matters when we interpret what emerges from next-token prediction.

The fact that rich linguistic and conceptual structure can emerge from prediction does not show that prediction reconstructs intelligence from raw data. The data is already profoundly structured. It was generated by intelligent agents living in a shared world and filtered through language and culture.

So the old contrast between "innate structure" and "learning from data" becomes less clean than it first appears.

Data can contain structure. Architecture determines which regularities can be extracted. Optimization converts those regularities into internal geometry. Internal geometry changes which computations become available. Model outputs increasingly alter the environment that generates future data.

The pieces recursively shape one another.

### What might be uniquely human?

This framework also changes how I would pose the question of whether language is uniquely human.

Communication is not uniquely human. Representation is not uniquely human. Complex computation is not uniquely human. Social coordination is not uniquely human.

The distinctive feature may instead be their integration:

`rich representation`

`+ compositional computation`

`+ symbolic communication`

`+ shared intentionality`

`+ cumulative culture`

Human language makes private representations public. Public representations support coordination. Coordination produces cultural artifacts. Culture stores structure outside individual brains. That structure becomes developmental data for new brains.

The cycle compounds.

Under this view, human linguistic uniqueness may not lie in a single magical operation. It may lie in the way multiple capacities lock together across timescales and create a cultural ratchet.

LLMs make this especially interesting because they inherit the output of that ratchet without independently reproducing the evolutionary, developmental, embodied, and interpersonal process that generated it.

That is precisely why they are useful scientific objects.

They let us separate components of a system that, in humans, normally arrive tightly coupled.

---

## Where Does the Loop Close?

I started from a simple analogy: perhaps Chomsky is the algorithm and Saussure the data structure.

I no longer think that is quite right.

The more interesting point is that neither side stays fixed. Representations are created and transformed by computation. Computation is learned over representations. Both are shaped by experience. Language allows one agent to change another. Repeated interaction creates social structure. Social structure becomes culture. Culture becomes part of the next learner's data.

And none of these processes runs on the same clock.

So there may be no single privileged boundary of "the language system." The relevant explanatory boundary depends on the phenomenon and the timescale we want to explain.

For a word recognized in a fraction of a second, the answer may lie largely inside a neural population. For language acquisition, it may require a developing brain and its environment. For the structure of a language, it may require generations of learners. For an AI agent, it may include the model, context, memory, tools, users, and the feedback loop that eventually retrains it.

This suggests a broader hypothesis about intelligence, but I would state it as a research program rather than a metaphysical conclusion:

> **Some intelligent capacities may be better explained at the level of coupled agent–environment dynamics than by locating them in any single component.**

That leads to the question I find most useful for NeuroAI:

> **At what scale does the explanatory loop close?**

The boundary is not arbitrary. But neither is it fixed.

**The system is the model—provided we are careful about which system, and at what timescale.**

---

## References

Caucheteux, C., & King, J.-R. (2022). Brains and algorithms partially converge in natural language processing. *Communications Biology, 5*, 134.

Chomsky, N. (1957). *Syntactic Structures*. Mouton.

Christiansen, M. H., & Chater, N. (2008). Language as shaped by the brain. *Behavioral and Brain Sciences, 31*(5), 489–509.

Clark, A., & Chalmers, D. (1998). The extended mind. *Analysis, 58*(1), 7–19.

Ding, N., Melloni, L., Zhang, H., Tian, X., & Poeppel, D. (2016). Cortical tracking of hierarchical linguistic structures in connected speech. *Nature Neuroscience, 19*, 158–164.

Doerig, A., Kietzmann, T. C., Allen, E., et al. (2025). High-level visual representations in the human brain are aligned with large language models. *Nature Machine Intelligence, 7*, 1220–1234.

Fedorenko, E., Ivanova, A. A., & Regev, T. I. (2024). The language network as a natural kind within the broader landscape of the human brain. *Nature Reviews Neuroscience, 25*, 289–312.

Fedorenko, E., Piantadosi, S. T., & Gibson, E. A. F. (2024). Language is primarily a tool for communication rather than thought. *Nature, 630*, 575–586.

Goldstein, A., Zada, Z., Buchnik, E., et al. (2022). Shared computational principles for language processing in humans and deep language models. *Nature Neuroscience, 25*, 369–380.

Goldstein, A., Grinstein-Dabush, A., Schain, M., et al. (2024). Alignment of brain embeddings and artificial contextual embeddings in natural language points to common geometric patterns. *Nature Communications, 15*, 2768.

Kirby, S., Cornish, H., & Smith, K. (2008). Cumulative cultural evolution in the laboratory: An experimental approach to the origins of structure in human language. *Proceedings of the National Academy of Sciences, 105*(31), 10681–10686.

Mahowald, K., Ivanova, A. A., Blank, I. A., Kanwisher, N., Tenenbaum, J. B., & Fedorenko, E. (2024). Dissociating language and thought in large language models: A cognitive perspective. *Trends in Cognitive Sciences, 28*(6), 517–540.

Marr, D. (1982). *Vision: A Computational Investigation into the Human Representation and Processing of Visual Information*. W. H. Freeman.

Mischler, G., Li, Y. A., Bickel, S., Mehta, A. D., & Mesgarani, N. (2024). Contextual feature extraction hierarchies converge in large language models and the brain. *Nature Machine Intelligence, 6*, 1467–1477.

de Saussure, F. (1916/1959). *Course in General Linguistics* (W. Baskin, Trans.). Philosophical Library.

Shain, C., Kean, H., Casto, C., et al. (2024). Distributed sensitivity to syntax and semantics throughout the language network. *Journal of Cognitive Neuroscience, 36*(7), 1427–1471.

Stephens, G. J., Silbert, L. J., & Hasson, U. (2010). Speaker–listener neural coupling underlies successful communication. *Proceedings of the National Academy of Sciences, 107*(32), 14425–14430.

Tomasello, M. (2008). *Origins of Human Communication*. MIT Press.
