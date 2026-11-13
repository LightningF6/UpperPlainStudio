import Link from "next/link";
import { artworks } from "@/lib/artworks";

export const metadata = {
  title: "About",
  description: "About Upper Plain Studio and its landscape painting practice.",
};

export default function AboutPage() {
  return (
    <section className="about-page page-padding">
      <div className="about-grid">
        <div className="page-heading">
          <p className="eyebrow">The studio</p>
          <h1>Looking for the point where land turns into feeling.</h1>
        </div>
        <div className="about-copy">
          <p className="lead">
            Upper Plain Studio is a small painting practice interested in the
            atmosphere of a place: the weather moving across it, the memory held
            in its edges, and the marks that remain after looking for a long
            time.
          </p>
          <p>
            The work begins outside, usually with a camera or a notebook, and
            continues indoors through layers of paint. Landscapes are not copied
            so much as reassembled. Colour carries the weight of the day;
            texture keeps the uncertainty.
          </p>
          <p>
            The studio is currently working on a new group of paintings made
            across the open country and its changing seasons.
          </p>
          <Link className="text-link" href="/contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="about-image-grid" aria-label="Selected studio works">
        <img src={artworks[3].image} alt={artworks[3].alt} />
        <img src={artworks[8].image} alt={artworks[8].alt} />
      </div>
    </section>
  );
}
