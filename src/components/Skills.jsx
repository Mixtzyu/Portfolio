import { useReveal, useRevealAll } from "../hooks/useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import { skillGroups } from "../data/skills.js";

function Skills() {
  const headingRef = useReveal();
  const gridRef = useRevealAll();

  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            eyebrow="Skills"
            title="Technical Skills"
            subtitle="Technologies I have used while building projects and learning software development."
            align="center"
          />
        </div>

        <div ref={gridRef} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, i) => (
            <article
              key={group.title}
              className={`reveal reveal-scale reveal-delay-${i + 1} rounded-lg border border-line bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-amber-border hover:bg-amber-muted/50`}
            >
              <h3 className="text-lg font-medium text-paper">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-black/50 px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
