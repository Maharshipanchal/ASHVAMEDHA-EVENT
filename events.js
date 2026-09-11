/**
 * ASHVAMEDHA 2026-27 — EVENT DATABASE
 * ------------------------------------------------------------------
 * This is the ONLY file you need to edit to add, remove, or update
 * an event on the Events page. Nothing else in the codebase needs
 * to change.
 *
 * HOW TO ADD A NEW EVENT
 * 1. Copy any object in the `events` array below.
 * 2. Give it a unique `id` (lowercase, no spaces — used internally).
 * 3. Fill in the fields. Use "TBA" for anything not confirmed yet.
 * 4. Save the file — the site updates automatically.
 *
 * FIELD REFERENCE
 * id           unique slug, e.g. "football"
 * name         display name, e.g. "Football"
 * category     must match one of the CATEGORIES below
 * tagline      one short line shown on the card
 * description  1-3 sentence summary shown in the modal
 * date         e.g. "TBA" or "7-9 Nov 2026"
 * time         e.g. "TBA"
 * venue        e.g. "TBA"
 * type         "Team" or "Individual"
 * teamSize     e.g. "TBA", "5-a-side", "Singles / Doubles"
 * status       "Coming Soon" | "Registration Open" | "Registration Closed" | "Confirmed"
 * featured     true to show the event in "The Main Battles" section
 * icon         lucide-react icon name, see EventCard/EventModal for the map
 * rules        array of short strings; leave empty [] if not finalised
 *
 * NOTE ON ACCURACY
 * Only sports confirmed from Ashvamedha's public event history are
 * listed by default. Dates, venues, team sizes and rules are marked
 * "TBA" until the organising committee confirms them — replace those
 * placeholders directly, do not remove the field.
 */

export const CATEGORIES = [
  "All",
  "Team Sports",
  "Individual Sports",
  "Racket Sports",
  "Athletics",
  "Indoor",
  "Other",
];

export const events = [
  {
    id: "football",
    name: "Football",
    category: "Team Sports",
    tagline: "Eleven a side. One trophy.",
    description:
      "The marquee team event of Ashvamedha, drawing squads from institutes across the Eastern Zone to battle for the championship trophy IIT Bhubaneswar has defended for years.",
    date: "TBA",
    time: "TBA",
    venue: "TBA",
    type: "Team",
    teamSize: "TBA",
    status: "Coming Soon",
    featured: true,
    icon: "Trophy",
    rules: [],
  },
  {
    id: "basketball",
    name: "Basketball",
    category: "Team Sports",
    tagline: "Fast breaks. Faster finals.",
    description:
      "A high-tempo court event with knockout rounds building to a finals night that regularly closes out the fest on a high.",
    date: "TBA",
    time: "TBA",
    venue: "TBA",
    type: "Team",
    teamSize: "TBA",
    status: "Coming Soon",
    featured: true,
    icon: "CircleDot",
    rules: [],
  },
  {
    id: "volleyball",
    name: "Volleyball",
    category: "Team Sports",
    tagline: "Six on court. Zero margin.",
    description:
      "Rally-point volleyball played across the group and knockout stages, known for producing some of the fest's tightest finishes.",
    date: "TBA",
    time: "TBA",
    venue: "TBA",
    type: "Team",
    teamSize: "TBA",
    status: "Coming Soon",
    featured: true,
    icon: "Waves",
    rules: [],
  },
  {
    id: "kho-kho",
    name: "Kho-Kho",
    category: "Team Sports",
    tagline: "Chase, dodge, dominate.",
    description:
      "The traditional Indian chasing sport, added in recent editions and quickly becoming a crowd favourite for its speed and strategy.",
    date: "TBA",
    time: "TBA",
    venue: "TBA",
    type: "Team",
    teamSize: "TBA",
    status: "Coming Soon",
    featured: false,
    icon: "Zap",
    rules: [],
  },
  {
    id: "badminton",
    name: "Badminton",
    category: "Racket Sports",
    tagline: "Singles, doubles, no letting up.",
    description:
      "Fast-paced singles and doubles draws contested indoors, with finals nights that have gone the distance in past editions.",
    date: "TBA",
    time: "TBA",
    venue: "TBA",
    type: "Individual",
    teamSize: "TBA",
    status: "Coming Soon",
    featured: true,
    icon: "Feather",
    rules: [],
  },
  {
    id: "table-tennis",
    name: "Table Tennis",
    category: "Racket Sports",
    tagline: "Split-second reflexes.",
    description:
      "Rapid rallies and knockout brackets across singles and doubles categories, indoors on the fest's TT tables.",
    date: "TBA",
    time: "TBA",
    venue: "TBA",
    type: "Individual",
    teamSize: "TBA",
    status: "Coming Soon",
    featured: false,
    icon: "CircleDot",
    rules: [],
  },
  {
    id: "lawn-tennis",
    name: "Lawn Tennis",
    category: "Racket Sports",
    tagline: "Serve. Rally. Repeat.",
    description:
      "Singles and doubles matches on the institute courts, one of the longest-running events on the Ashvamedha calendar.",
    date: "TBA",
    time: "TBA",
    venue: "TBA",
    type: "Individual",
    teamSize: "TBA",
    status: "Coming Soon",
    featured: false,
    icon: "CircleDot",
    rules: [],
  },
  {
    id: "chess",
    name: "Chess",
    category: "Indoor",
    tagline: "Silent battles. Sharp minds.",
    description:
      "A test of pure strategy run alongside the field events, open to players of every rating who want to compete for the fest title.",
    date: "TBA",
    time: "TBA",
    venue: "TBA",
    type: "Individual",
    teamSize: "TBA",
    status: "Coming Soon",
    featured: false,
    icon: "Crown",
    rules: [],
  },
  {
    id: "weightlifting",
    name: "Weightlifting",
    category: "Individual Sports",
    tagline: "Raw strength on the platform.",
    description:
      "A weight-category strength event that has been part of Ashvamedha's growing sports line-up in recent editions.",
    date: "TBA",
    time: "TBA",
    venue: "TBA",
    type: "Individual",
    teamSize: "TBA",
    status: "Coming Soon",
    featured: false,
    icon: "Dumbbell",
    rules: [],
  },
];

export const getFeaturedEvents = () => events.filter((e) => e.featured);

export const getEventById = (id) => events.find((e) => e.id === id);
