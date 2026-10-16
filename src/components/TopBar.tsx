import React from 'react';

interface TopBarProps {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  onOpenSubmitModal: () => void;
  onOpenSearch: () => void;
  savedArticlesCount: number;
  onOpenSaved: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenSubmitModal,
  onOpenSearch,
  savedArticlesCount,
  onOpenSaved,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element brand wordmark */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory('Semua');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-emerald-400 transition-colors font-serif"
          >
            infopesantren<span className="text-emerald-400">.online</span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300">
            <button
              onClick={() => onSelectCategory('Semua')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === 'Semua' ? 'text-emerald-400 border-b-2 border-emerald-400 pb-0.5' : ''
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => onSelectCategory('Berita Utama')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === 'Berita Utama' ? 'text-emerald-400 border-b-2 border-emerald-400 pb-0.5' : ''
              }`}
            >
              Berita Utama
            </button>
            <button
              onClick={() => onSelectCategory('Pendidikan & Beasiswa')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === 'Pendidikan & Beasiswa' ? 'text-emerald-400 border-b-2 border-emerald-400 pb-0.5' : ''
              }`}
            >
              Beasiswa Santri
            </button>
            <button
              onClick={() => onSelectCategory('Kajian & Kitab')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === 'Kajian & Kitab' ? 'text-emerald-400 border-b-2 border-emerald-400 pb-0.5' : ''
              }`}
            >
              Kitab Kuning
            </button>
            <button
              onClick={() => onSelectCategory('Tokoh & Ulama')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === 'Tokoh & Ulama' ? 'text-emerald-400 border-b-2 border-emerald-400 pb-0.5' : ''
              }`}
            >
              Khazanah Ulama
            </button>
            <button
              onClick={() => onSelectCategory('Agenda Kegiatan')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === 'Agenda Kegiatan' ? 'text-emerald-400 border-b-2 border-emerald-400 pb-0.5' : ''
              }`}
            >
              Agenda Pondok
            </button>
          </nav>

          {/* Zone 3: 1 primary action with secondary quick utilities */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSearch}
              aria-label="Cari berita"
              className="p-2 text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              onClick={onOpenSaved}
              title="Berita Tersimpan"
              aria-label="Berita Tersimpan"
              className="relative p-2 text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              {savedArticlesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-stone-900 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {savedArticlesCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenSubmitModal}
              className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-stone-900 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
            >
              Kirim Berita
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Navigation Rail */}
        <div className="lg:hidden flex items-center gap-4 overflow-x-auto py-2.5 border-t border-stone-800 text-xs no-scrollbar">
          <button
            onClick={() => onSelectCategory('Semua')}
            className={`whitespace-nowrap shrink-0 ${activeCategory === 'Semua' ? 'text-emerald-400 font-semibold' : 'text-stone-300'}`}
          >
            Semua
          </button>
          <button
            onClick={() => onSelectCategory('Berita Utama')}
            className={`whitespace-nowrap shrink-0 ${activeCategory === 'Berita Utama' ? 'text-emerald-400 font-semibold' : 'text-stone-300'}`}
          >
            Berita Utama
          </button>
          <button
            onClick={() => onSelectCategory('Pendidikan & Beasiswa')}
            className={`whitespace-nowrap shrink-0 ${activeCategory === 'Pendidikan & Beasiswa' ? 'text-emerald-400 font-semibold' : 'text-stone-300'}`}
          >
            Beasiswa Santri
          </button>
          <button
            onClick={() => onSelectCategory('Kajian & Kitab')}
            className={`whitespace-nowrap shrink-0 ${activeCategory === 'Kajian & Kitab' ? 'text-emerald-400 font-semibold' : 'text-stone-300'}`}
          >
            Kitab Kuning
          </button>
          <button
            onClick={() => onSelectCategory('Tokoh & Ulama')}
            className={`whitespace-nowrap shrink-0 ${activeCategory === 'Tokoh & Ulama' ? 'text-emerald-400 font-semibold' : 'text-stone-300'}`}
          >
            Tokoh & Ulama
          </button>
          <button
            onClick={() => onSelectCategory('Agenda Kegiatan')}
            className={`whitespace-nowrap shrink-0 ${activeCategory === 'Agenda Kegiatan' ? 'text-emerald-400 font-semibold' : 'text-stone-300'}`}
          >
            Agenda Pondok
          </button>
        </div>
      </div>
    </header>
  );
};
