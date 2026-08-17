import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Leaf from "@/components/Leaf";
import {
  profile,
  about,
  article,
  experience,
  priorCareer,
  skills,
  contact,
  contactIntro,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>

      <Nav />

      <main id="top" className="mx-auto max-w-3xl px-6">
        {/* Hero */}
        <section className="flex min-h-[82vh] flex-col justify-center py-20">
          <p className="mb-5 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-terracotta">
            <Leaf className="h-4 w-4" />
            {profile.eyebrow}
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] text-ink sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 font-serif text-2xl italic text-ink-soft sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {profile.tagline}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-terracotta-soft"
            >
              Get in touch
            </a>
            <a
              href={contact.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Download CV ↓
            </a>
          </div>
        </section>

        {/* About */}
        <Section id="about" label="About">
          <div className="space-y-5">
            {about.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>

          <a
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 block rounded-2xl border border-line bg-cream-deep/40 p-6 transition-colors hover:border-terracotta"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
              {article.label}
            </p>
            <h3 className="mt-2 font-serif text-xl text-ink transition-colors group-hover:text-terracotta">
              {article.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              {article.blurb}
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-terracotta">
              Read on LinkedIn →
            </span>
          </a>
        </Section>

        {/* Experience */}
        <Section id="experience" label="Experience">
          <ol className="relative space-y-12 border-l border-line pl-8">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-terracotta bg-cream"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-serif text-2xl text-ink">
                    {job.company}
                  </h3>
                  <span className="text-sm text-ink-faint">{job.period}</span>
                </div>
                <p className="mt-1 text-base font-medium text-terracotta">
                  {job.role}
                </p>
                <p className="text-sm text-ink-faint">{job.place}</p>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((pt, i) => (
                    <li
                      key={i}
                      className="relative pl-5 text-[15px] leading-relaxed text-ink-soft before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-line"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl border border-line bg-cream-deep/50 p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-serif text-xl text-ink">
                {priorCareer.role} · {priorCareer.company}
              </h3>
              <span className="text-sm text-ink-faint">
                {priorCareer.period}
              </span>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              {priorCareer.note}
            </p>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" label="Skills">
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink-faint">
                  {s.group}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-cream px-3 py-1.5 text-sm text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" label="Say hello">
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            {contactIntro}
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <ContactRow
              label="Email"
              href={`mailto:${contact.email}`}
              value={contact.email}
            />
            <ContactRow
              label="LinkedIn"
              href={contact.linkedin}
              value={contact.linkedinLabel}
              external
            />
            <ContactRow
              label="GitHub"
              href={contact.github}
              value={contact.githubLabel}
              external
            />
            <ContactRow
              label="CV"
              href={contact.cv}
              value="Download PDF"
              external
            />
          </div>
        </Section>

        {/* Footer */}
        <footer className="flex items-center justify-between border-t border-line py-10 text-sm text-ink-faint">
          <span className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-terracotta" />
            Flávia Ferri
          </span>
          <span>Built with Next.js · {new Date().getFullYear()}</span>
        </footer>
      </main>
    </>
  );
}

function Section({ id, label, children }) {
  return (
    <Reveal as="section" id={id} className="scroll-mt-20 py-16">
      <h2 className="mb-8 flex items-center gap-3 font-serif text-sm font-medium uppercase tracking-[0.2em] text-ink-faint">
        <span className="h-px w-8 bg-terracotta" />
        {label}
      </h2>
      {children}
    </Reveal>
  );
}

function ContactRow({ label, href, value, external }) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group flex items-baseline justify-between border-b border-line py-3 transition-colors hover:border-terracotta"
    >
      <span className="text-sm uppercase tracking-[0.14em] text-ink-faint">
        {label}
      </span>
      <span className="text-lg text-ink transition-colors group-hover:text-terracotta">
        {value} <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}
