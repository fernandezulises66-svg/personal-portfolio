import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Replaces the default Next.js favicon with a minimal mark using the
// portfolio's own dark/accent colors — no external logo or design tool.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0e14",
          color: "#4f8fef",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        U.
      </div>
    ),
    { ...size },
  );
}
