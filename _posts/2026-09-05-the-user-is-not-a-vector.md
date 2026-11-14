---
title: "The User Is Not a Vector"
date: 2026-09-05 16:37:00 -0500
summary: "A recommender does not merely learn a user from their past; it becomes part of the environment through which the user's future is formed."
tags: [recommender-systems, user-modeling, cognitive-science, neuroscience, cybernetics, philosophy, ai]
series: adaptive-intelligence
series_order: 3
---

*Memory, feedback, and the becoming of preference in algorithmic environments*

I spent years studying representations in visual and cognitive neuroscience—asking what patterns of cortical activity reveal about perception, memory, and interpretation. When I later began working on large-scale recommendation and user modeling, I met another object carrying the same word: the **user vector**.

The noun was doing two profoundly different jobs. In neuroscience, observable behavior and neural activity are partial clues to hidden processes—attention, working memory, fatigue, valuation, intention—that run on incompatible clocks and never hold still. In industrial recommendation, a user representation earns its keep through compression: clicks, watches, purchases, skips, searches, and pauses are distilled into coordinates from which a ranking system can score millions of candidates before a screen finishes refreshing.

As an engineering primitive, that compression works minor miracles. Placing the two traditions side by side, however, exposed two silent simplifications built into standard user representations. Even before feedback enters the picture, **observable behavior radically underdetermines inner life**: sequential models—from Wang-Cheng Kang and Julian McAuley's self-attentive recommenders to modern long-context transformers—allow a user state to move through time, yet compressing an action log into next-event prediction still flattens fleeting impulse, automatic habit, reconstructive memory, and reflective commitment onto a single curve. Deeper still, that curve is **causally endogenous to the recommender's own actions**:

`z_(t+1) = f(z_t, a_t, c_t, ε_t)`

Here `z_t` is the person's latent cognitive and motivational state, `c_t` the surrounding life context, `ε_t` everything unmodeled, and `a_t` the platform's own intervention—what it chose to surface, repeat, place at the top of the viewport, or quietly withhold. The trouble with treating a person as a coordinate to be estimated is not that vectors are static; sequential vectors move on every click. The trouble is that an action-blind representation treats human motion as weather observed from outside, when the ranking policy is itself part of the climate driving `z_t` into `z_(t+1)`.

> **A recommender does not merely learn a user from their past; it becomes part of the environment through which the user's future is formed.**

Once we take both facts seriously at once—structured cognition inside the person and closed-loop intervention between system and life—familiar questions of personalization begin to look very different.

---

## What a Log Preserves and a Memory Transforms

Personalized ranking usually starts from an innocently transparent question: *what does this person want?* Classical revealed-preference modeling imagines an invisible ledger of likes and dislikes waiting to be inferred from noisy choices. Stream enough jazz and the posterior tightens around jazz; scroll past baseball often enough and baseball vanishes from retrieval.

Actual human tastes rarely pre-exist their own history in that way. There are novels we love only after learning how to read their sentences, music that sounded impenetrable until an unexpected evening or a patient friend lent us ears for its architecture, and disciplines that felt arid until a threshold of craft made fine distinctions visible. Conversely, every honest interaction history is strewn with outgrown enthusiasms and reflexes that outlived pleasure. Preference is forged through encounter at least as much as it is revealed by it.

Neuroscience makes it hard to speak of "the user's preference" in the singular because the brain itself keeps time on several clocks at once. Selective attention pivots in hundreds of milliseconds; working memory holds an intention for seconds; episodic traces consolidate or fade unevenly across sleep; sensorimotor and digital habits groove themselves over weeks; intellectual projects and personal loyalties mature across decades. When someone taps a thirty-second clip at one in the morning, the recorded event may reflect an enduring curiosity, a flash of boredom, prefrontal exhaustion, a cue-triggered thumb habit, or nothing more than top-of-screen placement. A model can achieve formidable next-click accuracy without having the faintest idea which of those processes moved the finger.

