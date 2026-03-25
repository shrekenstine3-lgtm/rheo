export default function MarketPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div>
            <div className="text-sm font-medium text-slate-500">Rheo</div>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
              Market &amp; Controls
            </h1>
          </div>
          <a
            href="/partnerships"
            className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Back to Partnerships
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-950">Large covered user market</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            Rheo is designed for a large, already-covered user market. It is not dependent on a single insurer,
            policy issuer, or provider network. The model is designed to operate above existing coverage and care
            relationships as a separate support layer.
          </p>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-950">User-layer position</h2>
          <div className="mt-6 rounded-2xl bg-slate-50 p-6">
            <p className="text-lg font-semibold text-slate-950">
              Rheo participation is a user’s decision.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Households can participate regardless of policy issuer or healthcare provider. Rheo is designed to
              operate above existing coverage and care relationships as a separate support layer.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-950">Coverage market by age</h2>
            <p className="mt-2 text-sm text-slate-500">
              People with coverage types, not unique policy contracts.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-4 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
                <div>Age Group</div>
                <div>Private</div>
                <div>Public</div>
                <div>Uninsured</div>
              </div>

              <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                <div>0–17</div>
                <div>40.1M</div>
                <div>30.1M</div>
                <div>3.6M</div>
              </div>

              <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                <div>18–64</div>
                <div>138.6M</div>
                <div>42.9M</div>
                <div>23.3M</div>
              </div>

              <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                <div>65+</div>
                <div>25.9M</div>
                <div>57.1M</div>
                <div>0.4M</div>
              </div>

              <div className="grid grid-cols-4 border-t border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-800">
                <div>All ages</div>
                <div>204.6M</div>
                <div>130.2M</div>
                <div>27.3M</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-950">Coverage by sex (under 65)</h2>
            <p className="mt-2 text-sm text-slate-500">
              Percentage of people with private, public, or no coverage.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-4 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
                <div>Sex</div>
                <div>Private</div>
                <div>Public</div>
                <div>Uninsured</div>
              </div>

              <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                <div>Female</div>
                <div>65.0%</div>
                <div>28.2%</div>
                <div>8.9%</div>
              </div>

              <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                <div>Male</div>
                <div>66.3%</div>
                <div>25.5%</div>
                <div>10.9%</div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
              <div className="text-sm font-medium text-slate-500">Exchange-based coverage signal</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                16.5M people under 65 reported exchange-based coverage in 2024, including 8.8M females and 7.7M males.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-950">Fixed support. Capped exposure.</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                Household balances are fixed and capped.
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                Approvals are controlled and visible.
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                Payout exposure is bounded at the household level.
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                The model is designed to scale without open-ended payout risk.
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 p-4">
              <div className="text-sm font-medium text-slate-500">Illustrative household logic</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Example: $100 base + $50 per dependent under 18, with a household cap such as $300.
                This keeps support simple, visible, and limited.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-950">Unwavering ledger accounting</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                Every approval can create a ledger event.
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                Every balance change can create a ledger event.
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                Accounting records are designed to be append-only and traceable.
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                Future blockchain anchoring is for verification integrity, not public health disclosure.
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 p-4">
              <div className="text-sm font-medium text-slate-500">Investor confidence point</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                These controls are intended to ease concerns around payout discipline, accounting integrity,
                compliance visibility, and long-term trust.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-950">Why this matters to potential allies</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              Portable across private and public coverage
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              Independent of any single issuer or provider
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              Controlled economics through caps and approvals
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              Transparent accounting model with ledger confidence
            </div>
          </div>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            Source basis: CDC/NCHS National Health Interview Survey 2024 health insurance demographic tables and
            early-release coverage summaries.
          </p>
        </div>
      </section>
    </main>
  );
}
