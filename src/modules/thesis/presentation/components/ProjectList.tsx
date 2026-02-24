import type { ThesisProject } from '../../domain/entities/ThesisProject';
import ProjectItem from './ProjectItem';

interface Props {
  projects: ThesisProject[];
}

export default function ProjectList({ projects }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[11px] font-semibold text-ink-faint uppercase tracking-wider px-3 mb-1">
        Mis proyectos ({projects.length})
      </p>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}
