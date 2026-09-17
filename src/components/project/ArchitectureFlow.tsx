interface ArchitectureFlowProps {
  steps: readonly string[];
}

// Plain semantic HTML/CSS flow — no diagram library. An <ol> conveys the
// sequence to assistive tech independent of the decorative arrows.
export default function ArchitectureFlow({ steps }: ArchitectureFlowProps) {
  return (
    <ol className="flex max-w-md flex-col">
      {steps.map((step, index) => (
        <li key={step}>
          <span className="block rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <span
              className="my-1 block text-center text-muted"
              aria-hidden="true"
            >
              ↓
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
