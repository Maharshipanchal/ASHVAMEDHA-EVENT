import { AnimatePresence, motion } from "framer-motion";
import { SearchX } from "lucide-react";
import EventCard from "./EventCard.jsx";

export default function EventGrid({ events, total, onViewDetails }) {
  return (
    <div>
      <div className="mb-8 flex items-baseline justify-between">
        <div>
          <h3 className="font-display text-2xl font-bold text-ash-50 sm:text-3xl">
            The Events
          </h3>
          <p className="mt-1 text-sm text-ash-400">Choose your arena.</p>
        </div>
        <p className="hud-tag text-ash-600">
          {events.length.toString().padStart(2, "0")} / {total.toString().padStart(2, "0")}
        </p>
      </div>

      {events.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-sm border border-steel/50 bg-void-panel/50 py-16 text-center">
          <SearchX size={28} className="text-ash-600" />
          <p className="text-sm text-ash-200">
            No events match that search or filter.
          </p>
          <p className="text-xs text-ash-600">
            Try a different keyword or select &ldquo;All&rdquo; to reset.
          </p>
        </div>
      ) : (
        <motion.div
          layout
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onViewDetails={onViewDetails}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
