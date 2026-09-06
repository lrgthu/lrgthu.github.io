---
title: "Intelligence Is in the Loop"
date: 2026-09-05 15:58:00 -0500
summary: "A research perspective on NeuroAI through Norbert Wiener: from representation to feedback, learning, agency, and the question of who chooses the goal."
tags: [neuroai, cybernetics, control, neuroscience, ai, norbert-wiener]
---

*A research perspective on Norbert Wiener, NeuroAI, and why the unit of intelligence may be larger than the model*

The more I think about NeuroAI, the less satisfied I am with one of its most natural questions:

> **Which artificial model best resembles the brain?**

It is a good question. Neural predictivity, representational similarity, and artificial networks as models of neural systems have made brain–machine comparison quantitative in a way that earlier theories rarely could. Frameworks such as Brain-Score are valuable precisely because they force intuitions about brain-likeness to survive contact with data (Schrimpf et al., 2018).

But I increasingly think the question is incomplete.

Much of the comparison still begins with something like:

`stimulus → brain representation`

versus

`stimulus → model representation`

and asks how similar the two endpoints are.

What keeps bothering me is everything left outside the arrows.

Brains do not normally receive a fixed dataset, produce a representation, and stop. They sit inside bodies. Bodies act. Actions change what is sensed next. Those observations change future actions. Experience changes the system that generated the action in the first place. Other agents respond. Institutions respond. The data-generating process moves because the intelligent system is inside it.

This is where I find Norbert Wiener unexpectedly useful.

Not because Wiener had a theory of modern NeuroAI waiting to be rediscovered, and not because every later idea about prediction, embodiment, or active inference is secretly cybernetics. I use Wiener in a narrower way: as a lens for choosing the **unit of analysis**.

Read together, *Behavior, Purpose and Teleology* (Rosenblueth, Wiener, & Bigelow, 1943), *Cybernetics: Or Control and Communication in the Animal and the Machine* (Wiener, 1948), and *The Human Use of Human Beings* (Wiener, 1950/1954) trace a striking expansion of the system boundary.

The first loop is behavioral:

`environment → sensing → action → environment`

Then the controller itself becomes adaptive:

`experience → learning → changed controller → changed experience`

And eventually the boundary expands again:

`human ↔ machine ↔ institution ↔ society`

That progression has gradually changed how I think about NeuroAI. Wiener offers less a particular model of intelligence than a different way of deciding what the scientific object should be.

> **For a Wienerian NeuroAI, a natural unit of analysis is the adaptive organism–environment loop.**

Once I take that seriously, several things often treated separately—representation, prediction, action, embodiment, learning, robustness, even parts of alignment—start to look like different views of the same dynamical problem.

There is a second lesson that only appears after following the loop far enough outward. A control system may become extraordinarily good at pursuing an objective without becoming any wiser about whether that objective should have been chosen.

So this essay is really about two ideas that I now think belong together:

**intelligence is larger than the model, and optimization is smaller than judgment.**

---

## The first shift: from output to purpose

The place to begin is not *Cybernetics* itself, but the 1943 paper *Behavior, Purpose and Teleology*, written by Arturo Rosenblueth, Norbert Wiener, and Julian Bigelow.

What I find most useful in that paper is methodological. Before explaining what a system is made of internally, the authors propose that we can characterize how its behavior depends on its surroundings. This makes an animal and a machine comparable without pretending they are materially the same.

A cat and a servomechanism can be built from radically different substrates. Yet both can be described in terms of inputs, internal processes, actions, and consequences.

That distinction still matters for NeuroAI. There are at least two kinds of similarity we can ask about:

`implementation similarity`

and

`organizational similarity`

A model may be unlike cortex in its physical implementation while still instantiating a control principle relevant to neural function. Conversely, two systems may produce similar representational geometry while arriving there through very different causal organizations.

This loosens an assumption I think NeuroAI sometimes makes too quickly: that the most interesting notion of brain-likeness must be found inside the model.

### Purpose without a mysterious final cause

The deeper move in the 1943 paper is its treatment of **purpose**.

Purpose had long carried the flavor of a final cause: behavior appears organized by a future state that does not yet exist. Rosenblueth, Wiener, and Bigelow show how to make the problem mechanical without making it trivial.

In modern notation, the simple feedback picture is familiar:

