import type { Partner } from "@/types";

export const PARTNERS: Partner[] = Array.from({ length: 5 }, (_, index) => ({
  name: `Partner ${index + 1}`,
  src: `/images/partners/partner-${index + 1}.svg`,
}));
