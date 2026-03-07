const steps = [
  {
    number: "01",
    title: "Connect Your Store",
    description:
      "Connect Shopify and your advertising platforms securely. Setup takes minutes with no engineering required.",
    channels: ["Shopify", "Meta Ads", "Google Ads"],
  },
  {
    number: "02",
    title: "Choose Where Alerts Go",
    description:
      "Send signals directly to where your team already works. Slack, WhatsApp, email, or Microsoft Teams.",
    channels: ["Slack", "WhatsApp", "Email"],
  },
  {
    number: "03",
    title: "Start Receiving Signals",
    description:
      "SignalOps monitors your store continuously and alerts you when something important happens — with a clear recommended action.",
    channels: ["Revenue", "Inventory", "CAC"],
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-base-200 border-t border-base-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Up and running
            <br />
            in minutes
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-base-100 border border-base-300 rounded p-6"
            >
              <p className="font-mono text-4xl font-bold text-primary/65 mb-5 leading-none">
                {step.number}
              </p>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-base-content/65 leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {step.channels.map((ch) => (
                  <span
                    key={ch}
                    className="text-xs font-mono text-base-content/60 border border-base-300 rounded px-2 py-0.5"
                  >
                    {ch}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
