"use client";
import { useState } from "react";

function JoinForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <p className="text-green-600">Thanks — we’ll be in touch.</p>;
  }

  return (
    <button
      type="button"
      onClick={() => setSubmitted(true)}
      className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-base font-medium text-white transition hover:bg-slate-800"
    >
      Request Invite
    </button>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              Rheo • Introducing RheoPassport
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Small co-pays should not block basic care.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              RheoPassport helps households cover small healthcare co-pays so people do not skip prescriptions,
              visits, or follow-up care over everyday costs.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#join"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-base font-medium text-white shadow-sm transition hover:bg-slate-800"
              >
                Join Pilot
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
              >
                See How It Works
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-sm text-slate-500">Base support</div>
                <div className="mt-1 text-2xl font-semibold">$100</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-sm text-slate-500">Per dependent</div>
                <div className="mt-1 text-2xl font-semibold">+$50</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-sm text-slate-500">Household cap</div>
                <div className="mt-1 text-2xl font-semibold">$300</div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:w-[420px]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-500">RheoPassport</div>
                  <div className="mt-1 text-3xl font-semibold text-slate-950">$200</div>
                  <div className="mt-1 text-sm text-slate-500">Remaining household balance</div>
                </div>
                <div className="rounded-2xl bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
                  Active
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <div className="text-sm font-medium text-slate-500">Family members</div>
                <div className="mt-3 space-y-3 text-sm text-slate-700">
                  <div className="flex items-center justify-between">
                    <span>Primary Account</span>
                    <span className="font-medium">Adult</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Secondary #1</span>
                    <span className="font-medium">Under 18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Secondary #2</span>
                    <span className="font-medium">Under 18</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 p-4">
                <div className="text-sm font-medium text-slate-500">Recent activity</div>
                <div className="mt-3 space-y-3 text-sm text-slate-700">
                  <div className="flex items-center justify-between">
                    <span>Child #1 Rx</span>
                    <span className="font-medium text-emerald-700">$18 covered</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Primary office visit</span>
                    <span className="font-medium text-emerald-700">$25 covered</span>
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                Use Credit
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">How Rheo works</h2>
          <p className="mt-4 text-lg text-slate-600">
            Rheo is a simple access layer for healthcare. The first product, RheoPassport, helps households use a
            fixed annual balance to cover small co-pays.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Join",
              text: "Create a primary household account and add eligible dependents under 18.",
            },
            {
              title: "Get Balance",
              text: "Receive a yearly household balance based on the primary account and dependents.",
            },
            {
              title: "Use Credit",
              text: "Submit a co-pay event through the pilot workflow and apply available credit.",
            },
            {
              title: "Track Usage",
              text: "View remaining balance, activity, and household history in one place.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-medium uppercase tracking-wide text-slate-400">{item.title}</div>
              <p className="mt-4 text-base leading-7 text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">For households</h3>
              <p className="mt-4 text-slate-600">
                One account. One household balance. Small co-pay support that is easy to understand.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">For pilot partners</h3>
              <p className="mt-4 text-slate-600">
                A capped model with simple logic, predictable exposure, and a clean way to test real-world usage.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">For the system</h3>
              <p className="mt-4 text-slate-600">
                Aggregated, privacy-conscious usage patterns can help improve access design over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60 sm:p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Join the pilot</h2>
            <p className="mt-4 text-lg text-slate-600">
              Start with a simple household profile. This MVP is designed for conversations, pilot testing, and early
              partner feedback.
            </p>
          </div>

          <form className="mt-10 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Full name</span>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-slate-950"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-slate-950"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Primary account holder</span>
              <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950">
                <option>1 adult</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Dependents under 18</span>
              <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">What would make this useful?</span>
              <textarea
                rows={4}
                placeholder="Tell us about co-pays, prescriptions, or routine care costs in your household."
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
              />
            </label>

            <div className="sm:col-span-2 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-6 text-slate-500">
                By joining the pilot, participants may allow anonymized, aggregated usage insights to be used to improve
                access design and system performance. No individual-level sale of data.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-base font-medium text-white transition hover:bg-slate-800"
              >
                Request Invite
              <JoinForm />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
