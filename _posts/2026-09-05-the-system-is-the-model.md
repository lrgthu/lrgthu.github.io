---
title: "The System Is the Model"
date: 2026-09-05 15:50:00 -0500
summary: "A research perspective on language, brains, and large language models organized around one question: at what scale does the explanatory loop close?"
tags: [language, neuroscience, cognitive-science, llm, neuroai]
series: adaptive-intelligence
series_order: 1
---

*Language, representation, and cognition from Saussure and Chomsky to large language models*

There is a question I keep coming back to when I think about language, brains, and large language models:

> **At what scale does the explanatory loop close?**

For a word recognized in a fraction of a second, the answer may lie largely inside a neural population or network. For language acquisition, it almost certainly requires a developing brain and a structured environment. For the structure of a language, it may require generations of learners. For an AI agent, the relevant system may include not only a checkpoint but also context, memory, tools, users, and the feedback loop that eventually retrains it.

The boundary is not arbitrary. But neither is it fixed.

The point is not to make the system boundary as large as possible. It is to make it large enough that the causal story no longer depends on what we have left outside.

This question changes how I read an old divide in linguistics.

Saussure treated language as a system of relations: a sign has value partly because of where it sits among other signs, and the linguistic system itself is socially shared. Chomsky moved the problem inward, toward the computations that allow an individual mind to generate and understand an open-ended range of structured expressions.

A deliberately imperfect computer-science analogy is that Saussure gives us something like the **data structure**, while Chomsky gives us something like the **algorithm**.

The analogy is useful mostly because it fails.

In a learned system, computation changes representation, representation constrains subsequent computation, and both are shaped by experience. Language then lets one system alter another. Repeated interaction changes the environment in which future learning occurs.

So instead of asking whether language is fundamentally representation, computation, or communication, I find it more useful to ask what causal boundary is required for the phenomenon we are trying to explain.

That turns Saussure, Chomsky, neuroscience, and LLMs from separate intellectual territories into evidence for the same question.

---

## 1. Two Cuts Through the Same System

Saussure's *Course in General Linguistics* begins from a simple but deep observation: linguistic signs do not acquire their value in isolation.

A word is not meaningful merely because it points to an object. Its role is also defined by contrasts and relations within a larger system. In shorthand, meaning is not exhausted by:

`word → object`

It also depends on:

`word → position within a system of relations`

This is not a claim that modern embeddings implement Saussurean linguistics. Saussure was describing a social and semiotic system, not a neural representational space. But the organizing intuition survives: **linguistic information is relational rather than atomistic**.

There is a second part of Saussure that matters just as much here. *Langue* is not a private object inside one speaker. It is a system that exists across a community. No individual invents English, Mandarin, or French from scratch; each learner encounters a structure already shaped by other learners.

Chomsky changed the explanatory target.

The mystery is not only that words mean things. It is that humans can generate and understand expressions they have never encountered before, and that those expressions have hierarchical structure.

> Alice thinks Bob believes Carol left.

The important feature is not the string of words but the nesting:

`Alice thinks [Bob believes [Carol left]]`

Across different stages of Chomsky's work, the formal machinery changed. What remained stable was the internalist move: language should be explained partly in terms of a generative system inside the individual, not merely as a catalog of observable utterances.

I find it more useful to treat these as **different cuts through the same system** than as rival answers to one question.

Saussure asks how linguistic elements acquire value within a relational and social structure. Chomsky asks what computational machinery inside an individual can construct and manipulate linguistic structure.

The important question is what happens when those two boundaries meet.

---

## 2. What the Brain Adds

Modern neuroscience has preserved the internalist turn more clearly than it has vindicated any particular Chomskyan implementation.

A large body of work identifies a predominantly left-lateralized frontotemporal language network that is strongly interconnected, generalizes across linguistic input and output modalities, is causally important for language, and is functionally distinguishable from several neighboring systems involved in domain-general cognition (Fedorenko, Ivanova, & Regev, 2024).

There is also substantial evidence that linguistic processing is sensitive to structure beyond a flat sequence of words. At the same time, the neural implementation looks less cleanly modular than the simplest symbolic picture might suggest. Precision fMRI work finds syntactic and semantic sensitivity distributed across overlapping portions of the language network (Shain et al., 2024). Spatial overlap does not mean that syntax and semantics are the same computation, but it does make a simple one-region-one-function map hard to sustain.

