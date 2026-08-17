import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "Senior frontend engineer building product for regulated fintech with React, Next.js and TypeScript.";

export const metadata = {
  metadataBase: new URL("https://flaviaferri.dev"),
  title: "Flávia Ferri — Senior Frontend Engineer",
  description,
  authors: [{ name: "Flávia Ferri", url: "https://flaviaferri.dev" }],
  creator: "Flávia Ferri",
  keywords: [
    "Flávia Ferri",
    "Senior Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Frontend Developer",
    "Amsterdam",
    "Fintech",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Flávia Ferri — Senior Frontend Engineer",
    description,
    url: "https://flaviaferri.dev",
    siteName: "Flávia Ferri",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flávia Ferri — Senior Frontend Engineer",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Flávia Ferri",
  jobTitle: "Senior Frontend Engineer",
  url: "https://flaviaferri.dev",
  description,
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Frontend Architecture",
    "Design Systems",
  ],
  sameAs: [
    "https://www.linkedin.com/in/flavia-ferri/",
    "https://github.com/flaviaferri",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
