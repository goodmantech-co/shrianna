import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const alt =
  "Shrianna Federation — Millets from the heart of Madhya Pradesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const read = (...p: string[]) => fs.readFileSync(path.join(process.cwd(), ...p));
const b64 = (buf: Buffer, mime: string) => `data:${mime};base64,${buf.toString("base64")}`;

export default async function OGImage() {
  const logo = b64(read("public", "shriannalogo.jpeg"), "image/jpeg");
  const field = b64(read("public", "editorial", "kodo-kutki-field.jpg"), "image/jpeg");

  const playfair = read("fonts", "playfair-700.woff");
  const playfairItalic = read("fonts", "playfair-700-italic.woff");
  const inter = read("fonts", "inter-400.woff");
  const interSemi = read("fonts", "inter-600.woff");

  const GOLD = "#E7C56B";

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          fontFamily: "Inter",
        }}
      >
        {/* Full-bleed photography */}
        <img
          src={field}
          width={1200}
          height={630}
          style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }}
        />
        {/* Deep-green editorial scrim */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "linear-gradient(100deg, rgba(16,34,24,0.96) 0%, rgba(16,34,24,0.86) 40%, rgba(16,34,24,0.40) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "60px 64px",
          }}
        >
          {/* Header — logo lockup + brand pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  display: "flex",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                <img src={logo} width={60} height={60} style={{ objectFit: "cover" }} />
              </div>
              <div
                style={{
                  marginLeft: 16,
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: 19,
                  letterSpacing: 5,
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                SHRIANNA FEDERATION
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid rgba(231,197,107,0.55)",
                borderRadius: 999,
                padding: "9px 18px",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: 3,
                color: GOLD,
              }}
            >
              NARMADA MILLETS
            </div>
          </div>

          {/* Headline block */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", width: 56, height: 3, backgroundColor: GOLD, marginBottom: 24 }} />
            <div
              style={{
                display: "flex",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: 17,
                letterSpacing: 5,
                color: GOLD,
                marginBottom: 18,
              }}
            >
              MILLETS FROM MADHYA PRADESH
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontFamily: "Playfair",
                  fontWeight: 700,
                  fontSize: 84,
                  lineHeight: 1.0,
                  letterSpacing: -1,
                  color: "#ffffff",
                }}
              >
                Ancient millets.
              </div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "PlayfairItalic",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: 84,
                  lineHeight: 1.08,
                  letterSpacing: -1,
                  color: GOLD,
                }}
              >
                Grown by farmers.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 24,
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: 23,
                lineHeight: 1.4,
                color: "rgba(255,255,255,0.82)",
                maxWidth: 740,
              }}
            >
              A farmer-owned federation reviving Kodo, Kutki and other millets
              across Madhya Pradesh.
            </div>

            {/* Footer line */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 34,
                paddingTop: 22,
                borderTop: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: 19,
                  letterSpacing: 1,
                  color: "#ffffff",
                }}
              >
                shriannafederation.in
              </div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: 15,
                  letterSpacing: 1,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Direct from tribal farmers · Paid via DBT
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Playfair", data: playfair, weight: 700, style: "normal" },
        { name: "PlayfairItalic", data: playfairItalic, weight: 700, style: "italic" },
        { name: "Inter", data: inter, weight: 400, style: "normal" },
        { name: "Inter", data: interSemi, weight: 600, style: "normal" },
      ],
    }
  );
}
