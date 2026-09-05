---
title: "Intelligence Is in the Loop"
date: 2026-09-05 15:58:00 -0500
summary: "A Wienerian view of NeuroAI: intelligence as purposive, predictive, adaptive control in a feedback loop—and a warning that optimization cannot choose its own ends."
tags: [neuroai, cybernetics, control, neuroscience, ai, norbert-wiener]
---

*Norbert Wiener, cybernetics, and a control-theoretic agenda for NeuroAI*

NeuroAI is often described as a two-way exchange. Neuroscience offers principles for building better artificial intelligence; artificial intelligence offers models and tools for understanding brains. That formulation is useful, but it leaves open a more basic question:

> **What exactly is the object that NeuroAI is trying to model?**

Much of modern work starts with a brain and an artificial network exposed to the same stimulus, then asks whether their internal representations align. Neural predictivity, representational similarity, and benchmark frameworks such as Brain-Score have made this comparison quantitative and productive (Schrimpf et al., 2018). But the comparison also encourages a particular unit of analysis:

`stimulus → brain representation`

versus

`stimulus → model representation`

Norbert Wiener suggests a different unit.

Across *Behavior, Purpose and Teleology* (Rosenblueth, Wiener, & Bigelow, 1943), *Cybernetics: Or Control and Communication in the Animal and the Machine* (Wiener, 1948), and *The Human Use of Human Beings* (Wiener, 1950/1954), intelligence appears less as a property located inside a model than as a property of an organized relation among **purpose, information, prediction, action, feedback, learning, and environment**.

The basic object is not a representation in isolation. It is a loop:

`environment → sensing → internal state → action → environment`

and, for an adaptive system, a slower loop around it:

`experience → learning → changed controller → changed experience`

This reading matters for NeuroAI because it changes the scientific question. Instead of asking only whether an artificial network resembles a brain internally, we can ask whether biological and artificial systems implement comparable forms of **closed-loop adaptive control under uncertainty**.

It also adds a question that engineering formulations often omit. *The Human Use of Human Beings* asks what happens when control systems enter human institutions. A system can become extremely good at optimizing an objective without acquiring any wisdom about whether that objective should have been chosen.

A Wienerian NeuroAI therefore has two sides:

> **Intelligence is purposive, predictive, adaptive control through information and feedback. But optimization does not determine what purposes ought to be pursued.**

The first claim is computational. The second is normative. Wiener thought they belonged in the same conversation.

---

## 1. Before cybernetics: making purpose scientifically tractable

The conceptual starting point is not the 1948 book but the 1943 paper *Behavior, Purpose and Teleology*, written by Arturo Rosenblueth, Norbert Wiener, and Julian Bigelow.

The paper begins with a methodological move that remains strikingly modern. Instead of starting from the internal material composition of an object, the authors propose a behavioristic description: examine the object's outputs and how those outputs depend on inputs from its surroundings.

That abstraction makes an animal and a machine scientifically comparable without claiming that they are materially identical.

A cat and a servomechanism can be built from radically different substrates. Yet both can be described in terms of relations among sensory inputs, internal processes, actions, and consequences. The relevant similarity is not necessarily anatomical. It can be organizational.

This is the first important lesson for NeuroAI:

> **Biological similarity is not the only scientifically meaningful form of similarity.**

A model can differ from a brain in implementation while instantiating a similar control principle. Conversely, a model can match a neural representation while reaching that representation through a very different causal organization.

The 1943 paper then tries to naturalize a concept that had long carried metaphysical baggage: **purpose**.

The authors distinguish purposeful from non-purposeful behavior and, within purposeful behavior, emphasize forms governed by feedback. A system behaves teleologically when deviations from an end state affect subsequent actions in ways that reduce those deviations.

In modern notation, the simplest version looks familiar:

`error = desired state - current state`

`action = function(error)`

The important point is philosophical as much as mathematical. Purpose no longer has to mean that the future somehow causes the present. It can be implemented through present-time error correction.

A thermostat is the canonical simple example. It does not possess a rich representation of temperature in the human sense. Yet its behavior is organized around a target state. When the measured state departs from that target, the system acts so as to reduce the difference.

Animals generalize this organization dramatically. They pursue food, avoid threats, maintain posture, regulate temperature, reach for objects, coordinate with others, and change strategies as conditions change.

Purpose, in this framework, becomes an empirical question about **closed-loop organization**.