Stretching the context window across years does not erase that gap, because **an interaction log and a human memory belong to different categories of being**. A database remembers by preservation; a mind remembers by transformation—the truth Frederic Bartlett demonstrated nearly a century ago when he showed that human remembering is never literal playback from a warehouse, but an imaginative reconstruction governed by the schemas and concerns of the person remembering today. Suppose a streaming archive retains every track I played over the past ten years. Those ten years do not sit inside me with uniform gravity. Three or four records entered the marrow of how I hear; others belong to seasons of life long closed; some I would recognize within two measures without recalling whose apartment I first heard them in; still others I have simply worn thin. The server holds my transcript; I carry a living, edited past. Long-horizon personalization is therefore less a problem of lossless storage than of inferring what remains cognitively alive in the person standing before the screen today.

Even within a single hour, a person is rarely unanimous. The morning self who sets a monograph beside the desk, the midnight self who reaches for one more glowing reel, and the waking self tomorrow who pays the sleep debt are all genuine expressions of one life. Philosophy has a precise name for what separates them: Harry Frankfurt argued that personhood turns on the gap between *first-order desires*—the immediate pull to click, watch, or consume—and *second-order volitions*, our reflective care about *which* desires we want to govern our conduct. Collapsing a person into immediate revealed choice mistakes impulse for endorsement; having an opaque platform override immediate choice in the name of "true welfare" slides straight into paternalism. Any serious model of preference has to reckon with minds that are plural, temporal, and capable of arguing with themselves.

---

## When the Telescope Enters the Sky

So far, the difficulty is epistemic: inner states are layered and hard to read from surface traces. Recommender systems add a second, causal entanglement by changing the phenomenon under observation.

Imagine someone whose listening history contains not a single jazz recording. From logged behavior alone, that silence is maximally ambiguous: it could mean settled distaste, latent affinity that never met an opening, or simple unfamiliarity with the grammar of harmonic improvisation. Suppose the recommender ventures an accessible piano trio on a quiet evening. Something catches; the listener returns three nights later, begins telling billowed brushwork from crisp ride cymbal, follows a bassist across sessions, and twelve months later listens to jazz four nights a week. Asking whether the system *uncovered* an existing preference or *manufactured* an artificial one misses what happened between them: exposure supplied the scaffold through which an unarticulated capacity became an owned taste.

A recommender is therefore never a neutral telescope aimed at a pre-existing sky of desires. As I argued in [*When the World Pushes Back*](/blog/when-the-world-pushes-back/), prediction surrenders causal innocence the moment its outputs re-enter the world as future inputs. In digital media, the loop is a duet of **co-adaptation** between two plastic learners. While gradient updates revise the platform's portrait of the user, seasoned users cultivate a folk theory of the algorithm—hesitating to open a stray link lest next week's feed drown in imitations, or deliberately searching three clean examples in a row to steer retrieval back on course. Neither side moves in a vacuum.

Social theorists have long called classifications that remake their subjects *performative*, and recent machine learning has given key pieces of that loop formal teeth: Juan Perdomo and colleagues analyzed *performative prediction* when deployed models shift their own future data distributions; Allison Chaney, Brandon Stewart, and Barbara Engelhardt showed how recommendation-confounded logs narrow exposure and erode utility; Micah Carroll and collaborators examined how algorithmically induced shifts in user behavior might be estimated and penalized.

Yet fitting a dynamical trajectory still leaves a hard causal identification problem intact. Return to our listener whose jazz plays climb steadily over a year of jazz recommendations. That identical behavioral curve is compatible with at least five distinct inner stories:

1. **Prior latent affinity**—the taste was already waiting and lacked only an open door;
2. **Salience and frictionless convenience**—repeated top-slot placement lowered effort without shifting underlying valuation;
3. **Perceptual competence**—listening built the auditory schemas needed to hear structure where earlier there was noise;
4. **Unendorsed habit formation**—cue-driven repetition locked in a routine the listener neither reflects upon nor especially prizes;
5. **Endorsed valuation shift**—the person's reflective sense of what matters genuinely widened.

> **Dynamics are not identification. A sequential model can predict how a person's behavior bends while remaining blind to what bent it.**

