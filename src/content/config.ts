import { defineCollection, z } from 'astro:content';

// Blog-Collection Schema definieren
const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.union([z.string(), z.date()]).transform((val) => {
			if (typeof val === 'string') {
				return new Date(val);
			}
			return val;
		}),
		updatedDate: z.union([z.string(), z.date()]).optional().transform((val) => {
			if (typeof val === 'string') {
				return new Date(val);
			}
			return val;
		}),
		author: z.string().optional().default("DentalSEO Pro"),
		image: z.union([z.string(), z.undefined()]).optional().default("/blog/default-image.jpg"),
		tags: z.array(z.string()).optional().default([]),
		slug: z.string().optional(),
		img: z.string().optional(), // Für Kompatibilität mit bestehenden Artikeln
	})
});

// Alle Collections exportieren
export const collections = {
	'blog': blogCollection,
};

export interface HeroContent {
  title: string;
  subtitle: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton: {
    text: string;
    link: string;
  };
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface ProblemContent {
  title: string;
  subtitle: string;
  problems: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface SolutionContent {
  title: string;
  subtitle: string;
  solutions: Array<{
    icon: string;
    title: string;
    description: string;
    features: string[];
  }>;
  ctaButton: {
    text: string;
    link: string;
  };
}

export interface SocialProofContent {
  title: string;
  subtitle: string;
  testimonials: Array<{
    name: string;
    practice: string;
    location: string;
    testimonial: string;
    results: string;
  }>;
  stats: Array<{
    number: string;
    label: string;
  }>;
}

export interface CTAContent {
  title: string;
  subtitle: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton: {
    text: string;
    link: string;
  };
  guarantee: string;
}

export interface BlogPost {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  author: string;
  image: string;
  tags: string[];
  slug: string;
}

export interface BlogConfig {
  title: string;
  description: string;
  posts: BlogPost[];
}

export interface SEOStrategiesContent {
  title: string;
  subtitle: string;
  strategies: Array<{
    icon: string;
    title: string;
    description: string;
    features: string[];
  }>;
}

export interface ResultsCardContent {
  title: string;
  subtitle: string;
  stats: Array<{
    number: string;
    label: string;
  }>;
}

export interface SiteConfig {
  hero: HeroContent;
  problem: ProblemContent;
  solution: SolutionContent;
  socialProof: SocialProofContent;
  cta: CTAContent;
  blog: BlogConfig;
  seoStrategies: SEOStrategiesContent;
  resultsCard: ResultsCardContent;
}

export const siteConfig: SiteConfig = {
  hero: {
    title: "Dental SEO Spezialist",
    subtitle: "Ich helfe Zahnärzten dabei, in den lokalen Suchergebnissen zu dominieren und mehr Patienten zu gewinnen. Bewährte SEO-Strategien speziell für Zahnarztpraxen.",
    primaryButton: {
      text: "Kostenlose SEO-Analyse",
      link: "/contact"
    },
    secondaryButton: {
      text: "Blog lesen",
      link: "/blog"
    },
    features: [
      {
        icon: "🎯",
        title: "Lokale SEO",
        description: "Dominieren Sie die lokalen Suchergebnisse für Ihre Stadt"
      },
      {
        icon: "📈",
        title: "Mehr Patienten",
        description: "Gewinnen Sie qualifizierte Patienten aus der Umgebung"
      },
      {
        icon: "💰",
        title: "Nachweisbare ROI",
        description: "Messbare Ergebnisse, die Ihren Umsatz steigern"
      }
    ]
  },
  
  problem: {
    title: "Ihre Zahnarztpraxis verliert Patienten an die Konkurrenz",
    subtitle: "Diese häufigen Probleme halten Zahnärzte davon ab, online erfolgreich zu sein:",
    problems: [
      {
        icon: "😞",
        title: "Niedrige Suchergebnisse",
        description: "Ihre Praxis erscheint nicht auf der ersten Seite von Google. Patienten finden Sie nicht, wenn sie nach Zahnärzten in Ihrer Stadt suchen. Das bedeutet, Sie verlieren täglich potenzielle Patienten an die Konkurrenz, die besser rankt."
      },
      {
        icon: "🌐",
        title: "Schlechte Website",
        description: "Ihre Website lädt langsam und ist nicht mobilfreundlich. 60% aller Suchanfragen kommen von Mobilgeräten. Wenn Ihre Website nicht optimiert ist, verlieren Sie die Hälfte Ihrer potenziellen Patienten bereits beim ersten Klick."
      },
      {
        icon: "🔍",
        title: "Falsche Keywords",
        description: "Sie ranken für Begriffe, die keine Patienten bringen. Viele Zahnärzte optimieren für allgemeine Begriffe wie 'Zahnarzt', aber lokale Patienten suchen nach 'Zahnarzt München' oder 'Zahnarztpraxis in der Nähe'. Das kostet Sie wertvolle Zeit und Geld."
      },
      {
        icon: "⭐",
        title: "Wenige Bewertungen",
        description: "Ihre Online-Bewertungen sind niedrig oder nicht vorhanden. 88% der Patienten lesen Online-Bewertungen, bevor sie einen Zahnarzt wählen. Ohne positive Bewertungen vertrauen Ihnen potenzielle Patienten nicht und wählen die Konkurrenz."
      },
      {
        icon: "📍",
        title: "Schwache lokale Präsenz",
        description: "Google My Business ist nicht optimiert. Lokale Patienten suchen nach Zahnärzten in ihrer Nähe. Wenn Ihr Google My Business Profil unvollständig oder falsch ist, erscheinen Sie nicht in den lokalen Suchergebnissen und verlieren wertvolle Patienten."
      },
      {
        icon: "📊",
        title: "Keine Analysen",
        description: "Sie wissen nicht, wie Ihre Website abschneidet. Ohne Tracking und Analysen können Sie nicht messen, was funktioniert und was nicht. Das führt zu teuren Fehlentscheidungen und verschwendeten Marketing-Budgets."
      }
    ]
  },
  
  solution: {
    title: "Meine bewährten SEO-Lösungen für Zahnärzte",
    subtitle: "Ich löse alle diese Probleme mit maßgeschneiderten SEO-Strategien:",
    solutions: [
      {
        icon: "😞",
        title: "Lokale SEO Optimierung",
        description: "Dominieren Sie die lokalen Suchergebnisse in Ihrer Stadt",
        features: [
          "Google My Business Optimierung",
          "Lokale Verzeichnisse & Zitationen",
          "Stadt-spezifische Keywords",
          "Bewertungsmanagement"
        ]
      },
      {
        icon: "😞",
        title: "Content Marketing",
        description: "Erstellen Sie Inhalte, die Patienten anziehen und ranken",
        features: [
          "Blog-Artikel für Zahnärzte",
          "Service-Seiten Optimierung",
          "Patienten-Aufklärung",
          "FAQ-Entwicklung"
        ]
      },
      {
        icon: "😞",
        title: "Technische SEO",
        description: "Optimieren Sie Ihre Website für Suchmaschinen",
        features: [
          "Geschwindigkeitsoptimierung",
          "Mobile Optimierung",
          "Schema-Markup",
          "Website-Struktur"
        ]
      },
      {
        icon: "😞",
        title: "Conversion Optimierung",
        description: "Verwandeln Sie Besucher in Patienten",
        features: [
          "Call-to-Action Optimierung",
          "Kontaktformulare",
          "Patienten-Journey",
          "A/B-Tests"
        ]
      }
    ],
    ctaButton: {
      text: "Jetzt SEO-Strategie besprechen",
      link: "/contact"
    }
  },
  
  socialProof: {
    title: "Das sagen meine Kunden",
    subtitle: "Zahlreiche Zahnärzte haben bereits von meinen SEO-Strategien profitiert:",
    testimonials: [
      {
        name: "Dr. Schmidt",
        practice: "Zahnarztpraxis Schmidt",
        location: "München",
        testimonial: "Innerhalb von 3 Monaten sind wir von Platz 8 auf Platz 1 in den lokalen Suchergebnissen gestiegen. Jetzt kommen täglich neue Patienten über Google zu uns.",
        results: "Von Platz 8 auf Platz 1 in 3 Monaten"
      },
      {
        name: "Dr. Müller",
        practice: "Zahnmedizin Müller",
        location: "Hamburg",
        testimonial: "Unsere Website generiert jetzt 5x mehr Anfragen als vorher. Die SEO-Strategien haben unsere Praxis komplett verändert.",
        results: "5x mehr Anfragen"
      },
      {
        name: "Dr. Weber",
        practice: "Zahnarzt Weber",
        location: "Berlin",
        testimonial: "Endlich verstehe ich, wie SEO funktioniert. Unsere Praxis ist jetzt die erste Wahl in der Umgebung.",
        results: "Erste Wahl in der Umgebung"
      }
    ],
    stats: [
      {
        number: "150+",
        label: "Zahnarztpraxen geholfen"
      },
      {
        number: "85%",
        label: "Durchschnittliche Verbesserung"
      },
      {
        number: "3.2x",
        label: "ROI im ersten Jahr"
      }
    ]
  },
  
  cta: {
    title: "Bereit, Ihre Praxis zu transformieren?",
    subtitle: "Lassen Sie uns gemeinsam Ihre SEO-Strategie entwickeln und mehr Patienten gewinnen.",
    primaryButton: {
      text: "Kostenlose Beratung buchen",
      link: "/contact"
    },
    secondaryButton: {
      text: "Kostenlose SEO-Analyse",
      link: "/contact"
    },
    guarantee: "Keine Verpflichtung • 30 Tage Geld-zurück-Garantie • Ergebnisse in 90 Tagen"
  },

  blog: {
    title: "Dental SEO Blog",
    description: "Lass mich dir helfen, deine Zahnarztpraxis online zu vermarkten. Hier findest du hilfreiche Tipps und Tricks für SEO, Content Marketing und Conversion Optimierung.",
    posts: [
      {
        title: "Wie du deine Zahnarztpraxis auf Google rankst",
        description: "Erfahre, wie du deine Zahnarztpraxis auf Google rankst. Wir erklären dir die wichtigsten Faktoren und Strategien.",
        pubDate: new Date("2023-10-27"),
        updatedDate: new Date("2023-10-27"),
        author: "Dr. Schmidt",
        image: "/images/blog/seo-ranking.jpg",
        tags: ["SEO", "Google My Business", "Keywords"],
        slug: "seo-ranking"
      },
      {
        title: "Content Marketing für Zahnarztpraxen",
        description: "Lerne, wie du mit Content Marketing deine Zahnarztpraxis auf Google rankst. Wir zeigen dir, wie du relevante Inhalte erstellst.",
        pubDate: new Date("2023-10-20"),
        updatedDate: new Date("2023-10-20"),
        author: "Dr. Müller",
        image: "/images/blog/content-marketing.jpg",
        tags: ["Content Marketing", "SEO", "Google My Business"],
        slug: "content-marketing"
      },
      {
        title: "Conversion Optimierung für Zahnarztpraxen",
        description: "Erfahre, wie du deine Konversionsrate verbesserst. Wir zeigen dir, wie du deine Website optimierst, um mehr Patienten zu gewinnen.",
        pubDate: new Date("2023-10-15"),
        updatedDate: new Date("2023-10-15"),
        author: "Dr. Weber",
        image: "/images/blog/conversion-optimization.jpg",
        tags: ["Conversion Optimierung", "SEO", "Website Optimierung"],
        slug: "conversion-optimization"
      }
    ]
  },

  seoStrategies: {
    title: "Unsere SEO-Strategien sind speziell auf die Bedürfnisse und Herausforderungen von Zahnarztpraxen abgestimmt",
    subtitle: "Nicht nur bei Google sondern auch bei AI Ergebnissen. Erhalten Sie mehr Patienten weil ChatGPT und Google Sie weiterempfehlen. Dauerthaft mehr Klienten. Wir unterstützen Sie mit unserer SEO dabei.",
    strategies: [
      {
        icon: "🔍",
        title: "Lokales SEO für Zahnärzte",
        description: "Dominieren Sie lokale Suchergebnisse und Google Maps, um mehr Patienten in Ihrer Nähe zu gewinnen.",
        features: [
          "Google My Business Optimierung",
          "Lokale Verzeichniseinträge",
          "Ortsbezogene Inhalte",
          "Bewertungsmanagement"
        ]
      },
      {
        icon: "📁",
        title: "Content-Marketing für Zahnärzte",
        description: "Bildende, optimierte Inhalte, die Ihre Praxis als Autorität etablieren und neue Patienten anziehen.",
        features: [
          "Inhaltsseiten zu Behandlungen",
          "Blogartikel für Zahnärzte",
          "Patientenaufklärungsmaterial",
          "Content-Strategie"
        ]
      },
      {
        icon: "⚡",
        title: "Technisches Dental-SEO",
        description: "Optimieren Sie die technischen Aspekte Ihrer Website für bessere Sichtbarkeit und Nutzererfahrung.",
        features: [
          "Optimierung der Ladegeschwindigkeit",
          "Mobile Anpassung",
          "Schema-Markup für Zahnärzte",
          "Technische Audits"
        ]
      },
      {
        icon: "📊",
        title: "Dental-SEO Analytics",
        description: "Umfassendes Tracking und Reporting aller wichtigen Leistungskennzahlen Ihrer Zahnarztpraxis.",
        features: [
          "Tracking von Patientenanfragen",
          "Conversion-Optimierung",
          "Wettbewerbsanalyse",
          "Monatliche Berichte"
        ]
      }
    ]
  },

  resultsCard: {
    title: "Durchschnittliche Ergebnisse",
    subtitle: "Basierend auf den Durchschnittswerten von über 50 Zahnarztpraxen",
    stats: [
      {
        number: "187%",
        label: "Mehr organischer Traffic"
      },
      {
        number: "94%",
        label: "Mehr neue Anrufe von Patienten"
      },
      {
        number: "83%",
        label: "Bessere lokale Rankings"
      },
      {
        number: "4.8x",
        label: "ROI im ersten Jahr"
      }
    ]
  }
};
