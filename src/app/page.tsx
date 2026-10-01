import HeroSection from "@/sections/home/hero/HeroSection";
import PartnersSection from "@/sections/home/partners/PartnersSection";
import DiscoverSection from "@/sections/home/discover/DiscoverSection";
import CoursesSection from "@/sections/home/courses/CoursesSection";
import LearningPathsSection from "@/sections/home/learning-paths/LearningPathsSection";
import FeaturesSection from "@/sections/home/features/FeaturesSection"; 
import TestimonialsSection from "@/sections/home/testimonials/TestimonialsSection";
import CtaSection from "@/sections/home/cta/CtaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnersSection />
      <DiscoverSection />
      <CoursesSection />
      <LearningPathsSection />
      <FeaturesSection />
      <CtaSection />
      <TestimonialsSection />
    </main>
  );
}
