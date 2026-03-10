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
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://franchise.phobo.cafe/images/phobo-logo.png"
          width={500}
          alt="PhoBo"
          style={{ marginBottom: 24 }}
        />
        <span
          style={{
            fontSize: 36,
            color: "#374151",
          }}
        >
          Франшиза
        </span>
      </div>
    ),
    { ...size }
  )
}
