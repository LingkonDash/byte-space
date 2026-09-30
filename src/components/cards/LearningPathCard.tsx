import Link from "next/link";
import MaskImage from "@/components/ui/MaskImage";
import type { LearningPath } from "@/types";

export default function LearningPathCard({ label, slug, icon }: LearningPath) {
  return (
    <Link
      href={`/courses?category=${slug}`}
      className="flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-border p-2 transition duration-300 hover:-translate-y-1 hover:bg-white/70"
    >
      <span className="grid size-[60px] place-items-center rounded-full bg-secondary">
        <MaskImage src={icon} className="size-9 bg-[#242528]" />
      </span>
      <span className="text-lg font-medium leading-7 text-[#242528] md:text-xl">{label}</span>
    </Link>
  );
}