import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
};

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="surface-ink relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <span
        className="pointer-events-none absolute -right-32 -top-24 size-[26rem] rounded-full bg-accent/15 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            {eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.07] text-ink-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">{subtitle}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
