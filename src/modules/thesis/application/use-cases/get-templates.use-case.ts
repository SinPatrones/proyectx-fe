import type { ThesisTemplate } from '../../domain/entities/ThesisTemplate';
import type { ThesisType } from '../../domain/value-objects/ThesisType';

const MOCK_TEMPLATES: ThesisTemplate[] = [
  {
    id: 'tpl-uancv-undergrad',
    name: 'Tesis de Pregrado',
    university: {
      name: 'Univ. Néstor Cáceres Velásquez',
      shortName: 'UANCV',
      city: 'Juliaca',
    },
    thesisType: { code: 'undergrad', name: 'Pregrado' },
    description:
      'Estructura UANCV con parte preliminar (tapa, portada, resumen, abstract), 5 capítulos y parte final con referencias y anexos.',
    totalSections: 52,
    chapters: [
      { title: 'Parte Preliminar', sectionCount: 10 },
      { title: 'Introducción', sectionCount: 2 },
      { title: 'Cap. I: El Problema de Investigación', sectionCount: 8 },
      { title: 'Cap. II: Marco Teórico', sectionCount: 10 },
      { title: 'Cap. III: Metodología de la Investigación', sectionCount: 9 },
      { title: 'Cap. IV: Resultados y Discusión', sectionCount: 6 },
      { title: 'Cap. V: Conclusiones y Recomendaciones', sectionCount: 3 },
      { title: 'Parte Final (Referencias y Anexos)', sectionCount: 4 },
    ],
  },
  {
    id: 'tpl-continental-undergrad',
    name: 'Tesis de Pregrado',
    university: {
      name: 'Universidad Continental',
      shortName: 'UC',
      city: 'Huancayo',
    },
    thesisType: { code: 'undergrad', name: 'Pregrado' },
    description:
      'Estructura UC con 4 capítulos (planteamiento, marco teórico, metodología, aspectos administrativos). Formato ISO 690.',
    totalSections: 43,
    chapters: [
      { title: 'Parte Preliminar', sectionCount: 8 },
      { title: 'Cap. I: Planteamiento del Estudio', sectionCount: 9 },
      { title: 'Cap. II: Marco Teórico', sectionCount: 10 },
      { title: 'Cap. III: Hipótesis y Variables', sectionCount: 6 },
      { title: 'Cap. IV: Metodología de la Investigación', sectionCount: 5 },
      { title: 'Aspectos Administrativos', sectionCount: 3 },
      { title: 'Bibliografía y Anexos', sectionCount: 2 },
    ],
  },
];

export async function getTemplates(filter?: { thesisType?: ThesisType }): Promise<ThesisTemplate[]> {
  if (filter?.thesisType) {
    return MOCK_TEMPLATES.filter((t) => t.thesisType.code === filter.thesisType);
  }
  return MOCK_TEMPLATES;
}
