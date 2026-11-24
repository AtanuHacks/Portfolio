
"use client";

import { useState, type FormEvent } from "react";
import { motion, type Variants } from "framer-motion";

import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  Send,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const email = "atanubosernp@gmail.com";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    senderEmail: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Hello Atanu,\n\n${formData.message}\n\nRegards,\n${formData.name}\n${formData.senderEmail}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-20">
      <Navbar />

      {/* Ambient Glows */}
      <div className="pointer-events-none absolute left-0 top-40 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="pointer-events-none absolute bottom-10 right-0 h-64 w-64 rounded-full bg-violet-500/10 blur-[110px] sm:h-80 sm:w-80 sm:blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Back to Home */}
        <motion.a
          href="/#home"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-300 sm:mb-10"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </motion.a>

        {/* Page Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs text-cyan-300 sm:mb-5 sm:text-sm"
          >
            <Sparkles size={16} />
            GET IN TOUCH
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Let's <span className="gradient-text">Connect.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg"
          >
            Have an exciting idea, an opportunity, or just want to talk about
            technology? I'm always open to meaningful conversations.
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8">
          {/* LEFT: Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex h-full min-w-0 flex-col gap-5 sm:gap-6"
          >
            {/* Contact Information Card */}
            <motion.div
              variants={itemVariants}
              className="glass flex-1 rounded-3xl p-5 sm:p-7 lg:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 sm:mb-6 sm:h-14 sm:w-14">
                <MessageCircle size={25} />
              </div>

              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Let's work together.
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400 sm:mt-4 sm:leading-8">
                I'm interested in exploring new opportunities, collaborating
                on projects, and connecting with people who enjoy building
                meaningful things with technology.
              </p>

              <div className="mt-6 sm:mt-8">
                <a
                  href={`mailto:${email}`}
                  className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-3 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/5 sm:gap-4 sm:p-4"
                >
                  <div className="shrink-0 rounded-xl bg-cyan-400/10 p-2.5 text-cyan-300 sm:p-3">
                    <Mail size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-500">EMAIL ME</p>
                    <p className="mt-1 break-all text-xs font-medium text-slate-200 sm:text-sm">
                      {email}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-slate-500 transition-colors group-hover:text-cyan-300"
                  />
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="glass shrink-0 rounded-3xl p-5 sm:p-7"
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Find me online
              </p>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/AtanuHacks"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub profile"
                  className="flex min-w-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-2 py-3 text-sm text-slate-300 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-300 sm:gap-2 sm:px-4"
                >
                  <FaGithub size={21} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/atanu-bose-51869734a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn profile"
                  className="flex min-w-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-2 py-3 text-sm text-slate-300 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-300 sm:gap-2 sm:px-4"
                >
                  <FaLinkedinIn size={21} />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass flex h-full min-w-0 flex-col rounded-3xl p-5 sm:p-7 lg:p-9"
          >
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Send me a message
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Fill in the details below and let's start a conversation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-1 flex-col space-y-5 sm:space-y-6">
              {/* Name and Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.03]"
                  />
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.senderEmail}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        senderEmail: e.target.value,
                      })
                    }
                    placeholder="you@example.com"
                    className="w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.03]"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="What would you like to discuss?"
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.03]"
                />
              </div>

              {/* Message */}
              <div className="flex flex-1 flex-col">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Write your message here..."
                  className="min-h-[150px] w-full flex-1 resize-y rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.03] sm:min-h-[180px]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-5 py-4 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98]"
              >
                Send Message

                <Send
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <p className="text-center text-xs leading-6 text-slate-500">
                This form opens your default email application with your
                message prepared. It does not send messages directly from
                this website.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 border-t border-white/10 pt-7 text-center sm:mt-16 sm:pt-8"
        >
          <p className="text-sm text-slate-500">
            Thanks for stopping by.
          </p>

          <p className="mt-2 text-sm font-medium text-slate-300">
            Designed & built by Atanu Bose.
          </p>

          <a
            href="/#home"
            className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300 transition-colors hover:text-cyan-200"
          >
            Back to Portfolio
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </main>
  );
}
