import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0908",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(214,154,92,0.25), transparent 55%)",
        }}
      >
        <div style={{ fontSize: 32, color: "#d69a5c", letterSpacing: 4, textTransform: "uppercase" }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            flexDirection: "column",
            fontSize: 88,
            fontStyle: "italic",
            color: "#f3efe6",
            fontFamily: "serif",
            lineHeight: 1.05,
          }}
        >
          <span>A digital home,</span>
          <span>built to last.</span>
        </div>
        <div style={{ marginTop: 32, fontSize: 28, color: "#9a9184" }}>{siteConfig.url}</div>
      </div>
    ),
    { ...size },
  );
}
