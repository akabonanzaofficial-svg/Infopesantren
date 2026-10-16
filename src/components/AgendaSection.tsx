import React, { useState } from 'react';
import { UPCOMING_EVENTS } from '../data/newsData';
import { AgendaEvent } from '../types';

export const AgendaSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShareEvent = (event: AgendaEvent) => {
    const text = `*AGENDA PESANTREN: ${event.title}*\n📍 Tempat: ${event.pesantren}, ${event.location}\n🗓️ Waktu: ${event.date} (${event.time})\n📞 Kontak: ${event.contact}\n\nSumber: infopesantren.online`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setCopiedId(event.id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  return (
    <section className="py-10 bg-stone-100/70 border-b border-stone-200" id="agenda-pesantren">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block mb-1">
              Kalender Acara Pesantren
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              Agenda & Bahtsul Masail Nasional
            </h3>
          </div>
          <p className="text-xs text-stone-500 max-w-sm">
            Jadwal kegiatan ilmiah, peringatan haul kyai sepuh, dan forum keilmuan pondok se-Indonesia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {UPCOMING_EVENTS.map((evt) => (
            <div
              key={evt.id}
              className="bg-white border border-stone-200 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-600 transition-colors shadow-2xs"
            >
              <div>
                {/* Category & date unboxed */}
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span className="font-semibold text-emerald-800 text-[11px] uppercase tracking-wider">
                    {evt.category}
                  </span>
                  <span className="font-mono text-stone-400 text-[11px]">{evt.time}</span>
                </div>

                <h4 className="text-sm font-bold text-stone-900 font-serif leading-snug mb-2 line-clamp-2">
                  {evt.title}
                </h4>

                <div className="space-y-1 text-xs text-stone-600 mb-4">
                  <div className="flex items-start gap-1.5">
                    <svg className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium text-stone-800">{evt.pesantren}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-500">
                    <svg className="w-3.5 h-3.5 text-stone-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{evt.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
                    <svg className="w-3.5 h-3.5 text-emerald-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{evt.date}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-400 truncate max-w-[120px]">{evt.contact}</span>
                <button
                  onClick={() => handleShareEvent(evt)}
                  className="px-2.5 py-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>{copiedId === evt.id ? 'Tersalin' : 'Bagikan WA'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
