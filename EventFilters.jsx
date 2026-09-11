import { Search, X } from "lucide-react";
import { CATEGORIES } from "../data/events.js";

export default function EventFilters({
  activeCategory,
  onCategoryChange,
  query,
  onQueryChange,
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div
        role="group"
        aria-label="Filter events by category"
        className="flex flex-wrap gap-2"
      >
        {CATEGORIES.map((cat) => {
          const active = cat === activeCategory;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={active}
              onClick={() => onCategoryChange(cat)}
              className={`hud-tag rounded-sm border px-4 py-2 text-xs transition-all duration-200 ${
                active
                  ? "border-crimson-bright bg-crimson-bright text-void shadow-glow"
                  : "border-steel text-ash-200 hover:border-ice/50 hover:text-ice-bright"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <label className="relative flex w-full items-center md:w-64" htmlFor="event-search">
        <Search
          size={16}
          className="pointer-events-none absolute left-3 text-ash-400"
          aria-hidden="true"
        />
        <span className="sr-only">Search events</span>
        <input
          id="event-search"
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search events..."
          className="w-full rounded-sm border border-steel bg-void-panel/60 py-2.5 pl-9 pr-9 text-sm text-ash-50 placeholder:text-ash-600 focus:border-crimson-bright/70"
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            aria-label="Clear search"
            className="absolute right-3 text-ash-400 hover:text-ash-50"
          >
            <X size={15} />
          </button>
        )}
      </label>
    </div>
  );
}
