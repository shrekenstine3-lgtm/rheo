export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
            Rheo • Introducing RheoPassport
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950">
            Small co-pays should not block basic care.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            RheoPassport helps households cover small healthcare co-pays so people do not skip prescriptions,
            visits, or follow-up care over everyday costs.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-base font-medium text-white transition hover:bg-slate-800"
            >
              Open Dashboard
            </a>

            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
            >
              About Rheo
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-950">Base Support</h2>
            <p className="mt-3 text-slate-600">$100 base support per primary household account.</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-950">Dependents</h2>
            <p className="mt-3 text-slate-600">+$50 per dependent under 18, up to the household cap.</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-950">Household Cap</h2>
            <p className="mt-3 text-slate-600">$300 maximum annual balance per household.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
