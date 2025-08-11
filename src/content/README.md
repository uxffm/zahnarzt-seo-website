# Content Management für die Startseite

## Übersicht
Alle Inhalte der Startseite können Sie einfach in der Datei `src/content/homepage.ts` ändern, ohne das Layout oder den Code zu berühren.

## Verfügbare Bereiche

### 1. Hero Section (`hero`)
- **title**: Haupttitel der Startseite
- **subtitle**: Untertitel unter dem Haupttitel
- **primaryButton**: Primärer Call-to-Action Button
- **secondaryButton**: Sekundärer Button
- **features**: Drei Feature-Punkte mit Icons, Titeln und Beschreibungen

### 2. Results Card (`resultsCard`)
- **title**: Titel der Ergebnisse-Karte
- **subtitle**: Untertitel der Karte
- **stats**: Array von Statistiken (Zahl + Beschreibung)

### 3. SEO Strategies (`seoStrategies`)
- **title**: Haupttitel des SEO-Strategien Bereichs
- **subtitle**: Untertitel
- **strategies**: Array von 4 SEO-Strategien mit Icons, Titeln, Beschreibungen und Features

### 4. Problem Section (`problem`)
- **title**: Titel des Problem-Bereichs
- **subtitle**: Untertitel
- **problems**: Array von 6 Problemen mit Icons, Titeln und Beschreibungen

### 5. Solution Section (`solution`)
- **title**: Titel des Lösungs-Bereichs
- **subtitle**: Untertitel
- **solutions**: Array von 4 Lösungen mit Icons, Titeln, Beschreibungen und Features
- **ctaButton**: Call-to-Action Button

### 6. Social Proof (`socialProof`)
- **title**: Titel des Social Proof Bereichs
- **subtitle**: Untertitel
- **testimonials**: Array von Kundenbewertungen
- **stats**: Array von Erfolgsstatistiken

### 7. CTA Section (`cta`)
- **title**: Titel des Call-to-Action Bereichs
- **subtitle**: Untertitel
- **primaryButton**: Primärer Button
- **secondaryButton**: Sekundärer Button
- **guarantee**: Garantie-Text

## Beispiel für Änderungen

### Titel ändern:
```typescript
hero: {
  title: "Ihr neuer Titel hier", // Ändern Sie nur diese Zeile
  // ... Rest bleibt gleich
}
```

### Button-Text ändern:
```typescript
hero: {
  primaryButton: {
    text: "Neuer Button-Text", // Ändern Sie nur diese Zeile
    link: "/contact" // Link bleibt gleich
  }
}
```

### Neue Features hinzufügen:
```typescript
hero: {
  features: [
    // Bestehende Features...
    {
      icon: "🚀", // Neues Icon
      title: "Neues Feature", // Neuer Titel
      description: "Neue Beschreibung" // Neue Beschreibung
    }
  ]
}
```

## Wichtige Hinweise

1. **Icons**: Verwenden Sie Emojis oder Unicode-Symbole
2. **Links**: Beginnen Sie interne Links mit `/` (z.B. `/contact`)
3. **Formatierung**: Behalten Sie die Struktur bei, ändern Sie nur den Inhalt
4. **Speichern**: Nach jeder Änderung wird die Seite automatisch neu geladen

## Dateistruktur
```
src/
├── content/
│   ├── homepage.ts          # ← HIER ÄNDERN SIE DEN CONTENT
│   └── README.md            # Diese Anleitung
└── pages/
    └── index.astro          # Layout der Startseite (nicht ändern)
```

## Support
Bei Fragen oder Problemen wenden Sie sich an Ihren Entwickler.
