---
title: Games
lede: Live simulations that make collaborative problem-solving visible.
back: { url: "/", label: "Home" }
status: Design exploration. Nothing has been built yet, and the games may become separate projects.
---

The games should make collaboration visible through live simulation, competition, integration and changing requirements — supporting several teams while staying small enough to build and run as a personally funded hobby project.

- [Boober](/games/boober/) — a transport game about dispatching vehicles to passengers.
- [Elf Dispatch](/games/elf-dispatch/) — a Christmas production line where local efficiency fights whole-system flow.
- [Architecture and hosting](/games/hosting/) — how the games could run live, safely and cheaply.

## Two kinds of agent

A **coding agent** helps people write or investigate a policy. A **simulation agent** is a vehicle or elf executing that policy.

These are independent. One shared coding agent can produce several simulation-agent policies; several personal coding agents can produce one central controller. Don't confuse a change in how the team develops with a change in what simulation agents can see or communicate.

## Using the games in workshops

Both games should support:

- facilitator-controlled start, pause, resume and rule changes
- clearly announced changes with an effective tick
- temporary participant absence and handover
- shared-agent and separate-agent development rounds
- integration of independently developed policies
- stable scenarios and seeds for comparison
- event logs, replay and distinguishing examples for investigation
- separate evaluation of the challenge and of collaboration

Competition between teams can use separate rooms with matched scenarios. Cooperation within one world can expose shared dependencies and local optimisation. Both are valid; neither needs to be the default.

Don't secretly rig a scenario to prove that mobbing or one shared coding agent always wins. Evaluate validity, understanding, participation, integration effort and response to change, as well as performance.

## AI-ready exercises

Traditional katas still have a place: they support deliberate practice of TDD, refactoring, small changes and the communication mechanics of team programming. The foundations workshop stays explicitly non-AI.

But AI can solve familiar small katas so quickly that the intended learning disappears. The problem isn't too little code — generation can skip the discussion and feedback loops the exercise was designed to create. The [Samman Society's October 2026 position on agentic AI](https://www.sammancoaching.org/society/agentic_ai.html) describes related challenges: small katas losing their challenge, TDD changing when agents write code and tests, and delay and communication overload in ensembles.

These games are candidate AI-ready exercises, not yet a proven replacement. Useful difficulty may come from elicited domain rules, competing objectives, inherited policies, changing world physics, and unfamiliar but discoverable rules — rather than simply more code.

Obscure rules should prompt inquiry, not hidden-answer guessing. Changes should say when they take effect. AI-ready exercises should keep humans deciding what to build and evaluating what was produced. Whether to call them katas, games or simulations, and how to structure them, is still open.
