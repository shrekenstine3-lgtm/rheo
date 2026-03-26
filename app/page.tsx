import Image from "next/image";

export default function Home() {
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

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]">
              Rheo for Seniors
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              More clarity for today.
              <br />
              More confidence for tomorrow.
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
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
    </main>
  );
}
