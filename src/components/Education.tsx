
"use client";

import {
  GraduationCap,
  School,
  BookOpen,
  Trophy,
} from "lucide-react";

import { motion, type Variants } from "framer-motion";

const educationItems = [
  {
    icon: GraduationCap,
    level: "UNDERGRADUATE",
    title: "B.Tech",
    subtitle: "Computer Science and Engineering",
    institution: "Asansol Engineering College, Asansol",
    duration: "2024 – 2028",
    status: "Currently Pursuing",
    score: null,
    subjects: null,
    achievement: "",
    cgpa: "8.54",
  },
  {
    icon: School,
    level: "HIGHER SECONDARY",
    title: "Class XII",
    subtitle: "CBSE",
    institution: "D.A.V. Public School, H.C.L. Rupnarayanpur",
    duration: "2024",
    status: null,
    score: "93.4%",
    subjects: "Physics · Chemistry · Mathematics · Computer Science",
    cgpa: "",
    achievement: "2nd Position — Science Stream (2024 Batch)",
  },
  {
    icon: BookOpen,
    level: "SECONDARY",
    title: "Class X",
    subtitle: "CBSE",
    institution: "D.A.V. Public School, H.C.L. Rupnarayanpur",
    duration: "2022",
    status: null,
    score: "95.4%",
    subjects: null,
    cgpa: "",
    achievement: "",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Education() {
  return (
    <section
      id="education"
      className="relative px-6 py-28 sm:px-10"
    >
      <div className="mx-auto max-w-5xl">

        {/* SECTION HEADING */}
        <motion.div
          className="mb-16 flex flex-col items-center text-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Academic Journey
          </p>

          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
            My <span className="text-cyan-400">Education.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Every step in my academic journey has been an
            opportunity to learn, grow, and build a stronger
            foundation for the future.
          </p>
        </motion.div>

        {/* EDUCATION TIMELINE */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {/* TIMELINE LINE */}
          <div className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 sm:left-8" />

          <div className="space-y-8">
            {educationItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* TIMELINE MARKER */}
                  <div className="absolute left-[13px] top-8 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/50 bg-[#080d1b] shadow-[0_0_15px_rgba(34,211,238,0.25)] sm:left-[17px]">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                  </div>

                  {/* EDUCATION CARD */}
                  <div className="glass rounded-2xl p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.10)] sm:p-8">

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                          <Icon className="h-6 w-6 text-cyan-300" />
                        </div>

                        <div>
                          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-cyan-400">
                            {item.level}
                          </p>

                          <h3 className="text-2xl font-bold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm font-medium text-slate-300">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300">
                          {item.duration}
                        </span>

                        {item.status && (
                          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium text-cyan-300">
                            {item.status}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-6 border-t border-white/10 pt-5">

                      <p className="text-sm leading-7 text-slate-400">
                        {item.institution}
                      </p>

                      {item.subjects && (
                        <p className="mt-3 text-sm leading-7 text-slate-400">
                          <span className="font-medium text-slate-300">
                            Subjects:{" "}
                          </span>
                          {item.subjects}
                        </p>
                      )}

                      {/* ACADEMIC SCORE */}
                      {item.score && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-400">
                            Academic Score
                          </p>
                          <p className="text-lg font-semibold text-cyan-300">
                            {item.score}
                          </p>
                        </div>
                      )}

                      {/* B.TECH CGPA */}
                      {item.cgpa && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-400">
                            Current CGPA
                          </p>
                          <p className="text-lg font-semibold text-cyan-300">
                            {item.cgpa}
                          </p>
                          <p className="mt-1 text-xs text-gray-500">
                            Up to 4th Semester
                          </p>
                        </div>
                      )}

                      {/* ACADEMIC ACHIEVEMENT */}
                      {item.achievement && (
                        <div className="mt-5 flex items-center gap-3 rounded-xl border border-yellow-400/20 bg-yellow-400/[0.06] p-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10">
                            <Trophy className="h-5 w-5 text-yellow-400" />
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-yellow-300">
                              {item.achievement}
                            </p>
                            <p className="mt-1 text-xs text-gray-400">
                              Academic Achievement
                            </p>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
