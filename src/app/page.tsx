
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-30 sm:px-10"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* LEFT: INTRODUCTION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Available for Internships
            </div>

            <p className="mb-3 text-lg text-slate-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl xl:text-7xl">
              Atanu
              <br />
              <span className="gradient-text">
                Bose.
              </span>
            </h1>

            <h2 className="mt-6 text-xl font-semibold text-slate-200 sm:text-2xl">
              Turning Ideas Into
              <span className="text-cyan-400"> Intelligent Solutions.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              A Computer Science undergraduate driven by curiosity,
              problem-solving and continuous learning. I enjoy building
              practical software, exploring machine learning and turning
              ideas into meaningful real-world solutions.
            </p>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 font-medium text-white transition-transform hover:scale-105"
              >
                View Projects
                <ArrowUpRight size={18} />
              </a>

              <a
                href="mailto:atanubosernp@gmail.com"
                className="glass flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-slate-200 transition-colors hover:border-cyan-400/50"
              >
                Contact Me
                <ArrowDown size={18} />
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-10 flex items-center justify-center gap-5 lg:justify-start">
              {/* GITHUB */}
                <a
                  href="https://github.com/AtanuHacks"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="glass rounded-xl p-3 text-slate-300 transition-all hover:-translate-y-1 hover:text-cyan-400"
                >
                  <span className="text-sm font-bold">GH</span>
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/atanu-bose-51869734a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="glass rounded-xl p-3 text-slate-300 transition-all hover:-translate-y-1 hover:text-cyan-400"
                >
                  <span className="text-sm font-bold">in</span>
                </a>

              <div className="glass rounded-xl p-3 text-slate-300">
                <Code2 size={21} />
              </div>
            </div>
          </motion.div>

          
          
{/* RIGHT: CIRCULAR PROFILE + FLOATING GLASS CARDS */}
<motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="order-1 flex justify-center lg:order-2"
>
  <div className="relative -translate-y-8 [perspective:1200px]">

    {/* Ambient glow */}
    <div className="absolute -inset-12 rounded-full bg-gradient-to-br from-cyan-500/25 via-blue-500/10 to-purple-500/30 blur-[65px]" />

    {/* Outer circular gradient border */}
    <div className="relative z-10 h-[320px] w-[320px] rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 p-[3px] shadow-[0_0_45px_rgba(56,189,248,0.2)] sm:h-[370px] sm:w-[370px]">

      {/* Circular image */}
      <div className="relative h-full w-full overflow-hidden rounded-full border-[5px] border-[#10172b] bg-[#080d1c]">

        <Image
          src="/profile.jpg"
          alt="Atanu Bose"
          fill
          priority
          sizes="(max-width: 640px) 320px, 370px"
          className="object-cover object-[center_25%] transition-transform duration-700 hover:scale-105"
        />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-transparent to-transparent" />

        {/* AI & ML CARD — ABOVE NAME */}
        <div className="glass absolute bottom-[88px] left-1/2 z-10 -translate-x-1/2 rounded-xl px-4 py-2 text-center whitespace-nowrap">
          <p className="text-[10px] text-slate-400">03 / INTERESTS</p>
          <p className="mt-1 text-xs font-semibold text-sky-300">
            Python · Machine Learning
          </p>
        </div>

        {/* Name */}
        <div className="absolute bottom-7 left-0 right-0 z-10 text-center">
          <p className="text-2xl font-bold text-white">
            Atanu Bose
          </p>
          <p className="mt-1 text-sm text-cyan-300">
            Computer Science Undergraduate
          </p>
        </div>

      </div>
    </div>

    {/* FRONTEND CARD */}
    <div className="glass absolute -left-8 top-12 z-20  rounded-2xl px-4 py-3">
      <p className="text-xs text-slate-400">01 / FRONTEND</p>
      <p className="mt-1 text-sm font-semibold text-cyan-300">
        Next.js · React
      </p>
    </div>

    {/* BACKEND CARD — 3D LAYER BEHIND PHOTO */}
      <div className="glass absolute -right-19 top-8 z-0
        rounded-2xl px-5 py-4
        [transform:rotateY(-8deg)_rotateZ(1deg)_translateZ(-35px)]
        transition-transform duration-500">
        <p className="text-xs text-slate-400">02 / BACKEND</p>
        <p className="mt-1 text-sm font-semibold text-violet-300">
          Node.js · Express
        </p>
      </div>

  </div>
</motion.div>


        </div>
      </section>
      <About />
    </main>
  );
}
