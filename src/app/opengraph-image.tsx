import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — AI, Data & Software portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Built from the portfolio's own dark/accent visual system — no project
// screenshot or fabricated mockup used as the social preview.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0e14",
        }}
      >
        <div style={{ display: "flex", fontSize: 64, fontWeight: 600, color: "#e8ecf3" }}>
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            letterSpacing: 4,
            color: "#4f8fef",
          }}
        >
          AI · Data · Software
        </div>
      </div>
    ),
    { ...size },
  );
}
