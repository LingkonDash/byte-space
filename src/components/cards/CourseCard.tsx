import Image from "next/image";
import Link from "next/link";
import { HiOutlineStar } from "react-icons/hi2";
import { MdSignalCellularAlt } from "react-icons/md";
import AvatarStack from "@/components/ui/AvatarStack";
import type { Course } from "@/types";

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  const { title, author, image, lessons, duration, comments, level, rating, price, students, avatars } = course;
  const chips = [`${lessons} Lessons`, duration, `${comments} Comments`];

  return (
    <Link href="/courses/build-digital-asset" className="block h-full">
      <article className="group h-full rounded-3xl border border-border bg-white/60 p-4 pb-[21px] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgb(0_0_0/0.08)]">
        {/* Thumbnail with info chips */}
        <div className="relative aspect-[341/195] overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 341px, (min-width: 640px) 45vw, 92vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <ul className="absolute bottom-[19px] left-3 flex gap-2 md:left-[13px] md:gap-3">
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full bg-[#f6f6f6]/60 px-2.5 py-1.5 text-[11px] font-medium leading-[14px] text-[#4f4f4f] backdrop-blur-sm md:px-3 md:text-xs"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-[21px] flex flex-col gap-4">
          {/* Title, author and rating */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="truncate text-xl font-semibold leading-7 text-black">{title}</h3>
              <p className="text-sm leading-6 text-foreground-muted">
                by <span className="text-brand-blue">{author}</span>
              </p>
            </div>
            <p className="flex shrink-0 items-center gap-0.5 text-lg font-medium leading-7 text-foreground-muted">
              {rating}
              <HiOutlineStar size={24} className="text-[#b0b0b0]" />
            </p>
          </div>

          {/* Level and students */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#ebebed] px-3 py-1.5 text-xs font-medium leading-5 text-foreground-muted">
              <MdSignalCellularAlt size={20} />
              {level}
            </span>
            <AvatarStack avatars={avatars} extra={`${students}+`} />
          </div>

          {/* Price */}
          <p className="flex items-baseline gap-0.5">
            <span className="font-heading text-xl font-semibold leading-6 text-brand-blue">${price}</span>
            <span className="text-xs text-foreground-muted">/lifetime</span>
          </p>
        </div>
      </article>
    </Link>
  );
}