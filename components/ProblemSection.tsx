const platforms = [
  { name: "Shopify Analytics", symbol: "◈" },
  { name: "Meta Ads Manager", symbol: "◈" },
  { name: "Google Analytics", symbol: "◈" },
  { name: "Google Ads", symbol: "◈" },
  { name: "Klaviyo / Email", symbol: "◈" },
  { name: "Inventory Dashboard", symbol: "◈" },
];

const painPoints = [
  {
    title: "Opportunities disappear",
    body: "A campaign suddenly starts performing extremely well. By the time you notice, the window to scale it has closed.",
  },
  {
    title: "Stockouts happen silently",
    body: "A product begins selling out faster than expected. No alert fires. You miss the chance to restock or reallocate ad spend.",
  },
  {
    title: "Costs rise unnoticed",
    body: "Customer acquisition costs begin rising. You don't see it until the weekly review — days too late to act.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 px-4 border-t border-base-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Dashboard Fatigue
            <br />
            is Real
          </h2>
          <p className="text-lg text-base-content/50 max-w-2xl mx-auto leading-relaxed">
            Most founders already have access to analytics tools. But dashboards
            require constant checking — and important opportunities appear and
            disappear before anyone notices.
          </p>
        </div>

        {/* Platform grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-12">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-3 bg-base-200 border border-base-300 rounded px-4 py-3"
            >
              <span className="text-base-content/50 font-mono">
                {platform.symbol}
              </span>
              <span className="text-sm text-base-content/50 font-mono">
                {platform.name}
              </span>
            </div>
          ))}
        </div>

        {/* Pain points */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-base-200 border border-base-300 rounded p-5"
            >
              <h3 className="font-bold text-base-content mb-2 text-sm">
                {point.title}
              </h3>
              <p className="text-sm text-base-content/65 leading-relaxed">
                {point.body}
              </p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="border border-base-300 rounded p-8 text-center bg-base-200">
          <p className="text-xl text-base-content/70 leading-relaxed">
            The problem isn&apos;t{" "}
            <span className="text-base-content font-bold">lack of data</span>.
            <br />
            The problem is{" "}
            <span className="text-primary font-bold">
              missing the moment to act.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
