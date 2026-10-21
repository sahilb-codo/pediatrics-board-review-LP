"use client";

import { useState, type FormEvent } from "react";
import { buttonClasses } from "@/components/ui/Button";
import type { CtaContent } from "@/types";

type DemoSignupFormProps = {
  form: Pick<CtaContent["freeResources"], "fields" | "submitLabel" | "demoMessage" | "submittedMessage">;
};

const inputClasses =
  "h-12 w-full rounded-xl border border-line bg-white px-4 text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus-visible:ring-3 focus-visible:ring-brand/30";

/**
 * Demo-only form: the browser validates the fields, but submitting never sends data anywhere.
 * The status message says so explicitly.
 */
export function DemoSignupForm({ form }: DemoSignupFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={() => setSubmitted(false)}
      className="flex flex-col gap-4 rounded-card bg-white p-6 shadow-card sm:p-8"
      aria-describedby="signup-demo-note"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="signup-name" className="text-sm font-semibold text-ink">
          {form.fields.name}
        </label>
        <input id="signup-name" name="name" type="text" autoComplete="given-name" required className={inputClasses} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="signup-email" className="text-sm font-semibold text-ink">
          {form.fields.email}
        </label>
        <input id="signup-email" name="email" type="email" autoComplete="email" required className={inputClasses} />
      </div>
      <button type="submit" className={buttonClasses("primary", "lg", "mt-2 w-full")}>
        {form.submitLabel}
      </button>
      <p id="signup-demo-note" className="text-center text-xs text-muted">
        {form.demoMessage}
      </p>
      <p role="status" className="min-h-5 text-center text-sm font-semibold text-teal">
        {submitted ? form.submittedMessage : ""}
      </p>
    </form>
  );
}
