// ─────────────────────────────────────────────────────────────
//  Edit ONLY this file to update the page.
//  Leave a value as "" (or remove an item) to hide it.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Srinivasan Narayanaswamy",
  firstName: "Srinivasan",
  lastName: "Narayanaswamy",
  headline: [
    "Serial Entrepreneur",
    "Strategic Advisor",
    "FinTech, Energy & Investment Ecosystem Leadership",
    "Public Policy",
  ],
  photo: "/srinivasan.png", // put the photo in /public/profile.jpg

  phone: "+91 80151 01016",
  whatsapp: "918015101016", // country code + number, digits only

  emails: [
    { label: "Personal", value: "srini5055@gmail.com" },
    { label: "Skill Yuva Bharat", value: "srinivasan@skillyuvabharat.com" },
    { label: "FuelPay", value: "srinivasan@petromoney.net" },
  ],

  address: {
    lines: ["No. 4, Morrison 4th Street", "Cement Road, Alandur", "Chennai – 600016", "India"],
    street: "No. 4, Morrison 4th Street, Cement Road, Alandur",
    city: "Chennai",
    postalCode: "600016",
    country: "India",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=No.+4+Morrison+4th+Street+Cement+Road+Alandur+Chennai+600016",
  },

  // ── Resume ────────────────────────────────────────────────
  resume: {
    // Put the PDF in /public/resume.pdf — set to "" to hide the download button
    file: "/SRINIVASAN NARAYANASWAMY___.pdf",
    summary:
      "Serial entrepreneur and strategic advisor working across FinTech, Energy and Investment ecosystems and Public Policy. Founder of FuelPay Innovations, Co-founder of Skill Yuva Bharat, Partner at NXT – Global Leadership and Managing Partner of NSV Mall, with engagement across G20, B20 and BRICS forums in India, Brazil, South Africa and the USA.",
    expertise: [
      "Entrepreneurship",
      "Strategic Advisory",
      "FinTech",
      "Energy Sector",
      "Investment Ecosystems",
      "Public Policy",
      "Skill Development",
      "Global Partnerships",
    ],
    // Past roles — add as many as needed, newest first. Empty = section hidden.
    // { period: "2015 – 2020", role: "Director", company: "Company Name", note: "One line about the role" },
    experience: [],
    // { period: "1998", degree: "Degree Name", institution: "College / University" },
    education: [],
  },

  socials: [
    {
      network: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/srinivasan-narayanaswamy-5753a5185/",
    },
    {
      network: "facebook",
      label: "Facebook",
      url: "https://www.facebook.com/srinivasan.reddy.3",
    },
  ],

  ventures: [
    {
      company: "FuelPay Innovations",
      role: "Founder",
      logo: "/logos/fuelpay.png",
      url: "https://fuelpay.in/",
      email: "srinivasan@petromoney.net",
    },
    {
      company: "Skill Yuva Bharat",
      role: "Co-founder",
      logo: "/logos/skill-yuva-bharat.png",
      url: "https://www.skillyuvabharat.com/",
      email: "srinivasan@skillyuvabharat.com",
    },
    {
      company: "NXT – Global Leadership",
      role: "Partner",
      logo: "/logos/nxt.png",
      url: "https://nxt-leaders.com/",
    },
    {
      company: "NSV Mall",
      role: "Managing Partner",
      logo: "/logos/nsv-mall.png",
      url: "https://nsvmall.com/",
    },
  ],

  forums: [
    { name: "G20", logo: "/logos/g20.png" },
    { name: "B20", logo: "/logos/b20.png" },
    { name: "BRICS Forum", logo: "/logos/brics.png" },
  ],

  countries: [
    { name: "India", flag: "/logos/flag-in.png" },
    { name: "Brazil", flag: "/logos/flag-br.png" },
    { name: "South Africa", flag: "/logos/flag-za.png" },
    { name: "USA", flag: "/logos/flag-us.png" },
  ],
};
