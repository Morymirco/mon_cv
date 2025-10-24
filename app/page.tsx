"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const icons = {
  contact: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  projects: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 8C8.10457 8 9 7.10457 9 6C9 4.89543 8.10457 4 7 4C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 6H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  code: (
    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  mobile: (
    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect
        x="5"
        y="2"
        width="14"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  web: (
    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

interface Testimonial {
  name: string
  role: string
  company: string
  image: string
  content: string
}

export default function Home() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Diallo",
      role: "CEO",
      company: "TechInnovate Guinée",
      image: "/images/profile-mory.png",
      content:
        "Mory a développé notre plateforme e-commerce avec une expertise remarquable. Son professionnalisme et sa capacité à comprendre nos besoins ont fait toute la différence.",
    },
    {
      name: "Ibrahim Camara",
      role: "Directeur",
      company: "EduTech Solutions",
      image: "/images/profile-mory.png",
      content:
        "La collaboration avec Mory sur notre application mobile a été excellente. Sa maîtrise technique et sa réactivité ont permis de livrer le projet dans les délais.",
    },
    {
      name: "Aminata Sylla",
      role: "Fondatrice",
      company: "Digital Academy",
      image: "/images/profile-mory.png",
      content:
        "Un développeur talentueux qui apporte des solutions innovantes. Son travail sur notre plateforme d'apprentissage en ligne a dépassé nos attentes.",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col dark:bg-gray-900">
      {/* Section Héro */}
      <section className="hero-section min-h-[90vh] py-10 md:py-20 dark:bg-gray-900">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="profile-container mb-8"
        >
          <Image
            src="/images/profile-mory.png"
            alt="Mory Koulibaly"
            width={200}
            height={200}
            className="rounded-full object-cover"
            priority
          />
        </motion.div>

        <div className="space-y-6 mb-12">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-title dark:from-blue-400 dark:to-blue-600"
          >
            Mory Koulibaly
          </motion.h1>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hero-subtitle dark:text-gray-300"
          >
            Développeur Web & Mobile | Créateur de solutions numériques innovantes
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hero-description dark:text-gray-400"
          >
            Développer des solutions pour transformer vos idées en réalité numérique
          </motion.p>
        </div>

        {/* Boutons d'action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg 
                      hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-300 
                      shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
          >
            {icons.contact}
            <span>Me contacter</span>
          </Link>
          <Link
            href="/projets"
            className="group flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 
                      text-blue-600 dark:text-blue-400 rounded-lg 
                      border-2 border-blue-600 dark:border-blue-400 
                      hover:bg-blue-50 dark:hover:bg-gray-700
                      transition-all duration-300 w-full sm:w-auto justify-center"
          >
            {icons.projects}
            <span>Voir mes projets</span>
          </Link>
        </motion.div>
      </section>

      {/* Section Services */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 
                       to-blue-800 dark:from-blue-400 dark:to-blue-600 
                       text-transparent bg-clip-text"
          >
            Mes Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl 
                          transition-all duration-300 flex flex-col items-center text-center space-y-4"
            >
              {icons.web}
              <h3 className="text-xl font-semibold dark:text-white">Développement Web</h3>
              <p className="text-gray-600 dark:text-gray-300">Sites web modernes et applications web performantes</p>
            </div>
            <div
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl 
                          transition-all duration-300 flex flex-col items-center text-center space-y-4"
            >
              {icons.mobile}
              <h3 className="text-xl font-semibold dark:text-white">Applications Mobiles</h3>
              <p className="text-gray-600 dark:text-gray-300">Solutions mobiles cross-platform avec Flutter</p>
            </div>
            <div
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl 
                          transition-all duration-300 flex flex-col items-center text-center space-y-4"
            >
              {icons.code}
              <h3 className="text-xl font-semibold dark:text-white">Solutions Sur Mesure</h3>
              <p className="text-gray-600 dark:text-gray-300">Développement personnalisé selon vos besoins</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section Témoignages */}
      <section
        className="py-20 bg-gradient-to-b from-white to-gray-50 
                         dark:from-gray-900 dark:to-gray-800"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 
                       to-blue-800 dark:from-blue-400 dark:to-blue-600 
                       text-transparent bg-clip-text"
          >
            Ce que disent mes clients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 
                         hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg dark:text-white">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.role}</p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>

                <blockquote className="relative">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 
                             h-16 w-16 text-gray-100 dark:text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-gray-600 dark:text-gray-300 italic">{testimonial.content}</p>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
