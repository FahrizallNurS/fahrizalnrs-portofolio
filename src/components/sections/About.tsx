import { aboutContent } from "../../content/about";

export default function About() {
  const { eyebrow, title, paragraphs, photoUrl, resumeUrl } = aboutContent;

  return (
    <section
      id="about"
      data-color="#66D67A"
      className="min-h-screen w-full flex flex-col justify-center relative px-margin-mobile md:px-margin-desktop py-24 section-trigger"
    >
      <div className="ambient-glow -top-24 bg-[#FFE44D]"></div>

      <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center relative z-10">
        {/* Kolom teks */}
        <div className="order-2 lg:order-1 flex flex-col items-start max-w-xl reveal">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-black">person</span>
            <span className="font-label-md text-label-md text-black tracking-[0.2em] uppercase">
              {eyebrow}
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-black mb-8 uppercase">
            {title}
          </h2>

          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-body-md text-body-md text-black/80 mb-6 last:mb-12"
            >
              {paragraph}
            </p>
          ))}

          {resumeUrl && (
            <div className="flex flex-wrap gap-4">
              <div className="magnetic-wrap">
                <a
                  href={resumeUrl}
                  className="magnetic-btn inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full font-label-md text-label-md transition-transform uppercase gap-2"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  Resume
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Kolom foto, delay dikit biar muncul setelah teks */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative reveal delay-100">
          <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src={photoUrl}
              alt="Portrait of developer"
              className="w-full h-full object-cover filter contrast-110 saturate-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}