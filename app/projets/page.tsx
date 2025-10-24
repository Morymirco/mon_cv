"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: "securguinee",
      title: "SecurGuinee",
      description:
        "Application mobile permettant aux citoyens de signaler des incidents, accéder aux services d'urgence et suivre leurs requêtes auprès des autorités.",
      technologies: ["Flutter", "Node.js", "Firebase", "Google Maps API"],
      image: "/images/securguinee.png",
      category: "mobile",
    },
    {
      id: "kambily",
      title: "Kambily",
      description:
        "Site e-commerce développé avec Next.js, avec un projet en cours pour développer une application mobile Flutter.",
      technologies: ["Next.js", "Django", "Flutter"],
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-www.kambily.com-0N1s7pX3XiZ5M3eRGYzBmF1qfhVDM6.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Macbook-Air-www.kambily.com-v685BmHUisGY8YWEqE2KZcYTXsOydJ.png",
      ],
      category: "web",
    },
    {
      id: "investirensoi",
      title: "Investirensoi",
      description:
        "Plateforme éducative en ligne offrant des formations dans les domaines du business, de l'investissement et du développement personnel.",
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "Stripe"],
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-investirensoi.vercel.app-ex36LRbbR67iLtfIv2RG7KBrbCcCfD.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Macbook-Air-investirensoi.vercel.app%20%281%29-0VyuNt1koNDwuSjjSjQ5o8ukKn3TGM.png",
      ],
      category: "web",
    },
    {
      id: "geniusclass",
      title: "Geniusclass.com",
      description:
        "Plateforme d'apprentissage en ligne 100% guinéenne, offrant des vidéos de cours et des outils éducatifs.",
      technologies: ["WordPress", "Firebase", "Firebase Storage", "JavaScript", "PHP"],
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-dev-geniusclass2.pantheonsite.io-GGBuYERYQEkfNKZmW3CZtoApRpsvPT.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Macbook-Air-dev-geniusclass2.pantheonsite.io-FzxbhuwFe3gQEse2s4LOgwOUnQXfdB.png",
      ],
      category: "web",
    },
    {
      id: "library",
      title: "Bibliothèque en ligne",
      description: "Projet ReactJS pour gérer et consulter une bibliothèque en ligne.",
      technologies: ["ReactJS", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-bibliofinalodc.vercel.app-gyrpj9ixWH24rET26Y93VZomuzJVSo.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Macbook-Air-bibliofinalodc.vercel.app-nbL5iOAeZL6VpL2hlnH8ZeaA5IUYWS.png",
      ],
      category: "web",
    },
    {
      id: "findaara",
      title: "Findaara",
      description: "Site vitrine du projet Findaara, proposant des solutions intelligentes pour l'élevage avicole.",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-www.findaara.com-VTQ1QJ6kqaK6AHlJoxRx3e7LAZh9jw.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Macbook-Air-www.findaara.com-OyEhgQ2Qe318j9ffYEScdqijdWNKvY.png",
      ],
      category: "web",
    },
    {
      id: "markazgn",
      title: "Markazgn",
      description: "Plateforme collaborative pour les services numériques et la gestion de communautés.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "Google Maps API"],
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-www.markazgn.org-UXDZ9if06CWkWQxsF7ig7k1mx56aSA.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Macbook-Air-www.markazgn.org%20%281%29-T5YmLf8ZtHCzzhWFHwilJFMi70kREC.png",
      ],
      category: "web",
    },
    {
      id: "loguifagn",
      title: "Loguifagn",
      description: "Plateforme de location de villas de luxe et de gestion immobilière.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "Stripe"],
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-www.loguifa.com%20%281%29-dKDDTWomnWxuG1KkTdi2KueG3ZIuGm.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Macbook-Air-www.loguifa.com%20%284%29-ktFF82LlLAKFJwB1KZzvyL8az70w7y.png",
      ],
      category: "web",
    },
    {
      id: "guitour",
      title: "Guitour",
      description:
        "Application mobile présentant les sites touristiques, restaurants et spécialités gastronomiques de Guinée.",
      technologies: ["Flutter", "Firebase", "Google Maps API", "Cloud Functions"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/guitour-cGiFmd30ls4Bkv51gIt1O1KpgkKCUj.png",
      category: "mobile",
    },
    {
      id: "zalama",
      title: "ZALAMA",
      description:
        "Application financière permettant aux étudiants et salariés guinéens d'accéder à leurs ressources financières de manière flexible.",
      technologies: ["Flutter", "Django", "Firebase", "REST API", "PostgreSQL"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/app-preview-t8KNTbnFfm0BVqdUQxbE45uiAD2o4s.png",
      category: "mobile",
    },
    {
      id: "cryptoce",
      title: "Chiffrement de César",
      description: "Application mobile de chiffrement et déchiffrement de messages utilisant l'algorithme de César.",
      technologies: ["Flutter", "Dart", "Hive", "SharedPreferences", "FilePicker"],
      image: "/images/cryptoce-1.png",
      category: "mobile",
    },
    {
      id: "guibank",
      title: "Guibank's",
      description: "Application de gestion bancaire permettant de gérer les clients, comptes et agences bancaires.",
      technologies: ["Symfony", "MySQL", "Bootstrap", "jQuery", "API REST"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sans%20titre%289%29-SveE7T2mNgDDldrubuNijUevMuEity.png",
      category: "backend",
    },
    {
      id: "cartographie",
      title: "Cartographie établissements publics",
      description: "Application web pour localiser et cartographier les établissements publics à travers la Guinée.",
      technologies: ["Django", "Next.js", "Leaflet", "PostgreSQL", "PostGIS"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-guitab-nimba-project.vercel.app-YHHMpdMH1FEseyt5qOs2uyZiCzOVLL.png",
      category: "ongoing",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <main className="pt-24 px-4 sm:px-6 lg:px-8 pb-16 bg-[#091525]">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r 
                   from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 
                   text-transparent bg-clip-text"
        >
          Mes Projets
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-12 overflow-x-auto pb-6 px-2"
        >
          <div className="flex flex-wrap justify-center gap-3 md:gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-3 md:px-4 md:py-2 rounded-full text-base md:text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-5 py-3 md:px-4 md:py-2 rounded-full text-base md:text-sm font-medium transition-colors ${
                filter === "web"
                  ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Web
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`px-5 py-3 md:px-4 md:py-2 rounded-full text-base md:text-sm font-medium transition-colors ${
                filter === "mobile"
                  ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Mobile
            </button>
            <button
              onClick={() => setFilter("backend")}
              className={`px-5 py-3 md:px-4 md:py-2 rounded-full text-base md:text-sm font-medium transition-colors ${
                filter === "backend"
                  ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setFilter("ongoing")}
              className={`px-5 py-3 md:px-4 md:py-2 rounded-full text-base md:text-sm font-medium transition-colors ${
                filter === "ongoing"
                  ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              En cours
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Link href={`/projets/${project.id}`}>
                <div
                  className="bg-white dark:bg-[#0f1f35] rounded-xl overflow-hidden shadow-lg 
                           hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                >
                  {project.images ? (
                    <div className="relative h-64 bg-gray-100 dark:bg-[#0f1f35]">
                      <div className="grid grid-cols-2 h-full">
                        <div className="relative">
                          <Image
                            src={project.images[0] || "/placeholder.svg"}
                            alt={`${project.title} - Mobile`}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                          <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                            Mobile
                          </div>
                        </div>
                        <div className="relative">
                          <Image
                            src={project.images[1] || "/placeholder.svg"}
                            alt={`${project.title} - Desktop`}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                          <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                            Desktop
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-64 bg-gray-100 dark:bg-[#0f1f35]">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className={`${project.id === "zalama" || project.id === "guitour" || project.id === "securguinee" ? "object-contain p-2" : "object-cover"}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 
                                   dark:text-blue-200 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 
                                   dark:text-gray-200 rounded-full text-xs font-medium"
                        >
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
