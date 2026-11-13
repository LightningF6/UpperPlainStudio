# Upper Plain Studio

A static-exportable Next.js portfolio for a landscape painting practice.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Content

Artwork metadata lives in `lib/artworks.js`. Add a new artwork object there and place its image in `public/images/`. The original source images are retained in `images/`.

The contact page currently uses a `mailto:` fallback. Replace the form action with a static form provider when a production enquiry workflow is chosen.

## Production build

```bash
npm run build
```

The static site is generated in `out/` and can be deployed to a static host.
