/**
 * Narmada Millets — order log web app.
 *
 * Setup:
 *   1. Open the Google Sheet that should hold orders.
 *   2. Extensions → Apps Script. Paste this whole file in (replace anything there).
 *   3. Change TOKEN below to a long random string. Use the SAME value as
 *      GOOGLE_SHEETS_WEBAPP_TOKEN in the site's .env.local.
 *   4. Deploy → New deployment → type "Web app".
 *        - Execute as: Me
 *        - Who has access: Anyone
 *      Copy the Web app URL → that's GOOGLE_SHEETS_WEBAPP_URL in .env.local.
 *   5. Re-deploy (Manage deployments → edit → new version) whenever you change this.
 */

var TOKEN = "CHANGE_ME_TO_A_LONG_RANDOM_STRING";
var SHEET_NAME = "Orders";

var HEADERS = [
  "Timestamp",
  "Order ID",
  "Payment ID",
  "Status",
  "Source",
  "Name",
  "Phone",
  "Email",
  "Address",
  "City",
  "Pincode",
  "Items",
  "Item Count",
  "Amount (INR)",
  "Note",
];

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);

    if (body.token !== TOKEN) {
      return json({ ok: false, error: "unauthorized" });
    }

    var sheet = getSheet();
    var orderId = body.orderId || "";

    // Dedupe on Order ID (column B) so the checkout call and the webhook
    // backstop never create two rows for the same order.
    if (orderId && sheet.getLastRow() > 1) {
      var ids = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getValues();
      for (var i = 0; i < ids.length; i++) {
        if (ids[i][0] === orderId) {
          return json({ ok: true, deduped: true });
        }
      }
    }

    sheet.appendRow([
      new Date(),
      orderId,
      body.paymentId || "",
      body.status || "",
      body.source || "",
      body.name || "",
      body.phone || "",
      body.email || "",
      body.address || "",
      body.city || "",
      body.pincode || "",
      body.items || "",
      body.itemCount || "",
      body.amount || "",
      body.note || "",
    ]);

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
