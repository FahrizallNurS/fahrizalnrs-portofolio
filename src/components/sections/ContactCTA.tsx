import { contactContent } from "../../content/contact";
import Button from "../ui/Button";

export default function ContactCTA() {
  const { headline, ctaLabel, email } = contactContent;

  return (
    <section
      id="contact"
      data-color="#171717"
      className="min-h-[80vh] w-full flex flex-col items-center justify-center relative px-margin-mobile md:px-margin-desktop py-24 section-trigger text-white"
    >
      <div className="ambient-glow -top-24 bg-[#FF6B3D]"></div>

      <div className="text-center z-10 flex flex-col items-center reveal">
        <h2 className="font-display-2xl text-[60px] md:text-display-2xl uppercase leading-[0.85] mb-12 text-center max-w-4xl">
          {headline}
        </h2>

        <Button href={`mailto:${email}`} variant="primary" className="px-10 py-5 text-[24px]">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}