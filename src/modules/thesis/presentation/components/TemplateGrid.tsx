'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import type { ThesisTemplate } from '../../domain/entities/ThesisTemplate';
import type { ThesisType } from '../../domain/value-objects/ThesisType';
import TemplateCard from './TemplateCard';
import TemplateDetailDialog from './TemplateDetailDialog';

const TABS: { label: string; value: ThesisType | 'all' }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Pregrado', value: 'undergrad' },
  { label: 'Maestría', value: 'masters' },
  { label: 'Doctorado', value: 'phd' },
];

interface Props {
  templates: ThesisTemplate[];
}

export default function TemplateGrid({ templates }: Props) {
  const [activeTab, setActiveTab] = useState<ThesisType | 'all'>('all');
  const [search, setSearch] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<ThesisTemplate | null>(null);

  const filtered = templates.filter((t) => {
    const matchesTab = activeTab === 'all' || t.thesisType.code === activeTab;
    const query = search.trim().toLowerCase();
    const matchesSearch =
      !query ||
      t.name.toLowerCase().includes(query) ||
      t.university.name.toLowerCase().includes(query) ||
      t.university.shortName.toLowerCase().includes(query) ||
      t.description.toLowerCase().includes(query);
    return matchesTab && matchesSearch;
  });

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Search + Filter row */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-faint pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nombre o universidad..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-surface border border-border text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand-green/60 transition-colors"
            />
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.value
                    ? 'bg-brand-green text-white'
                    : 'bg-surface text-ink-soft hover:bg-surface-2 hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-sm text-ink-faint py-8 text-center">
            No hay plantillas que coincidan con la búsqueda.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onViewDetail={setSelectedTemplate}
              />
            ))}
          </div>
        )}
      </div>

      {/* Detail dialog — rendered once at grid level */}
      <TemplateDetailDialog
        template={selectedTemplate}
        open={selectedTemplate !== null}
        onClose={() => setSelectedTemplate(null)}
        onUse={(id) => console.log('template selected:', id)}
      />
    </>
  );
}
