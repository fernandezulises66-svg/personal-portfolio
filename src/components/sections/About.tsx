import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading eyebrow="About" title="Background" />
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
        Ulises combines programming, data-oriented problem solving, and a
        broader academic background. A more detailed biography, education,
        and experience section will be added in a future iteration.
      </p>
    </section>
  );
}