---

## 2. Prediction matters because control extends into the future

Rosenblueth, Wiener, and Bigelow go further. They distinguish non-predictive from predictive forms of purposeful behavior.

A system that reacts only to the current location of a moving target will often fail. Effective control requires estimating where the target will be when the action takes effect.

This converts prediction from a passive forecasting problem into a component of action.

The distinction matters because modern AI often treats prediction as an end in itself:

`past data → prediction of future data`

A cybernetic system instead uses prediction inside a loop:

`estimate future state → choose action → change future state → observe consequence`

The prediction participates in producing the data against which it will later be evaluated.

That is a profound difference.

An animal does not merely predict the sensory stream. It acts in ways that change the sensory stream. Eye movements determine what reaches the fovea. Locomotion changes visual and proprioceptive input. Reaching changes both the external scene and the body's internal state. Social actions change the behavior of other agents.

The data distribution is therefore partly endogenous to the policy.

In a passive dataset, the world generates observations and the model learns from them. In a behaving organism:

`policy → sampled experience → learned model → new policy`

The controller helps generate its own future training data.

This is one reason embodiment is not a cosmetic extension of intelligence. It changes the statistical problem itself.

---

## 3. Failure is often a property of the loop, not a broken module

The 1943 paper also contains a revealing discussion of pathological feedback. The authors use intention tremor as an example of how a system can become unstable when error correction is badly tuned.

A feedback system can overshoot. With excessive gain, delay, or other dynamical mismatch, correction itself generates new error:

`positive error → overcorrection → negative error → overcorrection → ...`

What looks behaviorally like a defective movement can therefore be understood as instability in a loop.

This framing is still powerful for neuroscience. It shifts attention from asking only which component is "damaged" to asking how the dynamics of coupled components fail.

A brain region does not merely contain a variable. It participates in a dynamical organization with sensory organs, body, environment, and other neural populations.

This is a control-theoretic way of resisting a strong localization instinct:

`brain area → function`

may sometimes be less explanatory than

`brain area → role in a distributed feedback process`

The distinction becomes especially important for sensorimotor systems, recurrent networks, neuromodulation, closed-loop stimulation, and disorders in which timing and gain can matter as much as representational content.

---

## 4. *Cybernetics*: the common science is organization, not substrate

Wiener's 1948 *Cybernetics* turns these ideas into a general research program. Its famous subtitle—*Control and Communication in the Animal and the Machine*—contains the central claim.

The common language is not "neurons."

It is not "digital computation."

It is **control and communication**.

For a system to regulate its behavior, it needs information about the state of the world and about the consequences of its own actions. Communication is therefore inseparable from control.

A minimal architecture is:

`world → measurement → controller → action → world`

The return path closes the loop:

`world → new measurement → updated action`

Noise matters because corrupted information produces bad control. Delay matters because feedback about an old state may arrive too late. Prediction matters because action must often compensate for future rather than present conditions. Stability matters because feedback can amplify rather than suppress deviations.

This is why Wiener's cybernetics cannot be reduced to the slogan "the brain is a computer."

The stronger and more interesting claim is that **animals and machines can sometimes be described at the same organizational level**.

Their components may differ completely, while their behavior obeys related principles of information transmission, prediction, feedback, and regulation.

This gives NeuroAI a useful distinction:

`implementation similarity`

is not the same as

`cybernetic similarity`

A transformer layer need not resemble cortex microscopically to implement a computational principle relevant to cortical function. But representational resemblance alone also does not guarantee cybernetic similarity. Two systems can occupy similar representational geometries while differing in how those representations are generated, updated, used for action, or coupled to the world.

A mature comparison should therefore ask at least three questions:

1. Do the systems represent similar variables?
2. Do they transform those variables through similar computations or dynamics?
3. Do those states play similar roles in closed-loop behavior?

The third question is the most characteristically Wienerian.

---

## 5. From representation to control-relevant state

Modern neuroscience has become extraordinarily good at measuring representational similarity. Encoding models, representational similarity analysis, neural predictivity benchmarks, and deep-network comparisons reveal which artificial feature spaces explain variance in neural activity.

These are important constraints on theory.

But a control perspective changes what a representation is *for*.

An organism does not need a complete photographic reconstruction of the world. It needs internal states sufficient to select effective actions under uncertainty.

The relevant mapping is not simply:

`world → representation`

but:

