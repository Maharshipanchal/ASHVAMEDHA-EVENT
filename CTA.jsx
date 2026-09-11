import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import CosmicBackground from "./CosmicBackground.jsx";

export default function CTA() {
  return (
    <section
      id="register"
      className="relative flex flex-col items-center overflow-hidden border-t border-steel/40 bg-void px-4 py-24 text-center sm:px-6"
    >
      <CosmicBackground variant="cta" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex max-w-2xl flex-col items-center"
      >
        <p className="hud-label mb-4">Final Transmission</p>
        <h2 className="font-display text-3xl font-bold text-ash-50 sm:text-5xl">
          The Battle Awaits.
        </h2>
        <p className="mt-4 text-sm text-ash-200 sm:text-base">
          Step into the arena. Represent your institution. Make your mark.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#events"
            className="hud-tag rounded-sm bg-crimson-bright px-7 py-3 text-xs text-void shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Register Now
          </a>
          <a
            href="#home"
            className="hud-tag flex items-center gap-2 rounded-sm border border-ice/40 px-7 py-3 text-xs text-ice-bright transition-colors hover:border-ice-bright hover:bg-ice-bright/10"
          >
            Back to Top <ArrowUp size={14} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
