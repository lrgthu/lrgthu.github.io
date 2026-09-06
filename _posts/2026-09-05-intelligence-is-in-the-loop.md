---
title: "Intelligence Is in the Loop"
date: 2026-09-05 15:58:00 -0500
summary: "A Wienerian view of NeuroAI: why the adaptive organism-environment loop is a useful unit of analysis—and why optimization cannot choose its own ends."
tags: [neuroai, cybernetics, control, neuroscience, ai, norbert-wiener]
---

*Norbert Wiener, cybernetics, and a control-theoretic agenda for NeuroAI*

NeuroAI is often described as a two-way exchange. Neuroscience offers principles for building better artificial intelligence; artificial intelligence offers models and tools for understanding brains. That formulation is useful, but it leaves open a more basic question:

> **What exactly is the object that NeuroAI is trying to model?**

Much of modern work begins with a brain and an artificial network exposed to the same stimulus, then asks whether their internal representations align. Encoding models, representational similarity, neural predictivity, and benchmark frameworks such as Brain-Score have made this comparison quantitative and productive (Schrimpf et al., 2018). But they also encourage a particular scientific unit:

`stimulus → brain representation`

versus

`stimulus → model representation`

I take Norbert Wiener to suggest a different choice of unit.

Across *Behavior, Purpose and Teleology* (Rosenblueth, Wiener, & Bigelow, 1943), *Cybernetics: Or Control and Communication in the Animal and the Machine* (Wiener, 1948), and *The Human Use of Human Beings* (Wiener, 1950/1954), the relevant object is not a representation in isolation, and not even the brain considered by itself. It is an organized relation among **purpose, information, prediction, action, feedback, learning, and environment**.

The basic object is a loop:

`environment → sensing → internal state → action → environment`

For an adaptive system, there is a slower loop around it:

`experience → learning → changed controller → changed experience`

And once intelligent machines enter institutions, there is a larger loop still:

`human ↔ machine ↔ institution ↔ society`

This progression provides the organizing argument of this essay. The three Wiener texts can be read as a successive expansion of the system boundary. The 1943 paper **closes the loop around purposive behavior**. *Cybernetics* **generalizes the loop across animals and machines**. *The Human Use of Human Beings* **extends the loop across learning, human institutions, and social consequence**.

Wiener therefore offers NeuroAI less a particular model of intelligence than a different way of choosing the scientific unit.

> **For a Wienerian NeuroAI, a natural unit of analysis is the adaptive organism–environment loop.**

That shift has a concrete consequence. Instead of asking only whether an artificial network resembles a brain internally, we can ask whether biological and artificial systems implement comparable forms of **closed-loop adaptive control under uncertainty**.

It also exposes a limit. A control system can become increasingly effective at pursuing an objective without acquiring any wisdom about whether the objective should have been chosen.

A Wienerian NeuroAI therefore has two claims to keep in view: one computational and one normative. The first concerns how intelligent loops work. The second concerns what—and whom—the loop is for.

---

## I. Purpose: closing the loop

### Behavior before mechanism

The conceptual starting point is not the 1948 book but the 1943 paper *Behavior, Purpose and Teleology*, written by Arturo Rosenblueth, Norbert Wiener, and Julian Bigelow.

The paper begins with a methodological move that remains strikingly useful. Instead of starting from the internal material composition of an object, the authors propose that one can first characterize its behavior: examine outputs and how they depend on inputs from the surroundings.

That abstraction makes an animal and a machine scientifically comparable without claiming that they are materially identical.

A cat and a servomechanism can be built from radically different substrates. Yet both can be described in terms of relations among sensory inputs, internal processes, actions, and consequences. The relevant similarity is not necessarily anatomical. It can be organizational.

For NeuroAI, this immediately separates two questions that are often conflated:

`implementation similarity`

and

`organizational similarity`

A model may differ from a brain in implementation while instantiating a control principle relevant to neural function. Conversely, a model may reproduce a neural representational geometry while reaching that state through a very different causal organization.

This is the first Wienerian lesson:

> **Biological similarity is not the only scientifically meaningful form of similarity.**

### Purpose without final causes