My reading is therefore not that neuroscience has "proved Chomsky." It is narrower:

> **Chomsky's level of question has survived better than many specific answers to it.**

The representational side of the story is equally interesting.

Computational neuroscience increasingly describes neural states geometrically: information is carried not only by which units are active, but by relations among population patterns. Goldstein and colleagues (2024), using intracranial recordings during natural speech, found that the relational geometry of neural word representations could be aligned with contextual embeddings from deep language models. Contextual embeddings captured that geometry better than static word representations.

This does not mean that cortex implements a transformer, and it certainly does not mean that meaning *is* an embedding space. It suggests something more modest: **semantic and contextual information can be carried by representational geometry**.

That result resonates with Saussure without reducing neuroscience to structural linguistics. The informational role of an element depends partly on the larger representational system in which it is embedded.

There is one further constraint that matters for everything that follows: language is not the whole of thought. The core language network can be dissociated from several forms of nonlinguistic reasoning, and people with severe aphasia can retain substantial cognitive capacities (Fedorenko, Piantadosi, & Gibson, 2024).

That makes the boundary problem sharper. A neural language system can be internally specialized without being a self-contained theory of cognition.

So already, within one brain, the explanatory loop does not close simply by finding "the language area." We need the representations, the transformations over them, and the interfaces to other cognitive systems.

---

## 3. The Loop Expands Beyond One Brain

Language becomes even more interesting once the unit of analysis expands beyond an individual.

Suppose I say:

> We will meet tomorrow at three.

Before the utterance, two people may have no shared plan. After a successful exchange, they do.

The relevant transformation is not only:

`information in A → information in B`

It is also:

`joint state before language → joint state after language`

Language does not merely describe a social world. It helps update one.

This is the territory of pragmatics and shared intentionality. Human communication depends on common ground, joint attention, goals, and models of what other people know or intend (Tomasello, 2008). Natural conversation also produces measurable coupling between speakers and listeners, with stronger coupling associated with better comprehension (Stephens, Silbert, & Hasson, 2010).

This is where Saussure returns in a deeper way.

Chomsky tells us something important about the machinery inside an agent. Saussure reminds us that the linguistic system this machinery learns is partly constituted **between** agents.

And once language is transmitted across generations, the causal loop expands again.

Kirby, Cornish, and Smith (2008) showed that artificial languages passed through chains of learners can become progressively more structured and learnable. Christiansen and Chater (2008) made the broader argument that languages themselves adapt, through cultural evolution, to the learning and processing constraints of human brains.

So the causal arrow runs both ways:

`brains shape language`

and

`language shapes the developmental environment of brains`

But these processes do not run on one clock.

Neural states change over milliseconds. Conversations alter shared states over seconds and minutes. Learning reorganizes an individual over months and years. Cultural transmission changes the environment across generations.

> **What looks like one closed loop is really a set of nested loops operating at different timescales.**

This, to me, is the key shift.

For online comprehension, the relevant system may be mostly neural. For acquisition, it includes a learner and an environment. For the structure of language itself, it may include populations of learners over time.

If there is something uniquely powerful about human language, it may lie less in any one component than in the way structured representation, generative computation, social coordination, and cumulative culture lock together across these timescales.

---

## 4. Why LLMs Make the Boundary Visible

Large language models make this old problem unusually concrete because they let us perturb pieces of the system that are difficult to separate in biology.

We can hold architecture roughly fixed and change the data. We can hold a training setup approximately fixed and scale the model. We can alter objectives, context, post-training, retrieval, memory, or tool access and observe how the effective system changes.

In a learned network, representation and computation are analytically distinct but causally coupled. A layer transforms one representational state into another; the new state determines what computations are available next. Learning changes both together.

This is one reason brain–LLM comparisons are scientifically useful even if brains are not transformers. Some learned language-model representations predict human neural responses during natural language processing (Goldstein et al., 2022), and some of their representational geometries align with neural ones (Goldstein et al., 2024). These correspondences are constraints on theory, not evidence of mechanistic identity.

The more important point is methodological: LLMs turn parts of the language problem into an intervention problem.

They also expose how unstable the boundary of "the model" can become.

