# Intended Outcomes

This document describes the lasting capabilities the [workshop programme](README.md) aims to develop. Exercises, role rules, AI arrangements, and simulations are means of practising these capabilities, not the outcomes themselves.

**Status:** intended outcomes and proposed observation criteria. They require refinement through pilots and evidence from everyday work.

## Overall objective

> Help teams make, implement, and revise decisions together without losing understanding, agency, or accountability as work becomes more complex and AI does more of the implementation.

The programme aims to develop collective judgment, shared ownership, and distributed leadership in AI-assisted delivery while retaining a place for non-AI technical practice.

Finishing a challenge, generating code quickly, following rotations, or using one shared agent does not by itself demonstrate success.

## Team and leadership outcomes

| Outcome | Intended capability | Observable evidence |
| --- | --- | --- |
| Shared understanding | Understand the problem, important decisions, and limitations beyond the current operator | Several participants explain behavior, assumptions, rejected alternatives, and the next change |
| Meaningful participation | Allow different expertise to influence the work | Examples, questions, domain knowledge, and dissent affect decisions; contributions are not judged by typing or speaking time |
| Continuity | Continue through absence, rotation, and changing responsibilities | Returning or replacement participants resume using shared artifacts and team context; work does not depend on a private conversation |
| Collective judgment | Challenge assumptions and generated solutions using examples and evidence | Participants distinguish requirements from defaults, predict behavior, test claims, and revise decisions when evidence changes |
| Distributed leadership | Make appropriate decisions without constant lead involvement | Teams understand goals, authority, dependencies, and escalation; integration and problem-solving continue during lead absence |

### Shared understanding

Participants should be able to explain what the system is intended to do, why significant choices were made, what remains uncertain, and what evidence supports acceptance.

This does not require every participant to know every implementation detail. It does require enough understanding to challenge and change the work without dependence on its original author or AI conversation.

### Meaningful participation

Driver rotation creates opportunities but does not guarantee influence. Domain examples, counterexamples, research, facilitation, and identifying uncertainty are substantive contributions.

Look for whether quieter participants and people with different roles can alter the team's direction, not whether everyone speaks for the same duration.

### Continuity

Shared goals, examples, decision records, and working software should support handover and recovery from interruptions.

Briefings are legitimate, but no individual should be the sole keeper of the team's reasoning.

### Collective judgment

The team should evaluate both what AI produced and whether the requested behavior represents the problem.

Confidence should be calibrated against evidence. Use predictions on unfamiliar cases and compare them with observed results. Reduced unjustified confidence can indicate progress.

Passing tests are evidence about covered behavior, not proof that requirements are complete or correct.

### Distributed leadership

Leads should create direction, decision boundaries, integration expectations, and feedback loops rather than approve every action.

Distinguish technical coherence from delivery facilitation, even when one person performs both responsibilities.

## Facilitator outcome

**Develop facilitators who can reproduce the learning outcomes without reproducing the original facilitator's personality or exact delivery style.**

Provide scripted, ready-to-run standard sessions first. Facilitators should not need to invent exercises or build tooling before they can begin.

Through participation, observation, co-facilitation, and feedback, facilitators should learn to:

- Prepare and run a reliable standard session.
- Explain the purpose of its learning mechanics.
- Invite meaningful participation and handle disagreement respectfully.
- Maintain consent during interruption and discomfort exercises.
- Recover from unexpected AI output or technical failure.
- Debrief observed evidence without forcing a predetermined conclusion.
- Adapt sessions or create new ones when ready.

## Ownership and collaboration boundaries

Shared ownership includes understanding and stewardship of the problem, code, and resulting service. Domain ownership does not remove the need to maintain or diagnose the implementation.

Shared understanding is distinct from decision authority and accountability. A team can understand and challenge a decision without every member having a veto over it.

The no-explanation veto in the cards exercise protects personal comfort; it is not a universal engineering decision rule.

Mobbing is not the answer to every task. Teams should be able to choose synchronous collaboration, pairing, individual investigation, or bounded parallel work while preserving shared ownership and useful integration.

One shared coding agent is a workshop arrangement to investigate, not an outcome or a universal prescription.

## Evidence beyond the workshop

The intended result is better everyday delivery, not only competent workshop performance.

After a session, ask the team to try a small practice on real work and review repeated use: for example, shared examples before prompting, tiny operational changes, or a short decision record.

Observe whether understanding spreads, assumptions become visible, handovers improve, and the team responds more effectively to change. Distinguish immediate workshop evidence from sustained changes in working habits.

Use observations and confidence ratings for learning, not individual performance rankings. Avoid generalizing from one team's experience.

## Questions to resolve through pilots

- Which outcomes are primary for each workshop, and what evidence is practical to collect?
- Is TDD a required capability in every relevant session, a learning mechanism, or both?
- What depth of technical understanding is appropriate for each audience and task?
- Which scripted interventions reliably create learning without overloading the session?
- Which practices transfer to normal work, and what support helps them persist?
