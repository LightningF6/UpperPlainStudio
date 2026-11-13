import Link from "next/link";
import { notFound } from "next/navigation";
import { getGallerySection, getGallerySections } from "@/lib/gallery-sections";

export function generateStaticParams() {
  return getGallerySections().map((section) => ({ slug: section.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const section = getGallerySection(slug);
  return section
    ? { title: section.title, description: `${section.title} collection.` }
    : {};
}

export default async function GallerySectionPage({ params }) {
  const { slug } = await params;
  const section = getGallerySection(slug);
  if (!section) notFound();

  return (
    <section className="gallery-section-page page-padding">
      <Link className="back-link" href="/gallery">
        Back to collections
      </Link>
      <div className="page-heading">
        <p className="eyebrow">The collection</p>
        <h1>{section.title}</h1>
        <p>{section.images.length} works</p>
      </div>
      <div className="section-image-grid">
        {section.images.map((image) => (
          <figure className="section-image" key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
