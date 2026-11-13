# Upper Plain Studio Website Plan

## Goal

Create a static JavaScript Next.js portfolio for Upper Plain Studio, inspired by the reference site's sparse editorial feel while using original artwork, copy, and visual styling.

## Completed implementation

- Next.js App Router project configured for static export.
- Responsive home page with featured artwork and selected work.
- Gallery index backed by `lib/artworks.js`.
- Static artwork detail pages with previous/next navigation.
- About, contact, and journal pages.
- Keyboard-friendly semantic navigation, skip link, focus states, alt text, and reduced-motion support.
- Local JPG artwork copied to `public/images/` for static hosting.
- Responsive editorial styling in `app/globals.css`.
- Mailto contact fallback documented for later replacement with a form provider.

## Future content tasks

1. Replace placeholder studio details, email, Instagram URL, location, and biography with final content.
2. Review the artwork titles, descriptions, medium, dimensions, and ordering in `lib/artworks.js`.
3. Decide whether the full image set should be split into named collections.
4. Compress or create responsive derivatives for the largest JPGs before production deployment.
5. Replace the mailto form with a static-compatible provider such as Formspree, Basin, or Netlify Forms if required.
6. Add the final domain to metadata, canonical URLs, sitemap, and Open Graph configuration.

## Verification

- `npm run build` must complete successfully and export the static site to `out/`.
- Check `/`, `/gallery`, artwork detail pages, `/about`, `/contact`, `/blog`, and journal entries on mobile and desktop.
- Test keyboard navigation, focus visibility, form labels, image alt text, and reduced-motion behavior.
- Run an accessibility and performance audit after final copy and image optimization are complete.
