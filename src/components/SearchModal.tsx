import React, { useState, useEffect, useRef } from 'react';
import { Article } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  onSearchSubmit: (query: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
  onSearchSubmit,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.summary.toLowerCase().includes(query.toLowerCase()) ||
          a.category.toLowerCase().includes(query.toLowerCase()) ||
          a.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const handleFullSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearchSubmit(query.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-xs flex justify-center p-3 sm:p-6">
      <div
        className="bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-stone-200 overflow-hidden my-auto flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleFullSearch} className="p-4 border-b border-stone-200 flex items-center gap-3 bg-stone-50">
          <svg className="w-5 h-5 text-stone-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari berita beasiswa, kitab kuning, bahtsul masail, atau nama kyai..."
            className="w-full text-sm bg-transparent border-none focus:outline-none text-stone-900 placeholder-stone-400"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-xs text-stone-400 hover:text-stone-700"
            >
              Hapus
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 rounded"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </form>

        <div className="p-4 overflow-y-auto flex-1">
          {query.trim() === '' ? (
            <div className="py-6 text-center text-xs text-stone-400">
              <p className="mb-2">Ketik kata kunci untuk mencari warta</p>
              <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                <span className="text-stone-500 font-medium mr-1">Rekomendasi:</span>
                {['Beasiswa', 'Kitab Kuning', 'Ihya Ulumiddin', 'Robotika Santri', 'Bahtsul Masail'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setQuery(tag)}
                    className="text-emerald-800 hover:underline cursor-pointer bg-stone-100 px-2 py-0.5 rounded text-[11px]"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-stone-500">
              Tidak ada artikel yang cocok dengan &ldquo;{query}&rdquo;.
            </div>
          ) : (
            <div className="divide-y divide-stone-200">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-2">
                Ditemukan {filtered.length} Berita:
              </div>
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectArticle(item);
                    onClose();
                  }}
                  className="py-3 cursor-pointer group flex items-start gap-3"
                >
                  <div className="w-16 h-12 bg-stone-200 rounded overflow-hidden shrink-0">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-emerald-800 block">
                      {item.category} · {item.publishedAt}
                    </span>
                    <h5 className="text-xs sm:text-sm font-semibold text-stone-900 group-hover:text-emerald-900 line-clamp-1">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-stone-500 line-clamp-1">{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
