import { useReveal } from "../hooks/useReveal.js";
import SectionHeading from "./SectionHeading.jsx";

function ViberIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.985 0C5.452 0 0 5.12 0 11.435c0 3.07 1.258 5.912 3.332 8.006L2.2 23.1l4.006-1.045A11.985 11.985 0 0011.985 24C18.52 24 24 18.88 24 12.565S18.52 0 11.985 0zm0 21.818a9.827 9.827 0 01-5.058-1.395l-3.51.915.946-3.414a9.635 9.635 0 01-2.18-6.49C2.183 6.303 6.601 2.182 11.985 2.182S21.818 6.303 21.818 12.565s-4.418 9.253-9.833 9.253zm5.4-7.09c-.294-.147-1.74-.854-2.01-.952-.27-.098-.467-.147-.663.147-.196.294-.762.953-.934 1.149-.172.196-.343.22-.637.073-.294-.147-1.24-.455-2.362-1.448-.873-.773-1.463-1.728-1.635-2.022-.172-.294-.018-.453.129-.6.132-.13.294-.34.441-.51.147-.17.196-.293.294-.49.098-.196.049-.367-.024-.514-.074-.147-.663-1.59-.908-2.177-.24-.571-.484-.494-.663-.503l-.564-.01c-.196 0-.514.073-.784.367-.27.294-1.03 1.002-1.03 2.443s1.054 2.835 1.2 3.031c.147.196 2.073 3.14 5.02 4.404.702.303 1.25.484 1.677.62.705.225 1.346.193 1.853.117.565-.084 1.74-.708 1.985-1.393.245-.684.245-1.27.172-1.393-.073-.122-.27-.196-.564-.343z" />
    </svg>
  );
}

function WhatsappIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function Contact() {
  const headingRef = useReveal();
  const cardRef = useReveal({ threshold: 0.1 });

  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-4xl text-center">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            eyebrow="Contact"
            title="Get In Touch"
            subtitle="Open to university-related communication, collaboration opportunities, and feedback on my projects."
            align="center"
          />
        </div>

        <div ref={cardRef} className="reveal reveal-delay-2 rounded-xl border border-line bg-white/[0.035] p-6 sm:p-8">
          {/* Email */}
          <div className="mb-6">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-amber">
              Email
            </p>
            <a
              href="mailto:diarademieco1@gmail.com"
              className="text-lg font-medium text-paper transition hover:text-amber"
            >
              diarademieco1@gmail.com
            </a>
          </div>

          {/* Divider */}
          <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-line to-transparent" />

          {/* Phone — Viber & WhatsApp */}
          <div className="mb-8">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-amber">
              Phone
            </p>
            <a
              href="tel:+38345947307"
              className="text-lg font-medium text-paper transition hover:text-amber"
            >
              +383 45 947 307
            </a>
            <div className="mt-3 flex items-center justify-center gap-3">
              <span className="flex items-center gap-1.5 rounded-full border border-line bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400">
                <ViberIcon className="h-3.5 w-3.5 text-purple-400" />
                Viber
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-line bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400">
                <WhatsappIcon className="h-3.5 w-3.5 text-green-400" />
                WhatsApp
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:diarademieco1@gmail.com"
              className="inline-flex items-center justify-center rounded-md bg-paper px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:opacity-90"
            >
              Email Me
            </a>
            <a
              href="https://wa.me/38345947307"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-amber-border bg-amber-muted px-6 py-3 text-sm font-semibold text-amber transition hover:-translate-y-0.5 hover:bg-amber/20"
            >
              <WhatsappIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
