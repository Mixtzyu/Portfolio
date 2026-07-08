import SectionHeading from "./SectionHeading.jsx";

function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading
          eyebrow="Contact"
          title="Contact"
          subtitle="I am open to university-related communication, collaboration opportunities, and feedback on my projects."
          align="center"
        />

        <div className="rounded-xl border border-line bg-white/[0.035] p-6 sm:p-8">
          <a
            href="mailto:diarademieco1@gmail.com"
            className="text-lg font-medium text-paper transition hover:text-white"
          >
            diarademieco1@gmail.com
          </a>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:diarademieco1@gmail.com"
              className="inline-flex items-center justify-center rounded-md bg-paper px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:opacity-90"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
