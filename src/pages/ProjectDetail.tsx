// pages/ProjectDetail.tsx
import { Link, useParams } from "react-router-dom";
import { projects } from "../content/project";
import Gallery from "../components/project-detail/Gallery";
import ProjectInfo from "../components/project-detail/ProjectInfo";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

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

  return (
    <section className="min-h-screen w-full px-margin-mobile md:px-margin-desktop py-32 text-white">
      <div className="max-w-container-max mx-auto w-full">
        <Link
          to="/"
          viewTransition
          className="inline-flex items-center gap-2 mb-12 font-label-md text-label-md uppercase text-white/60 hover:text-white transition-colors reveal"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg lg:gap-24">
          <Gallery images={project.gallery} alt={project.name} />
          <ProjectInfo project={project} />
        </div>
      </div>
    </section>
  );
}