import { motion } from "framer-motion";
import EventCard from "./EventCard.jsx";

export default function FeaturedEvents({ events, onViewDetails }) {
  if (!events.length) return null;

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <p className="hud-label">Sector 01 // Arena Active</p>
        <h3 className="mt-1 font-display text-2xl font-bold text-ash-50 sm:text-3xl">
          The Main Battles
        </h3>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            featured
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </div>
  );
}
