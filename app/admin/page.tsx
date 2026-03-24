export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div>
            <div className="text-sm font-medium text-slate-500">Rheo</div>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
              Admin Review
            </h1>
          </div>
          <a
            href="/dashboard"
            className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Back to Dashboard
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-medium text-slate-500">Open Submissions</div>
            <div className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">3</div>
            <p className="mt-2 text-sm text-slate-500">Submissions awaiting review.</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-medium text-slate-500">Approved Today</div>
            <div className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">2</div>
            <p className="mt-2 text-sm text-slate-500">Approved co-pay events in current session.</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-medium text-slate-500">Ledger Events</div>
            <div className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">5</div>
            <p className="mt-2 text-sm text-slate-500">Prototype accounting events recorded.</p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-950">Submission Queue</h2>
              <p className="mt-1 text-sm text-slate-500">
                Review pilot submissions and simulate approval workflow.
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <div className="grid grid-cols-5 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
              <div>Member</div>
              <div>Service</div>
              <div>Provider</div>
              <div>Amount</div>
              <div>Status</div>
            </div>

            <div className="grid grid-cols-5 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
              <div>Secondary #1</div>
              <div>Prescription Co-Pay</div>
              <div>Neighborhood Pharmacy</div>
              <div>$18</div>
              <div className="font-medium text-amber-600">Pending</div>
            </div>

            <div className="grid grid-cols-5 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
              <div>Primary Account</div>
              <div>Office Visit</div>
              <div>Riverside Family Care</div>
              <div>$25</div>
              <div className="font-medium text-amber-600">Pending</div>
            </div>

            <div className="grid grid-cols-5 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
              <div>Secondary #2</div>
              <div>Urgent Care</div>
              <div>QuickCare Clinic</div>
              <div>$40</div>
              <div className="font-medium text-amber-600">Pending</div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-950">Review Actions</h2>
            <p className="mt-1 text-sm text-slate-500">
              Prototype controls for approval and denial flow.
            </p>

            <div className="mt-6 space-y-3">
              <button className="block w-full rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-700">
                Approve Selected
              </button>

              <button className="block w-full rounded-2xl border border-red-300 px-4 py-3 text-sm font-medium text-red-700 transition hover:bg-red-50">
                Deny Selected
              </button>

              <button className="block w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Export Review Log
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-950">Ledger Preview</h2>
            <p className="mt-1 text-sm text-slate-500">
              Backend accounting and compliance events can later be anchored to a transparent ledger.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-medium text-slate-950">Example Event</div>
              <div className="mt-3 space-y-2">
                <div>Event ID: RH-2026-00017</div>
                <div>Action: Approval</div>
                <div>Household: 1 primary / 2 dependents</div>
                <div>Amount: $25</div>
                <div>Status: Written to prototype ledger</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
