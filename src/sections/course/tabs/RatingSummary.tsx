import StarRating from "@/components/ui/StarRating";
import { RATING_AVERAGE, RATING_ROWS } from "@/data/course-detail";

export default function RatingSummary() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-border bg-white p-5 md:flex-row md:items-center md:p-10">
      <div className="flex flex-col items-center justify-center rounded-lg bg-[#f5f5f6] px-10 py-6 md:py-10">
        <p className="text-sm leading-5 text-foreground-muted">Ratings</p>
        <p className="font-heading text-[1.75rem] font-semibold leading-9 tracking-[-0.01em] text-[#242528]">
          {RATING_AVERAGE}
        </p>
      </div>

      <ul className="flex flex-1 flex-col gap-1">
        {RATING_ROWS.map(({ stars, percent, count }) => (
          <li key={stars} className="flex items-center gap-3 md:gap-4">
            <div className="h-2 min-w-0 flex-1 rounded-full bg-[#ebebed]">
              <div className="h-full rounded-full bg-secondary" style={{ width: `${percent}%` }} />
            </div>
            <StarRating rating={stars} className="size-4 md:size-6" />
            <span className="w-10 text-right text-[#b0b0b0]">{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
