import type { ThesisTemplate } from '../entities/ThesisTemplate';
import type { ThesisType } from '../value-objects/ThesisType';

export interface IThesisTemplateRepository {
  getTemplates(filter?: { thesisType?: ThesisType }): Promise<ThesisTemplate[]>;
}
