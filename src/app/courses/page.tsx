import type { Metadata } from "next";
import CoursesCatalog from "@/sections/courses/CoursesCatalog";
import CoursesHero from "@/sections/courses/CoursesHero";

export const metadata: Metadata = {
  title: "Courses | ByteSpace",
  description: "Browse all available online courses on ByteSpace.",
};

export default function CoursesPage() {
  return (
    <main>
      <CoursesHero />
      <CoursesCatalog />
    </main>
  );
}
