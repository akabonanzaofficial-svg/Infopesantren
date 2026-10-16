import React, { useState } from 'react';
import { PRAYER_SCHEDULES } from '../data/newsData';

export const PrayerTimesBar: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('jombang');
  const cityData = PRAYER_SCHEDULES[selectedCity] || PRAYER_SCHEDULES.jombang;

  return (
    <div className="bg-stone-950 text-stone-300 border-b border-stone-800 text-xs py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Indonesian Masehi & Hijri Calendar Date */}
        <div className="flex items-center gap-2 text-stone-400">
          <span className="font-medium text-stone-200">Jumat, 16 Oktober 2026</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span>5 Rabiul Akhir 1448 H</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span className="hidden sm:inline text-emerald-400 font-medium">Khazanah & Kabar Pesantren Nusantara</span>
        </div>

        {/* Jadwal Sholat mini strip with city dropdown */}
        <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto justify-between md:justify-end no-scrollbar">
          <div className="flex items-center gap-1.5 text-stone-400 shrink-0">
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[11px] uppercase tracking-wider text-stone-400">Jadwal Sholat:</span>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-stone-900 text-stone-200 text-xs border border-stone-700 rounded px-1.5 py-0.5 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="jombang">Jombang</option>
              <option value="surabaya">Surabaya</option>
              <option value="jakarta">Jakarta</option>
              <option value="yogyakarta">Yogyakarta</option>
              <option value="bandung">Bandung</option>
              <option value="aceh">Banda Aceh</option>
              <option value="makassar">Makassar</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-[11px] tabular-nums shrink-0">
            {Object.entries(cityData.times).map(([prayer, time]) => (
              <span key={prayer} className="flex items-center gap-1">
                <span className="text-stone-400">{prayer}</span>
                <span className="font-semibold text-stone-200">{time}</span>
                {prayer !== 'Isya' && <span className="text-stone-700 ml-1">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
