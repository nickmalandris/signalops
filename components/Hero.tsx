"use client";

import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleQuickStart = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we might use a global state or URL param.
    // For now, we'll just scroll to the form. 
    // If we wanted to pre-fill, we'd need a bit more plumbing.
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
    
    // We can also try to find the email input in the form and set it
    const formEmailInput = document.querySelector('#apply input[type="email"]') as HTMLInputElement;
    if (formEmailInput) {
      formEmailInput.value = email;
      // Trigger a change event so React picks it up
      const event = new Event('input', { bubbles: true });
      formEmailInput.dispatchEvent(event);
    }
  };

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
          <span className="text-primary">Act on Signals.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-base-content/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          SignalOps is an AI Revenue Analyst that monitors your Shopify store
          and ad performance 24/7 — correlating data across platforms and
          sending you a single, actionable message when it matters.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 mb-20 w-full max-w-md mx-auto">
          <form onSubmit={handleQuickStart} className="flex flex-col sm:flex-row gap-2 w-full">
            <input 
              type="email" 
              placeholder="Enter your work email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered flex-grow bg-base-200 focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="btn btn-primary font-mono px-8"
            >
              Apply Now
            </button>
          </form>
          <p className="text-xs text-base-content/60 font-mono leading-relaxed">
            Accepting stores with{" "}
            <span className="text-base-content">$20k+ monthly revenue</span>
          </p>
        </div>
      </div>

      {/* Alert preview — cross-platform signal */}
      <div className="w-full max-w-lg mx-auto">
        {/* Slack-style container */}
        <div className="bg-base-200 border border-base-300 rounded-lg text-left shadow-2xl overflow-hidden">
          {/* Slack header bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-base-300 bg-base-300/50">
            <span className="font-mono text-xs text-base-content/60">#</span>
            <span className="font-mono text-xs text-base-content/60">signalops-alerts</span>
            <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-mono text-primary">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              live
            </span>
          </div>

          {/* Message body */}
          <div className="p-5 flex flex-col gap-4">
            {/* Bot identity */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-primary/20 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold text-xs font-mono">S</span>
              </div>
              <span className="font-bold text-sm">SignalOps</span>
              <span className="text-xs text-base-content/55 font-mono">Today at 2:14 PM</span>
            </div>

            {/* Alert type badge */}
            <div className="border-l-4 border-l-error pl-4 flex flex-col gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-error uppercase tracking-wider">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-error animate-pulse" />
                Cross-Platform Anomaly Detected
              </span>

              <p className="text-sm text-base-content/80 leading-relaxed">
                <span className="text-base-content font-medium">Meta CPC rose 22%</span> in the
                last 3 hours, while{" "}
                <span className="text-base-content font-medium">
                  Shopify mobile conversion dropped 1.8%
                </span>{" "}
                — a pattern inconsistent with ad performance alone.
              </p>

              {/* Metrics grid */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-base-300 rounded px-3 py-2 font-mono text-xs">
                  <p className="text-base-content/60 mb-0.5">Meta CPC</p>
                  <p className="text-error font-bold">↑ +22%</p>
                </div>
                <div className="bg-base-300 rounded px-3 py-2 font-mono text-xs">
                  <p className="text-base-content/60 mb-0.5">Mobile CVR</p>
                  <p className="text-error font-bold">↓ −1.8%</p>
                </div>
                <div className="bg-base-300 rounded px-3 py-2 font-mono text-xs">
                  <p className="text-base-content/60 mb-0.5">Page Speed</p>
                  <p className="text-warning font-bold">4.2s</p>
                </div>
              </div>

              {/* Action */}
              <div className="flex gap-2 items-start border-t border-base-300 pt-3">
                <span className="text-base-content/70 font-bold text-sm shrink-0">→</span>
                <p className="text-xs text-base-content/70 leading-relaxed">
                  Pause Meta mobile ad sets and revert theme to the previous version.
                  Expected CVR recovery: 15–25 min.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-base-content/55 font-mono mt-4">
          One signal. Full context. A clear action.
        </p>
      </div>
    </section>
  );
}
