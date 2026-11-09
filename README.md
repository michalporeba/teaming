# Team Programming Workshops

A starting framework for developing better teams through collaborative programming, shared AI assistance, problem ownership, and leadership.

This repository will grow into detailed workshop descriptions, exercises, facilitator instructions, and materials for training other people to run these sessions. The first step is to pilot the workshops with existing teams, learn from their experience, and refine the approach before scaling facilitation.

**Status:** working proposal, not a finished curriculum. The original non-AI workshops have been used successfully by their facilitator over several years. The AI adaptations, simulations, and leadership level described here still need to be tested. No simulator implementation is included yet.

## Guiding idea

Keep a progressive workshop structure, but change what becomes difficult:

1. Coordinating people.
2. Directing AI together while retaining understanding.
3. Sustaining collaboration under pressure.
4. Owning decisions under uncertainty.
5. Coordinating several teams without centralizing their thinking.

AI does not remove the need for team programming. It changes the emphasis from producing code together to jointly understanding the problem, choosing solutions, directing implementation, and evaluating evidence.

The workshops should help participants move beyond dependence on a particular person at the keyboard, then beyond dependence on a particular team leader.

> If the person at the keyboard, the AI conversation, or the lead disappeared now, what would the rest of us still understand and be able to change?

## Goals and principles

See [OUTCOMES.md](OUTCOMES.md) for the intended lasting capabilities and observable evidence of progress.

- Build shared problem ownership, not just shared access to generated code.
- Make participation, understanding, and decision-making visible.
- Use test-first development and small feedback loops to explore behavior.
- Distinguish agreed requirements from assumptions and generated suggestions.
- Let people experience contrasting approaches before discussing them.
- Preserve kindness, consideration, and respect during competition and disruption.
- Treat AI as an implementation and investigation tool, not the owner of decisions.
- Measure success through the team's ability to explain, challenge, change, and hand over its solution, not merely finish a challenge.

Passing tests provide useful evidence, but do not prove that the team chose the right behavior or considered every important requirement.

> Reviewing generated output does not necessarily reveal options or requirements that were never considered.

## Programme overview

These are suggested standalone workshop lengths, including discussion and breaks. They are starting points for pilots, not fixed requirements.

| Level | Working title | Central question | AI policy | Suggested length |
| --- | --- | --- | --- | --- |
| 1 | Foundations of team programming | Can we think together and move ideas between people? | No AI, including autocomplete | 3 hours |
| 2 | Team programming with one shared AI | Can we retain understanding and ownership when AI implements? | One shared coding agent; bounded changes | 3 hours |
| 3 | Collaborative delivery under pressure | Can we preserve inclusion, continuity, and good decisions under disruption? | One shared coding agent per team; rotating contribution roles | 3-4 hours |
| 4 | Team problem-solving masterclass | Can we discover the right problem and justify a solution outside our expertise? | Shared agent may investigate and implement; humans own assumptions and evidence | Half day |
| 5 | Leading collaborative delivery | Can we coordinate several teams without becoming their decision bottleneck? | Separate team sessions, each with a shared coding agent | Half day initially; review after pilots |

The levels are learning contexts, not a ranking of people's worth or job titles. Level 4 should welcome business analysts and other domain-oriented participants. Level 5 develops leadership and delivery facilitation rather than simply presenting a harder coding problem.

Additional workshops can complement the levels without extending the numbered ladder. Initial candidates are **inherit and change** and **choosing how to collaborate**, described below.

## Existing workshop foundation

The original workshops were influenced by Woody Zuill's workshops and *Mob Programming*, coding-dojo practice, and the Mob Mentality community.

### Introduction

A single in-person team, often new to team programming, TDD, or Git:

1. Experience the cards exercise described below.
2. Choose a small programming challenge, often Roman numerals.
3. Take a break before programming.
4. The facilitator navigates while participants rotate through driving, setting up the project, test harness, first failing test, and smallest implementation.
5. Explain what happened and introduce strict driver/navigator roles with frequent timed rotation.
6. Coach the team for roughly 30 minutes, then let them practise independently for another 30-60 minutes.
7. Review progress and experience, regardless of whether the exercise is complete.
8. The facilitator takes over and performs rapid refactoring, deliberately relaxing the strict role rules.
9. Discuss the contrast, the support provided by test-first development, and team code ownership.

A brief discussion of TDD styles, including London and Chicago schools, can follow where useful. It should not displace the workshop's collaboration objective.

The key communication principle is that an idea must travel from one person's head through another person's hands before entering the computer.

### Fun with team programming

Multiple teams use Elevator Saga and the Mob Programming RPG role cards. Competition has two dimensions: progress in the challenge and contributions through the role game.

