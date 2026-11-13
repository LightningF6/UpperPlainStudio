import Link from "next/link";
import { notFound } from "next/navigation";
import { artworks, getArtwork } from "@/lib/artworks";

export function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const artwork = getArtwork(slug);
  return artwork
    ? {
        title: artwork.title,
        description: `${artwork.title}, ${artwork.year}. ${artwork.medium}.`,
      }
    : {};
}

export default async function ArtworkPage({ params }) {
  const { slug } = await params;
  const artwork = getArtwork(slug);
  if (!artwork) notFound();

  const currentIndex = artworks.findIndex((item) => item.slug === artwork.slug);
  const previous =
    artworks[(currentIndex - 1 + artworks.length) % artworks.length];
  const next = artworks[(currentIndex + 1) % artworks.length];

  return (
    <section className="artwork-page page-padding">
      <Link className="back-link" href="/gallery">
        ← Back to gallery
      </Link>
      <div className="artwork-detail">
        <div className="artwork-detail-image">
          <img src={artwork.image} alt={artwork.alt} />
        </div>
        <aside className="artwork-detail-meta">
          <p className="eyebrow">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(artworks.length).padStart(2, "0")}
          </p>
          <h1>{artwork.title}</h1>
          <dl>
            <div>
              <dt>Year</dt>
              <dd>{artwork.year}</dd>
            </div>
            <div>
              <dt>Medium</dt>
              <dd>{artwork.medium}</dd>
            </div>
            <div>
              <dt>Format</dt>
              <dd>{artwork.dimensions}</dd>
            </div>
          </dl>
          <p className="detail-note">
            A study in looking slowly: letting the edges of weather, distance,
            and memory stay visible in the paint.
          </p>
          <Link className="text-link" href="/contact">
            Enquire about this work <span aria-hidden="true">↗</span>
          </Link>
        </aside>
      </div>
      <nav className="artwork-pagination" aria-label="Artwork navigation">
        <Link href={`/gallery/${previous.slug}`}>
          <span>Previous</span>
          <strong>{previous.title}</strong>
        </Link>
        <Link href={`/gallery/${next.slug}`}>
          <span>Next</span>
          <strong>{next.title}</strong>
        </Link>
      </nav>
    </section>
  );
}
