import { useReveal } from "../hooks/useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import { approach } from "../data/projects.js";

function ApproachCard({ item, index }) {
  const ref = useReveal({ threshold: 0.1 });
  return (
    <article
      ref={ref}
      className="reveal rounded-lg border border-line bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-amber-border hover:bg-amber-muted/50"
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber">
        Step {index + 1}
      </p>
      <h3 className="mt-3 text-xl font-medium text-paper">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-zinc-400">{item.text}</p>
    </article>
  );
}

function Approach() {
  const headingRef = useReveal();

  return (
    <section id="approach" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            eyebrow="Process"
            title="How I Build Projects"
            align="center"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {approach.map((item, index) => (
            <ApproachCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
