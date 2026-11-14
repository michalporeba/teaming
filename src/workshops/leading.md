---
title: Leading collaborative delivery
short: Leading delivery
question: Can we coordinate several teams without becoming their decision bottleneck?
order: 5
length: half day
group: a lead and two or three small teams
ai: a shared coding agent per team
status: Not yet piloted. The length will be reviewed after pilots.
---

## Objectives

By the end, participants in the lead role should be able to:

- Set direction, decision boundaries, integration expectations and feedback loops, rather than approve every action.
- Keep teams making appropriate decisions without constant lead involvement.
- Get to an integrated slice early, and make cross-team risks visible.
- Tell technical coherence apart from delivery facilitation, even when one person does both.

And the teams should still have direction and the ability to solve problems when the lead is away.

## How to run it

This workshop develops leadership and delivery facilitation; it isn't simply a harder coding problem. The lead owns the coherence of delivery, not every individual decision.

### Before the session

- Two or three small teams, each running its own team-programming session with a shared coding agent.
- One or two participants in the lead roles below.
- A squad brief for one of the scenarios, with workstreams that genuinely depend on each other.
- A set of prepared disturbances.

### Two leadership responsibilities

| Responsibility | Focus |
| --- | --- |
| Technical lead | Technical coherence, interfaces, cross-team risks, integration, decision boundaries |
| Delivery facilitator | Participation, flow, dependencies, interruptions, working agreements, escalation |

One participant may practise both, but assess them separately. With enough people, assign two leads and require them to collaborate rather than duplicate authority.

### Running it

1. **Squad brief.** The lead sets up workstreams and a minimal coordination agreement.
2. **Early integration.** Require an integrated slice early on.
3. **Team sessions.** The lead visits sessions briefly rather than becoming a permanent navigator. If every team is waiting for the lead's approval, treat that as a failure mode to examine.
4. **Disturbances.** Introduce problems that can't be solved inside one team (below).
5. **Lead absence.** Late in the exercise, the lead leaves.
6. **Finish.** An integrated demonstration, then short team interviews without the lead present.

### Disturbances

- Conflicting interpretations of an interface.
- A stakeholder changes the primary objective.
- One team loses capacity.
- A local optimisation harms another workstream.
- A team abandons rotation and becomes one person operating the AI.

### Assessing leadership through its effects

Look for shared understanding of the squad goal, appropriate local decision-making, early integration, visible risks, meaningful participation and useful escalation.

> When the lead leaves, do the teams keep their direction and the ability to resolve problems — or only a queue of decisions waiting for permission?

### Scenarios

| Scenario | Workstreams | Leadership challenge |
| --- | --- | --- |
| [Boober](/games/boober/) service launch | Dispatch, vehicle policies, service evaluation | Stop locally successful policies producing an incoherent service |
| Community equipment service | Reservations, inventory, notifications | Resolve inconsistent meanings of "available" and "confirmed" |
| Parcel network pilot | Route planning, transfer rules, exception handling | Coordinate contracts while domain knowledge emerges |
| Christmas: [Elf Dispatch](/games/elf-dispatch/) | Production policies, shared protocols, order priorities | Improve system flow rather than each station's output |
| New Year: midnight events | Scheduling, execution, reconciliation | Own retry and cancellation semantics across workstreams |
