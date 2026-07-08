function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div
      className={`mx-auto mb-10 max-w-3xl ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-amber">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-light tracking-normal text-paper sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
