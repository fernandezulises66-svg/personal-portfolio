import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = `${profile.name} | AI, Data & Software`;
const siteDescription =
  "Portfolio of Ulises Fernandez Pertierra, Data & Systems Analyst focused on AI agents, data systems, workflow automation, and full-stack software.";

// metadataBase/canonical and openGraph.url are intentionally omitted: the
// final deployment domain isn't known yet (Iteration 8). Adding a relative
// openGraph/twitter image path without metadataBase would fail the build, so
// social preview images are provided entirely via the opengraph-image.tsx
// file convention instead, which Next.js resolves to an absolute URL itself.
export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  email: profile.email ?? undefined,
  sameAs: [profile.githubUrl, profile.linkedinUrl].filter(
    (url): url is string => Boolean(url),
  ),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