`error = desired state - current state`

`action = function(error)`

The future does not need to reach backward in time. The system needs a current state, some organization around a preferred or target state, and a mechanism by which deviation changes action.

A thermostat is the usual minimal example. The interesting point is not that a thermostat is intelligent. It is that **goal-directedness can be implemented as closed-loop organization**.

Animals make that organization vastly richer. They maintain posture, regulate temperature, pursue food, avoid threats, reach for objects, coordinate with other agents, and switch strategies when the world changes. In each case, the action matters because of what happens next.

This is the first conceptual turn that stays with me:

> **An impressive response is not yet the same thing as purposive organization.**

A feedforward mapping can produce the right answer:

`input → output`

but a purposive system forces us to continue the diagram:

`input → action → consequence → new input → new action`

The output acquires its full meaning only when it is allowed to return through the world.

### Prediction is interesting when it changes action

Rosenblueth, Wiener, and Bigelow also distinguish non-predictive from predictive forms of purposeful behavior. A system that reacts only to where a moving target is now may fail because action takes time. Effective control may require anticipating where the target will be when the action lands.

That sounds almost mundane today, but it cuts across a very modern distinction.

Prediction in machine learning is often written as:

`past data → prediction of future data`

Prediction inside a controller looks more like:

`predict future state → choose action → alter future state → observe consequence`

The prediction is no longer merely evaluated against future data. It helps produce the future data.

This is one place where biological intelligence looks fundamentally different from passive learning. An eye movement changes visual input. Locomotion changes visual, vestibular, and proprioceptive signals. Reaching changes both the scene and the body. A social action changes what another agent does next.

The future training distribution is partly endogenous to the policy.

That is why I have come to see embodiment as more than an engineering add-on. It changes the statistical problem. The learner is no longer just fitting a distribution; it is helping create the distribution it will later have to understand.

### Sometimes the failure is in the loop

The 1943 paper also uses pathological feedback to make a point that still feels fresh. In discussing intention tremor, the authors consider what happens when correction itself becomes unstable.

A feedback process can overshoot:

`positive error → overcorrection → negative error → overcorrection → ...`

With the wrong gain, delay, or dynamical coupling, a mechanism designed to reduce error can generate new error instead.

I like this example because it changes the explanatory instinct. Instead of always asking which module is broken, we can ask whether the coupled process has become unstable.

The contrast is roughly:

`brain area → function`

versus

`brain area → role in a distributed feedback process`

The second description is often more natural for sensorimotor systems, recurrent circuits, neuromodulation, closed-loop stimulation, and disorders in which timing and gain matter as much as representational content.

Once the loop becomes the object, success and failure become properties of dynamics, not only properties of parts.

---

## The second shift: from substrate to organization

Wiener's 1948 *Cybernetics* takes the logic of the earlier paper and turns it into a general research program. The subtitle—*Control and Communication in the Animal and the Machine*—is already the argument.

The common language is not neurons.

It is not digital computation.

It is **control and communication**.

A system that regulates its behavior needs information about the world and about the consequences of its own actions. Noise matters because corrupted information produces poor regulation. Delay matters because feedback about an old state may arrive too late. Prediction matters because action often has to compensate for a future condition rather than the present one. Stability matters because feedback can amplify deviation as easily as suppress it.

The minimal picture is:

`world → measurement → controller → action → world`

followed by:

`world → new measurement → updated action`

This is why I think the familiar slogan "the brain is a computer" is too weak a reading of cybernetics. The more interesting claim is that animals and machines may sometimes be compared at the level of **organization**, even when their components are radically different.

That gives me a useful hierarchy for NeuroAI. When two systems look similar, I want to know at least three things:

1. Do they represent similar variables?
2. Do they transform those variables through similar computations or dynamics?
3. Do those states play similar causal roles inside behavior?

The third question is the one I find most characteristically Wienerian—and the easiest to lose when brain-model comparison stops at representational similarity.

### Representation as a state for doing something

Modern neuroscience has become extraordinarily good at measuring representation. Encoding models, representational similarity analysis, neural predictivity, and deep-network comparisons let us ask which artificial feature spaces explain variance in neural populations.

These are essential constraints. But I no longer think "what is represented?" is always the final question.

A control perspective asks instead:

> **What must be represented for the organism to do what it needs to do next?**

