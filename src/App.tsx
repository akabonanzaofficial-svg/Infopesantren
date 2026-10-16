import { useState, useEffect } from 'react';
import { Article, Comment, UserRoleType } from './types';
import { INITIAL_ARTICLES, INITIAL_COMMENTS } from './data/newsData';
import { TopBar } from './components/TopBar';
import { PrayerTimesBar } from './components/PrayerTimesBar';
import { BreakingTicker } from './components/BreakingTicker';
import { HeroHeadline } from './components/HeroHeadline';
import { NewsGrid } from './components/NewsGrid';
import { SocialCommunitySection } from './components/SocialCommunitySection';
import { AgendaSection } from './components/AgendaSection';
import { ArticleModal } from './components/ArticleModal';
import { SubmitNewsModal } from './components/SubmitNewsModal';
import { SavedArticlesModal } from './components/SavedArticlesModal';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';

export default function App() {
  // Articles state with localStorage fallback
  const [articles, setArticles] = useState<Article[]>(() => {
    try {
      const saved = localStorage.getItem('infopesantren_articles');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_ARTICLES;
  });

  // Comments state with localStorage fallback
  const [comments, setComments] = useState<Comment[]>(() => {
    try {
      const saved = localStorage.getItem('infopesantren_comments');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_COMMENTS;
  });

  // Saved bookmarks
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('infopesantren_saved_articles');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [];
  });

  // UI state
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync articles to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('infopesantren_articles', JSON.stringify(articles));
    } catch {
      // ignore
    }
  }, [articles]);

  // Sync comments to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('infopesantren_comments', JSON.stringify(comments));
    } catch {
      // ignore
    }
  }, [comments]);

  // Sync saved bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('infopesantren_saved_articles', JSON.stringify(savedIds));
    } catch {
      // ignore
    }
  }, [savedIds]);

  // Check URL hash on load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const matched = articles.find((a) => a.slug === hash);
      if (matched) {
        setSelectedArticle(matched);
      }
    }
  }, [articles]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleToggleSave = (articleId: string) => {
    setSavedIds((prev) => {
      const isAlreadySaved = prev.includes(articleId);
      const updated = isAlreadySaved ? prev.filter((id) => id !== articleId) : [...prev, articleId];
      showToast(isAlreadySaved ? 'Warta dihapus dari daftar simpanan' : 'Warta berhasil disimpan untuk dibaca nanti');
      return updated;
    });
  };

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    // increment views
    setArticles((prev) =>
      prev.map((a) => (a.id === article.id ? { ...a, views: a.views + 1 } : a))
    );
    window.location.hash = article.slug;
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
    if (window.location.hash) {
      history.replaceState(null, '', ' ');
    }
  };

  const handleAddComment = ({
    articleId,
    authorName,
    authorRole,
    content,
  }: {
    articleId: string;
    authorName: string;
    authorRole: UserRoleType;
    content: string;
  }) => {
    const newComment: Comment = {
      id: `comm-${Date.now()}`,
      articleId,
      authorName,
      authorRole,
      content,
      createdAt: 'Baru saja',
      likes: 0,
      replies: [],
    };

    setComments((prev) => [newComment, ...prev]);
    showToast('Komentar Anda berhasil dipublikasikan!');
  };

  const handleAddReply = (
    commentId: string,
    reply: { authorName: string; authorRole: UserRoleType; content: string }
  ) => {
    setComments((prev) =>
      prev.map((comm) => {
        if (comm.id === commentId) {
          const newReply = {
            id: `reply-${Date.now()}`,
            authorName: reply.authorName,
            authorRole: reply.authorRole,
            content: reply.content,
            createdAt: 'Baru saja',
            likes: 0,
          };
          return {
            ...comm,
            replies: [...comm.replies, newReply],
          };
        }
        return comm;
      })
    );
    showToast('Tanggapan balasan Anda berhasil terkirim!');
  };

  const handleLikeComment = (commentId: string) => {
    setComments((prev) =>
      prev.map((comm) => {
        if (comm.id === commentId) {
          const userLiked = !comm.userLiked;
          return {
            ...comm,
            likes: userLiked ? comm.likes + 1 : comm.likes - 1,
            userLiked,
          };
        }
        return comm;
      })
    );
  };

  const handleLikeReply = (commentId: string, replyId: string) => {
    setComments((prev) =>
      prev.map((comm) => {
        if (comm.id === commentId) {
          return {
            ...comm,
            replies: comm.replies.map((rep) => {
              if (rep.id === replyId) {
                const userLiked = !rep.userLiked;
                return {
                  ...rep,
                  likes: userLiked ? rep.likes + 1 : rep.likes - 1,
                  userLiked,
                };
              }
              return rep;
            }),
          };
        }
        return comm;
      })
    );
  };

  const handleAddSubmittedArticle = (newArticle: Article) => {
    setArticles((prev) => [newArticle, ...prev]);
    setIsSubmitModalOpen(false);
    setSelectedArticle(newArticle);
    showToast('Alhamdulillah! Warta Anda berhasil ditayangkan di infopesantren.online');
  };

  // Filtered articles
  const filteredArticles = articles.filter((art) => {
    const matchesCategory = activeCategory === 'Semua' || art.category === activeCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const leadArticle = articles.find((a) => a.isFeatured) || articles[0];
  const secondaryArticles = articles.filter((a) => a.id !== leadArticle?.id);
  const savedArticles = articles.filter((a) => savedIds.includes(a.id));

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-emerald-800 selection:text-white">
      {/* 1. Prayer times & Islamic Date Utility Bar */}
      <PrayerTimesBar />

      {/* 2. Top Bar (Complies with 3-Zone Top Bar Contract) */}
      <TopBar
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          if (cat === 'Agenda Kegiatan') {
            const el = document.getElementById('agenda-pesantren');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          } else {
            setActiveCategory(cat);
            setSearchQuery('');
            const el = document.getElementById('berita-terbaru');
            if (el && cat !== 'Semua') el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        savedArticlesCount={savedIds.length}
        onOpenSaved={() => setIsSavedModalOpen(true)}
      />

      {/* 3. Breaking News Ticker */}
      <BreakingTicker articles={articles} onSelectArticle={handleSelectArticle} />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-stone-900 text-white px-4 py-2.5 rounded-lg shadow-xl text-xs flex items-center gap-2 border border-stone-700 animate-slideUp">
          <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Only show Hero on 'Semua' and when not searching */}
        {activeCategory === 'Semua' && !searchQuery && (
          <HeroHeadline
            leadArticle={leadArticle}
            secondaryArticles={secondaryArticles}
            onSelectArticle={handleSelectArticle}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
          />
        )}

        {/* News Grid with category tabs and search */}
        <NewsGrid
          articles={filteredArticles}
          activeCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            setSearchQuery('');
          }}
          onSelectArticle={handleSelectArticle}
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery('')}
        />

        {/* Agenda & Bahtsul Masail */}
        <AgendaSection />

        {/* Social Media Channels Integration & Community */}
        <SocialCommunitySection />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSearchQuery('');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
      />

      {/* Modals */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={handleCloseArticle}
          comments={comments}
          onAddComment={handleAddComment}
          onAddReply={handleAddReply}
          onLikeComment={handleLikeComment}
          onLikeReply={handleLikeReply}
          isSaved={savedIds.includes(selectedArticle.id)}
          onToggleSave={handleToggleSave}
          onSelectArticle={handleSelectArticle}
          allArticles={articles}
        />
      )}

      {isSubmitModalOpen && (
        <SubmitNewsModal
          onClose={() => setIsSubmitModalOpen(false)}
          onSubmitSuccess={handleAddSubmittedArticle}
        />
      )}

      <SavedArticlesModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedArticles={savedArticles}
        onSelectArticle={handleSelectArticle}
        onRemoveSave={handleToggleSave}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={articles}
        onSelectArticle={handleSelectArticle}
        onSearchSubmit={(q) => {
          setSearchQuery(q);
          setActiveCategory('Semua');
        }}
      />
    </div>
  );
}
