import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <img
        style={{ width: 1200, height: 630 }}
        src={'/open-graph.png'}
        alt="Tequiconf"
      />
    ),
    {
      ...size,
    }
  );
}
