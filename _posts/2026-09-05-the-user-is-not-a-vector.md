---
title: "The User Is Not a Vector"
date: 2026-09-05 16:37:00 -0500
summary: "A recommender does not merely learn a user from their past; it becomes part of the environment through which the user's future is formed."
tags: [recommender-systems, user-modeling, cognitive-science, neuroscience, cybernetics, philosophy, ai]
---

*On recommendation and the becoming of preference*

Recommender systems begin with an apparently simple question:

**What does this person want?**

It is a practical question. We ask it when choosing a song, a film, a restaurant, a product, a piece of news, or the next video to place in front of someone.

Modern machine learning has become remarkably good at answering it.

Given enough traces of behavior—clicks, watches, purchases, skips, searches, pauses—a system can construct a representation of a user and predict what they are likely to do next. The representation may be extraordinarily sophisticated, but conceptually it is often still something like a point in a space: a compressed summary of what this person appears to prefer.

This idea has been immensely successful.

It also conceals a philosophical assumption.

It assumes that behind behavior there is something relatively stable called **the user**: a set of preferences that already exists, waiting to be inferred.

The system's task is then epistemic. Observe enough behavior, reduce uncertainty, and eventually discover what was there all along.

But is that what a person is?

Do we possess preferences in the way an object possesses properties?

Or are preferences themselves things that emerge, disappear, strengthen, weaken, and transform through experience?

The distinction matters because a recommender does not merely observe a person from the outside.

It participates in that person's experience.

> **A recommender does not merely learn a user from their past; it becomes part of the environment through which the user's future is formed.**

And once this is recognized, the problem of recommendation changes completely.

The question is no longer simply:

> What does this user like?

It becomes:

> **What kind of person is being formed through this interaction?**

---

## Preference Is Not a Hidden Object

There is a seductive picture of preference in which every person carries around an invisible catalogue of likes and dislikes.

The catalogue may be incomplete from the perspective of the recommender, but it is complete in the person.

The system simply has to reveal it.

If I repeatedly listen to jazz, perhaps the system concludes that I like jazz.

If I repeatedly ignore baseball, perhaps it concludes that I do not care about baseball.

The better the model becomes, the closer it comes to the true underlying preference.

But ordinary experience suggests that preference does not work this way.

There are books we learned to love only after learning how to read them.

Music that initially sounded strange and later became indispensable.

Foods we disliked as children and sought out as adults.

Subjects that meant nothing to us until a teacher, a friend, or an accidental encounter gave us a way into them.

There are also things we once loved and can no longer tolerate.

Interests that burned intensely for six months and disappeared.

Habits that continued long after enjoyment had gone.

Preferences that existed because a particular group of friends existed.

Choices that made sense only in a particular city, at a particular age, in a particular state of mind.

What, then, is the “true preference” underneath all of this?

Perhaps there is no timeless answer.

Perhaps preference is less like a hidden attribute and more like a **state of an evolving system**.

We do not simply reveal what we want.

We learn what to want.

We acquire the categories through which wanting becomes possible.

We encounter possibilities.

We remember some of them.

We forget others.

We become familiar.

We become bored.

We acquire expertise.

We reinterpret earlier experiences in light of later ones.

Preference is therefore not only something expressed through behavior.

It is something produced through a history.

---

## A Person Exists in Time

This may be the most important thing that a static user representation forgets.

A person exists in time.

Not merely in the trivial sense that behavior occurs in sequence, but in the deeper sense that the person at one moment is not entirely the same person at another.

Some parts of us are remarkably stable.

Others change in minutes.

A lifelong taste in music can coexist with a temporary desire for silence.

A stable political belief can coexist with momentary anger.

A long-term goal can coexist with an impulse that contradicts it.

Curiosity can appear and disappear within seconds.

Fatigue can temporarily make something attractive that normally would not be.

The person is therefore not one preference system operating at one timescale.

We are an accumulation of processes unfolding at different speeds.

This is familiar to neuroscience.

Attention moves quickly.

Working memory persists briefly.

Episodes are formed and forgotten.

Habits accumulate slowly.

Knowledge consolidates over years.

Even the sense of who we are emerges from processes with different temporal depths.

This suggests that asking for “the user's preference” may already be the wrong level of description.

A better question might be:

> **Which part of this person is speaking through this action, and on what timescale?**

When someone clicks on a video late at night, is that an expression of a durable interest?

A temporary curiosity?

