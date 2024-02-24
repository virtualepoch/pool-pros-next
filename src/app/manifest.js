export default function manifest() {
  return {
    name: "IdaHomeServ LLC Pool & Spa",
    short_name: "IdaHomeServ",
    description: "IdaHomeServ App Created with Next.js",
    id: "/",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/logos/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/logos/16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/logos/32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/logos/apple-touch-icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logos/192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logos/512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logos/maskable_icon-48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/logos/maskable_icon-72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/logos/maskable_icon-96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/logos/maskable_icon-128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/logos/maskable_icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/logos/maskable_icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
