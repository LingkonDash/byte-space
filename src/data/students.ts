// src/data/students.ts
// The 7 student faces used in the "Happy Students" card
export const STUDENT_AVATARS = Array.from(
  { length: 7 },
  (_, index) => `/images/avatars/avatar-0${index + 1}.svg`,
);
