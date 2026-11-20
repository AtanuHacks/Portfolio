
"use client";

import {
  Code2,
  Monitor,
  Server,
  BrainCircuit,
  Terminal,
  Lightbulb,
  Database,
  Network,
  Workflow,
} from "lucide-react";

import { FaJava, FaCss3Alt } from "react-icons/fa";

import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiGit,
  SiLinux,
} from "react-icons/si";

import { motion, type Variants } from "framer-motion";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    description:
      "Languages that form the foundation of my programming and problem-solving skills.",
    skills: [
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Prolog", icon: Code2, color: "#22D3EE" },
    ],
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Technologies I use to create responsive, interactive, and user-friendly interfaces.",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "AngularJS", icon: SiAngular, color: "#DD0031" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Frameworks and technologies for building server-side applications and APIs.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "Django", icon: SiDjango, color: "#FFFFFF" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
      { name: "REST APIs", icon: Network, color: "#22D3EE" },
    ],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning & Computer Science",
    description:
      "Concepts and techniques that strengthen my understanding of intelligent systems and computation.",
    skills: [
      { name: "Machine Learning", icon: BrainCircuit, color: "#A78BFA" },
      { name: "Data Structures", icon: Workflow, color: "#22D3EE" },
    ],
  },
  {
    icon: Terminal,
    title: "Tools & Technologies",
    description:
      "Tools and technologies that support my development workflow and technical environment.",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "SQL", icon: Database, color: "#22D3EE" },
    ],
  },
  {
    icon: Lightbulb,
    title: "Professional Skills",
    description:
      "Essential problem-solving and analytical abilities that guide my approach to development.",
    skills: [
      { name: "Critical Thinking", icon: BrainCircuit, color: "#A78BFA" },
      { name: "Problem Solving", icon: Lightbulb, color: "#FACC15" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 py-28 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* SECTION HEADING */}
        <motion.div
          className="mb-16 flex flex-col items-center text-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            What I Work With
          </p>

          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
            My <span className="text-cyan-400">Skills.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A collection of technologies, tools, and concepts
            I have explored and worked with throughout my
            learning journey in software development.
          </p>
        </motion.div>

        {/* SKILL CATEGORY CARDS */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                  transition: {
                    type: "spring",
                    stiffness: 280,
                    damping: 22,
                  },
                }}
                className="glass group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.10)] sm:p-8"
              >
                {/* SUBTLE CARD GLOW */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.04] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.10]" />

                {/* CARD HEADER */}
                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="relative my-6 h-px bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />

                {/* TECHNOLOGY LOGOS AND NAMES */}
                <div className="relative flex flex-wrap gap-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                      >
                        <SkillIcon
                          size={19}
                          style={{ color: skill.color }}
                        />

                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
