import type { ProjectStatus } from '../value-objects/ProjectStatus';
import type { ThesisType } from '../value-objects/ThesisType';

export interface ThesisProject {
  id: string;
  title: string;
  status: ProjectStatus;
  progress: number; // 0–100
  universityShortName: string;
  thesisType: ThesisType;
  updatedAt: string; // ISO date string
}
