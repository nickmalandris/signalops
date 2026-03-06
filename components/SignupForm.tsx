"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  storeUrl: string;
}

export default function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    storeUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

      router.push("/survey");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="signup" className="py-24 px-4 border-t border-base-300">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            Early Access
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Join the Founding Beta
          </h2>
          <p className="text-base-content/50 text-sm leading-relaxed">
            Reserve your spot in the founding cohort. We&apos;ll reach out
            personally before you&apos;re onboarded.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-xs font-mono text-base-content/40 uppercase tracking-wider"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className="input input-bordered w-full bg-base-200 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-xs font-mono text-base-content/40 uppercase tracking-wider"
            >
              Work Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@mystore.com"
              className="input input-bordered w-full bg-base-200 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Store URL */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="storeUrl"
              className="text-xs font-mono text-base-content/40 uppercase tracking-wider"
            >
              Shopify Store URL
            </label>
            <input
              id="storeUrl"
              name="storeUrl"
              type="url"
              required
              autoComplete="url"
              value={form.storeUrl}
              onChange={handleChange}
              placeholder="https://mystore.myshopify.com"
              className="input input-bordered w-full bg-base-200 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Error */}
          {error && (
            <div
              role="alert"
              className="alert alert-error text-sm"
            >
              <span>{error}</span>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary btn-lg font-mono w-full mt-1"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              "Join the Beta"
            )}
          </button>

          <p className="text-center text-xs text-base-content/25 font-mono">
            No credit card · 20 spots only · Personal onboarding
          </p>
        </form>
      </div>
    </section>
  );
}
