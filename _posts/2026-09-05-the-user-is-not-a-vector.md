---
title: "The User Is Not a Vector"
date: 2026-09-05 16:37:00 -0500
summary: "A recommender does not merely learn a user from their past; it becomes part of the environment through which the user's future is formed."
tags: [recommender-systems, user-modeling, cognitive-science, neuroscience, cybernetics, philosophy, ai]
series: adaptive-intelligence
series_order: 3
---

*A research perspective on recommendation, cognition, and the becoming of preference*

I spent years studying representations in visual and cognitive neuroscience—asking what patterns of cortical activity reveal about perception, memory, and interpretation. When I later began working on large-scale recommendation and user modeling, I encountered another representation carrying the same name: the **user vector**.

The word was doing two fundamentally different jobs. In neuroscience, observable behavior and neural activity are partial evidence about hidden processes—attention, working memory, fatigue, valuation, intention—that unfold across incompatible timescales and never sit still. In recommender systems, a user representation earns its keep through compression: clicks, watches, purchases, skips, searches, and pauses are distilled into coordinates from which a ranking model can score millions of candidates in milliseconds.

That compression works astonishingly well as an engineering primitive. Yet placing the two traditions side by side exposed two assumptions that predictive user representations routinely flatten. First, even before accounting for feedback, **observable behavior underdetermines internal state**: sequential architectures such as SASRec (Kang & McAuley, 2018) and long-context transformers allow a user representation to move over time, yet compressing an action log into a next-step predictor still conflates fleeting impulse, habit, reconstructive memory, and reflective commitment inside a single trajectory. Second, and deeper, that trajectory is **causally endogenous to the recommender's own policy**:

`z_(t+1) = f(z_t, a_t, c_t, ε_t)`

Here `z_t` denotes the user's latent state, `c_t` the surrounding context, and `a_t` the system's own intervention—what it chose to surface, repeat, rank first, or withhold. The problem with treating the user as a coordinate to be estimated is not that vectors cannot move; it is that an action-blind state representation treats the person's motion as exogenous when the recommender is actively helping drive `z_t` to `z_(t+1)`.

> **A recommender does not merely learn a user from their past; it becomes part of the environment through which the user's future is formed.**

What follows is not a proposal for a specific network architecture, but a research perspective on what changes once we take both layers—cognitive structure inside the person and closed-loop intervention between system and user—seriously at the same time.

---

## 1. Behavior Underdetermines Preference

Personalized ranking usually begins from a deceptively transparent question: *what does this person want?* Built into standard revealed-preference modeling is the picture of an invisible catalogue of likes and dislikes waiting to be recovered from noisy behavioral traces. Play enough jazz and the posterior concentrates on jazz; scroll past baseball often enough and baseball drops out of candidate retrieval.

Human tastes rarely pre-exist their history in that way. There are books we love only after learning how to read them, music that sounded opaque until an accidental encounter or patient friend gave us ears for its structure, and subjects that meant nothing until a threshold of competence made distinction possible. Equally, our logs are littered with outgrown enthusiasms and habits that outlived enjoyment. Preference is formed through experience as much as it is expressed through it.

Neuroscience makes it natural to doubt "the user's preference" in the singular because the brain itself runs on multiple clocks. Selective attention shifts within hundreds of milliseconds; working memory holds context for seconds; episodic traces consolidate or decay selectively; sensorimotor and digital habits solidify over weeks; conceptual schemas and personal commitments mature over years. When someone taps a short video at one in the morning, the logged event could reflect an enduring interest, momentary curiosity, cognitive depletion, habitual cue-response, or sheer screen prominence. High next-click accuracy can coexist with complete blindness to which of those processes generated the tap.

Longer context windows do not automatically close that gap, because **a behavioral log and a human memory are different kinds of objects**. A database remembers by preservation; people remember by transformation. Suppose a music service stores every track I streamed over the past decade. Those ten years do not sit inside me with uniform weight. A handful of albums became part of how I understand myself; others belong to chapters of life long closed; some I would recognize within two bars without recalling where I first heard them; still others I have simply heard too many times. The platform possesses my history, whereas I carry a continually reconstructed memory—making long-horizon user modeling less a matter of lossless storage than of inferring what remains cognitively alive in the person today.

Even at a single moment, human beings disagree with themselves. The morning self who plans to read a monograph, the midnight self who reaches for another clip, and the tomorrow self who absorbs the sleep debt are all real aspects of the same person. Collapsing all three into immediate revealed choice mistakes impulse for endorsement; having the platform unilaterally override immediate choice in the name of "true welfare" slides personalization into paternalism. Any honest account of preference has to face the fact that valuation is plural, temporal, and internally contested.

---

## 2. When the Observer Enters the State Transition

