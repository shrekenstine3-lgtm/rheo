export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <div>
            <div className="text-sm font-medium text-slate-500">Rheo</div>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
              Privacy &amp; Trust
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

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-950">Privacy-first by design</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Rheo is being built to reduce small healthcare cost barriers while using a privacy-first,
            controlled, and transparent operating model.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            RheoPassport is not designed to expose personal health details publicly. Sensitive personal
            and health-related information should remain off-chain, access-controlled, and limited to
            what is necessary for pilot operations and review.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-950">What Rheo may collect</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <li>• Basic account and household information needed for pilot setup</li>
              <li>• Co-pay submission details such as amount, date, and service category</li>
              <li>• Workflow events such as approval timing, balance updates, and activity history</li>
              <li>• Aggregated usage patterns used to improve the program design</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-950">What Rheo should not do</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <li>• No individual sale of personal health data</li>
              <li>• No public posting of household-identifiable health events</li>
              <li>• No sensitive medical details written to a public ledger</li>
              <li>• No claim that Rheo replaces insurance or medical judgment</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-950">Trust model</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">1. Limited collection</div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">2. Controlled approvals</div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">3. Transparent accounting</div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">4. Aggregated system learning</div>
          </div>

          <p className="mt-6 text-base leading-7 text-slate-600">
            Rheo is intended to operate as a simple web platform for users, with accounting,
            approval, and compliance visibility handled in a structured backend environment.
            Any future ledger or blockchain usage is intended for verification and accounting integrity,
            not for exposing personally identifiable health data.
          </p>
        </div>
      </section>
    </main>
  );
}
