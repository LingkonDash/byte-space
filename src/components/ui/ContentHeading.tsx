type ContentHeadingProps = {
  children: string;
};

/** The 20px Poppins sub-heading used inside course content. */
export default function ContentHeading({ children }: ContentHeadingProps) {
  return <h3 className="text-xl font-semibold leading-7 text-black">{children}</h3>;
}
