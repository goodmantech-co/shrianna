import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
// Apple touch icons are 180x180 and should not be transparent.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Same fit as app/icon.tsx: the badge fills its 800x800 source frame, so it is
// drawn to fit rather than overflowing. No circular mask here — iOS applies its
// own squircle — but the badge is inset so that mask never clips the ring.
const SOURCE = 800;
const INSET = 6 / 180;
const RING_OFFSET_Y = 6;

export default async function AppleIcon() {
  const logoBuffer = fs.readFileSync(
    path.join(process.cwd(), "public", "shriannalogo.jpeg")
  );
  const dataUri = `data:image/jpeg;base64,${logoBuffer.toString("base64")}`;

  const drawn = Math.round(size.width * (1 - INSET * 2));
  const nudge = Math.round((RING_OFFSET_Y * drawn) / SOURCE);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={dataUri}
          alt=""
          width={drawn}
          height={drawn}
          style={{ marginTop: nudge }}
        />
      </div>
    ),
    size
  );
}
