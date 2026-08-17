import { ImageResponse } from "next/og";

export const alt = "Flávia Ferri — Senior Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#faf5ef",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#b8543a",
            fontSize: "28px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{ width: "48px", height: "4px", backgroundColor: "#b8543a" }}
          />
          React · Next.js · TypeScript
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "108px", color: "#2c2420", lineHeight: 1 }}>
            Flávia Ferri
          </div>
          <div
            style={{
              fontSize: "48px",
              fontStyle: "italic",
              color: "#5c5049",
              marginTop: "20px",
            }}
          >
            Senior Frontend Engineer
          </div>
        </div>

        <div
          style={{
            fontSize: "26px",
            color: "#8a7d73",
            fontFamily: "sans-serif",
          }}
        >
          Building product for regulated fintech · flaviaferri.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
