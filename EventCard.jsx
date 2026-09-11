import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getEventIcon } from "../data/iconMap.js";

const STATUS_STYLES = {
  "Coming Soon": "border-ice/40 text-ice-bright",
  "Registration Open": "border-crimson-bright/60 text-crimson-bright",
  "Registration Closed": "border-ash-600 text-ash-400",
  Confirmed: "border-ice/40 text-ice-bright",
};

export default function EventCard({ event, onViewDetails, featured = false }) {
  const Icon = getEventIcon(event.icon);
  const statusStyle = STATUS_STYLES[event.status] || STATUS_STYLES["Coming Soon"];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col overflow-hidden rounded-sm border bg-void-panel/70 ${
        featured
          ? "border-crimson-bright/30 shadow-glow"
          : "border-steel/60 hover:border-ice/40"
      } transition-colors duration-300`}
    >
      <div className="relative flex h-36 items-center justify-center overflow-hidden border-b border-steel/50 bg-gradient-to-br from-void-raised to-void">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <motion.div
          className="relative z-10 rounded-full border border-steel/70 bg-void/60 p-4"
          whileHover={{ scale: 1.08, rotate: 4 }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={30} className="text-crimson-bright" strokeWidth={1.75} />
        </motion.div>
        <span
          className={`hud-tag absolute right-3 top-3 rounded-sm border px-2 py-1 ${statusStyle}`}
        >
          {event.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="hud-label text-ash-400">{event.category}</p>
        <h3 className="mt-1 font-display text-xl font-semibold text-ash-50">
          {event.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-ash-200">
          {event.tagline}
        </p>

        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs text-ash-400">
          <div>
            <dt className="hud-tag text-ash-600">Date</dt>
            <dd className="mt-0.5 text-ash-200">{event.date}</dd>
          </div>
          <div>
            <dt className="hud-tag text-ash-600">Venue</dt>
            <dd className="mt-0.5 text-ash-200">{event.venue}</dd>
          </div>
          <div>
            <dt className="hud-tag text-ash-600">Type</dt>
            <dd className="mt-0.5 text-ash-200">{event.type}</dd>
          </div>
          <div>
            <dt className="hud-tag text-ash-600">Team Size</dt>
            <dd className="mt-0.5 text-ash-200">{event.teamSize}</dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={() => onViewDetails(event)}
          className="hud-tag mt-5 flex items-center justify-center gap-2 rounded-sm border border-steel py-2.5 text-xs text-ash-50 transition-colors group-hover:border-crimson-bright group-hover:text-crimson-bright"
        >
          View Details
          <ArrowUpRight size={14} />
        </button>
      </div>
    </motion.article>
  );
}
