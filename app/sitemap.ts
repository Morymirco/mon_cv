import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://morykoulibaly.com"
  const currentDate = new Date()

  // Pages principales
  const routes = ["", "/a-propos", "/competences", "/contact", "/blog", "/projets"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Projets
  const projects = [
    "securguinee",
    "kambily",
    "investirensoi",
    "geniusclass",
    "library",
    "findaara",
    "markazgn",
    "loguifagn",
    "guitour",
    "zalama",
    "cryptoce",
    "guibank",
    "cartographie",
  ].map((project) => ({
    url: `${baseUrl}/projets/${project}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Articles de blog
  const blogPosts = ["1", "2", "3"].map((id) => ({
    url: `${baseUrl}/blog/${id}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...routes, ...projects, ...blogPosts]
}
