import Image from "next/image";
import {
  HiOutlineFolder,
  HiOutlineIdentification,
  HiOutlineChatBubbleLeftRight,
  HiOutlineVideoCamera,
} from "react-icons/hi2";
import Reveal from "@/components/animations/Reveal";
import { COURSE_INCLUDES, SIDEBAR_LESSONS } from "@/data/course-detail";

const INCLUDE_ICONS = [
  HiOutlineFolder,
  HiOutlineVideoCamera,
  HiOutlineIdentification,
  HiOutlineChatBubbleLeftRight,
];

const PITCH = "Ready to Dive In? Enroll Now and Start Building Your Digital Future!";

type CourseSidebarProps = {
  className?: string;
};

export default function CourseSidebar({ className = "" }: CourseSidebarProps) {
  return (
    <Reveal as="aside" className={`relative z-10 ${className}`}>
      <div className="flex flex-col gap-6 rounded-3xl border border-border bg-white p-6 shadow-[0_24px_60px_rgb(0_0_0/0.12)] md:p-10">
        <h2 className="text-2xl font-semibold leading-8">112 Lessons (24 hours)</h2>

        {/* Lesson preview */}
        <ul className="flex flex-col gap-3">
          {SIDEBAR_LESSONS.map(({ number, title, duration }) => (
            <li key={number} className="flex items-start justify-between gap-4 font-medium text-black">
              <span className="flex gap-2">
                <span className="w-6 shrink-0">{number}</span>
                <span className="max-w-[200px]">{title}</span>
              </span>
              <span className="shrink-0 font-normal text-brand-blue">{duration}</span>
            </li>
          ))}
          <li className="text-foreground-muted">99 more videos</li>
        </ul>

        {/* Price and enroll */}
        <div className="flex flex-col gap-6">
          <p className="text-foreground-muted">{PITCH}</p>
          <p className="flex items-baseline">
            <span className="font-heading text-4xl font-semibold leading-[44px] tracking-[-0.01em] text-brand-blue">
              $25
            </span>
            <span className="text-foreground-muted">/lifetime</span>
          </p>
          <button
            type="button"
            className="h-[46px] rounded-3xl bg-secondary text-lg font-medium text-[#242528] transition-opacity hover:opacity-90"
          >
            Enroll Now
          </button>
        </div>

        {/* What's included */}
        <h3 className="text-xl font-semibold leading-7">This course include</h3>
        <ul className="flex flex-col gap-3">
          {COURSE_INCLUDES.map((label, index) => {
            const Icon = INCLUDE_ICONS[index];
            return (
              <li key={label} className="flex items-center gap-2 text-foreground-muted">
                <Icon size={24} className="shrink-0 text-brand-blue" />
                {label}
              </li>
            );
          })}
        </ul>

        <hr className="border-[#d1d1d1]" />

        {/* Creator */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/avatars/avatar-14.webp"
              alt=""
              width={52}
              height={52}
              className="size-[52px] rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-medium leading-7 text-black">PurePearl Studio</p>
              <p className="text-foreground-muted">Professional Creator</p>
            </div>
          </div>
          <p className="text-foreground-muted">{PITCH}</p>
          <button
            type="button"
            className="w-fit rounded-3xl border border-[#242528] px-4 py-2 font-medium text-[#242528] transition-colors hover:bg-[#242528] hover:text-white"
          >
            See Full Profile
          </button>
        </div>
      </div>
    </Reveal>
  );
}
