import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"
import Loading from "./loading"
import ClientLayout from "./client-layout"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://morykoulibaly.com"),
  title: {
    default: "Mory Koulibaly - Développeur Web & Mobile | Portfolio",
    template: "%s | Mory Koulibaly",
  },
  description:
    "Développeur Full Stack spécialisé en React, Next.js, Flutter et Django. Création de sites web, applications mobiles et solutions numériques innovantes en Guinée. Plus de 15 projets réalisés avec succès.",
  keywords: [
    "développeur web Guinée",
    "développeur mobile Guinée",
    "Next.js developer",
    "Flutter developer",
    "React developer",
    "développeur Conakry",
    "création site web Guinée",
    "application mobile Guinée",
    "Mory Koulibaly",
    "développeur full stack",
    "web development Guinea",
    "mobile app development",
    "e-commerce Guinée",
    "Django developer",
    "Firebase developer",
  ],
  authors: [{ name: "Mory Koulibaly", url: "https://morykoulibaly.com" }],
  creator: "Mory Koulibaly",
  publisher: "Mory Koulibaly",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://morykoulibaly.com",
    title: "Mory Koulibaly - Développeur Web & Mobile",
    description:
      "Développeur Full Stack spécialisé en React, Next.js, Flutter et Django. Création de solutions numériques innovantes en Guinée.",
    siteName: "Mory Koulibaly Portfolio",
    images: [
      {
        url: "/images/profile-mory.png",
        width: 1200,
        height: 630,
        alt: "Mory Koulibaly - Développeur Web & Mobile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mory Koulibaly - Développeur Web & Mobile",
    description: "Développeur Full Stack spécialisé en React, Next.js, Flutter et Django",
    creator: "@morykoulibaly",
    images: ["/images/profile-mory.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-16x16-fM8qYLAd6Es5Y9AOdBZ3pHdAb3r8Mk.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-1hr64zNNJCUzEjG6iKZZxFrnjWdnf4.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-P6KyVktTr78qyoaKL6zTpQK5LoKmkp.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-qEvKajYQcM5Fr3BK2G5ZWnr2Hk8yx7.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-512x512-GlvpdwIEehJT7BteYp97B6bVhr5hzf.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  verification: {
    google: "votre-code-verification-google",
  },
    generator: 'v0.app'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mory Koulibaly",
  url: "https://morykoulibaly.com",
  image: "https://morykoulibaly.com/images/profile-mory.png",
  sameAs: [
    "https://github.com/Morymirco",
    "https://www.linkedin.com/in/mory-koulibaly",
    "https://twitter.com/morykoulibaly",
  ],
  jobTitle: "Développeur Full Stack",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Conakry",
    addressCountry: "GN",
  },
  email: "mory.koulibaly@nimbasolution.com",
  telephone: "+224625212115",
  knowsAbout: [
    "Web Development",
    "Mobile Development",
    "React",
    "Next.js",
    "Flutter",
    "Django",
    "JavaScript",
    "TypeScript",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="canonical" href="https://morykoulibaly.com" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Suspense fallback={<Loading />}>
            <ClientLayout>{children}</ClientLayout>
          </Suspense>
        </Providers>
      </body>
    </html>
  )
}