`world → internal state → action → future world`

This suggests a stronger notion of representation:

> **A useful representation preserves the information required for successful control.**

Later control theory supplies vocabulary that Wiener himself did not use in this form. **Observability** asks whether hidden system states can be inferred from available measurements. **Controllability** asks whether actions can move the system through the relevant state space.

These ideas translate naturally into cognitive questions.

Perception can be viewed as the process of making behaviorally relevant latent variables observable. The retinal image does not directly contain object identity, three-dimensional pose, hidden causes, intentions, or future trajectories. The nervous system estimates variables that allow action despite partial observability.

Action, in turn, depends on which aspects of the environment are controllable. A chair is not only an object with visual properties; relative to a body, it may be sittable, movable, reachable, or obstructing. This is close to the logic of affordances.

Paul Cisek's affordance competition hypothesis makes this connection explicit in neurophysiological terms. Rather than treating perception, decision, and action as a strictly serial pipeline, Cisek argues that sensory information continuously specifies multiple potential actions that compete for selection (Cisek, 2007).

That picture is deeply cybernetic:

`perception → complete world model → decision → action`

gives way to

`competing sensorimotor loops continuously coupled to the world`

The brain is not merely describing an environment. It is organizing possible interactions with it.

---

## 6. Internal models: prediction in the service of regulation

A second line of later neuroscience develops another Wienerian theme: internal models.

Wolpert, Ghahramani, and Jordan (1995) provided evidence that the nervous system uses internal models of sensorimotor dynamics. Forward models can predict the sensory consequences of actions; inverse models can help determine actions required to reach desired states.

The logic is straightforward:

`current state + candidate action → predicted next state`

Prediction then supports state estimation and control when sensory feedback is delayed or noisy.

This becomes more explicit in optimal feedback control. Todorov and Jordan (2002) argued that biological movement need not be understood as the execution of a rigid desired trajectory. Instead, the controller can selectively correct deviations that matter for the task while tolerating variability along irrelevant dimensions.

The objective is not:

`reproduce the same movement exactly`

but:

`preserve task success under noise and redundancy`

That is a profound change in what counts as a good internal representation. The controller needs to represent what matters to the goal, not every degree of freedom equally.

Conant and Ashby's later "good regulator theorem" formalized a related cybernetic intuition: under stated conditions, a successful regulator must embody a model of the system it regulates (Conant & Ashby, 1970). This should not be read as a claim that brains contain literal miniature copies of the world. The point is more structural: effective regulation requires internal organization adequate to the regularities of the environment being controlled.

From this perspective, a world model is not valuable because representation is intrinsically desirable.

A world model is valuable because **good control requires prediction of consequences**.

---

## 7. Predictive coding and active inference: descendants, not synonyms

Predictive coding and active inference are often discussed in language that sounds immediately cybernetic, but it is important not to collapse distinct theories into one historical lineage.

Rao and Ballard's predictive coding model of visual cortex proposes that higher levels predict lower-level activity while feedforward pathways carry residual prediction errors (Rao & Ballard, 1999). This turns recurrent cortical processing into a hierarchy of predictions and corrections.

Friston's free-energy principle and active inference extend the logic much further. In this framework, perception updates internal beliefs to better account for sensory observations, while action changes sensory observations so that they become more consistent with expected states (Friston, 2010; Friston et al., 2016).

A useful schematic is:

`perception: change the model to better fit sensory evidence`

`action: change sensory evidence through intervention in the world`

This has an obvious family resemblance to cybernetics. Both center adaptive systems, feedback, prediction, and regulation.

But active inference is not simply Wiener's theory rewritten with Bayesian notation. Its commitments about generative models, variational inference, expected free energy, and the relation between priors and action are later and more specific.

The productive historical claim is therefore weaker:

> **Wiener supplied a general problem structure—adaptive regulation through information and feedback—that later predictive and inference-based theories instantiate in more specialized mathematical forms.**

This distinction matters if cybernetics is to function as more than a retrospective label for every recurrent theory of the brain.

---

## 8. Learning is feedback acting on the controller itself

The transition from *Cybernetics* to *The Human Use of Human Beings* adds another layer.

In the chapter "Rigidity and Learning," Wiener discusses organisms and machines that can alter their patterns of behavior on the basis of experience. He is careful not to claim that an engineered learning machine must reproduce the detailed mechanism of biological learning. The more general question is whether a machine can modify its own future responses in a way that is functionally comparable to learning.

