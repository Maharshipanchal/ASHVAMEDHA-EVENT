import {
  Trophy,
  CircleDot,
  Waves,
  Zap,
  Feather,
  Crown,
  Dumbbell,
  Medal,
} from "lucide-react";

/**
 * Maps the `icon` string used in events.js to an actual lucide-react
 * component. Add new entries here if you introduce a new icon name
 * in events.js.
 */
export const ICON_MAP = {
  Trophy,
  CircleDot,
  Waves,
  Zap,
  Feather,
  Crown,
  Dumbbell,
  Medal,
};

export function getEventIcon(name) {
  return ICON_MAP[name] || Medal;
}
