import FadeInSection from "@/components/FadeInSection";
import QuoteForm from "@/components/QuoteForm";
import SectionHeader, { SectionContainer } from "@/components/SectionHeader";
import { business } from "@/lib/business";
import { sectionContent, sectionPadding } from "@/lib/sectionStyles";

const contactDetails = [
  {
    label: "Phone",
    value: business.phone,
    href: business.phoneHref,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: business.email,
    href: business.emailHref,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
      </svg>
    ),
  },
  {
    label: "Hours",
    value: business.hours,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Address",
    value: business.address,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001A6.714 6.714 0 0110 15.64a6.714 6.714 0 01-6.6-3.297l-.003-.002A6.722 6.722 0 0110 5.43a6.722 6.722 0 016.295 6.912l-.003.002A6.722 6.722 0 0110 18.933zM10 9a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <FadeInSection id="quote" className={`${sectionPadding} bg-white`}>
      <SectionContainer>
        <SectionHeader
          label="Contact us"
          title="Get your free quote"
          description={`Fill in the form and we'll get back to you with a no-obligation quote. For emergencies, call ${business.phone}. We're available 24/7.`}
          align="left"
        />

        <div
          className={`${sectionContent} grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16`}
        >
          <QuoteForm />

          <div>
            <h3 className="text-lg font-semibold text-[#0f2742] sm:text-xl">
              Contact details
            </h3>

            <ul className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex gap-3 sm:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0f2742] text-[#f5a623]">
                    {detail.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#0f2742]/60 sm:text-sm">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="mt-0.5 block break-words text-sm font-medium text-[#0f2742] transition-colors hover:text-[#f5a623] sm:text-base"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-[#0f2742] sm:text-base">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg bg-[#0f2742]/5 p-5 sm:mt-10 sm:p-6">
              <h3 className="text-lg font-semibold text-[#0f2742] sm:text-xl">
                Service area
              </h3>
              <p className="mt-2 text-sm text-[#0f2742]/70 sm:text-base">
                We cover homes and businesses across the greater Dublin region,
                including:
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {business.serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-[#0f2742]/15 bg-white px-3 py-1.5 text-xs font-medium text-[#0f2742] sm:px-4 sm:text-sm"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </FadeInSection>
  );
}
