import type { ThesisProject } from '../entities/ThesisProject';

export interface IThesisProjectRepository {
  getStudentProjects(studentId: string): Promise<ThesisProject[]>;
}
