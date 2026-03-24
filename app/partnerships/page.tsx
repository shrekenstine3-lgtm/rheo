export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div>
            <div className="text-sm font-medium text-slate-500">Rheo</div>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
              Partnership Model
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

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-950">Why partners would join Rheo</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Rheo is designed as a healthcare access layer that reduces small cost barriers,
            generates measurable pilot data, and creates a scalable framework for funding,
            approvals, household usage, and transparent accounting.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-medium text-slate-500">Potential Users</div>
            <div className="mt-3 text-3xl font-semibold text-slate-950">Households</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Primary account holders, families with dependents, and recurring care users.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-medium text-slate-500">Data Samples</div>
            <div className="mt-3 text-3xl font-semibold text-slate-950">Usage Signals</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Balance usage, submission timing, approval flow, and co-pay pattern insights.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-medium text-slate-500">Payout Logic</div>
            <div className="mt-3 text-3xl font-semibold text-slate-950">Controlled</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Funded balance, reviewed co-pay event, approved payout, recorded ledger update.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-medium text-slate-500">Market Reach</div>
            <div className="mt-3 text-3xl font-semibold text-slate-950">Pilot → Scale</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Pilot households can grow into regional, employer, provider, and network adoption.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-950">Potential User Groups</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="font-medium text-slate-950">Households with recurring co-pays</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Users who repeatedly face prescription, office visit, and urgent care co-pays.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="font-medium text-slate-950">Families with dependents under 18</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A shared household balance model helps parents manage multiple small care events.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="font-medium text-slate-950">High-frequency care users</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Households with chronic medication needs or repeated routine care touchpoints.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-950">Illustrative Data Samples</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-2 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
                <div>Metric</div>
                <div>Example</div>
              </div>

              <div className="grid grid-cols-2 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                <div>Active households</div>
                <div>250</div>
              </div>

              <div className="grid grid-cols-2 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                <div>Average annual balance used</div>
                <div>$127</div>
              </div>

              <div className="grid grid-cols-2 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                <div>Prescription-related submissions</div>
                <div>58%</div>
              </div>

              <div className="grid grid-cols-2 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                <div>Average approval time</div>
                <div>1.8 days</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-950">Payout and Approval Flow</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">1. Household balance funded</div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">2. Co-pay submitted</div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">3. Review and approval</div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">4. Payout recorded</div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">5. Ledger event logged</div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-950">Alliance Value</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="font-medium text-slate-950">Employers</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Predictable co-pay support with measurable household usage and access patterns.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="font-medium text-slate-950">Pharmacies and providers</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Better care continuity and stronger participation in routine care access.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="font-medium text-slate-950">Foundations and pilot sponsors</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Clear, capped funding logic paired with visible workflow and outcome measurement.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-950">Scale Path</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">Pilot households</div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">Regional household network</div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">Employer and provider participation</div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">Multi-partner access layer</div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">National infrastructure model</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
