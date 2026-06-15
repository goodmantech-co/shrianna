import { NextResponse } from "next/server";
import { emailConfigured, sendEmail } from "@/lib/email";
import { site } from "@/lib/site";

interface EnquiryBody {
  kind?: "contact" | "bulk";
  name?: string;
  email?: string;
  organisation?: string;
  phone?: string;
  buyerType?: string;
  message?: string;
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  let body: EnquiryBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  if (!name) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });

  if (!emailConfigured()) {
    return NextResponse.json(
      { error: "We can't send your message right now. Please email us directly." },
      { status: 503 }
    );
  }

  const isBulk = body.kind === "bulk";
  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Organisation", body.organisation ?? ""],
    ...(isBulk ? ([["Phone", body.phone ?? ""], ["Buyer type", body.buyerType ?? ""]] as [string, string][]) : []),
    [isBulk ? "Requirement" : "Message", body.message ?? ""],
  ];
  const html = `<h2>New ${isBulk ? "bulk enquiry" : "contact message"} — Narmada Millets</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
      ${rows
        .filter(([, v]) => v)
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 12px 6px 0;color:#888;vertical-align:top;">${k}</td><td style="padding:6px 0;">${esc(v).replace(/\n/g, "<br>")}</td></tr>`
        )
        .join("")}
    </table>`;

  try {
    await sendEmail({
      to: site.email,
      subject: `${isBulk ? "Bulk enquiry" : "Contact"}: ${name}`,
      html,
      replyTo: email,
    });
  } catch (e) {
    console.error("[api/enquiry] send failed:", e);
    return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
