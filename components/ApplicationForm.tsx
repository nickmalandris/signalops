"use client";

import { useState } from "react";

type Step = "question" | "contact" | "success";

interface FormData {
  metric: string;
  metricOther: string;
  channel: string;
  revenue: string;
  revenueOther: string;
  paidAds: string;
  paidAdsOther: string;
  topMetric: string;
  topMetricOther: string;
  biggestProblem: string;
  openToCall: string;
  contactMethod: string;
  name: string;
  email: string;
  storeUrl: string;
  question: string;
}

interface QuestionDef {
  key: keyof FormData;
  label: string;
  type: "radio" | "textarea";
  required: boolean;
  options?: { value: string; label: string }[];
  conditionalInput?: {
    triggerValue: string;
    key: keyof FormData;
    placeholder: string;
  };
  placeholder?: string;
}

const QUESTIONS: QuestionDef[] = [
  {
    key: "metric",
    label: "What metric keeps you up at night?",
    type: "radio",
    required: true,
    options: [
      { value: "cac", label: "CAC creeping up" },
      { value: "roas", label: "ROAS dropping" },
      { value: "inventory", label: "Inventory stockouts" },
      { value: "revenue", label: "Revenue drops" },
      { value: "other", label: "Other" },
    ],
    conditionalInput: {
      triggerValue: "other",
      key: "metricOther",
      placeholder: "e.g. LTV, refund rate",
    },
  },
  {
    key: "channel",
    label: "Where should alerts go?",
    type: "radio",
    required: true,
    options: [
      { value: "slack", label: "Slack" },
      { value: "whatsapp", label: "WhatsApp" },
      { value: "email", label: "Email" },
      { value: "teams", label: "Microsoft Teams" },
    ],
  },
  {
    key: "revenue",
    label: "What is your approximate monthly store revenue?",
    type: "radio",
    required: true,
    options: [
      { value: "lt5k", label: "Less than $5k" },
      { value: "5k-50k", label: "$5k – $50k" },
      { value: "50k-250k", label: "$50k – $250k" },
      { value: "250k+", label: "$250k+" },
      { value: "other", label: "Other" },
    ],
    conditionalInput: {
      triggerValue: "other",
      key: "revenueOther",
      placeholder: "e.g. ~$1.2M/month",
    },
  },
  {
    key: "paidAds",
    label: "Do you currently run paid ads?",
    type: "radio",
    required: true,
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "other", label: "Other" },
    ],
    conditionalInput: {
      triggerValue: "other",
      key: "paidAdsOther",
      placeholder: "e.g. Influencer only, no direct spend",
    },
  },
  {
    key: "topMetric",
    label: "What metric do you care about most?",
    type: "radio",
    required: true,
    options: [
      { value: "roas", label: "ROAS" },
      { value: "cac", label: "Customer acquisition cost (CAC)" },
      { value: "revenue", label: "Revenue" },
      { value: "inventory", label: "Inventory levels" },
      { value: "profit", label: "Profit margins" },
      { value: "other", label: "Other" },
    ],
    conditionalInput: {
      triggerValue: "other",
      key: "topMetricOther",
      placeholder: "e.g. LTV, refund rate",
    },
  },
  {
    key: "biggestProblem",
    label: "What is the biggest analytics problem you want SignalOps to solve?",
    type: "textarea",
    required: false,
    placeholder: "Describe the problem in your own words…",
  },
  {
    key: "openToCall",
    label: "Would you be open to a short call to help shape SignalOps?",
    type: "radio",
    required: false,
    options: [
      { value: "yes", label: "Yes" },
      { value: "maybe", label: "Maybe later" },
      { value: "no", label: "Not right now" },
    ],
    conditionalInput: {
      triggerValue: "yes",
      key: "contactMethod",
      placeholder: "Phone number or preferred contact method",
    },
  },
];

const TOTAL_SCREENS = QUESTIONS.length + 1; // qualifying + contact step

const EMPTY_FORM: FormData = {
  metric: "",
  metricOther: "",
  channel: "",
  revenue: "",
  revenueOther: "",
  paidAds: "",
  paidAdsOther: "",
  topMetric: "",
  topMetricOther: "",
  biggestProblem: "",
  openToCall: "",
  contactMethod: "",
  name: "",
  email: "",
  storeUrl: "",
  question: "",
};

