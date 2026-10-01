import { HiStar } from "react-icons/hi2";

type StarRatingProps = {
  rating: number; // 0 to 5
  className?: string; // star size, e.g. "size-4 md:size-6"
};

export default function StarRating({ rating, className = "size-6" }: StarRatingProps) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <HiStar
          key={index}
          className={`${className} ${index < rating ? "text-[#ef9a11]" : "text-[#d1d1d1]"}`}
        />
      ))}
    </div>
  );
}
