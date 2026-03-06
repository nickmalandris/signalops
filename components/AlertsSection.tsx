interface AlertData {
  type: "revenue" | "inventory" | "cost";
  title: string;
  message: string;
  metric: string;
  action: string;
  time: string;
}

const alerts: AlertData[] = [
  {
    type: "revenue",
    title: "Revenue Opportunity",
    message:
      'ROAS for "Summer Collection Campaign" increased by 42% in the last 2 hours.',
    metric: "Current ROAS: 4.3x  ↑ +42%",
    action:
      "Consider increasing budget by 20% while performance is strong.",
    time: "2m ago",
  },
  {
    type: "inventory",
    title: "Inventory Risk",
    message:
      '"Classic Linen Shirt" is projected to sell out within 36 hours. Sales velocity increased by 28% today.',
    metric: "Est. stock-out: 36 hrs  ↑ +28% velocity",
    action: "Restock inventory or pause related ad campaigns.",
    time: "14m ago",
  },
  {
    type: "cost",
    title: "Cost Alert",
    message:
      "Customer acquisition cost increased by 31% today. Primary cause: Meta Ads CPC spike.",
    metric: "CAC increase: +31%  ↑ vs. 7-day avg",
    action:
      "Review ad performance and pause underperforming creatives.",
    time: "1h ago",
  },
];

const styles = {
  revenue: {
    border: "border-l-success",
    label: "text-success",
    dot: "bg-success",
    metric: "text-success",
  },
  inventory: {
    border: "border-l-warning",
    label: "text-warning",
    dot: "bg-warning",
    metric: "text-warning",
  },
  cost: {
    border: "border-l-error",
    label: "text-error",
    dot: "bg-error",
    metric: "text-error",
  },
};

function AlertCard({ alert }: { alert: AlertData }) {
  const s = styles[alert.type];

  return (
    <div
      className={`bg-base-200 border border-base-300 border-l-4 ${s.border} rounded-r flex flex-col gap-3 p-5`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider ${s.label}`}
        >
          <span className={`inline-block w-1.5 h-1.5 rounded-full ${s.dot}`} />
          {alert.title}
        </span>
        <span className="text-xs text-base-content/25 font-mono">
          {alert.time}
        </span>
      </div>

      {/* Message */}
      <p className="text-sm text-base-content/70 leading-relaxed">
        {alert.message}
      </p>

      {/* Metric pill */}
      <div
        className={`font-mono text-xs bg-base-300 rounded px-3 py-2 ${s.metric}`}
      >
        {alert.metric}
      </div>

      {/* Action */}
      <div className="flex gap-2 items-start pt-1 border-t border-base-300">
        <span className="text-base-content/30 font-bold text-sm mt-0.5 shrink-0">
          →
        </span>
        <p className="text-xs text-base-content/40 leading-relaxed">
          {alert.action}
        </p>
      </div>
    </div>
  );
}

export default function AlertsSection() {
  return (
    <section className="py-24 px-4 border-t border-base-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            Example Signals
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            What SignalOps looks
            <br />
            like in practice
          </h2>
          <p className="text-lg text-base-content/50 max-w-2xl mx-auto leading-relaxed">
            Instead of charts and dashboards, you receive targeted messages with
            full context and a clear next step.
          </p>
        </div>

        {/* Alert cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {alerts.map((alert) => (
            <AlertCard key={alert.title} alert={alert} />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-base-content/25 font-mono mt-10">
          Every alert contains: what happened · why it matters · what to do next
        </p>
      </div>
    </section>
  );
}
