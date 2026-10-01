import { HiOutlineVideoCamera } from "react-icons/hi2";
import ContentHeading from "@/components/ui/ContentHeading";
import { MODULES } from "@/data/course-detail";

export default function LessonsTab() {
  return (
    <div className="flex flex-col gap-6">
      <ContentHeading>Explore the Modules</ContentHeading>
      <p className="text-foreground-muted">
        Immerse yourself in the course content as we break down each module into comprehensive
        lessons, providing practical insights and hands-on experiences.
      </p>

      <ContentHeading>Lesson List</ContentHeading>
      <ul className="flex flex-col gap-6">
        {MODULES.map(({ title, description }) => (
          <li key={title} className="flex gap-3">
            <span className="mt-0.5 grid size-14 shrink-0 place-items-center rounded-2xl bg-secondary text-[#242528] md:size-[72px] md:rounded-3xl">
              <HiOutlineVideoCamera className="size-7 md:size-10" />
            </span>
            <div className="flex flex-col gap-1">
              <h4 className="font-sans text-base font-medium tracking-normal text-black">{title}</h4>
              <p className="text-foreground-muted">{description}</p>
            </div>
          </li>
        ))}
      </ul>

      <ContentHeading>Lesson Content</ContentHeading>
      <p className="text-foreground-muted">
        Engage with each lesson through captivating video content, detailed textual explanations,
        and interactive elements. Download resources, complete assignments, and test your
        understanding with quizzes.
      </p>

      <ContentHeading>Lesson Progress Tracking</ContentHeading>
      <p className="text-foreground-muted">
        Witness your growth as you complete lessons, with an intuitive progress tracking feature
        guiding you through your learning journey.
      </p>

      <div className="flex flex-col gap-2 rounded-2xl border border-border bg-white p-4 shadow-[0_4px_20px_rgb(0_0_0/0.05)]">
        <p className="text-sm leading-5 text-[#242528]">Learning Progress</p>
        <p className="font-heading text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#242528]">
          55%
        </p>
        <div className="h-2 overflow-hidden rounded-full bg-[#f6f6f6]">
          <div className="h-full w-[56%] rounded-full bg-secondary" />
        </div>
      </div>
    </div>
  );
}
