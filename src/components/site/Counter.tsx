import { useEffect, useState } from "react";
import { useInView } from "./Reveal";

type CounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

export function Counter({ value, suffix = "", label }: CounterProps) {
  const { ref, visible } = useInView<HTMLDivElement>(0.4);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let frame = 0;
    const total = 60;
    const id = window.setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setDisplay(Math.round(value * progress));
      if (frame >= total) window.clearInterval(id);
    }, 16);
    return () => window.clearInterval(id);
  }, [visible, value]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-display text-4xl font-bold tracking-tight text-ink-foreground md:text-5xl">
        {display}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-ink-muted">{label}</p>
    </div>
  );
}
