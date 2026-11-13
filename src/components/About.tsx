
"use client";

import { Code2, BrainCircuit, Target } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const aboutCards = [
  {
    icon: Code2,
    title: "Problem Solver",
    description:
      "I enjoy understanding how things work, tackling challenging problems, and turning ideas into meaningful solutions.",
  },
  {
    icon: BrainCircuit,
    title: "Curious Learner",
    description:
      "I'm passionate about technology, innovation, and AI, constantly exploring new concepts and pushing beyond my comfort zone.",
  },
  {
    icon: Target,
    title: "Future Focused",
    description:
      "My goal is to become a versatile technology professional building intelligent, impactful, real-world solutions.",
  },
];

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 55 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-28 sm:px-10"
    >
      <div className="mx-auto max-w-7xl">

        

{/* SECTION HEADING */}
<motion.div
  className="mx-auto mb-16 flex max-w-5xl flex-col items-center text-center"
  variants={headingVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
>
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
    Get to know me
  </p>

  <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
    About <span className="text-cyan-400">Me.</span>
  </h2>

  <p className="mt-8 max-w-4xl text-center text-base leading-9 text-slate-300/90 sm:text-lg">
    I'm a Computer Science and Engineering undergraduate passionate about
    technology, problem-solving, and building meaningful digital experiences.
    With an interest in both frontend and backend development, I enjoy
    exploring different technologies and turning ideas into practical solutions.
    My curiosity also extends to Machine Learning and Artificial Intelligence,
    where I explore how data-driven approaches can address real-world challenges.
    I believe in continuous learning, logical thinking, and pushing beyond my
    comfort zone to become a better developer every day.
  </p>
</motion.div>



        {/* ABOUT CARDS */}
        <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        >
          {aboutCards.map((card) => {
            const Icon = card.icon;

            return (
              
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <div
                className="glass h-full rounded-2xl p-7 transition-colors duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                style={{
                  transform:
                    "perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
                  transition: "transform 150ms ease-out",
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();

                  const x =
                    (e.clientX - rect.left - rect.width / 2) /
                    (rect.width / 2);

                  const y =
                    (e.clientY - rect.top - rect.height / 2) /
                    (rect.height / 2);

                  e.currentTarget.style.setProperty(
                    "--tilt-x",
                    `${-y * 5}deg`
                  );

                  e.currentTarget.style.setProperty(
                    "--tilt-y",
                    `${x * 5}deg`
                  );
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.setProperty("--tilt-x", "0deg");
                  e.currentTarget.style.setProperty("--tilt-y", "0deg");
                }}
              >

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {card.title}
                </h3>

                <p className="text-sm leading-7 text-slate-400">
                  {card.description}
                </p>
                </div>
              </motion.div>
            );
          })}

      </motion.div>
      </div>
    </section>
  );
}