That suggests two nested timescales.

The fast loop regulates the world:

`state_t → action_t → state_(t+1)`

The slow loop regulates the regulator:

`parameters_t → experience → parameters_(t+1)`

The first changes behavior.

The second changes how future behavior will be generated.

This is a useful way to distinguish adaptation from mere response. A fixed controller can correct deviations. A learning controller can change its own correction policy.

In biological systems these levels are intertwined. Synaptic plasticity, neuromodulation, structural change, memory, and development reshape the dynamics that produce future actions.

Recent NeuroAI work has begun to move in exactly this direction. The field increasingly recognizes that matching the adult endpoint may be insufficient if the mechanism of interest is the process by which intelligence is acquired. Ayzenberg, Bonner, and Bayet (2026), for example, argue for **developmental alignment**: models of human intelligence should incorporate developmental changes in architecture, experience, and learning objectives rather than only approximate adult performance.

From a cybernetic perspective, this is natural.

An intelligent system is not merely a controller.

It is a controller that **becomes a different controller through interaction**.

---

## 9. The environment is part of the learning algorithm

Once learning and action are placed in the same loop, a consequence follows that is easy to miss in dataset-centered machine learning.

The agent partly chooses the data from which it learns.

A passive learner receives:

`dataset D → model θ`

A behaving agent creates a path through the world:

`policy π → visited states → observations → learning → new policy π'`

The policy changes the future data distribution.

This makes exploration, attention, eye movements, curiosity, play, and experimental action computationally important. They are not merely behaviors produced *after* learning. They can be mechanisms that determine what will be learned.

The animal is simultaneously controller and experimenter.

This idea also complicates the phrase "the model is trained on the environment." In an embodied system, the model and environment are coupled through a data-collection policy. What the model becomes depends partly on what its previous version chose to observe and do.

That feedback is central to development.

It is also central to modern AI systems that operate online. Recommender systems alter the behavior that later becomes training data. Agents choose tool calls that change the information they subsequently receive. Robots position their sensors to reduce uncertainty. Interactive models shape the human responses that enter later context or training pipelines.

The general loop is:

`model → policy → data → model`

Data is not external infrastructure surrounding the model.

In a closed-loop system, **data generation is part of the model's effective dynamics**.

---

## 10. Homeostasis: intelligence begins with staying within viable states

*The Human Use of Human Beings* places cybernetics inside an even larger thermodynamic picture.

Wiener repeatedly connects life, organization, information, and entropy. Organisms persist by maintaining structured states despite disturbances and noise. His memorable line—"To live effectively is to live with adequate information"—captures the role of communication in this regulation.

The deeper idea is that a living system cannot occupy arbitrary states.

It must remain inside a restricted region compatible with continued existence:

`state_t ∈ viable region`

Temperature, energy balance, hydration, tissue integrity, posture, oxygenation, and countless other variables must remain within workable ranges. Before an organism solves abstract reasoning problems, it must remain an organism.

This suggests a biological grounding for purpose.

The most primitive control objectives are not arbitrary external reward functions. They are tied to the continued organization of the agent.

Homeostasis is therefore not a minor physiological special case. It is a prototype for biological control.

Later work on allostasis and active inference generalizes this idea by emphasizing anticipatory regulation: an organism can act before error becomes large, using predictions to keep future states within acceptable ranges.

A cybernetic view of intelligence consequently begins not with classification accuracy but with a more basic problem:

> **How does an adaptive system preserve its organization while acting in an uncertain world?**

That question naturally joins neuroscience, control theory, reinforcement learning, active inference, embodiment, and development.

---

## 11. NeuroAI today: from brain-like representations to embodied equivalence

Modern NeuroAI has inherited several different ambitions.

One is **neuroscience-inspired AI**: use principles discovered in biological intelligence to improve artificial systems (Hassabis et al., 2017).

Another is **AI as a model of the brain**: train artificial networks on behaviorally relevant tasks and test whether their internal states predict neural and behavioral data.

A third is **AI for neuroscience**: use machine learning to analyze, model, and intervene on increasingly large neural datasets. Recent field-level discussions emphasize this broader bidirectional exchange (Sadeh & Clopath, 2025).

All three are useful.

But Wiener exposes a blind spot that can appear when the model-brain comparison becomes too representation-centric.

