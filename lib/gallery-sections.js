import { readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const publicImagesDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../public/images",
);
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

function formatSectionTitle(folderName) {
  return folderName
    .replaceAll(/[_-]+/g, " ")
    .replaceAll(/\b\w/g, (letter) => letter.toUpperCase());
}

export function getGallerySections() {
  return readdirSync(publicImagesDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const title = formatSectionTitle(entry.name);
      const images = readdirSync(path.join(publicImagesDirectory, entry.name))
        .filter((fileName) =>
          imageExtensions.has(path.extname(fileName).toLowerCase()),
        )
        .sort((first, second) => first.localeCompare(second))
        .map((fileName, index) => ({
          src: `/images/${encodeURIComponent(entry.name)}/${encodeURIComponent(fileName)}`,
          alt: `${title}, image ${index + 1}`,
        }));

      return { slug: entry.name, title, images };
    })
    .sort((first, second) => first.title.localeCompare(second.title));
}

export function getGallerySection(slug) {
  return getGallerySections().find((section) => section.slug === slug);
}
