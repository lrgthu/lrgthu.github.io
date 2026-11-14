---
title: "Intelligence Is in the Loop"
date: 2026-09-05 15:58:00 -0500
summary: "A research perspective on NeuroAI through Norbert Wiener: from representation to feedback, learning, agency, and the question of who chooses the goal."
tags: [neuroai, cybernetics, control, neuroscience, ai, norbert-wiener]
series: adaptive-intelligence
series_order: 2
---

*A research perspective on Norbert Wiener, NeuroAI, and why the unit of intelligence is larger than the model*

Much of contemporary NeuroAI organizes itself around a clean comparative question:

> **Which artificial model best resembles the brain?**

Encoding models, representational similarity analysis, and benchmarks such as Brain-Score (Schrimpf et al., 2018) made that question quantitative in a way earlier theories rarely achieved, forcing intuitions about brain-likeness to survive contact with neural recordings. Yet the standard experimental template still holds the input fixed—comparing *stimulus → brain activity* against *stimulus → model activity*—and asks how closely the two internal endpoints align.

What troubles me is everything left outside that frame. Biological brains sit inside bodies whose actions alter the next sensory sample, whose plasticity rewires the controller that produced the action, and whose counterparties push back. Because the organism stands inside its own data-generating process, passive alignment at a single stage of processing leaves open how those representations actually function.

Norbert Wiener offers an unexpectedly sharp lens here—less as a forgotten prophet of modern deep learning than as a methodologist of **system boundaries**. Read as a single arc, *Behavior, Purpose and Teleology* (Rosenblueth, Wiener, & Bigelow, 1943), *Cybernetics: Or Control and Communication in the Animal and the Machine* (Wiener, 1948), and *The Human Use of Human Beings* (Wiener, 1950/1954) progressively widen the scientific object: from an action regulated by sensory feedback, to a plastic controller reshaped by experience, to human beings embedded inside institutional optimization loops.

`environment → sensing → internal state → action → environment`

In [*The System Is the Model*](/blog/the-system-is-the-model/), I framed this as a question of where an explanatory loop closes. Taking the organism–environment loop as the primary unit of analysis changes NeuroAI in two connected ways: mechanistically, brain–model evaluation has to test whether matched internal states play equivalent **causal roles** around the loop rather than merely exhibiting similar geometry; normatively, once a predictive model is wired into a loop that acts on the world, the source of its objective ceases to be an external engineering detail. **Intelligence is larger than the model, and optimization is smaller than judgment.**

---

## 1. Purpose, Dynamics, and Representation for Control

Rosenblueth, Wiener, and Bigelow's 1943 paper begins by separating **organizational similarity** from material substrate. A cat pursuing prey and a servomechanism tracking a target share almost nothing in physical implementation, yet both can be characterized by how discrepancy from a target condition governs action. Goal-directedness requires no mysterious future cause reaching backward in time; it emerges whenever a system couples current error to corrective action across a return path through the world. When action takes time and feedback arrives with delay, effective regulation must also become predictive—anticipating where a moving target will be when the movement lands, and thereby helping generate the future sensory distribution it will next observe.

Pathological feedback reveals why this shift in unit matters for neuroscience. Rosenblueth, Wiener, and Bigelow illustrate the point through intention tremor: when sensory feedback returns with excessive gain or delay, each corrective movement overshoots and seeds the opposite error, turning a stabilizing circuit into an oscillator. Nothing in that disorder requires a single "broken module" computing the wrong static feature. Asking what function a brain region computes in isolation can miss the pathology altogether; the mechanistic question is what dynamical role that region plays inside a coupled loop whose stability has failed.

Wiener's 1948 *Cybernetics* generalizes that insight into a functional view of neural representation. Neuroscience has grown remarkably skilled at asking which artificial feature spaces explain variance in cortical recordings, yet a control perspective shifts the question from *what is represented* to **what must become observable and controllable for the organism to act next**. Retinal intensities do not hand an animal three-dimensional pose, physical stability, or another agent's intent; perception estimates latent variables sufficient for action under partial observability. A chair relative to a body is sittable, reachable, or obstructing—an ecological relation captured in Cisek's affordance competition hypothesis, where sensory streams continuously specify competing action possibilities rather than passing through a serial perception–decision–action pipeline (Cisek, 2007).