An organism does not require a photographic reconstruction of the world. It requires internal states sufficient for effective action under uncertainty.

So the relevant mapping is not only:

`world → representation`

but:

`world → internal state → action → future world`

This suggests a more functional idea of representation:

> **A useful representation preserves the information that matters for control.**

Later control theory gives us language Wiener did not use in this form. **Observability** asks whether hidden states can be inferred from measurements. **Controllability** asks whether action can move the system through the relevant state space.

I find these concepts productive when translated back into cognition. Perception can be viewed as making behaviorally relevant latent variables observable. Retinal input does not hand us three-dimensional pose, hidden causes, future trajectories, or another agent's intention. The nervous system has to estimate variables that make action possible despite partial observability.

Action, in turn, depends on what can be changed. A chair is not only a visual object; relative to a body it can be sittable, movable, reachable, or obstructing. This is close to the logic of affordances.

Cisek's affordance competition hypothesis is one modern neuroscientific expression of this idea: sensory information need not flow through a clean serial pipeline from perception to decision to action; it can continuously specify multiple possible actions that compete for selection (Cisek, 2007).

The brain, on this reading, is not just building a description of the environment. It is organizing possible relations with it.

### Internal models are useful because consequences matter

Sensorimotor neuroscience gives a more concrete version of the same point. Wolpert, Ghahramani, and Jordan (1995) argued for internal models of sensorimotor dynamics. Forward models can predict sensory consequences of actions; inverse models can help determine actions needed to reach desired states.

The schematic is:

`current state + candidate action → predicted next state`

Prediction becomes useful because feedback is noisy and delayed.

Optimal feedback control makes the idea sharper. Todorov and Jordan (2002) showed how biological movement can be understood not as faithful reproduction of one desired trajectory, but as selective correction of the deviations that matter to the task.

The objective is not:

`reproduce the same movement exactly`

but:

`preserve task success under noise and redundancy`

That changes the kind of representation a controller needs. It does not need to care equally about every degree of freedom. It needs to preserve what matters for the goal.

Conant and Ashby's "good regulator theorem" formalized a related cybernetic intuition: under its assumptions, a maximally successful and simple regulator must stand in a model-like relation to the system it regulates (Conant & Ashby, 1970).

I do not read that theorem as saying that every controller contains an explicit predictive world model. It says something narrower and, to me, more interesting: successful regulation requires internal organization that reflects relevant structure in what is being regulated.

Predictive internal models are one powerful realization of that principle. The broader lesson is not "reconstruct the world." It is:

> **Capture the regularities that matter for acting in it.**

### Predictive coding and active inference are relatives, not synonyms

At this point it is tempting to draw a straight historical line from Wiener to predictive coding or active inference. That would make the story cleaner and less accurate.

Rao and Ballard's predictive coding model proposes that higher levels predict lower-level neural activity while feedforward pathways carry residual errors (Rao & Ballard, 1999). Friston's free-energy principle and active inference go much further: perception updates beliefs to account for sensory observations, while action changes observations through intervention in the world (Friston, 2010; Friston et al., 2016).

The family resemblance to cybernetics is real: prediction, feedback, regulation, adaptation.

But active inference is not Wiener rewritten in Bayesian notation. Its generative models, variational machinery, expected free energy, and account of priors are later and more specific commitments.

The connection I find useful is at the level of the **problem**, not identity of theory:

> **Wiener helps define a problem space in which intelligent systems must regulate themselves through information and feedback; later theories propose different mathematical solutions inside that space.**

Cybernetics becomes more useful, not less, when it is allowed to be an ancestor of questions rather than the secret origin of every answer.

---

## The loop begins to learn

This is the point where cybernetics starts to look like more than a theory of feedback.

In *The Human Use of Human Beings*, Wiener discusses systems in which feedback can alter not only the current response but the more general pattern by which future responses are generated. The controller itself becomes plastic.

That suggests two nested timescales:

`state_t → action_t → state_(t+1)`

and

`parameters_t → experience → parameters_(t+1)`

The first changes what the system does now. The second changes how it will act later.

The simplest formulation is almost enough on its own:

> **Learning is feedback acting on the organization of the controller itself.**

