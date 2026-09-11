import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section
      id="about"
      className="relative border-t border-steel/40 bg-void px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,220px)_1fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="hud-label">// Event Database</p>
          <p className="hud-label mt-1 text-ash-400">Ashvamedha 2026&ndash;27</p>
          <div className="tech-rule mt-4 w-16" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="font-display text-3xl font-bold text-ash-50 sm:text-4xl">
            The Arena Awaits
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ash-200 sm:text-base">
            From the field to the court, every battle at Ashvamedha demands
            skill, strategy and the will to dominate. Teams from across the
            Eastern Zone converge on IIT Bhubaneswar to compete for a trophy
            the institute has defended edition after edition — this year,
            under the shadow of Doomsday.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
