import { ImageResponse } from "next/og";
import Preview from "@/components/Preview";

export const runtime = "edge";

export async function GET() {
  try {
    return new ImageResponse(
      <Preview />,
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error: any) {
    console.log(`${error.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 