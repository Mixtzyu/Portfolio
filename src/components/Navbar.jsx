import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

// Social icon SVGs (inline, no external dep)
function GithubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/78 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label="Diar Ademi home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-md border border-amber-border bg-amber-muted text-sm font-semibold text-amber transition group-hover:bg-amber/20">
            DA
          </span>
          <span className="hidden text-sm font-medium text-paper sm:block">
            Diar Ademi
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.06] hover:text-paper"
            >
              {link.label}
            </a>
          ))}

          {/* GitHub icon */}
          <a
            href="https://github.com/Mixtzyu"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="ml-2 rounded-md p-2 text-zinc-400 transition hover:bg-white/[0.06] hover:text-paper"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-line bg-white/[0.03] text-paper md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="flex w-4 flex-col gap-1">
            <span className="h-0.5 rounded-full bg-current" />
            <span className="h-0.5 rounded-full bg-current" />
            <span className="h-0.5 rounded-full bg-current" />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-line bg-panel/96 px-5 py-4 shadow-2xl md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.06] hover:text-paper"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/Mixtzyu"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.06] hover:text-paper"
              onClick={() => setOpen(false)}
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
