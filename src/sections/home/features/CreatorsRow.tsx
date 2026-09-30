// CreatorsRow.tsx
import RevealSection from "@/components/animations/RevealSection";
import CreatorVisual from "./CreatorVisual";
import FeatureChecklist from "./FeatureChecklist";
import FeatureText from "./FeatureText";

export default function CreatorsRow() {
  return (
    // Text comes first in the HTML (better for reading order); on large screens the row is reversed
    <RevealSection className="flex flex-col gap-10 lg:flex-row-reverse lg:items-center lg:gap-10 xl:gap-[79px]">
      <FeatureText
        className="lg:flex-1"
        title="Create & Manage Courses Easily."
        titleClassName="max-w-[391px]"
        description={
          <>
            <strong className="font-bold text-[#242528]">ByteSpace</strong> supports individuals or entities in
            the creation, publication, and administration of educational courses.
          </>
        }
        descriptionClassName="max-w-[574px]"
      >
        <FeatureChecklist />
      </FeatureText>

      <CreatorVisual />
    </RevealSection>
  );
}
