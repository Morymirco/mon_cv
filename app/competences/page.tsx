"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"

interface Skill {
  name: string
  level: number
  icon: string
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

function SkillBar({ name, level, icon }: Skill) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6">
            <Image src={icon || "/placeholder.svg"} alt={name} fill className="object-contain" />
          </div>
          <span className="font-medium dark:text-gray-200">{name}</span>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 
                   dark:from-orange-400 dark:to-orange-500 rounded-full"
        />
      </div>
    </div>
  )
}

export default function Competences() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Technologies Frontend",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      skills: [
        {
          name: "HTML",
          level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        { name: "CSS", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        {
          name: "JavaScript",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        },
        {
          name: "Bootstrap",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "React.js",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
      ],
    },
    {
      title: "CMS & Plateformes",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 002 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      skills: [
        {
          name: "WordPress",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
        },
      ],
    },
    {
      title: "Technologies Backend",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      skills: [
        {
          name: "Django",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        { name: "PHP", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        {
          name: "Spring Boot",
          level: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "Symfony",
          level: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
        },
      ],
    },
    {
      title: "Bases de données",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      skills: [
        {
          name: "MySQL",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Firebase",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          name: "MongoDB",
          level: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
      ],
    },
    {
      title: "Développement Mobile",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      skills: [
        {
          name: "Flutter",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
      ],
    },
    {
      title: "Design & UI/UX",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      skills: [
        {
          name: "Adobe Photoshop",
          level: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        },
        {
          name: "Canva",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        },
        {
          name: "Figma",
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        { name: "UI Design", level: 85, icon: "https://cdn-icons-png.flaticon.com/512/5278/5278663.png" },
        { name: "Responsive Design", level: 90, icon: "https://cdn-icons-png.flaticon.com/512/7693/7693271.png" },
      ],
    },
    {
      title: "Outils & Méthodologies",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        {
          name: "Git & GitHub",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        { name: "Méthodologie Agile", level: 85, icon: "https://cdn-icons-png.flaticon.com/512/2620/2620756.png" },
        { name: "Jira", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
        { name: "Notion", level: 85, icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
        {
          name: "Slack",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
        },
        {
          name: "VS Code",
          level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
      ],
    },
  ]

  return (
    <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 dark:bg-background">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1
          className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 
                       dark:from-blue-400 dark:to-blue-600 text-transparent bg-clip-text 
                       mb-12 text-center"
        >
          Mes Compétences
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-card p-8 rounded-xl shadow-lg 
                       hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h2 className="text-2xl font-semibold dark:text-white">{category.title}</h2>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Section des certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r 
                       from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 
                       text-transparent bg-clip-text"
          >
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Développement Front End",
                issuer: "Nimba Hub",
                date: "2025",
                icon: "https://cdn-icons-png.flaticon.com/512/2721/2721264.png",
              },
              {
                name: "Certification en React",
                issuer: "Coursera",
                date: "2025",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "Certification en Next.js",
                issuer: "La Minute du Code",
                date: "2025",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
              },
              {
                name: "Conception générale de la sécurité informatique",
                issuer: "Certification",
                date: "Décembre 2023",
                icon: "https://cdn-icons-png.flaticon.com/512/2092/2092757.png",
              },
              {
                name: "Découverte à UX/UI DESIGN",
                issuer: "Formation",
                date: "Décembre 2023",
                icon: "https://cdn-icons-png.flaticon.com/512/9433/9433739.png",
              },
              {
                name: "Principes fondamentaux du système Linux",
                issuer: "Certification",
                date: "Août 2023",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
              },
              {
                name: "Gestion de projet agile",
                issuer: "Certification",
                date: "Octobre 2023",
                icon: "https://cdn-icons-png.flaticon.com/512/6878/6878705.png",
              },
              {
                name: "Formation en Reactjs",
                issuer: "ODC",
                date: "2023",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "Formation en Canva & Figma",
                issuer: "Certification",
                date: "Septembre 2024",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white dark:bg-card p-6 rounded-xl shadow-lg 
                         hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12">
                    <Image src={cert.icon || "/placeholder.svg"} alt={cert.issuer} fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-semibold dark:text-white">{cert.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.issuer} - {cert.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </main>
  )
}