Sensorimotor control theory made this functional selectivity mathematically precise. Internal forward models predict the sensory consequences of candidate motor commands to compensate for noisy, delayed feedback (Wolpert, Ghahramani, & Jordan, 1995), while optimal feedback control shows that biological movement selectively corrects task-relevant deviations rather than enforcing a rigid trajectory across redundant degrees of freedom (Todorov & Jordan, 2002). Conant and Ashby's (1970) good-regulator theorem captures the underlying principle: effective regulation requires internal structure that reflects the task-relevant regularities of the regulated process, without demanding a photographic replica of the world. Later frameworks—from Rao and Ballard's (1999) cortical predictive coding to Friston's (2010; Friston et al., 2016) active inference—are distinct mathematical proposals rather than translations of Wiener into Bayesian notation, yet they inhabit the problem space cybernetics opened: how an embodied system regulates its relation to an uncertain world through feedback.

---

## 2. Plasticity, Active Sensing, and Viability

In *The Human Use of Human Beings*, Wiener emphasizes feedback that alters not only the immediate motor response but the policy generating future responses. An adaptive agent operates on at least two nested clocks:

`state_t → action_t → state_(t+1)`

`parameters_t → experience → parameters_(t+1)`

Fast dynamics regulate state; slower plasticity reorganizes the controller itself. Matching an adult cortical representation at a single frozen checkpoint does not establish how that competence was assembled—a gap that recent calls for **developmental alignment** in NeuroAI confront directly by asking models to match developmental trajectories of architecture, experience, and learning objectives (Ayzenberg, Bonner, & Bayet, 2026).

Coupling action to plasticity also explains both why offline pretraining works as well as it does and **where passive observation hits a causal ceiling**. Self-supervised vision and language models recover striking representational geometry from static corpora partly because human photographers, speakers, and writers have already curated views and descriptions shaped by embodied interaction. Yet in any passive observational stream, transitions between consecutive observations are confounded by unobserved actions: passive statistics alone cannot separate sensory changes caused by the agent's own movement (reafference) from disturbances imposed by the external world, nor can they test counterfactual trajectories the recorded policy never visited. Held and Hein's (1963) classic kitten-carousel experiment made this boundary vivid in developmental neuroscience: two kittens received matched visual stimulation as one walked actively and transported the other in a gondola, yet only the self-moving animal developed normal visually guided paw placement and depth avoidance. Identical *stimulus → brain* exposure failed to build functional sensorimotor organization when severed from self-generated action consequences.

Beneath task learning sits an even older biological constraint. Drawing on physiological homeostasis (Cannon, 1932) and Ashby's (1952) account of adaptation around essential variables, cybernetics treats living organisms as systems that must keep their internal states within a viable region:

`state_t ∈ viable region`

Before an animal maximizes an abstract benchmark score, it has to remain alive and intact. Unlike an artificial agent handed a clean external reward scalar, a biological nervous system generates and arbitrates its own imperatives—balancing energy, threat, fatigue, curiosity, and social attachment. Agency begins in self-maintenance, not in externally supplied loss functions.

---

## 3. Causal-Role Equivalence for NeuroAI

NeuroAI has already begun pushing past static feature matching. Krakauer and colleagues (2017) argued that neural mechanism is unintelligible divorced from detailed behavior; Zador and colleagues (2023) and D'Angelo and colleagues (2026) advanced embodied benchmarks evaluating controller, body, and environment together; and Feather, Khosla, Murty, and Nayebi (2025) proposed a **NeuroAI Turing Test** requiring joint behavioral and representational equivalence.

A cybernetic perspective adds a stricter mechanistic condition that even joint behavioral and geometric matching can miss: **causal-role equivalence under closed-loop intervention**.

> **Brain-like representations are mechanistically equivalent only if matched internal states occupy corresponding causal roles when the world pushes back.**

Consider a concrete failure mode. Suppose two visuomotor networks guide a limb toward a moving target. Evaluated offline on recorded primate visual streams, both achieve high linear predictivity of posterior parietal cortex; evaluated in unperturbed closed-loop reaching, both land on the target with human-like kinematics. Inside Model A, however, the parietal-aligned subspace serves as the forward state estimator driving rapid online motor correction within 150 ms of a visual target jump. Inside Model B, a geometrically similar parietal-like representation arises as an auxiliary predictive readout, while actual motor correction relies on a shortcut low-level reflex pathway that collapses under feedback delay. Static encoding benchmarks and unperturbed behavioral tests score both models as equally brain-like. Perturbing loop delay or intervening directly on the aligned latent subspace separates them immediately.

