// StatsList.tsx
import { STATS } from "@/data/features";

export default function StatsList() {
  return (
    <ul className="flex gap-8 md:gap-14">
      {STATS.map(({ value, label }) => (
        <li key={label}>
          <p className="font-heading text-3xl font-medium leading-[44px] tracking-[-0.01em] text-brand-blue md:text-4xl">
            {value}
          </p>
          <p className="text-base text-foreground-muted md:text-lg md:leading-7">{label}</p>
        </li>
      ))}
    </ul>
  );
}