Suppose two systems receive the same image and produce highly similar hidden-state geometry. That is evidence of a shared representational constraint. It does not yet tell us whether those states have the same causal role.

Do they support the same predictions?

Do they guide the same actions?

Do they update under the same errors?

Do they remain stable under delay and noise?

Do they learn from the consequences of their own behavior?

Do they reorganize themselves over development?

Would the similarity persist if both systems were placed inside the same interactive environment?

These questions point toward **closed-loop functional equivalence** as a complement to representational similarity.

This direction is already visible in the contemporary field. Zador and colleagues (2023) propose an **embodied Turing test** in which artificial animal models must interact with the sensorimotor world at the level of their biological counterparts. Their argument shifts the benchmark from disembodied tasks toward capabilities shared across animals: perception, control, adaptation, and interaction.

The 2026 NeuroAI literature has pushed further toward embodiment, learning through interaction, developmental trajectories, and efficient neural computation. That movement looks less like a departure from cybernetics than a return to its original unit of analysis.

---

## 12. A Wienerian benchmark would test a loop, not only a layer

What would it mean to take this seriously experimentally?

A conventional brain-model benchmark might look like:

`stimulus → brain activity`

`stimulus → model activity`

then measure:

`similarity(brain, model)`

A cybernetic benchmark would add the missing arrows:

`environment → sensing → internal state → action → new environment`

and compare biological and artificial systems at multiple levels.

### State estimation

Can the system infer hidden variables necessary for behavior from noisy, partial observations?

### Prediction

Can it anticipate the sensory and environmental consequences of candidate actions?

### Feedback correction

When the world deviates from expectation, does the system correct the dimensions that matter for the task?

### Stability and robustness

How does behavior change under delay, noise, perturbation, missing sensory channels, or altered body dynamics?

### Active sensing

Does the system choose observations that reduce uncertainty relevant to action?

### Learning

Does interaction change the controller in a way that improves future performance?

### Development

Does competence emerge through a trajectory comparable to biological acquisition, rather than appearing only at the adult endpoint?

### Representation

Do internal states resemble neural population activity—and, crucially, are those states used in comparable ways?

This would not replace neural predictivity.

It would make neural predictivity one constraint inside a larger causal theory.

---

## 13. LLMs: prediction is not yet the whole cybernetic loop

Large language models make the contrast especially clear.

The core pretrained objective is approximately:

`context → distribution over next token`

This is an extraordinarily powerful form of prediction. It can produce internal representations that encode syntax, semantics, world knowledge, and long-range context.

But next-token prediction by itself does not imply a self-contained cybernetic agent.

A closed-loop agent requires something more like:

`observe → infer → choose action → change environment → observe consequence → adapt`

The important difference is not "transformers versus neurons."

It is **observer versus participant in the data-generating process**.

This distinction should not be overstated. Modern LLM systems can already be embedded in larger loops with tools, memory, reinforcement learning, code execution, browsers, robots, other agents, and human feedback. Once that happens, the relevant scientific object is no longer the language model alone.

It is the coupled system:

`model + memory + tools + policy + environment + feedback`

In cybernetic terms, agentification is therefore not simply the addition of an API.

It is a transition from a predictive component toward a control architecture.

That transition also changes evaluation. A model that answers a static benchmark question correctly may still fail as an agent because it cannot maintain state, detect error, recover from perturbation, choose informative actions, or update its strategy when the world changes.

The cybernetic question is not only:

> How good is the model's prediction?

It is:

> **What happens when the prediction is inserted into a loop that can act?**

---

## 14. *The Human Use of Human Beings*: the missing variable is who chooses the goal

If the story ended here, Wiener would be remembered mainly as a precursor of control-theoretic AI.

But *The Human Use of Human Beings* changes the scope of the argument.

Cybernetics can explain how a system pursues an objective. It cannot, by itself, determine which objectives are worth pursuing.

In modern optimization notation, we might write:

`π* = argmin J(π)`

Engineering asks how to find `π*`.

Wiener's social and ethical question is prior:

> **Whose J?**

Who specifies the objective?

Whose error signal counts?

Which variables are regulated?

Which deviations are treated as failures?

Who gets to modify the controller?

Who bears the consequences when the optimization succeeds?

This is why *The Human Use of Human Beings* should be read together with *Cybernetics*, not as a separate popular appendix.

The same formal machinery that makes adaptive machines possible also makes it possible to build organizations that treat people primarily as controllable components.

