import type { ThesisProject } from '../../domain/entities/ThesisProject';

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

export async function getStudentProjects(_studentId: string): Promise<ThesisProject[]> {
  return MOCK_PROJECTS;
}
