import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    profile.email ? { label: "Email", href: `mailto:${profile.email}` } : null,
    profile.linkedinUrl
      ? { label: "LinkedIn", href: profile.linkedinUrl }
      : null,
    profile.githubUrl ? { label: "GitHub", href: profile.githubUrl } : null,
  ].filter((link): link is { label: string; href: string } => link !== null);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:px-6 lg:px-8">
        <p>
          &copy; {year} {profile.name}
        </p>
        {links.length > 0 ? (
          <ul className="flex flex-wrap gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noreferrer"}
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
