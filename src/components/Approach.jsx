import SectionHeading from "./SectionHeading.jsx";
import { approach } from "../data/projects.js";

function Approach() {
  return (
    <section id="approach" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="How I Build Projects"
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {approach.map((item, index) => (
            <article
              key={item.title}
              className="rounded-lg border border-line bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-white/30"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-medium text-paper">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
