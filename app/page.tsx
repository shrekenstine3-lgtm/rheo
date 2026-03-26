import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
              RHEO
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              A smarter user-side layer
              <br />
              for healthcare confidence.
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              Rheo is designed to operate above existing coverage and care
              relationships as a separate support layer, helping households make
              healthcare decisions with greater clarity, structure, and control.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#how"
                className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:bg-yellow-400"
              >
                See How It Works
              </a>

              <a
                href="#partners"
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Partner View
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 text-center md:grid-cols-3 md:px-10">
          <div>
            <p className="text-3xl font-bold text-slate-900">User-side</p>
            <p className="mt-2 text-slate-600">
              Built around the household decision experience
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">Flexible</p>
            <p className="mt-2 text-slate-600">
              Designed to sit above existing providers and coverage
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">Structured</p>
            <p className="mt-2 text-slate-600">
              Helps turn difficult choices into clearer next steps
            </p>
          </div>
        </div>
      </section>

      <section id="how" className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              How Rheo Works
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Rheo sits above the system, on the user side.
            </h2>
            <p className="text-lg text-slate-600">
              Households can participate regardless of policy issuer or
              healthcare provider. Rheo is designed to support understanding,
              decision flow, and confidence without requiring people to leave
              the care relationships they already have.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-lg font-bold text-slate-900">
                1
              </div>
              <h3 className="mb-3 text-xl font-bold">Start with the user</h3>
              <p className="text-slate-600">
                Rheo begins from the household point of view, framing decisions
                around the user’s actual concerns, constraints, and priorities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-lg font-bold text-slate-900">
                2
              </div>
              <h3 className="mb-3 text-xl font-bold">Create clearer choices</h3>
              <p className="text-slate-600">
                Complex information can be organized into a more understandable
                picture so people feel less overwhelmed and more prepared.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-lg font-bold text-slate-900">
                3
              </div>
              <h3 className="mb-3 text-xl font-bold">Support next steps</h3>
              <p className="text-slate-600">
                Rheo is positioned to help households move forward with greater
                confidence, continuity, and control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              Why It Matters
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Healthcare is complicated.
              <br />
              Understanding it should not be.
            </h2>
            <p className="mb-4 text-lg text-slate-600">
              For many households, healthcare decisions feel fragmented,
              time-sensitive, and hard to compare. Rheo is built around the idea
              that users need a clearer layer of support above the traditional
              system.
            </p>
            <p className="text-lg text-slate-600">
              This creates a simpler entry point for users, families, partners,
              and future stakeholders evaluating the platform.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
            <h3 className="mb-6 text-2xl font-bold">Core positioning</h3>
            <ul className="space-y-4 text-slate-200">
              <li>• User-facing support layer</li>
              <li>• Operates above existing care relationships</li>
              <li>• Designed for household clarity and confidence</li>
              <li>• Compatible with multiple coverage environments</li>
              <li>• Stronger structure for decision-making journeys</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="partners" className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              Audience Paths
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Built to speak to users, families, and partners
            </h2>
            <p className="text-lg text-slate-600">
              Rheo can be presented through audience-specific pages while
              maintaining one consistent platform story.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">Users</h3>
              <p className="mb-6 text-slate-600">
                A clearer healthcare decision experience centered on the
                household.
              </p>
              <a
                href="#how"
                className="font-semibold text-yellow-700 hover:text-yellow-600"
              >
                Explore the user story →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">Seniors</h3>
              <p className="mb-6 text-slate-600">
                A campaign page tailored to seniors and family decision support.
              </p>
              <Link
                href="/seniors"
                className="font-semibold text-yellow-700 hover:text-yellow-600"
              >
                View seniors page →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">Partners</h3>
              <p className="mb-6 text-slate-600">
                A strategic positioning layer for investor and partner-facing
                discussions.
              </p>
              <a
                href="#contact"
                className="font-semibold text-yellow-700 hover:text-yellow-600"
              >
                Start partner path →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 px-6 py-20 text-white md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Next Step
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Start with the main story.
            <br />
            Expand into focused campaign pages.
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-slate-300">
            Use the homepage as the central Rheo platform narrative, then route
            visitors into audience-specific pages like seniors, partners, and
            future user segments.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/seniors"
              className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:bg-yellow-400"
            >
              Visit Seniors Page
            </Link>

            <a
              href="#how"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              Back to Overview
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
