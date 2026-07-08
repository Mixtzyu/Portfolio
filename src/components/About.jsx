import SectionHeading from "./SectionHeading.jsx";

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          subtitle="A self-taught developer building toward stronger foundations in computer science, software engineering, and artificial intelligence."
        />

        <div className="space-y-6 text-base leading-8 text-zinc-400">
          <p>
            I am a self-taught developer from Kosovo with a strong interest in
            computer science, software engineering, and artificial intelligence.
            My learning has been focused on building practical projects,
            experimenting with modern web technologies, and understanding how
            software can solve real-world problems.
          </p>
          <p>
            Over time, I have worked with technologies such as JavaScript,
            React, Node.js, MongoDB, and Shopify. I enjoy learning by
            building, improving existing projects, and turning ideas into
            functional applications.
          </p>
          <p>
            My goal is to continue developing strong foundations in computer
            science at university while building meaningful software projects and
            exploring the future of AI-powered development.
          </p>

          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            {[
              ["3+", "Project areas"],
              ["2024", "Started coding"],
              ["CS + AI", "University focus"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-lg border border-line bg-white/[0.035] p-5"
              >
                <p className="text-2xl font-light text-paper">{value}</p>
                <p className="mt-1 text-sm text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
