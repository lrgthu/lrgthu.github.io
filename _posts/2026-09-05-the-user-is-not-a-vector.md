---
title: "The User Is Not a Vector"
date: 2026-09-05 16:37:00 -0500
summary: "A recommender does not merely learn a user from their past; it becomes part of the environment through which the user's future is formed."
tags: [recommender-systems, user-modeling, cognitive-science, neuroscience, cybernetics, philosophy, ai]
---

*A research perspective on recommendation, cognition, and the becoming of preference*

I did not arrive at this view through a grand theory of recommendation. I arrived at it by noticing a mismatch.

In neuroscience and cognitive science, I had learned to treat behavior as evidence about hidden, changing states: attention, memory, intention, value, belief. An action is informative, but it is not the state itself. And the state is rarely fixed; it changes with context, experience, learning, fatigue, memory, and time.

Recommender systems rely on a very different but equally powerful abstraction: the **user representation**. Given enough traces of behavior—clicks, watches, purchases, skips, searches, pauses—we compress a person into something the system can use to predict what comes next.

This abstraction works extraordinarily well. But the more I put these two traditions beside each other, the less comfortable I am treating the user as something static that the model gradually discovers.

Recommender systems begin with an apparently simple question:

**What does this person want?**

Hidden inside that question is an assumption: that there is something relatively stable called *the user's preference*, already present, waiting to be inferred from behavior.

I increasingly think that this is the wrong picture.

People do not merely reveal preferences. They form them. They forget, become familiar, become bored, acquire expertise, change goals, discover new categories, act against their own long-term intentions, and reinterpret the past in light of the present.

Recommendation adds one more complication: the system doing the inference also participates in the experience from which future preferences will be formed.

> **A recommender does not merely learn a user from their past; it becomes part of the environment through which the user's future is formed.**

That sentence is the center of this essay. What follows is not a finished theory, and certainly not a new architecture. It is closer to a research perspective: a way I have been learning to see the problem.

---

## Preference Is Not a Hidden Object

There is a seductive picture of preference in which every person carries around an invisible catalogue of likes and dislikes. The system sees only fragments of it, but with enough data it can recover the underlying truth.

If I repeatedly listen to jazz, the system infers that I like jazz. If I repeatedly ignore baseball, it infers that I probably do not care about baseball. More data promises a more accurate estimate of what was there all along.

I think this picture is useful, but incomplete.

There are books we learned to love only after learning how to read them, music that initially sounded strange and later became indispensable, and subjects that meant nothing to us until a teacher, a friend, or an accidental encounter gave us a way into them. There are also things we once loved and can no longer tolerate: interests that disappeared, habits that outlived enjoyment, preferences that made sense only in a particular place or period of life.

What, then, is the “true preference” underneath all of this?

Perhaps there is no timeless answer.

I find it more natural to think of preference as part of an **evolving state** rather than a hidden attribute. We do not simply reveal what we want. We learn what to want. We acquire the categories through which wanting becomes possible. We encounter possibilities, retain some, forget others, and reinterpret earlier experiences in light of later ones.

Preference is not only expressed through a history. It is partly produced through a history.

That small shift—from *revealed preference* to *formed preference*—changes almost everything else.

---

## A Person Exists in Time

A static user representation also hides something obvious but easy to forget: a person exists in time.

Not merely in the trivial sense that behavior arrives as a sequence, but in the deeper sense that the person at one moment is not entirely the same person at another. A lifelong taste in music can coexist with a temporary desire for silence. A long-term goal can coexist with an impulse that contradicts it. Curiosity, fatigue, boredom, and attention can change within minutes while other parts of us remain stable for years.

This is one place where neuroscience changes how I instinctively look at user modeling.

The brain does not operate on one timescale. Attention moves quickly. Working memory persists briefly. Episodes are formed and forgotten. Habits accumulate slowly. Knowledge consolidates over years. Even the sense of who we are emerges from processes with different temporal depths.

So when a user clicks on a video late at night, the action may reflect a durable interest, a passing curiosity, habit, boredom, fatigue, or simply what happened to appear on the screen. The observation alone cannot tell us.

This makes me suspicious of the phrase “the user's preference” in the singular. There may instead be several processes, moving at different speeds, temporarily producing one action.

---

## History Is Not Memory

This distinction becomes especially clear when we talk about long user histories.

