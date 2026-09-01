import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF eerst, WebP als terugval. AVIF is ongeveer 20% kleiner dan WebP;
    // browsers die het niet ondersteunen krijgen automatisch WebP.
    formats: ["image/avif", "image/webp"],
    // Vanaf Next 16 moet elke toegestane kwaliteit hier staan.
    // 90 voor de banners: daar staat tekst en staan logo's in, en die moeten
    // scherp blijven. 75 blijft de standaard voor gewone foto's.
    qualities: [75, 90],
  },
};

export default nextConfig;