The engineering phrase *model is data, data is infra, infra is model* captures this provocatively. Taken literally, it is false. But as a systems intuition it is useful. Training data is folded into parameters. Data quality depends on pipelines and infrastructure. At deployment time, behavior may depend on context, retrieval, memory, tools, and serving systems as much as on the checkpoint alone.

So the effective AI system changes with the question and timescale:

`inference: context → model → action → environment → new context`

`training: data → optimization → parameters → outputs → new data`

`deployment: users → system → behavior → feedback → training → new system`

This is the AI version of the same boundary problem.

And language models add one final twist: much of their training data is itself the accumulated symbolic output of other minds.

`world → human cognition → language → cultural artifacts → text → LLM`

Books, papers, code, conversations, and institutions are not raw observations of the world. They are already products of human representation, reasoning, communication, and coordination.

So when complex structure emerges from next-token prediction, the lesson is not simply that prediction reconstructs intelligence from unstructured data. The data already carries the traces of a cultural cognitive system.

Again, the explanatory loop is larger than the component we first called "the model."

---

## Where Does the Loop Close?

I started from a simple analogy: perhaps Chomsky is the algorithm and Saussure the data structure.

I now think the more useful lesson is about **boundaries**.

Saussure and Chomsky chose different explanatory boundaries. Neuroscience shows why both are necessary but incomplete. Social interaction expands the relevant system beyond one brain. Cultural transmission expands the timescale. LLMs let us manipulate these boundaries artificially and watch the effective system change.

The question that connects all of them is the one I would now put first:

> **At what scale does the explanatory loop close?**

For a word recognized in 200 milliseconds, the answer may lie largely inside a neural population. For language acquisition, it may require a developing brain and its environment. For the structure of a language, it may require generations of learners. For an AI agent, it may include the model, context, tools, users, and the feedback loop that retrains it.

This suggests a broader NeuroAI research perspective:

> **Some intelligent capacities may be better explained by identifying the smallest closed causal loop that reproduces the phenomenon than by locating intelligence in any single component.**

The boundary is not arbitrary.

But neither is it fixed.

**The system is the model—provided we are careful about which system, and at what timescale.**

The other two essays in this series take that boundary question in different directions. [*Intelligence Is in the Loop*](/blog/intelligence-is-in-the-loop/) asks what organization inside the boundary counts as intelligent; [*The User Is Not a Vector*](/blog/the-user-is-not-a-vector/) asks what happens when the adaptive loop contains a recommender and a person.

---

## References

Chomsky, N. (1957). *Syntactic Structures*. Mouton.

Christiansen, M. H., & Chater, N. (2008). Language as shaped by the brain. *Behavioral and Brain Sciences, 31*(5), 489–509.

Fedorenko, E., Ivanova, A. A., & Regev, T. I. (2024). The language network as a natural kind within the broader landscape of the human brain. *Nature Reviews Neuroscience, 25*, 289–312.

Fedorenko, E., Piantadosi, S. T., & Gibson, E. A. F. (2024). Language is primarily a tool for communication rather than thought. *Nature, 630*, 575–586.

Goldstein, A., Zada, Z., Buchnik, E., et al. (2022). Shared computational principles for language processing in humans and deep language models. *Nature Neuroscience, 25*, 369–380.

Goldstein, A., Grinstein-Dabush, A., Schain, M., et al. (2024). Alignment of brain embeddings and artificial contextual embeddings in natural language points to common geometric patterns. *Nature Communications, 15*, 2768.

Kirby, S., Cornish, H., & Smith, K. (2008). Cumulative cultural evolution in the laboratory: An experimental approach to the origins of structure in human language. *Proceedings of the National Academy of Sciences, 105*(31), 10681–10686.

de Saussure, F. (1916/1959). *Course in General Linguistics* (W. Baskin, Trans.). Philosophical Library.

Shain, C., Kean, H., Casto, C., et al. (2024). Distributed sensitivity to syntax and semantics throughout the language network. *Journal of Cognitive Neuroscience, 36*(7), 1427–1471.

Stephens, G. J., Silbert, L. J., & Hasson, U. (2010). Speaker–listener neural coupling underlies successful communication. *Proceedings of the National Academy of Sciences, 107*(32), 14425–14430.

Tomasello, M. (2008). *Origins of Human Communication*. MIT Press.
