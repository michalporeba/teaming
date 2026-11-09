# Coding Games: Design and Hosting

Working summary of the proposed interactive games and hosting options for the [team-programming workshops](README.md).

**Status:** design exploration, not an implementation or final hosting decision. Games may become separate projects. The broader workshop platform is deferred.

Hosting information was checked against provider documentation on **8 November 2026**. Recheck prices, quotas, availability, and billing terms before deployment.

## Purpose and constraints

The games should make collaborative problem-solving visible through live simulation, competition, integration, and changing requirements.

They should support multiple teams while remaining small enough to build and operate as an individually funded hobby project.

Key constraints:

- Prefer live play and visualization over offline code submission and evaluation.
- Player code runs on participants' machines, not on the hosted server.
- The server accepts structured API actions, never arbitrary player code.
- Participants do not deploy a local server or open inbound ports.
- Use a custom domain, HTTPS, and secure WebSockets on port 443.
- Minimize preparation, dependencies, administration, and recurring cost.
- Avoid uncontrolled usage-based bills.
- Use fictional data and minimal participant information.

## Two kinds of agent

A **coding agent** helps people write or investigate a policy.

A **simulation agent** is a vehicle or elf executing that policy.

These are independent dimensions. One shared coding agent can produce several simulation-agent policies; several personal coding agents can produce a centralized controller.

Do not confuse changes to the development arrangement with changes to what simulation agents can observe or communicate.

## Boober

A transport game inspired by ride dispatch and route optimization.

It is more accurately a **pickup-and-delivery routing problem** than a travelling-salesperson problem: passengers must be picked up before being dropped off, vehicles have capacity, and new requests arrive over time.

### Minimal world

- A ring of approximately 12 stops.
- Three vehicles.
- Passengers with origin, destination, and arrival tick.
- Vehicles with position, direction, capacity, and onboard passengers.
- Explicit tick-based rules for moving, waiting, boarding, and dropping off.
- Initially no overtaking, variable speeds, or realistic traffic.

The ring deliberately limits geographical complexity while preserving interesting decisions.

### Decisions to explore

Should vehicles circulate or reverse direction? Should they serve nearby requests or older ones? Should they specialize by area? How much spare capacity should they preserve? Who owns a request, and how is duplicate assignment avoided?

Begin with a simple policy interface. Central dispatch versus individual vehicle control is an open design choice.

### Evaluation

Check validity first: legal movement, capacity, pickup-before-drop-off, and consistent passenger ownership.

Then assess service outcomes such as completed journeys and waiting time. Expose individual long waits so good averages cannot conceal starvation.

### Changes and workshop use

Possible changes include a closed connection, reduced capacity, vehicle loss, shifted demand, or a new priority that protects against excessive waits rather than maximizing throughput.

| Workshop context | Configuration |
| --- | --- |
| Level 3 | Published rules; teams compete with dispatch policies and handle interruptions |
| Level 4 | Short stakeholder brief; teams elicit what reliable service means |
| Level 5 | Separate dispatch, vehicle-policy, and evaluation workstreams coordinated by a lead |

## Elf Dispatch

A Christmas-themed coding game combining programming challenges with an Overcooked-like production simulation.

Each elf operates a station. Gifts pass through component selection, assembly, wrapping, labeling, and dispatch.

### Minimal world

- A few fixed recipes.
- Stations with defined capabilities.
- Limited buffers and component stock.
- Deterministic processing durations.
- A policy receiving an observation and returning one action per tick.

The central learning contrast is **local efficiency versus whole-system flow**.

### Communication modes

| Mode | Agent access |
| --- | --- |
| Local | Its station, adjacent buffers, and incoming work |
| Coordinated | Defined messages or shared state in addition to local observations |

Treat these as separate experiments. Keep visibility and communication constant when comparing shared versus separate coding agents.

Independent policy development can expose incompatible meanings of "ready", "reserved", or "urgent". Integration should require shared contracts and language, not merely merging source files.

### Changes and evaluation

Possible changes include station loss, scarce components, new recipe prerequisites, incorrect-label rework, or switching the objective from individual gifts to complete family bundles.

Validate recipes, inventory, and permitted actions before awarding performance scores. Evaluate system-wide outcomes rather than rewarding each station's output independently.

## Workshop mechanics

Both games should support:

- Facilitator-controlled start, pause, resume, and rule changes.
- Clearly announced changes with an effective tick.
- Temporary participant absence and handover.
- Shared-agent and separate-agent development rounds.
- Integration of independently developed policies.
- Stable scenarios and seeds for comparison.
- Event logs, replay, and distinguishing examples for investigations.
- Separate challenge and collaboration evaluation.

Competition between teams can use separate rooms with matched scenarios. Cooperation within one world can expose shared dependencies and local optimization. These are distinct arrangements; neither needs to be the universal default.

Do not secretly rig a scenario to prove that mobbing or one shared coding agent always wins. Evaluate validity, understanding, participation, integration effort, and response to change as well as performance.

## AI-ready exercises

Traditional non-AI katas remain useful for practising TDD, refactoring, tiny changes, and communication.

