import FadeInSection from "@/components/FadeInSection";
import SectionHeader, { SectionContainer } from "@/components/SectionHeader";
import { cardPadding, sectionContent, sectionPadding } from "@/lib/sectionStyles";

const services = [
  {
    title: "Domestic Wiring",
    description:
      "New sockets, lighting circuits, fuse board upgrades, and general home electrical work carried out safely and to regulation.",
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
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
        />
      </svg>
    ),
  },
  {
    title: "Rewiring",
    description:
      "Full and partial rewires for older homes, extensions, and renovations. Clean, tidy work with certification on completion.",
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
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.67m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    title: "Commercial",
    description:
      "Office fit-outs, shop lighting, maintenance contracts, and compliance testing for businesses across Dublin and surrounds.",
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
          d="M3.75 21h16.5M4.5 3h15m-7.5 0v18m-7.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
  },
  {
    title: "Emergency",
    description:
      "Power cuts, tripping circuits, and urgent faults. 24/7 callout with fast response when you need an electrician now.",
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
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <FadeInSection id="services" className={`${sectionPadding} bg-[#0f2742]/5`}>
      <SectionContainer>
        <SectionHeader
          label="Our services"
          title="Electrical work done right"
          description="From everyday home jobs to urgent callouts and commercial contracts, we handle it all with the same attention to detail."
        />

        <ul
          className={`${sectionContent} grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4`}
        >
          {services.map((service) => (
            <li
              key={service.title}
              className={`${cardPadding} flex flex-col rounded-lg border border-[#0f2742]/10 bg-white shadow-sm`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f2742] text-[#f5a623]">
                {service.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#0f2742] sm:text-xl">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#0f2742]/70 sm:text-base">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </SectionContainer>
    </FadeInSection>
  );
}
