import React from 'react';
import { Article, CategoryType } from '../types';
import { SocialShareBar } from './SocialShareBar';

interface NewsGridProps {
  articles: Article[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onSelectArticle: (article: Article) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  searchQuery: string;
  onClearSearch: () => void;
}

const CATEGORIES: CategoryType[] = [
  'Semua',
  'Berita Utama',
  'Pendidikan & Beasiswa',
  'Kajian & Kitab',
  'Tokoh & Ulama',
  'Budaya & Santri',
  'Opini & Riset',
];

export const NewsGrid: React.FC<NewsGridProps> = ({
  articles,
  activeCategory,
  onSelectCategory,
  onSelectArticle,
  savedIds,
  onToggleSave,
  searchQuery,
  onClearSearch,
}) => {
  return (
    <section className="py-8" id="berita-terbaru">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Filter Tabs (Functional buttons as per frontend-design Section 1.A) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
          <div>
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              {searchQuery ? `Hasil Pencarian: "${searchQuery}"` : 'Jejaring Berita Pesantren'}
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Menyajikan warta terverifikasi, khazanah keilmuan, dan dinamika santri seluruh Indonesia
            </p>
          </div>

          {searchQuery ? (
            <button
              onClick={onClearSearch}
              className="text-xs font-medium text-emerald-800 hover:underline flex items-center gap-1 cursor-pointer self-start"
            >
              <span>Reset Pencarian</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : (
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg overflow-x-auto max-w-full no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid List */}
        {articles.length === 0 ? (
          <div className="text-center py-16 bg-white border border-stone-200 rounded-xl p-8">
            <svg className="w-12 h-12 mx-auto text-stone-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h4 className="text-base font-semibold text-stone-800 mb-1">
              Tidak ada berita yang ditemukan
            </h4>
            <p className="text-xs text-stone-500 mb-4">
              Coba gunakan kata kunci lain atau pilih kategori yang berbeda.
            </p>
            <button
              onClick={() => {
                onClearSearch();
                onSelectCategory('Semua');
              }}
              className="px-4 py-2 text-xs font-medium text-white bg-emerald-800 hover:bg-emerald-900 rounded-md transition-colors"
            >
              Lihat Semua Berita
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article) => {
              const isSaved = savedIds.includes(article.id);

              return (
                <article
                  key={article.id}
                  className="bg-white border border-stone-200 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-stone-300 hover:shadow-xs group"
                >
                  <div>
                    {/* Image Aspect Box */}
                    <div
                      onClick={() => onSelectArticle(article)}
                      className="aspect-16/10 bg-stone-100 overflow-hidden relative cursor-pointer"
                    >
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                      <div className="absolute top-2.5 right-2.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleSave(article.id);
                          }}
                          aria-label="Simpan warta"
                          className={`p-1.5 rounded-full backdrop-blur-xs transition-colors cursor-pointer ${
                            isSaved
                              ? 'bg-amber-500 text-stone-900 shadow-xs'
                              : 'bg-stone-900/60 text-white hover:bg-stone-900/80'
                          }`}
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5">
                      {/* Unboxed Metadata with · separator */}
                      <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                        <span className="font-semibold text-emerald-800">{article.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.publishedAt}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{article.readTime}</span>
                      </div>

                      <h4
                        onClick={() => onSelectArticle(article)}
                        className="text-base sm:text-lg font-serif font-bold text-stone-900 group-hover:text-emerald-900 leading-snug transition-colors cursor-pointer mb-2 line-clamp-2"
                      >
                        {article.title}
                      </h4>

                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="px-5 py-3 border-t border-stone-100 flex items-center justify-between text-xs bg-stone-50/50">
                    <button
                      onClick={() => onSelectArticle(article)}
                      className="font-medium text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Baca Lengkap</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <SocialShareBar article={article} compact />
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
