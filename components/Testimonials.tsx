import FadeInSection from "@/components/FadeInSection";
import SectionHeader, { SectionContainer } from "@/components/SectionHeader";
import { cardPadding, sectionContent, sectionPadding } from "@/lib/sectionStyles";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Tallaght",
    quote:
      "Had a full rewire done and the team were tidy, on time, and explained everything clearly. Wouldn't hesitate to recommend Doherty Electrical.",
  },
  {
    name: "James O'Brien",
    location: "Swords",
    quote:
      "Called them out on a Sunday evening when we lost power. They arrived within the hour and had us back up and running. Brilliant service.",
  },
  {
    name: "Fiona Kelly",
    location: "Naas",
    quote:
      "Professional from start to finish on our fuse board upgrade. Fair price, no hidden costs, and the work passed inspection first time.",
  },
];

export default function Testimonials() {
  return (
    <FadeInSection className={`${sectionPadding} bg-[#0f2742]/5`}>
      <SectionContainer>
        <SectionHeader
          label="Testimonials"
          title="What our customers say"
        />

        <ul
          className={`${sectionContent} grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3`}
        >
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.name}
              className={`${cardPadding} flex flex-col rounded-lg border border-[#0f2742]/10 bg-white shadow-sm`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7 text-[#f5a623]/40 sm:h-8 sm:w-8"
                aria-hidden
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.29l.865 1.742a8.633 8.633 0 00-3.87 1.49 5.853 5.853 0 011.2 3.107 5.34 5.34 0 013.07 1.01 4.062 4.062 0 011.288 2.96 4.083 4.083 0 01-4.8 4.268zm13 0C16.553 16.227 16 15 16 13.011c0-3.5 2.457-6.637 6.03-8.29l.865 1.742a8.633 8.633 0 00-3.87 1.49 5.853 5.853 0 011.2 3.107 5.34 5.34 0 013.07 1.01 4.062 4.062 0 011.288 2.96 4.083 4.083 0 01-4.8 4.268z" />
              </svg>

              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-[#0f2742]/80 sm:mt-4 sm:text-base">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <footer className="mt-5 border-t border-[#0f2742]/10 pt-4 sm:mt-6 sm:pt-5">
                <cite className="not-italic text-sm font-semibold text-[#0f2742] sm:text-base">
                  {testimonial.name}
                </cite>
                <p className="mt-0.5 text-xs text-[#0f2742]/60 sm:text-sm">
                  {testimonial.location}
                </p>
              </footer>
            </li>
          ))}
        </ul>
      </SectionContainer>
    </FadeInSection>
  );
}