Familiar small katas may become too easy with AI, bypassing the reasoning and feedback loops they were intended to teach. These games are potential AI-ready exercises, not yet a proven replacement.

Useful difficulty may come from elicited requirements, competing objectives, inherited policies, changing physics, and unfamiliar but discoverable rules rather than simply more code.

Obscurity should prompt inquiry, not hidden-answer guessing. Detailed AI-ready kata design remains for later discussion.

## Live architecture

```text
Participant's browser or local API client
  - player policy runs locally
  - receives permitted observations
  - returns structured actions
  - displays game state
                 |
       outbound HTTPS / WSS
                 |
Hosted authoritative service
  - rooms and access control
  - simulation and action validation
  - scores and state broadcasts
  - checkpoints and replay
```

Example action:

```json
{
  "tick": 124,
  "vehicle": "vehicle-2",
  "action": "move",
  "direction": "clockwise"
}
```

The server computes transitions and scores. It does not trust clients reporting completed journeys, inventory changes, or earned points.

### Participant experience

Browser-based JavaScript is the lowest-friction initial option. An editor can run policies in Web Workers to keep accidental loops from freezing the UI. Source stays on the participant's machine; only actions are sent.

A Web Worker is an execution mechanism, not a complete security sandbox. Define how a stuck policy is terminated and keep policy execution separate from privileged facilitator controls.

Other languages can later use a local outbound API client. That needs a runtime but no local server, inbound port, or participant-side deployment.

### Timing and state

Start with approximately **1-5 authoritative ticks per second**, with smooth client animation between updates. These are scheduling and routing games, not twitch-action games.

The server controls simulation time. Define deadlines, late actions, missing actions, reconnects, and stale tick handling explicitly so network speed does not become the intended competitive skill.

Send compact updates rather than broadcasting the entire world unnecessarily. Checkpoint state for recovery and record enough information for useful replay.

## Corporate-network access

Serve the website and API under one domain where practical. Clients initiate connections over HTTPS or secure WebSockets on port 443.

This avoids inbound access to participants' machines, but does not guarantee corporate connectivity. Organizations may block unfamiliar domains, WebSockets, or long-lived connections.

Provide a pre-workshop connectivity check and an HTTPS polling fallback. Polling consumes more requests, so choose its frequency deliberately, especially on free hosting.

Arrange domain approval when required. Do not ask participants to bypass organizational controls.

## Security and bounded operation

Not executing submitted code removes a major hosting risk, but the API still requires protection.

- Only facilitators create and start rooms.
- Use short-lived credentials scoped to rooms and controlled entities.
- Separate spectator, player, and facilitator permissions.
- Validate message schemas, sizes, entity ownership, legal actions, and tick numbers.
- Limit rooms, participants, spectators, connections, and message rates.
- Expire abandoned rooms and stop simulation after sessions end.
- Bound checkpoint, replay, and log retention.
- Keep hosting credentials and facilitator privileges out of player policies.
- Store minimal information, such as fictional display names.

CORS is not authentication, and a secret room URL is not sufficient access control.

Application limits reduce abuse and resource consumption but do not guarantee a total bill ceiling: even rejected traffic can consume infrastructure resources.

## Hosting options

Prices below exclude domain registration, taxes, and any separately billed resources. An ordinary domain might cost roughly GBP 10-20/year as a planning estimate; check renewal pricing.

| Option | Starting cost | Strength | Cost-control caveat |
| --- | --- | --- | --- |
| Cloudflare Workers + SQLite Durable Objects, Free | USD 0 hosting | Managed rooms, WebSockets, no OS maintenance | Free quotas cause operations to fail; sessions can be interrupted |
| Cloudflare Workers Paid + Durable Objects | Minimum USD 5/month plus usage | Managed hosting with larger allowances | Budget alerts do not cap usage |
| DigitalOcean basic VPS | USD 6/month for 1 GiB RAM | Simple persistent game loop | Instance price does not cap bandwidth or extras |
| AWS Lightsail | USD 7/month for 1 GB RAM with IPv4 | Simple persistent server and predictable baseline | Transfer overages and add-ons are separate |
| GCP Cloud Run | Usage-based, with compute free allowance | Managed container; attractive for occasional workshops | WebSockets keep instances active; spend caps are scoped and not instantaneous |
| Azure Container Apps Consumption | Usage-based, with free allowance | Managed HTTPS and WebSocket container hosting | Ordinary pay-as-you-go has no arbitrary spending limit |

### Cloudflare

Use one Durable Object per room, not per vehicle or elf. A room provides an authoritative coordinator for state and connected clients.

Current free allowances include:

- Workers: 100,000 requests/day and 10 ms CPU per invocation.
- Durable Objects: 100,000 request units/day and 13,000 GB-seconds/day.
- Separate SQLite read, write, and storage quotas.

Outgoing Durable Object WebSocket messages are not charged as requests; incoming messages use the documented request-unit accounting.

Free-tier quota exhaustion produces failures rather than usage charges. Paid budget alerts are informational, not hard caps.

WebSocket hibernation saves resources when idle. A continuously ticking room remains active; frequent timers or alarms and storage writes affect quotas. Benchmark a representative session before relying on the free plan.