Wiener's warning is memorable because it is not limited to metal machines. He worries about institutions in which people are used as "cogs and levers and rods" rather than as responsible human beings.

The danger is therefore not simply:

`machine replaces human`

It is also:

`human is reorganized as a component inside a machine-like objective`

This is startlingly relevant to contemporary AI.

An optimization system can be technically successful while narrowing human agency. A recommender can increase engagement while reshaping the preferences it later claims merely to predict. A workplace system can improve throughput while reducing workers to measurable variables. An autonomous agent can satisfy a proxy objective while violating the intent that motivated it.

The cybernetic success condition and the human success condition are not automatically the same.

---

## 15. Alignment before "alignment"

It would be anachronistic to call Wiener an AI alignment researcher in the modern technical sense. The contemporary field has its own history, formal problems, and vocabulary.

But the structural resemblance is real.

Wiener understood that a learning machine might make decisions that differ from those its designers expected or would endorse. More importantly, he rejected the idea that responsibility could simply be transferred to the mechanism.

A machine executes an objective inside a causal organization.

It does not absolve the humans who selected the objective, designed the organization, or delegated the decision.

This yields a distinction that remains central:

`optimization ≠ specification`

Improving the optimizer does not solve the problem of choosing what should be optimized.

Nor does improving predictive accuracy solve the problem of deciding which predictions should guide action.

For NeuroAI, this is especially important because biological intelligence is inseparable from drives, needs, social structure, development, and value. If we model only the mechanisms that efficiently transform goals into actions, we have modeled one half of agency.

The other half is where goals come from, how they change, and how multiple agents negotiate them.

A genuinely Wienerian NeuroAI therefore cannot stop at control.

It must eventually confront **control of what, for whom, and by whom**.

---

## 16. The system outside the system: society is also a feedback loop

The move from *Cybernetics* to *The Human Use of Human Beings* can be represented as a change in system boundary.

The first loop is:

`agent ↔ environment`

The second is:

`learning agent ↔ changing environment`

The third is:

`human ↔ machine ↔ institution ↔ society`

Outputs become new inputs at every level.

This matters because machine behavior changes human behavior, which changes the data, incentives, and institutions that shape later machine behavior.

A deployed AI system is therefore rarely an isolated predictor.

It participates in a social dynamical system.

Recommendation is an obvious example:

`ranking → attention → behavior → logged data → training → ranking`

The model is not merely estimating preferences. It can help produce the preference distribution it later observes.

The same logic appears in markets, organizational decision systems, education, public discourse, and human-agent collaboration.

Once this feedback exists, static evaluation becomes incomplete. We need to ask about equilibria, amplification, adaptation, path dependence, and unintended control.

Cybernetics is useful here precisely because it refuses to treat prediction as causally neutral.

An output sent into the world becomes part of the next input.

---

## 17. A research program: NeuroAI as the science of adaptive loops

Putting the three Wiener texts together suggests a research program with a different center of gravity.

| Common NeuroAI question | Wienerian reformulation |
| --- | --- |
| Which model is most brain-like? | Which artificial system implements comparable closed-loop organization? |
| What does a brain region encode? | What control-relevant variable does this neural state make available? |
| Does a model predict neural activity? | Does the corresponding state play a similar causal role in behavior? |
| Can a model predict the future? | Does prediction improve action under uncertainty? |
| What is the representation? | What information is sufficient for regulation? |
| What is the policy? | How does feedback continuously reshape action? |
| How does the model learn? | How does experience change the controller itself? |
| Is the model embodied? | How do body dynamics and action shape the data-generating process? |
| Is the agent aligned? | Who specifies the goal, and whose agency is preserved by the control system? |

This does not imply that every neuroscience experiment must become robotics, or that every representation study is incomplete unless it includes behavior.

It means that the larger theory should specify where a representation sits in the loop.

A neural variable becomes more mechanistically interpretable when we can say not only what predicts it, but also what it predicts, what perturbs it, what action depends on it, and how feedback changes it.

The basic explanatory object becomes:

`representation ↔ dynamics ↔ action ↔ consequence ↔ learning`

rather than representation alone.

---

## 18. Three principles for a Wienerian NeuroAI

The literature can be compressed into three principles.

### 1. The natural unit of intelligence is the closed loop

Brains evolved inside bodies acting in environments. Perception changes action; action changes perception; learning changes both.

