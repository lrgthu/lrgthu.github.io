---
title: "When the World Pushes Back"
date: 2026-09-05 15:58:00 -0500
summary: "An essay on brains, feedback, and NeuroAI through Norbert Wiener: why internal representations answer to closed-loop control—and why optimizing a goal is smaller than choosing one."
tags: [neuroai, cybernetics, control, neuroscience, philosophy, ai, norbert-wiener]
series: adaptive-intelligence
series_order: 2
---

*Purpose, feedback, and agency from Norbert Wiener to contemporary NeuroAI*

Watch a cat drop from a windowsill onto a rug that slips beneath its forepaws, or watch a neurological patient with cerebellar tremor reach for a glass of water—the hand quiet on the table, then swinging wider the closer the fingers come to the rim. Now step into the experimental ceremony around which much of contemporary NeuroAI is organized. A macaque or a human views thousands of flashed photographs while electrodes or fMRI scanners record cortical responses; an artificial neural network receives the same pixels with its weights frozen in place; a linear regression measures how closely the two internal geometries align.

Benchmarks built on that template—most notably Martin Schrimpf and colleagues' Brain-Score—did neuroscience a genuine service. They forced loose metaphors about "brain-like representation" to answer to quantitative prediction on held-out neural recordings, turning philosophical hunch into falsifiable competition around one crisp question:

> **Which artificial model best resembles the brain?**

What lingers uneasily outside that frame is the stillness required to stage the comparison. Both sides of the benchmark hold the world motionless—matching *stimulus → brain activity* against *stimulus → model activity* as if perception were a gallery walk past framed pictures. Yet every biological brain sits inside a body whose movements alter the next sensory sample, whose synapses reorganize the controller that produced the movement, and whose surroundings push back. Because a living creature stands inside its own data-generating process, geometric alignment at a frozen cross-section leaves open what those neural states actually *do*.

Norbert Wiener remains our sharpest guide to that blind spot—not as a forgotten prophet of deep learning, nor as a patron saint of retro analog machinery, but as a philosopher-mathematician of **system boundaries**. Read as a single intellectual arc, his 1943 manifesto *Behavior, Purpose and Teleology* with Arturo Rosenblueth and Julian Bigelow, his 1948 treatise *Cybernetics*, and his 1950 book *The Human Use of Human Beings* progressively widen the unit of explanation: from a limb governed by sensory error, to a plastic nervous system reshaped by lived consequence, to human beings caught inside institutional machines of optimization.

`environment → sensing → internal state → action → environment`

In [*Where the Loop Closes*](/blog/where-the-loop-closes/), I argued that explanatory disputes in cognitive science and AI turn on finding the smallest causal boundary whose books balance under intervention. Taking the organism–environment loop as that unit transforms NeuroAI along two connected axes. Mechanistically, two representations are equivalent only if they play equivalent **causal roles** when the loop is disturbed, not merely when they cast similar shadows on a static dataset. Normatively, the moment a predictive model is wired into action, the origin of its objective ceases to be an external engineering detail. **Intelligence is larger than the model, and optimization is smaller than judgment.**

---

## Teleology Without Vitalism

For more than two centuries after Newton, natural science treated the word *purpose* with embarrassment. To say that an animal acts *in order to* catch prey or keep warm sounded like one of two heresies: either an Aristotelian final cause in which an unrealized future reaches backward in time to pull the present toward itself, or a vitalist ghost smuggled into living tissue.

Rosenblueth, Wiener, and Bigelow dissolved that dilemma in seven pages. Compare a cat intercepting a running mouse with a servomechanism tracking an aircraft across cloud cover. The two share virtually nothing in matter—wet muscle and ion channels on one side, brass gears and vacuum tubes on the other—yet they share an **organizational form**. Neither requires the future to act on the present. Purpose appears in plain physical time whenever a system couples *current discrepancy* from a target relation to corrective action across a return path through the world. And because limbs have inertia while nerves and sensors introduce delay, regulating a moving world forces control to become anticipatory: to land where the mouse *will* be, the brain must estimate latent trajectories ahead of delayed feedback, helping author the sensory distribution it will encounter next.