No matter how deep the transformer, passive sequence modeling on confounded logs cannot disentangle those five stories on its own, because `a_t` simultaneously chooses what gets observed and pushes `z_t` toward `z_(t+1)`.

---

## The Bookshelf That Reshuffles Overnight

Every recommender builds an architecture of attention. Because waking hours are finite, candidates withheld from view rarely enter deliberation, while candidates surfaced again and again acquire familiarity and ease before conscious judgment even begins. Writing reorganized biological memory; printed maps reorganized spatial orientation; search engines redrew the border between knowing and looking up. Algorithmic feeds take a subtler step: **they rebuild the room overnight around yesterday's footsteps**. A wooden bookshelf in a study does not rearrange its spines while we sleep because our hand lingered on one jacket; a neighborhood street does not brick over adjacent storefronts because we turned left twice last Tuesday. An adaptive feed performs something close to that renovation on every pull-to-refresh, binding person and ranker into a single cognitive ecology.

Critics often picture that loop solely as a narrowing tunnel, yet the exact same coupling can widen a life permanently—handing someone an unfamiliar poet, a regional kitchen, a branch of geometry, or a chamber repertoire they did not yet possess the words to seek. That generative possibility is why the philosophical language of **becoming** reaches deeper than static preference satisfaction. Beyond asking where a user sits today, or where inertia carries them tonight, lies the question of which future selves remain reachable—and whose hand rests on the tiller.

Preserving that openness has very little to do with sprinkling random topical noise into a feed. Suppose someone forms a deliberate resolution to spend six months immersed in J. S. Bach's keyboard music. A system worthy of that commitment ought to grow *narrower and deeper*, surfacing rival interpretations of the partitas, essays on counterpoint, and historical instruments rather than breaking concentration with viral distractions. What matters normatively is **second-order agency over the trajectory**: the ability to name a sustained project, mark a late-night detour as disposable, inspect and amend what the system has inferred, or step cleanly out of a self-reinforcing rut. Machine learning usually justifies exploration through the *model's* uncertainty about the user; in a human life, exploration matters just as much because none of us starts out knowing our own unrealized capacities.

> **A system can grow remarkably accurate at predicting who the user is tonight while making it harder for the person to author who they become next year.**

Why do standard industrial patches—reinforcement learning for long-term value, diversity penalties, and item-level "not interested" buttons—keep falling short of that mark? Two structural asymmetries stand in the way:

- **Horizon and signal-to-noise asymmetry.** Clicks, completions, and dwell seconds pour in by the billion with crisp, low-variance gradients, whereas cultivated judgment, quiet gratitude, or retrospective regret ripens over seasons and leaves faint telemetry. Under noisy long-horizon credit assignment, policies rewarded for cumulative return struggle to tell enduring enrichment from a high-retention compulsion loop: inside engagement logs, devotion and capture wear nearly identical masks.
- **Point-level vetoes versus trajectory-level steering.** Almost every control offered to users acts on isolated points in item space—hiding post #4,812, muting one channel, tapping thumbs-down—whereas human self-governance acts over policies, moods, and stretches of time. People rarely want to play whack-a-mole with individual recommendations; they want leverage over `a_t` itself, whether to sustain a chosen apprenticeship across autumn or to tell the feed not to press on midnight fatigue.

---

## A Cognitive Dynamics for Human Use

In [*Where the Loop Closes*](/blog/where-the-loop-closes/), I argued that our models of mind must match the smallest causal boundary whose accounting holds under intervention. Brought home to personalization, that principle points toward **a cognitive dynamical model of the user**—not painting psychological words onto opaque embedding axes, but organizing state estimation around latent processes that move on different clocks and answer differently when `a_t` changes:

1. **Availability and exposure salience**—short-lived prominence driven directly by what `a_t` places in view;
2. **Perceptual familiarity and domain competence**—slower structural learning through which complex idioms become legible;
3. **Fast reactive drives and habits**—state-dependent pulls sensitive to hour of night, cognitive depletion, and repeated cues;
4. **Reflective, endorsed commitments**—durable valuations and chosen projects the person stands behind in clear daylight.

