"use client";

import { useState, type ComponentType } from "react";
import TabPanel from "@/components/animations/TabPanel";
import Reveal from "@/components/animations/Reveal";
import CategoryPill from "@/components/ui/CategoryPill";
import AboutTab from "./tabs/AboutTab";
import LessonsTab from "./tabs/LessonsTab";
import ReviewsTab from "./tabs/ReviewsTab";

const PANELS = {
  About: AboutTab,
  Lessons: LessonsTab,
  Reviews: ReviewsTab,
} satisfies Record<string, ComponentType>;

type TabName = keyof typeof PANELS;
const TABS = Object.keys(PANELS) as TabName[];

type CourseTabsProps = {
  className?: string;
};

export default function CourseTabs({ className = "" }: CourseTabsProps) {
  const [activeTab, setActiveTab] = useState<TabName>("About");
  const ActivePanel = PANELS[activeTab];

  return (
    <div className={`flex flex-col gap-10 ${className}`}>
      <Reveal className="flex flex-wrap gap-4">
        {TABS.map((tab) => (
          <CategoryPill
            key={tab}
            label={tab}
            isActive={tab === activeTab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </Reveal>

      {/* The key makes the panel remount, so its fade-in plays on every tab change */}
      <TabPanel key={activeTab}>
        <ActivePanel />
      </TabPanel>
    </div>
  );
}
