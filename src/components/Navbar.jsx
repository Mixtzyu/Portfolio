import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

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
          <span className="grid h-9 w-9 place-items-center rounded-md border border-white/18 bg-white/[0.04] text-sm font-semibold text-paper">
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
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
