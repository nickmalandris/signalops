export default function FounderLetterSection() {
  return (
    <section className="py-24 px-4 border-t border-base-300">
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-12">
          A Note from the Founder
        </p>

        <div className="flex flex-col gap-5 text-base-content/70 leading-relaxed text-sm">
          <p>
            I spent years designing large-scale data pipelines — systems that
            processed millions of events per day for organizations that couldn&apos;t
            afford to miss a signal. The infrastructure was sophisticated. The
            insights were buried.
          </p>
          <p>
            Merchants were sitting on the same problem. Every platform generates
            data. Shopify, Meta, Google, Klaviyo — they all have dashboards, all
            have reports, all require you to log in, interpret, and decide.
            That&apos;s not analysis. That&apos;s busywork.
          </p>
          <p>
            I built SignalOps for the founder who knows their store better than
            any analyst — but doesn&apos;t have time to check six tabs twice a day.
            The goal is simple:{" "}
            <span className="text-base-content font-medium">
              ship faster by spending less time on spreadsheets.
            </span>
          </p>
          <p>
            The founding cohort is deliberately small. I want to work directly
            with 20 operators to make sure every signal is worth receiving before
            we scale this to thousands of stores.
          </p>
          <p>
            If your store does $20k+ a month and you&apos;re still checking
            dashboards manually — this was built for you.
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-base-300 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <span className="text-primary font-bold font-mono text-sm">N</span>
          </div>
          <div>
            <p className="font-bold text-base-content text-sm">Nick Malandris</p>
            <p className="text-xs text-base-content/60 font-mono">
              Founder, SignalOps · Data Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
