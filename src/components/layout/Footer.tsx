import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted sm:px-6 lg:px-8">
        <p>
          &copy; {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
