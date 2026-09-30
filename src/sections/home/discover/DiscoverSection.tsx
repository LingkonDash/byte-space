import Reveal from "@/components/animations/Reveal";
import RevealSection from "@/components/animations/RevealSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { CATEGORY_ROWS } from "@/data/categories";
import CategoryFilter from "./CategoryFilter";

export default function DiscoverSection() {
  return (
    <RevealSection className="bg-soft px-4 pb-16 pt-14 md:px-6 md:pb-[77px] md:pt-[72px]">
      <Reveal>
        <SectionHeading
          title="Discover Your Passion, Build Your Skills"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />
      </Reveal>

      <CategoryFilter rows={CATEGORY_ROWS} />
    </RevealSection>
  );
}