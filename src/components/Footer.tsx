import React from 'react';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenSubmitModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenSubmitModal }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-12 pb-8 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          {/* Brand & Manifesto (5 cols) */}
          <div className="lg:col-span-5">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xl font-serif font-bold text-white tracking-tight inline-block mb-3"
            >
              infopesantren<span className="text-emerald-400">.online</span>
            </a>
            <p className="text-stone-400 leading-relaxed text-xs max-w-sm mb-4">
              Portal warta independen khazanah pesantren, pendidikan santri, dan keilmuan Islam nusantara. Menyuarakan kearifan tradisi turats dengan sentuhan modernitas.
            </p>
            <div className="text-[11px] text-stone-500">
              Diterbitkan oleh PT Warta Media Santri Nusantara · Terdaftar di Dewan Pers & Asosiasi Media Siber Indonesia
            </div>
          </div>

          {/* Rubrik Nav (3 cols) */}
          <div className="lg:col-span-3">
            <h5 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Kanal Berita
            </h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectCategory('Berita Utama')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Berita Utama Pesantren
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Pendidikan & Beasiswa')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Info Beasiswa Santri
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Kajian & Kitab')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Kajian Turats & Kitab Kuning
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Tokoh & Ulama')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Khazanah Ulama Nusantara
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Budaya & Santri')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Budaya & Kreativitas Santri
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Opini & Riset')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Opini & Bahtsul Masail
                </button>
              </li>
            </ul>
          </div>

          {/* Redaksi & Kerjasama (4 cols) */}
          <div className="lg:col-span-4">
            <h5 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Redaksi & Partisipasi Santri
            </h5>
            <p className="text-stone-400 text-xs mb-3 leading-relaxed">
              Miliki warta menarik tentang prestasi santri atau kegiatan pondok pesantren Anda? Kirimkan rilis pers langsung ke redaksi kami.
            </p>
            <button
              onClick={onOpenSubmitModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-semibold rounded text-xs transition-colors cursor-pointer mb-4"
            >
              <span>Kirim Rilis Pondok</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <div className="text-[11px] text-stone-500 space-y-1">
              <div>Email Redaksi: redaksi@infopesantren.online</div>
              <div>WhatsApp Layanan: +62 812-3456-7890</div>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} infopesantren.online. Hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-4">
            <a href="#pedoman" onClick={(e) => { e.preventDefault(); alert('Pedoman Pemberitaan Media Siber: infopesantren.online senantiasa tunduk pada UU Pers No. 40 Tahun 1999 dan kode etik jurnalistik verifikasi.'); }} className="hover:text-stone-300">
              Pedoman Media Siber
            </a>
            <span aria-hidden="true">·</span>
            <a href="#tentang" onClick={(e) => { e.preventDefault(); alert('infopesantren.online adalah wadah digital pemersatu informasi pesantren nusantara yang berkhidmat untuk literasi umat.'); }} className="hover:text-stone-300">
              Tentang Redaksi
            </a>
            <span aria-hidden="true">·</span>
            <a href="#kontak" onClick={(e) => { e.preventDefault(); alert('Hubungi Redaksi via WhatsApp: 0812-3456-7890 atau email redaksi@infopesantren.online'); }} className="hover:text-stone-300">
              Kontak Kami
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
