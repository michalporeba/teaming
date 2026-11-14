---
title: Foundations of team programming
short: Foundations
question: Can we think together and move ideas between people?
order: 1
length: 3 hours
group: one team
ai: no AI, including autocomplete
status: Adapted from an introductory workshop that has been run successfully for several years.
plan:
  - title: The cards exercise
    notes: Three short rounds contrasting a separable task with shared decisions. See [the cards exercise](/facilitating/cards-exercise/).
  - title: Choose a challenge
    notes: Pick a small, clearly specified exercise, often Roman numerals.
  - title: Break
    notes: Take the break before any programming starts.
  - title: Facilitator-led start
    notes: The facilitator navigates while participants rotate through driving — setting up the project, the test harness, the first failing test and the smallest implementation.
  - title: Introduce the roles
    notes: Explain what just happened, then introduce strict driver and navigator roles with frequent timed rotation.
  - title: Coached practice
    minutes: 30
    notes: Coach the team while they work.
  - title: Independent practice
    minutes: 30–60
    notes: Let the team continue on its own.
  - title: Review
    notes: Review progress and experience, whether or not the exercise is complete.
  - title: Refactoring finale
    notes: The facilitator takes over and refactors rapidly, deliberately relaxing the strict role rules.
  - title: Debrief
    notes: Discuss the contrast, how test-first development helped, and team code ownership.
---

## Objectives

By the end, participants should be able to:

- Work as one team at one computer, using strict driver and navigator roles.
- Move an idea from one person's head, through another person's hands, into the code.
- Use test-first development and small steps to explore behavior.
- Agree on an example before implementing it, and ask clarifying questions.
- Explain why the code belongs to the team rather than to whoever typed it.

## How to run it

### Before the session

- A single in-person team. No previous experience of team programming, TDD or Git is needed.
- One computer, a large screen and a timer for rotations.
- A working environment for the chosen exercise, with a test command.
- A deck of icebreaker question cards for the opening exercise.
- AI tools, including autocomplete, switched off.

### Session plan

{% sessionPlan plan %}

### The key principle

> For an idea to go from someone's head into the computer, it must go through someone else's hands.

Make sure everyone experiences both the driver and the navigator role.

### Exercises

Keep problems small and clearly specified. The difficulty should be learning to collaborate and to work test-first, not discovering a complicated domain.

Introduce discovery in a small way: participants can ask clarifying questions and agree on an example before implementing. Don't make this workshop depend on uncovering obscure requirements.

| Exercise | Initial scope | Progression | Emphasis |
| --- | --- | --- | --- |
| Roman numerals | Convert integers 1–3,999; leave invalid input out at first | Additive forms, subtractive forms, then combinations; refactor under the same tests | Small steps, alternative designs, collective ownership |
| Bowling score | Score legal rolls, starting with gutter and all-ones games | Spares, strikes, final-frame rules; another participant explains each example | Shared understanding of state and interacting rules |
| Shopping basket offers | Integer pennies; three identical items for the price of two; no stacking | Explore quantities two, three, four and six before running tests | Boundary examples; separating policy from implementation |
| Christmas: Advent calendar | Which doors can be opened, given the date and doors already opened | Missed days, already opened doors, date boundaries | Expressing explicit rules through examples |
| New Year: countdown display | Format non-negative seconds; zero becomes "Happy New Year!" | Singular and plural forms, unit boundaries | Incremental development; safe refactoring |

### Notes for facilitators

- Keep the facilitator's refactoring finale. The contrast with the strict roles is what starts the conversation about code ownership.
- A short discussion of TDD styles, such as the London and Chicago schools, can follow where useful. Don't let it displace the collaboration objective.
- If participants ask why they aren't using AI, run the optional [AI round of the cards exercise](/facilitating/cards-exercise/#optional-ai-round). It answers the question through experience, without anyone using AI while programming.
