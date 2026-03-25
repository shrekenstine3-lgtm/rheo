export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <div>
            <div className="text-sm font-medium text-slate-500">Rheo</div>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
              Contact & Pilot Interest
            </h1>
          </div>
          <a
            href="/"
            className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Back to Home
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-950">Start a conversation with Rheo</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Rheo is being developed as a pilot-ready access layer for reducing small healthcare cost barriers.
            This page is for potential households, partners, funders, pharmacies, providers, and alliance discussions.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-950">Contact Form</h2>
            <p className="mt-2 text-slate-600">
              Use this form to express interest in the pilot, discuss partnerships, or request more information.
            </p>

            <form className="mt-8 grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Organization</span>
                <input
                  type="text"
                  placeholder="Optional"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Interest Type</span>
                <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950">
                  <option>Pilot Household</option>
                  <option>Employer / Sponsor</option>
                  <option>Pharmacy / Provider</option>
                  <option>Foundation / Funder</option>
                  <option>General Partnership</option>
                  <option>Media / Other</option>
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-slate-700">Message</span>
                <textarea
                  rows={5}
                  placeholder="Tell us what kind of conversation you'd like to have."
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
                />
              </label>

              <div className="sm:col-span-2 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-2xl text-sm leading-6 text-slate-500">
                  This is currently a demo contact flow. In the next version, submissions can be routed into a real inbox or database.
                </p>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-base font-medium text-white transition hover:bg-slate-800"
                >
                  Send Interest
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-semibold text-slate-950">Who this page is for</h2>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                  Households interested in pilot participation
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                  Employers exploring co-pay support concepts
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                  Pharmacies and providers interested in access partnerships
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                  Foundations or funders evaluating pilot sponsorship
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-semibold text-slate-950">Pilot-ready themes</h2>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
                <li>• Household balance model</li>
                <li>• Controlled approval workflow</li>
                <li>• Transparent accounting and ledger concept</li>
                <li>• Privacy-first operating design</li>
                <li>• Partnership and scale pathway</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
