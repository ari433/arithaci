import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0908",
          color: "#d69a5c",
          fontSize: 290,
          fontStyle: "italic",
          fontFamily: "serif",
        }}
      >
        A
      </div>
    ),
    { width: 512, height: 512 },
  );
}
