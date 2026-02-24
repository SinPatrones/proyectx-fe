import type { ThesisTemplate } from '../../domain/entities/ThesisTemplate';
import PromptForm from './PromptForm';
import TemplateGrid from './TemplateGrid';

interface Props {
  templates: ThesisTemplate[];
  studentName?: string;
}

export default function CreateSection({ templates, studentName = 'estudiante' }: Props) {
  return (
    <div className="flex flex-col gap-10 max-w-3xl w-full mx-auto px-4 py-8 md:py-12">
      {/* Hero + Prompt */}
      <section className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold text-ink">
            Hola, {studentName} 👋
          </h1>
          <p className="text-ink-soft mt-1">¿Qué vas a investigar hoy?</p>
        </div>
        <PromptForm />
      </section>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-ink-faint">o elige una plantilla</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Templates */}
      <section className="flex flex-col gap-3">
        <h2 className="text-base font-semibold text-ink">Plantillas disponibles</h2>
        <TemplateGrid templates={templates} />
      </section>
    </div>
  );
}
