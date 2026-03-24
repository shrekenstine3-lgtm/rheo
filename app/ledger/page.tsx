export default function LedgerPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div>
            <div className="text-sm font-medium text-slate-500">Rheo</div>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
              Ledger Overview
            </h1>
          </div>
          <a
            href="/admin"
            className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Back to Admin
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-medium text-slate-500">Events Recorded</div>
            <div className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">12</div>
            <p className="mt-2 text-sm text-slate-500">
              Prototype ledger events currently stored in the accounting layer.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-medium text-slate-500">Anchor Status</div>
            <div className="mt-3 inline-flex rounded-2xl bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700">
              Pending Anchor
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Public chain anchoring is planned as a later backend compliance step.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-medium text-slate-500">Last Verified Event</div>
            <div className="mt-3 text-lg font-semibold text-slate-950">RH-2026-00017</div>
            <p className="mt-2 text-sm text-slate-500">$25 approval • March 2026</p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Ledger Event Stream</h2>
            <p className="mt-1 text-sm text-slate-500">
              This page represents the accounting and compliance layer behind RheoPassport.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <div className="grid grid-cols-5 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
              <div>Event ID</div>
              <div>Action</div>
              <div>Amount</div>
              <div>Status</div>
              <div>Timestamp</div>
            </div>

            <div className="grid grid-cols-5 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
              <div>RH-2026-00017</div>
              <div>Approval</div>
              <div>$25</div>
              <div className="font-medium text-emerald-700">Recorded</div>
              <div>2026-03-24 09:42</div>
            </div>

            <div className="grid grid-cols-5 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
              <div>RH-2026-00018</div>
              <div>Balance Update</div>
              <div>-$25</div>
              <div className="font-medium text-emerald-700">Recorded</div>
              <div>2026-03-24 09:42</div>
            </div>

            <div className="grid grid-cols-5 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
              <div>RH-2026-00019</div>
              <div>Submission</div>
              <div>$18</div>
              <div className="font-medium text-amber-600">Pending</div>
              <div>2026-03-24 10:08</div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-950">Transparency Model</h2>
            <p className="mt-1 text-sm text-slate-500">
              Users interact with a normal web platform while accounting and compliance can later be anchored to a transparent ledger.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <div className="rounded-2xl bg-slate-50 p-4">User action creates a system event</div>
              <div className="rounded-2xl bg-slate-50 p-4">Approval writes an accounting record</div>
              <div className="rounded-2xl bg-slate-50 p-4">Balance changes generate ledger events</div>
              <div className="rounded-2xl bg-slate-50 p-4">Future chain anchoring provides verifiable integrity</div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-950">Compliance Notes</h2>
            <p className="mt-1 text-sm text-slate-500">
              Sensitive health details remain off-chain. Only accounting and verification events are candidates for ledger anchoring.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-medium text-slate-950">Planned Rule</div>
              <p className="mt-2 leading-6">
                No personally identifiable health data is written to any public ledger. Ledger usage is limited to accounting proof,
                approval traceability, and compliance verification.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
