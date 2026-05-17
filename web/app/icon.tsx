import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon() {
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
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 512,
            height: 512,
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: "#ffffff",
          }}
        >
          <img
            src={dataUri}
            width={512}
            height={512}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    size
  );
}
