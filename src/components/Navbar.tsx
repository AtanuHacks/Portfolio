
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full px-5 pt-5 sm:px-8">
      <nav className="navbar-glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wider"
        >
          <span className="text-white">ATANU</span>
          <span className="gradient-text"> BOSE.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-sky-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-xl border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-300 transition-all hover:bg-sky-400/20 md:flex"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="text-slate-200 md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="navbar-glass mx-auto mt-2 flex max-w-7xl flex-col gap-4 rounded-2xl p-6 md:hidden">
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
        </div>
      )}
    </header>
  );
}
