import { MdSignalCellularAlt } from "react-icons/md";
import { HiOutlineShare, HiOutlineUserGroup, HiStar } from "react-icons/hi2";
import Reveal from "@/components/animations/Reveal";
import GridBackground from "@/components/ui/GridBackground";
import { COURSE } from "@/data/course-detail";
import VideoPoster from "./VideoPoster";

const CHIP_ICONS = {
  level: MdSignalCellularAlt,
  rating: HiStar,
  students: HiOutlineUserGroup,
};

// Same two-column grid as the content below, so the video lines up with the tabs
export const COURSE_GRID =
  "mx-auto grid max-w-[1200px] px-4 md:px-6 lg:grid-cols-[minmax(0,1fr)_412px] lg:gap-10 xl:gap-[63px] xl:px-0";

export default function CourseHero() {
  const { title, subtitle, author, chips, poster } = COURSE;

  return (
    <div className="relative isolate overflow-hidden bg-brand-blue pb-14 pt-[104px] md:pt-[172px] lg:h-[var(--hero-h)] lg:pb-0">
      <GridBackground />

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6 px-4 md:flex-row md:items-start md:justify-between md:px-6 xl:px-0">
        <Reveal className="max-w-[769px]">
          <h1 className="text-[1.75rem] font-semibold leading-[1.25] text-white md:text-[32px] md:leading-10">
            {title}
          </h1>
          <p className="mt-2 font-heading text-lg font-semibold leading-7 tracking-[-0.01em] text-[#d1d1d1] md:text-xl">
            {subtitle}
          </p>
          <p className="mt-6 text-lg font-medium leading-7 text-[#d1d1d1]">
            by <span className="text-secondary">{author}</span>
          </p>

          <ul className="mt-6 flex flex-wrap gap-3 md:gap-4">
            {chips.map(({ icon, label }) => {
              const Icon = CHIP_ICONS[icon];
              return (
                <li
                  key={label}
                  className="flex h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-medium text-[#242528] md:px-6 md:text-base"
                >
                  <Icon size={24} />
                  {label}
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* From 1440px the Figma button sits 85px outside the content width */}
        <Reveal className="min-[1440px]:-mr-[85px]">
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-secondary px-6 font-medium text-[#242528] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <HiOutlineShare size={22} />
            Share
          </button>
        </Reveal>
      </div>

      <div className={`relative mt-8 md:mt-[59px] ${COURSE_GRID}`}>
        <Reveal>
          <VideoPoster src={poster} alt="Instructor introducing the course" />
        </Reveal>
      </div>
    </div>
  );
}
