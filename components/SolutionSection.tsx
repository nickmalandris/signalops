export default function SolutionSection() {
  return (
    <section className="py-24 px-4 bg-base-200 border-t border-base-300">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
          The Solution
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Meet Your 24/7
          <br />
          AI Revenue Analyst
        </h2>
        <p className="text-lg text-base-content/50 max-w-2xl mx-auto leading-relaxed mb-16">
          Instead of checking dashboards, SignalOps continuously monitors your
          store&apos;s performance. When something important happens, it sends a
          clear message with context and a recommended action — directly to
          Slack, WhatsApp, or email.
        </p>

        {/* Core principle card */}
        <div className="bg-base-100 border border-primary/20 rounded p-8 md:p-12 max-w-xl mx-auto">
          <p className="font-mono text-xs text-base-content/60 uppercase tracking-widest mb-6">
            Core Principle
          </p>
          <p className="text-2xl md:text-3xl font-bold text-base-content leading-snug mb-4">
            Only send alerts that are{" "}
            <span className="text-primary">worth acting on.</span>
          </p>
          <p className="text-sm text-base-content/65 leading-relaxed">
            The system avoids alert fatigue by focusing exclusively on
            high-signal events. You receive fewer alerts — but every single one
            matters and comes with a clear next step.
          </p>
        </div>
      </div>
    </section>
  );
}
