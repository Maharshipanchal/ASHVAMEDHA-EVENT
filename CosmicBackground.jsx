/**
 * Lightweight, GPU-friendly decorative background: a faint technical
 * grid, a radial glow, and a slow-drifting particle field made of
 * plain CSS box-shadows (no canvas, no images, near-zero cost).
 * All motion is CSS-driven so it is automatically disabled by the
 * prefers-reduced-motion override in index.css.
 */
export default function CosmicBackground({ variant = "hero" }) {
  const particles = Array.from({ length: 40 }, (_, i) => {
    const x = (i * 53) % 100;
    const y = (i * 37) % 100;
    const size = i % 5 === 0 ? 2 : 1;
    const delay = (i % 10) * 0.6;
    return { x, y, size, delay, id: i };
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 grid-overlay opacity-60" />
      <div className="absolute inset-0 bg-radial-fade" />

      {variant === "hero" && (
        <div className="absolute -inset-1/4 animate-drift opacity-70">
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute rounded-full bg-ice-bright animate-pulse-glow"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-bright/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-void/0 via-void/0 to-void" />
    </div>
  );
}
