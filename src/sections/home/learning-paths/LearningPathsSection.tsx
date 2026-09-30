import Reveal from "@/components/animations/Reveal";
import RevealSection from "@/components/animations/RevealSection";
import LearningPathCard from "@/components/cards/LearningPathCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { LEARNING_PATHS } from "@/data/learning-paths";

export default function LearningPathsSection() {
  return (
    <RevealSection className="bg-soft px-4 pb-16 pt-14 md:px-6 md:pb-30 md:pt-20">
      <Reveal>
        <SectionHeading
          size="md"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />
      </Reveal>

      <ul className="mx-auto mt-8 grid max-w-[1200px] grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:mt-[68px] lg:grid-cols-6 xl:gap-10">
        {LEARNING_PATHS.map((path) => (
          <Reveal as="li" key={path.slug}>
            <LearningPathCard {...path} />
          </Reveal>
        ))}
      </ul>
    </RevealSection>
  );
}
