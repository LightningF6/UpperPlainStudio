import Link from "next/link";

const entries = {
  "keeping-a-horizon-open": {
    date: "12.08.26",
    title: "On keeping a horizon open",
    paragraphs: [
      "A horizon is a simple thing to paint and a difficult thing to leave alone. The temptation is to make it decisive: a line that closes the sky and tells the eye where to stop.",
      "Lately I have been trying to let that edge stay porous. A little more weather in the distance. A field that does not quite resolve. The painting becomes less about arriving at a view and more about remaining inside the looking.",
      "The best marks are often the ones that keep the door open.",
    ],
  },
  "the-colour-of-weather": {
    date: "28.06.26",
    title: "The colour of weather",
    paragraphs: [
      "Weather changes the colour of everything, but rarely in a way that can be named cleanly. Blue becomes a little warmer. Green holds a trace of grey. The ground borrows the light from the sky.",
      "In the studio, I work from these shifts rather than from a fixed palette. The first layers are usually too certain. It takes a few days of scraping, covering, and looking again for the atmosphere to find its way back in.",
    ],
  },
  "first-marks-of-the-season": {
    date: "03.04.26",
    title: "First marks of the season",
    paragraphs: [
      "The first painting in a new group is mostly a question. It carries the previous season in its surface, but it also asks what can be left behind.",
      "This one begins with a wide, pale sky and a darker line of ground. Everything after that is an adjustment: a scrape, a small interruption, a colour that was not planned but has to stay.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(entries).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const entry = entries[params.slug];
  return entry ? { title: entry.title, description: entry.paragraphs[0] } : {};
}

export default function JournalEntryPage({ params }) {
  const entry = entries[params.slug];
  if (!entry) return null;

  return (
    <article className="journal-detail page-padding">
      <Link className="back-link" href="/blog">
        ← Back to journal
      </Link>
      <div className="journal-detail-inner">
        <p className="eyebrow">{entry.date}</p>
        <h1>{entry.title}</h1>
        <div className="journal-body">
          {entry.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