That framing makes development difficult to treat as an afterthought. Synaptic plasticity, neuromodulation, memory, structural change, and development all reshape the system that will produce the next behavior. Matching an adult endpoint is therefore not necessarily the same as explaining how that endpoint arose.

Recent NeuroAI work has started to make this distinction explicit. Ayzenberg, Bonner, and Bayet (2026), for example, argue for **developmental alignment**: a model of human intelligence should capture developmental changes in architecture, experience, and learning objectives, rather than approximate only adult competence.

From a cybernetic perspective, this feels natural. An intelligent system is not merely a controller.

It is a controller that **becomes a different controller through interaction**.

### The environment is part of the learning algorithm

Once action and learning are placed in the same loop, something else follows that dataset-centered machine learning makes unusually easy to forget:

> **The agent partly chooses the data from which it learns.**

A passive learner receives:

`dataset D → model θ`

A behaving agent generates a trajectory:

`policy π → visited states → observations → learning → new policy π'`

The policy changes the future data distribution.

Exploration, eye movements, attention, curiosity, play, and experimental action are therefore not simply behaviors produced after learning. They help determine what will be learned.

The animal is both controller and experimenter.

The same logic appears in contemporary AI. A recommender changes behavior that later becomes training data. An agent chooses tool calls that determine which information it sees next. A robot positions its sensors. Human responses to a model's outputs become future context or training signal.

The loop becomes:

`model → policy → data → model`

At that point, data is no longer just infrastructure around the model. **Data generation is part of the effective dynamics of the system.**

This is one reason I find the phrase *the system is the model* increasingly literal rather than metaphorical.

### Before intelligence can optimize, an organism has to remain an organism

Wiener also places cybernetics inside a broader discussion of life, information, organization, and entropy. Living systems persist by maintaining highly constrained forms of organization despite disturbance and noise.

A living system cannot occupy arbitrary states. In modern language, one might imagine a restricted region of viable states:

`state_t ∈ viable region`

That notation is ours, not Wiener's. The genealogy is broader: Cannon's homeostasis emphasized the maintenance of physiological variables within workable ranges, while Ashby's *Design for a Brain* developed adaptation in relation to stability and essential variables (Cannon, 1932; Ashby, 1952). Wiener helped place these regulatory problems inside a larger language of information, feedback, and organization.

The point matters to me because it puts biological purpose on a different footing from an arbitrary reward function.

Temperature, energy, hydration, tissue integrity, posture, oxygenation—before an organism solves an abstract task, it must remain an organism.

Homeostasis is not the whole of intelligence, but it is a revealing prototype. Later ideas such as allostasis and active inference make regulation more anticipatory: prediction and action can keep future states inside acceptable ranges before large errors appear.

This leads to a question that feels more basic than benchmark performance:

> **How does an adaptive system preserve its organization while acting in an uncertain world?**

Once framed this way, control, learning, embodiment, development, and biological constraint stop looking like separate modules. They become different parts of the same problem.

---

## What this changes for NeuroAI

This is where the historical reading becomes a research perspective.

NeuroAI already has several ambitions: building AI from principles of biological intelligence, using artificial models to explain neural systems, and using AI as a tool for neuroscience (Hassabis et al., 2017; Sadeh & Clopath, 2025). None of that needs to be abandoned.

What changes, for me, is the **target of comparison**.

The field is already moving beyond static representational matching. Feather, Khosla, Murty, and Nayebi (2025) propose a **NeuroAI Turing Test** that combines behavioral and representational equivalence. A candidate model should not merely act similarly to a biological system; its internal representations should also fall within the variability observed across biological subjects.

That is an important move. Behavior alone underdetermines mechanism. Neural similarity without behavioral adequacy is not enough either.

But a Wienerian perspective makes me want to push one step further.

Suppose two systems behave similarly and exhibit highly similar hidden-state geometry. I still want to know whether those states occupy comparable **causal positions inside the loop**.

Do they support similar predictions? Do they guide similar actions? Do comparable perturbations produce comparable corrections? Do they fail in similar ways under delay and noise? Do they actively seek similar information? Does experience modify the controller in comparable ways?

The target becomes something closer to **closed-loop functional equivalence**.

