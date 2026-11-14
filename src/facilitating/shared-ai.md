---
title: Shared AI operating model
lede: How a team works with one coding agent without handing it the decisions.
---

Used in the [shared AI workshop](/workshops/shared-ai/) and in later workshops where each team has one shared agent.

## Two roles

<dl>
<dt>Navigator</dt>
<dd>Facilitates the next team decision and states the intended change.</dd>
<dt>Driver / operator</dt>
<dd>Turns agreed intent into a prompt, operates the tools and makes results visible. Doesn't privately add requirements or accept changes.</dd>
<dt>Everyone else</dt>
<dd>Actively contributes examples, alternatives and questions.</dd>
</dl>

The AI is not the navigator, and not a substitute for human agreement.

## The rule

> Before an idea becomes a prompt, another person must be able to explain it. Before generated work is accepted, the team must have evidence that it meets the agreed intent.

This is a workshop adaptation, not a rule from the original team-programming sources.

## The decision loop

1. **Discuss** — identify the desired behavior and the uncertainty.
2. **Specify** — agree on an example and its expected result.
3. **Predict** — say what should fail now, and why.
4. **Delegate** — ask for one bounded change.
5. **Inspect** — look at the relevant diff and run the agreed checks.
6. **Explain** — someone other than the operator explains the result and the next decision.

Separate creating tests from implementing them. Otherwise the AI can produce a test and a solution that agree with each other before the team has considered whether either expresses the right behavior.

Participants don't need to understand every library detail or dictate every token. They do need to understand the domain behavior, the significant implementation choices and the evidence for accepting the work.

Start with 5–7 minute rotations and adjust for the group. Rotate even while the AI is running — starting a request doesn't make it yours.

## Working agreement

Use one projected conversation, one authoritative workspace and a short visible record:

**current goal · agreed rules · open questions · next example**

- Ask about material ambiguities rather than silently choosing a policy.
- Keep changes small enough for the whole team to inspect.
- Don't rewrite tests just to accommodate generated behavior.
- Agree before adding dependencies, using external services or doing anything destructive.
- No private implementation agents during shared-agent rounds.
- Use synthetic workshop data; never expose real personal or confidential information.
- Bring parallel research back to the team before it becomes a decision.

While the AI works, predict outcomes, look for counterexamples or clarify rules — rather than watching the output stream past.

## Starting prompt

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