A habit?

Boredom?

Fatigue?

The desire for stimulation?

An accident of what happened to appear on the screen?

The observable action alone cannot answer this.

And yet systems are constantly required to infer enduring things about people from transient events.

---

## History Is Not Memory

Machine learning systems increasingly remember enormous amounts of behavioral history.

There is a natural temptation to think that the more history a model can process, the better it understands the person.

But a person's history and a person's memory are not the same thing.

A database remembers by preservation.

Humans remember by transformation.

We forget.

We compress.

We reconstruct.

Some experiences become stories.

Some become habits.

Some become knowledge without retaining the episode that created them.

Some disappear almost entirely, only to return when a smell, a place, a song, or a person restores the appropriate context.

The past does not sit behind us as an immutable sequence.

It is continually reorganized by the present.

This means that two histories containing the same events need not produce the same person.

What matters is not only what happened.

It is what was retained, what was forgotten, what was interpreted as important, and how later events changed the meaning of earlier ones.

A recommender system can have access to every song I played during the past decade.

But that does not mean that all ten years of listening exist equally in my present experience.

Some songs have become part of who I am.

Some are associated with periods of life that have ended.

Some I no longer remember.

Some I would immediately recognize without remembering when I first heard them.

Some I have heard too many times.

The system possesses my history.

I possess something stranger: a memory.

The difference is philosophically important.

Because once recommendation becomes sensitive not merely to what happened but to **what remains alive in the person**, personalization begins to look less like information retrieval and more like a theory of mind.

---

## To Predict a Person Is Not Yet to Understand Them

Suppose a system can predict with extraordinary accuracy what I will click next.

Does it understand me?

Not necessarily.

Prediction and explanation are different achievements.

A model may learn that after a certain sequence of videos I am highly likely to watch another one of the same kind.

But this tells us little about whether I am watching because I enjoy them, because I am bored, because they have become habitual, or because the system has gradually narrowed the alternatives visible to me.

The prediction can be correct while the implied theory of the person is wrong.

For immediate recommendation, perhaps this distinction does not matter.

But the moment we care about anything beyond the next action, it becomes unavoidable.

Suppose two people both watch a video for forty minutes.

One finishes satisfied.

The other regrets having spent the time.

From the perspective of observable behavior, they may be almost indistinguishable.

From the perspective of their experience, they are not.

The same problem appears everywhere.

A purchase is not necessarily satisfaction.

A click is not necessarily interest.

A long session is not necessarily well-being.

A return is not necessarily endorsement.

Behavior is evidence.

It is not the thing itself.

And this leads to a deeper problem.

Even the person may not contain one single, stable answer about what they wanted.

---

## Which Self Is the User?

Human beings have an inconvenient property: we disagree with ourselves.

The person who chooses something now may later wish they had not chosen it.

The person who makes a plan in the morning may be overruled by the person who reaches midnight.

We want to exercise and want to stay in bed.

We want to read and want to scroll.

We want to save money and want to buy something.

We want another episode and want to go to sleep.

Which of these is the real preference?

There may be no single correct answer.

The immediate self is real.

The reflective self is also real.

The future self who bears the consequences is real too.

This complicates the usual idea that recommendation means “giving users what they want.”

Which user?

The one acting now?

The one who later evaluates the experience?

The one who previously stated a goal?

The one they hope to become?

Once posed this way, recommendation becomes entangled with an old philosophical problem: the unity of the self across time.

A platform can optimize for the choices that people make.

But choices alone do not settle questions of value.

A system could become exceptionally good at predicting and satisfying momentary desire while systematically undermining intentions that exist at longer timescales.

At the same time, the opposite solution is deeply troubling.

A machine should not simply declare that it knows our “true” interests better than we do.

That path turns personalization into paternalism.

The challenge, then, is not merely to discover preference.

It is to respect the fact that human preference is plural, temporal, and sometimes internally conflicted.

---

## The Most Important Fact: Recommendation Changes the User

So far we have considered the user as something difficult to observe.

But recommender systems create an even deeper problem.

They change what they are trying to observe.

Imagine someone who has never listened to jazz.

The absence of jazz in their history tells us almost nothing.

Perhaps they would dislike it.

Perhaps they would love it.

Perhaps they do not yet possess the familiarity required to hear what an experienced listener hears.

Then the system recommends a piece.

Something changes.

The user now knows that this music exists.

Perhaps they listen again.

