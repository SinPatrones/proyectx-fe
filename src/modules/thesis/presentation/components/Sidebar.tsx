'use client';

import type { ThesisProject } from '../../domain/entities/ThesisProject';
import ProjectList from './ProjectList';
import SidebarOverlay from './SidebarOverlay';

interface Props {
  projects: ThesisProject[];
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ projects, isOpen, onClose }: Props) {
  return (
    <>
      <SidebarOverlay isOpen={isOpen} onClose={onClose} />

      <aside
        className={`
          fixed top-0 left-0 h-full z-30 w-64 flex flex-col
          bg-surface border-r border-border
          transition-transform duration-200 ease-in-out
          md:static md:translate-x-0 md:z-auto md:shrink-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-border shrink-0">
          <h2 className="text-sm font-black tracking-tighter select-none">
            <span className="text-brand-red">PROYECT-</span>
            <span className="text-brand-green">X</span>
          </h2>
          {/* Close button (mobile only) */}
          <button
            onClick={onClose}
            className="md:hidden text-ink-faint hover:text-ink transition-colors p-1 rounded"
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        {/* New thesis button */}
        <div className="px-3 py-3 shrink-0">
          <button className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-brand-green hover:bg-brand-green-dark text-white text-sm font-semibold transition-colors">
            <span className="text-base leading-none">+</span>
            Nueva tesis
          </button>
        </div>

        {/* Project list — scrollable */}
        <div className="flex-1 overflow-y-auto px-3 py-2">
          <ProjectList projects={projects} />
        </div>

        {/* User profile — bottom */}
        <div className="px-4 py-3 border-t border-border shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-surface-3 flex items-center justify-center text-xs font-bold text-ink-soft shrink-0">
              JR
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-ink truncate">Juan Rios</p>
              <p className="text-[11px] text-ink-faint truncate">juan@correo.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