Pathology makes this shift in explanatory unit unmistakable. Rosenblueth, Wiener, and Bigelow turned to **intention tremor**, the clinical condition in which a patient whose resting hand is perfectly steady begins oscillating violently the moment they try to bring a spoon to their mouth. Inspect the muscles, peripheral nerves, or primary motor cortex one piece at a time, and no single component need compute a "broken feature." When sensory feedback returns with excessive gain or timing lag, every corrective nudge arrives slightly too late, overshoots the mark, and seeds an equal error of opposite sign—turning a stabilizing circuit into a self-sustaining oscillator. Ask what static function an isolated brain region computes, and the disorder slips through your fingers; ask how gain and delay interact around a closed sensorimotor loop, and the mechanism snaps into focus.

Wiener's *Cybernetics* carries that lesson straight into the theory of representation. Modern encoding studies excel at asking which features of an external photograph can be decoded from cortical activity. A control perspective inverts the question: instead of *what picture of the room sits inside the head*, it asks **what must become observable and controllable for this body to act next**. Retinal intensities do not hand an animal three-dimensional reachability, surface slip, or another creature's intent. Relative to a moving body, a chair in a doorway is something that affords sitting, grasping, or stepping around—an ecological insight running from James J. Gibson to Paul Cisek's affordance competition hypothesis, in which sensory streams continuously specify competing possibilities for action rather than handing a finished perceptual portrait down a corporate assembly line from perception to decision to motor execution.

Decades of computational motor control gave that selectivity mathematical teeth. Daniel Wolpert, Zoubin Ghahramani, and Michael Jordan showed how internal forward models predict the sensory consequences of motor commands before sluggish peripheral feedback can return; Emanuel Todorov and Michael Jordan demonstrated that biological movement selectively corrects deviations that endanger the goal while leaving task-irrelevant degrees of freedom unpoliced. Roger Conant and Ross Ashby's good-regulator theorem distilled the underlying logic: any effective regulator must embody a model of the regularities under control, without ever needing a museum replica of the world. Later Bayesian descendants—from Rajesh Rao and Dana Ballard's predictive coding to Karl Friston's active inference—are distinct mathematical proposals rather than translations of Wiener into modern notation, yet they inhabit the exact territory cybernetics opened: how a bounded organism maintains grip on an uncertain world by closing the loop between expectation and action.

---

## Two Clocks and the Gondola Kitten

In *The Human Use of Human Beings*, Wiener drew attention to a deeper division of labor inside adaptive behavior: feedback that steers the immediate movement versus feedback that rewrites the policy governing future movements. Every learning creature lives on at least two nested clocks:

`state_t → action_t → state_(t+1)`

`parameters_t → experience → parameters_(t+1)`

Fast dynamics regulate state within milliseconds; slower plasticity reorganizes the controller itself over hours, months, and childhoods. Matching an adult cortical representation at a single frozen checkpoint leaves entirely open how that geometry was earned—a gap Vladislav Ayzenberg, Michael Bonner, and Laurie Bayet have recently pressed in arguing that NeuroAI must align developmental trajectories of architecture, experience, and learning rather than adult endpoints alone.

Watching those two clocks interlock explains both why offline pretraining succeeds as remarkably as it does and **where passive observation hits a causal wall**. Self-supervised vision and language models recover rich world structure from static archives partly because human photographers, speakers, and writers have already moved through the world on the model's behalf—choosing vantage points, handling objects, and naming what mattered to survival and craft. Yet inside any purely observational stream, transitions from one frame to the next remain confounded by unrecorded actions. Passive statistics alone cannot tell whether the visual field shifted because the observer turned their head (*reafference*) or because the branch in front of them swayed in the wind, nor can they test counterfactual branches the recorded trajectory never visited.

In 1963, Richard Held and Alan Hein built an experiment of almost Aesopian simplicity that turned this epistemological point into flesh and blood. Two littermate kittens were reared in darkness save for a few hours each day inside a vertically striped cylinder. One kitten walked under its own power; a mechanical linkage carried its sibling along the identical path suspended in a small gondola, exposing its eyes to the same moving stripes while preventing its limbs from causing them. Released onto open ground, the walking kitten extended its paws cleanly toward surfaces and recoiled from the edge of a visual cliff; the passenger kitten stumbled as though functionally blind to depth. Maurice Merleau-Ponty had argued in *Phenomenology of Perception* that space becomes intelligible only to a body geared into the world through movement; Held and Hein measured the physiological cost of uncoupling that gear. Identical *stimulus → brain* exposure failed to assemble functional sight when severed from the consequences of self-generated action.

