// GrowthRow.tsx
import RevealSection from "@/components/animations/RevealSection";
import FeatureText from "./FeatureText";
import GrowthVisual from "./GrowthVisual";
import StatsList from "./StatsList";

export default function GrowthRow() {
  return (
    <RevealSection className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-10 xl:gap-[63px]">
      <FeatureText
        className="lg:flex-1"
        title="Your Path to Professional Growth Starts Here!"
        titleClassName="max-w-[577px]"
        description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
        descriptionClassName="max-w-[477px]"
      >
        <StatsList />
      </FeatureText>

      <GrowthVisual />
    </RevealSection>
  );
}
