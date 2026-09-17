import { profile } from "@/data/profile";

export default function Contact() {
  const links = [
    profile.email
      ? { label: "Email", href: `mailto:${profile.email}` }
      : null,
    profile.linkedinUrl
      ? { label: "LinkedIn", href: profile.linkedinUrl }
      : null,
    profile.githubUrl ? { label: "GitHub", href: profile.githubUrl } : null,
  ].filter((link): link is { label: string; href: string } => link !== null);

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="rounded-xl border border-border bg-surface px-6 py-14 text-center sm:px-12">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Get in touch
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base text-muted">
          Interested in AI, data or software work? You can reach me by
          email, LinkedIn, or explore my work on GitHub.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {links.length > 0 ? (
            links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noreferrer"}
                className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
              >
                {link.label}
              </a>
            ))
          ) : (
            <p className="text-sm text-muted">
              Contact details will be added soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
