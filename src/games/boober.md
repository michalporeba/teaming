---
title: Boober
lede: A transport game about dispatching vehicles to passengers.
---

Inspired by ride dispatch and route optimisation, Boober is more accurately a **pickup-and-delivery routing problem** than a travelling-salesperson problem: passengers must be picked up before they're dropped off, vehicles have capacity, and new requests arrive over time.

## A minimal world

- A ring of about 12 stops.
- Three vehicles.
- Passengers with an origin, a destination and an arrival tick.
- Vehicles with a position, direction, capacity and passengers on board.
- Explicit tick-based rules for moving, waiting, boarding and dropping off.
- At first, no overtaking, variable speeds or realistic traffic.

The ring deliberately limits geographical complexity while keeping the decisions interesting.

## Decisions to explore

Should vehicles circulate, or reverse direction? Serve nearby requests or older ones? Specialise by area? How much spare capacity should they keep? Who owns a request, and how is duplicate assignment avoided?

Begin with a simple policy interface. Central dispatch versus individual vehicle control is an open design choice.

## Evaluation

Check validity first: legal movement, capacity, pickup before drop-off, and consistent ownership of passengers.

Then assess service, such as completed journeys and waiting time. Expose individual long waits, so a good average can't hide starvation.

## Changes

Possible changes include a closed connection, reduced capacity, a lost vehicle, shifted demand, or a new priority that protects against excessive waits rather than maximising throughput.

Announce new physics and when they take effect. The surprise should be the need to adapt, not uncertainty about whether the simulator is broken.

## In the workshops

| Workshop | How Boober is used |
| --- | --- |
| [Under pressure](/workshops/under-pressure/) | Published rules; teams compete with dispatch policies and handle interruptions |
| [Masterclass](/workshops/masterclass/) | A short stakeholder brief; teams elicit what reliable service means |
| [Leading delivery](/workshops/leading/) | Separate dispatch, vehicle-policy and evaluation workstreams coordinated by a lead |
| [Choosing how to collaborate](/workshops/choosing-how-to-collaborate/) | Independent policy modules against a stable interface |
