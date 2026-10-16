import React, { useState } from 'react';

export const SocialCommunitySection: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const handleSharePortal = async () => {
    const portalUrl = window.location.href;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(portalUrl);
      }
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    } catch {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribedEmail) return;
    setSubscribeSuccess(true);
    setSubscribedEmail('');
    setTimeout(() => setSubscribeSuccess(false), 5000);
  };

  return (
    <section className="py-12 bg-stone-900 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block mb-2">
            Jejaring & Komunitas Media Sosial
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3 text-balance">
            Terhubung Bersama 300.000+ Santri, Alumni, dan Pengasuh Pondok di Seluruh Dunia
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
            Ikuti kanal resmi <strong className="text-stone-200">infopesantren.online</strong> di media sosial untuk mendapatkan pembaruan info beasiswa santri, siaran langsung pengajian kitab, dan warta pesantren secara real-time.
          </p>
        </div>

        {/* 4 Social Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {/* WhatsApp Channel */}
          <div className="bg-stone-800/80 border border-stone-700 rounded-xl p-5 flex flex-col justify-between hover:border-emerald-500 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.09-1.1l-.29-.17-3.04.8 1.1-2.97-.19-.3a8.17 8.17 0 01-1.25-4.5c0-4.54 3.7-8.24 8.24-8.24z" />
                </svg>
              </div>
              <h4 className="text-base font-semibold text-white mb-1">Saluran WhatsApp</h4>
              <p className="text-xs text-stone-400 mb-3 leading-relaxed">
                Warta beasiswa terverifikasi dan agenda haul akbar tiap hari.
              </p>
              <div className="text-[11px] text-emerald-400 font-mono mb-4">
                92.400+ Pengikut
              </div>
            </div>
            <a
              href="https://whatsapp.com/channel"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 px-3 text-center text-xs font-semibold text-stone-900 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors"
            >
              Ikuti Saluran WA
            </a>
          </div>

          {/* Telegram Channel */}
          <div className="bg-stone-800/80 border border-stone-700 rounded-xl p-5 flex flex-col justify-between hover:border-sky-500 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sky-950 text-sky-400 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .34z" />
                </svg>
              </div>
              <h4 className="text-base font-semibold text-white mb-1">Telegram Santri</h4>
              <p className="text-xs text-stone-400 mb-3 leading-relaxed">
                Grup diskusi bahtsul masail & unduhan PDF kitab kuning makna pegon.
              </p>
              <div className="text-[11px] text-sky-400 font-mono mb-4">
                48.500+ Anggota
              </div>
            </div>
            <a
              href="https://t.me/infopesantren_online"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 px-3 text-center text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-md transition-colors"
            >
              Gabung Grup Telegram
            </a>
          </div>

          {/* YouTube Pesantren Media */}
          <div className="bg-stone-800/80 border border-stone-700 rounded-xl p-5 flex flex-col justify-between hover:border-red-500 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-950 text-red-400 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h4 className="text-base font-semibold text-white mb-1">YouTube Khazanah</h4>
              <p className="text-xs text-stone-400 mb-3 leading-relaxed">
                Video dokumenter profil pondok pesantren tertua dan rekaman dawuh kyai.
              </p>
              <div className="text-[11px] text-red-400 font-mono mb-4">
                85.000+ Subscriber
              </div>
            </div>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 px-3 text-center text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-md transition-colors"
            >
              Tonton di YouTube
            </a>
          </div>

          {/* Instagram Official */}
          <div className="bg-stone-800/80 border border-stone-700 rounded-xl p-5 flex flex-col justify-between hover:border-pink-500 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-pink-950 text-pink-400 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h4 className="text-base font-semibold text-white mb-1">Instagram Media</h4>
              <p className="text-xs text-stone-400 mb-3 leading-relaxed">
                Infografis fiqh praktis, kata mutiara kyai, dan potret santri nusantara.
              </p>
              <div className="text-[11px] text-pink-400 font-mono mb-4">
                125.000+ Followers
              </div>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 px-3 text-center text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-md transition-colors"
            >
              Follow @infopesantren
            </a>
          </div>
        </div>

        {/* Newsletter & Portal Share Bar */}
        <div className="p-6 bg-stone-800/40 rounded-xl border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-1/2">
            <h4 className="text-base font-semibold text-white mb-1">
              Buletin Warta Santri Mingguan
            </h4>
            <p className="text-xs text-stone-400">
              Langganan gratis intisari warta pesantren terpenting langsung ke email Anda setiap hari Senin.
            </p>
            {subscribeSuccess && (
              <span className="text-xs text-emerald-400 font-medium mt-2 block">
                ✓ Terima kasih! Anda telah terdaftar dalam buletin mingguan infopesantren.online
              </span>
            )}
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              required
              value={subscribedEmail}
              onChange={(e) => setSubscribedEmail(e.target.value)}
              placeholder="Masukkan alamat email Anda..."
              className="w-full sm:w-64 text-xs px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-md text-stone-200 placeholder-stone-500 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-stone-900 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors whitespace-nowrap cursor-pointer"
            >
              Daftar Buletin
            </button>
            <button
              type="button"
              onClick={handleSharePortal}
              className="w-full sm:w-auto px-3.5 py-2.5 text-xs font-medium text-stone-300 bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-md transition-colors whitespace-nowrap cursor-pointer"
            >
              {copiedLink ? 'Tautan Portal Tersalin!' : 'Bagikan Web Ini'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
