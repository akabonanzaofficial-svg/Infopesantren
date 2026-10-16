import React, { useState } from 'react';
import { Article, CategoryType } from '../types';

interface SubmitNewsModalProps {
  onClose: () => void;
  onSubmitSuccess: (newArticle: Article) => void;
}

export const SubmitNewsModal: React.FC<SubmitNewsModalProps> = ({ onClose, onSubmitSuccess }) => {
  const [title, setTitle] = useState('');
  const [pesantren, setPesantren] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('Santri');
  const [category, setCategory] = useState<Exclude<CategoryType, 'Semua'>>('Budaya & Santri');
  const [location, setLocation] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !authorName.trim()) return;

    // Convert raw content paragraphs
    const paragraphs = content
      .split('\n')
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

    const newArticle: Article = {
      id: `art-${Date.now()}`,
      title: title.trim(),
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category,
      summary: summary.trim() || paragraphs[0]?.slice(0, 160) + '...',
      content: paragraphs,
      imageUrl: '/src/assets/images/santri_digital_lab_1792150071693.jpg',
      imageCaption: `Liputan warta kiriman dari santri/humas ${pesantren || 'Pondok Pesantren'}.`,
      author: {
        name: authorName.trim(),
        role: authorRole,
        pesantrenOrigin: pesantren.trim() || undefined,
      },
      publishedAt: 'Hari Ini',
      readTime: '3 menit baca',
      tags: ['Warta Santri', category, pesantren.trim() || 'Pesantren'].filter(Boolean),
      views: 120,
      likes: 12,
      location: location.trim() || 'Indonesia',
    };

    setSubmitted(true);
    setTimeout(() => {
      onSubmitSuccess(newArticle);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-xs flex justify-center p-3 sm:p-6">
      <div
        className="bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-stone-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-stone-900 text-stone-100 px-6 py-4 flex items-center justify-between border-b border-stone-800">
          <div>
            <h3 className="text-lg font-serif font-bold text-white">
              Kirim Berita & Opini Santri
            </h3>
            <p className="text-xs text-stone-400">
              Redaksi Warga infopesantren.online — Angkat warta positif pondok Anda ke kancah nasional
            </p>
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

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center bg-stone-50">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl font-serif font-bold text-stone-900 mb-2">
              Warta Berhasil Diterbitkan!
            </h4>
            <p className="text-xs text-stone-600 max-w-md mx-auto mb-4 leading-relaxed">
              Karya tulis dan liputan warta dari Anda telah ditambahkan ke portal <strong>infopesantren.online</strong>. Anda dapat langsung membaca dan menyebarkannya ke grup WhatsApp santri.
            </p>
            <div className="text-[11px] text-stone-400">Memuat artikel Anda...</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div>
              <label className="block text-xs font-semibold text-stone-800 mb-1">
                Judul Warta / Artikel *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Contoh: Santri Lirboyo Ciptakan Aplikasi Digitalisasi Kitab Kuning Pegon"
                className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Kategori Warta
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Exclude<CategoryType, 'Semua'>)}
                  className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
                >
                  <option value="Berita Utama">Berita Utama</option>
                  <option value="Pendidikan & Beasiswa">Pendidikan & Beasiswa</option>
                  <option value="Kajian & Kitab">Kajian & Kitab</option>
                  <option value="Tokoh & Ulama">Tokoh & Ulama</option>
                  <option value="Budaya & Santri">Budaya & Santri</option>
                  <option value="Opini & Riset">Opini & Riset</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Pesantren / Lembaga Asal
                </label>
                <input
                  type="text"
                  value={pesantren}
                  onChange={(e) => setPesantren(e.target.value)}
                  placeholder="Contoh: PP Tebuireng / PP Krapyak"
                  className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Nama Penulis *
                </label>
                <input
                  type="text"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Nama Lengkap Anda"
                  className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Status / Peran
                </label>
                <select
                  value={authorRole}
                  onChange={(e) => setAuthorRole(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
                >
                  <option value="Santri">Santri</option>
                  <option value="Humas Pondok">Humas Pondok</option>
                  <option value="Alumni Pesantren">Alumni Pesantren</option>
                  <option value="Ustadz / Pengasuh">Ustadz / Pengasuh</option>
                  <option value="Wartawan Warga">Wartawan Warga</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Kota / Kabupaten
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Contoh: Jombang, Jatim"
                  className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-800 mb-1">
                Ringkasan Berita (1-2 Kalimat)
              </label>
              <input
                type="text"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Ringkasan poin penting berita untuk tampilan depan..."
                className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-800 mb-1">
                Isi Lengkap Warta / Opini *
              </label>
              <textarea
                required
                rows={6}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Tuliskan naskah warta secara terperinci (gunakan baris baru untuk memisahkan paragraf)..."
                className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-800 mb-1">
                Nomor WhatsApp Kontak (Opsional, untuk konfirmasi redaksi)
              </label>
              <input
                type="text"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="0812-xxxx-xxxx"
                className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-stone-200">
              <span className="text-[11px] text-stone-500">
                Warta santri bebas biaya tayang & moderasi ramah turats.
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3.5 py-1.5 text-xs text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md transition-colors cursor-pointer shadow-sm"
                >
                  Kirim & Terbitkan
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
