"use client";

import { cardPadding } from "@/lib/sectionStyles";
import { FormEvent, useState } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={`${cardPadding} rounded-lg border border-[#0f2742]/10 bg-white shadow-sm`}>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5a623]/20 text-[#f5a623]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-[#0f2742] sm:text-xl">
          Thanks for getting in touch
        </h3>
        <p className="mt-2 text-sm text-[#0f2742]/70 sm:text-base">
          We&apos;ll review your request and get back to you shortly with a free
          quote.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${cardPadding} rounded-lg border border-[#0f2742]/10 bg-white shadow-sm`}
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[#0f2742]"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className="mt-2 block w-full rounded-md border border-[#0f2742]/20 px-4 py-3 text-sm text-[#0f2742] placeholder:text-[#0f2742]/40 focus:border-[#f5a623] focus:outline-none focus:ring-2 focus:ring-[#f5a623]/30 sm:text-base"
          placeholder="John Murphy"
        />
      </div>

      <div className="mt-4 sm:mt-5">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-[#0f2742]"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          autoComplete="tel"
          className="mt-2 block w-full rounded-md border border-[#0f2742]/20 px-4 py-3 text-sm text-[#0f2742] placeholder:text-[#0f2742]/40 focus:border-[#f5a623] focus:outline-none focus:ring-2 focus:ring-[#f5a623]/30 sm:text-base"
          placeholder="087 248 6193"
        />
      </div>

      <div className="mt-4 sm:mt-5">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#0f2742]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-2 block w-full resize-y rounded-md border border-[#0f2742]/20 px-4 py-3 text-sm text-[#0f2742] placeholder:text-[#0f2742]/40 focus:border-[#f5a623] focus:outline-none focus:ring-2 focus:ring-[#f5a623]/30 sm:text-base"
          placeholder="Kitchen rewire in a 3-bed semi in Tallaght. Hoping to start next month."
        />
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-md bg-[#f5a623] px-6 py-3.5 text-sm font-semibold text-[#0f2742] transition-colors hover:bg-[#e09515] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5a623] sm:mt-6 sm:py-4 sm:text-base"
      >
        Request Free Quote
      </button>
    </form>
  );
}
