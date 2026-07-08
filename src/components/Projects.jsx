import { useCallback, useEffect, useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/projects.js";
import { useReveal } from "../hooks/useReveal.js";

const frameRatio = {
  wide: "aspect-[16/9]",
  standard: "aspect-[4/3]",
  mobile: "aspect-[9/16]",
  "mobile-long": "aspect-[9/20]", // for very tall scroll screenshots
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

function MediaFrame({ item, onOpen }) {
  const ratio = frameRatio[item.variant] ?? frameRatio.standard;
  const imageFit =
    item.variant === "mobile"
      ? "object-cover object-top" // crops long screenshots to phone height
      : item.variant === "standard" || item.variant === "mobile-long" || item.variant === "portrait" || item.variant === "wide"
      ? "object-contain"
      : "object-cover";
  const frame = (
    <>
      {item.src ? (
        <img
          src={item.src}
          alt={item.label}
          loading="lazy"
          decoding="async"
          className={`h-full w-full transition duration-700 group-hover:scale-[1.015] ${imageFit}`}
        />
      ) : (
        <div className="relative flex h-full items-center justify-center p-5">
          <div className="grid-bg absolute inset-0 opacity-55" />
          <div className="relative text-center">
            <div className="mx-auto mb-4 h-10 w-10 rounded-md border border-white/20 bg-white/[0.04]" />
            <p className="text-sm font-medium text-zinc-300">{item.label}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Screenshot pending
            </p>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
      {item.src ? (
        <div className="pointer-events-none absolute right-3 top-3 rounded-md border border-white/15 bg-black/55 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-300 opacity-0 backdrop-blur transition group-hover:opacity-100">
          Open
        </div>
      ) : null}
    </>
  );

  return (
    <figure className="group">
      {item.src ? (
        <button
          type="button"
          onClick={() => onOpen(item)}
          className={`relative block w-full ${ratio} cursor-zoom-in overflow-hidden rounded-lg border border-line bg-black text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-paper/70`}
          aria-label={`Open ${item.label} image`}
        >
          {frame}
        </button>
      ) : (
        <div
          className={`relative ${ratio} overflow-hidden rounded-lg border border-line bg-black`}
        >
          {frame}
        </div>
      )}
      <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
        {item.label}
      </figcaption>
    </figure>
  );
}

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/88 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={image.label}
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-xl border border-line bg-ink shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">
            {image.label}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-line px-3 py-1.5 text-sm text-zinc-300 transition hover:bg-white/[0.06] hover:text-paper"
          >
            Close
          </button>
        </div>
        <div className="flex max-h-[calc(92vh-3.5rem)] justify-center overflow-auto bg-black p-3">
          <img
            src={image.src}
            alt={image.label}
            decoding="async"
            className={
              image.variant === "mobile"
                ? "h-[calc(92vh-5.5rem)] w-auto max-w-full aspect-[9/19.5] rounded-md object-cover object-top"
                : "mx-auto max-h-[calc(92vh-5.5rem)] w-auto max-w-full rounded-md object-contain"
            }
          />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onOpenImage }) {
  const mainMedia = project.media[0];
  const supportingMedia = project.media.slice(1);
  const cardRef = useReveal({ threshold: 0.07, rootMargin: "0px 0px -40px 0px" });
  const isUpcoming = project.badge === "Upcoming Project";

  return (
    <article ref={cardRef} className="reveal overflow-hidden rounded-xl border border-line bg-panel/70">
      <div className="grid gap-px bg-line lg:grid-cols-[0.92fr_1.08fr]">
        <div className="bg-ink p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-line bg-white/[0.035] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={
                isUpcoming
                  ? "rounded-full border border-amber-border bg-amber-muted px-3 py-1 text-xs font-medium text-amber"
                  : "rounded-full border border-line bg-white/[0.035] px-3 py-1 text-xs text-zinc-300"
              }
            >
              {project.badge}
            </span>
          </div>

          <h3 className="mt-6 text-3xl font-light text-paper sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-zinc-300">
            {project.type}
          </p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
            {project.source}
          </p>

          <p className="mt-6 text-base leading-8 text-zinc-400">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-black/35 px-3 py-1.5 text-xs text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.website ? (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-md bg-paper px-5 py-2.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:opacity-90"
              >
                Visit project
              </a>
            ) : null}
            {project.repository ? (
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:-translate-y-0.5 hover:bg-white/[0.06] hover:text-paper"
              >
                View repository
              </a>
            ) : null}
          </div>
        </div>

        <div className="bg-black p-4 sm:p-5">
          <MediaFrame item={mainMedia} onOpen={onOpenImage} />
          
          {supportingMedia.length > 0 ? (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {supportingMedia.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => onOpenImage(item)}
                  className="group flex items-center justify-between rounded-lg border border-line bg-white/[0.035] px-4 py-3.5 text-left transition duration-300 hover:border-amber-border hover:bg-amber-muted"
                >
                  <span className="text-sm font-medium text-zinc-300 transition duration-300 group-hover:text-amber">
                    {item.label}
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/[0.04] text-zinc-500 transition duration-300 group-hover:bg-amber/20 group-hover:text-amber">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="grid gap-px bg-line lg:grid-cols-2">
        <div className="bg-panel p-5 sm:p-7">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Key Features
          </h4>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-zinc-400">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-paper/70" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-panel p-5 sm:p-7">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            What I Learned
          </h4>
          <p className="mt-5 text-sm leading-7 text-zinc-400">
            {project.learned}
          </p>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [openImage, setOpenImage] = useState(null);
  const handleOpen = useCallback((img) => setOpenImage(img), []);
  const headingRef = useReveal();

  return (
    <section id="projects" className="section-shell border-y border-line bg-black/25">
      <div className="mx-auto max-w-7xl">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            eyebrow="Projects"
            title="Featured Projects"
            subtitle="A selection of projects that show my learning progress, technical skills, and interest in real-world software development."
            align="center"
          />
        </div>

        <div className="space-y-7">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpenImage={handleOpen}
            />
          ))}
        </div>
      </div>
      <ImageLightbox image={openImage} onClose={() => setOpenImage(null)} />
    </section>
  );
}

export default Projects;
