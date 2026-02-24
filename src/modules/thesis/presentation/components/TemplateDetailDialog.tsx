'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import type { ThesisTemplate } from '../../domain/entities/ThesisTemplate';

interface Props {
  template: ThesisTemplate | null;
  open: boolean;
  onClose: () => void;
  onUse: (id: string) => void;
}

export default function TemplateDetailDialog({ template, open, onClose, onUse }: Props) {
  if (!template) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="bg-surface border-border text-ink max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
        <DialogHeader>
          {/* Badges row */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-brand-green/10 text-brand-green-light">
              {template.thesisType.name}
            </span>
            <span className="text-[11px] text-ink-faint">
              {template.university.shortName} · {template.university.city}
            </span>
          </div>

          <DialogTitle className="text-base font-bold text-ink leading-snug">
            {template.name}
          </DialogTitle>

          <p className="text-[11px] text-ink-faint mt-0.5">
            {template.university.name}
          </p>

          <DialogDescription className="text-xs text-ink-soft leading-relaxed mt-2">
            {template.description}
          </DialogDescription>
        </DialogHeader>

        {/* Chapter breakdown — scrollable */}
        <div className="flex-1 overflow-y-auto mt-2 pr-1">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-ink-soft uppercase tracking-wider">
              Estructura interna
            </p>
            <span className="text-[11px] text-ink-faint">
              {template.totalSections} secciones totales
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            {template.chapters.map((chapter, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-surface-2 hover:bg-surface-3 transition-colors"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-[10px] font-mono text-ink-faint shrink-0 w-5 text-right">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-ink truncate">{chapter.title}</span>
                </div>
                <span className="text-[11px] text-ink-faint shrink-0 tabular-nums">
                  {chapter.sectionCount} secc.
                </span>
              </div>
            ))}
          </div>
        </div>

        <DialogFooter className="mt-4 pt-3 border-t border-border">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-ink-soft hover:text-ink transition-colors rounded-lg hover:bg-surface-2"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              onUse(template.id);
              onClose();
            }}
            className="px-5 py-2 rounded-lg bg-brand-green hover:bg-brand-green-dark text-white text-sm font-semibold transition-colors"
          >
            Usar plantilla
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
