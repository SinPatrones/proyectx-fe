'use client';

import { useState } from 'react';
import type { ThesisProject } from '@/modules/thesis/domain/entities/ThesisProject';
import Sidebar from '@/modules/thesis/presentation/components/Sidebar';

// Mock projects are imported directly here since this is the client shell.
// In the future this will come from a data-fetching layer.
const MOCK_PROJECTS: ThesisProject[] = [
  {
    id: 'prj-1',
    title: 'Impacto de la tecnología en la educación rural del altiplano peruano',
    status: 'in_progress',
    progress: 45,
    universityShortName: 'UANCV',
    thesisType: 'undergrad',
    updatedAt: '2026-02-20',
  },
  {
    id: 'prj-2',
    title: 'Análisis de riesgos sísmicos en proyectos de construcción',
    status: 'draft',
    progress: 5,
    universityShortName: 'UC',
    thesisType: 'undergrad',
    updatedAt: '2026-02-15',
  },
  {
    id: 'prj-3',
    title: 'Propuesta de mejora en la gestión logística empresarial',
    status: 'completed',
    progress: 100,
    universityShortName: 'UANCV',
    thesisType: 'undergrad',
    updatedAt: '2026-01-10',
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-base overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        projects={MOCK_PROJECTS}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile topbar */}
        <header className="md:hidden flex items-center justify-between px-4 h-14 bg-surface border-b border-border shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-ink-soft hover:text-ink transition-colors p-1"
            aria-label="Abrir menú"
          >
            {/* Hamburger */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <span className="text-sm font-black tracking-tighter select-none">
            <span className="text-brand-red">PROYECT-</span>
            <span className="text-brand-green">X</span>
          </span>

          <button className="flex items-center gap-1 text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-dark px-3 py-1.5 rounded-lg transition-colors">
            <span>+</span> Nuevo
          </button>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