The facilitator temporarily removes participants, sometimes the driver, to expose whether context and decisions belong to the team or an individual.

### Problem-solving masterclass

Use a language unfamiliar to the participants and an unfamiliar problem. The challenge is to preserve collaborative habits while outside the team's comfort zone.

With AI, unfamiliar syntax alone is insufficient: the model may know it well. The refreshed masterclass adds requirement elicitation, explicit assumptions, and evaluation of unfamiliar generated work.

## The cards exercise

Use icebreaker question cards without requiring anyone to answer the questions.

### Round 1: a separable task

Shuffle the cards and ask the group to sort them alphabetically. Let them choose their work distribution; steer toward splitting and merging if necessary.

Measure time and ask about confidence in the result. People usually share a clear sorting rule and trust one another's ability to apply it.

### Round 2: a shared-preference task

Shuffle again and use the same distribution. Each person selects questions they would be comfortable answering in a work setting.

Ask how confident they are that everyone would accept every retained card. Pass retained cards between people as simulated code review, asking about confidence after each pass.

Also ask whether the discarded pile contains a card somebody would have wanted to answer. Reviewing only retained cards cannot recover discarded possibilities.

### Round 3: real-time collaboration

Shuffle and distribute again. Participants read cards aloud and the whole group decides whether to keep them.

Discussion and brief attempts to influence a decision are allowed. Nobody must explain or defend discomfort. If at least one person still objects, the card is removed. Avoid repeated pressure to reconsider.

Measure time, compare experiences, and discuss what people learned about one another without answering any questions.

### Debrief

Contrast a relatively clear, separable rule with a task requiring discovery and reconciliation of preferences. Connect this to code review, requirements, shared decisions, and omitted possibilities.

Use timings as discussion material, not proof that collaboration is always equally fast. Practice, repeated exposure, and differences between tasks affect the comparison.

At Level 2, shorten or revisit the exercise to introduce the AI bridge: inspecting a completed solution may not reveal what its commissioning conversation omitted.

### Optional AI round: what can be delegated, and what needs shared understanding

An optional fourth round, run as a **facilitator demonstration** rather than participant AI use, so it is compatible with the Level 1 no-AI policy. It answers the question participants often ask at Level 1: *why aren't we using AI?*

1. **A separable task.** Photograph or type the cards into an AI tool and ask it to sort them alphabetically. Compare its time and result with the team's Round 1. Ask how confident they are in the result and how they would check it. A clear rule can be delegated and checked cheaply.
2. **A shared-preference task.** Ask the AI to select the cards *this team* would be comfortable answering at work. Ask the group whether they would accept the selection and what the AI would need to know to choose well.
3. **Contrast.** Ask whether anything the AI is missing could be supplied by a longer prompt, and who would decide what to include. Compare with Round 3, where the information and the decision were produced in the room.

Teaching point: AI is not being excluded because it is unhelpful. Delegation works when the rule is clear and the result is cheap to verify. Where the task depends on preferences and context held by different people, the work is establishing shared understanding. Level 1 practises that first, without anything standing between the people and the code.

Use the same no-explanation rule: nobody has to disclose why they would reject a card. Do not stage the demonstration so the AI is made to fail; report what it did. If it produces a plausible selection, ask what evidence would show it represents the group rather than the average card reader.

**Level 2 use:** rerun this round briefly as an opener, with the team now operating the AI. Ask what the team must write down, and who must agree, before they would trust it with the second task. This leads into the working agreement and decision record.

## Shared AI operating model

### Two formal roles at Level 2

**Navigator:** facilitates the next team decision and articulates the intended change.

**Driver/operator:** translates agreed intent into a prompt, operates tools, and makes results visible. They do not privately add requirements or accept changes.

Other participants actively contribute examples, alternatives, and questions. AI is not the navigator or a substitute for human agreement.

Proposed AI-era workshop rule:

> Before an idea becomes a prompt, another person must be able to explain it. Before generated work is accepted, the team must have evidence that it meets the agreed intent.

This is a workshop adaptation, not a published rule attributed to the original team-programming sources.

### A visible decision loop

1. **Discuss:** identify desired behavior and uncertainty.
2. **Specify:** agree on an example and expected result.
3. **Predict:** say what should fail now and why.
4. **Delegate:** request one bounded change.
5. **Inspect:** examine the relevant diff and run agreed checks.
6. **Explain:** someone other than the operator explains the result and next decision.

At Level 2, separate test creation from implementation. Otherwise AI can generate a mutually consistent test and solution before the team considers whether either expresses the right behavior.

Participants need not understand every library implementation or dictate every token. They must understand domain behavior, significant implementation choices, and acceptance evidence.

