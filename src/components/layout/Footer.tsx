import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { label: "GitHub", href: profile.social.githubUrl },
    { label: "LinkedIn", href: profile.social.linkedinUrl },
  ].filter(
    (link): link is { label: string; href: string } => Boolean(link.href),
  );

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          &copy; {year} {profile.name}
        </p>
        {links.length > 0 ? (
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </footer>
  );
}
