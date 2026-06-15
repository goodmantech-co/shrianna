/**
 * Narmada Millets — order log + fulfilment-stage emails.
 *
 * This single script does two jobs:
 *   1. doPost(): receives paid orders from the website and appends a row.
 *   2. onFulfilmentEdit(): when the team changes the "Fulfilment" dropdown on a
 *      row, it emails that customer the matching stage email via Resend.
 *
 * ── First-time setup ──────────────────────────────────────────────────────
 *   1. Open the order Sheet → Extensions → Apps Script. Paste this whole file.
 *   2. Fill in TOKEN and RESEND_API_KEY below (same values as the site's env).
 *   3. Run the `setup` function once (pick it in the toolbar dropdown → Run).
 *      Authorize when asked. This adds the Fulfilment/Tracking columns, the
 *      dropdown, and installs the edit trigger.
 *   4. Deploy → Manage deployments → edit → New version (so doPost stays live).
 *
 * After any code change here, re-run nothing — but DO redeploy a new version
 * if you changed doPost.
 */

var TOKEN = "CHANGE_ME_TO_A_LONG_RANDOM_STRING";
var RESEND_API_KEY = "CHANGE_ME_RESEND_API_KEY";
var RESEND_FROM = "Narmada Millets <orders@shriannafederation.in>";
var REPLY_TO = "orders@shriannafederation.in";

var SHEET_NAME = "Orders";

var HEADERS = [
  "Timestamp", "Order ID", "Payment ID", "Status", "Source", "Name", "Phone",
  "Email", "Address", "City", "Pincode", "Items", "Item Count", "Amount (INR)",
  "Note", "Fulfilment", "Tracking",
];

// 1-based column positions (must match HEADERS order).
var COL = {
  ORDER_ID: 2, NAME: 6, EMAIL: 8, ITEMS: 12, AMOUNT: 14, FULFILMENT: 16, TRACKING: 17,
};

// Dropdown values for the Fulfilment column. "New" sends nothing.
var STAGES = ["New", "Packed", "Shipped", "Out for delivery", "Delivered", "Cancelled"];