Modern systems can ingest more and more behavioral history. It is tempting to think that a sufficiently long context is simply a better memory of the person.

But a person's history and a person's memory are not the same thing.

A database remembers by preservation. Humans remember by transformation.

We forget, compress, and reconstruct. Some experiences become stories, some become habits, some become knowledge without retaining the episode that created them. Others disappear almost entirely, only to return when the right context restores them.

The past does not sit behind us as an immutable sequence. It is continually reorganized by the present.

A recommender system can have access to every song I played during the past decade. But those ten years do not exist equally in my present experience. Some songs have become part of who I am. Some belong to periods of life that have ended. Some I no longer remember. Some I would recognize immediately without remembering when I first heard them. Some I have simply heard too many times.

The system possesses my history.

I possess something stranger: a memory.

That distinction keeps pulling me back toward cognitive science. Long-history modeling may not ultimately be only a problem of storing more events. It may also be a problem of asking what remains *alive* in the person now.

Cognitive science gives us a rich language for this—episodic and semantic memory, consolidation, reconstruction, retrieval, forgetting. Recommender systems do not need to imitate biological memory literally. But the distinction between **what happened** and **what remains behaviorally available** seems too important to ignore.

---

## Prediction Is Not Yet Understanding

Suppose a system can predict with extraordinary accuracy what I will click next. Does it understand me?

Not necessarily.

A model may correctly predict that after a certain sequence of videos I will watch another one of the same kind while knowing very little about whether I am watching because I enjoy them, because I am bored, because they have become habitual, because I am procrastinating, or because the system has gradually narrowed the alternatives visible to me.

Behavior is evidence. It is not the thing itself.

Human beings complicate the picture further by disagreeing with themselves. The person who chooses something now may later wish they had not chosen it; the person who makes a plan in the morning may be overruled by the person who reaches midnight. We want to read and want to scroll, to save money and buy something, to watch another episode and go to sleep.

I do not think there is always a clean answer to which of these is the “real” preference. The immediate self is real. The reflective self is real. The future self who bears the consequences is real too.

This is why “give users what they want” stops being a simple objective as soon as we take the human side seriously. The opposite move is no better: a system should not simply declare that it knows our “true” interests better than we do. That turns personalization into paternalism.

The problem is not merely that preference is difficult to measure. Preference itself is plural, temporal, and sometimes internally conflicted.

---

## Recommendation Changes the User

Up to this point, the difficulty is mostly epistemic: the user is hard to know.

But recommender systems create a deeper problem. They change what they are trying to know.

Imagine someone who has never listened to jazz. The absence of jazz in their history tells us almost nothing. They may dislike it, love it, or simply lack the familiarity required to hear what an experienced listener hears.

Then the system recommends a piece. The user now knows that this music exists. Perhaps they listen again. Familiarity grows. Distinctions become audible. A genre that once appeared undifferentiated acquires structure. Artists become recognizable. Preferences begin to form.

After a year, the system observes that this person likes jazz. Did it discover a preference that had always existed, or help create one?

Often, both.

This is where the metaphor of recommendation as measurement starts to break down for me.

A recommender is not merely a telescope pointed at the user's preferences. It is part of the environment through which preferences develop. The music feed participates in musical taste. The news feed participates in attention. The shopping feed participates in desire. The video feed participates in boredom, habit, novelty, and expectations about stimulation.

The system does not stand outside the person and measure them. It enters the causal history of the person it will later measure.

That is the moment when user modeling becomes, in my mind, a problem of dynamics.

---

## The Observer Enters the System

This is also where I keep coming back to cybernetics.

Wiener's language of feedback becomes useful here not because recommender systems are simply controllers in some narrow engineering sense, but because feedback changes the object of analysis.

A recommender observes behavior, forms an idea of the user, and selects what the user will see. What the user sees affects what they experience; experience changes future behavior; that behavior updates the model. Around the loop we go.

But the loop is not one-sided. The machine learns the person, and the person learns the machine.

Anyone who has used a recommender system for long enough recognizes this second process. We learn that watching one video may fill the feed with similar videos. We sometimes avoid clicking something because we do not want to “teach the algorithm,” or deliberately search for several examples because we do.

The recommender maintains a model of the user while the user gradually develops a model of the recommender. Two adaptive systems are observing and modifying one another.