### Conventional VPS: DigitalOcean or AWS Lightsail

A minimal stack is:

**Caddy for HTTPS -> one game application -> SQLite**

No Kubernetes, managed database, load balancer, or message broker is required initially. The operator maintains the OS, application, backups, and access controls.

DigitalOcean's USD 6 instance includes 1 GiB RAM, 25 GiB SSD, and 1,000 GiB transfer for a full billing period. Additional outbound transfer is USD 0.01/GiB; allowances accrue with instance lifetime.

Lightsail's USD 7 Linux IPv4 bundle includes 1 GB RAM, 40 GB storage, and 2 TB transfer, subject to regional differences. A USD 5 bundle has 512 MB RAM. Avoid IPv6-only initially because corporate accessibility matters more than a small saving.

These are plausible starting sizes, not capacity guarantees. Their instance-price caps do not cap the account's total charges.

AWS Budgets supports alerts and actions, but delayed cost updates mean it is not an immediate account-wide hard cap.

API Gateway WebSockets plus Lambda is possible, but adds state, broadcast, and scheduling components instead of naturally hosting one continuous simulation loop.

### GCP Cloud Run

Deploy the game as a container with managed HTTPS and WebSockets.

Open WebSockets keep an instance active and billable. Connections time out after at most 60 minutes, so reconnects are required. In-memory state is not durable, and session affinity is best effort.

Restrict scaling and configure adequate connection concurrency, but do not assume an instance limit guarantees permanent single-process ownership or a total cost ceiling.

The instance-based monthly free allowance is currently 240,000 vCPU-seconds and 450,000 GiB-seconds, valued at the documented baseline pricing. Occasional workshops may fit within compute allowances; network, builds, image storage, logging, and persistent storage need separate consideration.

GCP now documents spend-cap budgets for Cloud Run. They apply to one eligible service in one project, use gross estimated costs before credits, and are not enforced instantaneously. In-flight work and other resources may continue accruing charges. They reduce runaway usage but are not exact account-wide invoice caps.

### Azure Container Apps

The Consumption plan offers managed container hosting, HTTPS, WebSockets, and scale-to-zero behavior.

Its current monthly free grant includes 180,000 vCPU-seconds, 360,000 GiB-seconds, and two million requests.

Design for active simulation billing, restarts, reconnection, and authoritative room ownership. Monitoring, storage, container registries, and networking can introduce separate charges.

Azure's spending limit applies to qualifying credit-based subscriptions, not ordinary pay-as-you-go. It cannot be used to set an arbitrary permanent monthly cap on a normal personal subscription.

Azure Web PubSub could handle messaging later, but still needs a simulation backend and is not necessary for the first version.

## Provisional choice

- **Strict avoidance of usage-based hosting charges:** prototype on Cloudflare Free, accepting quota-related interruption.
- **Simplest continuous server:** a small VPS, including AWS Lightsail at USD 7/month.
- **Managed hosting mainly during workshops:** GCP Cloud Run with scoped spend caps and bounded operation.
- **Existing Azure familiarity:** Container Apps is viable, but do not mistake free allowances for a spending ceiling.

No provider has been selected. Preserve a separation between simulation logic, policy protocol, and hosting adapter to keep migration practical.

## Build sequence and open decisions

1. Build a deterministic local simulation for development, with a few scenarios.
2. Add a minimal visualization, event log, and replay.
3. Define observations, actions, permissions, and timing; supply example policies.
4. Add live hosted rooms and browser participation.
5. Pilot with representative numbers of teams and measure resource use.

Local simulation in this sequence is a development tool, not a requirement for participants to deploy servers.

Before committing to hosting, resolve expected simultaneous rooms and players, session duration, tick rate, acceptable quota failures, recovery requirements, replay retention, and the desired monthly budget.

Defer elaborate visuals, broad workshop-platform features, multiple-language execution, and additional managed services until the learning mechanics work.

## Provider references

- [Cloudflare Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/)
- [Durable Objects pricing](https://developers.cloudflare.com/durable-objects/platform/pricing/)
- [Durable Objects WebSockets and hibernation](https://developers.cloudflare.com/durable-objects/best-practices/websockets/)
- [Cloudflare budget alerts](https://developers.cloudflare.com/billing/manage/budget-alerts/)
- [DigitalOcean Droplet pricing](https://www.digitalocean.com/pricing/droplets)
- [DigitalOcean bandwidth billing](https://docs.digitalocean.com/platform/billing/bandwidth/)
- [AWS Lightsail bundles](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-bundles.html)
- [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html)
- [Cloud Run WebSockets](https://docs.cloud.google.com/run/docs/triggering/websockets)
- [Cloud Run pricing](https://cloud.google.com/run/pricing)
- [GCP spend-cap budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets-spend-caps)
- [Azure Container Apps pricing](https://azure.microsoft.com/en-us/pricing/details/container-apps/)
- [Azure Container Apps ingress](https://learn.microsoft.com/en-us/azure/container-apps/ingress-overview)
- [Azure spending limits](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/spending-limit)
