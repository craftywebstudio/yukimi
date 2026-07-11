# Yukimi — site vitrine

Site vitrine du restaurant japonais Yukimi (Montpellier), construit avec Astro
et pensé pour un hébergement gratuit sur Cloudflare Pages.

## Développement local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
```

Le résultat est généré dans `dist/`.

## Mettre à jour le contenu

- **Horaires, tarifs, coordonnées, bandeau de fermeture** → `src/data/restaurant.ts`
- **Carte / menu** → `src/data/menu.ts`
- **Photos** → dossier `public/images/`

Après une modification, il suffit de faire :

```bash
git add .
git commit -m "Mise à jour du contenu"
git push
```

Cloudflare Pages redéploie automatiquement le site à chaque `push`.

## Déploiement sur Cloudflare Pages (à faire une seule fois)

1. Pousser ce projet sur un repo GitHub (voir instructions fournies séparément).
2. Sur [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Sélectionner le repo `yukimi`.
4. Framework preset : **Astro** (détecté automatiquement).
   - Build command : `npm run build`
   - Build output directory : `dist`
5. Déployer. Cloudflare fournit une URL en `*.pages.dev` immédiatement,
   un nom de domaine personnalisé peut être ajouté ensuite dans les réglages du projet.