I find **co-adaptation** a more illuminating description than personalization alone.

The user tomorrow is partly a consequence of the recommendations made today. The recommender tomorrow is partly a consequence of the user's response today. Neither side has an independent trajectory.

What exists is a coupled process.

---

## The Circularity of Personalization

Once I started thinking in terms of a coupled process, another problem became hard to unsee.

The system recommends something because it believes I like it. I encounter it more often, become more familiar with it, and become more likely to choose it. The system then reads that choice as stronger evidence that I liked it all along.

There is no need to imagine sinister manipulation. This follows naturally from feedback: prediction alters exposure, exposure alters behavior, and behavior confirms prediction. Over time, a possibility can become a pattern, and a pattern can become something that looks like preference.

The idea of **performativity**, familiar from social science, becomes useful here. A classification does not always remain outside the world it describes. Sometimes it changes how the subject is treated, and that treatment helps make the classification more true.

User models can have this property. Someone categorized as interested in a topic is shown more of it; more exposure produces familiarity; familiarity changes future interaction; future interaction strengthens the category.

So an error is not always merely an inaccurate prediction. Repeated errors can alter the environment around the user. Successful predictions can do the same.

The boundary between describing a person and constructing the conditions under which that person acts becomes blurry.

> **Recommendation is productive as well as predictive.**

That is not necessarily a criticism. It is a statement about what kind of system recommendation has become.

---

## The Possibility of Becoming Otherwise

It would be easy to take the previous argument in a purely pessimistic direction: personalization narrows, feedback traps, recommendation manufactures preference.

I do not think that is the whole picture. The same loop can open possibilities.

A recommendation can introduce an artist, a cuisine, a scientific field, a writer, or an idea that permanently expands someone's world. It can bring us into contact with something we could not yet have known to ask for.

This is where I think the language of *becoming* is more useful than the language of preference alone.

A human being is not merely a bundle of wants. A person is becoming something. We acquire knowledge, form tastes, lose interests, gain and abandon aspirations, and learn to recognize distinctions that were once invisible to us. We can also become habituated, distracted, impatient, or indifferent.

The interesting object is therefore not simply the user's current state, but the trajectory of transformation.

A preference model asks where the user is now. A dynamical view asks where they are going. The question I find even more interesting is:

> **What kinds of future remain possible from here?**

A healthy relationship with recommendation may not be one in which the system perfectly converges on a narrow model of who the user already appears to be. Perhaps it should preserve some openness, uncertainty, and room for surprise—some possibility that the person tomorrow will not simply be an increasingly predictable version of the person today.

This is why I have started to think about exploration differently. In machine learning, exploration is often framed as something the system does because *the model* is uncertain about the user. But humans are uncertain about themselves too. We cannot know whether we love something we have never encountered, or choose from possibilities we do not know exist.

Sometimes recommendation does not merely satisfy preference. It makes preference possible.

> **A system can become very good at knowing the current user while becoming worse at allowing the future user to appear.**

I suspect this tension—between knowing someone well and leaving room for them to become otherwise—is one of the deepest problems in personalization.

---

## The Recommender as Cognitive Environment

This leads me to a broader way of thinking about recommender systems.

Every recommender implicitly constructs a world: a selection, a sequence, a local environment of things deemed worth placing before someone.

This matters because human attention is finite. What is not shown may never become an object of thought. What is shown repeatedly can acquire salience simply through familiarity. The recommender therefore often operates *before* preference: it influences what becomes available to be preferred.

Cognitive science has long treated perception, attention, memory, and expectation as selective processes. We do not experience reality as a complete inventory from which we neutrally choose. Attention selects from the present, memory from what has happened, expectation from possible futures.

Recommender systems increasingly participate in all three. They determine what appears now, retrieve things from our past, and anticipate what we may want next.

I do not mean that recommenders literally function like parts of the brain. The analogy I care about is not anatomical. It is ecological.

Tools have always altered cognition. Writing changed memory. Maps changed navigation. Search engines changed the relationship between knowing and retrieving. Recommenders add something distinctive: the environment itself adapts to the person moving through it.

A bookshelf does not rearrange itself according to which book we looked at yesterday. A city street does not rebuild itself around the places we visited last week. A digital feed does something close to this continuously.

We act in an environment that changes because of our actions, and those environmental changes alter the actions available to us.

