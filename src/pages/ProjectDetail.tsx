import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../content/project";
import Gallery from "../components/project-detail/Gallery";
import ProjectInfo from "../components/project-detail/ProjectInfo";
import { useRevealOnScroll } from "../components/hooks/useRevealOnScroll";

export default function ProjectDetail() {
  useRevealOnScroll();

  useEffect(() => {
    document.body.style.backgroundColor = "#171717";
  }, []);

  const { slug } = useParams<{ slug: string }>();
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex]

  if (!project) {
    return (
      <section className="min-h-screen w-full flex flex-col items-center justify-center px-margin-mobile text-white text-center">
        <h1 className="font-headline-lg uppercase mb-4">Project Not Found</h1>
        <p className="font-body text-white/70 mb-8">
          The project you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/"
          viewTransition
          className="inline-flex items-center gap-2 font-label-md text-label-md uppercase text-white hover:opacity-70 transition-opacity"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Home
        </Link>
      </section>
    );
  }

  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <section
      data-color="#171717"
      className="min-h-screen w-full relative px-margin-mobile md:px-margin-desktop py-32 text-white overflow-hidden"
    >
      <div className="ambient-glow -top-24 bg-[#7B5CFA]"></div>

      <div className="max-w-container-max mx-auto w-full relative z-10">
        <Link
          to="/"
          viewTransition
          className="inline-flex items-center gap-2 mb-12 font-label-md text-label-md uppercase text-white/60 hover:text-white transition-colors reveal"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg lg:gap-24">
          <div className="glass-card p-6 md:p-8 rounded-xl reveal">
            <Gallery images={project.gallery} alt={project.name} />
          </div>

          <div className="glass-card p-6 md:p-8 rounded-xl reveal delay-100">
            <ProjectInfo project={project} />
          </div>
        </div>

        {/* Prev / Next Project Navigation */}
        <div className="border-t border-white/20 mt-16 pt-8 flex justify-between items-center w-full">
          <Link
            to={`/projects/${prevProject.slug}`}
            viewTransition
            className="font-label-sm text-label-sm uppercase flex items-center gap-2 hover:opacity-70 transition-opacity text-white/60"
          >
            <span className="material-symbols-outlined text-base">arrow_left</span>
            {prevProject.name}
          </Link>
          <Link
            to={`/projects/${nextProject.slug}`}
            viewTransition
            className="font-label-sm text-label-sm uppercase flex items-center gap-2 hover:opacity-70 transition-opacity text-white/60"
          >
            {nextProject.name}
            <span className="material-symbols-outlined text-base">arrow_right</span>
          </Link>
        </div>
      </div>
    </section>
  );
}