Up to this point, the difficulty is epistemic: internal states are structured and hard to infer from surface logs. Recommender systems introduce a second, causal complication by altering the state they set out to measure.

Consider someone with zero jazz plays in their history. From observational logs alone, that silence is maximally ambiguous: it is compatible with active dislike, latent affinity without opportunity, or lack of the perceptual familiarity needed to parse harmonic improvisation. Now suppose the recommender surfaces an accessible trio recording. The listener hears a doorway into the idiom, returns a few evenings later, begins distinguishing phrasing and tone, recognizes players across albums, and a year later streams jazz several times a week. Asking whether the recommender *discovered* a pre-existing preference or *created* a new one misses the coupling: exposure supplied the experience through which latent capacity became articulated taste.

A recommender is therefore never a neutral telescope pointed at user preference. As I argued more generally in [*When the World Pushes Back*](/blog/when-the-world-pushes-back/), prediction loses causal neutrality the moment its outputs return through the world as future inputs. Here the loop is bidirectional **co-adaptation** between two learning agents. While the ranking model updates its representation of the person, experienced users build a folk working model of the algorithm—hesitating to click an outlier video for fear of flooding next week's feed, or deliberately searching several examples in a row to retrain retrieval. Neither trajectory evolves independently.

Social science calls classifications that reshape their subjects *performative*, and machine learning has formalized key pieces of the resulting feedback loop: Perdomo and colleagues (2020) analyze performative prediction when deployment shifts future data distributions, Chaney, Stewart, and Engelhardt (2018) show how recommendation-confounded logs homogenize exposure and depress utility, and Carroll and colleagues (2022) study how recommendation-induced preference shifts might be estimated and penalized.

Yet tracking state changes dynamically still leaves a fundamental causal identification problem unresolved. Return to the user whose jazz listening rises after repeated jazz recommendations. That identical behavioral trajectory is compatible with at least five distinct mechanisms:

1. **Prior latent affinity**—the user already valued jazz and lacked only awareness or access;
2. **Salience and choice convenience**—repeated top-slot placement lowered selection effort without changing underlying valuation;
3. **Perceptual competence**—familiarity built the auditory schemas needed to appreciate structure that initially sounded flat;
4. **Unendorsed habit formation**—cue-driven repetition stabilized a routine the user neither reflects on nor especially prizes;
5. **Endorsed valuation shift**—the person's reflective tastes genuinely expanded.

> **Dynamics are not identification. A sequential model can predict how a user's behavior shifts while remaining blind to why it shifted.**

Observational sequence modeling—however expressive its architecture—cannot separate those five mechanisms from confounded interaction logs alone, because `a_t` simultaneously selects what is measured and perturbs `z_(t+1)`.

---

## 3. Cognitive Ecology and Agency Over Becoming

Every recommender constructs a local cognitive environment. Because human attention is finite, items never surfaced rarely enter deliberation, while items shown repeatedly acquire fluency and salience before explicit evaluation even begins. Writing reorganized biological memory; maps reorganized spatial navigation; web search reorganized the boundary between knowing and looking up. Digital feeds go one step further by **rebuilding the environment continuously around yesterday's footsteps**. A physical bookshelf does not reshuffle its spines overnight because our eyes lingered on one jacket; a city street does not erase neighboring storefronts because we turned left twice last week. An adaptive feed does something close to that on every refresh, forming a coupled human–machine cognitive ecology.

It is tempting to cast that loop solely as a narrowing trap, yet the same mechanism can permanently widen a life—introducing a writer, a culinary tradition, a mathematical subfield, or a composer we could not yet have known to search for. That generative possibility is why the vocabulary of **becoming** captures more than static preference satisfaction. The question beyond where the user sits today, or even where momentum carries them next, is which futures remain reachable—and who governs the steering.

Crucially, preserving openness is not the same thing as injecting random topical diversity. Suppose someone deliberately resolves to spend six months immersed in J. S. Bach's keyboard works. A recommender that respects that commitment should grow *narrower and deeper*, surfacing comparative performances, contrapuntal analyses, and historical lineages rather than diluting the feed with unrelated novelties. What matters normatively is **meaningful user agency over the trajectory**: the capacity to declare an enduring project, mark a curiosity as transient, inspect and correct what the model has inferred, or step out of a self-reinforcing groove. Exploration in machine learning is conventionally justified by the *model's* epistemic uncertainty about the user; in human development, exploration matters just as much because people are uncertain about their own unrealized capacities.

> **A system can become remarkably accurate at predicting the current user while making it harder for the person to author who the future user becomes.**

Why do existing industrial remedies—reinforcement learning for long-term user value (LTV), diversity regularizers, and item-level "not interested" buttons—still struggle to resolve this tension? Two structural asymmetries stand in the way:

