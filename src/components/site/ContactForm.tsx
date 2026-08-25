import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const projectTypes = [
  "Business Website",
  "E-Commerce Store",
  "School / Institution Website",
  "Tourism & Travel Website",
  "Booking Platform",
  "Custom Web Application",
  "Business Management System",
  "Website Redesign",
  "Maintenance & Support",
];

const budgets = [
  "Under KES 50,000",
  "KES 50,000 – 150,000",
  "KES 150,000 – 400,000",
  "KES 400,000 – 1M",
  "Above KES 1M",
];

const fieldClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10";

export function ContactForm() {
  const [sending, setSending] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Project request sent", {
        description: "Thanks — we'll reply within one business day.",
      });
    }, 700);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" placeholder="Your full name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+254 700 000 000" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
            Company
          </label>
          <input id="company" name="company" autoComplete="organization" placeholder="Business or organisation" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-foreground">
            Project type
          </label>
          <select id="projectType" name="projectType" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">
            Budget range
          </label>
          <select id="budget" name="budget" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a budget range
            </option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="description" className="mb-2 block text-sm font-medium text-foreground">
            Project description
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={5}
            placeholder="Tell us about your business, what you need and any deadlines."
            className={fieldClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-deep hover:shadow-glow disabled:opacity-70 sm:w-auto"
      >
        {sending ? "Sending…" : "Send Project Request"}
        <Send className="size-4" />
      </button>
    </form>
  );
}
