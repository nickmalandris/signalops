export default function Footer() {
  return (
    <footer className="border-t border-base-300 py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-xl font-bold tracking-tight">
            Signal<span className="text-primary">Ops</span>
          </p>
          <p className="text-xs text-base-content/25 font-mono mt-1">
            Early access launching soon.
          </p>
        </div>
        <p className="text-sm text-base-content/30 text-center md:text-right leading-relaxed">
          Built by a data engineer with experience
          <br />
          designing large-scale data systems.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-8 pt-6 border-t border-base-300">
        <p className="text-xs text-base-content/15 font-mono text-center">
          © 2026 SignalOps. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
