import { NextRequest, NextResponse } from "next/server";

/**
 * Placeholder welcome email function.
 *
 * To implement with a real email provider:
 *
 * Resend:
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "SignalOps <hello@signalops.io>",
 *     to: email,
 *     subject: "You're in — SignalOps Founding Beta",
 *     html: `<p>Hi ${name}, thanks for joining...</p>`,
 *   });
 *
 * Postmark:
 *   import { ServerClient } from "postmark";
 *   const client = new ServerClient(process.env.POSTMARK_API_KEY!);
 *   await client.sendEmail({
 *     From: "hello@signalops.io",
 *     To: email,
 *     Subject: "You're in — SignalOps Founding Beta",
 *     HtmlBody: `<p>Hi ${name}...</p>`,
 *   });
 *
 * SendGrid:
 *   import sgMail from "@sendgrid/mail";
 *   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
 *   await sgMail.send({
 *     to: email,
 *     from: "hello@signalops.io",
 *     subject: "You're in — SignalOps Founding Beta",
 *     html: `<p>Hi ${name}...</p>`,
 *   });
 *
 * Welcome email should:
 * - Confirm they joined the founding beta
 * - Reinforce exclusivity (one of 20 founding partners)
 * - Invite them to reply directly or book a short call
 */
async function sendWelcomeEmail(email: string, name: string) {
  console.log(
    `[Email Automation] Sending welcome email to ${name} <${email}>`
  );
  // TODO: Implement with Resend, Postmark, or SendGrid (see comments above)
}

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

    // TODO: Persist signup to your database or CRM (Airtable, Notion, Supabase, etc.)
    console.log("[Signup]", {
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
    });

    await sendWelcomeEmail(email, name);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
