import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { events as allEvents, getFeaturedEvents } from "../data/events.js";
import EventFilters from "./EventFilters.jsx";
import FeaturedEvents from "./FeaturedEvents.jsx";
import EventGrid from "./EventGrid.jsx";

export default function EventsSection({ onViewDetails }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const featured = useMemo(() => getFeaturedEvents(), []);

  const filteredEvents = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allEvents.filter((event) => {
      const matchesCategory =
        activeCategory === "All" || event.category === activeCategory;
      const matchesQuery =
        !q ||
        event.name.toLowerCase().includes(q) ||
        event.category.toLowerCase().includes(q) ||
        event.tagline.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section
      id="events"
      className="relative bg-void px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Only show the featured strip while browsing the unfiltered list,
            so it doesn't visually duplicate a narrowed-down search. */}
        {activeCategory === "All" && !query && (
          <FeaturedEvents events={featured} onViewDetails={onViewDetails} />
        )}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 rounded-sm border border-steel/50 bg-void-panel/40 p-4 sm:p-5"
        >
          <EventFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            query={query}
            onQueryChange={setQuery}
          />
        </motion.div>

        <EventGrid
          events={filteredEvents}
          total={allEvents.length}
          onViewDetails={onViewDetails}
        />
      </div>
    </section>
  );
}
