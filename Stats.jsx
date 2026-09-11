import useCountUp from "../hooks/useCountUp.js";

/**
 * NOTE: values below are placeholders modelled on past editions'
 * publicly reported numbers. Replace with confirmed 2026-27 figures
 * once available.
 */
const STATS = [
  { value: 9, suffix: "+", label: "Sports" },
  { value: 800, suffix: "+", label: "Athletes" },
  { value: 23, suffix: "+", label: "Institutions" },
  { value: 1, suffix: "", label: "Champion" },
];

function StatItem({ value, suffix, label }) {
  const { ref, value: count } = useCountUp(value);
  return (
    <div ref={ref} className="flex flex-col items-center gap-1 px-4 py-6 text-center">
      <p className="font-display text-4xl font-bold text-ash-50 sm:text-5xl">
        {count}
        <span className="text-crimson-bright">{suffix}</span>
      </p>
      <p className="hud-tag text-ash-400">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative border-y border-steel/40 bg-void-panel/40 px-4 py-4 sm:px-6">
      <div className="mx-auto grid max-w-5xl grid-cols-2 divide-y divide-steel/30 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
