interface BulletListProps {
  items: readonly string[];
}

export default function BulletList({ items }: BulletListProps) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2 text-sm leading-relaxed text-muted"
        >
          <span className="text-accent" aria-hidden="true">
            –
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
