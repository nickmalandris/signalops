export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 pt-28 pb-20">
      <div className="max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-1.5 mb-8">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Founding Beta · 20 spots available
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          Stop Checking
          <br />
          Dashboards.
          <br />
          <span className="text-primary">Start Receiving</span>
          <br />
          Revenue Signals.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-base-content/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          Your AI Revenue Analyst monitors your Shopify store and marketing
          performance 24/7 — sending clear, actionable alerts when something
          important happens. No dashboards. No charts. Just signals.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 mb-20">
          <a
            href="#apply"
            className="btn btn-primary btn-lg font-mono px-10"
          >
            Join the Founding Beta
          </a>
          <p className="text-sm text-base-content/30 font-mono">
            We&apos;re onboarding{" "}
            <span className="text-primary">20 Shopify founders</span> to shape
            the first generation of revenue alerts.
          </p>
        </div>
      </div>

      {/* Alert preview card */}
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-base-200 border border-base-300 border-l-4 border-l-success rounded-r-lg text-left shadow-2xl">
          <div className="p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-success uppercase tracking-wider">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                Revenue Opportunity
              </span>
              <span className="text-xs text-base-content/25 font-mono">
                2m ago
              </span>
            </div>
            <p className="text-sm text-base-content/75 leading-relaxed">
              ROAS for{" "}
              <span className="text-base-content font-medium">
                &ldquo;Summer Collection Campaign&rdquo;
              </span>{" "}
              increased by{" "}
              <span className="text-primary font-bold">42%</span> in the last 2
              hours.
            </p>
            <div className="font-mono text-xs bg-base-300 rounded px-3 py-2 text-success">
              Current ROAS: 4.3x
            </div>
            <div className="flex gap-2 items-start pt-1 border-t border-base-300">
              <span className="text-base-content/40 font-bold text-sm mt-0.5">
                →
              </span>
              <p className="text-xs text-base-content/40 leading-relaxed">
                Consider increasing budget by 20% while performance is strong.
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-base-content/20 font-mono mt-4">
          This is what a SignalOps alert looks like.
        </p>
      </div>
    </section>
  );
}