The 1943 paper then tries to naturalize a concept that had long carried metaphysical baggage: **purpose**.

The authors distinguish purposeful from non-purposeful behavior and emphasize a class of purposive behavior governed by feedback. In modern notation, the simplest version looks familiar:

`error = desired state - current state`

`action = function(error)`

The important move is philosophical as much as mathematical. Purpose does not require the future to act as a mysterious final cause on the present. A system can behave as though directed toward an end because present deviations from that end modify present action.

A thermostat is the canonical simple case. It does not need a rich symbolic concept of temperature. Its behavior is nevertheless organized around a target state. Deviation produces correction; correction changes the next measurement.

Animals generalize this organization dramatically. They pursue food, avoid threats, maintain posture, regulate temperature, reach for objects, coordinate with others, and alter strategies when circumstances change.

Purpose, on this view, becomes an empirical property of **closed-loop organization**.

This already changes how we should think about intelligent behavior. A feedforward mapping

`input → output`

can produce an impressive response, but purposive organization requires us to ask what happens after the output enters the world.

Does the action reduce the relevant error? Does the next observation alter the next action? Does the system remain organized around a goal despite disturbance?

The loop, not the isolated response, is the explanatory object.

### Prediction matters because control extends into the future

Rosenblueth, Wiener, and Bigelow go further by distinguishing non-predictive from predictive forms of purposeful behavior.

A system that reacts only to the current position of a moving target will often fail. Effective control may require estimating where the target will be when an action takes effect.

This converts prediction from a passive forecasting problem into a component of action.

A predictive model in the usual machine-learning sense can be written as:

`past data → prediction of future data`

A predictive controller instead operates inside a loop:

`estimate future state → choose action → change future state → observe consequence`

The prediction participates in producing the data against which it will later be evaluated.

That distinction is fundamental for biological intelligence. An animal does not merely predict a sensory stream supplied independently by the world. It acts in ways that change the sensory stream. Eye movements determine what reaches the fovea. Locomotion changes visual and proprioceptive input. Reaching changes the scene and the body's internal state. Social actions alter the behavior of other agents.

The future data distribution is therefore partly endogenous to the policy.

This is why embodiment is not a cosmetic extension of intelligence. It changes the statistical problem itself.

### Failure can belong to the loop

The same paper also contains a revealing discussion of pathological feedback. Rosenblueth, Wiener, and Bigelow use intention tremor to illustrate how a system can become unstable when correction is badly tuned.

A feedback process can overshoot:

`positive error → overcorrection → negative error → overcorrection → ...`

With excessive gain, delay, or other dynamical mismatch, correction itself produces new error.

This remains a powerful neuroscience intuition. What looks like a broken function in one component can sometimes be better understood as instability in a coupled process.

The explanatory contrast is:

`brain area → function`

versus

`brain area → role in a distributed feedback process`

The latter becomes especially important in sensorimotor systems, recurrent circuits, neuromodulation, closed-loop stimulation, and disorders in which timing and gain may matter as much as representational content.

The broader point is simple: once behavior is closed into a loop, success and failure become properties of dynamics, not only properties of parts.

---

## II. *Cybernetics*: the common science is organization, not substrate

Wiener's 1948 *Cybernetics* turns the logic of the 1943 paper into a general research program. Its subtitle—*Control and Communication in the Animal and the Machine*—states the level of abstraction directly.

The common language is not neurons.

It is not digital computation.

It is **control and communication**.

A system that regulates its behavior needs information about the world and about the consequences of its own actions. Communication is therefore inseparable from control. Noise matters because corrupted information produces bad regulation. Delay matters because feedback about an old state may arrive too late. Prediction matters because action often must compensate for future rather than present conditions. Stability matters because feedback can amplify deviation instead of suppressing it.

A minimal architecture is:

`world → measurement → controller → action → world`

with the return path:

`world → new measurement → updated action`

This is why Wiener's cybernetics cannot be reduced to the slogan that the brain is a computer. The more interesting claim is that **animals and machines can sometimes be described at the same organizational level**.

Their components may be completely different while their behavior depends on related principles of information transmission, prediction, feedback, and regulation.

