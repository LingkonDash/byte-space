import Reveal from "@/components/animations/Reveal";
import RevealSection from "@/components/animations/RevealSection";
import { PARTNERS } from "@/data/partners"; 
import MaskImage from "@/components/ui/MaskImage";

export default function PartnersSection() {
    return (
        <RevealSection className="bg-[#ebebed] py-10 md:py-20">
            <ul
                aria-label="Our partners"
                className="mx-auto flex max-w-300 flex-wrap items-center justify-center gap-x-8 gap-y-6 px-4 md:px-6 lg:gap-x-10 xl:gap-x-[72px]"
            >
                {PARTNERS.map((partner) => (
                    <Reveal as="li" key={partner.name}>
                        <MaskImage
                            src={partner.src}
                            label={partner.name}
                            className="h-7 w-[116px] bg-[#7e818a] lg:h-9 lg:w-[150px] xl:h-[41px] xl:w-[168px]"
                        />
                    </Reveal>
                ))}
            </ul>
        </RevealSection>
    );
}