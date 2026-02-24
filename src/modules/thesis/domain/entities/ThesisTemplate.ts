import type { ThesisType } from '../value-objects/ThesisType';

export interface ThesisTemplateChapter {
  title: string;
  sectionCount: number;
}

export interface ThesisTemplate {
  id: string;
  name: string;
  description: string;
  university: {
    name: string;
    shortName: string;
    city: string;
  };
  thesisType: {
    code: ThesisType;
    name: string;
  };
  totalSections: number;
  chapters: ThesisTemplateChapter[];
}
