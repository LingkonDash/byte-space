type Ornament = {
  src: string;
  className: string; // position and size (mobile first, then md:)
};

export const HERO_ORNAMENTS: Ornament[] = [
  {
    src: "/images/ornaments/spring-lime.svg",
    className: "-left-[12%] top-[14%] w-[34%] md:-left-[8.2%] md:top-[21.6%] md:w-[26.7%]",
  },
  {
    src: "/images/ornaments/cylinder-lime.svg",
    className:
      "-right-[14%] top-[10%] w-[36%] md:right-auto md:left-[85.5%] md:top-[21.6%] md:w-[25.7%]",
  },
  {
    src: "/images/ornaments/pyramid-white.svg",
    className: "hidden md:block md:left-[76.8%] md:top-[45.3%] md:w-[13.1%]",
  },
  {
    src: "/images/ornaments/spring-white-sm.svg",
    className: "hidden md:block md:left-[12.7%] md:top-[46.6%] md:w-[12.2%]",
  },
  {
    src: "/images/ornaments/torus-white.svg",
    className:
      "-right-[16%] bottom-[6%] w-[34%] md:right-auto md:bottom-auto md:left-[1.25%] md:top-[66.6%] md:w-[23.75%]",
  },
  {
    src: "/images/ornaments/spring-white.svg",
    className: "-left-[12%] top-[50%] w-[30%] md:left-[78.3%] md:top-[65.6%] md:w-[22.9%]",
  },
];

export const HERO_AVATARS = Array.from(
  { length: 7 },
  (_, index) => `/images/avatars/avatar-0${index + 1}.svg`,
);