This direction is no longer purely philosophical. Zador and colleagues (2023) proposed an embodied Turing test in which artificial animal models must interact with the sensorimotor world at the level of biological counterparts. D'Angelo and colleagues (2026) push the idea into embodied neuromorphic benchmarking, evaluating controller, body, and dynamic environment together. Krakauer and colleagues (2017), from a different direction, argued that behavior is indispensable for understanding neural mechanism.

I read these efforts as signs of the same shift: the model is gradually being placed back into the world that gives its internal states causal meaning.

### What would I want from a Wienerian benchmark?

A conventional comparison can look like:

`stimulus → brain activity`

`stimulus → model activity`

followed by:

`similarity(brain, model)`

A NeuroAI Turing Test adds behavioral equivalence.

A cybernetic benchmark would keep both, then add the missing arrows:

`environment → sensing → internal state → action → new environment`

The comparison I would want is broader: state estimation under partial observability; prediction of action consequences; feedback correction; robustness to delay, noise, perturbation, missing sensory channels, or altered body dynamics; active sensing; learning and development; and finally representation itself—not just whether the states look alike, but whether they are **used alike**.

In shorthand:

`behavior`

`+ representation`

`+ dynamics`

`+ perturbation response`

`+ control`

`+ adaptation`

This is not an argument that every neuroscience experiment needs a robot attached to it. Nor do representation studies become uninteresting without overt behavior.

The claim is more modest and more demanding:

> **A larger theory should be able to say where a representation sits in the loop.**

A neural state becomes more mechanistically informative when we know not only what predicts it, but what it predicts, what perturbs it, what action depends on it, and how feedback changes it.

### LLMs make the boundary visible

Large language models make this distinction unusually easy to see.

The core pretrained objective is approximately:

`context → distribution over next token`

That objective can produce remarkably rich internal representations. But next-token prediction by itself is not yet a controller of a persistent external environment.

The distinction is not absolute. Autoregressive generation already creates a small loop over the model's own generated context:

`generated token → new context → next token`

Dialogue creates another loop because the model's output changes the human response that becomes its next input.

The stronger transition happens when an output changes a persistent external state that the system can later sense again:

`observe → infer → act → change environment → re-observe consequence → adapt`

So the distinction I care about is not simply observer versus participant. It is between a predictor trained largely on externally generated data and a controller whose actions systematically reshape the future state distribution it will later encounter.

Modern LLM systems increasingly cross that boundary through tools, memory, reinforcement learning, code execution, browsers, robots, other agents, and human feedback.

At that point, however, the scientific object is no longer the language model alone. It is:

`model + memory + tools + policy + environment + feedback`

That is why I think "agentification" is conceptually more important than giving an LLM a few APIs. It is a change in system type: from a predictive component toward a control architecture.

And it changes what failure means. A model can be excellent on a static benchmark and still fail as an agent because it cannot maintain state, detect its own error, recover from perturbation, choose an informative action, or revise a strategy when the world changes.

The question I keep coming back to is not only:

> How good is the prediction?

but:

> **What happens when the prediction is inserted into a loop that can act?**

---

## The loop widens again: *The Human Use of Human Beings*

If the argument ended with better closed-loop benchmarks, Wiener would mainly be an ancestor of a more control-theoretic NeuroAI.

What makes *The Human Use of Human Beings* so important to me is that Wiener refuses to stop there.

Once a system can pursue a purpose effectively, a new question appears: **where did the purpose come from?**

Cybernetics can describe how a system regulates itself around an objective. It cannot, by itself, tell us which objective deserves to organize the system.

In modern optimization notation:

`π* = argmin J(π)`

Engineering asks how to find `π*`.

The question that sits outside the optimization is:

> **Whose J?**

Who chose the objective? Whose error signal counts? Which variables are being regulated? Which deviations count as failure? Who is allowed to modify the controller? Who bears the consequences when the optimization succeeds exactly as specified?

This is where Wiener becomes unexpectedly contemporary.

His concern is not only that machines might replace people. Human beings themselves can be reorganized as components inside an optimizing system. The same logic that makes adaptive machines powerful can also make institutions powerful at treating people as measurable, interchangeable elements.

The danger is not merely:

`machine replaces human`

but also:

`human becomes a component inside a machine-like objective`

That distinction matters for current AI systems. A recommender can improve engagement while changing the preferences it later claims only to predict. A workplace optimizer can increase throughput while narrowing the space of human judgment. An autonomous agent can satisfy a proxy while violating the intention that made the proxy useful in the first place.

