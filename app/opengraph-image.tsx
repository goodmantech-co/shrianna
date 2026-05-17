import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const alt =
  "Shrianna Federation — Millets from the heart of Madhya Pradesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const logoBuffer = fs.readFileSync(
    path.join(process.cwd(), "public", "shriannalogo.jpeg")
  );
  const logoDataUri = `data:image/jpeg;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#FAF6EE",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Left band */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "70px 64px",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#1FA3CC",
              fontFamily: "system-ui",
            }}
          >
            Rani Durgavati Shri Anna Protsahan Yojana
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 78,
                lineHeight: 1.02,
                color: "#1a1a1a",
                letterSpacing: -2,
              }}
            >
              Ancient millets.
            </div>
            <div
              style={{
                fontSize: 78,
                lineHeight: 1.02,
                color: "#1FA3CC",
                fontStyle: "italic",
                letterSpacing: -2,
              }}
            >
              Grown by women.
            </div>
            <div
              style={{
                fontSize: 78,
                lineHeight: 1.02,
                color: "#1a1a1a",
                letterSpacing: -2,
              }}
            >
              From the heart of MP.
            </div>
            <div
              style={{
                marginTop: 26,
                fontSize: 22,
                color: "#5B5346",
                fontFamily: "system-ui",
                maxWidth: 600,
                lineHeight: 1.4,
              }}
            >
              A farmer-owned federation reviving Kodo, Kutki and Ragi from
              eleven tribal districts of Madhya Pradesh.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 18,
              color: "#5B5346",
              fontFamily: "system-ui",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            shriannafederation.com
          </div>
        </div>

        {/* Right logo column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 460,
            backgroundColor: "#2D5F3F",
            padding: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 340,
              height: 340,
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={logoDataUri}
              width={340}
              height={340}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 32,
              color: "#FAF6EE",
            }}
          >
            <div style={{ fontSize: 42, letterSpacing: -1 }}>Shrianna</div>
            <div
              style={{
                fontSize: 14,
                letterSpacing: 4,
                marginTop: 4,
                fontFamily: "system-ui",
                color: "#D9B832",
              }}
            >
              FEDERATION
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