For NeuroAI, that gives us a useful hierarchy of comparison. We can ask whether two systems:

1. represent similar variables;
2. transform those variables through similar computations or dynamics; and
3. use those states in similar ways inside closed-loop behavior.

The third question is the most characteristically Wienerian.

### From representation to control-relevant state

Modern neuroscience is extraordinarily good at measuring representational similarity. Encoding models, representational similarity analysis, neural predictivity benchmarks, and deep-network comparisons reveal which artificial feature spaces explain variance in neural activity.

These are important constraints on theory. But a control perspective changes what a representation is *for*.

An organism does not need a complete photographic reconstruction of the world. It needs internal states sufficient to select effective actions under uncertainty.

The relevant mapping is not only:

`world → representation`

but:

`world → internal state → action → future world`

A stronger notion of representation therefore follows:

> **A useful representation preserves the information required for successful control.**

Later control theory provides vocabulary that Wiener himself did not use in this form. **Observability** asks whether hidden system states can be inferred from available measurements. **Controllability** asks whether actions can move the system through the relevant state space.

Translated into cognitive terms, perception can be viewed as making behaviorally relevant latent variables observable. Retinal input does not directly provide three-dimensional pose, hidden causes, future trajectories, or another agent's intention. The nervous system estimates variables that allow action despite partial observability.

Action, conversely, depends on which parts of the world can be changed. A chair is not only a visual object; relative to a body it may be sittable, movable, reachable, or obstructing. This is close to the logic of affordances.

Cisek's affordance competition hypothesis makes that connection explicit in neurophysiological terms. Instead of a strict serial pipeline from perception to decision to action, sensory information can continuously specify multiple potential actions that compete for selection (Cisek, 2007).

The brain, in this picture, is not merely describing an environment. It is organizing possible interactions with it.

### Internal models: prediction in the service of regulation

Later sensorimotor neuroscience develops another strongly cybernetic theme: internal models.

Wolpert, Ghahramani, and Jordan (1995) provided evidence that the nervous system uses internal models of sensorimotor dynamics. Forward models can predict sensory consequences of actions; inverse models can help determine actions required to reach desired states.

The logic is:

`current state + candidate action → predicted next state`

Prediction supports state estimation and control when feedback is delayed or noisy.

Optimal feedback control makes the same principle sharper. Todorov and Jordan (2002) argued that biological movement need not be understood as execution of a rigid desired trajectory. A controller can selectively correct deviations that matter for the task while tolerating variability along irrelevant dimensions.

The objective is not:

`reproduce the same movement exactly`

but:

`preserve task success under noise and redundancy`

This changes what counts as a good representation. The controller must preserve the variables that matter to the goal, not every degree of freedom equally.

Conant and Ashby's later "good regulator theorem" formalized a related cybernetic intuition. Under the theorem's assumptions, a regulator that is maximally successful and simple must stand in a model-like relation to the system it regulates (Conant & Ashby, 1970).

That result should be interpreted carefully. It does **not** imply that every effective controller contains an explicit predictive world model, nor that the theorem by itself establishes the kind of forward model studied in sensorimotor neuroscience. Its narrower contribution is to connect successful regulation with internal organization that reflects structure in the regulated system.

Predictive internal models are one powerful realization of that broader principle. In flexible sensorimotor control, they can support state estimation, compensate for delays, and evaluate the consequences of candidate actions.

The useful claim is therefore not that every controller must reconstruct the world. It is that **adaptive control benefits from internal structure that captures the action-relevant regularities of what is being controlled**.

### Predictive coding and active inference: descendants, not synonyms

Predictive coding and active inference are often described in language that sounds immediately cybernetic, but the historical distinction matters.

Rao and Ballard's predictive coding model proposes that higher levels predict lower-level neural activity while feedforward pathways carry residual prediction errors (Rao & Ballard, 1999). Friston's free-energy principle and active inference go much further: perception updates beliefs to account for sensory observations, while action changes observations through intervention in the world (Friston, 2010; Friston et al., 2016).

A useful schematic is:

`perception: change the model to better fit sensory evidence`

`action: change sensory evidence through intervention in the world`