Beneath skill learning sits an older imperative still. Drawing on Walter Cannon's account of bodily homeostasis and Ross Ashby's theory of adaptation around *essential variables*, cybernetics begins from the fact that a living creature is a precarious thermodynamic arrangement that must hold its internal states inside a narrow corridor of survival:

`state_t ∈ viable region`

Before an animal maximizes any task score, it must avoid freezing, starving, bleeding, or exhausting itself. An artificial agent begins life handed a clean external reward scalar; a biological brain must manufacture and arbitrate its own competing imperatives—balancing hunger against exposure, curiosity against fatigue, approach against fear. **Agency begins in self-maintenance, not in an externally supplied loss function.**

---

## When Two Models Tie Until the World Moves

NeuroAI has already begun chafing against static feature matching. John Krakauer and his colleagues reminded systems neuroscience that circuit mechanism becomes illegible when severed from natural behavior; Anthony Zador and collaborators, alongside embodied neuromorphic benchmarks led by Giulia D'Angelo and colleagues, pushed evaluation toward coupled bodies and environments; Jenelle Feather, Meenakshi Khosla, N. Apurva Ratan Murty, and Aran Nayebi proposed a **NeuroAI Turing Test** demanding behavioral and representational alignment together.

Cybernetics adds a stricter razor that even simultaneous behavioral and geometric similarity can fail to satisfy: **causal-role equivalence under closed-loop perturbation**.

> **Brain-like representations are mechanistically equivalent only if matched internal states occupy corresponding causal roles when the world pushes back.**

Picture two visuomotor networks steering an arm toward a darting target. Tested offline on recorded primate visual streams, both predict posterior parietal activity with high linear accuracy; tested in unperturbed closed-loop reaching, both bring the hand smoothly to the mark. Inside Model A, the parietal-aligned subspace genuinely serves as a forward state estimator, driving rapid motor correction within 150 milliseconds when the target jumps in mid-flight. Inside Model B, a geometrically similar parietal-like representation emerges as a passive predictive side-channel, while actual motor control rides a brittle low-level reflex shortcut that falls apart as soon as feedback is delayed. Every static encoding score and every unperturbed behavioral metric declares a tie. Inject loop delay—or silence the aligned subspace mid-reach—and the impostor gives itself away at once.

<div class="living-plate" data-living-plate="perturbation-falsifier">
  <noscript><p><em>Interactive Plate II: Closed-loop reaching simulation comparing a forward state estimator (Model A) against a passive readout + reflex shortcut (Model B) under feedback delay and subspace silencing.</em></p></noscript>
</div>

Taking causal-role equivalence seriously turns benchmark design toward three interventional tests where passive similarity cannot hide a mismatch:

1. **Perturbation and recovery trajectories.** Subject biological and artificial controllers to matched closed-loop disturbances—visuomotor rotations, feedback delays, sensory dropouts, altered limb inertia—and compare the full time course of error correction rather than calm-weather accuracy alone.
2. **Active disambiguation.** Present perceptual ambiguity that cannot be resolved from a stationary vantage point—requiring saccades, head parallax, exploratory touch, or sequential tool queries—and ask whether both systems choose comparable information-seeking actions and update downstream states alike.
3. **Interaction-matched plasticity.** Control the structure of closed-loop experience during adaptation and ask whether equivalent sensorimotor contingencies induce parallel reorganizations in policy, representational geometry, and error sensitivity.

Crucially, matching interventions across silicon and tissue never means copying raw physical units; it means matching **dimensionless operating regimes**—scaling feedback delay to each system's closed-loop bandwidth, sensory noise to baseline perceptual uncertainty, and force or visual perturbations to normal corrective range. A model that shatters under those normalized disturbances is cybernetically unlike the organism no matter how high its offline Brain-Score climbs; conversely, an architecture with imperfect voxel-by-voxel alignment may capture a genuine cortical control principle if its perturbation, active-sensing, and adaptation dynamics concur. Closed-loop control does not exhaust human abstraction or mathematical thought, so this criterion is not a total theory of mind—it is a sharper falsification test for what mechanistic resemblance in NeuroAI means.

