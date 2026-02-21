# KON-Play Studio — Vercel Deployment Guide

## Projektstruktur

```
konplay-vercel/
├── api/
│   └── generate.js      ← Serverless Function (Gemini API Proxy)
├── public/
│   └── index.html       ← Frontend App
├── vercel.json          ← Vercel Konfiguration
└── README.md
```

---

## 🚀 Deployment auf Vercel

### Schritt 1 — GitHub Repository erstellen

1. Gehe zu [github.com](https://github.com) → **New repository**
2. Name: `konplay-studio`
3. **Private** wählen (empfohlen, da der API-Key serverseitig liegt)
4. Lade alle Dateien dieses Ordners hoch (drag & drop oder Git push)

---

### Schritt 2 — Vercel Projekt anlegen

1. Gehe zu [vercel.com](https://vercel.com) → **Add New Project**
2. GitHub-Repository `konplay-studio` importieren
3. **Framework Preset**: Other
4. **Root Directory**: `/` (Standard)
5. Klicke **Deploy** — Vercel erkennt `vercel.json` automatisch

---

### Schritt 3 — API Key hinterlegen ⚠️

**Das ist der wichtigste Schritt!**

1. Nach dem Deploy: Im Vercel Dashboard → dein Projekt → **Settings**
2. Linkes Menü: **Environment Variables**
3. Klicke **Add New**:

| Name | Value |
|------|-------|
| `GEMINI_API_KEY` | `Dein-Gemini-API-Key` |

4. Bei **Environment** alle drei anklicken: ✅ Production ✅ Preview ✅ Development
5. **Save** klicken
6. Dann: **Deployments** → neuestes Deployment → **Redeploy** (damit der Key aktiv wird)

**Wo bekomme ich den API Key?**
→ [aistudio.google.com](https://aistudio.google.com) → Get API Key → Create API Key

---

### Schritt 4 — Fertig!

Deine App läuft unter: `https://konplay-studio.vercel.app`

---

## 🔒 Sicherheit

- Der `GEMINI_API_KEY` ist **nur serverseitig** in der Vercel Serverless Function sichtbar
- Der Browser sieht den Key **niemals**
- Alle Gemini-Anfragen laufen über `/api/generate` als Proxy

---

## Lokales Testen

```bash
npm install -g vercel
vercel dev
```

Dann in einem anderen Terminal `.env.local` anlegen:

```
GEMINI_API_KEY=dein-key-hier
```
