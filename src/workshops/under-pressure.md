---
title: Collaborative delivery under pressure
short: Under pressure
question: Can we preserve inclusion, continuity and good decisions under disruption?
order: 3
length: 3–4 hours
group: several teams
ai: one shared coding agent per team
status: Based on an established multi-team workshop. The AI adaptation has not been piloted yet, and a timed session plan will follow pilots.
---

## Objectives

By the end, participants should be able to:

- Keep everyone involved and make good decisions under competition, time pressure and changing conditions.
- Carry on when someone leaves, because context and decisions belong to the team, not to one person.
- Recognise contributions beyond typing: examples, counterexamples, evidence, and helping others rejoin.
- Respond to changed priorities without letting good averages hide poor individual outcomes.

## How to run it

### Before the session

- Several teams, each with one shared coding agent, working on comparable challenges.
- A simulation or challenge with visible results, such as [Elevator Saga](https://play.elevatorsaga.com/) or one of the [games](/games/).
- Role cards: the [Mob Programming RPG](https://github.com/willemlarsen/mobprogrammingrpg) plus the AI contribution roles below.
- Two scoreboards: one for the challenge, one for collaboration.
- Agreement from participants, in advance, to the kinds of interruption you might use.

### How it works

Teams pursue the challenge while playing the role game, so there are two ways to make progress. During the session the facilitator introduces disturbances — removing a participant, changing a priority, changing the conditions — to expose whether context and decisions belong to the team or to an individual.

### Exercises

| Exercise | Initial scope | Disturbance | Emphasis |
| --- | --- | --- | --- |
| Elevator Saga, with a service-quality overlay | Play the challenges while also tracking throughput, long waits and starvation | A stakeholder changes priority; the operator is temporarily removed | Continuity and owning the objective |
| [Boober](/games/boober/) | Allocate passenger requests to vehicles in a supplied simulator | Vehicle loss, capacity limits, changed demand | Replanning; not hiding exclusion behind averages |
| Incident-response prioritizer | Synthetic incidents with streams, impact, age and responder constraints | Low-impact alerts flood the queue while an older high-impact incident waits | Value rather than raw completion count |
| Christmas: [Elf Dispatch](/games/elf-dispatch/) | Schedule fictional orders across constrained stations | A station closes, stock runs short, batching delays urgent work | Whole-system flow; moving bottlenecks |
| New Year: celebration timetable | Abstract scheduling of performances, set-up time, equipment and availability | An overrun, or a shared technician becomes unavailable | Feasibility and negotiated priorities |

The celebration timetable is an abstract scheduler, not a tool for real crowd-safety planning.

### AI contribution roles

These supplement the Mob Programming RPG rather than replace it. They can rotate, or appear as behaviors on the role cards.

| Role | Observable contribution |
| --- | --- |
| Domain advocate | Connects a decision to an agreed user need |
| Example finder | Supplies a counterexample before something is accepted |
| Evidence keeper | Separates claims from demonstrated results |
| Flow steward | Notices exclusion, oversized changes or lost context |

### Competition

Keep two separate scoreboards:

- **Challenge** — valid outcomes first, then progress or performance.
- **Collaboration** — contributions such as exposing assumptions, finding counterexamples or helping returning participants catch up.

Never reward prompt counts, lines generated or how often someone speaks. Keep challenges and disturbances reasonably equal between competing teams. Simulation results such as Elevator Saga's vary between runs, so use repeated runs when comparing strategies.

### Interruptions

Interruptions should be consensual and predictable in principle, though not in timing. Removing the operator should reveal how the work is organised, not penalise a newcomer.

When someone returns, ask them to explain:

**what we are doing · why · what remains uncertain · what happens next**

Notice what the team's shared artifacts and behavior make available without a long private briefing.

#### Optional AI-specific interruptions

Use these only with teams that have agreed to them in advance.

- **Context reset** — end or restart the agent conversation without notice. See how quickly the team resumes from its agreed rules, decision record and tests.
- **Context swap** — briefly exchange the working agreement and decision record between two teams on comparable problems. What did each have to rediscover, and what was misleading?
- **Tool or model change** — switch the model or tool. What changed in the output, and what stayed the same? Treat differences as hypotheses to check.

Keep resets short, say when they end, and never use them to embarrass a team.

### Shared versus separate coding agents

Optionally, run two short matched rounds: one with a shared agent, and one where participants use separate agents and then integrate and hand over. Reverse the order between teams where you can.

Introduce a policy change after implementation, and compare time to a valid change, incompatible assumptions, handover effort and how many people can explain the result. Treat this as an experience to examine, not an experiment that proves one arrangement always wins — a shared agent can still be driven by one dominant person while everyone else watches.

Keep the simulation's visibility, communication rules and scenarios the same in both rounds.