Start with 5-7 minute rotations and adjust after observing the group. Rotate even while AI is running: starting a request does not confer ownership of it.

### Working agreement

Use one projected conversation, one authoritative workspace, and a short visible record:

**Current goal | Agreed rules | Open questions | Next example**

- Ask about material ambiguities rather than silently choosing a policy.
- Keep changes small enough for collective inspection.
- Do not rewrite tests merely to accommodate generated behavior.
- Agree before adding dependencies, using external services, or performing destructive actions.
- Do not run private implementation agents during shared-agent rounds.
- Use synthetic workshop data and avoid exposing real personal or confidential information.
- Bring parallel human research back to the team before it becomes a decision.

While AI works, predict outcomes, find counterexamples, or clarify rules rather than passively watching streaming output.

Example starting prompt:

```text
We are a team working through a programming exercise.

Implement only the next agreed slice.
Ask about material ambiguities rather than choosing a policy.
Do not change existing tests or add dependencies without approval.
Keep the diff small and explain your assumptions.

Current agreed behavior:
[team's rule]

Next example:
[input and expected result]

First help us express this as a failing test. Do not implement yet.
```

## Level 1: foundations of team programming

Keep problems small and clearly specified. The difficulty should be learning collaboration and test-first development, not discovering a complicated domain.

Introduce discovery here in a small form: participants can ask clarifying questions and agree on an example before implementation. Do not make the foundational workshop depend on uncovering obscure requirements.

| Exercise | Initial scope | Progression or facilitator move | Learning emphasis |
| --- | --- | --- | --- |
| Roman numerals | Convert integers 1-3,999 to Roman numerals; initially omit invalid-input behavior | Introduce additive forms, subtractive forms, and combinations; refactor under the same tests | Small steps, alternative designs, collective code ownership |
| Bowling score | Score legal rolls; begin with gutter and all-one games | Introduce spares, strikes, and final-frame rules; another participant explains each example | Shared understanding of state and interacting rules |
| Shopping basket offers | Use integer pennies and a specified three-identical-items-for-two offer; no stacking | Explore quantities two, three, four, and six before executing tests | Boundary examples and separating policy from implementation |
| Christmas: Advent calendar | Determine available doors from December day and already opened doors | Specify missed-day behavior; explore already opened doors and date boundaries | Expressing explicit rules through examples |
| New Year: countdown display | Format non-negative seconds; zero becomes "Happy New Year!" | Introduce singular/plural forms and unit boundaries | Incremental development and safe formatting refactoring |

Ensure everyone experiences driver and navigator roles. Preserve the facilitator's contrasting refactoring finale and discussion of code ownership.

