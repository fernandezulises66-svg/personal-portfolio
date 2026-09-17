import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <p className="font-mono text-sm text-accent">{profile.role}</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-4 max-w-2xl text-xl text-foreground/90">
        {profile.headline}
      </p>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
        {profile.shortBio}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
        >
          View Projects
        </a>
        {profile.cvUrl ? (
          <a
            href={profile.cvUrl}
            download
            aria-label="Download CV (PDF)"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
          >
            Download CV
          </a>
        ) : null}
        {profile.githubUrl ? (
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </section>
  );
}
