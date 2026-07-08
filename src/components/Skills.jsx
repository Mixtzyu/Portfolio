import SectionHeading from "./SectionHeading.jsx";
import { skillGroups } from "../data/skills.js";

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          subtitle="Technologies I have used while building projects and learning software development."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-line bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.055]"
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
