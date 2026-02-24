'use client';

import { useState } from 'react';

export default function PromptForm() {
  const [text, setText] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    console.log('prompt:', text.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Describe el tema de tu tesis..."
        rows={4}
        className="w-full resize-none rounded-xl bg-surface border border-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand-green/60 transition-colors"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!text.trim()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-green hover:bg-brand-green-dark disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors"
        >
          <span>✦</span>
          Generar estructura
          <span>→</span>
        </button>
      </div>
    </form>
  );
}
