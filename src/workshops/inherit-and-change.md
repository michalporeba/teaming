---
title: Inherit and change
question: Can a team safely understand and change a system it didn't write?
additional: true
order: 1
group: one team, familiar with role rotation
ai: with or without AI
status: A proposal to develop and pilot. The detailed design is still open.
plan:
  - title: Run it
    notes: Run the existing system and inspect the available tests and requirements.
  - title: Understand it
    notes: Build a shared understanding of the important behavior and of unresolved assumptions.
  - title: Pin it down
    notes: Add characterization tests where evidence is missing, separating observed behavior from desired policy.
  - title: Tidy it
    notes: Make a series of tiny refactorings, checking after each that agreed behavior is intact and the system still runs.
  - title: Specify the change
    notes: Elicit and specify the requested behavior change, separately from refactoring.
  - title: Make the change
    notes: Implement it incrementally, then hand the result to another participant or team.
---

## Objectives

By the end, participants should be able to:

- Build shared understanding of an unfamiliar, awkward codebase before changing it.
- Separate what the system does from what it should do, using characterization tests.
- Improve a system in tiny steps while keeping it working throughout.
- Treat AI explanations of inherited code as claims to verify, not as documentation.

## How to run it

This adapts an existing individual workshop, based on the **Gilded Rose refactoring kata**, into a team-programming session. The original showed the benefits of making tiny changes to an existing codebase while keeping it working. Keep that emphasis: understand, establish evidence and improve incrementally rather than replace wholesale.

It bridges workshop exercises and everyday work on existing systems, and turns the [one-shot finale](/workshops/shared-ai/#receive-a-finished-solution-the-one-shot-finale) of the shared AI workshop into a full practice exercise.

### Before the session

- A working but awkward implementation the participants didn't write, with its existing behavior and a small requested change.
- Runnable tests, or a way to run the system and observe its behavior.

### Session outline

{% sessionPlan plan %}

Rotate frequently, so understanding doesn't collect with whoever explored the code first. Judge the result on continuity, explainability and safe change, not on the size of the rewrite.

### With and without AI

It can run as a non-AI session or as a shared-AI session. Gilded Rose is well known, so an AI-assisted version may need a small bespoke extension or an inherited variant to keep meaningful reasoning in the exercise.
