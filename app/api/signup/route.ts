import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const FROM = "onboarding@resend.dev";
const OWNER_EMAIL = "nickmalandris@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      storeUrl,
      metric,
      metricOther,
      channel,
      question,
      revenue,
      revenueOther,
      paidAds,
      paidAdsOther,
      topMetric,
      topMetricOther,
      biggestProblem,
      openToCall,
      contactMethod,
    } = body;

    if (!name || !email || !storeUrl) {
      return NextResponse.json(
        { message: "Name, email, and store URL are required." },
        { status: 400 }
      );
    }

    console.log("[Signup]", { name, email, storeUrl });

    const row = (label: string, value: string | undefined) =>
      value
        ? `<tr><td style="padding:4px 12px 4px 0;font-weight:600;white-space:nowrap">${label}</td><td style="padding:4px 0">${value}</td></tr>`
        : "";

    const notificationHtml = `
      <h2 style="margin:0 0 16px">New SignalOps application</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
        ${row("Name", name)}
        ${row("Email", email)}
        ${row("Store URL", storeUrl)}
        ${row("Metric keeping up / Other", [metric, metricOther].filter(Boolean).join(" — "))}
        ${row("Alert channel", channel)}
        ${row("Monthly revenue / Other", [revenue, revenueOther].filter(Boolean).join(" — "))}
        ${row("Runs paid ads / Other", [paidAds, paidAdsOther].filter(Boolean).join(" — "))}
        ${row("Top metric / Other", [topMetric, topMetricOther].filter(Boolean).join(" — "))}
        ${row("Biggest problem", biggestProblem)}
        ${row("Open to call / Contact method", [openToCall, contactMethod].filter(Boolean).join(" — "))}
        ${row("Analyst question", question)}
      </table>
    `;

    const confirmationHtml = `
      <p style="font-family:sans-serif;font-size:15px">Hi ${name},</p>
      <p style="font-family:sans-serif;font-size:15px">
        We got your application — you're one of a small group we're personally reviewing for the
        <strong>SignalOps Founding Beta</strong> (capped at 20 stores).
      </p>
      <p style="font-family:sans-serif;font-size:15px">
        Someone from the team will reach out directly within a few days. In the meantime, feel free
        to reply to this email with any questions.
      </p>
      <p style="font-family:sans-serif;font-size:15px">— The SignalOps Team</p>
    `;

    const resend = new Resend(process.env.RESEND_API_KEY);
    const [notifResult, confirmResult] = await Promise.allSettled([
      resend.emails.send({
        from: FROM,
        to: OWNER_EMAIL,
        subject: `New SignalOps application — ${name} (${storeUrl})`,
        html: notificationHtml,
      }),
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "You're on the list — SignalOps Founding Beta",
        html: confirmationHtml,
      }),
    ]);

    if (notifResult.status === "rejected")
      console.error("[Email] Owner notification failed:", notifResult.reason);
    if (confirmResult.status === "rejected")
      console.error("[Email] Confirmation failed:", confirmResult.reason);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
