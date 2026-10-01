import Image from "next/image";
import StarRating from "@/components/ui/StarRating";
import type { Review } from "@/types";

type ReviewCardProps = {
  review: Review;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  const { name, role, avatar, rating, time, text } = review;

  return (
    <article className="flex flex-col gap-6 rounded-3xl border border-border p-5 md:p-10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Image src={avatar} alt="" width={52} height={52} className="size-[52px] rounded-full object-cover" />
            <div>
              <p className="text-lg font-medium leading-7 text-black">{name}</p>
              <p className="text-foreground-muted">{role}</p>
            </div>
          </div>
          <StarRating rating={rating} />
        </div>
        <p className="shrink-0 text-foreground-muted">{time}</p>
      </div>

      <p className="text-foreground-muted">{text}</p>
    </article>
  );
}
