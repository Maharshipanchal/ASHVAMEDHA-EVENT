import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CalendarDays, Clock, MapPin, Users, ShieldCheck } from "lucide-react";
import { getEventIcon } from "../data/iconMap.js";

export default function EventModal({ event, onClose }) {
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);

  // ESC to close + focus the close button on open, and restore focus on close.
  useEffect(() => {
    if (!event) return;

    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Basic focus trap within the dialog.
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'button, a[href], input, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [event, onClose]);

  if (!event) return null;
  const Icon = getEventIcon(event.icon);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-void/80 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-modal-title"
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-sm border border-steel/60 bg-void-panel shadow-glow"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-steel/50 bg-void-panel/95 px-6 py-4 backdrop-blur">
            <p className="hud-label">{event.category}</p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close event details"
              className="rounded-sm p-1.5 text-ash-400 hover:text-crimson-bright"
            >
              <X size={20} />
            </button>
          </div>

          <div className="px-6 py-6">
            <div className="mb-5 flex items-center gap-4">
              <div className="rounded-full border border-steel/70 bg-void p-3">
                <Icon size={26} className="text-crimson-bright" strokeWidth={1.75} />
              </div>
              <h2
                id="event-modal-title"
                className="font-display text-2xl font-bold text-ash-50"
              >
                {event.name}
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-ash-200">
              {event.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <InfoRow icon={CalendarDays} label="Date" value={event.date} />
              <InfoRow icon={Clock} label="Time" value={event.time} />
              <InfoRow icon={MapPin} label="Venue" value={event.venue} />
              <InfoRow
                icon={Users}
                label="Team Size"
                value={event.teamSize}
              />
            </div>

            <div className="mt-6 flex items-center gap-2">
              <ShieldCheck size={16} className="text-ice-bright" />
              <span className="hud-tag text-ice-bright">
                {event.status}
              </span>
            </div>

            {event.rules.length > 0 && (
              <div className="mt-6">
                <p className="hud-label mb-2">Rules</p>
                <ul className="list-inside list-disc space-y-1 text-sm text-ash-200">
                  {event.rules.map((rule, i) => (
                    <li key={i}>{rule}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#register"
                onClick={onClose}
                className="hud-tag flex-1 rounded-sm bg-crimson-bright px-5 py-3 text-center text-xs text-void"
              >
                Register Now
              </a>
              <button
                type="button"
                onClick={onClose}
                className="hud-tag flex-1 rounded-sm border border-steel px-5 py-3 text-center text-xs text-ash-200 hover:border-ice/50 hover:text-ice-bright"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-2">
      <Icon size={15} className="mt-0.5 shrink-0 text-ash-600" />
      <div>
        <p className="hud-tag text-ash-600">{label}</p>
        <p className="mt-0.5 text-sm text-ash-50">{value}</p>
      </div>
    </div>
  );
}