Once separated conceptually, those four layers stop being armchair philosophy and acquire distinct **interventional signatures**. Randomized exposure holdouts and scoring on shared, policy-independent candidate pools separate sheer screen availability from internalized interest. Temporary withdrawal of recommendation pressure measures hysteresis: clicking driven by top-slot convenience evaporates as soon as slotting stops, whereas earned competence and genuine taste persist and spark self-initiated search. Delayed retrospective check-ins and lightweight intent controls expose the gulf between midnight compulsion and next-morning endorsement.

<div class="living-plate" data-living-plate="performative-trajectory">
  <noscript><p><em>Interactive Plate III: Performative user-recommender phase portrait and policy withdrawal (holdout) hysteresis test.</em></p></noscript>
</div>

Seen in this light, Norbert Wiener's question from [*When the World Pushes Back*](/blog/when-the-world-pushes-back/)—**Whose `J`?**—lands squarely on the desk of everyone who builds adaptive media. Optimizing raw behavioral volume treats human neuroplasticity as a standing reserve for metric extraction. Designing for what Wiener called **the human use of human beings** treats predictive accuracy as a subordinate instrument inside a respectful relationship: helping people carry out projects they endorse, stumble upon capacities they could not yet name, and revise how their digital environment adapts to them without wrestling an invisible adversary.

---

## The User Is an Open Trajectory

Distilling behavioral history into dense vectors will remain essential wherever millions of possibilities must be filtered in milliseconds. Every mathematical compression, however, tempts us to mistake what was convenient to compute for the nature of the thing compressed—and what standard user embeddings most quietly erase is **how movement through preference space is authored**.

Human beings remember by reconstruction, outgrow earlier appetites, argue with their own impulses, and learn new ways of seeing and hearing—increasingly inside algorithmic rooms that remodel themselves around the very steps they invite. Neither an isolated user vector nor an isolated ranking network is the real unit of personalization; the unit is the trajectory they bring into being together:

`user history → policy action → lived experience → updated memory and state`

A person is neither a fixed coordinate waiting to be triangulated nor an exogenous time series waiting to be forecast. **The user is an open, self-interpreting trajectory—and the recommender is now one of the forces acting upon it.** Modeling that force truthfully means refusing to confuse predicting behavioral drift with understanding why a mind changed; building responsibly means keeping authorship of where the path leads in the hands of the person walking it.

---

## References and further reading

- Bartlett, F. C. (1932). *Remembering: A Study in Experimental and Social Psychology*. Cambridge University Press.
- Carroll, M. D., Dragan, A., Russell, S., & Hadfield-Menell, D. (2022). [Estimating and Penalizing Induced Preference Shifts in Recommender Systems](https://proceedings.mlr.press/v162/carroll22a.html). *Proceedings of the 39th International Conference on Machine Learning*, PMLR 162, 2686–2708.
- Chaney, A. J. B., Stewart, B. M., & Engelhardt, B. E. (2018). [How Algorithmic Confounding in Recommendation Systems Increases Homogeneity and Decreases Utility](https://doi.org/10.1145/3240323.3240370). *Proceedings of the 12th ACM Conference on Recommender Systems*.
- Frankfurt, H. G. (1971). [Freedom of the will and the concept of a person](https://doi.org/10.2307/2024717). *The Journal of Philosophy, 68*(1), 5–20.
- Kang, W.-C., & McAuley, J. (2018). [Self-Attentive Sequential Recommendation](https://doi.org/10.1109/ICDM.2018.00035). *2018 IEEE International Conference on Data Mining (ICDM)*, 197–206.
- Perdomo, J., Zrnic, T., Mendler-Dünner, C., & Hardt, M. (2020). [Performative Prediction](https://proceedings.mlr.press/v119/perdomo20a.html). *Proceedings of the 37th International Conference on Machine Learning*, PMLR 119, 7599–7609.
- Wiener, N. (1950/1954). [*The Human Use of Human Beings: Cybernetics and Society*](https://openlibrary.org/works/OL4307570W/The_Human_Use_of_Human_Beings). Revised edition, 1954.
