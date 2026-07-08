import { useReveal } from "../hooks/useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import { journey } from "../data/skills.js";

function JourneyItem({ item }) {
  const ref = useReveal({ threshold: 0.1 });
  return (
    <article
      ref={ref}
      className="reveal relative rounded-lg border border-line bg-panel/70 p-5 sm:ml-14 sm:p-6"
    >
      <span className="absolute -left-[3.95rem] top-6 hidden h-4 w-4 rounded-full border-4 border-ink bg-amber sm:block" />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
        <p className="min-w-32 font-mono text-sm uppercase tracking-[0.18em] text-amber">
          {item.year}
        </p>
        <p className="text-base leading-7 text-zinc-400">{item.text}</p>
      </div>
    </article>
  );
}

function Journey() {
  const headingRef = useReveal();

  return (
    <section id="journey" className="section-shell border-y border-line bg-black/25">
      <div className="mx-auto max-w-5xl">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            eyebrow="Journey"
            title="My Development Journey"
            align="center"
          />
        </div>

        <div className="relative mt-12">
          <div className="absolute left-5 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-amber/40 via-line to-line sm:block" />
          <div className="space-y-5">
            {journey.map((item, index) => (
              <JourneyItem key={`${item.year}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
