import Link from "next/link";

export default function GalleryGrid({ artworks }) {
  return (
    <div className="gallery-grid">
      {artworks.map((artwork, index) => (
        <Link
          className={`artwork-card artwork-card-${(index % 4) + 1}`}
          href={`/gallery/${artwork.slug}`}
          key={artwork.slug}
        >
          <div className="artwork-image-wrap">
            <img
              src={artwork.image}
              alt={artwork.alt}
              loading={index < 4 ? "eager" : "lazy"}
            />
          </div>
          <span className="artwork-caption">
            <span>{artwork.title}</span>
            <span>{artwork.year}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