The family resemblance to cybernetics is obvious. Both center adaptive systems, prediction, feedback, and regulation.

But active inference is not Wiener's theory rewritten in Bayesian notation. Its commitments about generative models, variational inference, expected free energy, and priors are later and more specific.

The historically defensible claim is narrower and more useful:

> **Wiener supplied a general problem structure—adaptive regulation through information and feedback—that later predictive and inference-based theories instantiate in more specialized mathematical forms.**

This distinction prevents cybernetics from becoming a retrospective label for every recurrent theory of the brain.

---

## III. Learning: the loop changes itself

The move from *Cybernetics* to *The Human Use of Human Beings* expands the loop across time.

In the chapter "Rigidity and Learning," Wiener distinguishes simple feedback from systems in which feedback can alter the more general pattern by which future performance is generated. The important distinction is between a controller that corrects the current error and a controller that changes how future errors will be corrected.

That suggests two nested timescales.

The fast loop regulates behavior:

`state_t → action_t → state_(t+1)`

The slow loop changes the regulator:

`parameters_t → experience → parameters_(t+1)`

The first changes what the system does now.

The second changes how the system will act later.

In that sense, **learning is feedback acting on the organization of the controller itself**.

Biological systems intertwine these timescales. Synaptic plasticity, neuromodulation, memory, structural change, and development reshape the dynamics that produce future action. A theory that matches the adult endpoint may therefore miss the mechanism by which the endpoint was acquired.

Recent NeuroAI work has begun to make that distinction explicit. Ayzenberg, Bonner, and Bayet (2026), for example, argue for **developmental alignment**: models of human intelligence should incorporate developmental changes in architecture, experience, and learning objectives rather than approximating only adult performance.

From a cybernetic perspective, this is natural. An intelligent system is not merely a controller.

It is a controller that **becomes a different controller through interaction**.

### The environment is part of the learning algorithm

Once learning and action occupy the same loop, a consequence follows that is easy to miss in dataset-centered machine learning:

> **The agent partly chooses the data from which it learns.**

A passive learner receives:

`dataset D → model θ`

A behaving agent creates a trajectory:

`policy π → visited states → observations → learning → new policy π'`

The policy changes the future data distribution.

Exploration, attention, eye movements, curiosity, play, and experimental action are therefore not merely outputs produced after learning. They can be mechanisms that determine what will be learned.

The animal is simultaneously controller and experimenter.

This logic also describes modern interactive AI. Recommender systems alter the behavior that later becomes training data. Agents choose tool calls that determine what information they subsequently receive. Robots position sensors to reduce uncertainty. Human responses to model outputs can become later context or training signal.

The general loop is:

`model → policy → data → model`

Data is no longer external infrastructure surrounding the model. In a closed-loop system, **data generation becomes part of the model's effective dynamics**.

### Viability before benchmark performance

*The Human Use of Human Beings* places cybernetics inside a broader discussion of life, organization, information, and entropy. Organisms persist by maintaining structured states despite disturbance and noise. Wiener's compact phrase—"To live effectively is to live with adequate information"—captures the regulatory role of communication.

A living system cannot occupy arbitrary states. It must remain within a restricted set compatible with continued existence.

In modern notation, one might write:

`state_t ∈ viable region`

That notation is ours, not Wiener's. Wiener did not formulate biological regulation in the later language of a "viability region." The underlying problem has a longer genealogy: Cannon's theory of homeostasis emphasized the maintenance of physiological variables within workable ranges, and Ashby's *Design for a Brain* later developed adaptation explicitly in terms of stability and essential variables (Cannon, 1932; Ashby, 1952).

Wiener's contribution is to place such regulation inside a more general language of information, feedback, organization, and entropy.

Temperature, energy balance, hydration, tissue integrity, posture, oxygenation, and many other variables must remain within workable ranges. Before an organism solves an abstract reasoning problem, it must remain an organism.

This gives biological purpose a grounding absent from many externally specified reward functions. The most primitive control objectives are tied to continued organization of the agent itself.

Homeostasis is therefore not a minor physiological special case. It is a prototype of biological regulation. Later work on allostasis and active inference develops more explicitly anticipatory versions of the same general problem: use prediction and action to keep future states within acceptable ranges.

