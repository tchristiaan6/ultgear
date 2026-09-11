# ultgear.co

Showcase site for ULT Gear, a one-person ultralight travel gear lab that ran 2023 to 2024. Built as a static Astro site from the project's photos, tech packs, factory correspondence, and design documents.

- `content/ultgear.json` holds all copy, the product list, and gallery paths. Edit product stories and statuses there.
- `image-manifest.json` records where each image in `public/images/` came from in the original archive.
- `public/images/products/<slug>/` holds each product's photos and rendered document pages.

```bash
npm install
npm run dev
npm run build
```

Deployed on Vercel from `main`.
