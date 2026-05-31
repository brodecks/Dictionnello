# Dictionnello

Extension navigateur simple pour rechercher la définition d'un terme français en un clic, interrogeant l'API du Wiktionnaire (fr.wiktionary.org).
Disponible uniquement sur firefox : https://addons.mozilla.org/fr/firefox/addon/dictionnello/

> ⚠️ **À venir** : Dictionnello sera prochainement disponible sur le [Chrome Web Store](https://chrome.google.com). Pour l'instant, installez-la en mode développeur si vous utilisez chrome (voir ci-dessous).

## Fonctionnalités

- Rechercher un mot et afficher son extrait (définition) depuis le Wiktionnaire.
- Interface légère dans une popup.
- Permissions minimales : `storage` et accès à fr.wiktionary.org.

## Fichiers principaux

- [manifest.json](manifest.json) — manifeste (manifest v3)
- [popup.html](popup.html) — interface utilisateur
- [popup.js](popup.js) — logique de recherche

## Prérequis

- Google Chrome, Firefox, ou navigateur basé sur Chromium
- Connexion Internet

## Installation (mode développeur)

### Chrome

1. Ouvrir Chrome et accéder à `chrome://extensions/`.
2. Activer **Mode développeur** (coin supérieur droit).
3. Cliquer sur **Charger l'extension non empaquetée** ("Load unpacked").
4. Sélectionner le dossier du projet.
5. L'extension apparaîtra sous le nom **Dictionnello**. Pour l'afficher dans la barre d'outils, cliquer sur l'icône puzzle puis sur l'épingle.

### Firefox

1. Ouvrir Firefox et accéder à `about:debugging#/runtime/this-firefox`.
2. Cliquer sur **Charger une extension temporaire**.
3. Sélectionner le fichier `manifest.json` du projet.
4. L'extension apparaîtra sous le nom **Dictionnello**.

## Utilisation

- Cliquer sur l'icône de l'extension pour ouvrir la popup.
- Saisir un terme et appuyer sur Entrée ou cliquer sur Rechercher.
- La définition (extrait) s'affiche dans la popup.

## Développement & Debug

- Après modification des fichiers, aller sur `chrome://extensions/` et cliquer sur **Recharger** sous l'extension.
- Inspecter la popup : ouvrir la popup, puis clic droit → **Inspecter**.
- Pour inspecter un service worker (si utilisé) : dans `chrome://extensions/` cliquer sur **Service worker** → **Inspecter**.

## API utilisée

L'extension interroge l'API MediaWiki du Wiktionnaire français. Exemple (cURL) :

```bash
curl "https://fr.wiktionary.org/w/api.php?action=query&prop=extracts&format=json&exintro=1&explaintext=1&titles=chat&origin=*"
```

- Le paramètre `origin=*` est important pour autoriser les requêtes cross-origin depuis le contexte d'une extension/web.
- Le manifeste contient `host_permissions` pour `https://fr.wiktionary.org/*` (voir [manifest.json](manifest.json)).

## Remarques

- Si aucune définition n'est trouvée, vérifier la connexion et ouvrir les DevTools pour consulter les logs.
- L'extension utilise la permission `storage` pour stocker d'éventuelles préférences.

## Contribuer

Forkez le dépôt, faites vos modifications et envoyez une pull request. Ouvrez une issue pour discuter des améliorations ou des bugs.
