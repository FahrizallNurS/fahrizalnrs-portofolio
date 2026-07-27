import type { Project } from "../../content/types";
import Button from "../ui/Button";

interface ProjectInfoProps {
  project: Project;
}

export default function ProjectInfo({ project }: ProjectInfoProps) {
  const { name, summary, type, githubUrl } = project;

  return (
    <div className="flex flex-col gap-6 reveal">
      {/* Badge type: web / mobile */}
      <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full border border-white/20 font-label-md text-label-md uppercase text-white/70">
        {type === "web" ? "Web App" : "Mobile App"}
      </span>

      <h1 className="font-headline-lg uppercase text-white">{name}</h1>

      <p className="font-body text-white/70 text-lg leading-relaxed">
        {summary}
      </p>

      <div className="mt-4">
        <Button href={githubUrl} target="_blank" icon="arrow_outward">
          View on GitHub
        </Button>
      </div>
    </div>
  );
}