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
