import type { EvaluationGroup } from "@/types/project";

interface MetricGroupListProps {
  groups: readonly EvaluationGroup[];
}

export default function MetricGroupList({ groups }: MetricGroupListProps) {
  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="font-mono text-xs uppercase tracking-wide text-muted">
            {group.title}
          </h3>
          <dl className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {group.results.map((result) => (
              <div
                key={result.label}
                className="flex items-baseline justify-between gap-3 rounded-md border border-border bg-background px-3 py-2"
              >
                <dt className="text-sm text-muted">{result.label}</dt>
                <dd className="font-mono text-sm font-medium text-foreground">
                  {result.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
