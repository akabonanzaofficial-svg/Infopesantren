import React from 'react';
import { Article } from '../types';

interface SavedArticlesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveSave: (id: string) => void;
}

export const SavedArticlesModal: React.FC<SavedArticlesModalProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveSave,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-xs flex justify-center p-3 sm:p-6">
      <div
        className="bg-white w-full max-w-xl rounded-xl shadow-2xl border border-stone-200 overflow-hidden my-auto flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-stone-900 text-stone-100 px-6 py-4 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
              <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <h3 className="text-base font-serif font-bold text-white">
              Warta Tersimpan ({savedArticles.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-white rounded-md cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {savedArticles.length === 0 ? (
            <div className="text-center py-12 text-stone-500 text-xs">
              <svg className="w-10 h-10 mx-auto text-stone-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              Belum ada berita yang Anda simpan. Klik ikon bookmark pada warta yang ingin Anda baca nanti.
            </div>
          ) : (
            <div className="divide-y divide-stone-200">
              {savedArticles.map((article) => (
                <div key={article.id} className="py-3.5 flex items-start justify-between gap-3 group">
                  <div
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="cursor-pointer flex-1"
                  >
                    <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider block mb-0.5">
                      {article.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-semibold text-stone-900 group-hover:text-emerald-900 leading-snug">
                      {article.title}
                    </h4>
                    <span className="text-[11px] text-stone-400 mt-1 block">
                      {article.publishedAt} · {article.readTime}
                    </span>
                  </div>
                  <button
                    onClick={() => onRemoveSave(article.id)}
                    title="Hapus simpanan"
                    className="p-1.5 text-stone-400 hover:text-red-600 rounded transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
