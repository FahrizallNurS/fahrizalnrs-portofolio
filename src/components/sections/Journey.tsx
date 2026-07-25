import { statsContent } from "../../content/stats";

export default function Journey() {
  const { title, highlightWord, paragraphs, stats } = statsContent;

  return (
    <section
      id="stats"
      data-color="#171717"
      className="min-h-screen w-full flex flex-col justify-center relative px-margin-mobile md:px-margin-desktop py-24 section-trigger text-white"
    >
      <div className="ambient-glow -top-24 bg-[#66D67A]"></div>

      <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center relative z-10">
        {/* Kolom kiri: judul + stats */}
        <div className="lg:col-span-5 flex flex-col reveal">
          <h2 className="font-display-xl text-display-xl-mobile md:text-display-xl uppercase leading-[0.9] mb-12">
            {title}
            <br />
            <span className="text-white/50">{highlightWord}</span>
          </h2>

          <div className="flex flex-col gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-xl relative overflow-hidden group"
              >
                <h3 className="font-display-xl text-white mb-2">{stat.value}</h3>
                <p className="font-label-md text-label-md text-white/60 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom kanan: paragraf, delay dikit biar muncul setelah kolom kiri */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:pl-16 reveal delay-100">
          {paragraphs.map((paragraph, index) =>
            index === 0 ? (
              <p key={index} className="font-body-lg text-body-lg text-white mb-8">
                {paragraph}
              </p>
            ) : (
              <p key={index} className="font-body-md text-body-md text-white/60">
                {paragraph}
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
}