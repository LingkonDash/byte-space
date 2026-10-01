import Reveal from "@/components/animations/Reveal";
import RevealSection from "@/components/animations/RevealSection";
import CourseCard from "@/components/cards/CourseCard";
import { COURSES } from "@/data/courses";

export default function CoursesSection() {
  return (
    <RevealSection className="bg-soft px-4 md:px-6">
      <ul className="mx-auto grid max-w-300 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {COURSES.map((course) => (
          <Reveal as="li" key={course.id}>
            <CourseCard course={course} />
          </Reveal>
        ))}
      </ul>
    </RevealSection>
  );
}