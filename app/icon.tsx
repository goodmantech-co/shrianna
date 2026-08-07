import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

// Google only shows a favicon in search results if it is square and a multiple
// of 48px, so 192 (48 x 4) rather than an arbitrary 512.
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

// The source badge is a circle that already fills its 800x800 frame edge to
// edge — there is no white margin to crop. Drawing it larger than the frame
// therefore amputates the blue ring and the Devanagari text on it. Draw it to
// fit instead, with a hair of inset so the mask's antialiased edge never bites
// into the ring.
const SOURCE = 800;
const INSET = 4 / 512; // ~0.8%, measured against the badge at 512px
// The ring's centre sits 6px above the centre of the source frame.
const RING_OFFSET_Y = 6;

export default async function Icon() {
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
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: size.width,
            height: size.height,
            borderRadius: "50%",
            overflow: "hidden",
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
      </div>
    ),
    size
  );
}
