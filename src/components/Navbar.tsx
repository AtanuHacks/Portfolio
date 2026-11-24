
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Education", href: "/#education" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav className="navbar-glass mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl px-4 py-4 sm:px-5">
        {/* Logo */}
        <a
          href="/#home"
          className="shrink-0 text-lg font-bold tracking-wider sm:text-xl"
        >
          <span className="text-white">My</span>
          <span className="gradient-text"> Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-sm text-slate-300 transition-colors hover:text-sky-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Contact CTA */}
        <a
          href="/contact"
          className="hidden shrink-0 items-center gap-2 rounded-xl border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-300 transition-all hover:bg-sky-400/20 lg:flex"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-lg p-1 text-slate-200 transition-colors hover:text-cyan-300 lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="navbar-glass mx-auto mt-2 flex max-w-7xl flex-col gap-4 rounded-2xl p-5 sm:p-6 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-slate-300 transition-colors hover:text-sky-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 border-t border-white/10 pt-4 text-sm font-medium text-cyan-300"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
