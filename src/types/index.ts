export type NavItem = {
  label: string;
  href: string;
};

export type Partner = {
  name: string;
  src: string;
};

export type Course = {
  id: string;
  title: string;
  author: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  rating: number;
  price: number;
  students: number;
  avatars: string[];
};

export type LearningPath = {
  label: string;
  slug: string;
  icon: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

export type Ornament = {
  src: string;
  className: string; // position and size (mobile first, then md:)
};

export type LessonModule = { title: string; description: string };

export type Review = {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  time: string;
  text: string;
};

export type RatingRow = { stars: number; percent: number; count: number };
