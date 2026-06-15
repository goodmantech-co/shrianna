import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
// Apple touch icons are 180×180 and should not be transparent.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const logoBuffer = fs.readFileSync(
    path.join(process.cwd(), "public", "shriannalogo.jpeg")
  );
  const dataUri = `data:image/jpeg;base64,${logoBuffer.toString("base64")}`;

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
          width={196}
          height={196}
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    size
  );
}