The cybernetic question is therefore more basic than classification accuracy:

> **How does an adaptive system preserve its organization while acting in an uncertain world?**

That question joins control, learning, development, embodiment, and biological constraint in a single loop.

---

## IV. NeuroAI: benchmark the loop, not only the layer

Modern NeuroAI contains several ambitions. One is **neuroscience-inspired AI**: use principles of biological intelligence to improve artificial systems (Hassabis et al., 2017). Another is **AI as a model of the brain**: train artificial networks on behaviorally relevant tasks and test whether their internal states predict neural and behavioral data. A third is **AI for neuroscience**: use machine learning to analyze, model, and intervene on increasingly large neural datasets. Recent field-level discussions emphasize this broader bidirectional exchange (Sadeh & Clopath, 2025).

All three are useful.

And the field is already moving beyond purely representational comparison. Feather, Khosla, Murty, and Nayebi (2025) propose a **NeuroAI Turing Test** that requires both behavioral and representational equivalence: a model should not only behave like a biological system but also produce internal representations that are empirically indistinguishable from those of biological subjects up to measured individual variability.

That is an important step. It makes explicit that behavior alone underdetermines mechanism, while neural similarity without behavioral adequacy is also insufficient.

A Wienerian perspective suggests a further extension.

Suppose two systems show similar behavior and highly similar hidden-state geometry. We can still ask whether those states occupy comparable **causal roles inside a loop**.

Do they support similar predictions?

Do they guide similar actions?

Do they update under similar errors?

Do they remain stable under delay and noise?

Do perturbations produce comparable compensatory responses?

Do they learn from the consequences of their own behavior?

Would the similarity persist if both systems were placed inside the same interactive environment?

The resulting target is not merely behavioral or representational equivalence, but something closer to **closed-loop functional equivalence**.

This direction is increasingly concrete. Zador and colleagues (2023) propose an **embodied Turing test** in which artificial animal models interact with the sensorimotor world at the level of their biological counterparts. D'Angelo and colleagues (2026) go further in an embodied neuromorphic setting, proposing a benchmarking framework in which a physical controller, body, and dynamic environment are evaluated together. The system under test is explicitly larger than the neural model alone.

Krakauer and colleagues (2017), from a different direction, argue that detailed analysis of behavior is indispensable for understanding neural mechanism. A cybernetic framework strengthens that point: behavior is not merely an output variable to be explained after neural computation. It is part of the causal process that produces the next input.

### A Wienerian benchmark

A conventional brain-model benchmark might look like:

`stimulus → brain activity`

`stimulus → model activity`

followed by:

`similarity(brain, model)`

A NeuroAI Turing Test adds behavior and asks whether both external performance and internal representation converge.

A cybernetic benchmark adds the missing arrows:

`environment → sensing → internal state → action → new environment`

and compares biological and artificial systems along several dimensions:

- **State estimation:** can the system infer hidden variables needed for behavior from noisy, partial observations?
- **Prediction:** can it anticipate sensory and environmental consequences of candidate actions?
- **Feedback correction:** when the world deviates from expectation, does it correct the dimensions that matter for the task?
- **Stability and robustness:** what happens under delay, noise, perturbation, missing sensory channels, or altered body dynamics?
- **Active sensing:** does the system choose observations that reduce uncertainty relevant to action?
- **Learning and development:** does interaction change the controller, and does competence emerge through a biologically informative trajectory?
- **Representation:** do internal states resemble neural populations—and are those states used in comparable ways?

This does not replace neural predictivity or behavioral comparison. It changes their role.

They become constraints inside a larger causal theory.

The progression can be summarized as:

`behavior`

`+ representation`

`+ dynamics`

`+ perturbation response`

`+ control`

`+ adaptation`

The point is not that every neuroscience experiment must become robotics, or that every representation study is invalid without overt behavior. It is that the larger theory should specify **where a representation sits in the loop**.

A neural variable becomes more mechanistically interpretable when we can say not only what predicts it, but what it predicts, what perturbs it, what action depends on it, and how feedback changes it.

