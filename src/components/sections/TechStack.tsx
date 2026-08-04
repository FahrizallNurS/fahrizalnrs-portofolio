import { techStackContent } from "../../content/techstack";

export default function TechStack() {
  const { title, highlightWord, rows } = techStackContent;

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

      <div className="marquee-wrapper reveal delay-100 w-full">
        {rows.map((row, rowIndex) => {
          // Duplikat 4x biar seamless loop, cukup lebar buat layar manapun
          const loopItems = [...row.items, ...row.items, ...row.items, ...row.items];
          const direction = rowIndex % 2 === 0 ? "direction-left" : "direction-right";

          return (
            <div
              key={row.category}
              className={`marquee-track ${direction}`}
              style={{ animationDuration: `${22 + rowIndex * 4}s` }}
            >
            {loopItems.map((item, i) => {
                  const variant = i % 2 === 0 ? "marquee-solid" : "marquee-stroke";
                  return (
                    <span
                      key={`${row.category}-${i}`}
                      className={`${variant} font-display-xl text-[48px] md:text-[70px] uppercase leading-none mx-4 tracking-tighter`}
                      style={{ "--item-color": row.color } as React.CSSProperties}
                    >
                      {item}
                      <span className="mx-4 opacity-40">•</span>
                    </span>
                  );
            })}
            </div>
          );
        })}
      </div>
    </section>
  );
}