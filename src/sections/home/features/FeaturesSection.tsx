// FeaturesSection.tsx
import GlowBackground from "@/components/ui/GlowBackground";
import CreatorsRow from "./CreatorsRow";
import GrowthRow from "./GrowthRow";

export default function FeaturesSection() {
  return (
    <div className="relative isolate overflow-hidden bg-surface">
      <GlowBackground />

      <div className="mx-auto flex max-w-300 flex-col gap-16 px-4 py-16 md:gap-[72px] md:px-6 md:py-[120px] xl:px-0">
        <GrowthRow />
        <CreatorsRow />
      </div>
    </div>
  );
}
