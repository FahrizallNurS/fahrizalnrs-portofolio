import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../content/project";
import DeviceFrame from "../ui/DeviceFrame";

export default function SelectedWorks() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="projects"
      data-color="#7B5CFA"
      className="min-h-screen w-full flex flex-col relative px-margin-mobile md:px-margin-desktop py-24 section-trigger text-white"
    >
      <div className="ambient-glow -top-24 bg-[#171717]"></div>

      <div className="max-w-container-max mx-auto w-full relative z-10 flex flex-col h-full justify-center">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg lg:gap-24 w-full">
          <div className="reveal">
            <h2 className="font-display-xl text-display-xl-mobile md:text-display-xl uppercase leading-[0.9] mb-12">
              SELECTED
              <br />
              <span className="text-white/50">WORKS</span>
            </h2>
          </div>
          <div className="hidden lg:block"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg lg:gap-24 w-full items-center">
          
        <div className="reveal w-full">
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden glass-preview flex items-center justify-center">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              const [mainImage, stateImage] = project.gallery;

              return (
                <div
                  key={project.slug}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  {project.type === "mobile" ? (
                  <>
                    <div className="hidden lg:flex items-center justify-center w-full h-full">
                      <DeviceFrame
                        type="mobile"
                        src={stateImage}
                        alt={`${project.name} - state`}
                        className="absolute h-[65%] aspect-[9/19] rotate-6 translate-x-10 opacity-70 z-10"
                      />
                      <DeviceFrame
                        type="mobile"
                        src={mainImage}
                        alt={project.name}
                        className="relative h-[75%] aspect-[9/19] -rotate-6 -translate-x-6 z-20"
                      />
                    </div>
                    <div className="flex lg:hidden items-center justify-center w-full h-full">
                      <DeviceFrame
                        type="mobile"
                        src={mainImage}
                        alt={project.name}
                        className="h-[80%] aspect-[9/19]"
                      />
                    </div>
                  </>
                ) : (
                  <DeviceFrame
                    type="web"
                    src={mainImage}
                    alt={project.name}
                    className="w-[85%] aspect-[16/10]"
                  />
                )}
                </div>
              );
            })}

            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-30 pointer-events-none"></div>
          </div>
        </div>

          {/* Kolom Kanan: List Nama Project */}
          <div className="flex flex-col justify-center w-full reveal delay-100">
            <ul className="flex flex-col w-full">
              {projects.map((project, index) => {
                const isActive = index === activeIndex;
                return (
                  <li
                    key={project.slug}
                    className="border-b border-white/20 relative"
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <Link
                      to={`/projects/${project.slug}`}
                      viewTransition
                      className="flex items-center justify-between py-8 w-full relative z-10"
                    >
                      <span
                        className={`font-headline-lg text-2xl lg:text-3xl tracking-wide transition-colors duration-300 ${
                          isActive ? "text-white" : "text-white/70"
                        }`}
                      >
                        {project.name}
                      </span>
                      <span
                        className={`material-symbols-outlined text-white transition-all duration-300 ${
                          isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-5"
                        }`}
                      >
                        arrow_forward
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}