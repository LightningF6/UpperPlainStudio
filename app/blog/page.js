import Link from "next/link";

export const metadata = {
  title: "Journal",
  description: "Notes from the Upper Plain Studio practice.",
};

const entries = [
  {
    date: "12.08.26",
    title: "On keeping a horizon open",
    text: "A few notes on distance, restraint, and why a painting sometimes needs more sky.",
    slug: "keeping-a-horizon-open",
  },
  {
    date: "28.06.26",
    title: "The colour of weather",
    text: "Working through the blue-grey hour and the small decisions that make a landscape hold together.",
    slug: "the-colour-of-weather",
  },
  {
    date: "03.04.26",
    title: "First marks of the season",
    text: "A studio note from the beginning of a new group of paintings.",
    slug: "first-marks-of-the-season",
  },
];

export default function BlogPage() {
  return (
    <section className="blog-page page-padding">
      <div className="page-heading">
        <p className="eyebrow">Notes from the studio</p>
        <h1>Journal</h1>
        <p>
          Small observations on process, place, and the lives of paintings as
          they take shape.
        </p>
      </div>
      <div className="journal-list">
        {entries.map((entry) => (
          <article className="journal-entry" key={entry.slug}>
            <p className="eyebrow">{entry.date}</p>
            <div>
              <h2>{entry.title}</h2>
              <p>{entry.text}</p>
              <Link className="text-link" href={`/blog/${entry.slug}`}>
                Read note <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
