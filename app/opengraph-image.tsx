import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "PhoBo — франшиза вьетнамской кухни"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          gap: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
          <span style={{ fontSize: 120, fontWeight: 700, color: "#1B6457" }}>
            Phở
          </span>
          <span style={{ fontSize: 120, fontWeight: 700, color: "#DC2626" }}>
            Bò
          </span>
        </div>
        <span
          style={{
            fontSize: 28,
            letterSpacing: "0.2em",
            color: "#1B6457",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          Вьетнамская кухня
        </span>
        <span
          style={{
            fontSize: 32,
            color: "#374151",
            marginTop: 16,
          }}
        >
          Франшиза
        </span>
      </div>
    ),
    { ...size }
  )
}
