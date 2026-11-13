import { cpSync, mkdirSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const sourceDirectory = path.join(projectRoot, "images");
const publicDirectory = path.join(projectRoot, "public", "images");

mkdirSync(publicDirectory, { recursive: true });

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

for (const entry of readdirSync(sourceDirectory, { withFileTypes: true })) {
  const sourcePath = path.join(sourceDirectory, entry.name);
  const destinationPath = path.join(publicDirectory, entry.name);

  if (entry.isDirectory()) {
    cpSync(sourcePath, destinationPath, { recursive: true });
    continue;
  }

  if (imageExtensions.has(path.extname(entry.name).toLowerCase())) {
    cpSync(sourcePath, destinationPath);
  }
}
