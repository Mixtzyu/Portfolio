import SectionHeading from "./SectionHeading.jsx";

function Goals() {
  return (
    <section id="goals" className="section-shell border-y border-line bg-black/25">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <SectionHeading eyebrow="Next" title="Future Goals" />

        <div className="rounded-xl border border-line bg-panel/72 p-6 shadow-2xl shadow-black/20 sm:p-8">
          <p className="text-lg leading-8 text-zinc-400">
            My goal is to study Data Science & Artificial Intelligence at
            university and develop a deeper understanding of algorithms, software
            architecture, artificial intelligence, and large-scale systems. I
            want to continue building projects that combine practical software
            engineering with creative problem-solving.
          </p>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            I am especially interested in full-stack development, AI-powered
            tools, and applications that can have real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Goals;
