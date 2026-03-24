export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div>
            <div className="text-sm font-medium text-slate-500">Rheo</div>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
              Household Dashboard
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
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-medium text-slate-500">Household Balance</div>
            <div className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">$200</div>
            <p className="mt-2 text-sm text-slate-500">
              Annual RheoPassport balance for 1 primary and 2 dependents under 18.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-medium text-slate-500">Status</div>
            <div className="mt-3 inline-flex rounded-2xl bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
              Active
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Account is eligible to submit co-pay uses during the pilot period.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-medium text-slate-500">Last Activity</div>
            <div className="mt-3 text-lg font-semibold text-slate-950">Primary office visit</div>
            <p className="mt-2 text-sm text-slate-500">$25 covered • March 2026</p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Family Members</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Shared household balance across all linked members.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                <div>
                  <div className="font-medium text-slate-950">Primary Account</div>
                  <div className="text-sm text-slate-500">Adult</div>
                </div>
                <div className="rounded-xl bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                  Primary
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                <div>
                  <div className="font-medium text-slate-950">Secondary #1</div>
                  <div className="text-sm text-slate-500">Under 18</div>
                </div>
                <div className="rounded-xl bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                  Dependent
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                <div>
                  <div className="font-medium text-slate-950">Secondary #2</div>
                  <div className="text-sm text-slate-500">Under 18</div>
                </div>
                <div className="rounded-xl bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                  Dependent
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-950">Quick Actions</h2>
            <p className="mt-1 text-sm text-slate-500">
              Start the first pilot workflow from here.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="/submit"
                className="block rounded-2xl bg-slate-950 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Submit Co-Pay
              </a>

              <button className="block w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                View Activity Log
              </button>

              <button className="block w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Update Household
              </button>
            </div>

            <div className="mt-8 rounded-2xl bg-slate-50 p-4">
              <div className="text-sm font-medium text-slate-500">Pilot Notes</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                This is a first dashboard prototype. Real balances, submissions, approvals, and ledger records will be
                connected in later steps.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-950">Recent Activity</h2>
              <p className="mt-1 text-sm text-slate-500">
                Example household usage across the annual balance.
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <div className="grid grid-cols-3 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
              <div>Member</div>
              <div>Activity</div>
              <div>Amount</div>
            </div>

            <div className="grid grid-cols-3 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
              <div>Secondary #1</div>
              <div>Prescription co-pay</div>
              <div className="font-medium text-emerald-700">$18 covered</div>
            </div>

            <div className="grid grid-cols-3 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
              <div>Primary Account</div>
              <div>Office visit co-pay</div>
              <div className="font-medium text-emerald-700">$25 covered</div>
            </div>

            <div className="grid grid-cols-3 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
              <div>Secondary #2</div>
              <div>Urgent care co-pay</div>
              <div className="font-medium text-emerald-700">$40 covered</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
