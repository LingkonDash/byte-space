import ContentHeading from "@/components/ui/ContentHeading";
import { REVIEWS } from "@/data/course-detail";
import RatingFilter from "./RatingFilter";
import RatingSummary from "./RatingSummary";
import ReviewCard from "./ReviewCard";

export default function ReviewsTab() {
  return (
    <div className="flex flex-col gap-6">
      <ContentHeading>What Learners Are Saying</ContentHeading>
      <p className="text-foreground-muted">
        Discover what our learners have to say about their experience with &apos;Build Digital
        Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have
        embarked on the transformative journey of mastering digital asset creation.
      </p>

      <RatingSummary />

      <ContentHeading>Individual Reviews:</ContentHeading>
      <RatingFilter />

      <ul className="flex flex-col gap-6">
        {REVIEWS.map((review) => (
          <li key={review.name}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
}
