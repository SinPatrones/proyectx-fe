'use client';

import type { ThesisTemplate } from '../../domain/entities/ThesisTemplate';

interface Props {
  template: ThesisTemplate;
  onViewDetail: (template: ThesisTemplate) => void;
}

export default function TemplateCard({ template, onViewDetail }: Props) {
  return (
    <div className="bg-surface border border-border rounded-xl p-4 flex flex-col gap-3 hover:border-brand-green/40 transition-colors">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-brand-green/10 text-brand-green-light leading-none">
          {template.thesisType.name}
        </span>
        <span className="text-[10px] text-ink-faint">
          {template.totalSections} secciones
        </span>
      </div>

      {/* University */}
      <div>
        <p className="text-[11px] text-ink-faint">
          {template.university.shortName} · {template.university.city}
        </p>
        <p className="text-sm font-semibold text-ink mt-0.5">{template.name}</p>
      </div>

      {/* Description */}
      <p className="text-xs text-ink-soft leading-relaxed line-clamp-2 flex-1">
        {template.description}
      </p>

      {/* Actions */}
      <div className="flex gap-2 mt-auto">
        <button
          onClick={() => onViewDetail(template)}
          className="flex-1 py-2 px-3 rounded-lg border border-border text-ink-soft hover:text-ink hover:border-border text-sm font-medium transition-colors hover:bg-surface-2"
        >
          Ver detalles
        </button>
        <button
          onClick={() => console.log('template selected:', template.id)}
          className="flex-1 py-2 px-3 rounded-lg bg-brand-green hover:bg-brand-green-dark text-white text-sm font-semibold transition-colors"
        >
          Usar
        </button>
      </div>
    </div>
  );
}