### LLMs: prediction is not yet the whole loop

Large language models make the contrast especially clear.

The core pretrained objective is approximately:

`context → distribution over next token`

This is an extraordinarily powerful form of prediction. It can produce internal states that encode syntax, semantics, world knowledge, and long-range context.

But next-token prediction by itself does not constitute a self-contained controller of a persistent external environment.

The distinction requires some care. Autoregressive generation already closes a limited loop over the model's own generated context:

`generated token → new context → next generated token`

Dialogue introduces another loop because model outputs affect human responses, which then become future inputs.

The stronger cybernetic transition occurs when outputs causally alter a **persistent external state** that the system can later sense again:

`observe → infer → act → change environment → re-observe consequence → adapt`

The important distinction is therefore not simply "observer versus participant." It is the difference between a predictor trained largely on externally generated data and a controller whose actions systematically shape the future state distribution it will later encounter.

Modern LLM systems increasingly enter exactly such loops through tools, memory, reinforcement learning, code execution, browsers, robots, other agents, and human feedback. Once that happens, however, the relevant scientific object is no longer the language model alone.

It is the coupled system:

`model + memory + tools + policy + environment + feedback`

In cybernetic terms, agentification is therefore not merely the addition of an API. It is a transition from a predictive component toward a control architecture.

That transition changes evaluation. A model may answer a static benchmark question correctly yet fail as an agent because it cannot maintain state, detect error, recover from perturbation, choose informative actions, or alter strategy when conditions change.

The cybernetic question is not only:

> How good is the prediction?

It is:

> **What happens when the prediction is inserted into a loop that can act?**

---

## V. *The Human Use of Human Beings*: who chooses the purpose?

If the argument ended with better closed-loop benchmarks, Wiener would matter mainly as a precursor of control-theoretic AI.

But *The Human Use of Human Beings* changes the scope of the problem again.

Cybernetics can describe how a system pursues an objective. It cannot, by itself, determine which objectives are worth pursuing.

In modern optimization notation:

`π* = argmin J(π)`

Engineering asks how to find `π*`.

Wiener's social question is prior:

> **Whose J?**

Who specifies the objective?

Whose error signal counts?

Which variables are regulated?

Which deviations are treated as failures?

Who gets to modify the controller?

Who bears the consequences when optimization succeeds?

This is why *The Human Use of Human Beings* belongs in the same intellectual arc as *Cybernetics*, rather than being treated as a popular ethical appendix. The same machinery that makes adaptive control possible also makes it possible to build organizations in which human beings are treated primarily as controllable components.

Wiener's warning is memorable because it is not limited to metal machines. He worries about institutions that reduce people to interchangeable elements inside an optimizing organization.

The danger is therefore not only:

`machine replaces human`

It is also:

`human becomes a component inside a machine-like objective`

That distinction is highly relevant to contemporary AI. An optimization system can be technically successful while narrowing human agency. A recommender can increase engagement while changing the preferences it later claims merely to predict. A workplace system can improve throughput while reducing workers to measurable variables. An autonomous agent can satisfy a proxy objective while violating the intention that motivated it.

The cybernetic success condition and the human success condition are not automatically the same.

### From optimization to specification

It would be anachronistic to call Wiener an AI alignment researcher in the modern technical sense. Contemporary alignment has its own history, vocabulary, and formal problems.

But the structural resemblance is real.

A learning machine can produce decisions that its designers did not expect or would not endorse. More importantly, delegating a decision to a mechanism does not remove responsibility from the people who selected the objective, designed the organization, or authorized the delegation.

In contemporary language, this yields a familiar distinction:

`optimization ≠ specification`

Improving the optimizer does not solve the problem of choosing what should be optimized.

Nor does improving prediction solve the problem of deciding which predictions should guide action.

For NeuroAI, the point is especially important because biological intelligence is inseparable from drives, needs, development, social structure, and value. If we model only the mechanisms that efficiently transform goals into actions, we have modeled one half of agency.

The other half concerns where goals come from, how they change, and how multiple agents negotiate them.

A genuinely Wienerian NeuroAI therefore cannot stop with the question **how does control work?** It eventually encounters three others:

