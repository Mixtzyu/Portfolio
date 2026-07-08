import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useReveal } from "../hooks/useReveal.js";

function PhotoLightbox({ onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Portal renders straight onto document.body — above every stacking context
  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/88 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Diar Ademi photo"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-ink shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">
            Diar Ademi
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-line px-3 py-1.5 text-sm text-zinc-300 transition hover:bg-white/[0.06] hover:text-paper"
          >
            Close
          </button>
        </div>
        <div className="bg-black">
          <img
            src="/images/diar-profile.jpg"
            alt="Diar Ademi"
            className="mx-auto max-h-[calc(92vh-3.5rem)] w-auto max-w-full object-contain"
            decoding="async"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

function Hero() {
  const [photoOpen, setPhotoOpen] = useState(false);
  const textRef = useReveal({ threshold: 0.1, rootMargin: "0px" });
  const cardRef = useReveal({ threshold: 0.1, rootMargin: "0px" });
  const photoRef = useReveal({ threshold: 0.05, rootMargin: "0px" });

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[88vh] items-center overflow-hidden px-5 pt-24 sm:px-6 lg:px-8"
    >
      <div className="soft-fade absolute inset-0 -z-10" />
      <div className="grid-bg absolute inset-0 -z-10 opacity-55" />
      {/* Subtle amber radial accent in the top-right */}
      <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[500px] w-[500px] rounded-full bg-amber-muted blur-[100px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.55fr_0.55fr]">
        {/* ── Text block ── */}
        <div ref={textRef} className="reveal max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-border bg-amber-muted px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-amber">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            Kosovo · Software Engineering · Data Science & AI
          </p>
          <h1 className="text-5xl font-light tracking-normal text-paper sm:text-6xl lg:text-7xl">
            Diar Ademi
          </h1>
          <p className="mt-5 text-xl font-medium text-zinc-200 sm:text-2xl">
            Aspiring Software Engineer &amp; CS Applicant
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
              className="inline-flex items-center justify-center rounded-md border border-amber-border bg-amber-muted px-6 py-3 text-sm font-semibold text-amber transition hover:-translate-y-0.5 hover:bg-amber/20"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* ── Profile photo (clickable) ── */}
        <div ref={photoRef} className="reveal reveal-delay-2 hidden lg:block">
          <div className="relative mx-auto max-w-[240px]">
            {/* Amber glow ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber/30 via-transparent to-transparent blur-sm" />
            <button
              type="button"
              onClick={() => setPhotoOpen(true)}
              aria-label="Open photo of Diar Ademi"
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-amber-border shadow-glow-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/70"
            >
              <img
                src="/images/diar-profile.jpg"
                alt="Diar Ademi"
                className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                loading="eager"
                decoding="async"
              />
              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />
              <div className="pointer-events-none absolute right-3 top-3 rounded-md border border-white/15 bg-black/55 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-300 opacity-0 backdrop-blur transition group-hover:opacity-100">
                Open
              </div>
            </button>
          </div>
        </div>

        {/* ── Status card ── */}
        <div ref={cardRef} className="reveal reveal-delay-3 mx-auto w-full max-w-md lg:ml-auto">
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
                      className="rounded-md border border-line bg-white/[0.035] px-4 py-5 transition hover:border-amber-border hover:bg-amber-muted"
                    >
                      <p className="text-sm font-medium text-zinc-200">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-md border border-amber-border bg-amber-muted p-4">
                  <p className="text-sm leading-6 text-zinc-300">
                    Co-founder of{" "}
                    <a
                      href="https://rydezero.com"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-amber hover:text-amber-light"
                    >
                      RYDE-0
                    </a>{" "}
                    — a launched agency, while preparing to study{" "}
                    <span className="font-medium text-paper">Data Science &amp; Artificial Intelligence</span>{" "}
                    at university.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {photoOpen ? <PhotoLightbox onClose={() => setPhotoOpen(false)} /> : null}
    </section>
  );
}

export default Hero;
