/** Single source of truth for Doherty Electrical contact details. */
export const PHONE = {
  display: "+353 87 248 6193",
  href: "tel:+353872486193",
  example: "087 248 6193",
} as const;

export const business = {
  name: "Doherty Electrical",
  phone: PHONE.display,
  phoneHref: PHONE.href,
  phoneExample: PHONE.example,
  email: "info@dohertyelectrical.ie",
  emailHref: "mailto:info@dohertyelectrical.ie",
  address: "14 Ballymount Drive, Walkinstown, Dublin 12, D12 XY4F",
  hours: "Mon-Fri 8am-6pm · 24/7 emergency callout",
  serviceAreas: [
    "Dublin City & County",
    "Meath",
    "Kildare",
    "Wicklow",
    "Louth",
  ],
} as const;
