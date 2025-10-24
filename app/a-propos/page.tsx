import type { Metadata } from "next"
import AProposClient from "./apropos-client"

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Découvrez le parcours de Mory Koulibaly, développeur Full Stack guinéen spécialisé en React, Next.js, Flutter et Django. Formation, expérience et valeurs.",
  openGraph: {
    title: "À Propos de Mory Koulibaly",
    description: "Parcours, formation et expérience d'un développeur passionné",
  },
}

export default function AProposPage() {
  return <AProposClient />
}