---

## The Objective Outside the Argmin

Contemporary large language models are crossing this exact boundary in public view. A bare next-token predictor trained on archived text learns extraordinary latent structure without acting on a persistent world, and isolated single-turn completion stays nearly open-loop. The instant that model is wired to persistent memory, code execution, web browsers, physical actuators, and multi-step policies, it changes ontological category from sequence predictor to closed-loop controller:

`model + memory + tools + policy + environment`

Closing that loop forces into the light a variable that benchmark culture prefers to treat as given. Every controller regulates around some measure of error. In living creatures, as viability reminds us, purposes are plural, internally contested, and anchored in the organism's own fragile continuation. When NeuroAI equates agency with policy optimization under a fixed external reward, it leaves unmodeled the deepest part of biological autonomy: how a brain composes, weighs, and revises its own ends.

In engineered socio-technical systems, by contrast, a scalar objective is legislated from outside:

`π* = argmin J(π)`

Aristotle drew a permanent distinction in the *Nicomachean Ethics* between *cleverness* (*deinotes*)—the instrumental facility that finds efficient steps toward whatever mark has been posited—and *practical wisdom* (*phronesis*), the deliberative judgment of what is genuinely worth pursuing in a human life. Optimization perfects cleverness: it computes `π*` once `J(π)` is handed down. Cybernetics insists on the question that stands outside the argmin: **Whose `J`?** Whose discrepancy counts as error, whose exhaustion or lost autonomy disappears into unmeasured slack, and who pays the price when `J(π)` is driven ruthlessly to its minimum?

That question is why Wiener wrote *The Human Use of Human Beings* almost immediately on the heels of *Cybernetics*—not as a moralizing postscript to an engineering monograph, but as its necessary second half. The characteristic danger of powerful optimizers is seldom a theatrical machine rebellion; it is the quiet reorganization of human beings inside the loop into regulated components of an institutional metric. A warehouse or hospital scheduler squeezes throughput by stripping away the slack in which humane judgment lives; an autonomous agent satisfies a literal proxy while hollowing out the intent behind it; a recommendation engine maximizes session time by reshaping the habits and appetites it later claims merely to observe—the closed human–algorithm loop I turn to in [*The User Is Not a Vector*](/blog/the-user-is-not-a-vector/). Once prediction is wired into action, **prediction ceases to be causally innocent**.

---

## Where This Leaves NeuroAI

Representation remains indispensable to both neuroscience and artificial intelligence, yet **a representation is one cross-section through an ongoing act of regulation**. What makes a cortical state intelligible is not merely which features of a still photograph correlate with it, but what sensorimotor history built it, what actions read from it, how it recovers when the world pushes back unexpectedly, and how resulting error reshapes the circuit for tomorrow.

> **Intelligence is a property of an organized system that uses information to estimate, act, learn, and preserve adaptive coherence through feedback—and the power to optimize an objective is never the wisdom to choose one.**

The first half of that proposition changes how we judge whether an artificial system works like a living brain. The second explains why building stronger optimizers makes the question of human purpose harder, not easier, to set aside.

---

## References and further reading

