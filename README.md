# Team Programming Workshops

Hands-on workshops for teams learning to think, decide and build together — with and without AI.

**Read it at [michalporeba.github.io/teaming](https://michalporeba.github.io/teaming/).**

Five progressive workshops, from the foundations of team programming to leading several teams, each with its objectives and a guide to running it. The site also covers the intended outcomes, facilitation material and two proposed games.

This is a working proposal. The original non-AI workshops have been run successfully for several years; the AI adaptations, games and leadership workshop have not been piloted yet.

## Editing the site

The site is built with [Eleventy](https://www.11ty.dev/) and published automatically: every push to `main` is deployed to GitHub Pages by [`.github/workflows/pages.yml`](.github/workflows/pages.yml).

All content is Markdown in `src/`:

| Path | What it is |
| --- | --- |
| `src/index.md` | Landing page (the workshop list is generated) |
| `src/workshops/*.md` | One page per workshop |
| `src/facilitating/*.md` | Shared practices, piloting, training facilitators |
| `src/games/*.md` | Game designs and hosting notes |
| `src/about.md`, `src/outcomes.md` | Background and intended outcomes |
| `src/_data/site.js` | Site title, description and footer links |
| `src/_includes/layouts/` | Page templates |
| `src/assets/style.css` | All styling |

### Workshop pages

Each workshop starts with front matter that the template turns into the page header, the landing-page list and the previous/next links:

```yaml
---
title: Team programming with one shared AI
short: One shared AI          # optional, used in previous/next links
question: Can a team keep understanding and owning its work when AI writes the code?
order: 2                      # position on the landing page
length: 3 hours
group: one team
ai: one shared coding agent
status: Not yet piloted.      # shown at the bottom of the page
additional: true              # only for workshops outside the numbered sequence
plan:                         # optional session plan
  - title: Opening
    minutes: 15
    notes: What happens in this step. Markdown links work here.
---
```

Write `{% sessionPlan plan %}` in the body where the plan should appear. If every step has a number of `minutes`, start times are calculated automatically; otherwise steps are numbered.

Use the same structure in the body: `## Objectives`, then `## How to run it` with `###` subsections.

Link between pages with root-relative paths such as `/workshops/foundations/`. They are adjusted automatically for the GitHub Pages address. Every heading gets an anchor, e.g. `/facilitating/cards-exercise/#optional-ai-round`.

### Previewing locally

Requires Node.js 22 or later.

```sh
npm install
npm start          # serves the site at http://localhost:8080 and reloads on change
```
