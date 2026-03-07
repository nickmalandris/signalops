const features = [
  {
    symbol: "◉",
    title: "Cross-Platform Intelligence",
    description:
      "SignalOps correlates data across Shopify, Meta, Google, and Klaviyo simultaneously. It surfaces connections a single-platform dashboard will never show — like a CPC spike caused by a site speed regression.",
  },
  {
    symbol: "⌁",
    title: "Signal Precision, Not Volume",
    description:
      "The system is calibrated to fire only when the data is statistically meaningful. You receive fewer alerts than a typical monitoring tool — because noise is not a signal.",
  },
  {
    symbol: "→",
    title: "Context, Then Action",
    description:
      "Every alert includes what happened, why it happened, and one specific next step. No interpretation required. The work of your analytics team, delivered as a single message.",
  },
  {
    symbol: "◻",
    title: "Zero Learning Curve",
    description:
      "If you can read a text message, you can act on a SignalOps signal. No logins, no dashboards, no onboarding sessions. Intelligence delivered where your team already works.",
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
