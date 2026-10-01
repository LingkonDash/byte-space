import type { Metadata } from "next";
import RevealSection from "@/components/animations/RevealSection";
import CourseHero, { COURSE_GRID } from "@/sections/course/CourseHero";
import CourseSidebar from "@/sections/course/CourseSidebar";
import CourseTabs from "@/sections/course/CourseTabs";

export const metadata: Metadata = {
  title: "Build Digital Asset: A Comprehensive Guide",
};

export default function CourseDetailsPage() {
  return (
    <main>
      {/* --hero-h = height of the blue area. The sidebar is pulled up to overlap it. */}
      <RevealSection className="[--hero-h:800px] xl:[--hero-h:957px]">
        <CourseHero />

        <div className={`gap-10 pb-16 ${COURSE_GRID}`}>
          <CourseSidebar className="order-first -mt-8 lg:order-none lg:col-start-2 lg:row-start-1 lg:-mt-[calc(var(--hero-h)-416px)]" />
          <CourseTabs className="lg:col-start-1 lg:row-start-1 lg:pt-[63px]" />
        </div>
      </RevealSection>
    </main>
  );
}
