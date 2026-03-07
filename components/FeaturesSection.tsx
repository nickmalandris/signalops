const features = [
  {
    symbol: "◉",
    title: "The Analyst That Never Sleeps",
    description:
      "Your store runs 24/7. Now your analytics does too. SignalOps monitors performance continuously — including nights, weekends, and peak traffic moments when you're not watching.",
  },
  {
    symbol: "⌁",
    title: "High-Signal Alerts Only",
    description:
      "The system avoids alert fatigue by focusing exclusively on meaningful changes. You receive fewer alerts — but every single one is worth acting on.",
  },
  {
    symbol: "→",
    title: "Clear Recommended Actions",
    description:
      "Every alert explains what happened, why it matters, and what to do next. No interpretation required. No expertise needed. Just a clear next step.",
  },
  {
    symbol: "◻",
    title: "No Dashboards Required",
    description:
      "If you can read a message, you can use SignalOps. No logins, no charts, no learning curve. Just intelligence delivered to where you already work.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 border-t border-base-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Built for operators,
            <br />
            not analysts
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-base-200 border border-base-300 rounded p-6"
            >
              <div className="font-mono text-primary text-2xl mb-4">
                {feature.symbol}
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-base-content/65 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
