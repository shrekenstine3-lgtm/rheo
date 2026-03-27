export default function RheoInsitePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div>
            <div className="text-sm font-medium text-slate-500">Rheo</div>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-amber-500">
              Rheo-Investor Summary
            </h1>
          </div>
          <a
            href="/"
            className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_22px_rgba(5,150,105,0.35)] transition hover:bg-emerald-700 hover:shadow-[0_0_30px_rgba(5,150,105,0.45)]"
          >
            To Rheo Home
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-amber-500">Executive Summary</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            <span className="font-semibold text-slate-900">Rheo</span> is a user-layer healthcare access
            model designed to reduce small co-pay barriers that cause households to delay or skip prescriptions,
            routine visits, and follow-up care. Its first product, <span className="font-semibold text-slate-900">RheoPassport</span>,
            applies a fixed, capped household support model above existing insurance and provider relationships
            rather than trying to replace them.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            <span className="font-semibold text-slate-900">Rheo participation is a user’s decision.</span> Households can
            participate regardless of policy issuer or healthcare provider. Rheo is designed to operate above
            existing coverage and care relationships as a separate support layer.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            The U.S. already has a very large covered population. Rheo is positioned to sit above fragmented
            private and public coverage environments as a portable, capped, and traceable access model.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-amber-500">Market Signal</h2>
            <p className="mt-2 text-sm text-slate-500">
              Covered user market, 2024
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">Private Coverage</span>
                  <span className="font-semibold text-emerald-600">204.6M</span>
                </div>
                <div className="h-5 rounded-full bg-slate-100">
                  <div className="h-5 w-[90%] rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.35)]" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">Public Coverage</span>
                  <span className="font-semibold text-emerald-600">130.2M</span>
                </div>
                <div className="h-5 rounded-full bg-slate-100">
                  <div className="h-5 w-[58%] rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.35)]" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">Uninsured</span>
                  <span className="font-semibold text-red-600">27.3M</span>
                </div>
                <div className="h-5 rounded-full bg-slate-100">
                  <div className="h-5 w-[12%] rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.35)]" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-amber-500">Why This Matters</h2>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                Portable across private and public coverage
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                Independent of any single issuer or provider
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                Fixed support with capped exposure
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                Traceable accounting through ledger logic
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-amber-500">Coverage by Age</h2>
          <p className="mt-2 text-sm text-slate-500">People with coverage types, not unique policy contracts</p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <div className="grid grid-cols-4 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
              <div>Age Group</div>
              <div className="text-emerald-600">Private</div>
              <div className="text-emerald-600">Public</div>
              <div className="text-red-600">Uninsured</div>
            </div>

            <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
              <div>0–17</div>
              <div className="font-semibold text-emerald-600">40.1M</div>
              <div className="font-semibold text-emerald-600">30.1M</div>
              <div className="font-semibold text-red-600">3.6M</div>
            </div>

            <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
              <div>18–64</div>
              <div className="font-semibold text-emerald-600">138.6M</div>
              <div className="font-semibold text-emerald-600">42.9M</div>
              <div className="font-semibold text-red-600">23.3M</div>
            </div>

            <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
              <div>65+</div>
              <div className="font-semibold text-emerald-600">25.9M</div>
              <div className="font-semibold text-emerald-600">57.1M</div>
              <div className="font-semibold text-red-600">0.4M</div>
            </div>

            <div className="grid grid-cols-4 border-t border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-800">
              <div>All ages</div>
              <div className="text-emerald-600">204.6M</div>
              <div className="text-emerald-600">130.2M</div>
              <div className="text-red-600">27.3M</div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-amber-500">Coverage by Sex (Under 65)</h2>
            <p className="mt-2 text-sm text-slate-500">
              Percentage mix across private, public, and uninsured
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-4 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
                <div>Sex</div>
                <div className="text-emerald-600">Private</div>
                <div className="text-emerald-600">Public</div>
                <div className="text-red-600">Uninsured</div>
              </div>

              <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                <div>Female</div>
                <div className="font-semibold text-emerald-600">65.0%</div>
                <div className="font-semibold text-emerald-600">28.2%</div>
                <div className="font-semibold text-red-600">8.9%</div>
              </div>

              <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                <div>Male</div>
                <div className="font-semibold text-emerald-600">66.3%</div>
                <div className="font-semibold text-emerald-600">25.5%</div>
                <div className="font-semibold text-red-600">10.9%</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-amber-500">Fixed Support. Capped Exposure.</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                Base support can be fixed at the household level.
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                Dependents can be added with controlled increments.
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                Household caps keep payout exposure bounded.
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                Approval logic keeps the model visible and disciplined.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-amber-500">Value Aggregation Model</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            As Rheo scales, it may generate meaningful value through aggregated operational, demographic,
            geographic, and behavioral insights. These insights are intended to improve program design,
            approval logic, partnership value, and long-term system optimization.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-sky-50 p-4 text-sm font-medium text-sky-700">Demographic</div>
            <div className="rounded-2xl bg-violet-50 p-4 text-sm font-medium text-violet-700">Coverage</div>
            <div className="rounded-2xl bg-emerald-50 p-4 text-sm font-medium text-emerald-700">Provider / Co-Pay</div>
            <div className="rounded-2xl bg-amber-50 p-4 text-sm font-medium text-amber-700">Payout / Ledger</div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-950">Data-to-Value Flow</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-6">
                <div className="rounded-2xl bg-slate-50 p-3 text-center text-sm text-slate-700">Enrollment</div>
                <div className="rounded-2xl bg-slate-50 p-3 text-center text-sm text-slate-700">Submission</div>
                <div className="rounded-2xl bg-slate-50 p-3 text-center text-sm text-slate-700">Approval</div>
                <div className="rounded-2xl bg-slate-50 p-3 text-center text-sm text-slate-700">Payout</div>
                <div className="rounded-2xl bg-slate-50 p-3 text-center text-sm text-slate-700">Ledger</div>
                <div className="rounded-2xl bg-slate-50 p-3 text-center text-sm text-slate-700">Insight</div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-950">Unwavering Ledger Accounting</h3>
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">Every approval can create a ledger event</div>
                <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">Every balance change can create a ledger event</div>
                <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">Append-only and traceable accounting logic</div>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <div className="grid grid-cols-4 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
              <div>Aggregation Point</div>
              <div>Operational Value</div>
              <div>Partner Value</div>
              <div>Investor Value</div>
            </div>

            <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
              <div>Age / Sex / Household</div>
              <div className="text-sky-600">High</div>
              <div className="text-violet-600">High</div>
              <div className="text-amber-600">High</div>
            </div>

            <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
              <div>Insurer / Public / Private</div>
              <div className="text-sky-600">High</div>
              <div className="text-violet-600">High</div>
              <div className="text-amber-600">High</div>
            </div>

            <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
              <div>Provider / Office / Pharma</div>
              <div className="text-sky-600">High</div>
              <div className="text-violet-600">High</div>
              <div className="text-amber-600">Medium</div>
            </div>

            <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
              <div>Location / Payout / Ledger</div>
              <div className="text-sky-600">High</div>
              <div className="text-violet-600">Medium</div>
              <div className="text-amber-600">High</div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-amber-500">What user scale may make the system viable?</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The viability of Rheo does not depend on national scale at launch. It is designed to become increasingly
            useful and investable as user volume grows. The model can begin with a pilot population, strengthen
            through aggregated usage signals, and become more compelling as the dataset, payout discipline, and
            partner relevance improve.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm font-medium text-slate-500">Pilot viability</div>
              <div className="mt-2 text-2xl font-semibold text-slate-950">1K–5K users</div>
              <p className="mt-2 text-sm text-slate-600">Enough to test enrollment, approvals, payouts, and household behavior.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm font-medium text-slate-500">Operational insight value</div>
              <div className="mt-2 text-2xl font-semibold text-slate-950">10K–25K users</div>
              <p className="mt-2 text-sm text-slate-600">Enough to begin showing category mix, timing patterns, and partnership relevance.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm font-medium text-slate-500">System-level signal</div>
              <div className="mt-2 text-2xl font-semibold text-slate-950">50K+ users</div>
              <p className="mt-2 text-sm text-slate-600">Large enough to demonstrate broader market fit, stronger aggregation value, and scalable operating logic.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-amber-500">Source Note</h2>
          <p className="mt-4 text-sm leading-6 text-slate-500">
            Coverage figures shown here are drawn from official CDC/NCHS health insurance demographic tables and
            related national coverage summaries. They are presented as people with coverage types rather than unique
            policy contracts.
          </p>
        </div>
      </section>
    </main>
  );
}