export default function ApplicationForm() {
  const [step, setStep] = useState<Step>("question");
  const [currentQ, setCurrentQ] = useState(0);
  const [slideDir, setSlideDir] = useState<"right" | "left">("right");
  const [animKey, setAnimKey] = useState(0);
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (key: keyof FormData) => (val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const scrollToSection = () =>
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });

  const goNext = () => {
    setSlideDir("right");
    setAnimKey((k) => k + 1);
    scrollToSection();
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ((q) => q + 1);
    } else {
      setStep("contact");
    }
  };

  const goBack = () => {
    setSlideDir("left");
    setAnimKey((k) => k + 1);
    scrollToSection();
    if (step === "contact") {
      setStep("question");
      setCurrentQ(QUESTIONS.length - 1);
    } else {
      setCurrentQ((q) => q - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

  const q = QUESTIONS[currentQ];
  const canAdvance = !q?.required || form[q.key] !== "";
  const currentScreenIndex =
    step === "question" ? currentQ : QUESTIONS.length;
  const progressPct = (currentScreenIndex / TOTAL_SCREENS) * 100;

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
                {currentScreenIndex + 1} / {TOTAL_SCREENS}
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

        {/* Animated screen */}
        <div
          key={animKey}
          style={{
            animation: `${slideDir === "right" ? "slide-in-right" : "slide-in-left"} 0.25s ease both`,
          }}
        >
          {/* — Qualifying question — */}
          {step === "question" && (
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
                  {q.label}
                </h2>
                {!q.required && (
                  <p className="text-sm text-base-content/60 font-mono">
                    Optional — skip if you like
                  </p>
                )}
              </div>

              {q.type === "radio" && q.options && (
                <div className="flex flex-col gap-2">
                  {q.options.map(({ value, label }) => (
                    <label
                      key={value}
                      className={`flex items-center gap-3 px-4 py-3 rounded border cursor-pointer transition-colors ${
                        form[q.key] === value
                          ? "border-primary bg-primary/5 text-base-content"
                          : "border-base-300 bg-base-200 text-base-content/60 hover:border-base-content/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.key}
                        value={value}
                        checked={form[q.key] === value}
                        onChange={() => set(q.key)(value)}
                        className="radio radio-primary radio-sm"
                      />
                      <span className="text-sm">{label}</span>
                    </label>
                  ))}
                  {q.conditionalInput &&
                    form[q.key] === q.conditionalInput.triggerValue && (
                      <input
                        type="text"
                        value={form[q.conditionalInput.key]}
                        onChange={(e) =>
                          set(q.conditionalInput!.key)(e.target.value)
                        }
                        placeholder={q.conditionalInput.placeholder}
                        className="input input-bordered input-sm w-full bg-base-200 focus:border-primary focus:outline-none mt-1"
                        autoFocus
                      />
                    )}
                </div>
              )}

              {q.type === "textarea" && (
                <textarea
                  rows={4}
                  value={form[q.key]}
                  onChange={(e) => set(q.key)(e.target.value)}
                  placeholder={q.placeholder}
                  className="textarea textarea-bordered w-full bg-base-200 focus:border-primary focus:outline-none resize-none"
                />
              )}

              <div className="flex flex-col gap-3">
                <button
                  onClick={goNext}
                  disabled={!canAdvance}
                  className="btn btn-primary btn-lg font-mono w-full"
                >
                  {currentQ === QUESTIONS.length - 1
                    ? "Continue to your details →"
                    : "Continue →"}
                </button>
                {currentQ > 0 && (
                  <button
                    type="button"
                    onClick={goBack}
                    className="text-xs text-base-content/60 hover:text-base-content/80 font-mono text-center transition-colors"
                  >
                    ← Back
                  </button>
                )}
              </div>
            </div>
          )}

          {/* — Contact details — */}
          {step === "contact" && (
            <>
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                  Reserve your spot
                </h2>
                <p className="text-base-content/50 text-sm">
                  We&apos;ll reach out personally before you&apos;re onboarded.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono text-base-content/65 uppercase tracking-wider"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => set("name")(e.target.value)}
                    placeholder="Jane Smith"
                    className="input input-bordered w-full bg-base-200 focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono text-base-content/65 uppercase tracking-wider"
                  >
                    Work Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => set("email")(e.target.value)}
                    placeholder="jane@mystore.com"
                    className="input input-bordered w-full bg-base-200 focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="storeUrl"
                    className="text-xs font-mono text-base-content/65 uppercase tracking-wider"
                  >
                    Shopify Store URL
                  </label>
                  <input
                    id="storeUrl"
                    type="url"
                    required
                    autoComplete="url"
                    value={form.storeUrl}
                    onChange={(e) => set("storeUrl")(e.target.value)}
                    placeholder="https://mystore.myshopify.com"
                    className="input input-bordered w-full bg-base-200 focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="question"
                    className="text-xs font-mono text-base-content/65 uppercase tracking-wider"
                  >
                    If you could hire a data analyst tomorrow, what&apos;s the
                    first thing you&apos;d ask?{" "}
                    <span className="text-base-content/55">(optional)</span>
                  </label>
                  <textarea
                    id="question"
                    rows={3}
                    value={form.question}
                    onChange={(e) => set("question")(e.target.value)}
                    placeholder="e.g. Why did my conversion rate drop last Tuesday?"
                    className="textarea textarea-bordered w-full bg-base-200 focus:border-primary focus:outline-none resize-none"
                  />
                </div>

                {error && (
                  <div role="alert" className="alert alert-error text-sm">
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-lg font-mono w-full mt-1"
                >
                  {loading ? (
                    <span className="loading loading-spinner loading-sm" />
                  ) : (
                    "Apply for Access"
                  )}
                </button>

                <button
                  type="button"
                  onClick={goBack}
                  className="text-xs text-base-content/60 hover:text-base-content/80 font-mono text-center transition-colors"
                >
                  ← Back
                </button>

                <p className="text-center text-xs text-base-content/55 font-mono">
                  No credit card · 20 spots only · Personal onboarding
                </p>
              </form>
            </>
          )}

          {/* — Success — */}
          {step === "success" && (
            <div className="text-center">
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
      </div>
    </section>
  );
}
