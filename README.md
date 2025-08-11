# Dental SEO Website - Deutsche Version

Eine professionelle Dental SEO Website für Zahnärzte, gebaut mit Astro.js und Tailwind CSS.

## 🚀 Quick Start

1. **Dependencies installieren:**
   ```bash
   npm install
   ```

2. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```

3. **Browser öffnen:**
   Navigieren Sie zu `http://localhost:4321`

## ✏️ Einfache Inhaltsbearbeitung

**Kein Coding erforderlich!** Alle Website-Inhalte können in einer Datei bearbeitet werden:

### 📝 Inhalte bearbeiten: `src/content/config.ts`

Diese Datei enthält alle Texte, Buttons und Inhalte für Ihre Website. Bearbeiten Sie einfach die Werte:

#### Hero Section (WAS)
```typescript
hero: {
  title: "Ihr Titel hier",
  subtitle: "Ihr Untertitel...",
  primaryButton: {
    text: "Button Text",
    link: "/ihr-link"
  }
}
```

#### Problem Section (PROBLEM)
```typescript
problem: {
  title: "Ihr Problem-Titel",
  problems: [
    {
      icon: "😞",
      title: "Problem Name",
      description: "Problem Beschreibung..."
    }
  ]
}
```

#### Lösung Section (LÖSUNG)
```typescript
solution: {
  title: "Ihr Lösungs-Titel",
  solutions: [
    {
      icon: "🎯",
      title: "Lösungsname",
      description: "Lösungsbeschreibung...",
      features: ["Feature 1", "Feature 2"]
    }
  ]
}
```

#### Social Proof (BEWEISE)
```typescript
socialProof: {
  testimonials: [
    {
      name: "Dr. Name",
      practice: "Praxis Name",
      location: "Stadt",
      testimonial: "Kundenaussage...",
      results: "Ergebnisse"
    }
  ]
}
```

#### CTA Section (KONTAKT)
```typescript
cta: {
  title: "Ihr CTA Titel",
  subtitle: "CTA Beschreibung...",
  primaryButton: {
    text: "Hauptbutton",
    link: "/kontakt"
  }
}
```

## 🎯 Landing Page Struktur

Die Website folgt der bewährten Struktur:

1. **WAS** - Hero Section mit Ihrem Angebot
2. **PROBLEM** - Probleme, die Zahnärzte haben
3. **LÖSUNG** - Ihre SEO-Lösungen
4. **SOCIAL PROOF** - Kundenbewertungen & Statistiken
5. **KONTAKT** - Call-to-Action & Kontakt

## 🎨 Anpassungsoptionen

### Farben
- Bearbeiten Sie `tailwind.config.js` für das Farbschema
- Die Website verwendet Blau als Hauptfarbe

### Icons
- Ersetzen Sie Emoji-Icons mit anderen Emojis
- Icons sind im `icon` Feld jeder Sektion definiert

### Layout
- Das Layout ist in `src/layouts/Layout.astro`
- Navigation und Footer können dort modifiziert werden

## 📁 Dateistruktur

```
src/
├── content/
│   └── config.ts          # 🎯 BEARBEITEN SIE DIESE DATEI FÜR INHALTE
├── pages/
│   ├── index.astro        # Homepage
│   ├── blog/              # Blog Seiten
│   ├── services.astro     # Services Seite
│   └── contact.astro      # Kontakt Seite
├── components/             # Wiederverwendbare Komponenten
└── layouts/
    └── Layout.astro       # Haupt-Layout Template
```

## 🚀 Für Produktion bauen

```bash
npm run build
npm run preview
```

## 💡 Tipps

- **Speichern Sie die Config-Datei** und die Website aktualisiert sich automatisch
- **Verwenden Sie Emojis** für schnelle Icon-Änderungen (📍📝⚙️👤📊🚀)
- **Behalten Sie URLs konsistent** beim Ändern von Links
- **Testen Sie Änderungen** im Browser nach dem Bearbeiten

## 🆘 Hilfe benötigt?

- Bearbeiten Sie `src/content/config.ts` für Inhaltsänderungen
- Modifizieren Sie `tailwind.config.js` für Styling-Änderungen
- Überprüfen Sie die Browser-Konsole auf Fehler
- Starten Sie den Dev-Server neu bei Bedarf: `npm run dev`

---

**Viel Spaß beim Bearbeiten! 🎉** Ihre Dental SEO Website ist jetzt vollständig anpassbar ohne Code zu berühren.
