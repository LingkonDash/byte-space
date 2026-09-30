// src/data/courses.ts
import type { Course } from "@/types";

const COURSE_AVATARS = [
  "/images/avatars/avatar-02.svg",
  "/images/avatars/avatar-08.webp",
  "/images/avatars/avatar-09.webp",
  "/images/avatars/avatar-10.webp",
];

// In Figma every course shares these details
const sharedDetails = {
  author: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  rating: 4.5,
  price: 25,
  students: 26,
  avatars: COURSE_AVATARS,
};

export const COURSES: Course[] = [
  { id: "learn-figma", title: "Learn Figma from Basic", image: "/images/courses/course-1.webp", ...sharedDetails },
  { id: "digital-asset", title: "Build Digital Asset", image: "/images/courses/course-2.webp", ...sharedDetails },
  { id: "big-data", title: "the Power of Big Data", image: "/images/courses/course-3.webp", ...sharedDetails },
  { id: "productivity", title: "Balancing Productivity and Self-Care", image: "/images/courses/course-4.webp", ...sharedDetails },
  { id: "money-management", title: "Mastering Money Management", image: "/images/courses/course-5.webp", ...sharedDetails },
  { id: "startup-success", title: "From Idea to Startup Success", image: "/images/courses/course-6.webp", ...sharedDetails },
];
