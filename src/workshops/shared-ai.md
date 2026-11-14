---
title: Team programming with one shared AI
short: One shared AI
question: Can a team keep understanding and owning its work when AI writes the code?
order: 2
length: 3 hours
group: one team
ai: one shared coding agent
status: Not yet piloted. The timings are a starting point.
plan:
  - title: Opening
    minutes: 15
    notes: Rerun the AI round of the [cards exercise](/facilitating/cards-exercise/#optional-ai-round), with the team operating the AI. What would the team need to write down, and agree, before trusting it with a shared decision?
  - title: Warm-up
    minutes: 15
    notes: Return to a familiar kata from the first workshop, now with AI. Let the mechanics become easy, then ask what the team actually practised together.
  - title: Roles and agreement
    minutes: 15
    notes: Introduce the navigator and operator roles, the decision loop and the working agreement.
  - title: Build together
    minutes: 60
    notes: Work in small slices through the decision loop. Rotate every 5–7 minutes.
  - title: Break
    minutes: 10
  - title: Change together
    minutes: 30
    notes: From a checkpoint, introduce a refactor and a quiet policy change. What changed, and how would we know?
  - title: Receive a finished solution
    minutes: 20
    notes: Inspect a one-shot solution, rate confidence, request one small change, then reveal the prompt.
  - title: Debrief
    minutes: 15
---

## Objectives

By the end, participants should be able to:

- Keep a shared understanding of the problem and the code while AI does the implementation.
- Tell agreed requirements apart from assumptions and AI-suggested defaults.
- Use examples and tests as evidence, and recognise what passing tests cannot prove.
- Explain an accepted decision, a rejected alternative, and the example that tells them apart.

## How to run it

### Before the session

- A team that has done the [foundations workshop](/workshops/foundations/) or is familiar with driver and navigator roles.
- A working starter project with a test command for the main exercise.
- One projected AI conversation and one shared workspace.
- A visible board: **current goal · agreed rules · open questions · next example**.
- A saved checkpoint and a prepared one-shot solution, in case something goes wrong live.

### Session plan

{% sessionPlan plan %}

### Roles and the decision loop

The **navigator** facilitates the next decision and states the intended change. The **operator** turns agreed intent into a prompt and makes results visible, but doesn't add requirements or accept changes alone. Everyone else offers examples, alternatives and questions.

Each change goes through the same loop: **discuss, specify, predict, delegate, inspect, explain.** Separate writing the test from writing the implementation, or the AI can produce a test and a solution that agree with each other before the team has decided whether either is right.

The full roles, rule, loop and working agreement are in the [shared AI operating model](/facilitating/shared-ai/).

### Exercises

Choose a small implementation with domain decisions the AI can't legitimately make for the group. Make discovery explicit: keep stakeholder requirements, team-agreed policy, open questions and AI-suggested defaults apart.

| Exercise | Initial scope | Staged requirement | Emphasis |
| --- | --- | --- | --- |
| Meeting-room booking | In-memory reservations and overlap detection | Adjacent bookings, cleaning buffers, cancellation, capacity. Does an end at 10:00 conflict with a start at 10:00? | Owning the meaning of availability |
| Parcel collection locker | Allocate parcels to small, medium or large compartments | Expiry, collection, and whether a small parcel should take the last large locker | Correctness versus allocation policy |
| Community equipment library | Reservations and loans of shared tools | Opening hours, late returns, a reservation that depends on an overdue item | Facts versus expectations and commitments |
| Christmas: Secret Santa | No self-assignment; fictional participants | Household and previous-year exclusions; must assignments form one cycle? An impossible instance | Feasibility and invariants |
| New Year: resolution buddies | Match fictional participants by activity and availability | Are unmatched people, or groups of three, allowed? | Negotiating conflicting objectives |

Keep a shared glossary and decision record throughout.

### Three kinds of confidence

At a few meaningful checkpoints, ask for private ratings before any discussion, so nobody anchors on the most confident person:

- **Behavior** — does it do what we agreed?
- **Understanding** — can we explain why?
- **Change** — could somebody else safely change it?

### Change together: the ownership challenge

Start from a saved checkpoint. Use AI to make a genuine, behavior-preserving refactor. Then, separately, introduce a plausible policy change that existing tests don't cover — for example changing the adjacency rule for bookings, or breaking ties by name instead of waiting time.

Ask what was agreed, what changed, and what evidence would tell the two behaviors apart. Then replay the change properly: discuss the policy, write a distinguishing example, and accept or reject it.

The lesson: tests support refactoring, but green tests can't prove that an untested decision is right. Frame this as an ownership exercise, never as an attempt to catch people out, and have a known patch ready as a fallback.

### Receive a finished solution: the one-shot finale

In a separate workspace, run a prepared one-shot prompt for the same problem. Keep the prompt out of view at first, and say clearly that the team is receiving a solution whose commissioning conversation it didn't attend.

Give a short inspection period, collect the same confidence ratings, and ask for one small change. The solution may include a plausible extra feature, such as automatically cancelling "unconfirmed" bookings — discoverable through ordinary inspection or a relevant example, not a buried trick.

Then reveal the prompt and compare what was implemented, what was requested and what the team agreed.

> A solution can be functional, well tested and faithful to its prompt, and still not represent our problem.

Don't force the conclusion that one-shot generation is bad. If the team builds confidence quickly, look at the evidence that made that possible.

### Debrief questions

- What did we agree, and where is it written down?
- Which decisions came from us, and which from the AI?
- Could someone who wasn't here change this safely?
- Ask one participant to explain an accepted policy, a rejected alternative and an example that distinguishes them.
