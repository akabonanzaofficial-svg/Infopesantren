import React from 'react';
import { Article } from '../types';
import { SocialShareBar } from './SocialShareBar';

interface HeroHeadlineProps {
  leadArticle: Article;
  secondaryArticles: Article[];
  onSelectArticle: (article: Article) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
}

export const HeroHeadline: React.FC<HeroHeadlineProps> = ({
  leadArticle,
  secondaryArticles,
  onSelectArticle,
  savedIds,
  onToggleSave,
}) => {
  if (!leadArticle) return null;

  return (
    <section className="py-6 sm:py-8 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Lead Story (Rank 1 - 7 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between group">
            <div>
              {/* Media Container */}
              <div
                onClick={() => onSelectArticle(leadArticle)}
                className="relative rounded-lg overflow-hidden bg-stone-200 aspect-16/9 cursor-pointer mb-4"
              >
                <img
                  src={leadArticle.imageUrl}
                  alt={leadArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold uppercase tracking-wider text-emerald-300">
                    {leadArticle.category}
                  </span>
                  <span className="text-stone-300 tabular-nums">{leadArticle.readTime}</span>
                </div>
              </div>

              {/* Unboxed Metadata */}
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                <span className="font-semibold text-emerald-800">{leadArticle.location || 'Nusantara'}</span>
                <span aria-hidden="true">·</span>
                <span>{leadArticle.publishedAt}</span>
                <span aria-hidden="true">·</span>
                <span>Oleh {leadArticle.author.name}</span>
              </div>

              {/* Headline */}
              <h2
                onClick={() => onSelectArticle(leadArticle)}
                className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 group-hover:text-emerald-900 transition-colors cursor-pointer leading-tight mb-3 text-balance"
              >
                {leadArticle.title}
              </h2>

              {/* Summary Deck */}
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-4">
                {leadArticle.summary}
              </p>
            </div>

            {/* Bottom Actions Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-stone-200 text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onSelectArticle(leadArticle)}
                  className="font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
                >
                  <span>Baca Selengkapnya</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <button
                  onClick={() => onToggleSave(leadArticle.id)}
                  className={`flex items-center gap-1 cursor-pointer ${
                    savedIds.includes(leadArticle.id) ? 'text-amber-600 font-medium' : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill={savedIds.includes(leadArticle.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <span>{savedIds.includes(leadArticle.id) ? 'Tersimpan' : 'Simpan'}</span>
                </button>
              </div>

              {/* Compact Social Share buttons */}
              <SocialShareBar article={leadArticle} compact />
            </div>
          </div>

          {/* Secondary Salience Tier (5 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-200 pt-6 lg:pt-0 lg:pl-8">
            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-stone-500 block mb-1">
                Pilihan Redaksi
              </span>
              <h3 className="text-lg font-serif font-bold text-stone-900">
                Sorotan Utama Hari Ini
              </h3>
            </div>

            <div className="divide-y divide-stone-200 flex-1 flex flex-col justify-between">
              {secondaryArticles.slice(0, 3).map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => onSelectArticle(item)}
                  className="py-4 first:pt-0 last:pb-0 group cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-serif text-2xl font-bold text-stone-300 group-hover:text-emerald-700 transition-colors leading-none shrink-0 tabular-nums">
                      0{idx + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-1">
                        <span className="font-medium text-emerald-800">{item.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.readTime}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-stone-900 group-hover:text-emerald-900 leading-snug transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buletin Mini Callout */}
            <div className="mt-6 p-3.5 bg-emerald-900 text-stone-100 rounded-lg">
              <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1">
                Komunitas Pembaca Santri
              </div>
              <p className="text-xs text-stone-300 mb-3 leading-relaxed">
                Dapatkan rangkuman riset kitab kuning dan beasiswa santri tiap Jumat sore langsung ke WhatsApp Anda.
              </p>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-400 text-stone-950 font-medium text-xs rounded hover:bg-emerald-300 transition-colors"
              >
                <span>Gabung Saluran WhatsApp</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
