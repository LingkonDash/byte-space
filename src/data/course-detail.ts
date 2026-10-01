import type { LessonModule, NavItem, RatingRow, Review } from "@/types";

export const COURSE = {
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  author: "purepearl studio",
  poster: "/images/course/video-poster.webp",
  chips: [
    { icon: "level", label: "Intermediate" },
    { icon: "rating", label: "4.8 (172 reviews)" },
    { icon: "students", label: "199 Students" },
  ],
} as const;

export const ABOUT_PARAGRAPHS = [
  'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
  "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
  "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
];

export const SNEAK_PEEK = [
  { src: "/images/course/sneak-1.webp", alt: "Hand-drawn app wireframes" },
  { src: "/images/course/sneak-2.webp", alt: "Design software open on a laptop" },
  { src: "/images/course/sneak-3.webp", alt: "UI kit shown on a desktop monitor" },
  { src: "/images/course/sneak-4.webp", alt: "Two phones showing app screens" },
];

export const KEY_POINTS = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

export const SIDEBAR_LESSONS = [
  { number: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
  { number: "02", title: "Design Principles for Impacts", duration: "21 mins" },
  { number: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
];

export const COURSE_INCLUDES = [
  "Learning Resources",
  "Quality Lesson Videos",
  "Certificate of Completion",
  "Private Consultation",
];

export const MODULES: LessonModule[] = [
  {
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export const RATING_AVERAGE = "4.7";

export const RATING_ROWS: RatingRow[] = [
  { stars: 5, percent: 92, count: 720 },
  { stars: 4, percent: 37, count: 120 },
  { stars: 3, percent: 10, count: 21 },
  { stars: 2, percent: 4, count: 12 },
  { stars: 1, percent: 5, count: 16 },
];

export const REVIEWS: Review[] = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    avatar: "/images/avatars/avatar-11.webp",
    rating: 5,
    time: "a year ago",
    text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    avatar: "/images/avatars/avatar-12.webp",
    rating: 5,
    time: "a year ago",
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    avatar: "/images/avatars/avatar-13.webp",
    rating: 5,
    time: "a year ago",
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    avatar: "/images/avatars/avatar-01.svg",
    rating: 5,
    time: "a year ago",
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

export const BROWSE_LINKS: NavItem[] = [
  { label: "Featured Courses", href: "/courses" },
  { label: "Featured Categories", href: "/courses" },
  { label: "Business", href: "/courses?category=business" },
  { label: "IT", href: "/courses?category=it-software" },
  { label: "Design", href: "/courses?category=design" },
  { label: "Development", href: "/courses?category=development" },
  { label: "Marketing", href: "/courses?category=marketing" },
  { label: "Photography", href: "/courses?category=photography" },
  { label: "Finance", href: "/courses?category=finance" },
  { label: "Sport", href: "/courses?category=sport" },
];

export const PLATFORM_LINKS: NavItem[] = [
  { label: "Become a Creator", href: "/register" },
  { label: "Affiliate Program", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Help", href: "#" },
  { label: "About", href: "#" },
];
