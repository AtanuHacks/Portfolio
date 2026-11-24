
"use client";

import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  ExternalLink,
  HeartPulse,
  Landmark,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

const projects = [
  {
    number: "02",
    name: "LoanIQ",
    category: "FinTech · Machine Learning",
    description:
      "A data-driven loan approval prediction application that evaluates applicant information to predict loan approval outcomes and provide risk-related insights through an interactive assessment workflow.",
    contribution:
      "Worked on developing the loan prediction project, including its machine learning workflow and application implementation.",
    icon: Landmark,
    accent: "from-cyan-400 to-blue-500",
    technologies: [
      "Python",
      "Jupyter Notebook",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Flask",
      "Machine Learning",
    ],
    github: "https://github.com/AtanuHacks/LoanIQ",
    demo: "https://loan-approval-ml-model.vercel.app/",
  },
  {
    number: "03",
    name: "Feelify",
    category: "Artificial Intelligence · Adaptive UI",
    description:
      "A fully functional AI-powered project exploring emotion-aware experiences by integrating AI capabilities with an adaptive user interface.",
    contribution:
      "Contributed to the development and implementation of the project, with a focus on AI integration and building an engaging user experience.",
    icon: BrainCircuit,
    accent: "from-violet-400 to-fuchsia-500",
    technologies: [
      "Hugging Face",
      "OpenAI API",
      "Firebase",
      "Supabase",
    ],
    github: "https://github.com/AtanuHacks/Feelify",
    demo: "https://feelify-v1.netlify.app/",
  },
];

function ProjectLinks({
  github,
  demo,
}: {
  github: string;
  demo: string;
}) {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
      >
        <FaGithub size={17} />
        GitHub
        <ArrowUpRight size={15} />
      </a>

      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-4 py-2.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-500/20"
      >
        Live Demo
        <ExternalLink size={15} />
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28 sm:px-10"
    >
      {/* AMBIENT GLOWS */}
      <div className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-cyan-500/5 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-80 w-80 rounded-full bg-violet-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <Code2 size={16} />
            What I've Built
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My <span className="gradient-text">Projects.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            A collection of practical projects where I explore technology,
            solve problems, and turn ideas into working applications.
          </p>
        </motion.div>

        {/* ========================================= */}
        {/* FEATURED PROJECT: CARDIOSENSE */}
        {/* ========================================= */}

        <motion.article
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="glass group relative mb-8 overflow-hidden rounded-3xl p-6 shadow-[0_0_45px_rgba(34,211,238,0.04)] transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_55px_rgba(34,211,238,0.09)] sm:p-9"
        >
          {/* SUBTLE CARD GLOW */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/[0.06] blur-[90px] transition-all duration-700 group-hover:bg-cyan-400/10" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* PROJECT DETAILS */}
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  Featured Project
                </span>

                <span className="text-sm text-slate-500">
                  01 / Healthcare & Machine Learning
                </span>
              </div>

              <h3 className="text-3xl font-bold text-white sm:text-4xl">
                <span className="gradient-text">Cardio</span>Sense
              </h3>

              <p className="mt-3 text-sm font-medium text-cyan-300">
                Machine Learning-Based Heart Disease Prediction
              </p>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                A machine-learning-based heart disease prediction application
                designed to make cardiovascular risk assessment more
                accessible through an intuitive and user-friendly web
                interface.
              </p>

              {/* PROJECT HIGHLIGHTS */}
              <div className="mt-7">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Project Highlights
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Heart disease prediction",
                    "Machine learning workflow",
                    "Python-based model experimentation",
                    "User-friendly web interface",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* TECHNOLOGIES */}
              <div className="mt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Technologies & Libraries
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Jupyter Notebook",
                    "NumPy",
                    "Pandas",
                    "Matplotlib",
                    "Seaborn",
                    "Scikit-learn",
                    "Flask",
                    "Machine Learning",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-cyan-400/15 bg-cyan-400/5 px-3 py-2 text-xs font-medium text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* MY CONTRIBUTION */}
              <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.025] p-4 backdrop-blur-sm">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  My Contribution
                </p>

                <p className="text-sm leading-7 text-slate-300">
                  As a project collaborator, I independently handled the
                  complete UI/UX design and frontend development. I also
                  worked on model training and experimentation using Python
                  notebooks, contributing to the machine learning workflow.
                </p>
              </div>

              <ProjectLinks
                github="https://github.com/AtanuHacks/CardioSense"
                demo="https://cardiosense-xi.vercel.app/"
              />
            </div>

            {/* FEATURED PROJECT VISUAL */}
            <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
              <div className="absolute h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/15 to-violet-500/15 blur-[70px]" />

              {/* TRANSPARENT SNAPSHOT PANEL */}
              <div className="glass relative w-full rounded-3xl border border-white/10 p-6 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs text-slate-500">
                      PROJECT SNAPSHOT
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      CardioSense
                    </p>
                  </div>

                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <HeartPulse size={25} />
                  </div>
                </div>

                {/* PROJECT OVERVIEW */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                      Machine Learning Workflow
                    </span>

                    <Sparkles size={17} className="text-cyan-300" />
                  </div>

                  <div className="mt-5 space-y-4">
                    {[
                      ["Data preparation", "01"],
                      ["Model experimentation", "02"],
                      ["Prediction processing", "03"],
                      ["User interface", "04"],
                    ].map(([label, number]) => (
                      <div
                        key={number}
                        className="flex items-center gap-3"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-xs font-semibold text-cyan-300">
                          {number}
                        </span>

                        <span className="text-sm text-slate-300">
                          {label}
                        </span>

                        <div className="ml-auto h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* ML INDICATOR */}
                <div className="mt-4 flex items-center gap-3 rounded-xl border border-violet-400/15 bg-violet-400/[0.04] p-4">
                  <BrainCircuit
                    size={22}
                    className="shrink-0 text-violet-300"
                  />

                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      Machine Learning
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Heart disease prediction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ========================================= */}
        {/* OTHER PROJECTS: LOANIQ & FEELIFY */}
        {/* ========================================= */}

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.3 }}
                className="glass group relative overflow-hidden rounded-3xl p-6 shadow-[0_0_45px_rgba(34,211,238,0.04)] transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_55px_rgba(34,211,238,0.09)] sm:p-9"
              >
                {/* CARD AMBIENT GLOW */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${project.accent} opacity-[0.06] blur-[70px] transition-opacity duration-500 group-hover:opacity-10`}
                />

                <div className="relative flex flex-1 flex-col">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-3 text-cyan-300">
                      <Icon size={27} />
                    </div>

                    <span className="text-sm font-medium tracking-widest text-slate-600">
                      {project.number}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
                    {project.name}
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-slate-400">
                    {project.description}
                  </p>

                  {/* MY CONTRIBUTION */}
                  <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.025] p-4 backdrop-blur-sm">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      My Contribution
                    </p>

                    <p className="text-sm leading-7 text-slate-300">
                      {project.contribution}
                    </p>
                  </div>

                  {/* TECHNOLOGIES */}
                  <div className="mt-7">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 text-xs font-medium text-slate-300 transition-colors group-hover:border-cyan-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-2">
                    <ProjectLinks
                      github={project.github}
                      demo={project.demo}
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CLOSING TEXT */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-slate-500">
            Always learning. Always building.
          </p>

          <p className="mt-2 text-base font-medium text-slate-300">
            More ideas and projects are on the way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
