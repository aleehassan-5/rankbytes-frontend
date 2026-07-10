import { useState } from 'react';

const links = [
  { label: 'Home', href: '#top' },
  { label: 'Websites', href: '#countries' },
  { label: 'Countries', href: '#countries' },
  { label: 'Packages', href: '#budget' },
  { label: 'Free SEO Tools', href: '#tools' },
  { label: 'Blogs', href: '#blog' },
  { label: 'Contact', href: '#footer' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-6 py-3.5">
        <a href="#top" className="flex items-center gap-2.5 font-display text-[1.15rem] font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-gradient-to-br from-blue-bright to-blue-deep text-sm text-white">
            RB
          </span>
          <span>Rank Bytes</span>
        </a>

        <nav className="hidden gap-7 text-[0.94rem] font-medium text-slate md:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-blue-bright transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a href="#" className="hidden rounded-full px-4 py-2.5 text-[0.95rem] font-semibold hover:text-blue-bright md:inline-flex">
            Login
          </a>
          <a
            href="#"
            className="hidden rounded-full bg-gradient-to-br from-blue-bright to-blue-deep px-5.5 py-2.5 text-[0.95rem] font-semibold text-white shadow-[0_12px_32px_rgba(15,61,145,0.10)] transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Register
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1 p-2 md:hidden"
          >
            <span className="h-0.5 w-5.5 rounded bg-ink" />
            <span className="h-0.5 w-5.5 rounded bg-ink" />
            <span className="h-0.5 w-5.5 rounded bg-ink" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-b border-line bg-white px-6 py-4 md:hidden">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate">
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <a href="#" className="flex-1 rounded-full border border-line py-2.5 text-center text-sm font-semibold">Login</a>
            <a href="#" className="flex-1 rounded-full bg-gradient-to-br from-blue-bright to-blue-deep py-2.5 text-center text-sm font-semibold text-white">Register</a>
          </div>
        </nav>
      )}
    </header>
  );
}
