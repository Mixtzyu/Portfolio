import SectionHeading from "./SectionHeading.jsx";
import { journey } from "../data/skills.js";

function Journey() {
  return (
    <section id="journey" className="section-shell border-y border-line bg-black/25">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Journey"
          title="My Development Journey"
          align="center"
        />

        <div className="relative mt-12">
          <div className="absolute left-5 top-2 hidden h-[calc(100%-1rem)] w-px bg-line sm:block" />
          <div className="space-y-5">
            {journey.map((item, index) => (
              <article
                key={`${item.year}-${index}`}
                className="relative rounded-lg border border-line bg-panel/70 p-5 sm:ml-14 sm:p-6"
              >
                <span className="absolute -left-[3.95rem] top-6 hidden h-4 w-4 rounded-full border-4 border-ink bg-paper sm:block" />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
                  <p className="min-w-32 font-mono text-sm uppercase tracking-[0.18em] text-zinc-500">
                    {item.year}
                  </p>
                  <p className="text-base leading-7 text-zinc-400">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