Familiarity grows.

Certain distinctions become audible.

A genre that once appeared as an undifferentiated category begins to acquire internal structure.

Artists become recognizable.

Preferences begin to form.

After a year, the system observes that this person likes jazz.

But what exactly happened?

Did the system discover a preference that had always existed?

Or did the interaction help create one?

The most plausible answer is often: both.

And this changes the conceptual status of recommendation.

A recommender is not merely a telescope pointed at the user's preferences.

It is part of the environment through which preferences develop.

The music feed participates in musical taste.

The news feed participates in political attention.

The shopping feed participates in desire.

The video feed participates in boredom, habit, novelty, and expectations about stimulation.

The system does not stand outside the person and measure them.

It enters the causal history of the person it will later measure.

This is the point at which recommendation becomes a problem of dynamics.

---

## The Observer Enters the System

There is an old lesson in cybernetics: once an observer acts on the system being observed, the boundary between observation and control begins to dissolve.

A recommender observes behavior.

From that behavior, it forms an idea of the user.

On the basis of that idea, it selects what the user will see.

What the user sees affects what they experience.

Experience changes future behavior.

That behavior is then used to update the model.

Around the loop we go.

The remarkable thing is that each side is adapting to the other.

The machine learns the person.

The person learns the machine.

Anyone who has used a recommender system for long enough recognizes this second process.

We learn what the system rewards.

We learn how to search within it.

We learn that watching one video may fill the feed with similar videos.

We sometimes deliberately avoid clicking something because we do not want to “teach the algorithm.”

We sometimes search for several examples because we do want to teach it.

We learn what kind of world the system is likely to show us.

In other words, the recommender maintains a model of the user while the user gradually develops a model of the recommender.

Two adaptive systems are observing and modifying one another.

This is not ordinary personalization.

It is co-adaptation.

And once we understand recommendation this way, the idea of a fixed user becomes increasingly difficult to defend.

The user at time t+1 is partly a consequence of the recommendations made at time t.

The recommender at time t+1 is partly a consequence of the user's response at time t.

Neither side has an independent trajectory.

What exists is a coupled process.

---

## The Strange Circularity of Personalization

This produces a strange circularity.

The system recommends something because it believes I like it.

I encounter it more often because the system recommends it.

I become more likely to choose it because it has become familiar.

The system then interprets my increased choice as stronger evidence that I liked it all along.

There is no need to imagine sinister manipulation for this to happen.

It follows naturally from feedback.

Prediction alters exposure.

Exposure alters behavior.

Behavior confirms prediction.

Over time, a possibility can become a pattern, and a pattern can become something that looks like preference.

This does not mean that personalization is necessarily narrowing.

The same loop can open possibilities.

A recommendation can introduce an artist, a cuisine, a scientific field, a writer, or an idea that permanently expands someone's world.

A system can discover latent compatibility before the person themselves is capable of articulating it.

The important point is simply this:

> **Recommendation is productive as well as predictive.**

It does not only select among existing desires.

It participates in the production of future desire.

That is why the ethics of recommendation cannot be reduced to whether each individual recommendation is relevant.

The more interesting question concerns trajectories.

What kinds of preferences does the system make easier to develop?

Which become difficult?

What kinds of curiosity does it reward?

What habits stabilize?

What possibilities disappear because they are never shown?

What forms of attention are cultivated?

What forms are exhausted?

A single recommendation may be trivial.

A million recommendations constitute an environment.

---

## From Preference to Becoming

This suggests that we should replace the language of preference with something broader.

A human being is not merely a bundle of wants.

A person is becoming something.

We acquire knowledge.

We form tastes.

We lose interests.

We gain and abandon aspirations.

We learn to recognize distinctions that were once invisible to us.

We become capable of enjoying things that earlier versions of ourselves could not enjoy.

We also become habituated, distracted, impatient, or indifferent.

The interesting object is therefore not simply the user's current state.

It is the **trajectory of transformation**.

The difference is subtle but profound.

A preference model asks:

> Where is the user now?

A dynamical view asks:

> Where are they going?

A richer view asks:

> What kinds of future remain possible from here?

This last question may be especially important.

A healthy relationship with recommendation might not be one in which the system perfectly converges on a narrow model of who a user already appears to be.

Perhaps it should preserve some openness.

Some uncertainty.

Some room for surprise.

Some possibility that the person tomorrow will not simply be an increasingly predictable version of the person today.

