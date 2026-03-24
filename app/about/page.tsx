export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-slate-500">Rheo</div>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
                About Rheo
              </h1>
            </div>

            <a
              href="/"
              className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Back to Home
            </a>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-base font-medium text-white transition hover:bg-slate-800"
            >
              Open Dashboard
            </a>

            <a
              href="/partnerships"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
            >
              Partnerships
            </a>

            <a
              href="/privacy"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
            >
              Privacy & Trust
            </a>

            <a
              href="/ledger"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
            >
              Ledger
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-950">What Rheo is building</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Rheo is building a simple healthcare access layer designed to reduce small cost barriers
            that cause people to skip prescriptions, visits, and follow-up care.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The first product, <span className="font-medium text-slate-900">RheoPassport</span>, is a
            household-based co-pay support model. It is designed to provide a capped annual balance
            that can be used across a primary account holder and eligible dependents.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-950">Access</h3>
            <p className="mt-3 text-slate-600">
              Rheo focuses on the moment people decide whether to get care. The goal is to make
              routine care easier to use.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-950">Household Model</h3>
            <p className="mt-3 text-slate-600">
              A single primary account can support dependents under 18 through a shared annual balance.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-950">Transparency</h3>
            <p className="mt-3 text-slate-600">
              Rheo is designed to support strong accounting and compliance visibility through a backend ledger model.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-950">Why it matters</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Small co-pays can create outsized barriers. A modest amount of support at the right moment
            may improve adherence, increase routine care usage, and reduce friction for households.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Rheo is being built step by step as a pilot-ready system: landing page, dashboard, submission flow,
            admin review, and ledger layer.
          </p>
        </div>
      </section>
    </main>
  );
}
