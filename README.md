# FasoLab Virtuel

Site vitrine de FasoLab Virtuel, construit avec **Next.js 14 (App Router)**,
**TypeScript** et **Tailwind CSS**.

## Structure

```
app/
  layout.tsx                     # Layout global (police, Navbar, Footer)
  page.tsx                       # Accueil
  (marketing)/
    features/page.tsx
    packs/page.tsx
    pricing/page.tsx
    demo/page.tsx
    about/page.tsx
    contact/page.tsx
  (auth)/
    login/page.tsx
    signup/page.tsx
  (legal)/
    privacy/page.tsx
    terms/page.tsx
  api/
    contact/route.ts
    lead/route.ts

components/
  ui/                             # Button, Badge
  Navbar.tsx
  Footer.tsx
  Hero.tsx
  FeatureCard.tsx
  PricingCard.tsx
  Gant3D.tsx                      # Vitrine du bracelet capteur

lib/
  api.ts                          # Appels vers les routes /api
  constants.ts                    # Contenu du site (nav, tarifs, fonctionnalités...)

assets/
  images/                         # Logo, photos du capteur, captures des labos
  models/                         # Réservé aux futurs modèles 3D
```

## Démarrer le projet

```bash
npm install
npm run dev
```

Le site est alors disponible sur http://localhost:3000

## Build de production

```bash
npm run build
npm run start
```

## Palette de couleurs

- Vert principal : `#10B981` (survol `#059669`)
- Bleu marine : `#0D1B3E`
- Fond vert très clair : `#ECFDF5`

## Backend externe

Le site respecte l'architecture avec routes API internes (`app/api/contact`,
`app/api/lead`), qui servent de **proxy côté serveur** vers votre backend
externe réel — ça évite tout souci de CORS côté navigateur.

- `POST /api/contact` → relaie vers `{NEXT_PUBLIC_API_URL}/public/contact`
- `POST /api/lead` → relaie vers `{NEXT_PUBLIC_API_URL}/public/demo`
  (utilisé par le formulaire `/demo` et par les futurs boutons "Demander une
  démo" des offres de tarifs)
- `lib/api.ts` → `sendContact()` et `sendDemo()` appellent ces routes
  internes ; `getPacks()` appelle directement le backend externe (GET, pas de
  souci CORS pour l'instant)
- URL du backend configurée via `NEXT_PUBLIC_API_URL` (voir
  `.env.local.example`), avec `http://localhost:8001/api` par défaut
- `getPacks()` est prêt mais **pas encore branché** sur la page `/packs` —
  cette page reste sur son contenu statique tant que la forme exacte de la
  réponse de l'API n'est pas connue. Partagez un exemple de réponse et je la
  branche.

## Notes

- Les images du bracelet capteur (`assets/images/capteur-*.png`) sont vos
  photos réelles du prototype.
