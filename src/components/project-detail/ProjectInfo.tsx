import type { Project } from "../../content/types";
import Button from "../ui/Button";

interface ProjectInfoProps {
  project: Project;
}

export default function ProjectInfo({ project }: ProjectInfoProps) {
  const { name, paragraphs, techStack, type, githubUrl } = project;

  return (
    <div className="flex flex-col gap-6 reveal">
      <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full border border-white/20 font-label-md text-label-md uppercase text-white/70">
        {type === "web" ? "Web App" : "Mobile App"}
      </span>

      <h1 className="font-headline-lg uppercase text-white">{name}</h1>

      <div className="flex flex-col gap-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="font-body text-white/70 text-lg leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div>
        <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-white/50 mb-3">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="font-label-md text-label-md px-4 py-2 rounded-full border-[3px] border-white bg-transparent text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <Button href={githubUrl} target="_blank" icon="arrow_outward">
          View on GitHub
        </Button>
      </div>
    </div>
  );
}