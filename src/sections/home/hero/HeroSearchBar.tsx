import { HiMagnifyingGlass } from "react-icons/hi2";

export default function HeroSearchBar() {
  return (
    <form
      action="/courses"
      role="search"
      className="hero-reveal mt-10 flex w-full max-w-[581px] items-center gap-3 motion-safe:opacity-0 md:mt-[60px] md:gap-4"
    >
      <label className="flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-4 focus-within:ring-2 focus-within:ring-secondary md:gap-3 md:px-6">
        <HiMagnifyingGlass size={22} className="shrink-0 text-[#82868e]" />
        <input
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          aria-label="Search courses"
          className="w-full bg-transparent text-base text-foreground outline-none placeholder:text-[#b0b0b0] md:text-lg"
        />
      </label>

      <button
        type="submit"
        className="h-[46px] shrink-0 rounded-3xl bg-secondary px-5 text-base font-medium text-[#242528] transition-opacity hover:opacity-90 md:px-6 md:text-lg"
      >
        Search
      </button>
    </form>
  );
}