The result is neither simply human cognition nor simply machine intelligence. It is a human–machine cognitive ecology.

> **A single recommendation may be trivial. A million recommendations constitute an environment.**

Once I see recommendation this way, “user modeling” no longer feels like a problem that can be separated cleanly from the environment doing the modeling.

---

## What I Mean by a Cognitive Dynamical System of the User

At this point, I need a name for the object I have been circling around. The phrase I currently find most useful is **a cognitive dynamical system of the user**.

I do not mean this as a proposal for a specific architecture. I mean it as an ontology.

The user is a temporally extended, adaptive system. Some states persist; others disappear quickly. Memory makes parts of the past available and lets others fade. Current behavior reflects goals, habits, attention, context, knowledge, and momentary conditions. Experience changes future state. The environment is part of that experience. The recommender is part of that environment.

This view is assembled from several traditions: state-space thinking in neuroscience, computational models of learning and decision-making, work on multiple memory systems, behavioral economics, causal inference, reinforcement learning, and cybernetics. None gives us a unified theory of the user, but together they make different pieces of the same object visible.

The point is not to import every cognitive concept into recommendation, or to label arbitrary latent dimensions “memory,” “belief,” or “goal” and declare the model cognitive.

The point is more modest and, I think, more consequential:

> **Treat the user as something that has state, history, memory, agency, and dynamics—not simply as a target distribution to be estimated.**

That change in viewpoint is enough to generate a different set of research questions.

---

## The Human Use of Recommender Systems

Once recommendation is part of the dynamics, optimization begins to look incomplete as a language for the problem.

Optimization asks for an objective: clicks, watch time, purchases, retention, perhaps some richer notion of satisfaction. But if the system helps shape the state from which future behavior emerges, the question is not only whether the next recommendation succeeds. It is what kind of relationship the repeated interaction creates.

A good system might help users articulate and pursue their own intentions, preserve room for discovery, recognize when desire is temporary, and allow users to escape patterns the system has learned too well. Perhaps the ultimate test of personalization is not whether the system eventually predicts us perfectly, but whether it remains useful even as we change.

This is where Wiener becomes more than historical decoration for me.

His recurring concern was not simply that machines might become powerful. It was that humans might specify purposes poorly and then build systems extremely capable of pursuing them.

The danger was not intelligence alone. It was purpose without sufficient reflection on purpose.

Recommendation makes that old cybernetic concern unusually concrete. We now build systems capable of observing human behavior at enormous scale, learning what reliably produces responses, and adapting the environment accordingly.

The technical achievement is remarkable. But the philosophical question arrives immediately afterward:

**What is the feedback loop for?**

If the answer is more behavior, the loop can optimize behavior. If the answer is more time, it can optimize time. Human purposes are rarely so clean: we want pleasure and discipline, comfort and growth, familiarity and surprise, efficiency and autonomy. We want systems to understand us, but not imprison us inside what they have understood.

This is why I no longer see recommendation as only a problem of better prediction. It is also a problem of human use.

---

## The User Is a Process

I started with a familiar abstraction: the user as a representation built from past behavior.

I still think that abstraction is useful. It is powerful precisely because it compresses. But every abstraction teaches us to ignore something, and what the user vector most tempts us to ignore is time—and with it, change.

A person remembers, forgets, learns, predicts, desires, regrets, forms habits, breaks them, discovers, becomes bored, changes context, changes interpretation, changes themselves. Increasingly, some of those changes occur inside environments selected by algorithms that are themselves learning from the changes they helped produce.

The real unit of analysis is therefore not the user alone, nor the recommender alone. It is the unfolding interaction between them.

A person enters with a history. The system responds to that history. The response becomes an experience. The experience enters the person's history. The person changes. The model changes. And the loop continues.

Seen this way, recommendation is not simply about finding the right item for a stable user. It is about participating, however slightly, in the process through which future preferences become possible.

That changes the questions I find most interesting—not only what the user likes or what they will do next, but:

> **Who is this person becoming? What experiences make different futures possible? And what role does the recommender play in keeping some of those futures open while making others more likely?**

The user is not a vector.

The user is not even a state.

**The user is a trajectory.**

And once a recommender becomes part of the environment through which that trajectory unfolds, prediction is no longer the whole problem.

The deeper question is what kinds of futures our predictions help make possible.