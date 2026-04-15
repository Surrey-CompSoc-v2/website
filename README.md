# Surrey CompSoc Website

## Description

This repository contains the source code and configuration for the official Computer Science Society website at the University of Surrey.
Access to this repository is restricted to committee members of the Society’s GitHub organization.

## Features

The website serves as the central hub for:
- Announcing upcoming events, talks, and hackathons
- Displaying information about the committee and the society’s mission
- Sharing resources and opportunities for Computer Science students
- Enabling members to connect with one another and engage with society activities

## Web Developers

- [Cristina Gheorghe](https://www.linkedin.com/in/cristina-gheorghe-0a6053285/)
- [Raghav Commandur](https://www.linkedin.com/in/raghavcommandur/)

---

## Tech Stack (what is actively used)

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4** + `tw-animate-css`
- **Framer Motion / motion** (committee card animations + gradient animation)
- **Three.js** (shader-based `FloatingLines` background)
- **react-icons** (social, nav accents, profile links)

Notes:
- Path alias is enabled: `@/*` → repo root (see `tsconfig.json`).
- Most content pages are server components by default; components using browser APIs are marked `"use client"`.

---

## Route-by-Route Behavior

### `/` (Homepage)
Composed in `app/page.tsx` using this order:

1. `LandingHero`
2. `Hero` (about section)
3. `EventTypes`
4. `FeaturedSignatories`
5. `Socials`
6. `Footer`

This is intentionally modular so each section can evolve independently without touching the page scaffold.

### `/committee`
- Intro copy + grouped rendering via `TeamSection`
- Groups are explicitly ordered:
	- Signatories
	- Wellbeing Champions
	- Non-Signatories

### `/coming-soon`
- Placeholder template used by nav links that are not implemented yet.
- Includes socials and CTA buttons so incomplete pages still feel intentional.

### `404`
- Custom black-theme not-found page with return-home CTA.

---

## Deep Component Notes (for maintainers)

### `components/Navbar.tsx`

What it does:
- Handles desktop and mobile nav rendering
- Toggles hamburger menu state
- Computes its own height and writes CSS variable `--navbar-height`

Why that variable matters:
- `LandingHero` offsets itself with `marginTop: calc(var(--navbar-height) * -1)` so the animated header sits flush under the transparent navbar on home.

Routing behavior:
- Uses `usePathname()` to switch navbar background:
	- Home: transparent
	- Other pages: black

### `app/components/LandingHero.tsx`

What it does:
- Hosts `FloatingLines` as the animated visual layer
- Displays society intro copy and “Scroll” indicator

Key design choice:
- `interactive={false}` here, so the animation is ambient and not pointer-reactive on the landing section.

### `components/FloatingLines.tsx`

What it is:
- A reusable Three.js shader component for animated wave lines.

Important implementation details:
- Supports configurable wave bands (`top`, `middle`, `bottom`)
- Supports interactive pointer-bending + parallax (toggleable via props)
- Uses `ResizeObserver` to keep uniforms synced with container size
- Cleans up WebGL resources (`geometry/material/renderer`) on unmount

Maintenance warning:
- This component is powerful but sensitive; if you change uniforms or shader strings, test on both desktop and mobile for performance and rendering artifacts.

### `app/components/Hero.tsx`

Role:
- “Who are we?” narrative section.
- Includes image, external links, and a stylized membership CTA using `.btn-outline-fancy` + `GradientText`.

### `app/components/Event_Types.tsx`

Role:
- Renders event cards from `app/data/events.ts`.
- Wraps each card with `SpotlightCard` for hover lighting.

Data-driven behavior:
- To add/remove event types, update `eventCards`; UI maps directly from data.

### `components/SpotlightCard.tsx`

Role:
- Generic interactive card shell with radial spotlight following cursor.
- Also supports keyboard focus state (`onFocus`/`onBlur`) for accessibility feedback.

### `app/components/FeaturedSignatories.tsx`

Role:
- Presents top signatories as a homepage teaser.
- Includes CTA to full committee page.

### `app/committee/components/TeamSection.tsx`

Role:
- Animated member cards using Framer Motion stagger.
- Displays member photo, role, bio, year, and optional social links.

Edge behavior:
- Missing photo shows a placeholder block.
- LinkedIn/GitHub icons render only when URL is provided.

### `app/components/Socials.tsx` and `components/Footer.tsx`

Shared model:
- Both consume `app/data/socials.ts`.
- `Footer` also consumes `app/data/navLinks.ts` for link lists.

Impact:
- Updating socials/nav data automatically updates multiple surfaces.

---

## Data Layer (where content edits should happen)

### `app/data/navLinks.ts`
- Top-level nav labels and destinations.
- Several entries intentionally point to `/coming-soon` until routes are built.

### `app/data/events.ts`
- Homepage event card metadata:
	- title
	- description
	- image
	- alt text

### `app/data/committee.ts`
- Typed source of committee members.
- Group values must remain one of:
	- `Signatories`
	- `Wellbeing Champions`
	- `Non-Signatories`

### `app/data/socials.ts`
- Central definition of social links + icon component references.

---

## Styling System

Global styles live in `app/globals.css`.

Key pieces:
- Tailwind v4 imports + theme variables
- Font setup (`Tomorrow` via Next Font, `Source Code Pro` utility class)
- Shared button primitives:
	- `.btn-outline-fancy`
	- `.btn-outline-fancy-ghost`
- Utility class `.font-source-code`

## Accessibility & Performance Notes

- External links use `target="_blank"` + `rel="noopener noreferrer"`.
- `Image` from Next.js is used broadly for optimization.
- Interactive components include hover/focus support where applicable.
- Three.js effect is isolated and cleaned up properly, but still the heaviest UI component—avoid unnecessary prop churn and test low-power devices.

---

## Known Gaps / Intentional Placeholders

- `EVENTS`, `RESOURCES`, `SPONSORS`, and `CONTACT US` are currently routed to `/coming-soon`.