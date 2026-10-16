import React, { useState } from 'react';
import { Article } from '../types';

interface BreakingTickerProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const BreakingTicker: React.FC<BreakingTickerProps> = ({ articles, onSelectArticle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const breakingArticles = articles.filter(a => a.isBreaking || a.views > 7000);

  const currentArticle = breakingArticles[currentIndex] || articles[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % breakingArticles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + breakingArticles.length) % breakingArticles.length);
  };

  if (!currentArticle) return null;

  return (
    <div className="bg-stone-100 border-b border-stone-200 py-2 px-4 sm:px-6 lg:px-8 text-xs text-stone-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 overflow-hidden">
          {/* Label unboxed */}
          <span className="font-semibold text-emerald-800 uppercase tracking-wider text-[11px] shrink-0 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-700 rounded-sm"></span>
            Warta Terkini
          </span>

          <span aria-hidden="true" className="text-stone-300">/</span>

          {/* Interactive headline button */}
          <button
            onClick={() => onSelectArticle(currentArticle)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="truncate text-left font-medium text-stone-800 hover:text-emerald-800 hover:underline transition-colors cursor-pointer"
          >
            <span className="text-stone-500 mr-2">[{currentArticle.category}]</span>
            {currentArticle.title}
          </button>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 text-stone-500 shrink-0">
          <button
            onClick={handlePrev}
            aria-label="Berita sebelumnya"
            className="p-1 hover:text-stone-900 rounded cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <span className="text-[10px] tabular-nums px-1 text-stone-400">
            {currentIndex + 1} / {breakingArticles.length}
          </span>

          <button
            onClick={handleNext}
            aria-label="Berita selanjutnya"
            className="p-1 hover:text-stone-900 rounded cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