Turning causal-role equivalence into an experimental program points to three diagnostic tests where passive alignment can fail:

1. **Perturbation and recovery trajectories.** Subject biological and artificial systems to matched closed-loop disturbances—visuomotor rotations, feedback delays, sensory dropouts, altered plant dynamics—and compare the time course of error correction rather than endpoint accuracy alone.
2. **Active disambiguation.** Present perceptual ambiguity that can only be resolved by moving sensors—saccades, head motion, exploratory touch, or sequential tool queries—and test whether both systems select comparable information-seeking actions and update downstream representations alike.
3. **Interaction-matched plasticity.** Control the structure of interaction history during learning and ask whether comparable closed-loop experience induces parallel reorganizations in policy, internal geometry, and error sensitivity.

Crucially, "matched" interventions across distinct substrates require **matched operating regimes** rather than identical physical units: feedback delay scaled to each system's closed-loop bandwidth, sensory noise scaled to baseline perceptual uncertainty, and force or visual perturbations scaled to normal corrective range. A model that diverges under those normalized interventions is cybernetically unlike the organism regardless of its offline Brain-Score; conversely, an architecture with imperfect voxel-wise alignment may still isolate a genuine cortical control principle if its perturbation, active-sensing, and adaptation dynamics match. Feedback and regulation do not exhaust high-level abstraction or compositional reasoning, so this criterion is not a complete definition of intelligence—it is a sharper falsification test for mechanistic claims in NeuroAI.

---

## 4. From Predictive Models to Endogenous and Imposed Goals

Modern large language models illustrate this transition in system type in real time. Pretrained next-token prediction learns rich latent structure without controlling a persistent world, and single-turn inference remains largely open-loop. As soon as a model is coupled to persistent memory, code execution, browsers, physical actuators, and multi-step policies, the scientific object shifts from a sequence predictor to a closed-loop control architecture:

`model + memory + tools + policy + environment`

Closing that loop exposes the variable that pure engineering convenience usually hides. Every controller regulates around some criterion of success. In biological organisms, as we saw with homeostasis and viability, goals are multi-dimensional, internally contested, and rooted in the organism's own survival and development. When NeuroAI models agency solely as policy optimization under a fixed external reward, it leaves unmodeled how brains construct, weigh, and revise goals in the first place.

In engineered socio-technical systems, by contrast, an explicit scalar objective is imposed from outside:

`π* = argmin J(π)`

Optimization asks how to compute `π*`. Cybernetics forces the prior question outside the argmin: **Whose `J`?** Whose error signal triggers correction, which unmeasured human costs are treated as acceptable slack, and who bears the consequences when `J(π)` is minimized to the letter?

That link—between endogenous biological purpose and externally imposed optimization—is why Wiener's *The Human Use of Human Beings* reads like the logical completion of *Cybernetics* rather than an ethical afterthought. The keenest risk of capable optimization systems is rarely that a machine simply replaces a person; it is that human beings inside the loop are quietly reorganized into regulated components of an institutional objective. A workplace scheduling algorithm maximizes throughput by stripping slack from human judgment; an autonomous agent satisfies a literal proxy while violating the intent that motivated it; a recommendation engine maximizes engagement by reshaping the habits and desires it later claims merely to measure—a dynamic I examine from the human side in [*The User Is Not a Vector*](/blog/the-user-is-not-a-vector/). Once prediction is wired into action, **prediction ceases to be causally neutral**.

---

## Where This Leaves NeuroAI

Representation remains indispensable to neuroscience and AI, yet **representation is one cross-section through an ongoing control process**. What makes a neural state explanatory is not only which stimulus features correlate with it, but what history produced it, what actions read from it, how it recovers when feedback is delayed or perturbed, and how resulting consequences reorganize the circuit for next time.

> **Intelligence is a property of an organized system that uses information to estimate, act, learn, and preserve adaptive coherence through feedback—and the capacity to optimize an objective is never the wisdom to choose one.**

The first half of that proposition changes how we test whether an artificial system works like a brain. The second explains why building stronger optimizers makes the question of human purpose harder, not easier, to set aside.

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
- Held, R., & Hein, A. (1963). [Movement-produced stimulation in the development of visually guided behavior](https://doi.org/10.1037/h0040546). *Journal of Comparative and Physiological Psychology*, 56(5), 872–876.
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
