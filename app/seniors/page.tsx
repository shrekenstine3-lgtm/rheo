import Image from "next/image";

export default function SeniorsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative h-[720px] w-full overflow-hidden">
        <Image
          src="/rheo-senior.png"
          alt="A large group of seniors facing the camera"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]">
              RHEO FOR SENIORS
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              More clarity for today.
              <br />
              More confidence for tomorrow.
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90 md:text-xl">
              Rheo is designed to help seniors and families better understand
              healthcare decisions while staying connected to the providers and
              coverage they already use.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#learn"
                className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:bg-yellow-400"
              >
                See How Rheo Helps
              </a>

              <a
                href="#family"
                className="rounded-xl border border-white/70 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                For Seniors & Families
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            A calmer way to face healthcare decisions
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Rheo is designed to help seniors and families better understand
            choices, reduce confusion, and feel more confident moving forward.
          </p>
        </div>
      </section>

      <section id="family" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Support for seniors and families
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Rheo is positioned as a user-side support layer that helps
            households stay informed while keeping their current providers and
            coverage.
          </p>
        </div>
      </section>
    </main>
  );
}