The cybernetic success condition and the human success condition are not automatically the same.

### Optimization is not specification

It would be anachronistic to turn Wiener into a modern AI-alignment researcher. The contemporary field has its own history and technical vocabulary.

But the structural resemblance is hard to ignore.

A learning machine may produce decisions its designers did not anticipate or would not endorse. Delegating the decision does not remove responsibility from the people who chose the objective, designed the system, or authorized the delegation.

In contemporary language:

`optimization ≠ specification`

Making the optimizer better does not tell us what should be optimized.

Making the predictor more accurate does not tell us which predictions should guide action.

For NeuroAI, this matters because biological intelligence does not begin with a clean externally supplied objective. Drives, needs, development, social interaction, and value are part of the system that produces behavior.

If we model only the machinery that turns goals into actions, we have explained one half of agency.

The other half is where goals come from, how they change, and how multiple agents negotiate them.

So a genuinely Wienerian NeuroAI eventually has to ask not only **how does control work?**, but:

`control of what?`

`for whom?`

`by whom?`

### Society is not outside the loop

The final expansion of the system boundary is social.

`agent ↔ environment`

becomes

`learning agent ↔ changing environment`

and eventually

`human ↔ machine ↔ institution ↔ society`

Outputs become inputs at every level.

This matters because deployed AI systems are rarely neutral observers. Their predictions alter decisions. Decisions alter behavior. Behavior alters data. Data alters later models.

Recommendation makes the loop obvious:

`ranking → attention → behavior → logged data → training → ranking`

The model is not simply estimating a fixed preference distribution. It participates in producing the future distribution it will later measure.

The same logic appears in markets, organizations, education, public discourse, and human-agent collaboration. Once this feedback exists, static evaluation becomes incomplete. We need to care about equilibria, amplification, adaptation, path dependence, and unintended control.

This is one of the deepest things I take from cybernetics:

> **Prediction stops being causally neutral once it is allowed to act on the world.**

---

## Where this leaves my view of NeuroAI

The worldview I am converging on is not that representation is unimportant, or that every intelligence problem should be rewritten as classical control theory.

It is that **representation is only one slice through an intelligent process**.

A brain state matters because of where it came from, what it makes possible, how it changes under perturbation, what action uses it, what consequence follows, and how that consequence changes the system next time.

That is why I increasingly want brain-likeness to mean more than similarity of internal geometry. The stronger object of comparison is:

`behavior + representation + dynamics + control + adaptation`

And it is why I increasingly think the boundary around the model is often drawn too tightly. For biological intelligence, `brain + body + environment` is not merely context around the computation. It is part of the mechanism by which the computation acquires meaning and consequence.

For artificial intelligence, the same issue is becoming harder to ignore as models gain tools, memory, persistent state, and the ability to intervene in the world.

Seen from this perspective, the phrase *the system is the model* takes on a specifically cybernetic meaning. Intelligence may not be attributable to one parameterized function at all. It may emerge from the organization of models, memory, bodies, tools, other agents, and environments inside a feedback process.

For biological intelligence, that loop has always been there.

NeuroAI gives us an unusually good chance to study it because it can place biological and artificial systems inside the same conceptual frame without requiring them to be made of the same things.

The question I would like the field to ask more often is:

> **What computational organization allows an embodied agent to estimate, predict, act, learn, and remain adaptive in a changing world?**

That is the computational side of the worldview.

The human side is the constraint Wiener adds at the end: no amount of competence at pursuing a purpose can decide whether that purpose deserves to be pursued.

So I am left with two sentences:

> **Intelligence is not merely a property of a model. It is a property of an organized system that uses information to predict, act, learn, and regulate itself through feedback.**

> **The ability to optimize a purpose is not the wisdom to choose one.**

The first changes where I look for intelligence.

The second is why finding it is not the end of the problem.

---

## References and further reading

