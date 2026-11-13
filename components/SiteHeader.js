"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isSelected(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Upper Plain Studio home">
        Upper Plain Studio
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {links.map((link) => {
          const selected = isSelected(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={selected ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
        <ThemeToggle />
      </nav>
    </header>
  );
}
