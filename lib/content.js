// Single source of content — all facts drawn from flavia-cv (nothing invented).

export const profile = {
  name: "Flávia Ferri",
  role: "Senior Frontend Engineer",
  stack: ["React", "Next.js", "TypeScript"],
  eyebrow: "React · Next.js · TypeScript",
  tagline:
    "Frontend engineer building product for regulated fintech — six years across web and mobile, from design systems to shipping.",
};

export const about = [
  "I'm a frontend engineer who loves shipping product, organising chaotic work, and supporting the people around me. Six years in, mostly in React, Next.js and TypeScript — currently modernising a regulated fintech platform used by 20,000+ brokers at Nationale-Nederlanden in the Netherlands.",
  "I came into tech after seven years in banking, and that lens still shapes how I work: real ownership, clear communication with stakeholders, and a habit of asking what a feature actually does for the person using it.",
];

export const experience = [
  {
    company: "Nationale-Nederlanden",
    role: "Full Stack Software Engineer (Frontend-focused)",
    period: "Oct 2023 — Present",
    place: "Amsterdam · regulated fintech",
    points: [
      "Lead frontend of Request Manager, a React + TypeScript portal centralising 4+ broker workflows into one experience, replacing fragmented navigation across multiple tools.",
      "Migrated a core broker portal from Vue to React and drive architecture decisions — standardising React, TypeScript, testing strategy and Storybook design-system components across broker-facing apps.",
      "Own quality end to end: unit, integration and E2E tests (Jest, Playwright, React Testing Library), CI/CD on Azure Pipelines, and production monitoring in Splunk.",
    ],
  },
  {
    company: "Miyagami",
    role: "Full Stack Software Engineer",
    period: "Apr 2021 — Oct 2023",
    place: "Amsterdam · agency, 7 clients",
    points: [
      "Led Vol, a React Native student app — defined the architecture, project setup and technical standards, and coordinated planning and code reviews across a team of engineers.",
      "Led the modernisation of Bexchange, a legacy auction platform (React, Next.js, Strapi, MySQL): full frontend redesign and new features shipped without disrupting live operations.",
      "Built Node.js BFF layers with Redis caching over third-party APIs, and mentored interns and junior developers.",
    ],
  },
  {
    company: "Agência Rock",
    role: "Frontend Developer",
    period: "Aug 2020 — Apr 2021",
    place: "Remote · Brazil",
    points: [
      "Built websites, SPAs and landing pages for Brazilian businesses with React, Next.js and TypeScript — focused on responsive design, accessibility and performance.",
      "Translated Figma designs into reusable, accessible components and page templates that sped up delivery across client projects.",
    ],
  },
];

export const priorCareer = {
  role: "Account Manager",
  company: "Banco Santander",
  period: "2012 — 2018 · Brazil",
  note: "Seven years in banking before engineering — financial-services domain knowledge, stakeholder management and an ownership mindset that carry straight into fintech product work.",
};

export const skills = [
  {
    group: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    group: "Architecture",
    items: [
      "Design systems (Storybook)",
      "Microfrontends",
      "Reusable component libraries",
      "Accessibility",
    ],
  },
  {
    group: "Testing",
    items: ["Jest", "Vitest", "Playwright (E2E)", "React Testing Library"],
  },
  {
    group: "Backend",
    items: ["Node.js (BFF)", "REST APIs", "Supabase", "MySQL", "Redis"],
  },
  {
    group: "Delivery",
    items: [
      "Git",
      "GitHub Actions",
      "Azure Pipelines",
      "Splunk",
      "Figma",
      "Agile / Scrum",
    ],
  },
];

export const contactIntro =
  "Open to new senior frontend opportunities. If that sounds like a fit — or you just want to talk shop — my inbox is open.";

export const contact = {
  email: "flaviamadrugaferri@gmail.com",
  linkedin: "https://www.linkedin.com/in/flavia-ferri/",
  linkedinLabel: "linkedin.com/in/flavia-ferri",
  github: "https://github.com/flaviaferri",
  githubLabel: "github.com/flaviaferri",
  cv: "/flavia-ferri-cv.pdf",
};
