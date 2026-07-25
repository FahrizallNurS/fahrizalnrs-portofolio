import { Link } from "react-router-dom";
import { projects } from "../../content/project";

export default function SelectedWorks() {
  return (
    <section
      id="projects"
      data-color="#7B5CFA"
      className="min-h-screen w-full flex flex-col relative px-margin-mobile md:px-margin-desktop py-24 overflow-hidden section-trigger text-white"
    >
      <div className="ambient-glow -top-24 bg-[#171717]"></div>

      <div className="max-w-container-max mx-auto w-full relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-16 reveal">
          <h2 className="font-headline-lg uppercase">Selected Works</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg lg:gap-24 h-full flex-grow">
          {/* Gambar preview */}
          <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center reveal">
            <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-2xl">
              <img
                src={projects[0].coverImage}
                alt={projects[0].name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>

          {/* List nama project, delay dikit biar muncul setelah gambar */}
          <div className="flex flex-col justify-center reveal delay-100">
            <ul className="flex flex-col w-full">
              {projects.map((project) => (
                <li key={project.slug} className="group border-b border-white/20 relative">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="flex items-center justify-between py-8 w-full relative z-10"
                  >
                    <span className="font-headline-lg text-2xl lg:text-3xl text-white/70 group-hover:text-white transition-colors tracking-wide">
                      {project.name}
                    </span>
                    <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 duration-500 ease-out">
                      arrow_forward
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}