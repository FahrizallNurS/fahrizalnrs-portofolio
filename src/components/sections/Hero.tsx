import { heroContent } from "../../content/hero";

export default function Hero() {
  const { eyebrow, headline, description, ctaLabel, ctaHref } = heroContent;

  return (
    <section
      id="home"
      data-color="#FFE44D"
      className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden px-margin-mobile md:px-margin-desktop py-24 section-trigger"
    >
      <div className="max-w-container-max mx-auto w-full flex flex-col items-center text-center z-10 relative mt-16 reveal">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-black">star</span>
          <span className="font-label-md text-label-md text-black tracking-[0.2em] uppercase">
            {eyebrow}
          </span>
        </div>

        <h1 className="font-display-2xl text-black text-[80px] md:text-[180px] lg:text-[220px] leading-[0.8] mb-8 uppercase text-center">
          {headline}
        </h1>

        <p className="font-body-lg text-body-lg text-black/80 max-w-2xl mx-auto mb-12">
          {description}
        </p>

        <div className="magnetic-wrap">
          <a
            href={ctaHref}
            className="magnetic-btn inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full font-label-md text-label-md transition-transform uppercase gap-2"
          >
            {ctaLabel}
            <span className="material-symbols-outlined text-lg">arrow_downward</span>
          </a>
        </div>
      </div>
    </section>
  );
}