import React, { useState } from 'react';
import { Article } from '../types';

interface SocialShareBarProps {
  article: Article;
  compact?: boolean;
}

export const SocialShareBar: React.FC<SocialShareBarProps> = ({ article, compact = false }) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}#${article.slug}` : `https://infopesantren.online/#${article.slug}`;
  const shareText = `*${article.title}*\n\n${article.summary}\n\nBaca selengkapnya di infopesantren.online:\n${shareUrl}`;

  const handleShareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShareTelegram = () => {
    const url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title + ' - infopesantren.online')}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}&hashtags=infopesantren,pesantren,santri`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShareLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  if (compact) {
    return (
      <div className="flex items-center gap-1.5 text-stone-500">
        <span className="text-[11px] font-medium mr-1 text-stone-400">Bagikan:</span>
        <button
          onClick={handleShareWhatsApp}
          title="Bagikan ke WhatsApp"
          className="p-1.5 hover:text-emerald-600 hover:bg-emerald-50 rounded transition-colors cursor-pointer"
        >
          <span className="sr-only">WhatsApp</span>
          <svg className="w-4 h-4 fill-current text-emerald-600" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.09-1.1l-.29-.17-3.04.8 1.1-2.97-.19-.3a8.17 8.17 0 01-1.25-4.5c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.48-.73-1.71-.81-.23-.09-.39-.13-.56.13-.17.25-.65.81-.8 1-.15.15-.3.17-.55.05-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.1-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.11-.23-.17-.48-.3z" />
          </svg>
        </button>
        <button
          onClick={handleShareTelegram}
          title="Bagikan ke Telegram"
          className="p-1.5 hover:text-sky-600 hover:bg-sky-50 rounded transition-colors cursor-pointer"
        >
          <span className="sr-only">Telegram</span>
          <svg className="w-4 h-4 fill-current text-sky-500" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .34z" />
          </svg>
        </button>
        <button
          onClick={handleCopyLink}
          title="Salin Tautan"
          className="p-1.5 hover:text-stone-900 hover:bg-stone-100 rounded transition-colors cursor-pointer relative"
        >
          <span className="sr-only">Salin Tautan</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          {copied && (
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[10px] px-1.5 py-0.5 rounded shadow whitespace-nowrap">
              Tersalin!
            </span>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-stone-100 border border-stone-200 rounded-lg p-3 sm:p-4 my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-700 block">
            Bagikan Warta Ini
          </span>
          <span className="text-xs text-stone-500">
            Sebarkan kebaikan dan literasi pesantren ke media sosial Anda
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* WhatsApp */}
          <button
            onClick={handleShareWhatsApp}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.09-1.1l-.29-.17-3.04.8 1.1-2.97-.19-.3a8.17 8.17 0 01-1.25-4.5c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.48-.73-1.71-.81-.23-.09-.39-.13-.56.13-.17.25-.65.81-.8 1-.15.15-.3.17-.55.05-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.1-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.11-.23-.17-.48-.3z" />
            </svg>
            <span>WhatsApp</span>
          </button>

          {/* Telegram */}
          <button
            onClick={handleShareTelegram}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-sky-500 hover:bg-sky-600 rounded-md transition-colors cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .34z" />
            </svg>
            <span>Telegram</span>
          </button>

          {/* X / Twitter */}
          <button
            onClick={handleShareTwitter}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-stone-900 hover:bg-black rounded-md transition-colors cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>X (Twitter)</span>
          </button>

          {/* Facebook */}
          <button
            onClick={handleShareFacebook}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Facebook</span>
          </button>

          {/* Copy link */}
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-300 hover:bg-stone-50 rounded-md transition-colors cursor-pointer relative"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>{copied ? 'Tersalin!' : 'Salin Tautan'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
