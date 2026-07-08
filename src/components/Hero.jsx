function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[88vh] items-center overflow-hidden px-5 pt-24 sm:px-6 lg:px-8"
    >
      <div className="soft-fade absolute inset-0 -z-10" />
      <div className="grid-bg absolute inset-0 -z-10 opacity-55" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-line bg-black/25 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">
            Kosovo / Software Engineering / AI
          </p>
          <h1 className="text-5xl font-light tracking-normal text-paper sm:text-6xl lg:text-7xl">
            Diar Ademi
          </h1>
          <p className="mt-5 text-xl font-medium text-zinc-200 sm:text-2xl">
            Aspiring Software Engineer & Computer Science Applicant
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I build practical web applications and digital solutions while
            exploring software engineering, full-stack development, and
            artificial intelligence.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-paper px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-line bg-white/[0.035] px-6 py-3 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="rounded-xl border border-line bg-black/30 p-4 shadow-glow backdrop-blur">
            <div className="rounded-lg border border-white/10 bg-black/55 p-5">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-zinc-500" />
                <span className="h-3 w-3 rounded-full bg-zinc-600" />
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Current focus
                  </p>
                  <p className="mt-2 text-2xl font-light text-paper">
                    CS foundations + RYDE-0 growth
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {["React", "Shopify", "APIs", "MongoDB"].map((item) => (
                    <div
                      key={item}
                      className="rounded-md border border-line bg-white/[0.035] px-4 py-5"
                    >
                      <p className="text-sm font-medium text-zinc-200">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-md border border-white/12 bg-white/[0.035] p-4">
                  <p className="text-sm leading-6 text-zinc-300">
                    Building practical projects, creating SaaS workflows for
                    clients, and preparing for university-level computer
                    science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
