export default function MarketPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div>
            <div className="text-sm font-medium text-slate-500">Rheo</div>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-amber-500">
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
          <h2 className="text-2xl font-semibold text-amber-500">Very large potential domestic market</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            Rheo is designed for a large, already-covered user market. It is not dependent on a single insurer,
            policy issuer, or provider network. The model is designed to operate above existing coverage and care
            relationships as a separate support layer.
          </p>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-amber-500">User-layer position</h2>
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

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-amber-500">Frictionless enrollment</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Rheo is designed to be simple and free to enroll in at the user level. The model is intended to
            minimize onboarding friction so households can participate without being tied to a specific insurer,
            provider, or complex enrollment path.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-emerald-600">
              Free user enrollment
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-emerald-600">
              No carrier-bound restrictions
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-emerald-600">
              Designed to reduce onboarding friction
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-amber-500">Coverage market by age</h2>
            <p className="mt-2 text-sm text-slate-500">
              People with coverage types, not unique policy contracts.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-4 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
                <div>Age Group</div>
                <div className="text-emerald-600">Private</div>
                <div className="text-emerald-600">Public</div>
                <div className="text-red-600">Uninsured</div>
              </div>

              <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                <div>0–17</div>
                <div className="font-medium text-emerald-600">40.1M</div>
                <div className="font-medium text-emerald-600">30.1M</div>
                <div className="font-medium text-red-600">3.6M</div>
              </div>

              <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                <div>18–64</div>
                <div className="font-medium text-emerald-600">138.6M</div>
                <div className="font-medium text-emerald-600">42.9M</div>
                <div className="font-medium text-red-600">23.3M</div>
              </div>

              <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                <div>65+</div>
                <div className="font-medium text-emerald-600">25.9M</div>
                <div className="font-medium text-emerald-600">57.1M</div>
                <div className="font-medium text-red-600">0.4M</div>
              </div>

              <div className="grid grid-cols-4 border-t border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-800">
                <div>All ages</div>
                <div className="text-emerald-600">204.6M</div>
                <div className="text-emerald-600">130.2M</div>
                <div className="text-red-600">27.3M</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-amber-500">Coverage by sex (under 65)</h2>
            <p className="mt-2 text-sm text-slate-500">
              Percentage of people with private, public, or no coverage.
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
                <div className="font-medium text-emerald-600">65.0%</div>
                <div className="font-medium text-emerald-600">28.2%</div>
                <div className="font-medium text-red-600">8.9%</div>
              </div>

              <div className="grid grid-cols-4 border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                <div>Male</div>
                <div className="font-medium text-emerald-600">66.3%</div>
                <div className="font-medium text-emerald-600">25.5%</div>
                <div className="font-medium text-red-600">10.9%</div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
              <div className="text-sm font-semibold text-amber-500">Exchange-based coverage signal</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                16.5M people under 65 reported exchange-based coverage in 2024, including 8.8M females and 7.7M males.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-amber-500">Fixed support. Capped exposure.</h2>
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
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-amber-500">Unwavering ledger accounting</h2>
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
          </div>
        </div>
      </section>
    </main>
  );
}
