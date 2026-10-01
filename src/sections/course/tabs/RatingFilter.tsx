"use client";

import { useState } from "react";
import { HiStar } from "react-icons/hi2";
import CategoryPill from "@/components/ui/CategoryPill";

const FILTERS = ["All rating", "5", "4", "3", "2", "1"];

/** Visual filter only: the design has no per-rating data to filter. */
export default function RatingFilter() {
  const [active, setActive] = useState(FILTERS[0]);

  return (
    <div className="flex flex-wrap gap-3 md:gap-4">
      {FILTERS.map((filter, index) => (
        <CategoryPill
          key={filter}
          label={filter}
          isActive={filter === active}
          onClick={() => setActive(filter)}
          icon={index > 0 ? <HiStar size={24} className="text-[#ef9a11]" /> : undefined}
        />
      ))}
    </div>
  );
}
