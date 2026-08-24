import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Instagram, MessageCircle, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";

const pages = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Process", to: "/process" },
  { label: "Contact", to: "/contact" },
] as const;

const serviceLinks = [
  "Web Design",
  "Web Development",
  "E-Commerce",
  "Custom Applications",
  "Business Systems",
];

const socials = [
  { label: "GitHub", href: "https://github.com", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "WhatsApp", href: site.whatsapp, Icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="surface-ink relative overflow-hidden">
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-page relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <span className="font-display text-xl font-bold tracking-[0.16em] text-ink-foreground">
              WEB<span className="text-accent">MAKERS</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              Building digital experiences for ambitious businesses.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer pages">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Company</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {pages.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="text-ink-muted transition-colors hover:text-ink-foreground"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Services</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-ink-muted transition-colors hover:text-ink-foreground"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-ink-muted">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 text-accent" />
                <a href={`mailto:${site.email}`} className="hover:text-ink-foreground">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-accent" />
                {site.location}
              </li>
            </ul>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 WebMakers. All Rights Reserved.</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
