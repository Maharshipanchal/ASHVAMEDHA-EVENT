import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CosmicBackground from "./CosmicBackground.jsx";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden bg-void px-4 pt-16 text-center sm:px-6"
    >
      <CosmicBackground variant="hero" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-4xl flex-col items-center"
      >
        <motion.p variants={item} className="hud-label mb-5">
          System Online // Ashvamedha 2026&ndash;27
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-[15vw] font-bold leading-[0.95] tracking-tight text-ash-50 sm:text-7xl md:text-8xl lg:text-[7.5rem]"
        >
          ASHVAMEDHA
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-2 font-display text-xl font-semibold tracking-[0.2em] text-ice-bright sm:text-2xl"
        >
          2026&ndash;27
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 font-display text-3xl font-bold tracking-[0.3em] text-crimson-bright sm:text-4xl md:text-5xl"
        >
          DOOMSDAY
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-sm text-ash-200 sm:text-base"
        >
          The battle begins. Every court, every field, every arena at IIT
          Bhubaneswar becomes a front line — where champions rise.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#events"
            className="hud-tag rounded-sm bg-crimson-bright px-7 py-3 text-xs text-void shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Explore Events ↓
          </a>
          <a
            href="#register"
            className="hud-tag rounded-sm border border-ice/40 px-7 py-3 text-xs text-ice-bright transition-colors hover:border-ice-bright hover:bg-ice-bright/10"
          >
            Register Now
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to next section"
        className="absolute bottom-8 z-10 text-ice/60"
        animate={reduceMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  );
}
