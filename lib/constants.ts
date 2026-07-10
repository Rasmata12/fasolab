export const SITE = {
  name: "FasoLab Virtuel",
  tagline: "Expérimenter · Apprendre · Innover",
  description:
    "FasoLab révolutionne l'enseignement des sciences au Burkina Faso grâce à la réalité virtuelle et un bracelet capteur innovant.",
  email: "contact@fasolab.bf",
  phone: "+226 25 00 00 00",
  location: "Ouagadougou, Burkina Faso",
  org: "ISGE-BF",
};

// Liste extensible : ajoutez simplement un objet ici pour afficher une
// nouvelle distinction dans le bandeau défilant du hero (voir Hero.tsx).
export const AWARDS = [
  {
    title: "Hackathon des Grandes Écoles",
    subtitle: "Projet lauréat",
    icon: "Trophy",
  },
  // Ajoutez vos prochains hackathons / distinctions ici, par exemple :
  // { title: "Prix de l'innovation EdTech", subtitle: "Finaliste 2027", icon: "Award" },
];

export const TRUST_CHIPS = [
  "Fonctionne hors-ligne",
  "Aligné programme officiel",
  "IA de guidage intégrée",
];

export const NAV_LINKS = [
  { label: "Fonctionnalités", href: "/features" },
  { label: "Tarifs", href: "/pricing" },
  { label: "Packs", href: "/packs" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  navigation: [
    { label: "Fonctionnalités", href: "/features" },
    { label: "Tarifs", href: "/pricing" },
    { label: "Packs", href: "/packs" },
    { label: "Démo", href: "/demo" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Politique de confidentialité", href: "/privacy" },
    { label: "Conditions d'utilisation", href: "/terms" },
  ],
};

export const SUBJECTS = [
  "Chimie",
  "Physique",
  "Dosage acide-base",
  "Combustion",
  "Réaction acide-base",
  "Réactions chimiques",
  "Chimie organique",
  "Électricité",
];

export const STATS = [
  { val: "12+", label: "Établissements" },
  { val: "500+", label: "Élèves actifs" },
  { val: "10+", label: "TPs de chimie" },
  { val: "4.9/5", label: "Satisfaction" },
];

export const FEATURES = [
  {
    icon: "Beaker",
    title: "TPs de chimie interactifs",
    desc: "Manipulez des expériences virtuelles alignées sur les programmes officiels africains, de la 4ème à la Terminale.",
  },
  {
    icon: "Hand",
    title: "Bracelet capteur connecté",
    desc: "Ressentez les interactions grâce à notre bracelet capteur connecté en Bluetooth Low Energy, avec retour haptique.",
  },
  {
    icon: "Brain",
    title: "IA de guidage intelligente",
    desc: "Un assistant personnel guide chaque élève pas à pas, adapte le niveau et génère des rapports de progression.",
  },
  {
    icon: "WifiOff",
    title: "Mode hors ligne complet",
    desc: "Téléchargez les TP une fois et utilisez-les sans connexion — idéal pour les zones à faible connectivité.",
  },
  {
    icon: "Shield",
    title: "Licences sécurisées RSA-2048",
    desc: "Chaque licence est signée cryptographiquement et fonctionne localement, sans serveur externe.",
  },
  {
    icon: "Rocket",
    title: "Mises à jour automatiques",
    desc: "Nouveaux TP et améliorations poussés automatiquement dès qu'une connexion est disponible.",
  },
  {
    icon: "GraduationCap",
    title: "Alignement pédagogique",
    desc: "Tous les contenus sont validés par des enseignants et alignés sur les programmes officiels.",
  },
  {
    icon: "Users",
    title: "Multi-élèves",
    desc: "Jusqu'à 30 élèves simultanés par salle, avec suivi individuel des progrès.",
  },
];

export const LABS = [
  {
    tag: "Chimie générale",
    title: "Manipulez des gaz et réactifs en toute sécurité",
    desc: "Travaillez avec l'oxygène, l'azote et d'autres gaz dans un environnement 3D fidèle aux TP de lycée — sans aucun risque matériel ou humain.",
    checks: [
      "Protocole identique au programme officiel",
      "Manipulation en temps réel",
      "Résultats mesurables et exportables",
    ],
    img: "lab-o2",
  },
  {
    tag: "Chimie avancée",
    title: "Dosage acide-base avec courbes de pH en direct",
    desc: "Tracez des courbes de neutralisation, observez le point d'équivalence et mesurez le pH avec précision — exactement comme avec un vrai pH-mètre.",
    checks: [
      "Courbes générées en temps réel",
      "Lecture du pH en continu",
      "Équations chimiques affichées",
    ],
    img: "lab-ph",
  },
  {
    tag: "Combustion",
    title: "Réactions de combustion avec effets lumineux spectaculaires",
    desc: "Étudiez les conditions de combustion dans des bocaux hermétiques — avec des effets visuels impossibles à reproduire en classe normale.",
    checks: [
      "Visualisation des flammes en 3D",
      "Observation du dioxygène consommé",
      "Analyse des produits de combustion",
    ],
    img: "lab-combustion",
  },
];

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 250000,
    period: "an",
    desc: "Parfait pour découvrir FasoLab dans un petit établissement.",
    highlight: false,
    cta: "Demander une démo",
    features: [
      "Jusqu'à 50 élèves",
      "1 bracelet capteur inclus",
      "5 TP de chimie",
      "Mode hors ligne",
      "Support par email",
      "Mises à jour incluses",
    ],
  },
  {
    id: "school",
    name: "École",
    price: 500000,
    period: "an",
    desc: "La solution complète pour un établissement moyen.",
    highlight: true,
    cta: "Demander une démo",
    features: [
      "Jusqu'à 200 élèves",
      "3 bracelets capteurs inclus",
      "10+ TP de chimie",
      "Mode hors ligne",
      "Support prioritaire",
      "IA de guidage complète",
      "Rapports de progression",
      "Formation enseignants",
    ],
  },
  {
    id: "institution",
    name: "Institution",
    price: null,
    period: "",
    desc: "Pour les universités, centres de formation et grandes écoles.",
    highlight: false,
    cta: "Nous contacter",
    features: [
      "Élèves illimités",
      "Bracelets illimités",
      "Tous les TP + création sur mesure",
      "Mode hors ligne avancé",
      "Support dédié 24/7",
      "API & intégrations",
      "Tableau de bord analytics",
      "Formation sur site",
    ],
  },
];
