import type { ModuleGroup } from "@/types/project";
import BulletList from "@/components/ui/BulletList";

interface GroupedListProps {
  groups: readonly ModuleGroup[];
}

export default function GroupedList({ groups }: GroupedListProps) {
  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="font-mono text-xs uppercase tracking-wide text-muted">
            {group.title}
          </h3>
          <div className="mt-3">
            <BulletList items={group.items} />
          </div>
        </div>
      ))}
    </div>
  );
}