The scientific unit is therefore often larger than the neural network itself.

`brain + body + environment`

is not merely context around intelligence.

It is part of the mechanism through which intelligence is realized.

This is why the contemporary shift toward embodied NeuroAI is conceptually important, not merely an engineering trend (Zador et al., 2023).

### 2. Brain-likeness should include cybernetic organization

Representational similarity is valuable but underdetermines mechanism.

Two systems may have similar internal geometry while differing in recurrence, prediction, control law, learning rule, perturbation response, or coupling to action.

The stronger comparison is multi-level:

`representation + dynamics + control + adaptation`

This is close to the direction urged by behavior-centered neuroscience more broadly. Krakauer and colleagues (2017) argue that detailed analysis of behavior is indispensable for understanding neural mechanisms; neural data without a sufficiently rich theory of behavior can encourage reductionist explanation.

A cybernetic framework makes behavior not merely an output variable but part of the causal loop.

### 3. Better control does not answer the question of better ends

Wiener's final lesson is a limit theorem of a different kind.

No increase in optimization competence can, by itself, tell us which objective deserves optimization.

That question belongs to human judgment, social institutions, ethics, and politics.

A science of intelligence that ignores this may build increasingly capable controllers while becoming less clear about what the control is for.

---

## 19. From "the model" to "the system"

There is a broader connection here to how machine learning itself is changing.

We often speak as though the model were the central object:

`data → model → prediction`

But deployed intelligence increasingly looks like:

`data ↔ model ↔ tools ↔ users ↔ environment ↔ infrastructure`

The boundaries blur.

The model selects data.

The data changes the model.

Infrastructure constrains what models can be trained and how often they can adapt.

Users respond to outputs.

Those responses become data.

Agents modify the environment that generates future observations.

In this sense, the slogan **the system is the model** becomes even stronger under cybernetics.

The intelligence we observe may not be attributable to a single parameterized function. It may emerge from the organization of a loop containing models, memory, bodies, tools, other agents, and institutions.

For biological intelligence, that loop has always been there.

NeuroAI gives us a chance to study it explicitly.

---

## Conclusion: intelligence is in the loop

Wiener's relevance to NeuroAI is sometimes summarized with the word **feedback**.

That is correct but incomplete.

Read together, *Behavior, Purpose and Teleology*, *Cybernetics*, and *The Human Use of Human Beings* offer a much larger picture.

The 1943 paper asks how purposive behavior can be described without invoking mysterious final causes. Its answer is organization around feedback, error correction, and prediction.

*Cybernetics* generalizes that insight into a common science of animals and machines based on communication, control, noise, prediction, and regulation.

*The Human Use of Human Beings* then expands the system boundary again. Adaptive control becomes learning; information becomes a condition for maintaining organization; machines become elements in social systems; and technical optimization becomes inseparable from the question of who sets the purpose.

That progression can be summarized as:

`purpose → control and communication → learning → social consequence`

For NeuroAI, the implication is straightforward.

The field should continue asking which artificial representations resemble neural representations. But it should also ask a larger question:

> **What computational organization allows an embodied agent to estimate, predict, act, learn, and remain adaptive in a changing world?**

That question places brains and machines on genuinely common ground without pretending that they are the same material object.

And it suggests a stronger definition of intelligence:

> **Intelligence is not merely a property of a model. It is a property of an organized system that uses information to predict, act, learn, and regulate itself through feedback.**

Wiener's final warning prevents this definition from becoming pure engineering:

> **The ability to optimize a purpose is not the wisdom to choose one.**

A Wienerian NeuroAI would need both insights.

It would study how intelligent loops work.

And it would remain explicit about what—and whom—the loop is for.

---

## References

- Ayzenberg, V., Bonner, M. F., & Bayet, L. (2026). [Advancing NeuroAI through developmental alignment](https://doi.org/10.1016/j.neuron.2026.07.003). *Neuron*.
- Cisek, P. (2007). [Cortical mechanisms of action selection: The affordance competition hypothesis](https://doi.org/10.1098/rstb.2007.2054). *Philosophical Transactions of the Royal Society B*, 362, 1585–1599.
- Conant, R. C., & Ashby, W. R. (1970). [Every good regulator of a system must be a model of that system](https://doi.org/10.1080/00207727008920220). *International Journal of Systems Science*, 1, 89–97.
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
