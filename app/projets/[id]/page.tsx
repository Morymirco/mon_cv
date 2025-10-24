"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id as string

  // Données des projets
  const projects = {
    securguinee: {
      title: "SecurGuinee",
      description:
        "Application mobile permettant aux citoyens de signaler des incidents, accéder aux services d'urgence et suivre leurs requêtes auprès des autorités.",
      longDescription: `
        SecurGuinee est une plateforme mobile innovante développée pour le Ministère de la Sécurité et de la Protection Civile de Guinée. 
        Cette application permet aux citoyens de signaler des incidents, de déposer des plaintes et de suivre l'évolution de leurs requêtes 
        en toute transparence.
        
        L'application offre un accès rapide aux services d'urgence (police, pompiers, urgences médicales, assistance routière) et 
        centralise les informations utiles comme les numéros d'urgence. Elle vise à améliorer l'efficacité des interventions, 
        renforcer la confiance du public et optimiser la gestion des incidents.
      `,
      technologies: ["Flutter", "Node.js", "Firebase", "Google Maps API"],
      image: "/images/securguinee.png",
      category: "mobile",
      features: [
        "Signalement d'incidents avec géolocalisation",
        "Accès rapide aux services d'urgence",
        "Suivi en temps réel des requêtes",
        "Messagerie directe avec les autorités",
        "Authentification sécurisée avec option anonyme",
        "Notifications sur l'évolution des signalements",
      ],
      challenges: [
        "Développement d'une interface intuitive et accessible à tous",
        "Mise en place d'un système de suivi transparent des requêtes",
        "Intégration avec les systèmes existants du Ministère",
        "Garantie de la confidentialité et sécurité des données sensibles",
      ],
      results: [
        "Amélioration de la rapidité de traitement des plaintes",
        "Augmentation du taux de résolution des incidents signalés",
        "Renforcement de la confiance entre citoyens et autorités",
        "Meilleure coordination des interventions d'urgence",
      ],
      screenshots: ["/images/securguinee.png"],
    },
    kambily: {
      title: "Kambily",
      description:
        "Site e-commerce développé avec Next.js, avec un projet en cours pour développer une application mobile Flutter.",
      longDescription: `
  Kambily est une plateforme e-commerce complète qui permet aux utilisateurs de découvrir 
  et d'acheter des produits locaux guinéens. Le projet comprend à la fois un site web 
  développé avec Next.js et Django, ainsi qu'une application mobile Flutter en cours de développement.
`,
      technologies: ["Next.js", "Django", "Flutter"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-www.kambily.com-0N1s7pX3XiZ5M3eRGYzBmF1qfhVDM6.png",
      category: "web",
      link: "https://kambily.com",
      github: "#",
      features: [
        "Interface utilisateur intuitive et responsive",
        "Système de paiement sécurisé",
        "Gestion des stocks en temps réel",
        "Panel d'administration personnalisé",
        "Intégration avec les API de paiement locales",
        "Système de notifications automatiques",
      ],
      challenges: [
        "Optimisation des performances pour une utilisation avec connexion limitée",
        "Intégration des méthodes de paiement locales",
        "Adaptation aux spécificités du marché local",
      ],
      results: [
        "Augmentation de 150% des ventes en ligne",
        "Réduction de 40% du temps de traitement des commandes",
        "Satisfaction client de 4.8/5",
      ],
      screenshots: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-www.kambily.com-0N1s7pX3XiZ5M3eRGYzBmF1qfhVDM6.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Macbook-Air-www.kambily.com-v685BmHUisGY8YWEqE2KZcYTXsOydJ.png",
        "https://sjc.microlink.io/Lk0ev4ouWg5I8Em0eKwxImUaPcaG-yAL1W3X67xr6HauEmYpqb3zahGVuTb2-KhNdlqjEymEjm5skHr0Ip0vZQ.jpeg",
      ],
    },
    investirensoi: {
      title: "Investirensoi",
      description:
        "Plateforme éducative en ligne offrant des formations dans les domaines du business, de l'investissement et du développement personnel.",
      longDescription: `
      Investirensoi est une école en ligne 2.0 qui accompagne les apprenants vers leurs objectifs
      en leur permettant d'acquérir des compétences essentielles dans les domaines du business,
      de l'investissement, du développement personnel, de l'informatique et du digital.
      
      La plateforme propose un système complet de gestion des cours en ligne et de mise en relation
      avec des centres de formation partenaires, offrant ainsi une expérience d'apprentissage
      flexible et adaptée aux besoins de chacun.
    `,
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "Stripe"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-investirensoi.vercel.app-ex36LRbbR67iLtfIv2RG7KBrbCcCfD.png",
      category: "web",
      link: "https://investirensoi.vercel.app",
      github: "#",
      features: [
        "Accès à des modules de cours variés (vidéos, documents PDF, présentations)",
        "Tableau de bord personnalisé pour le suivi des progrès",
        "Système d'évaluation avec tests interactifs",
        "Certification automatique après complétion des parcours",
        "Moteur de recherche avancé pour les formations",
        "Système de paiement sécurisé pour l'achat de cours",
      ],
      challenges: [
        "Création d'une interface utilisateur intuitive et engageante",
        "Développement d'un système de suivi des progrès efficace",
        "Intégration d'un moteur de recherche performant pour les formations",
        "Mise en place d'un système de paiement sécurisé",
      ],
      results: [
        "Note moyenne de satisfaction de 4.6/5",
        "Augmentation du taux de complétion des formations de 65%",
        "Plus de 1000 utilisateurs actifs mensuels",
      ],
      screenshots: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-investirensoi.vercel.app-ex36LRbbR67iLtfIv2RG7KBrbCcCfD.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Macbook-Air-investirensoi.vercel.app%20%281%29-0VyuNt1koNDwuSjjSjQ5o8ukKn3TGM.png",
      ],
    },
    geniusclass: {
      title: "Geniusclass.com",
      description:
        "Plateforme d'apprentissage en ligne 100% guinéenne, offrant des vidéos de cours et des outils éducatifs.",
      longDescription: `
      Geniusclass est une plateforme éducative innovante conçue pour offrir des cours en ligne
      de haute qualité aux étudiants guinéens. Le site propose des vidéos de cours, des quiz interactifs,
      et un suivi personnalisé des progrès pour libérer tout le potentiel informatique des apprenants.
    `,
      technologies: ["WordPress", "Firebase", "Firebase Storage", "JavaScript", "PHP"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-dev-geniusclass2.pantheonsite.io-GGBuYERYQEkfNKZmW3CZtoApRpsvPT.png",
      category: "web",
      link: "https://geniusclass.com",
      github: "#",
      features: [
        "Bibliothèque de cours vidéo",
        "Système de quiz et d'évaluation",
        "Tableau de bord étudiant",
        "Suivi de progression",
        "Certificats de réussite",
        "Forum de discussion",
      ],
      challenges: [
        "Optimisation pour les connexions internet à faible débit",
        "Création d'une expérience d'apprentissage engageante",
        "Développement d'un système de paiement adapté au contexte local",
      ],
      results: [
        "Plus de 1000 étudiants inscrits",
        "Taux de complétion des cours de 78%",
        "Note moyenne de satisfaction de 4.7/5",
      ],
      screenshots: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-dev-geniusclass2.pantheonsite.io-GGBuYERYQEkfNKZmW3CZtoApRpsvPT.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Macbook-Air-dev-geniusclass2.pantheonsite.io-FzxbhuwFe3gQEse2s4LOgwOUnQXfdB.png",
      ],
    },
    library: {
      title: "Bibliothèque en ligne",
      description: "Projet ReactJS pour gérer et consulter une bibliothèque en ligne.",
      longDescription: `
      Cette application de bibliothèque numérique permet aux utilisateurs de parcourir, 
      rechercher et emprunter des livres en ligne. Elle offre une interface moderne et 
      intuitive pour faciliter l'accès à la connaissance.
    `,
      technologies: ["ReactJS", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-bibliofinalodc.vercel.app-gyrpj9ixWH24rET26Y93VZomuzJVSo.png",
      category: "web",
      github: "https://bibliofinalodc.vercel.app/",
      link: "https://bibliofinalodc.vercel.app/",
      features: [
        "Catalogue de livres complet",
        "Système de recherche avancée",
        "Gestion des emprunts et retours",
        "Profils utilisateurs personnalisés",
        "Recommandations basées sur les intérêts",
        "Mode lecture en ligne pour certains ouvrages",
      ],
      challenges: [
        "Développement d'un système de recherche performant",
        "Gestion des droits d'auteur et des accès",
        "Création d'une expérience utilisateur fluide",
      ],
      results: [
        "Bibliothèque de plus de 5000 ouvrages",
        "Temps moyen de recherche réduit de 65%",
        "Augmentation de 40% des emprunts mensuels",
      ],
      screenshots: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-bibliofinalodc.vercel.app-gyrpj9ixWH24rET26Y93VZomuzJVSo.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Macbook-Air-bibliofinalodc.vercel.app-nbL5iOAeZL6VpL2hlnH8ZeaA5IUYWS.png",
      ],
    },
    findaara: {
      title: "Findaara",
      description: "Site vitrine du projet Findaara, proposant des solutions intelligentes pour l'élevage avicole.",
      longDescription: `
      Findaara révolutionne l'élevage avicole avec des solutions intelligentes et durables.
      Le site présente les couveuses intelligentes, l'application mobile de suivi et les services
      d'accompagnement pour augmenter la productivité des éleveurs.
    `,
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-www.findaara.com-VTQ1QJ6kqaK6AHlJoxRx3e7LAZh9jw.png",
      category: "web",
      github: "https://findaara.vercel.app/",
      link: "https://findaara.com",
      features: [
        "Présentation des produits et solutions",
        "Formulaire de contact et demande de devis",
        "Blog informatif sur l'élevage avicole",
        "Témoignages clients",
        "Démonstration interactive des fonctionnalités",
      ],
      challenges: [
        "Communication claire des avantages technologiques",
        "Adaptation du contenu pour un public non-technique",
        "Création d'une identité visuelle forte et mémorable",
      ],
      results: [
        "Augmentation de 200% des demandes de démonstration",
        "Taux de conversion visiteur-client de 15%",
        "Réduction des coûts d'acquisition client de 30%",
      ],
      screenshots: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-www.findaara.com-VTQ1QJ6kqaK6AHlJoxRx3e7LAZh9jw.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Macbook-Air-www.findaara.com-OyEhgQ2Qe318j9ffYEScdqijdWNKvY.png",
      ],
    },
    markazgn: {
      title: "Markazgn",
      description: "Plateforme collaborative pour les services numériques et la gestion de communautés.",
      longDescription: `
      Markazgn est un portail vers l'excellence dans l'apprentissage du Coran, permettant
      aux utilisateurs de découvrir les meilleurs centres d'apprentissage près de chez eux
      et de commencer leur voyage spirituel.
    `,
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "Google Maps API"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-www.markazgn.org-UXDZ9if06CWkWQxsF7ig7k1mx56aSA.png",
      category: "web",
      link: "https://markazgn.org",
      github: "#",
      features: [
        "Recherche géolocalisée de centres d'apprentissage",
        "Profils détaillés des centres avec programmes et horaires",
        "Système de notation et d'avis",
        "Inscription en ligne aux programmes",
        "Ressources éducatives gratuites",
      ],
      challenges: [
        "Création d'une interface accessible à tous les âges",
        "Intégration de fonctionnalités de géolocalisation précises",
        "Développement d'un système de vérification des centres",
      ],
      results: [
        "Plus de 50 centres répertoriés",
        "Plus de 1000 utilisateurs actifs mensuels",
        "Augmentation de 45% des inscriptions aux programmes",
      ],
      screenshots: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-www.markazgn.org-UXDZ9if06CWkWQxsF7ig7k1mx56aSA.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Macbook-Air-www.markazgn.org%20%281%29-T5YmLf8ZtHCzzhWFHwilJFMi70kREC.png",
      ],
    },
    loguifagn: {
      title: "Loguifagn",
      description: "Plateforme de location de villas de luxe et de gestion immobilière.",
      longDescription: `
      Loguifagn est votre portail vers le luxe abordable, proposant des villas d'évasion
      pour des séjours inoubliables en Guinée. La plateforme permet de rechercher, réserver et gérer
      des locations de propriétés de prestige dans les plus beaux endroits du pays.
    `,
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "Stripe"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-www.loguifa.com%20%281%29-dKDDTWomnWxuG1KkTdi2KueG3ZIuGm.png",
      category: "web",
      link: "https://loguifa.com",
      github: "#",
      features: [
        "Recherche avancée de propriétés",
        "Galeries photos et visites virtuelles",
        "Système de réservation en ligne",
        "Paiements sécurisés",
        "Gestion des disponibilités en temps réel",
        "Service de conciergerie intégré",
      ],
      challenges: [
        "Création d'une expérience utilisateur haut de gamme",
        "Développement d'un système de réservation robuste",
        "Intégration de méthodes de paiement sécurisées",
      ],
      results: [
        "Taux d'occupation des propriétés de 85%",
        "Note moyenne de satisfaction client de 4.9/5",
        "Croissance mensuelle des réservations de 25%",
      ],
      screenshots: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-www.loguifa.com%20%281%29-dKDDTWomnWxuG1KkTdi2KueG3ZIuGm.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Macbook-Air-www.loguifa.com%20%284%29-ktFF82LlLAKFJwB1KZzvyL8az70w7y.png",
      ],
    },
    guitour: {
      title: "Guitour",
      description:
        "Application mobile présentant les sites touristiques, restaurants et spécialités gastronomiques de Guinée.",
      longDescription: `
      Guitour est une application mobile complète qui met en valeur les trésors touristiques
      de la Guinée. Elle permet aux utilisateurs de découvrir des sites touristiques, des restaurants,
      et des spécialités locales avec des informations détaillées et des recommandations personnalisées.
    `,
      technologies: ["Flutter", "Firebase", "Google Maps API", "Cloud Functions"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/guitour-cGiFmd30ls4Bkv51gIt1O1KpgkKCUj.png",
      category: "mobile",
      github: "#",
      features: [
        "Carte interactive des sites touristiques",
        "Fiches détaillées avec photos et informations pratiques",
        "Système de notation et d'avis",
        "Mode hors ligne pour les zones à faible connectivité",
        "Itinéraires personnalisés",
        "Recommandations basées sur les préférences",
      ],
      challenges: [
        "Collecte et vérification des données touristiques",
        "Optimisation pour une utilisation avec connexion limitée",
        "Création d'une interface intuitive et attrayante",
      ],
      results: [
        "Plus de 5000 téléchargements",
        "Plus de 200 sites touristiques répertoriés",
        "Note moyenne de 4.8/5 sur les stores d'applications",
      ],
      screenshots: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/guitour-cGiFmd30ls4Bkv51gIt1O1KpgkKCUj.png",
      ],
    },
    zalama: {
      title: "ZALAMA",
      description:
        "Application financière permettant aux étudiants et salariés guinéens d'accéder à leurs ressources financières de manière flexible.",
      longDescription: `
      ZALAMA est une application financière innovante qui démocratise l'accès aux services
      financiers pour les étudiants et salariés guinéens. Elle offre des solutions de micro-crédit,
      d'avance sur salaire et de gestion financière adaptées aux besoins locaux.
    `,
      technologies: ["Flutter", "Django", "Firebase", "REST API", "PostgreSQL"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/app-preview-t8KNTbnFfm0BVqdUQxbE45uiAD2o4s.png",
      category: "mobile",
      features: [
        "Avances sur salaire",
        "Micro-crédits instantanés",
        "Transferts d'argent",
        "Paiements de factures",
        "Conseils financiers personnalisés",
        "Historique des transactions",
      ],
      challenges: [
        "Développement d'un système de scoring de crédit adapté",
        "Sécurisation des transactions financières",
        "Intégration avec les systèmes bancaires locaux",
        "Conformité avec les réglementations financières",
      ],
      results: [
        "Plus de 10 000 utilisateurs actifs",
        "Taux de remboursement de 98%",
        "Temps moyen d'approbation de crédit réduit à 5 minutes",
      ],
      screenshots: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/app-preview-t8KNTbnFfm0BVqdUQxbE45uiAD2o4s.png",
      ],
    },
    cryptoce: {
      title: "Chiffrement de César",
      description: "Application mobile de chiffrement et déchiffrement de messages utilisant l'algorithme de César.",
      longDescription: `
  L'application de chiffrement de César est un outil de sécurité informatique développé en Flutter qui permet 
  aux utilisateurs de chiffrer et déchiffrer des messages en utilisant l'algorithme classique de César.
  
  Cette application offre une interface intuitive et moderne avec un thème sombre, permettant aux utilisateurs 
  d'entrer un message, de spécifier un décalage (shift) et d'obtenir instantanément le résultat chiffré ou déchiffré.
  Elle propose également des fonctionnalités avancées comme l'importation de fichiers texte, l'exportation des 
  résultats, et la gestion d'un historique des opérations.
`,
      technologies: ["Flutter", "Dart", "Hive", "SharedPreferences", "FilePicker", "Share Plus"],
      image: "/images/cryptoce-1.png",
      category: "mobile",
      github: "https://github.com/Morymirco/cryptoce",
      link: "https://cryptoce.vercel.app/",
      features: [
        "Chiffrement et déchiffrement de messages avec l'algorithme de César",
        "Importation et exportation de fichiers texte",
        "Historique des opérations sauvegardé localement",
        "Partage des résultats via d'autres applications",
        "Interface utilisateur intuitive avec thème sombre",
        "Copie rapide des résultats dans le presse-papiers",
      ],
      challenges: [
        "Implémentation efficace de l'algorithme de chiffrement pour de longs textes",
        "Gestion de la persistance des données avec Hive",
        "Création d'une interface utilisateur intuitive et moderne",
        "Optimisation des performances sur différents appareils mobiles",
      ],
      results: [
        "Application fonctionnelle et performante disponible sur le web",
        "Interface utilisateur moderne et intuitive avec thème sombre",
        "Système de persistance des données robuste pour l'historique",
      ],
      screenshots: ["/images/cryptoce-1.png", "/images/cryptoce-2.png", "/images/cryptoce-3.png"],
    },
    guibank: {
      title: "Guibank's",
      description: "Application de gestion bancaire permettant de gérer les clients, comptes et agences bancaires.",
      longDescription: `
      Guibank's est une solution complète de gestion bancaire qui permet aux institutions
      financières de gérer efficacement leurs clients, comptes et agences. Le système offre
      une interface moderne et sécurisée pour toutes les opérations bancaires quotidiennes.
    `,
      technologies: ["Symfony", "MySQL", "Bootstrap", "jQuery", "API REST"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sans%20titre%289%29-SveE7T2mNgDDldrubuNijUevMuEity.png",
      category: "backend",
      github: "#",
      features: [
        "Gestion des clients et KYC",
        "Création et gestion des comptes",
        "Suivi des transactions",
        "Reporting et tableaux de bord",
        "Gestion des agences et du personnel",
        "Système d'alerte et de notification",
      ],
      challenges: [
        "Développement d'une architecture sécurisée",
        "Optimisation des performances pour de grands volumes de données",
        "Création d'une interface utilisateur intuitive pour les employés",
      ],
      results: [
        "Réduction de 60% du temps de traitement des opérations",
        "Amélioration de 45% de la satisfaction des employés",
        "Diminution de 30% des erreurs opérationnelles",
      ],
      screenshots: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sans%20titre%289%29-SveE7T2mNgDDldrubuNijUevMuEity.png",
      ],
    },
    cartographie: {
      title: "GUITAB - Cartographie établissements",
      description: "Application web pour localiser et cartographier les établissements publics à travers la Guinée.",
      longDescription: `
GUITAB est une application de cartographie interactive qui permet de localiser facilement 
les établissements publics à travers la Guinée. Elle offre une interface intuitive pour rechercher
des écoles, hôpitaux, administrations et autres services publics avec des informations
détaillées et des itinéraires.

L'application propose une vue satellite et une vue rue, permettant aux utilisateurs de visualiser
précisément l'emplacement des établissements et d'y accéder facilement.
`,
      technologies: ["Django", "Next.js", "Leaflet", "PostgreSQL", "PostGIS"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-guitab-nimba-project.vercel.app-YHHMpdMH1FEseyt5qOs2uyZiCzOVLL.png",
      category: "ongoing",
      features: [
        "Carte interactive des établissements publics",
        "Recherche par type d'établissement et localisation",
        "Fiches détaillées avec contacts et horaires",
        "Calcul d'itinéraires",
        "Contribution collaborative pour ajouter de nouveaux établissements",
        "API publique pour les développeurs",
      ],
      challenges: [
        "Collecte et vérification des données géographiques",
        "Optimisation des performances cartographiques",
        "Développement d'une interface accessible sur tous les appareils",
      ],
      results: [
        "Plus de 500 établissements répertoriés",
        "Réduction du temps de recherche d'informations de 75%",
        "Utilisation par plus de 10 organisations gouvernementales",
      ],
      screenshots: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-13-PRO-guitab-nimba-project.vercel.app-YHHMpdMH1FEseyt5qOs2uyZiCzOVLL.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Macbook-Air-guitab-nimba-project.vercel.app-b7jusj3EbxsZCqJpDlXSrYPPlrLboB.png",
      ],
    },
  }

  // Récupérer le projet en fonction de l'ID
  const project = projects[projectId as keyof typeof projects] || projects.kambily

  return (
    <main className="pt-24 px-4 sm:px-6 lg:px-8 pb-16 dark:bg-background">
      <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-center mb-8 bg-gradient-to-r 
                     from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 
                     text-transparent bg-clip-text"
          >
            {project.title}
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className={`relative ${
              project.id === "cartographie" ? "h-[400px]" : "h-[500px]"
            } rounded-lg overflow-hidden`}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className={`${
                project.id === "zalama" || project.id === "guitour" || project.id === "securguinee"
                  ? "object-contain p-4"
                  : project.id === "cartographie"
                    ? "object-contain p-2"
                    : "object-contain"
              }`}
              priority
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2"
            >
              <div className="bg-white dark:bg-card rounded-xl shadow-lg p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 dark:text-white">Description</h2>
                  <p className="text-gray-600 dark:text-gray-300">{project.longDescription}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 dark:text-white">Fonctionnalités</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {project.features?.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 dark:text-white">Défis & Solutions</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {project.challenges?.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 dark:text-white">Résultats</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {project.results?.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.aside
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-card p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4 dark:text-white">Détails du projet</h2>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-gray-500 dark:text-gray-400">Catégorie</dt>
                    <dd className="font-medium dark:text-white capitalize">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 dark:text-gray-400">Technologies</dt>
                    <dd className="flex flex-wrap gap-2 mt-2">
                      {project.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 
                                   dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white dark:bg-card p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4 dark:text-white">Liens</h2>
                <div className="space-y-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 
                               hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <span>Voir le site</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 
                               hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.294c0 .319.192.694.801.576 4.765-1.586 8.197-6.083 8.197-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>Voir le code source</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.aside>
          </div>

          {/* Screenshots Section */}
          {project.screenshots && project.screenshots.length > 0 && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Captures d'écran</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`${project.title} Screenshot ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.article>
    </main>
  )
}
