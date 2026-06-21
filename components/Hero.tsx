import FadeInSection from "@/components/FadeInSection";
import {
  btnPrimary,
  btnSecondary,
  sectionContainer,
  sectionLabel,
} from "@/lib/sectionStyles";
import { business } from "@/lib/business";
import Image from "next/image";
import Link from "next/link";

const trustPoints = [
  "Fully qualified electricians",
  "24/7 emergency callout",
  "Fully insured & certified",
];

export default function Hero() {
  return (
    <FadeInSection immediate className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Image
        src="/hero-bg.jpg"
        alt="Professional electrician working on electrical panel wiring"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0f2742]/95 via-[#0f2742]/85 to-[#0f2742]/70"
        aria-hidden
      />

      <div
        className={`${sectionContainer} relative z-10 w-full py-20 sm:py-24`}
      >
        <div className="max-w-2xl">
          <p className={`${sectionLabel} mb-4`}>Trusted local electricians</p>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Doherty Electrical
          </h1>

          <p className="mt-5 text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg lg:text-xl">
            Safe, reliable electrical services for homes and businesses. From
            rewires to repairs, we deliver quality workmanship you can count on.
          </p>

          <ul className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm font-medium text-white/95 sm:text-base"
              >
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f5a623]/20 text-[#f5a623]"
                  aria-hidden
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3 w-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <Link href="#quote" className={btnPrimary}>
              Get a Free Quote
            </Link>
            <a href={business.phoneHref} className={btnSecondary}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-[#f5a623]"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                  clipRule="evenodd"
                />
              </svg>
              24/7 Emergency Line
            </a>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
