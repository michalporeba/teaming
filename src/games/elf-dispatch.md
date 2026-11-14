---
title: Elf Dispatch
lede: A Christmas production line where local efficiency fights whole-system flow.
---

A Christmas-themed game combining programming challenges with an Overcooked-like production simulation. Each elf operates a station, and gifts pass through component selection, assembly, wrapping, labelling and dispatch.

## A minimal world

- A few fixed recipes.
- Stations with defined capabilities.
- Limited buffers and component stock.
- Deterministic processing times.
- A policy that receives an observation and returns one action per tick.

The central learning contrast is **local efficiency versus whole-system flow**.

## Communication modes

| Mode | What an elf can access |
| --- | --- |
| Local | Its own station, adjacent buffers and incoming work |
| Coordinated | Defined messages or shared state, as well as local observations |

Treat these as separate experiments. Keep visibility and communication the same when comparing shared and separate coding agents.

Developing policies independently can expose incompatible meanings of "ready", "reserved" or "urgent". Integration should require shared contracts and language, not just merging source files.

## Changes and evaluation

Possible changes include losing a station, scarce components, new recipe prerequisites, rework for incorrect labels, or switching the objective from individual gifts to complete family bundles.

Validate recipes, inventory and permitted actions before awarding performance scores. Evaluate system-wide outcomes rather than rewarding each station's output on its own.

## In the workshops

Elf Dispatch appears in [collaborative delivery under pressure](/workshops/under-pressure/), [leading collaborative delivery](/workshops/leading/) and, as separate gift-recipe validators, in [choosing how to collaborate](/workshops/choosing-how-to-collaborate/).
