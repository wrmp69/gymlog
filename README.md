# GymLog K&J — PWA

## Fichiers à uploader sur GitHub

```
gymlog/
├── index.html        ← l'appli principale
├── manifest.json     ← configuration PWA
├── sw.js             ← service worker (offline)
├── icon-192.png      ← icône téléphone
└── icon-512.png      ← icône splash screen
```

## Installer sur le téléphone

### iPhone (Safari obligatoire)
1. Ouvre l'URL dans Safari
2. Bouton partage (carré avec flèche) → "Sur l'écran d'accueil"
3. L'appli apparaît comme une vraie appli native

### Android (Chrome)
1. Ouvre l'URL dans Chrome
2. Une bannière "Installer l'application" apparaît automatiquement
3. Ou : menu ⋮ → "Ajouter à l'écran d'accueil"

## Fonctionnalités PWA

- ✅ Fonctionne **hors-ligne** après la première visite
- ✅ **Toutes les données** sauvegardées localement (localStorage)
- ✅ Icône sur l'écran d'accueil
- ✅ Plein écran (pas de barre d'adresse)
- ✅ Mise à jour automatique détectée avec notification
- ✅ Fonctionne sur iOS et Android

## Mise à jour de l'appli

1. Modifie `index.html`
2. Dans `sw.js`, change `gymlog-v1` en `gymlog-v2` (important pour vider le cache)
3. Upload le fichier modifié sur GitHub
4. L'appli détecte la mise à jour et propose de recharger