- Aristotle. *Nicomachean Ethics*, Book VI (T. Irwin, Trans., 3rd ed., 2019). Hackett Publishing.
- Ashby, W. R. (1952). [*Design for a Brain*](https://books.google.com/books/about/Design_for_a_Brain.html?id=TV46AAAAMAAJ). John Wiley.
- Ayzenberg, V., Bonner, M. F., & Bayet, L. (2026). [Advancing NeuroAI through developmental alignment](https://doi.org/10.1016/j.neuron.2026.07.003). *Neuron*.
- Cannon, W. B. (1932). [*The Wisdom of the Body*](https://search.worldcat.org/title/The-wisdom-of-the-body/oclc/609446860). W. W. Norton.
- Cisek, P. (2007). [Cortical mechanisms of action selection: The affordance competition hypothesis](https://doi.org/10.1098/rstb.2007.2054). *Philosophical Transactions of the Royal Society B*, 362, 1585–1599.
- Conant, R. C., & Ashby, W. R. (1970). [Every good regulator of a system must be a model of that system](https://doi.org/10.1080/00207727008920220). *International Journal of Systems Science*, 1, 89–97.
- D'Angelo, G., Pedersen, J. E., Hassan, T., et al. (2026). [A benchmarking framework for embodied neuromorphic agents](https://doi.org/10.1038/s42256-026-01197-w). *Nature Machine Intelligence*, 8, 300–312.
- Feather, J., Khosla, M., Murty, N. A. R., & Nayebi, A. (2025). [Brain-Model Evaluations Need the NeuroAI Turing Test](https://arxiv.org/abs/2502.16238). *arXiv*.
- Friston, K. (2010). [The free-energy principle: A unified brain theory?](https://doi.org/10.1038/nrn2787). *Nature Reviews Neuroscience*, 11, 127–138.
- Friston, K., FitzGerald, T., Rigoli, F., Schwartenbeck, P., O'Doherty, J., & Pezzulo, G. (2016). [Active inference and learning](https://doi.org/10.1016/j.neubiorev.2016.06.022). *Neuroscience & Biobehavioral Reviews*, 68, 862–879.
- Gibson, J. J. (1979). *The Ecological Approach to Visual Perception*. Houghton Mifflin.
- Hassabis, D., Kumaran, D., Summerfield, C., & Botvinick, M. (2017). [Neuroscience-inspired artificial intelligence](https://doi.org/10.1016/j.neuron.2017.06.011). *Neuron*, 95, 245–258.
- Held, R., & Hein, A. (1963). [Movement-produced stimulation in the development of visually guided behavior](https://doi.org/10.1037/h0040546). *Journal of Comparative and Physiological Psychology*, 56(5), 872–876.
- Krakauer, J. W., Ghazanfar, A. A., Gomez-Marin, A., MacIver, M. A., & Poeppel, D. (2017). [Neuroscience needs behavior: Correcting a reductionist bias](https://doi.org/10.1016/j.neuron.2016.12.041). *Neuron*, 93, 480–490.
- Merleau-Ponty, M. (1945/2012). *Phenomenology of Perception* (D. A. Landes, Trans.). Routledge.
- Rao, R. P. N., & Ballard, D. H. (1999). [Predictive coding in the visual cortex: A functional interpretation of some extra-classical receptive-field effects](https://doi.org/10.1038/4580). *Nature Neuroscience*, 2, 79–87.
- Rosenblueth, A., Wiener, N., & Bigelow, J. (1943). [Behavior, purpose and teleology](https://doi.org/10.1086/286788). *Philosophy of Science*, 10, 18–24.
- Sadeh, S., & Clopath, C. (2025). [The emergence of NeuroAI: Bridging neuroscience and artificial intelligence](https://doi.org/10.1038/s41583-025-00954-x). *Nature Reviews Neuroscience*, 26, 583–584.
- Schrimpf, M., Kubilius, J., Hong, H., Majaj, N. J., Rajalingham, R., Issa, E. B., et al. (2018). [Brain-Score: Which artificial neural network for object recognition is most brain-like?](https://doi.org/10.1101/407007). *bioRxiv*.
- Todorov, E., & Jordan, M. I. (2002). [Optimal feedback control as a theory of motor coordination](https://doi.org/10.1038/nn963). *Nature Neuroscience*, 5, 1226–1235.
- Wiener, N. (1948). [*Cybernetics: Or Control and Communication in the Animal and the Machine*](https://mitpress.mit.edu/9780262537841/cybernetics-or-control-and-communication-in-the-animal-and-the-machine/). MIT Press edition.
- Wiener, N. (1950/1954). [*The Human Use of Human Beings: Cybernetics and Society*](https://openlibrary.org/works/OL4307570W/The_Human_Use_of_Human_Beings). Revised edition, 1954.
- Wolpert, D. M., Ghahramani, Z., & Jordan, M. I. (1995). [An internal model for sensorimotor integration](https://doi.org/10.1126/science.7569931). *Science*, 269, 1880–1882.
- Zador, A. M., Escola, S., Richards, B., Ölveczky, B., Bengio, Y., Boahen, K., et al. (2023). [Catalyzing next-generation artificial intelligence through NeuroAI](https://doi.org/10.1038/s41467-023-37180-x). *Nature Communications*, 14, 1597.
