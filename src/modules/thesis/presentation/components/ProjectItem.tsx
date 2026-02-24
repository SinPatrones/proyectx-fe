import type { ThesisProject } from '../../domain/entities/ThesisProject';
import type { ProjectStatus } from '../../domain/value-objects/ProjectStatus';

const STATUS_LABELS: Record<ProjectStatus, string> = {
  draft: 'Borrador',
  in_progress: 'En progreso',
  generating: 'Generando',
  completed: 'Completado',
  paused: 'Pausado',
  archived: 'Archivado',
};

const STATUS_BADGE: Record<ProjectStatus, string> = {
  draft: 'bg-surface-3 text-ink-faint',
  in_progress: 'bg-brand-green/10 text-brand-green-light animate-pulse',
  generating: 'bg-yellow-500/10 text-yellow-400 animate-pulse',
  completed: 'bg-brand-green/20 text-brand-green-light',
  paused: 'bg-yellow-500/10 text-yellow-400',
  archived: 'bg-surface-3 text-ink-faint opacity-60',
};

const STATUS_BAR: Record<ProjectStatus, string> = {
  draft: 'bg-surface-3',
  in_progress: 'bg-brand-green',
  generating: 'bg-yellow-400',
  completed: 'bg-brand-green',
  paused: 'bg-yellow-400',
  archived: 'bg-surface-3',
};

interface Props {
  project: ThesisProject;
  isActive?: boolean;
}

export default function ProjectItem({ project, isActive }: Props) {
  return (
    <button
      className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors group ${
        isActive ? 'bg-surface-2' : 'hover:bg-surface-2'
      }`}
    >
      {/* Title */}
      <p className="text-sm text-ink leading-snug line-clamp-2 mb-1.5 group-hover:text-ink">
        {project.title}
      </p>

      {/* Status badge + university */}
      <div className="flex items-center gap-1.5 mb-2">
        <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full leading-none ${STATUS_BADGE[project.status]}`}>
          {STATUS_LABELS[project.status]}
        </span>
        <span className="text-[10px] text-ink-faint">{project.universityShortName}</span>
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-[3px] bg-surface-3 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${STATUS_BAR[project.status]}`}
            style={{ width: `${project.progress}%` }}
          />
        </div>
        <span className="text-[10px] text-ink-faint tabular-nums w-7 text-right">
          {project.progress}%
        </span>
      </div>
    </button>
  );
}