In this sense, diversity and serendipity take on a meaning deeper than product metrics.

They preserve the possibility of becoming otherwise.

---

## Discovery Is Not Noise

From the perspective of prediction, surprising behavior is often a problem.

It is an error.

The user did something inconsistent with the model.

But from the perspective of a changing person, surprise can be exactly where something important happens.

Someone listens to a genre they have never explored.

Reads outside their political or intellectual comfort zone.

Develops an unexpected hobby.

Discovers a field.

Changes their mind.

These events are difficult for systems precisely because the past does not fully determine them.

Yet they may be among the most consequential moments in a person's history.

There is therefore a tension at the heart of personalization.

The better a system becomes at predicting what a person already tends to do, the easier it becomes to organize the environment around that prediction.

But a perfectly predictable environment may reduce the encounters through which new preferences emerge.

The system can become very good at knowing the current user while becoming worse at allowing the future user to appear.

This is why exploration is philosophically interesting.

It is not only something the machine does to reduce its own uncertainty.

Humans also require exploration because we are uncertain about ourselves.

We cannot know whether we love something we have never encountered.

We cannot choose from possibilities we do not know exist.

Sometimes the role of recommendation is therefore not to satisfy preference.

It is to make preference possible.

---

## Memory, Attention, and the Construction of a World

Every recommender system implicitly constructs a world.

Not the whole world.

A selection.

A sequence.

A local environment of things deemed worth placing before someone.

This selection matters because human attention is finite.

What is not shown may never become an object of thought.

What is shown repeatedly can acquire salience merely through familiarity.

The system therefore operates before preference in an important sense.

It influences what becomes available to be preferred.

This echoes a deeper idea in cognitive science.

We do not experience reality as a complete inventory from which we neutrally choose.

Perception and attention construct a tractable world from overwhelming possibility.

Memory does the same to the past.

Attention selects from the present.

Memory selects from what has happened.

Expectation selects from possible futures.

Together they form the experienced world within which choice occurs.

Recommender systems increasingly participate in all three.

They determine what appears now.

They retrieve things from our past.

They anticipate what we may want next.

They are, in this limited but consequential sense, becoming external components of attention and memory.

That does not mean they function like the brain.

The analogy is not anatomical.

It is ecological.

They have become part of the cognitive environment within which human cognition operates.

---

## A New Kind of Cognitive Environment

Tools have always altered thought.

Writing changed memory.

Maps changed navigation.

Search engines changed the relationship between knowing and retrieving.

Calculators changed arithmetic practice.

The recommender system represents another step in this history.

Its distinctive feature is that it is not merely passive infrastructure.

It observes us continuously and changes its behavior in response.

The environment itself adapts.

A bookshelf does not rearrange itself according to which book we looked at yesterday.

A city street does not ordinarily rebuild itself around the places we visited last week.

But a digital feed does something close to this continuously.

The environment becomes personalized to the history of the person moving through it.

This produces an unprecedented feedback structure:

> we act in an environment that changes because of our actions, and then those environmental changes alter the actions available to us.

The result is neither simply human cognition nor simply machine intelligence.

It is a human–machine cognitive ecology.

Understanding the user therefore eventually requires understanding the environment that is learning the user.

---

## The User Is Not Outside the Model

There is another philosophical temptation hidden in the phrase “user model.”

It suggests that the model exists on one side and the real user on the other.

The system constructs an approximation.

The approximation becomes more accurate.

Ideally, the model converges toward the person.

But in an adaptive recommender, the relation is stranger.

The representation the machine constructs can influence how the person is treated.

How the person is treated influences what opportunities and experiences they encounter.

Those experiences can influence who the person becomes.

The model can therefore contribute to making its own description true.

Someone categorized as interested in a topic is shown more of it.

Someone shown more of it becomes more familiar with it.

Greater familiarity changes future interaction.

Future interaction strengthens the category.

This is a mild version of a phenomenon familiar from the social sciences: classifications can become **performative**.

They do not merely describe reality.

They enter into it.

This gives user modeling an unusual responsibility.

An error is not always merely an inaccurate prediction.

Repeated errors can alter the environment around the user.

And successful predictions can do the same.

The distinction between describing a person and constructing the conditions under which that person acts becomes blurry.

---

## What Does It Mean to Know a User?

Perhaps we can now return to the original ambition of personalization.

What would it mean for a machine to truly “know” a user?

Knowing everything they clicked would not be enough.

