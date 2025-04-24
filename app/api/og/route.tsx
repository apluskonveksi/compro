// app/api/og/route.ts
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

// Harus diaktifkan khusus edge runtime
export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Aplus Konveksi";

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#fff",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "50px",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 60,
          fontWeight: "bold",
          color: "#1A202C",
        }}
      >
        {title}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
