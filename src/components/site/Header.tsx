import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Process", to: "/process" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-soft"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "container-page flex items-center justify-between transition-all duration-500",
          scrolled ? "h-16" : "h-20 md:h-24",
        )}
      >
        <Link to="/" className="group flex items-center gap-2.5" aria-label="WebMakers home">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground transition-transform duration-300 group-hover:-rotate-6">
            W
          </span>
          <span className="font-display text-lg font-bold tracking-[0.14em] text-foreground">
            WEB<span className="text-primary">MAKERS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:bg-primary-deep hover:shadow-glow sm:inline-flex"
          >
            Start a Project
            <ArrowRight className="size-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            <span className="relative block size-5">
              <Menu
                className={cn(
                  "absolute inset-0 size-5 transition-all duration-300",
                  open ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100",
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 size-5 transition-all duration-300",
                  open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/98 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="container-page flex flex-col gap-1 py-5" aria-label="Mobile">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
              className={cn(
                "rounded-xl px-3 py-3 font-display text-lg font-medium text-foreground transition-all duration-500 hover:bg-secondary",
                open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            Start a Project <ArrowRight className="size-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
