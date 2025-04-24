// File: /app/api/cloudinary/route.js (Next.js 14 App Router)
import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const activeButton = searchParams.get("activeButton"); // Ambil nilai activeButton dari query parameter

  const apiKey = process.env.API_KEY;
  const apiSecret = process.env.API_SECRET;
  const cloudName = process.env.CLOUD_NAME;
  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

  try {
    const response = await axios.get(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?type=upload&prefix=photo/aplus/konveksi/${activeButton}`,
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    return NextResponse.json(response.data.resources);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch images", error },
      { status: 500 }
    );
  }
}