Predicting their next click would not be enough.

Even correctly describing their current tastes might not be enough.

To know a person dynamically would require some understanding of:

what persists and what is temporary;

what they remember and what has faded;

what they seek and what merely captures them;

what they value now and what they may later regret;

what they know they want and what they have not yet learned to want;

how experience changes them;

how their present actions shape their future possibilities.

This begins to sound less like a database record and more like the traditional object of psychology.

The person becomes a temporally extended, adaptive system.

A system with memory.

A system with expectations.

A system capable of learning.

A system capable of reflecting on its own desires.

A system that can resist its habits.

A system that can revise its goals.

A system that is never completely identical to its previous state.

This is what I mean by a **cognitive dynamical system of the user**.

Not a new architecture.

Not a specific mathematical model.

A different ontology.

---

## From Optimization to Relationship

This shift also changes how we might think about the purpose of recommendation.

The language of optimization asks for an objective.

Maximize clicks.

Maximize watch time.

Maximize purchases.

Maximize retention.

Perhaps maximize some richer notion of satisfaction.

But any fixed objective risks treating the person as a means through which a metric is produced.

A more human-centered perspective might begin elsewhere.

The recommender and the user enter into a long-term relationship.

The system repeatedly influences the informational and experiential environment of the person.

The relevant question is therefore not only whether an individual recommendation succeeds.

It is what kind of relationship the repeated interaction creates.

Does the system become better at helping the user articulate and pursue their own intentions?

Does it preserve room for discovery?

Does it recognize when desire is temporary?

Does it allow the user to escape a pattern the system has learned too well?

Does it distinguish familiarity from endorsement?

Does it leave space for a person to surprise the model?

Perhaps the ultimate test of personalization is not whether the system eventually predicts us perfectly.

Perhaps it is whether it remains useful even as we change.

---

## The Human Use of Recommender Systems

Norbert Wiener worried about machines less because they might become independently malevolent than because human beings might specify the wrong goals and then allow machines to pursue them with extraordinary consistency.

The danger was not intelligence alone.

It was purpose without sufficient reflection on purpose.

Recommendation makes this old cybernetic concern unusually concrete.

We now build systems capable of observing human behavior at enormous scale, learning what reliably produces responses, and adapting the environment accordingly.

The technical achievement is remarkable.

But the philosophical question arrives immediately afterward:

**What is the feedback loop for?**

If the answer is simply more behavior, the loop can optimize behavior.

If the answer is more time, the loop can optimize time.

But human purposes are rarely so clean.

We want pleasure and discipline.

Comfort and growth.

Familiarity and surprise.

Efficiency and autonomy.

We want systems to understand us, but not imprison us inside what they have understood.

We want personalization, but also the freedom to become someone the model could not have predicted.

The problem of recommendation is therefore inseparable from a problem of human use.

Not merely:

> How can we make machines better at predicting people?

But:

> **What kind of relationship between people and adaptive machines is worth creating?**

---

## The User Is a Process

The user vector is useful because it makes a person computationally manageable.

But it encourages us to imagine the person as a thing.

A more faithful picture is a process.

The person remembers.

Forgets.

Learns.

Predicts.

Desires.

Regrets.

Forms habits.

Breaks them.

Discovers.

Becomes bored.

Changes context.

Changes interpretation.

Changes themselves.

And increasingly, some of these changes occur inside environments selected by algorithms that are themselves learning from the changes they helped produce.

The real unit of analysis is therefore not the user alone.

Nor the recommender alone.

It is the unfolding interaction between them.

A person enters with a history.

The system responds to that history.

The response becomes an experience.

The experience enters the person's history.

The person changes.

The model changes.

And the loop continues.

Seen this way, recommendation is not simply about finding the correct item for a stable user.

It is about participating, however slightly, in the process through which a person's future preferences become possible.

That is a much larger responsibility.

It is also a much more interesting intellectual problem.

So perhaps the central question of user modeling should no longer be:

> **What does this user like?**

Nor even:

> **What will this user do next?**

But something closer to:

> **Who is this person becoming?**

> **How does experience participate in that becoming?**

> **How does the system participate in the experience?**

> **And how can an intelligent system understand a person without reducing them to the person they have already been?**

The user is not a vector.

The user is not even a state.

The user is a trajectory.

And the deepest problem of recommendation may be learning how to accompany that trajectory without pretending that prediction and understanding are the same thing.
