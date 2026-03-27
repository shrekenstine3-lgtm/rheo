export default function ContinuePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <div>
            <div className="text-sm font-medium text-slate-500">Rheo</div>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-amber-500">
              Why the Free Model Works
            </h1>
          </div>
          <a
            href="/rheoinsite"
            className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_22px_rgba(5,150,105,0.35)] transition hover:bg-emerald-700 hover:shadow-[0_0_30px_rgba(5,150,105,0.45)]"
          >
            BACK
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-amber-500">Why the Free Model Works</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Rheo is designed to be free to enroll in at the user level because low-friction access can expand
            participation, improve aggregated operating insight, and increase long-term partnership value.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            This is the same broad platform logic used by major businesses that offer free user access while
            building enterprise value through scale, relevance, network position, and monetizable system insight.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Rheo applies that logic in a more controlled way. Free enrollment is not intended as an open-ended
            subsidy. It is a friction-reduction layer designed to increase household adoption while support remains
            bounded through fixed balances, visible caps, controlled approvals, and traceable payout logic.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            As participation grows, the value of the system is intended to expand through stronger usage aggregation,
            clearer co-pay friction signals, better partner relevance, and more valuable accounting and operating
            insight.
          </p>

          <div className="mt-8 rounded-2xl bg-slate-50 p-6">
            <p className="text-lg font-semibold text-slate-950">
              The free model drives access. Access drives scale. Scale drives value.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-amber-500">Low Friction</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Free enrollment reduces barriers to participation and makes the model easier for households to enter.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-amber-500">Stronger Aggregation</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              More users create more valuable patterns around approvals, co-pay types, locations, payouts, and usage.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-amber-500">Controlled Economics</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Free access does not mean uncontrolled liability. Household caps, approvals, and ledger logic create discipline.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
