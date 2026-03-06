const benefits = [
  "Early access to the platform",
  "Direct input into which alerts get built first",
  "Founding pricing when the product launches",
  "Personal onboarding with the founding team",
];

export default function FoundingOfferSection() {
  return (
    <section className="py-24 px-4 bg-base-200 border-t border-base-300">
      <div className="max-w-2xl mx-auto">
        <div className="bg-base-100 border border-primary/20 rounded p-8 md:p-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-1.5 mb-8">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              Limited Access
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Become a Founding Partner
          </h2>
          <p className="text-base-content/50 leading-relaxed mb-10 text-sm">
            We&apos;re inviting{" "}
            <strong className="text-base-content">20 Shopify founders</strong>{" "}
            to shape the first version of SignalOps. Founding partners help
            decide which alerts get built first — and get exclusive access in
            return.
          </p>

          {/* Benefits list */}
          <ul className="text-left space-y-3 mb-10">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5 shrink-0">
                  ✓
                </span>
                <span className="text-sm text-base-content/60">{benefit}</span>
              </li>
            ))}
          </ul>

          <a
            href="#apply"
            className="btn btn-primary btn-lg font-mono w-full"
          >
            Apply for Founding Access
          </a>
          <p className="text-xs text-base-content/55 font-mono mt-4">
            20 spots · No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