If participants ask why AI is not used, the optional facilitator-run AI round in [the cards exercise](#the-cards-exercise) gives an experiential answer without anyone using AI during the programming.

## Level 2: team programming with one shared AI

Begin with a 10-15 minute return to a familiar Level 1 exercise using AI. Let the mechanics become easy, then ask what the team actually practised together.

For the main exercise, prefer a small implementation surface with domain decisions that AI cannot legitimately make for the group.

Make discovery explicit: distinguish stakeholder requirements, team-agreed policy, open questions, and defaults suggested by AI. Level 4 increases the uncertainty and depth of elicitation; it is not the first place participants practise discovery.

| Exercise | Initial scope | Staged requirement or inject | Learning emphasis |
| --- | --- | --- | --- |
| Meeting-room booking | In-memory reservations and overlap detection | Adjacent bookings, cleaning buffers, cancellation, capacity; does an end at 10:00 conflict with a start at 10:00? | Owning the meaning of availability |
| Parcel collection locker | Allocate parcels to compatible small, medium, or large compartments | Expiry, collection, and whether a small parcel should consume the last large locker | Correctness versus allocation policy |
| Community equipment library | Reservations and loans for shared tools | Opening hours, late returns, and a confirmed reservation depending on an overdue item | Facts versus expectations and commitments |
| Christmas: Secret Santa allocator | No self-assignment; use fictional participants | Household and previous-year exclusions; decide whether assignments must form one cycle; include an impossible instance | Feasibility and invariant-based verification |
| New Year: resolution buddy matcher | Match fictional participants by activity and availability | Decide whether unmatched people or groups of three are allowed | Negotiating conflicting objectives |

Maintain a shared glossary and decision record. Finish by asking a participant to explain an accepted policy, a rejected alternative, and an example distinguishing them.

### Three stages and three kinds of confidence

Use private ratings before group discussion to reduce anchoring on the most confident participant.

- **Behavioral confidence:** does it do what we agreed?
- **Understanding:** can we explain why?
- **Change confidence:** could somebody else safely change it?

#### Stage 1: build together

Use the shared decision loop and small slices. Record confidence at a few meaningful checkpoints rather than after every keystroke.

#### Stage 2: change together - the ownership challenge

Start from a saved checkpoint. The facilitator uses AI for a genuine behavior-preserving refactor, then separately introduces a plausible policy alteration not covered by existing tests.

Examples include changing adjacency rules for bookings, breaking ties by name instead of waiting time, or replacing inclusion with maximum attendance.

Ask what was agreed, what changed, and what evidence distinguishes the behaviors. Replay the change properly: discuss policy, write a distinguishing example, and accept or reject it.

Keep refactoring and behavior changes separate. The lesson is that tests support refactoring, but green tests cannot prove an untested domain decision is correct.

Prepare a known patch or saved response as a fallback. Frame this as an ownership exercise, not an attempt to embarrass participants.

#### Stage 3: receive a finished solution - the one-shot finale

In a separate workspace, run a prepared one-shot prompt for the same problem. Initially keep the prompt out of view and explicitly frame the experience as receiving a solution whose commissioning conversation the team did not attend.

Give a short inspection period, collect the same confidence ratings, and request one small change.

The solution may contain a plausible extra feature, such as automatic cancellation of "unconfirmed" bookings. Make it discoverable through ordinary inspection or a relevant example, not a buried trick.

Reveal the prompt and compare implemented behavior, requested behavior, and team-agreed behavior.

> A solution can be functional, well-tested, and faithful to its prompt while still not represent our problem.

Prepare a known output as a fallback. Do not force the conclusion that one-shot generation is bad: if the team establishes confidence quickly, examine the evidence that made that possible.

## Level 3: collaborative delivery under pressure

Use multiple teams, role-card play, competition, interruptions, and changing conditions.

| Exercise | Initial scope | Disturbance | Learning emphasis |
| --- | --- | --- | --- |
| Elevator Saga with a service-quality overlay | Pursue game challenges while examining throughput, long waits, and starvation | Change stakeholder priority; temporarily remove the operator | Continuity and objective ownership |
| Community transport dispatcher / Boober | Allocate passenger requests to vehicles using a supplied simulator | Vehicle loss, capacity constraints, or changed demand | Replanning and avoiding exclusion concealed by averages |
| Incident-response prioritizer | Synthetic incidents, fixed streams, impact, age, and responder constraints | Low-impact alerts flood the queue while an older high-impact incident remains | Value rather than raw completion count |
| Christmas: gift-packing station / Elf Dispatch | Schedule fictional orders across constrained stations | Station closure, scarce stock, or urgent work delayed by batching | Whole-system flow and changing bottlenecks |
| New Year: celebration timetable | Abstract scheduling of performances, setup times, equipment, and availability | Overrun or shared technician unavailability | Feasibility and negotiated priorities |

The celebration exercise is an abstract scheduler, not a tool or lesson for real crowd-safety planning.

### AI-specific contribution roles

Supplement the Mob Programming RPG rather than replacing it. These responsibilities may rotate or appear as observable role-card behaviors.

| Responsibility | Observable contribution |
| --- | --- |
| Domain advocate | Connects a decision to an agreed user need |
| Example finder | Supplies a counterexample before acceptance |
| Evidence keeper | Distinguishes claims from demonstrated results |
| Flow steward | Notices exclusion, oversized changes, or lost context |

### Competition

Keep two separate scoreboards:

- **Challenge:** valid outcomes first, then progress or performance.
- **Collaboration:** contributions such as exposing assumptions, finding counterexamples, or helping returning participants resume.

Do not reward prompt counts, generated lines, or speaking frequency. Make challenges and disturbances reasonably equivalent between competing teams.

Elevator Saga simulation results are not deterministic unit-test evidence. Use repeated runs when comparing strategies and acknowledge variation.

### Interruptions

Make interruptions consensual and predictable in principle, although not necessarily in timing. Removing an operator should reveal work organization rather than penalize a novice.

After someone returns, ask them to explain:

**What we are doing | Why | What remains uncertain | What happens next**

Observe what shared artifacts and team behavior make available without a long private briefing.

#### Optional AI-specific interruptions

These apply only to teams that have agreed to them in advance, and are used to reveal how much understanding lives in the shared artifacts rather than in one session.

- **Context reset:** end or restart the agent conversation without notice. Observe how quickly the team resumes from its shared artifacts (agreed rules, decision record, tests). Announce afterwards that nothing was lost that the team should not have been able to recover.
- **Context-file swap:** briefly exchange the shared working-agreement and decision record between two teams working on comparable problems, then ask what each team had to rediscover and what was misleading.
- **Tool or model change:** switch the model or tool and ask the team what changed in the output and what stayed the same. Treat differences as hypotheses to check.

Do not use these to embarrass a team or to prove that anything is fragile. Keep the reset short, state when it ends, and debrief what the team's artifacts made available.

### Shared versus separate coding agents

Run short matched rounds: one shared-agent round and one round with separate participant agents followed by integration and handover. Reverse order across teams where practical.

Introduce a policy change after implementation. Compare time to a valid change, incompatible assumptions, handover effort, and how many participants can explain the result.

Treat this as an experience to examine, not a controlled experiment proving that one agent arrangement always wins. A shared agent can still be operated by one dominant participant while everyone else watches.

Keep simulation visibility, communication rules, and evaluation scenarios constant when comparing coding-agent arrangements.

## Level 4: team problem-solving masterclass

Discovery develops throughout the programme. Here it becomes the central challenge, including uncertainty that cannot always be resolved by asking the facilitator for a predetermined answer.

Combine an unfamiliar domain with a language unfamiliar to the actual participants. Possible languages include Prolog or Elixir, but choose for the group rather than novelty alone.

Provide a working runtime, a tiny example, and a test command. Avoid turning the session into installation troubleshooting.

| Exercise | Initial scope | Discovery or inject | Learning emphasis |
| --- | --- | --- | --- |
| Archipelago parcel network | Scheduled ferries, capacity, and transshipment; validate feasibility before optimizing | A transfer between particular services is prohibited | Assumptions, valid plans, and best plans are different |
| Museum conservation planner | Fictional treatments, compatibility rules, waiting periods, and specialists | A treatment invalidates a previous preparation step | Dependency reasoning and eliciting rules rather than inventing them |
| Historical calendar reconciler | Two invented calendars and a supplied rulebook | Resolve an ambiguous era-boundary convention | Specification reasoning and distinguishing examples |
| Christmas: toy workshop production planner | Shared machines, components, and fictional processing constraints | Objective shifts from individual toys to complete gift sets; speed increases waste | Understanding objectives before optimizing |
| New Year: global midnight release planner | Supplied local-midnight UTC instants, injected clock, retries, duplicates, cancellations | Decide what happens when a delayed retry crosses the event boundary | Temporal policy and idempotency |
| Christmas: reindeer dispatch scheduler (e.g. Prolog) | Fictional reindeer, rest and fatigue rules, routes, and weather windows; check a plan is valid before searching for one | A new constraint removes the only feasible plan, forcing a choice between relaxing a rule and changing the route | Modelling constraints explicitly before asking for an algorithm |
| Christmas: naughty-or-nice rules engine | A supplied fictional policy document with overlapping and partly contradictory rules | Two rules give opposite answers for the same case; the stakeholder resolves some conflicts and leaves others to the team | Eliciting, recording, and justifying policy decisions |
| New Year: Y2K replay (e.g. COBOL or a simulated legacy system) | A small legacy-style program using two-digit years; supplied sample data and a run command | Records spanning 1999 to 2000 behave differently; decide on a fix versus a migration | Reading unfamiliar code, characterization evidence, and verifying AI explanations of legacy behaviour |

Museum rules are fictional, not conservation advice. Supplied UTC instants keep the New Year exercise focused on event policy rather than time-zone-library research.

The reindeer scheduler and naughty-or-nice policy are fictional and abstract; no real people are assessed. For the reindeer exercise, a logic language such as Prolog suits the constraint model, but choose a language the actual participants do not know and provide the runtime and a test command. For the Y2K replay, provide a working legacy runtime (for example GnuCOBOL) or a small simulated equivalent, with sample data, so the session does not turn into installation troubleshooting. In every case the team verifies the agent's explanation of the rules or legacy code against supplied examples rather than treating it as documentation.

### Requirement elicitation

The facilitator keeps a written requirements document private, gives a short stakeholder brief, and answers questions consistently.

Example brief:

> Boober should help people get around the island reliably. We have three vehicles and want a pilot service.

Prepare three categories:

| Category | Facilitator treatment |
| --- | --- |
| Established requirements | Give consistent answers when asked |
| Unresolved decisions | Negotiate; do not pretend there was always one correct answer |
| Changes during delivery | Introduce explicitly and record when they take effect |

Evaluate both delivery and discovery. Distinguish requirements implemented, requirements consciously deferred, material assumptions left unverified, and requirements never discovered.

Avoid a hidden-requirement guessing game. Important requirements should be discoverable through several reasonable questions, examples, or stakeholder demonstrations, not one exact phrase.

Include a midpoint stakeholder review where the team demonstrates behavior and receives feedback.

### Business analysts and other participants

BAs can lead examples, expose contradictory policies, maintain the domain model, and challenge acceptance evidence.

Do not separate requirements understanding from implementation understanding along job-title boundaries. Rotate facilitation and shared-agent operation where practical; typing source code is not required to contribute to an executable example.

### Finish

Demonstrate a normal case, a boundary case, a rejected alternative, and an unresolved limitation.

Give another team or returning participant the solution and decision record. They explain an unfamiliar case and implement one policy change. AI may assist but cannot substitute for their explanation.

## Level 5: leading collaborative delivery

The lead owns the coherence of delivery, not every individual decision. They establish direction, decision boundaries, integration expectations, and feedback loops.

Use two or three small teams, each conducting its own team-programming session with a shared coding agent. The lead visits sessions briefly rather than becoming a permanent navigator.

If every team waits for the lead's approval, treat that as a failure mode to examine.

### Two leadership responsibilities

| Responsibility | Focus |
| --- | --- |
| Technical lead | Technical coherence, interfaces, cross-team risks, integration, decision boundaries |
| Delivery facilitator | Participation, flow, dependencies, interruptions, working agreements, escalation |

One participant may practise both responsibilities, but assess them separately. With enough participants, assign two people and require them to collaborate rather than duplicate authority.

### Exercise menu

| Scenario | Workstreams | Leadership challenge |
| --- | --- | --- |
| Boober service launch | Dispatch, vehicle policies, service evaluation | Prevent locally successful policies from producing an incoherent service |
| Community equipment service | Reservations, inventory, notifications | Resolve inconsistent meanings of availability and confirmation |
| Parcel network pilot | Route planning, transfer rules, exception handling | Coordinate contracts while domain knowledge emerges |
| Christmas: Elf Dispatch | Production policies, shared protocols, order priorities | Improve system flow rather than each station's output |
| New Year: midnight events | Scheduling, execution, reconciliation | Own retry and cancellation semantics across workstreams |

### Structure and disturbances

Start with a squad brief. Let the lead establish workstreams and a minimal coordination agreement. Require an early integrated slice.

Introduce problems that cannot be resolved entirely within one team:

- Conflicting interface interpretations.
- A stakeholder change to the primary objective.
- Reduced capacity in one team.
- A local optimization that harms another workstream.
- A team abandoning rotations and becoming one person operating AI.

Finish with an integrated demonstration and short team interviews without the lead present.

### Assess leadership through effects

Look for shared understanding of the squad goal, appropriate local decision-making, early integration, visible risks, meaningful participation, and useful escalation.

Include a planned lead absence late in the exercise.

> When the lead leaves, do the teams retain direction and the ability to resolve problems, or only a queue of decisions waiting for permission?

## Potential additional workshops

These are proposals to develop and pilot, not required new levels.

### Inherit and change

Adapt an existing individual-participant workshop based on the **Gilded Rose refactoring kata** into a team-programming session.

The original workshop demonstrated the benefits of making tiny changes to an existing codebase while keeping it operational. Preserve that emphasis: acquire understanding, establish evidence, and improve the system incrementally rather than replace it wholesale.

**Audience:** teams familiar with basic role rotation; a bridge from workshop exercises to everyday work on existing systems.

**Starting point:** a working but awkward implementation the participants did not write, existing behavior, and a small requested change.

Suggested sequence:

1. Run the existing system and inspect the available tests and requirements.
2. Establish shared understanding of important behavior and unresolved assumptions.
3. Add characterization tests where evidence is missing, distinguishing observed behavior from desired policy.
4. Make a series of tiny refactorings, checking after each that the agreed behavior remains intact and the system remains runnable.
5. Elicit and specify the requested behavior change separately from refactoring.
6. Implement it incrementally and hand the result to another participant or team.

Use frequent rotations so understanding does not accumulate only with the person who first explored the code. Evaluate operational continuity, explainability, and safe change rather than the size of the rewrite.

Possible formats include a non-AI session and a shared-AI session. AI explanations of inherited code are claims to verify, not authoritative documentation. Since Gilded Rose is well known, an AI-assisted version may need a small bespoke extension or inherited variant to retain meaningful reasoning; detailed design is still open.

This workshop complements the Level 2 one-shot finale: receiving unfamiliar work becomes a full practice exercise rather than only a demonstration.

### Choosing how to collaborate

An optional workshop for teams already comfortable with mobbing. Challenge the assumption that the most mature response is always to keep everyone in one synchronous session.

**Objective:** preserve shared ownership while choosing an appropriate work arrangement.

Begin with a task containing well-specified, independently testable parts and an agreed integration contract. Let the team experience working on it as one ensemble, then consider separating bounded work and reconvening for integration.

Introduce a later requirement that crosses those boundaries or exposes incompatible assumptions. The team decides whether to regroup, pair, investigate individually, or continue separately.

Candidate exercises include independent Boober policy modules against a stable interface, or separate gift-recipe validators followed by a shared scheduling change.

Compare valid delivery, participation, understanding, waiting, integration effort, and response to change, not speed alone. Account for practice effects when repeating work.

The scenario should make splitting work a credible and potentially better option, not secretly rig the outcome. The facilitator must accept evidence supporting a different choice.

> The advanced skill is not maintaining a mob at all costs. It is preserving shared ownership while changing how the work is organized.

## Coding katas in the age of AI

Traditional non-AI katas still have a place. They support deliberate practice of TDD, refactoring, small changes, and the communication mechanics of team programming. Level 1 remains explicitly non-AI.

AI can solve familiar small katas so quickly that the intended learning disappears. The difficulty is not simply insufficient code volume: generation can bypass the discussion and feedback loops the exercise was designed to create.

The [Samman Society's October 2026 position on agentic AI](https://www.sammancoaching.org/society/agentic_ai.html) identifies related challenges: small katas losing their challenge, changes to TDD when agents write code and tests, and delay and communication overload in ensembles. This is the society's stated experience and position, not universal experimental proof.

**Open design question:** should we develop AI-ready katas, and might Boober, Elf Dispatch, and similar games serve that purpose?

Possible ingredients include elicited domain rules, unfamiliar but discoverable constraints, competing objectives, inherited implementations, changing world physics, and policy changes requiring distinguishing examples.

Obscure rules should stimulate inquiry, not require guessing a hidden answer. Changes should be explicit when they take effect. Larger problems and additional rules are useful only if they create the intended learning.

AI-ready exercises should keep humans involved in deciding what to build and evaluating what was produced. Whether to call these katas, games, or simulations, and how to structure them, remains for later discussion and pilots.

## Simulator concepts

These ideas may become separate projects. Keep workshop purpose, policy interfaces, and scenario descriptions here even if implementations move elsewhere.

### Boober

A transport game inspired by ride dispatch and route optimization. It is more accurately a pickup-and-delivery routing problem than a travelling-salesperson problem: pickups precede drop-offs, vehicles have capacity, and demand changes over time.

#### Small initial world

- A ring of roughly 12 stops and three vehicles.
- Passengers with origin, destination, and arrival tick.
- Vehicles with position, direction, capacity, and onboard passengers.
- Explicit tick-based movement, waiting, pickup, and drop-off rules.
- Initially no overtaking, variable speeds, or realistic traffic.

The ring limits geographical complexity while leaving decisions about circulation, reversal, request age, regional specialization, spare capacity, and request ownership.

Score completed journeys and waiting time subject to correctness constraints. Expose individual long waits so throughput cannot conceal starvation.

#### Two meanings of agent

A **coding agent** helps people write a policy. A **simulation agent** is a vehicle executing that policy.

One shared coding agent can produce several vehicle policies. Multiple personal coding agents can produce a centralized dispatcher. Keep these dimensions separate.

#### Reuse

- Level 3: published rules and competing dispatch policies.
- Level 4: short brief and elicitation of what good service means.
- Level 5: separate dispatch, vehicle, and evaluation workstreams.

Potential changes include a closed connection, reduced capacity, shifting demand, or replacing average waiting time with protection against excessive waits.

Announce new physics and effective times. The surprise should be the need to adapt, not uncertainty about whether the simulator is broken.

### Elf Dispatch

A Christmas-themed combination of coding challenges and an Overcooked-like production simulation.

Elves operate stations handling component selection, assembly, wrapping, labeling, and dispatch. Stations have capabilities, limited buffers, and processing times.

Start with a few fixed recipes and deterministic durations. A policy receives an observation and returns one action per tick.

#### Communication modes

- **Local:** an elf sees its station, adjacent buffers, and incoming work.
- **Coordinated:** elves exchange defined messages or consult shared state.

These are separate simulation experiments. Do not change communication mode while claiming to compare shared and separate coding agents.

Independent policy development can expose incompatible meanings of "ready", "reserved", or "urgent", creating a natural integration and shared-language exercise.

Disturbances include station loss, new recipe prerequisites, scarce components, complete-family-bundle priorities, and rework for incorrect labels.

### Implementation direction

Build in increments:

1. Deterministic local simulation and a small scenario set.
2. Minimal visualization, event logs, and replay.
3. Stable policy interfaces and example clients.
4. Hosted sessions and networked clients if the exercises benefit from them.

A server can support individual interactions, distributed clients, and cross-team integration. It is not required merely to develop policies separately and merge them.

Use fixed scenarios and seeds for comparisons. Define observations, legal actions, communication, evaluation, and rule-change timing explicitly.

Treat submitted policies as untrusted code when designing hosting. Avoid executing participant code directly inside a shared server process; execution isolation and resource limits need a separate design.

Do not prioritize elaborate visuals, authentication, deployment, or broad application features before the learning mechanics work.

## Piloting and developing facilitators

### First pilot sequence

Suggested path:

**Roman numerals -> Meeting-room booking -> Elevator Saga -> Archipelago parcel network**

This allows early pilots without first building the proposed simulators. Pilot Level 5 once suitable integrated workstreams and enough participants are available.

For each exercise, prepare:

- A thin, working starter environment and one worked example.
- Participant brief and explicit initial rules.
- Facilitator-only requirements, staged changes, and distinguishing examples.
- Timer, role materials, and visible decision-record format.
- Saved checkpoints and known finale outputs.
- Debrief prompts and an evaluation approach.
- Accessibility, consent, interruption, and tool-access arrangements.

Keep the exercise small enough to expose the intended learning rather than setup friction.

### What to observe

Collect short confidence ratings, relevant timings, decision artifacts, and facilitator observations. Treat them as learning evidence, not individual performance rankings.

Look for participation, transfer of understanding, unverified assumptions, ability to recover from absence, response to changed rules, and quality of handover.

Debrief differences between what the team believed, what it demonstrated, and what it left uncertain.

Use pilot findings to adjust scope, timing, role rules, prompts, and disturbances. Do not generalize from a single team's experience.

### Training facilitators

**Start with scripted, ready-to-run sessions.** A new facilitator should not need to design an exercise or build an environment before delivering the standard workshop.

Each standard session should eventually provide a preparation checklist, runnable starter setup, participant brief, timed script, suggested wording and questions, role rotations, staged requirements, expected observations, fallback material, and debrief guide.

Explain the principles behind each intervention so facilitators understand its purpose rather than merely follow instructions. Distinguish essential learning mechanics from optional style and clearly mark adaptation points.

Develop a facilitator pathway alongside the workshop levels:

1. Participate in a workshop.
2. Observe an experienced facilitator using an observation guide.
3. Co-facilitate a bounded section.
4. Run a pilot with feedback.
5. Reflect, revise, and demonstrate independent facilitation.

Facilitator competence includes setting up reliable exercises, inviting quieter contributions, using questions without supplying all decisions, maintaining consent during interruptions, handling AI unpredictability, and debriefing without forcing a predetermined conclusion.

Facilitators can start with the standard script, then adapt it or create their own sessions as confidence grows. Adaptation is an option, not an entry requirement. Scripts support reliable delivery without requiring a predetermined participant conclusion.

The aim is not just to train people to run entertaining sessions, but to help teams carry collaborative habits into everyday delivery.

### Future workshop platform

A new cyber-dojo-like platform could eventually provide standard environments, exercises, role timers, staged scenarios, and simulation sessions to reduce preparation effort.

Capture this as a possible enabling project only. Platform design and implementation are deferred; early pilots should use existing tools and runnable starter materials.

## Repository development direction

Keep this README as the overview. As pilots progress, develop detailed level guides and exercise packs covering:

- Learning outcomes, audience, prerequisites, and preparation.
- Session sequence, timings, role rotations, and facilitator interventions.
- Participant briefs and facilitator-only requirements.
- Test examples, scenarios, changes, scoring, and finale material.
- Debrief questions, observation guides, and pilot findings.
- Facilitator-training guidance and adaptations for different teams.
- Scripted, ready-to-run standard sessions with reliable setup and fallback material.

Boober and Elf Dispatch may have separate implementation repositories. Link them from the relevant exercise guides while retaining the pedagogical requirements here.

Avoid treating proposed timings, scoring systems, or AI practices as validated until pilots support them.

## Sources and inspiration

- [Woody Zuill's team-programming resources](https://woodyzuill.com/) and *Mob Programming*.
- [Llewellyn Falco's strong-style pairing](https://llewellynfalco.blogspot.com/2014/06/llewellyns-strong-style-pairing.html).
- [The Mob Mentality Show](https://mobmentalityshow.podbean.com/).
- [Willem Larsen's Mob Programming RPG](https://github.com/willemlarsen/mobprogrammingrpg), demonstrated by the Mob Mentality Show.
- [Software Teaming in the Age of AI, with James Herr and Woody Zuill](https://www.youtube.com/watch?v=d9i2xErfQEg).
- [Elevator Saga](https://play.elevatorsaga.com/).
- [cyber-dojo](https://cyber-dojo.org/), a browser-based environment for individual and group TDD practice. Its hosted service states that commercial-organization use requires a licence; check terms before using it.

The five-level progression, AI operating agreement, ownership challenge, one-shot finale, simulator designs, and leadership adaptations are proposals developed for this programme. They are not presented as published rules from these sources.
