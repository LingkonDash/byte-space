"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import CategoryPill from "@/components/ui/CategoryPill";

type CategoryFilterProps = {
  rows: string[][];
  onChange?: (category: string) => void;
};

export default function CategoryFilter({ rows, onChange }: CategoryFilterProps) {
  const [active, setActive] = useState(rows[0][0]);

  const select = (category: string) => {
    setActive(category);
    onChange?.(category);
  };

  return (
    // Below xl the rows dissolve (`contents`) and all pills wrap together.
    // From xl up each row is its own centered line, exactly like Figma.
    <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 md:mt-[42px] md:gap-4 xl:flex-col xl:gap-[21px]">
      {rows.map((row, rowIndex) => (
        <div key={row[0]} className="contents xl:flex xl:items-center xl:gap-4">
          {row.map((category) => (
            <Reveal key={category}>
              <CategoryPill
                label={category}
                isActive={category === active}
                onClick={() => select(category)}
              />
            </Reveal>
          ))}

          {rowIndex === rows.length - 1 && (
            <Reveal>
              <Link
                href="/courses"
                className="px-1 text-base font-medium text-brand-blue hover:underline"
              >
                + More
              </Link>
            </Reveal>
          )}
        </div>
      ))}
    </div>
  );
}