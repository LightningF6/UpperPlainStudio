import Link from "next/link";
import { getGallerySections } from "@/lib/gallery-sections";

export const metadata = {
  title: "Gallery",
  description: "Browse paintings by collection at Upper Plain Studio.",
};

export default function GalleryPage() {
  const sections = getGallerySections();

  return (
    <section className="gallery-page page-padding">
      <div className="page-heading">
        <p className="eyebrow">The collection</p>
        <h1>Browse by collection</h1>
        <p>Explore paintings grouped by medium, scale, and subject.</p>
      </div>
      <div className="gallery-sections">
        {sections.map((section) => (
          <Link
            className="gallery-section-card"
            href={`/gallery/section/${section.slug}`}
            key={section.slug}
          >
            {section.images[0] ? (
              <img src={section.images[0].src} alt={section.images[0].alt} />
            ) : (
              <div className="gallery-section-empty" aria-hidden="true" />
            )}
            <span className="gallery-section-caption">
              <span>{section.title}</span>
              <span>{String(section.images.length).padStart(2, "0")}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
