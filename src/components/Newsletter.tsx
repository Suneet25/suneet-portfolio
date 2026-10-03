"use client";

import { useState } from "react";
import { newsletter, site } from "@/data/site";
import { MailIcon } from "./Icons";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  // Without a newsletter service configured, fall back to a "Subscribe" email.
  const onSubmit = (e: React.FormEvent) => {
    if (newsletter.action) return;
    e.preventDefault();
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Subscribe")}`;
  };

  return (
    <form
      action={newsletter.action || undefined}
      method="post"
      target="_blank"
      onSubmit={onSubmit}
      className="rounded-[18px] border border-line p-6 text-center sm:text-left"
    >
      <fieldset>
        <legend className="mx-auto flex items-center gap-2 text-sm font-semibold sm:mx-0">
          <MailIcon width={16} height={16} className="text-accent" />
          {newsletter.title}
        </legend>
        <p className="mt-2 text-sm text-secondary">{newsletter.description}</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 min-w-0 flex-1 rounded-lg bg-surface px-3 text-sm text-primary outline-none ring-1 ring-transparent transition placeholder:text-tertiary focus:ring-accent/60"
          />
          <button
            type="submit"
            className="bg-gradient h-10 shrink-0 rounded-lg px-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Subscribe
          </button>
        </div>
      </fieldset>
    </form>
  );
}
