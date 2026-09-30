// FeatureChecklist.tsx
import { HiCheckCircle } from "react-icons/hi2";
import { FEATURE_POINTS } from "@/data/features";

export default function FeatureChecklist() {
  return (
    <ul className="flex flex-col gap-4">
      {FEATURE_POINTS.map((point) => (
        <li key={point} className="flex items-center gap-2 text-base text-[#242528] md:text-lg md:leading-7">
          <HiCheckCircle size={24} className="shrink-0 text-brand-blue" />
          {point}
        </li>
      ))}
    </ul>
  );
}
