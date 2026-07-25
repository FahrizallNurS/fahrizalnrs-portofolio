import { techStackContent } from "../../content/techstack";

export default function TechStack() {
  const { title, highlightWord, items } = techStackContent;

  return (
    <section
      id="skills"
      data-color="#FF6B3D"
      className="min-h-[70vh] w-full flex flex-col items-center justify-center relative px-margin-mobile md:px-margin-desktop py-24 section-trigger text-white"
    >
      <div className="ambient-glow -top-24 bg-[#7B5CFA]"></div>

    <div className="text-center mb-16 relative z-10 reveal">
        <h2 className="font-display-xl text-display-xl-mobile md:text-display-xl uppercase leading-none">
            {title}
            <br />
            <span className="text-white/50">{highlightWord}</span>
        </h2>
    </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto z-10 reveal delay-100">
        {items.map((item) => (
          <div
            key={item.name}
            className="glass-card flex flex-col items-center justify-center w-40 h-40 rounded-[2rem]"
          >
            <span className="material-symbols-outlined text-4xl md:text-5xl mb-4">
              {item.icon}
            </span>
            <span className="font-label-md text-label-md uppercase tracking-widest text-white/80 text-center text-xs md:text-sm">
                {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}