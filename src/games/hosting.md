---
title: Architecture and hosting
lede: How the games could run live for several teams, safely and cheaply.
status: Hosting information was checked against provider documentation on 8 November 2026. Recheck prices, quotas, availability and billing terms before deploying. No provider has been selected.
---

## Constraints

- Prefer live play and visualisation over offline code submission and evaluation.
- Player code runs on participants' machines, not on the hosted server.
- The server accepts structured API actions, never arbitrary player code.
- Participants don't deploy a local server or open inbound ports.
- Use a custom domain, HTTPS and secure WebSockets on port 443.
- Minimise preparation, dependencies, administration and recurring cost.
- Avoid uncontrolled usage-based bills.
- Use fictional data and minimal participant information.

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

The server computes transitions and scores. It doesn't trust clients reporting completed journeys, inventory changes or earned points.

### Participant experience

Browser-based JavaScript is the lowest-friction starting point. An editor can run policies in Web Workers so accidental loops don't freeze the UI. Source stays on the participant's machine; only actions are sent.

A Web Worker is an execution mechanism, not a complete security sandbox. Define how a stuck policy is terminated, and keep policy execution separate from privileged facilitator controls.

Other languages can later use a local outbound API client. That needs a runtime but no local server, inbound port or participant-side deployment.

### Timing and state

Start with roughly **1–5 authoritative ticks per second**, with smooth client animation between updates. These are scheduling and routing games, not twitch-action games.

The server controls simulation time. Define deadlines, late actions, missing actions, reconnects and stale ticks explicitly, so network speed doesn't become the competitive skill.

Send compact updates rather than broadcasting the whole world. Checkpoint state for recovery and record enough for useful replay.

## Corporate networks

Serve the website and API under one domain where practical. Clients initiate connections over HTTPS or secure WebSockets on port 443.

This avoids inbound access to participants' machines, but doesn't guarantee corporate connectivity: organisations may block unfamiliar domains, WebSockets or long-lived connections.

Provide a pre-workshop connectivity check and an HTTPS polling fallback. Polling uses more requests, so choose its frequency deliberately, especially on free hosting. Arrange domain approval where needed, and never ask participants to bypass organisational controls.

## Security and bounded operation

Not executing submitted code removes a major hosting risk, but the API still needs protecting.

- Only facilitators create and start rooms.
- Use short-lived credentials scoped to rooms and controlled entities.
- Separate spectator, player and facilitator permissions.
- Validate message schemas, sizes, entity ownership, legal actions and tick numbers.
- Limit rooms, participants, spectators, connections and message rates.
- Expire abandoned rooms and stop simulations after sessions end.
- Bound checkpoint, replay and log retention.
- Keep hosting credentials and facilitator privileges out of player policies.
- Store minimal information, such as fictional display names.

CORS is not authentication, and a secret room URL is not enough access control. Application limits reduce abuse and resource use, but don't guarantee a total bill ceiling: even rejected traffic can consume resources.

## Hosting options

Prices exclude domain registration (roughly GBP 10–20 a year as a planning estimate; check renewal pricing), taxes and separately billed resources.

| Option | Starting cost | Strength | Cost-control caveat |
| --- | --- | --- | --- |
| Cloudflare Workers + SQLite Durable Objects, Free | USD 0 | Managed rooms, WebSockets, no OS maintenance | Free quotas cause operations to fail; sessions can be interrupted |
| Cloudflare Workers Paid + Durable Objects | USD 5/month minimum plus usage | Managed hosting with larger allowances | Budget alerts don't cap usage |
| DigitalOcean basic VPS | USD 6/month, 1 GiB RAM | Simple persistent game loop | Instance price doesn't cap bandwidth or extras |
| AWS Lightsail | USD 7/month, 1 GB RAM with IPv4 | Simple persistent server, predictable baseline | Transfer overages and add-ons are separate |
| GCP Cloud Run | Usage-based, with free compute allowance | Managed container; attractive for occasional workshops | WebSockets keep instances active; spend caps are scoped and not instantaneous |
| Azure Container Apps Consumption | Usage-based, with free allowance | Managed HTTPS and WebSocket container hosting | Ordinary pay-as-you-go has no arbitrary spending limit |

### Cloudflare

Use one Durable Object per room, not per vehicle or elf. A room gives an authoritative coordinator for state and connected clients.

