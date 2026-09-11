# Ashvamedha 2026–27 — Events Page

## Project

The Events / Show All Events page for **Ashvamedha**, the annual sports
fest of IIT Bhubaneswar, built for the **2026–27 "Doomsday" edition**. It
presents every event in a searchable, filterable grid with a detailed
modal for each sport, on top of a dark, futuristic visual identity that
still reads as a professional institute-fest website rather than a fan
page.

The page is a self-contained React app (`Navbar → Hero → Intro →
Events → Stats → CTA → Footer`) meant to be dropped into the main
Ashvamedha site as the `/showall` route.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion (animation)
- lucide-react (icons)

No large UI kit or component library is used — every visual piece is a
small, hand-built component so it stays easy to restyle.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens the dev server (default: http://localhost:5173) with hot reload.

## Production Build

```bash
npm run build
```

Outputs a static, deployable build to `dist/`. Preview it locally with
`npm run preview`.

## Project Structure

```
src/
  components/     UI building blocks (Navbar, Hero, EventCard, EventModal, ...)
  data/
    events.js      <-- the ONLY file you need to edit to change event content
    iconMap.js      maps an icon name string to a lucide-react icon
  hooks/           small reusable hooks (scroll state, count-up, etc.)
  App.jsx          page composition
  index.css        Tailwind layers + HUD/utility styles
```

## Event Data

All event content — name, category, date, venue, team size, status,
rules, description, and which events appear in "The Main Battles" —
lives in **`src/data/events.js`**. Nothing else in the codebase needs
to change to add, remove, or edit an event; open that file, follow the
comment block at the top, and save.

Dates, venues, team sizes, and rules are currently marked `"TBA"` for
events that have not yet been confirmed by the organising committee for
this edition — replace those placeholder strings directly once details
are locked in. Only sports with a confirmed history at Ashvamedha
(Football, Basketball, Volleyball, Kho-Kho, Badminton, Table Tennis,
Lawn Tennis, Chess, Weightlifting) are included by default; add new
event objects the same way if the committee confirms more.

The category filter list (`CATEGORIES` in the same file) already
includes `Athletics` and `Other` for events not yet added — the filter
UI will simply show an empty state for a category with no events yet.

## Notes for the next developer

- **Contact details** in the footer (`src/components/Footer.jsx`) and
  **social links** are placeholders — swap in the current committee's
  email, phone, and live social URLs.
- **Statistics** in `src/components/Stats.jsx` (sports / athletes /
  institutions count) are placeholders modelled on recent editions —
  update with confirmed 2026–27 numbers closer to the fest.
- All non-user-triggered animation respects `prefers-reduced-motion`
  (see the media query in `src/index.css` and the `useReducedMotion`
  checks in `Hero.jsx` / `useCountUp.js`).
- The modal closes on **Esc**, on backdrop click, or the close button,
  and traps focus while open for keyboard users.