`control of what?`

`for whom?`

`by whom?`

### Society is also a feedback loop

The move from *Cybernetics* to *The Human Use of Human Beings* can be understood as another expansion of the system boundary.

The first loop is:

`agent ↔ environment`

The second is:

`learning agent ↔ changing environment`

The third is:

`human ↔ machine ↔ institution ↔ society`

Outputs become new inputs at every level.

A deployed AI system is therefore rarely an isolated predictor. Machine behavior changes human behavior; human behavior changes the data, incentives, and institutions that shape later machine behavior.

Recommendation is an obvious example:

`ranking → attention → behavior → logged data → training → ranking`

The model is not merely estimating a fixed distribution of preferences. It participates in the process that produces the future distribution it will observe.

The same logic applies to markets, organizational decision systems, education, public discourse, and human-agent collaboration. Once this feedback exists, static evaluation becomes incomplete. We need to ask about equilibria, amplification, adaptation, path dependence, and unintended control.

Cybernetics is useful here precisely because it refuses to treat prediction as causally neutral.

An output sent into the world becomes part of the next input.

### Three principles that follow

Putting the three Wiener texts together leaves three principles for NeuroAI.

First, **the natural unit of intelligence is often the closed loop**. Brains evolved inside bodies acting in environments. Perception changes action; action changes perception; learning changes both. `Brain + body + environment` is not merely context around intelligence. It is part of the mechanism through which intelligence is realized.

Second, **brain-likeness should include cybernetic organization**. Behavioral and representational similarity are valuable but still underdetermine mechanism. Two systems can match in outputs and internal geometry while differing in recurrence, prediction, control law, learning rule, perturbation response, and coupling to action. A stronger comparison therefore includes:

`behavior + representation + dynamics + control + adaptation`

Third, **better control does not answer the question of better ends**. No increase in optimization competence can, by itself, tell us which objective deserves optimization. That question belongs to human judgment, social institutions, ethics, and politics.

A science of intelligence that ignores the third principle may build increasingly capable controllers while becoming less clear about what the control is for.

---

## Conclusion: intelligence is in the loop

Wiener's relevance to NeuroAI is often summarized with a single word: **feedback**.

That is correct, but incomplete.

Read together, *Behavior, Purpose and Teleology*, *Cybernetics*, and *The Human Use of Human Beings* describe a progressive expansion of the control loop.

The 1943 paper closes the loop around purposeful behavior. Purpose becomes scientifically tractable through feedback, error correction, and prediction.

*Cybernetics* generalizes the loop across animals and machines. The common scientific language is no longer substrate but organization: communication, control, noise, prediction, and regulation.

*The Human Use of Human Beings* expands the loop across time and society. Feedback changes not only behavior but the controller itself; intelligent systems become embedded in institutions; and technical optimization becomes inseparable from the question of who sets the purpose.

The progression is:

`purpose → control and communication → learning → social consequence`

For NeuroAI, the implication is not that representation should be abandoned. It is that representation should be placed back inside the causal organization that gives it a role.

The field is already moving from static representational matching toward richer combinations of behavior, neural similarity, embodiment, and interaction. A Wienerian perspective suggests the next question:

> **What computational organization allows an embodied agent to estimate, predict, act, learn, and remain adaptive in a changing world?**

That question places brains and machines on genuinely common ground without pretending that they are the same material object.

Seen this way, the broader claim that *the system is the model* acquires a specifically cybernetic meaning. The intelligence we observe may not be attributable to a single parameterized function. It may emerge from the organization of models, memory, bodies, tools, other agents, and environments inside a feedback process.

For biological intelligence, that loop has always been there.

NeuroAI gives us a chance to study it explicitly.

> **Intelligence is not merely a property of a model. It is a property of an organized system that uses information to predict, act, learn, and regulate itself through feedback.**

Wiener's final warning prevents this definition from collapsing into pure engineering:

> **The ability to optimize a purpose is not the wisdom to choose one.**

A Wienerian NeuroAI needs both insights.

It should study how intelligent loops work—and remain explicit about what, and whom, the loop is for.

---

## References

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