- Ashby, W. R. (1952). [*Design for a Brain*](https://books.google.com/books/about/Design_for_a_Brain.html?id=TV46AAAAMAAJ). John Wiley.
- Ayzenberg, V., Bonner, M. F., & Bayet, L. (2026). [Advancing NeuroAI through developmental alignment](https://doi.org/10.1016/j.neuron.2026.07.003). *Neuron*.
- Cannon, W. B. (1932). [*The Wisdom of the Body*](https://search.worldcat.org/title/The-wisdom-of-the-body/oclc/609446860). W. W. Norton.
- Cisek, P. (2007). [Cortical mechanisms of action selection: The affordance competition hypothesis](https://doi.org/10.1098/rstb.2007.2054). *Philosophical Transactions of the Royal Society B*, 362, 1585–1599.
- Conant, R. C., & Ashby, W. R. (1970). [Every good regulator of a system must be a model of that system](https://doi.org/10.1080/00207727008920220). *International Journal of Systems Science*, 1, 89–97.
- D'Angelo, G., Pedersen, J. E., Hassan, T., et al. (2026). [A benchmarking framework for embodied neuromorphic agents](https://doi.org/10.1038/s42256-026-01197-w). *Nature Machine Intelligence*, 8, 300–312.
- Feather, J., Khosla, M., Murty, N. A. R., & Nayebi, A. (2025). [Brain-Model Evaluations Need the NeuroAI Turing Test](https://arxiv.org/abs/2502.16238). *arXiv*.
- Friston, K. (2010). [The free-energy principle: A unified brain theory?](https://doi.org/10.1038/nrn2787). *Nature Reviews Neuroscience*, 11, 127–138.
- Friston, K., FitzGerald, T., Rigoli, F., Schwartenbeck, P., O'Doherty, J., & Pezzulo, G. (2016). [Active inference and learning](https://doi.org/10.1016/j.neubiorev.2016.06.022). *Neuroscience & Biobehavioral Reviews*, 68, 862–879.
- Hassabis, D., Kumaran, D., Summerfield, C., & Botvinick, M. (2017). [Neuroscience-inspired artificial intelligence](https://doi.org/10.1016/j.neuron.2017.06.011). *Neuron*, 95, 245–258.
- Krakauer, J. W., Ghazanfar, A. A., Gomez-Marin, A., MacIver, M. A., & Poeppel, D. (2017). [Neuroscience needs behavior: Correcting a reductionist bias](https://doi.org/10.1016/j.neuron.2016.12.041). *Neuron*, 93, 480–490.
- Rao, R. P. N., & Ballard, D. H. (1999). [Predictive coding in the visual cortex: A functional interpretation of some extra-classical receptive-field effects](https://doi.org/10.1038/4580). *Nature Neuroscience*, 2, 79–87.
- Rosenblueth, A., Wiener, N., & Bigelow, J. (1943). [Behavior, purpose and teleology](https://doi.org/10.1086/286788). *Philosophy of Science*, 10, 18–24.
- Sadeh, S., & Clopath, C. (2025). [The emergence of NeuroAI: Bridging neuroscience and artificial intelligence](https://doi.org/10.1038/s41583-025-00954-x). *Nature Reviews Neuroscience*, 26, 583–584.
- Schrimpf, M., Kubilius, J., Hong, H., Majaj, N. J., Rajalingham, R., Issa, E. B., et al. (2018). [Brain-Score: Which artificial neural network for object recognition is most brain-like?](https://doi.org/10.1101/407007). *bioRxiv*.
- Todorov, E., & Jordan, M. I. (2002). [Optimal feedback control as a theory of motor coordination](https://doi.org/10.1038/nn963). *Nature Neuroscience*, 5, 1226–1235.
- Wiener, N. (1948). [*Cybernetics: Or Control and Communication in the Animal and the Machine*](https://mitpress.mit.edu/9780262537841/cybernetics-or-control-and-communication-in-the-animal-and-the-machine/). MIT Press edition.
- Wiener, N. (1950/1954). [*The Human Use of Human Beings: Cybernetics and Society*](https://openlibrary.org/works/OL4307570W/The_Human_Use_of_Human_Beings). Revised edition, 1954.
- Wolpert, D. M., Ghahramani, Z., & Jordan, M. I. (1995). [An internal model for sensorimotor integration](https://doi.org/10.1126/science.7569931). *Science*, 269, 1880–1882.
- Zador, A. M., Escola, S., Richards, B., Ölveczky, B., Bengio, Y., Boahen, K., et al. (2023). [Catalyzing next-generation artificial intelligence through NeuroAI](https://doi.org/10.1038/s41467-023-37180-x). *Nature Communications*, 14, 1597.