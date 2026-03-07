"use client";

import { useState } from "react";

type Step = "contact" | "profile" | "needs" | "success";

interface FormData {
  // Screen 1: Lead
  name: string;
  email: string;
  storeUrl: string;
  
  // Screen 2: Profile
  revenue: string;
  revenueOther: string;
  paidAds: string;
  paidAdsOther: string;

  // Screen 3: Needs
  metric: string;
  metricOther: string;
  channel: string;
  biggestProblem: string;
  openToCall: string;
  contactMethod: string;
}

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  storeUrl: "",
  revenue: "",
  revenueOther: "",
  paidAds: "",
  paidAdsOther: "",
  metric: "",
  metricOther: "",
  channel: "",
  biggestProblem: "",
  openToCall: "",
  contactMethod: "",
};

export default function ApplicationForm() {
  const [step, setStep] = useState<Step>("contact");
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (key: keyof FormData) => (val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const scrollToSection = () =>
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    scrollToSection();

    if (step === "contact") {
      // Capture lead early
      try {
        setLoading(true);
        // We POST the partial form. The API can handle it.
        await fetch("/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, partial: true }),
        });
        setStep("profile");
      } catch (err) {
        // Even if lead capture fails (e.g. network), we still let them proceed
        // to not block the user experience, but we'll try again at the end.
        setStep("profile");
      } finally {
        setLoading(false);
      }
    } else if (step === "profile") {
      setStep("needs");
    }
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Something went wrong.");
      }
      setStep("success");
      scrollToSection();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const progressPct = 
    step === "contact" ? 33 : 
    step === "profile" ? 66 : 
    step === "needs" ? 90 : 100;

  return (
    <section id="apply" className="py-24 px-4 border-t border-base-300">
      <div className="max-w-md mx-auto">
        {/* Progress bar */}
        {step !== "success" && (
          <div className="mb-12">
            <div className="flex justify-between items-center mb-2">
              <p className="font-mono text-xs text-primary uppercase tracking-widest">
                Apply for Founding Access
              </p>
              <p className="font-mono text-xs text-base-content/60">
                {step === "contact" ? "1 / 3" : step === "profile" ? "2 / 3" : "3 / 3"}
              </p>
            </div>
            <div className="w-full h-px bg-base-300 rounded-full overflow-hidden">
              <div
                className="h-px bg-primary transition-all duration-500 ease-out"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        )}

        {/* — Step 1: Contact (The Lead) — */}
        {step === "contact" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Reserve your spot
              </h2>
              <p className="text-base-content/50 text-sm leading-relaxed">
                Join the founding cohort. We review applications personally and 
                onboard stores in groups of 20.
              </p>
            </div>

            <form onSubmit={handleNext} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-base-content/65 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => set("name")(e.target.value)}
                  placeholder="Jane Smith"
                  className="input input-bordered w-full bg-base-200 focus:border-primary focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-base-content/65 uppercase tracking-wider">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => set("email")(e.target.value)}
                  placeholder="jane@mystore.com"
                  className="input input-bordered w-full bg-base-200 focus:border-primary focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-base-content/65 uppercase tracking-wider">
                  Shopify Store URL
                </label>
                <input
                  type="url"
                  required
                  value={form.storeUrl}
                  onChange={(e) => set("storeUrl")(e.target.value)}
                  placeholder="https://mystore.com"
                  className="input input-bordered w-full bg-base-200 focus:border-primary focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary btn-lg font-mono w-full mt-2"
              >
                {loading ? <span className="loading loading-spinner loading-sm" /> : "Continue →"}
              </button>
              
              <p className="text-center text-xs text-base-content/40 font-mono">
                Takes 60 seconds to complete
              </p>
            </form>
          </div>
        )}

        {/* — Step 2: Profile — */}
        {step === "profile" && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-10">
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                About your store
              </h2>
              <p className="text-base-content/50 text-sm">
                Help us understand your current scale.
              </p>
            </div>

            <form onSubmit={handleNext} className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <label className="text-sm font-bold">Approximate monthly revenue</label>
                <div className="flex flex-col gap-2">
                  {["Less than $10k", "$10k – $50k", "$50k – $250k", "$250k+"].map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center gap-3 px-4 py-3 rounded border cursor-pointer transition-colors ${
                        form.revenue === opt ? "border-primary bg-primary/5" : "border-base-300 bg-base-200"
                      }`}
                    >
                      <input
                        type="radio"
                        name="revenue"
                        required
                        checked={form.revenue === opt}
                        onChange={() => set("revenue")(opt)}
                        className="radio radio-primary radio-sm"
                      />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-sm font-bold">Do you run paid ads?</label>
                <div className="flex flex-col gap-2">
                  {["Yes, Meta/Google/TikTok", "No, organic only", "Starting soon"].map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center gap-3 px-4 py-3 rounded border cursor-pointer transition-colors ${
                        form.paidAds === opt ? "border-primary bg-primary/5" : "border-base-300 bg-base-200"
                      }`}
                    >
                      <input
                        type="radio"
                        name="paidAds"
                        required
                        checked={form.paidAds === opt}
                        onChange={() => set("paidAds")(opt)}
                        className="radio radio-primary radio-sm"
                      />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button type="submit" className="btn btn-primary btn-lg font-mono w-full">
                  Continue →
                </button>
                <button
                  type="button"
                  onClick={() => setStep("contact")}
                  className="text-xs text-base-content/50 font-mono hover:text-base-content"
                >
                  ← Back
                </button>
              </div>
            </form>
          </div>
        )}

        {/* — Step 3: Needs — */}
        {step === "needs" && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-10">
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Your Signal Setup
              </h2>
              <p className="text-base-content/50 text-sm">
                How should we deliver your insights?
              </p>
            </div>

            <form onSubmit={handleFinalSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <label className="text-sm font-bold">What metric keeps you up at night?</label>
                <div className="flex flex-col gap-2">
                  {["ROAS dropping", "CAC rising", "Inventory stockouts", "Revenue dips"].map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center gap-3 px-4 py-3 rounded border cursor-pointer transition-colors ${
                        form.metric === opt ? "border-primary bg-primary/5" : "border-base-300 bg-base-200"
                      }`}
                    >
                      <input
                        type="radio"
                        name="metric"
                        required
                        checked={form.metric === opt}
                        onChange={() => set("metric")(opt)}
                        className="radio radio-primary radio-sm"
                      />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-sm font-bold">Where do you want alerts?</label>
                <div className="flex flex-col gap-2">
                  {["Slack", "WhatsApp", "Email"].map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center gap-3 px-4 py-3 rounded border cursor-pointer transition-colors ${
                        form.channel === opt ? "border-primary bg-primary/5" : "border-base-300 bg-base-200"
                      }`}
                    >
                      <input
                        type="radio"
                        name="channel"
                        required
                        checked={form.channel === opt}
                        onChange={() => set("channel")(opt)}
                        className="radio radio-primary radio-sm"
                      />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold">
                  What&apos;s your biggest analytics headache?
                </label>
                <textarea
                  rows={3}
                  value={form.biggestProblem}
                  onChange={(e) => set("biggestProblem")(e.target.value)}
                  placeholder="e.g. Too many tabs, data is always late..."
                  className="textarea textarea-bordered w-full bg-base-200 focus:border-primary focus:outline-none"
                />
              </div>

              {error && (
                <div role="alert" className="alert alert-error text-sm">
                  <span>{error}</span>
                </div>
              )}

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-lg font-mono w-full"
                >
                  {loading ? (
                    <span className="loading loading-spinner loading-sm" />
                  ) : (
                    "Complete Application"
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setStep("profile")}
                  className="text-xs text-base-content/50 font-mono hover:text-base-content"
                >
                  ← Back
                </button>
              </div>
            </form>
          </div>
        )}

        {/* — Success — */}
        {step === "success" && (
          <div className="text-center animate-in zoom-in duration-500">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <span className="text-primary text-2xl font-bold">✓</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Application received.
            </h2>
            <p className="text-base-content/50 text-sm leading-relaxed mb-6">
              You&apos;re on the list for the SignalOps founding beta. We
              review applications personally and will reach out within a few
              days.
            </p>
            <p className="text-base-content/60 text-xs font-mono">
              In the meantime — no dashboards, just signals.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
