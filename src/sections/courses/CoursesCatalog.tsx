"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/animations/Reveal";
import RevealSection from "@/components/animations/RevealSection";
import CourseCard from "@/components/cards/CourseCard";
import CategoryPill from "@/components/ui/CategoryPill";
import { COURSES } from "@/data/courses";
import {
  HiBars3,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiFunnel,
  HiMiniSignal,
  HiMiniSquares2X2,
} from "react-icons/hi2";

const FILTER_CHIPS = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const FILTER_OPTIONS = ["All courses", "Featured", "Popular", "Beginner", "Trending", "Newest"];
const LEVEL_OPTIONS = ["All levels", "Beginner", "Intermediate", "Advanced"];
const CATEGORY_OPTIONS = [
  "All categories",
  "Design",
  "Development",
  "Marketing",
  "Business",
  "Music",
  "Photography",
  "Cooking",
];
const SORT_OPTIONS = ["Most relevant", "Newest", "Highest rated", "Price: low to high"];
const PAGE_NUMBERS = [1, 2, 3, 4, 5];
const CATALOG_COURSES = [...COURSES, ...COURSES, ...COURSES];

type MenuKey = "filter" | "level" | "category" | "sort" | null;

function DropdownButton({
  label,
  value,
  open,
  onToggle,
  onClose,
  options,
  onSelect,
}: {
  label: string;
  value: string;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  options: string[];
  onSelect: (value: string) => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#d6d8dc] bg-white px-4 py-2 text-sm font-medium text-[#242528] shadow-sm transition-colors hover:border-[#c8cbd0]"
      >
        {label === "Sort" ? (
          <span className="inline-flex items-center gap-2 text-[#4b4c53]">
            <HiBars3 className="h-4 w-4 text-[#4b4c53]" />
            {value}
            <HiChevronDown className="h-4 w-4 text-[#666a73]" />
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 text-[#4b4c53]">
            {label === "Level" && <HiMiniSignal className="h-4 w-4 text-[#4b4c53]" />}
            {label === "Category" && <HiMiniSquares2X2 className="h-4 w-4 text-[#4b4c53]" />}
            {label}
            <HiChevronDown className="h-4 w-4 text-[#666a73]" />
          </span>
        )}
      </button>

      {open && (
        <div className="absolute left-0 z-20 mt-2 min-w-[180px] rounded-2xl border border-[#e3e5e8] bg-white p-2 shadow-[0_18px_48px_rgba(16,24,40,0.08)]">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onSelect(option);
                onClose();
              }}
              className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-[#f5f6f8] ${
                option === value ? "text-[#242528]" : "text-[#4b4c53]"
              }`}
            >
              <span>{option}</span>
              {option === value && <span className="h-2.5 w-2.5 rounded-full bg-[#c6e227]" aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CoursesCatalog() {
  const [activeCategory, setActiveCategory] = useState(FILTER_CHIPS[0]);
  const [selectedFilter, setSelectedFilter] = useState(FILTER_OPTIONS[0]);
  const [selectedLevel, setSelectedLevel] = useState(LEVEL_OPTIONS[0]);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_OPTIONS[0]);
  const [selectedSort, setSelectedSort] = useState(SORT_OPTIONS[0]);
  const [activePage, setActivePage] = useState(1);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);

  const visibleCourses = useMemo(() => CATALOG_COURSES.slice(0, 6), []);

  const setPage = (next: number) => setActivePage((prev) => Math.min(Math.max(prev + next, 1), PAGE_NUMBERS.length));

  return (
    <RevealSection className="bg-[#f3f3f5] pb-16 pt-8 md:pb-20 md:pt-10">
      <div className="mx-auto max-w-300 px-4 md:px-6 xl:px-0">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <button
                type="button"
                aria-expanded={openMenu === "filter"}
                onClick={() => setOpenMenu(openMenu === "filter" ? null : "filter")}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#d6d8dc] bg-white px-4 py-2 text-sm font-medium text-[#242528] shadow-sm transition-colors hover:border-[#c8cbd0]"
              >
                <HiFunnel className="h-4 w-4" />
                Filter
              </button>

              {openMenu === "filter" && (
                <div className="absolute left-0 z-20 mt-2 min-w-[180px] rounded-2xl border border-[#e3e5e8] bg-white p-2 shadow-[0_18px_48px_rgba(16,24,40,0.08)]">
                  {FILTER_OPTIONS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setSelectedFilter(option);
                        setOpenMenu(null);
                      }}
                      className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-[#f5f6f8] ${
                        option === selectedFilter ? "text-[#242528]" : "text-[#4b4c53]"
                      }`}
                    >
                      <span>{option}</span>
                      {option === selectedFilter && (
                        <span className="h-2.5 w-2.5 rounded-full bg-[#c6e227]" aria-hidden="true" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <DropdownButton
              label="Level"
              value={selectedLevel}
              open={openMenu === "level"}
              onToggle={() => setOpenMenu(openMenu === "level" ? null : "level")}
              onClose={() => setOpenMenu(null)}
              options={LEVEL_OPTIONS}
              onSelect={setSelectedLevel}
            />

            <DropdownButton
              label="Category"
              value={selectedCategory}
              open={openMenu === "category"}
              onToggle={() => setOpenMenu(openMenu === "category" ? null : "category")}
              onClose={() => setOpenMenu(null)}
              options={CATEGORY_OPTIONS}
              onSelect={setSelectedCategory}
            />
          </div>

          <DropdownButton
            label="Sort"
            value={selectedSort}
            open={openMenu === "sort"}
            onToggle={() => setOpenMenu(openMenu === "sort" ? null : "sort")}
            onClose={() => setOpenMenu(null)}
            options={SORT_OPTIONS}
            onSelect={setSelectedSort}
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {FILTER_CHIPS.map((chip) => (
            <CategoryPill
              key={chip}
              label={chip}
              isActive={activeCategory === chip}
              onClick={() => setActiveCategory(chip)}
            />
          ))}
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCourses.map((course, index) => (
            <Reveal as="li" key={`${course.id}-${index}`} className="h-full">
              <CourseCard course={course} />
            </Reveal>
          ))}
        </ul>

        <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous page"
            onClick={() => setPage(-1)}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-[#d6d8dc] bg-white text-[#242528] transition-colors hover:border-[#c8cbd0]"
          >
            <HiChevronLeft className="h-4 w-4" />
          </button>

          {PAGE_NUMBERS.map((page) => {
            const isActive = activePage === page;

            return (
              <button
                key={page}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActivePage(page)}
                className={
                  isActive
                    ? "grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-[#2b2d31] text-sm font-medium text-white shadow-sm"
                    : "grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-[#d6d8dc] bg-white text-sm font-medium text-[#242528] transition-colors hover:border-[#c8cbd0]"
                }
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            aria-label="Next page"
            onClick={() => setPage(1)}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-[#d6d8dc] bg-white text-[#242528] transition-colors hover:border-[#c8cbd0]"
          >
            <HiChevronRight className="h-4 w-4" />
          </button>
        </nav>
      </div>
    </RevealSection>
  );
}
