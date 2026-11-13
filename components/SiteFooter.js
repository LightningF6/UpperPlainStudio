import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-kicker">Upper Plain Studio</p>
        <p className="footer-note">
          Paintings made slowly, in conversation with weather and place.
        </p>
      </div>
      <div className="footer-links">
        <a href="mailto:studio@upperplain.studio">studio@upperplain.studio</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          Instagram ↗
        </a>
        <Link href="/contact">Enquiries</Link>
      </div>
      <p className="footer-legal">© 2026 Upper Plain Studio</p>
    </footer>
  );
}
