# 🚀 Automatisches Deploy auf Hostinger via GitHub Actions

## Übersicht
Dieser Workflow lädt deine Website automatisch auf deinen Hostinger FTP-Server hoch, sobald du Code auf GitHub pushst.

## 📋 Voraussetzungen

### 1. GitHub Repository
- Erstelle ein neues Repository auf GitHub
- Lade deinen Code hoch

### 2. Hostinger FTP-Zugangsdaten
Du brauchst von Hostinger:
- **FTP-Server** (z.B. `ftp.yourdomain.com`)
- **FTP-Benutzername**
- **FTP-Passwort**
- **FTP-Verzeichnis** (meist `public_html` oder `www`)

## 🔧 Einrichtung

### Schritt 1: GitHub Repository erstellen
```bash
# Verbinde dein lokales Repository mit GitHub
git remote add origin https://github.com/DEIN_USERNAME/DEIN_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Schritt 2: Fertig! 🎉
Alle FTP-Daten sind bereits im Workflow eingetragen:
- **FTP-Server**: `82.25.96.102`
- **FTP-Benutzername**: `u139044504.snow-kudu-883447.hostingersite.com`
- **FTP-Passwort**: `BananaShake34$` (bereits eingetragen)
- **FTP-Verzeichnis**: `public_html`

**Du musst keine Secrets hinzufügen - alles ist bereits konfiguriert!**

### Schritt 3: Code pushen
```bash
git add .
git commit -m "Add GitHub Actions workflow"
git push
```

## ⚡ Wie es funktioniert

1. **Push auf GitHub**: Wenn du `git push` machst
2. **Automatischer Build**: GitHub Actions baut deine Website
3. **FTP Upload**: Die gebaute Website wird automatisch auf Hostinger hochgeladen
4. **Website aktualisiert**: Deine Website ist sofort online

## 📁 Was wird hochgeladen

Der Workflow lädt nur die **gebaute Website** hoch:
- ✅ `dist/` Ordner (gebauter Code)
- ❌ Quellcode (`src/`)
- ❌ Konfigurationsdateien
- ❌ Node.js Dependencies

## 🔄 Workflow auslösen

### Automatisch:
- Bei jedem `git push` auf den `main` Branch

### Manuell:
- GitHub Repository → **Actions** → **Deploy to Hostinger FTP** → **Run workflow**

## 📊 Workflow-Status

Du kannst den Status hier verfolgen:
- GitHub Repository → **Actions** Tab
- Grüner Haken = Erfolgreich
- Roter Haken = Fehler (siehe Logs)

## 🚨 Fehlerbehebung

### Häufige Probleme:

1. **FTP-Verbindung fehlgeschlagen**
   - Überprüfe FTP-Zugangsdaten
   - Stelle sicher, dass der FTP-Server erreichbar ist

2. **Build fehlgeschlagen**
   - Überprüfe die Build-Logs
   - Stelle sicher, dass alle Dependencies installiert sind

3. **Dateien werden nicht hochgeladen**
   - Überprüfe den `FTP_SERVER_DIR` Pfad
   - Stelle sicher, dass das Verzeichnis existiert

## 📝 Nützliche Befehle

```bash
# Website lokal bauen (zum Testen)
npm run build

# Änderungen hochladen
git add .
git commit -m "Update website content"
git push

# Status prüfen
git status
```

## 🎯 Vorteile

- ✅ **Automatisch**: Kein manueller Upload nötig
- ✅ **Schnell**: Website ist sofort nach dem Push online
- ✅ **Sicher**: Nur gebaute Dateien werden hochgeladen
- ✅ **Versioniert**: Jeder Push erstellt eine neue Version
- ✅ **Überwachbar**: Du siehst den Status aller Deployments

## 🆘 Support

Bei Problemen:
1. Überprüfe die GitHub Actions Logs
2. Stelle sicher, dass alle Secrets korrekt gesetzt sind
3. Teste den lokalen Build mit `npm run build`
