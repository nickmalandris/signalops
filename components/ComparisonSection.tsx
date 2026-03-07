const rows = [
  {
    label: "Access",
    old: "Manual login across 6 tabs",
    new: "0 logins — signals come to you",
  },
  {
    label: "Format",
    old: "Charts, tables, filters to interpret",
    new: "One plain-language message",
  },
  {
    label: "Data freshness",
    old: "Yesterday's numbers, today",
    new: "Real-time, cross-platform",
  },
  {
    label: "Context",
    old: '"What does this mean?"',
    new: "Root cause included",
  },
  {
    label: "Next step",
    old: "You figure it out",
    new: '"Do this now"',
  },
  {
    label: "Time per day",
    old: "2+ hours of checking",
    new: "2 minutes of acting",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 px-4 border-t border-base-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            The Difference
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Dashboards report.
            <br />
            Signals act.
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 font-mono text-xs text-base-content/60 uppercase tracking-wider w-1/4" />
                <th className="text-left py-3 px-4 font-mono text-xs text-base-content/60 uppercase tracking-wider w-[37.5%]">
                  The Old Way
                  <span className="block text-base-content/40 normal-case font-normal tracking-normal mt-0.5">
                    Dashboards
                  </span>
                </th>
                <th className="text-left py-3 px-4 font-mono text-xs text-primary uppercase tracking-wider w-[37.5%]">
                  The Signal Ops Way
                  <span className="block text-primary/70 normal-case font-normal tracking-normal mt-0.5">
                    Signals
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-base-200" : "bg-base-100"}
                >
                  <td className="py-4 px-4 font-mono text-xs text-base-content/60 uppercase tracking-wider align-top">
                    {row.label}
                  </td>
                  <td className="py-4 px-4 text-base-content/60 leading-relaxed align-top">
                    {row.old}
                  </td>
                  <td className="py-4 px-4 text-base-content leading-relaxed align-top font-medium">
                    {row.new}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
