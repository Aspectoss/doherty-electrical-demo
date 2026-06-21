import FadeInSection from "@/components/FadeInSection";
import SectionHeader, { SectionContainer } from "@/components/SectionHeader";
import { sectionContent, sectionPadding } from "@/lib/sectionStyles";

const features = [
  {
    title: "Fully Insured",
    description:
      "Complete public liability cover on every job, so you can hire us with total peace of mind.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-6 w-6 sm:h-7 sm:w-7"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "15+ Years Experience",
    description:
      "Over a decade and a half serving local homes and businesses with skilled, dependable work.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-6 w-6 sm:h-7 sm:w-7"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
  },
  {
    title: "Fast Response Time",
    description:
      "Same-day callouts and 24/7 emergency support when you need an electrician most.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-6 w-6 sm:h-7 sm:w-7"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <FadeInSection className={`${sectionPadding} bg-white`}>
      <SectionContainer>
        <SectionHeader
          label="Why choose us"
          title="The Doherty difference"
          description="Professional electrical work backed by experience, insurance, and a commitment to getting to you quickly."
        />

        <ul
          className={`${sectionContent} grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3`}
        >
          {features.map((feature) => (
            <li
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f2742] text-[#f5a623] sm:h-14 sm:w-14">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#0f2742] sm:mt-5 sm:text-xl">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0f2742]/70 sm:text-base">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </SectionContainer>
    </FadeInSection>
  );
}