- **Horizon and signal-to-noise asymmetry.** Immediate clicks, completions, and dwell times deliver millions of low-variance gradient updates within seconds, whereas cultivated taste, quiet satisfaction, or retrospective regret unfolds over months and goes largely unmeasured. Under noisy long-horizon credit assignment, policies trained to maximize cumulative engagement struggle to distinguish genuine enduring value from a high-retention habit loop: in logged interaction metrics, compulsive return and deep appreciation look deceptively alike.
- **Point-level feedback versus trajectory-level control.** Nearly all user-facing controls operate on isolated points in item space—hiding a single post, muting a creator, clicking dislike—whereas human self-direction operates over policies, contexts, and time horizons. Users rarely need another button to veto item #4,812; they need levers over `a_t` itself, such as sustaining a chosen learning arc over months or instructing the feed not to exploit late-night fatigue.

---

## 4. A Cognitive Dynamical Model—and Its Human Use

In [*Where the Loop Closes*](/blog/where-the-loop-closes/), I argued that explanatory boundaries must match the smallest causal system that remains adequate under intervention. Applied to personalization, that principle points toward what I think of as **a cognitive dynamical model of the user**—not decorating arbitrary embedding coordinates with psychological labels, but structuring user modeling around latent components that operate on distinct timescales and respond differently to policy interventions:

1. **Availability and exposure salience**—short-lived prominence driven directly by what `a_t` places on screen;
2. **Perceptual familiarity and domain competence**—slower representational growth through which complex domains become intelligible;
3. **Fast reactive drives and habits**—state-dependent impulses sensitive to time of day, cognitive load, and repetitive cues;
4. **Reflective, endorsed commitments**—durable valuations and explicit projects the user stands behind outside the immediate session.

Separating these components turns philosophical distinctions into testable interventional signatures. Randomized exposure holdouts and evaluation on common, policy-independent candidate sets separate mere availability from internalized interest. Temporary withdrawal of recommendation pressure tests hysteresis: convenience-driven clicking collapses as soon as prominent slotting stops, whereas cultivated competence and endorsed taste persist and generate self-initiated search. Delayed reassessment and light-touch reflective elicitation expose gaps between midnight compulsion and next-day endorsement.

Once user state transitions are modeled as action-dependent, Wiener's question from [*When the World Pushes Back*](/blog/when-the-world-pushes-back/)—**Whose `J`?**—becomes an immediate systems design problem. Optimizing short-horizon behavioral volume treats human plasticity as an instrument for metric growth. Designing for **human use** treats predictive accuracy as a constraint inside a broader relationship: helping people pursue intentions they endorse, discover capacities they had not yet articulated, and revise how the environment adapts to them without fighting an opaque adversary.

---

## The User Is an Open Trajectory

Compressing behavioral history into a vector will remain indispensable for large-scale retrieval and ranking. Every abstraction, however, invites us to forget what it averages over, and what standard user representations most easily obscure is **how motion in preference space is produced**.

People remember selectively, outgrow earlier selves, contend with competing impulses, and acquire new categories of appreciation—increasingly inside digital environments that adapt in real time to the very changes they help induce. The scientific unit of personalization is therefore neither an isolated user embedding nor an isolated ranking model, but the coupled trajectory they co-produce:

`user history → policy action → lived experience → updated memory and state`

The user is neither a fixed coordinate waiting to be located nor an exogenous sequence merely to be tracked. **The user is an open, self-interpreting trajectory—and the recommender is now one of the forces acting upon it.** Modeling that force honestly means refusing to confuse predicting change with explaining its mechanism; building responsibly means ensuring that ownership of where the trajectory goes stays with the person living it.

---

## References and further reading

- Carroll, M. D., Dragan, A., Russell, S., & Hadfield-Menell, D. (2022). [Estimating and Penalizing Induced Preference Shifts in Recommender Systems](https://proceedings.mlr.press/v162/carroll22a.html). *Proceedings of the 39th International Conference on Machine Learning*, PMLR 162, 2686–2708.
- Chaney, A. J. B., Stewart, B. M., & Engelhardt, B. E. (2018). [How Algorithmic Confounding in Recommendation Systems Increases Homogeneity and Decreases Utility](https://doi.org/10.1145/3240323.3240370). *Proceedings of the 12th ACM Conference on Recommender Systems*.
- Kang, W.-C., & McAuley, J. (2018). [Self-Attentive Sequential Recommendation](https://doi.org/10.1109/ICDM.2018.00035). *2018 IEEE International Conference on Data Mining (ICDM)*, 197–206.
- Perdomo, J., Zrnic, T., Mendler-Dünner, C., & Hardt, M. (2020). [Performative Prediction](https://proceedings.mlr.press/v119/perdomo20a.html). *Proceedings of the 37th International Conference on Machine Learning*, PMLR 119, 7599–7609.
