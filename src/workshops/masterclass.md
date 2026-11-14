---
title: Team problem-solving masterclass
short: Masterclass
question: Can we discover the right problem and justify a solution outside our expertise?
order: 4
length: half day
group: one or more teams
ai: shared agent; humans own the evidence
status: Based on an established masterclass. The AI adaptation has not been piloted yet, and a timed session plan will follow pilots.
---

## Objectives

By the end, participants should be able to:

- Elicit requirements from a stakeholder through questions, examples and demonstrations.
- Keep established requirements, open decisions, assumptions and changes visibly apart.
- Keep collaborative habits while working in an unfamiliar language and domain.
- Check an AI's explanation of unfamiliar rules or code against evidence, rather than treating it as documentation.
- Hand over a solution that another team can explain and change.

## How to run it

Discovery runs through the whole programme. Here it becomes the main challenge, including uncertainty that can't always be resolved by asking the facilitator for the "right" answer.

Combine an unfamiliar domain with a language the actual participants don't know, such as Prolog or Elixir. Unfamiliar syntax alone isn't enough any more — the model may know it well — so the difficulty comes from eliciting requirements, making assumptions explicit and evaluating unfamiliar generated work.

### Before the session

- A working runtime, a tiny example and a test command, so the session doesn't turn into installation troubleshooting.
- A short stakeholder brief, for example: *"Boober should help people get around the island reliably. We have three vehicles and want a pilot service."*
- A private, written requirements document, so answers stay consistent, split into three categories:

| Category | How the facilitator treats it |
| --- | --- |
| Established requirements | Answer consistently when asked |
| Unresolved decisions | Negotiate; don't pretend there was always one correct answer |
| Changes during delivery | Introduce explicitly and record when they take effect |

### Running it

1. **Brief.** Give the short stakeholder brief, then let the team ask questions.
2. **Discover and build.** The team elicits, records and implements in small steps with its shared agent.
3. **Midpoint review.** The team demonstrates behavior to the stakeholder and receives feedback.
4. **Finish.** Demonstrate a normal case, a boundary case, a rejected alternative and an unresolved limitation.
5. **Hand over.** Another team or a returning participant takes the solution and decision record, explains an unfamiliar case and implements one policy change. AI may help, but can't replace their explanation.

Avoid a hidden-requirement guessing game. Important requirements should be discoverable through several reasonable questions, examples or demonstrations, not one exact phrase.

### Assessing discovery

Evaluate discovery as well as delivery. Distinguish requirements that were implemented, consciously deferred, assumed without checking, and never discovered.

### Business analysts and other participants

This workshop should welcome business analysts and other domain-oriented people. They can lead examples, expose contradictory policies, maintain the domain model and challenge acceptance evidence.

Don't split requirements from implementation along job titles. Rotate facilitation and agent operation where practical — typing source code isn't needed to contribute to an executable example.

### Exercises

| Exercise | Initial scope | Discovery or change | Emphasis |
| --- | --- | --- | --- |
| Archipelago parcel network | Scheduled ferries, capacity and transshipment; check feasibility before optimising | A transfer between particular services is prohibited | Assumptions, valid plans and best plans are different things |
| Museum conservation planner | Fictional treatments, compatibility rules, waiting periods, specialists | A treatment invalidates an earlier preparation step | Dependency reasoning; eliciting rules rather than inventing them |
| Historical calendar reconciler | Two invented calendars and a supplied rulebook | An ambiguous convention at an era boundary | Specification reasoning; distinguishing examples |
| Christmas: toy workshop planner | Shared machines, components and fictional processing constraints | The objective shifts from individual toys to complete gift sets; going faster increases waste | Understanding objectives before optimising |
| Christmas: reindeer dispatch (e.g. Prolog) | Fictional reindeer, rest and fatigue rules, routes, weather windows; validate a plan before searching for one | A new constraint removes the only feasible plan | Modelling constraints before asking for an algorithm |
| Christmas: naughty-or-nice rules engine | A fictional policy document with overlapping, partly contradictory rules | Two rules disagree; the stakeholder resolves some conflicts and leaves others to the team | Eliciting, recording and justifying policy |
| New Year: global midnight release | Supplied UTC instants for local midnights; injected clock, retries, duplicates, cancellations | A delayed retry crosses the event boundary | Temporal policy and idempotency |
| New Year: Y2K replay (e.g. COBOL) | A small legacy-style program with two-digit years, sample data and a run command | Records spanning 1999–2000 behave differently; fix or migrate? | Reading unfamiliar code; characterization tests; verifying AI explanations |

All scenarios are fictional. Museum rules are not conservation advice, and nobody real is assessed by the naughty-or-nice rules. Supplying UTC instants keeps the New Year exercise about event policy rather than time-zone libraries. For the Y2K replay, provide a working runtime such as GnuCOBOL, or a small simulated equivalent.
