export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <div>
            <div className="text-sm font-medium text-slate-500">Rheo</div>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
              Submit Co-Pay
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

      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-950">Pilot Submission Form</h2>
            <p className="mt-2 text-slate-600">
              This is the first step toward a real usage workflow. In later versions, this form will
              connect to household balances, receipts, approvals, and the ledger.
            </p>
          </div>

          <form className="mt-8 grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Household Member</span>
              <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950">
                <option>Primary Account</option>
                <option>Secondary #1</option>
                <option>Secondary #2</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Service Type</span>
              <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950">
                <option>Prescription Co-Pay</option>
                <option>Office Visit Co-Pay</option>
                <option>Urgent Care Co-Pay</option>
                <option>Specialist Visit Co-Pay</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Provider / Pharmacy</span>
              <input
                type="text"
                placeholder="Enter provider or pharmacy name"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Co-Pay Amount</span>
              <input
                type="number"
                placeholder="25"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Date of Service</span>
              <input
                type="date"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Receipt Placeholder</span>
              <input
                type="text"
                placeholder="Receipt upload comes next"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Notes</span>
              <textarea
                rows={4}
                placeholder="Add any notes about this co-pay event"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
              />
            </label>

            <div className="sm:col-span-2 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-6 text-slate-500">
                This prototype does not yet store submissions. The next step is wiring this form to a
                real backend and logging events into the ledger flow.
              </p>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-base font-medium text-white transition hover:bg-slate-800"
              >
                Submit Co-Pay
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
