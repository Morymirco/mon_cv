import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mory Koulibaly - Portfolio",
    short_name: "Mory Koulibaly",
    description: "Développeur passionné créant des solutions numériques innovantes",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#2563eb",
    icons: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-qEvKajYQcM5Fr3BK2G5ZWnr2Hk8yx7.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-512x512-GlvpdwIEehJT7BteYp97B6bVhr5hzf.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
