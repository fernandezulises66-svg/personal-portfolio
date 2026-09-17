import Image from "next/image";
import type { ProjectScreenshot } from "@/types/project";

interface ProjectGalleryProps {
  screenshots: readonly ProjectScreenshot[];
}

// object-contain (not cover) inside a fixed-ratio frame — screenshots come
// from very different UIs (dense admin tables vs. narrow chat cards) and
// cropping risks cutting the exact detail a caption is pointing at.
export default function ProjectGallery({ screenshots }: ProjectGalleryProps) {
  const gridClass =
    screenshots.length === 1
      ? "grid-cols-1 max-w-xl"
      : "grid-cols-1 sm:grid-cols-2";

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {screenshots.map((screenshot) => (
        <figure
          key={screenshot.src}
          className="overflow-hidden rounded-lg border border-border bg-surface"
        >
          <div className="relative aspect-video w-full bg-background">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
          {screenshot.caption ? (
            <figcaption className="border-t border-border px-4 py-3 text-sm text-muted">
              {screenshot.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
