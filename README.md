# PAGE-WEB

Ce projet contient une petite page web statique (HTML/CSS/JS) utilisée comme démonstration. Le contenu est rédigé en français et l'architecture est volontairement simple pour faciliter la lecture et la personnalisation.

## Structure du projet

- `src/`
	- `index.html` : page d'accueil du site.
	- `about.html` : page « À propos » avec des informations supplémentaires.
	- `style.css` : feuilles de style principales.
	- `java.js` : script JavaScript associé (nom non standard mais présent dans le dépôt).
- `assets/` : ressources (polices, licences, fichiers de police)
	- `quicksand/` : police Quicksand incluse (fichiers de métadonnées et licence).

## Présentation de la page

La page présente une mise en page simple avec une typographie soignée (police Quicksand fournie) et une structure minimale : en-tête, contenu principal, et pied de page. Le CSS se trouve dans `src/style.css` et le comportement dynamique éventuel dans `src/java.js`.

Utilisations typiques :
- Base pour un petit portfolio ou une page d'information.
- Exercice pédagogique pour apprendre le HTML/CSS/JS.

## Comment visualiser la page localement

1. Ouvrez le dossier `src/` dans votre explorateur de fichiers.
2. Double-cliquez sur `index.html` pour l'ouvrir dans votre navigateur par défaut.

Pour un serveur de développement simple (recommandé si vous utilisez des imports locaux ou voulez un rechargement) :

- Avec Python 3 installé (Windows PowerShell) :

```powershell
cd src; python -m http.server 8000
```

Puis ouvrez http://localhost:8000 dans votre navigateur.

## Aperçu (Screensite)

Voici un aperçu de la page (placeholder) nommé "Screensite". L'image est fournie dans `assets/Screensite.png`.

![Screensite preview](assets/Screensite.png)
