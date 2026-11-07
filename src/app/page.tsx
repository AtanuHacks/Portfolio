
export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20">
      <section className="glass w-full max-w-4xl rounded-3xl px-8 py-16 text-center sm:px-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
          Welcome to my portfolio
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Building the{" "}
          <span className="gradient-text">Future</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
          A space to showcase my journey, technical skills,
          creative projects, and passion for technology.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <span className="glass rounded-full px-5 py-2 text-sm text-sky-300">
            Computer Science
          </span>

          <span className="glass rounded-full px-5 py-2 text-sm text-violet-300">
            Web Development
          </span>

          <span className="glass rounded-full px-5 py-2 text-sm text-blue-300">
            Machine Learning
          </span>
        </div>
      </section>
    </main>
  );
}
