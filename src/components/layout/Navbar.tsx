import Link from "next/link";
import { profile } from "@/data/profile";

// Homepage-relative so they still resolve correctly from other routes
// (e.g. /projects/[slug]), not just from "/" itself.
const navLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Stack", href: "/#stack" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <nav
        className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="font-mono text-lg font-semibold text-foreground"
        >
          {profile.shortName}.
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          {profile.githubUrl ? (
            <li>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            </li>
          ) : null}
        </ul>

        <details className="md:hidden">
          <summary
            className="list-none rounded-md border border-border px-3 py-1.5 text-sm text-foreground [&::-webkit-details-marker]:hidden"
            aria-label="Open navigation menu"
          >
            Menu
          </summary>
          <ul className="absolute inset-x-4 top-full mt-2 space-y-1 rounded-lg border border-border bg-surface p-3 shadow-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm text-muted hover:bg-surface-hover hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {profile.githubUrl ? (
              <li>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-md px-3 py-2 text-sm text-muted hover:bg-surface-hover hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
            ) : null}
          </ul>
        </details>
      </nav>
    </header>
  );
}
