import { Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Schedule", href: "#schedule" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
];

// Replace href="#" placeholders with the fest's live social links.
const SOCIALS = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
  { label: "WhatsApp", icon: MessageCircle, href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-steel/40 bg-void-panel/60 px-4 py-14 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold text-ash-50">
            ASHVA<span className="text-crimson-bright">MEDHA</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-ash-400">
            The Annual Sports Fest of IIT Bhubaneswar.
          </p>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="rounded-sm border border-steel p-2 text-ash-400 transition-colors hover:border-crimson-bright/60 hover:text-crimson-bright"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="hud-label mb-3">Navigate</p>
          <ul className="space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-ash-200 hover:text-ice-bright"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="hud-label mb-3">Contact</p>
          <address className="text-sm not-italic leading-relaxed text-ash-200">
            Sports Council, Students&rsquo; Gymkhana
            <br />
            IIT Bhubaneswar, Argul, Khordha, Odisha &ndash; 752050
            <br />
            <span className="text-ash-400">
              [ Committee email / phone — replace with the current
              coordinators&rsquo; details ]
            </span>
          </address>
        </div>
      </div>

      <div className="tech-rule mx-auto mt-10 max-w-6xl" />
      <p className="mx-auto mt-6 max-w-6xl text-xs text-ash-600">
        © {new Date().getFullYear()} Ashvamedha, IIT Bhubaneswar. Built for
        the 2026&ndash;27 edition.
      </p>
    </footer>
  );
}
