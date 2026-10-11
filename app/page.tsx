const ComingSoonPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-neutral-950 text-neutral-100">
      {/* Background ambient lighting effects */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[480px] w-[480px] sm:h-[640px] sm:w-[640px] rounded-full bg-gradient-to-tr from-indigo-600/20 via-violet-600/15 to-pink-500/10 blur-[130px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* Navigation / Header */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 font-mono text-base font-bold text-white shadow-lg shadow-indigo-500/20">
            Q
          </div>
          <span className="text-xl font-bold tracking-wider text-white">QORVEN</span>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs font-medium text-neutral-300 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Under Construction
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-12 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-indigo-300 backdrop-blur-sm">
          <span>🚀</span>
          <span>Preparing for Launch</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Something Awesome is{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg lg:text-xl">
          We are building the next generation platform engineered for speed, reliability, and precision. Our website is currently under construction, but we are working hard behind the scenes.
        </p>

        {/* Feature highlight badges */}
        <div className="mt-10 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4 text-center backdrop-blur-sm transition-colors hover:border-neutral-700">
            <div className="text-sm font-semibold text-neutral-200">Modern Architecture</div>
            <div className="mt-1 text-xs text-neutral-500">Next.js & React 19</div>
          </div>
          <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4 text-center backdrop-blur-sm transition-colors hover:border-neutral-700">
            <div className="text-sm font-semibold text-neutral-200">Peak Performance</div>
            <div className="mt-1 text-xs text-neutral-500">Zero-compromise speed</div>
          </div>
          <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4 text-center backdrop-blur-sm transition-colors hover:border-neutral-700">
            <div className="text-sm font-semibold text-neutral-200">Sleek Interface</div>
            <div className="mt-1 text-xs text-neutral-500">Tailwind CSS precision</div>
          </div>
        </div>

        {/* Status notification notice */}
        <div className="mt-10 flex w-full max-w-md flex-col items-center gap-3 sm:flex-row">
          <div className="w-full rounded-lg border border-neutral-800 bg-neutral-900/70 px-4 py-2.5 text-sm text-neutral-400 text-left">
            <span>Updates & announcements coming soon</span>
          </div>
          <div className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-neutral-800 px-5 py-2.5 text-sm font-medium text-neutral-300">
            Stay Tuned
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 border-t border-neutral-800/80 px-6 py-6 text-xs text-neutral-500 sm:flex-row">
        <div>
          &copy; 2026 Qorven. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <span className="hover:text-neutral-400 transition-colors cursor-default">Privacy Policy</span>
          <span className="hover:text-neutral-400 transition-colors cursor-default">Terms of Service</span>
          <span className="hover:text-neutral-400 transition-colors cursor-default">Contact</span>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoonPage;