Free allowances include 100,000 Worker requests a day with 10 ms CPU per invocation; 100,000 Durable Object request units and 13,000 GB-seconds a day; and separate SQLite read, write and storage quotas. Outgoing Durable Object WebSocket messages aren't charged as requests; incoming messages use the documented request-unit accounting.

Free-tier exhaustion produces failures rather than charges. Paid budget alerts are informational, not hard caps.

WebSocket hibernation saves resources when idle, but a continuously ticking room stays active, and frequent timers, alarms and storage writes affect quotas. Benchmark a representative session before relying on the free plan.

### A conventional VPS: DigitalOcean or AWS Lightsail

A minimal stack: **Caddy for HTTPS → one game application → SQLite.** No Kubernetes, managed database, load balancer or message broker is needed at first. The operator maintains the OS, application, backups and access controls.

DigitalOcean's USD 6 instance includes 1 GiB RAM, 25 GiB SSD and 1,000 GiB transfer for a full billing period; extra outbound transfer is USD 0.01/GiB, and allowances accrue with instance lifetime.

Lightsail's USD 7 Linux IPv4 bundle includes 1 GB RAM, 40 GB storage and 2 TB transfer, with regional differences. A USD 5 bundle has 512 MB RAM. Avoid IPv6-only at first: corporate accessibility matters more than a small saving.

These are plausible starting sizes, not capacity guarantees, and instance prices don't cap the account's total charges. AWS Budgets supports alerts and actions, but delayed cost updates mean it isn't an immediate hard cap.

API Gateway WebSockets plus Lambda is possible, but adds state, broadcast and scheduling components instead of naturally hosting one continuous simulation loop.

### GCP Cloud Run

Deploy the game as a container with managed HTTPS and WebSockets.

Open WebSockets keep an instance active and billable. Connections time out after at most 60 minutes, so reconnects are required. In-memory state isn't durable, and session affinity is best effort. Restrict scaling and configure adequate concurrency, but don't assume an instance limit guarantees permanent single-process ownership or a total cost ceiling.

The monthly free allowance is currently 240,000 vCPU-seconds and 450,000 GiB-seconds. Occasional workshops may fit; network, builds, image storage, logging and persistent storage need separate consideration.

GCP now documents spend-cap budgets for Cloud Run. They apply to one eligible service in one project, use gross estimated costs before credits, and aren't enforced instantly. They reduce runaway usage but aren't exact account-wide caps.

### Azure Container Apps

The Consumption plan offers managed container hosting, HTTPS, WebSockets and scale-to-zero. Its monthly free grant includes 180,000 vCPU-seconds, 360,000 GiB-seconds and two million requests.

Design for active simulation billing, restarts, reconnection and authoritative room ownership. Monitoring, storage, container registries and networking can add charges.

Azure's spending limit applies to qualifying credit-based subscriptions, not ordinary pay-as-you-go, so it can't set an arbitrary monthly cap on a normal personal subscription. Azure Web PubSub could handle messaging later, but still needs a simulation backend.

## Provisional choice

- **Strictly avoiding usage-based charges:** prototype on Cloudflare Free, accepting quota-related interruption.
- **Simplest continuous server:** a small VPS, such as AWS Lightsail at USD 7/month.
- **Managed hosting mainly during workshops:** GCP Cloud Run with scoped spend caps and bounded operation.
- **Existing Azure familiarity:** Container Apps is viable, but free allowances aren't a spending ceiling.

Keep simulation logic, policy protocol and hosting adapter separate, so migrating stays practical.

## Build sequence

1. A deterministic local simulation for development, with a few scenarios.
2. A minimal visualisation, event log and replay.
3. Defined observations, actions, permissions and timing, with example policies.
4. Live hosted rooms and browser participation.
5. A pilot with representative numbers of teams, measuring resource use.

The local simulation is a development tool, not something participants deploy. A hosted server earns its place by supporting live interaction, distributed clients and cross-team integration; it isn't needed merely to develop policies separately and merge them.

Before committing to hosting, decide expected simultaneous rooms and players, session length, tick rate, acceptable quota failures, recovery requirements, replay retention and the monthly budget. Defer elaborate visuals, broad platform features, multi-language execution and extra managed services until the learning mechanics work.

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
