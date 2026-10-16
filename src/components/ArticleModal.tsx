import React, { useState, useEffect } from 'react';
import { Article, Comment, UserRoleType } from '../types';
import { SocialShareBar } from './SocialShareBar';
import { CommentSection } from './CommentSection';

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
  comments: Comment[];
  onAddComment: (comment: {
    articleId: string;
    authorName: string;
    authorRole: UserRoleType;
    content: string;
  }) => void;
  onAddReply: (commentId: string, reply: {
    authorName: string;
    authorRole: UserRoleType;
    content: string;
  }) => void;
  onLikeComment: (commentId: string) => void;
  onLikeReply: (commentId: string, replyId: string) => void;
  isSaved: boolean;
  onToggleSave: (articleId: string) => void;
  onSelectArticle: (article: Article) => void;
  allArticles: Article[];
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  comments,
  onAddComment,
  onAddReply,
  onLikeComment,
  onLikeReply,
  isSaved,
  onToggleSave,
  onSelectArticle,
  allArticles,
}) => {
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(1);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [onClose]);

  // Handle Text-to-Speech audio reader
  const handleToggleAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert('Fitur pembaca suara tidak didukung pada peramban ini.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      const fullText = `${article.title}. ${article.summary}. ${article.content.join(' ')}`;
      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.lang = 'id-ID';
      utterance.rate = speechRate;

      utterance.onend = () => {
        setIsPlayingAudio(false);
      };
      utterance.onerror = () => {
        setIsPlayingAudio(false);
      };

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const handleChangeSpeechRate = () => {
    const newRate = speechRate === 1 ? 1.25 : speechRate === 1.25 ? 1.5 : 1;
    setSpeechRate(newRate);
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
  };

  const getFontSizeClass = () => {
    if (fontSizeLevel === 'large') return 'text-base sm:text-lg leading-relaxed';
    if (fontSizeLevel === 'xlarge') return 'text-lg sm:text-xl leading-loose';
    return 'text-sm sm:text-base leading-relaxed';
  };

  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-xs flex justify-center p-2 sm:p-4 lg:p-6 animate-fadeIn">
      <div
        className="bg-white w-full max-w-4xl rounded-xl shadow-2xl border border-stone-200 overflow-hidden my-auto flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Controls */}
        <div className="sticky top-0 z-20 bg-stone-900 text-stone-200 px-4 sm:px-6 py-3 border-b border-stone-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-xs">
            <span className="text-emerald-400 font-semibold uppercase tracking-wider shrink-0">
              {article.category}
            </span>
            <span className="text-stone-600">·</span>
            <span className="truncate text-stone-300 hidden sm:inline">{article.title}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Audio Reader Button */}
            <button
              onClick={handleToggleAudio}
              title="Dengarkan Berita (Text to Speech)"
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                isPlayingAudio ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700'
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isPlayingAudio ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                )}
              </svg>
              <span className="hidden sm:inline">{isPlayingAudio ? 'Jeda Audio' : 'Dengarkan'}</span>
            </button>

            {isPlayingAudio && (
              <button
                onClick={handleChangeSpeechRate}
                title="Kecepatan Baca"
                className="px-2 py-1 text-[11px] font-mono bg-stone-800 text-stone-300 rounded hover:bg-stone-700"
              >
                {speechRate}x
              </button>
            )}

            {/* Font Size Selector */}
            <div className="hidden sm:flex items-center gap-1 bg-stone-800 rounded p-0.5 text-xs">
              <button
                onClick={() => setFontSizeLevel('normal')}
                className={`px-1.5 py-0.5 rounded ${fontSizeLevel === 'normal' ? 'bg-stone-700 text-white' : 'text-stone-400'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSizeLevel('large')}
                className={`px-1.5 py-0.5 rounded font-semibold ${fontSizeLevel === 'large' ? 'bg-stone-700 text-white' : 'text-stone-400'}`}
              >
                A+
              </button>
              <button
                onClick={() => setFontSizeLevel('xlarge')}
                className={`px-1.5 py-0.5 rounded font-bold ${fontSizeLevel === 'xlarge' ? 'bg-stone-700 text-white' : 'text-stone-400'}`}
              >
                A++
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleSave(article.id)}
              title={isSaved ? 'Hapus dari Simpanan' : 'Simpan Berita'}
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                isSaved ? 'text-amber-400 bg-stone-800' : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              <svg className={`w-4 h-4 ${isSaved ? 'fill-current' : 'fill-none stroke-current'}`} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Tutup jendela baca"
              className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Reader Body */}
        <div className="overflow-y-auto px-5 sm:px-8 lg:px-12 py-8 bg-stone-50">
          <article className="max-w-2xl mx-auto">
            {/* Category and location unboxed metadata */}
            <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
              <span className="font-semibold text-emerald-800">{article.category}</span>
              {article.location && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{article.location}</span>
                </>
              )}
              <span aria-hidden="true">·</span>
              <span>{article.publishedAt}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{article.readTime}</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 leading-tight mb-4 text-balance">
              {article.title}
            </h1>

            {/* Deck / Summary */}
            <p className="text-stone-600 text-sm sm:text-base font-medium leading-relaxed mb-6 border-b border-stone-200 pb-5">
              {article.summary}
            </p>

            {/* Author Byline Lockup */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-800 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  {article.author.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-semibold text-stone-900">{article.author.name}</div>
                  <div className="text-[11px] text-stone-500">
                    {article.author.role} {article.author.pesantrenOrigin && `· ${article.author.pesantrenOrigin}`}
                  </div>
                </div>
              </div>

              {/* View & Like Counter */}
              <div className="flex items-center gap-3 text-xs text-stone-500 tabular-nums">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {article.views.toLocaleString('id-ID')}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a2 2 0 00-.8 1.4z" />
                  </svg>
                  {article.likes}
                </span>
              </div>
            </div>

            {/* Featured Image with Caption */}
            <div className="mb-8">
              <div className="relative rounded-lg overflow-hidden bg-stone-200 aspect-16/9 sm:aspect-16/10">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              {article.imageCaption && (
                <p className="text-xs text-stone-500 italic mt-2 text-center">
                  Foto: {article.imageCaption}
                </p>
              )}
            </div>

            {/* Main Article Body with Drop Cap on First Paragraph */}
            <div className={`text-stone-800 space-y-5 font-serif ${getFontSizeClass()}`}>
              {article.content.map((paragraph, index) => {
                if (index === 0) {
                  return (
                    <p
                      key={index}
                      className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-emerald-900"
                    >
                      {paragraph}
                    </p>
                  );
                }
                return <p key={index}>{paragraph}</p>;
              })}
            </div>

            {/* Pull Quote Section (Anti-slop compliant: hairline dividers, no thick left border) */}
            {article.quote && (
              <div className="my-8 py-6 border-y border-stone-300 text-center">
                {article.quote.arabicText && (
                  <p className="text-xl sm:text-2xl font-serif text-emerald-950 mb-3 tracking-wide" dir="rtl">
                    {article.quote.arabicText}
                  </p>
                )}
                <blockquote className="text-lg sm:text-xl font-serif italic text-stone-800 mb-2">
                  &ldquo;{article.quote.text}&rdquo;
                </blockquote>
                <cite className="text-xs font-sans uppercase tracking-widest text-stone-500 not-italic">
                  — {article.quote.author}
                </cite>
              </div>
            )}

            {/* Tags (Unboxed inline text) */}
            <div className="mt-8 pt-4 border-t border-stone-200">
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                <span className="font-semibold text-stone-700">Topik Terkait:</span>
                {article.tags.map((tag, i) => (
                  <React.Fragment key={tag}>
                    <span className="text-emerald-800 hover:underline cursor-pointer">#{tag}</span>
                    {i < article.tags.length - 1 && <span aria-hidden="true">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Full Social Share Suite */}
            <SocialShareBar article={article} />

            {/* Related Articles */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-700 mb-4 font-sans">
                Baca Juga
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectArticle(rel)}
                    className="group cursor-pointer bg-white p-3 rounded-lg border border-stone-200 hover:border-emerald-500 transition-colors"
                  >
                    <div className="aspect-16/10 rounded overflow-hidden mb-2 bg-stone-200">
                      <img
                        src={rel.imageUrl}
                        alt={rel.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[11px] font-medium text-emerald-700 block mb-1">
                      {rel.category}
                    </span>
                    <h5 className="text-xs font-semibold text-stone-900 group-hover:text-emerald-800 line-clamp-2 leading-snug">
                      {rel.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Comment Section */}
            <CommentSection
              articleId={article.id}
              comments={comments}
              onAddComment={onAddComment}
              onAddReply={onAddReply}
              onLikeComment={onLikeComment}
              onLikeReply={onLikeReply}
            />
          </article>
        </div>
      </div>
    </div>
  );
};