// ── Order intake (called by the website) ───────────────────────────────────
function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    if (body.token !== TOKEN) return json({ ok: false, error: "unauthorized" });

    var sheet = getSheet();
    var orderId = body.orderId || "";

    if (orderId && sheet.getLastRow() > 1) {
      var ids = sheet.getRange(2, COL.ORDER_ID, sheet.getLastRow() - 1, 1).getValues();
      for (var i = 0; i < ids.length; i++) {
        if (ids[i][0] === orderId) return json({ ok: true, deduped: true });
      }
    }

    sheet.appendRow([
      new Date(), orderId, body.paymentId || "", body.status || "", body.source || "",
      body.name || "", body.phone || "", body.email || "", body.address || "",
      body.city || "", body.pincode || "", body.items || "", body.itemCount || "",
      body.amount || "", body.note || "", "New", "",
    ]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

// ── Fulfilment-stage emails (installable onEdit trigger) ────────────────────
function onFulfilmentEdit(e) {
  if (!e || !e.range) return;
  var sheet = e.range.getSheet();
  if (sheet.getName() !== SHEET_NAME) return;
  if (e.range.getColumn() !== COL.FULFILMENT || e.range.getRow() < 2) return;

  var stage = String(e.value || "").trim();
  var row = e.range.getRow();
  var get = function (c) { return sheet.getRange(row, c).getValue(); };

  var data = {
    name: get(COL.NAME), email: get(COL.EMAIL), orderId: get(COL.ORDER_ID),
    items: get(COL.ITEMS), tracking: get(COL.TRACKING),
  };
  if (!data.email) return;

  var msg = stageEmail(stage, data);
  if (!msg) return; // "New" or unknown -> no email

  sendResend(data.email, msg.subject, msg.html);
}

function stageEmail(stage, d) {
  var intro = {
    "Packed": "Good news — your order is packed and ready to ship. We'll let you know the moment it's on the way.",
    "Shipped": "Your order is on its way!" + (d.tracking ? " You can track it here: " + d.tracking : ""),
    "Out for delivery": "Your order is out for delivery and should reach you today.",
    "Delivered": "Your order has been delivered. We hope you enjoy your millets — reply to this email anytime if anything's not right.",
    "Cancelled": "Your order has been cancelled. If you have any questions or this was a mistake, just reply to this email.",
  }[stage];
  if (!intro) return null;

  var heading = {
    "Packed": "Your order is packed",
    "Shipped": "Your order has shipped",
    "Out for delivery": "Out for delivery today",
    "Delivered": "Delivered — enjoy!",
    "Cancelled": "Order cancelled",
  }[stage];

  var body =
    '<p style="margin:0 0 4px;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:.08em;">Order</p>' +
    '<p style="margin:0 0 16px;font-size:14px;line-height:1.5;">' + esc(d.items || "") + "</p>" +
    (d.tracking ? '<p style="margin:0 0 16px;font-size:14px;">Tracking: <a href="' + esc(d.tracking) + '">' + esc(d.tracking) + "</a></p>" : "") +
    '<p style="margin:0;font-size:12px;color:#999;">Order ref: ' + esc(d.orderId || "") + "</p>";

  return { subject: "Narmada Millets — " + heading, html: shell(heading, intro, body, d.name) };
}

function sendResend(to, subject, html) {
  var res = UrlFetchApp.fetch("https://api.resend.com/emails", {
    method: "post",
    contentType: "application/json",
    headers: { Authorization: "Bearer " + RESEND_API_KEY },
    muteHttpExceptions: true,
    payload: JSON.stringify({ from: RESEND_FROM, to: [to], reply_to: REPLY_TO, subject: subject, html: html }),
  });
  if (res.getResponseCode() >= 300) {
    Logger.log("Resend failed: " + res.getResponseCode() + " " + res.getContentText());
  }
}

function shell(heading, intro, body, name) {
  var hi = name ? "Hi " + esc(String(name).split(" ")[0]) + "," : "Hello,";
  return '<!doctype html><html><body style="margin:0;background:#f6f6f4;font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;">' +
    '<div style="max-width:560px;margin:0 auto;padding:24px;"><div style="background:#fff;border:1px solid #eee;border-radius:16px;overflow:hidden;">' +
    '<div style="background:#4d7c0f;padding:20px 28px;"><span style="color:#fff;font-size:18px;font-weight:600;">Narmada Millets</span>' +
    '<span style="color:#e6efce;font-size:12px;"> · by Shrianna Federation</span></div>' +
    '<div style="padding:28px;"><h1 style="margin:0 0 8px;font-size:22px;">' + esc(heading) + "</h1>" +
    '<p style="margin:0 0 4px;font-size:14px;">' + hi + "</p>" +
    '<p style="margin:0 0 20px;color:#555;font-size:14px;line-height:1.6;">' + intro + "</p>" + body + "</div>" +
    '<div style="padding:18px 28px;border-top:1px solid #f0f0f0;color:#999;font-size:12px;">Shrianna Federation · Madhya Pradesh · Reply to this email if you need help.</div>' +
    "</div></div></body></html>";
}

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ── One-time setup ──────────────────────────────────────────────────────────
function setup() {
  var sheet = getSheet();
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.setFrozenRows(1);

  // Dropdown on the Fulfilment column (rows 2..1000).
  var rule = SpreadsheetApp.newDataValidation().requireValueInList(STAGES, true).build();
  sheet.getRange(2, COL.FULFILMENT, 999, 1).setDataValidation(rule);

  // Install the edit trigger (remove any duplicates first).
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === "onFulfilmentEdit") ScriptApp.deleteTrigger(triggers[i]);
  }
  ScriptApp.newTrigger("onFulfilmentEdit").forSpreadsheet(SpreadsheetApp.getActive()).onEdit().create();
  SpreadsheetApp.getActive().toast("Setup complete — Fulfilment column, dropdown and email trigger installed.");
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
