import React, { useState } from 'react';
import { Comment, UserRoleType } from '../types';

interface CommentSectionProps {
  articleId: string;
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
}

export const CommentSection: React.FC<CommentSectionProps> = ({
  articleId,
  comments,
  onAddComment,
  onAddReply,
  onLikeComment,
  onLikeReply,
}) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState<UserRoleType>('Santri');
  const [content, setContent] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'popular'>('newest');

  // Reply state
  const [replyingToId, setReplyingToId] = useState<string | null>(null);
  const [replyName, setReplyName] = useState('');
  const [replyRole, setReplyRole] = useState<UserRoleType>('Santri');
  const [replyContent, setReplyContent] = useState('');

  const [feedbackMsg, setFeedbackMsg] = useState('');

  const articleComments = comments.filter((c) => c.articleId === articleId);

  const sortedComments = [...articleComments].sort((a, b) => {
    if (sortBy === 'popular') {
      return b.likes - a.likes;
    }
    // newest
    return b.id.localeCompare(a.id);
  });

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    onAddComment({
      articleId,
      authorName: name.trim(),
      authorRole: role,
      content: content.trim(),
    });

    setContent('');
    setFeedbackMsg('Komentar Anda berhasil dipublikasikan!');
    setTimeout(() => setFeedbackMsg(''), 4000);
  };

  const handleSubmitReply = (commentId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!replyName.trim() || !replyContent.trim()) return;

    onAddReply(commentId, {
      authorName: replyName.trim(),
      authorRole: replyRole,
      content: replyContent.trim(),
    });

    setReplyContent('');
    setReplyingToId(null);
  };

  return (
    <section className="mt-8 pt-8 border-t border-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h3 className="text-xl font-serif font-semibold text-stone-900">
            Kolom Komentar & Diskusi Santri
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Sampaikan pendapat dengan adab, hikmah, dan menjaga ukhuwah islamiyyah.
          </p>
        </div>

        {/* Sort segmented filter */}
        <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg text-xs self-start">
          <button
            onClick={() => setSortBy('newest')}
            className={`px-2.5 py-1 font-medium rounded-md transition-colors cursor-pointer ${
              sortBy === 'newest' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Terbaru ({articleComments.length})
          </button>
          <button
            onClick={() => setSortBy('popular')}
            className={`px-2.5 py-1 font-medium rounded-md transition-colors cursor-pointer ${
              sortBy === 'popular' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Terpopuler
          </button>
        </div>
      </div>

      {feedbackMsg && (
        <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-md flex items-center gap-2">
          <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{feedbackMsg}</span>
        </div>
      )}

      {/* Comment submission form */}
      <form onSubmit={handleSubmitComment} className="bg-stone-50 border border-stone-200 rounded-lg p-4 sm:p-5 mb-8">
        <h4 className="text-sm font-semibold text-stone-800 mb-3">Tulis Komentar</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Gus Ilham, Santriwati Aisyah..."
              className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Status / Peran
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as UserRoleType)}
              className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600"
            >
              <option value="Santri">Santri</option>
              <option value="Alumni Pesantren">Alumni Pesantren</option>
              <option value="Ustadz / Ustadzah">Ustadz / Ustadzah</option>
              <option value="Wali Santri">Wali Santri</option>
              <option value="Pembaca Umum">Pembaca Umum</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label className="block text-xs font-medium text-stone-700 mb-1">
            Pesan atau Tanggapan
          </label>
          <textarea
            required
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Tuliskan pandangan, pertanyaan, atau masukan Anda..."
            className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[11px] text-stone-500">
            Komentar akan langsung tayang secara interaktif.
          </span>
          <button
            type="submit"
            className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md transition-colors cursor-pointer shadow-sm"
          >
            Kirim Tanggapan
          </button>
        </div>
      </form>

      {/* List of comments */}
      <div className="space-y-4">
        {sortedComments.length === 0 ? (
          <div className="text-center py-8 bg-stone-50 border border-stone-200 rounded-lg text-stone-500 text-xs">
            Belum ada komentar untuk artikel ini. Jadilah yang pertama memberikan pandangan!
          </div>
        ) : (
          sortedComments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white border border-stone-200 rounded-lg p-4 transition-shadow hover:shadow-xs"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-xs flex items-center justify-center shrink-0">
                    {comment.authorName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-semibold text-stone-900">{comment.authorName}</span>
                      <span aria-hidden="true" className="text-stone-300">·</span>
                      <span className="text-emerald-700 font-medium">{comment.authorRole}</span>
                    </div>
                    <span className="text-[11px] text-stone-400">{comment.createdAt}</span>
                  </div>
                </div>

                {/* Like Button */}
                <button
                  onClick={() => onLikeComment(comment.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                    comment.userLiked
                      ? 'bg-emerald-50 text-emerald-700 font-medium'
                      : 'text-stone-500 hover:bg-stone-50 hover:text-stone-700'
                  }`}
                >
                  <svg
                    className={`w-3.5 h-3.5 ${comment.userLiked ? 'fill-current text-emerald-700' : 'fill-none stroke-current'}`}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <span className="tabular-nums">{comment.likes}</span>
                </button>
              </div>

              {/* Comment Content */}
              <p className="text-xs text-stone-700 leading-relaxed pl-9 mb-3">
                {comment.content}
              </p>

              {/* Action: Reply button */}
              <div className="pl-9 flex items-center gap-4 text-xs text-stone-500">
                <button
                  onClick={() => setReplyingToId(replyingToId === comment.id ? null : comment.id)}
                  className="font-medium hover:text-emerald-700 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                  <span>{replyingToId === comment.id ? 'Tutup Balasan' : 'Balas'}</span>
                </button>
              </div>

              {/* Replying Form */}
              {replyingToId === comment.id && (
                <form
                  onSubmit={(e) => handleSubmitReply(comment.id, e)}
                  className="mt-3 ml-9 p-3 bg-stone-50 border border-stone-200 rounded-md"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda"
                      value={replyName}
                      onChange={(e) => setReplyName(e.target.value)}
                      className="text-xs px-2.5 py-1.5 bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                    <select
                      value={replyRole}
                      onChange={(e) => setReplyRole(e.target.value as UserRoleType)}
                      className="text-xs px-2.5 py-1.5 bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    >
                      <option value="Santri">Santri</option>
                      <option value="Alumni Pesantren">Alumni Pesantren</option>
                      <option value="Ustadz / Ustadzah">Ustadz / Ustadzah</option>
                      <option value="Wali Santri">Wali Santri</option>
                      <option value="Pembaca Umum">Pembaca Umum</option>
                    </select>
                  </div>
                  <textarea
                    required
                    rows={2}
                    placeholder={`Tulis balasan untuk ${comment.authorName}...`}
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    className="w-full text-xs px-2.5 py-1.5 bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-600 mb-2"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setReplyingToId(null)}
                      className="px-2.5 py-1 text-xs text-stone-600 hover:text-stone-800"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-3 py-1 text-xs font-medium text-white bg-emerald-700 hover:bg-emerald-800 rounded transition-colors"
                    >
                      Kirim Balasan
                    </button>
                  </div>
                </form>
              )}

              {/* Nested Replies */}
              {comment.replies && comment.replies.length > 0 && (
                <div className="mt-3 ml-9 pl-3 border-l-2 border-stone-200 space-y-3">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="pt-2">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-semibold text-stone-900">{reply.authorName}</span>
                          <span aria-hidden="true" className="text-stone-300">·</span>
                          <span className="text-emerald-700">{reply.authorRole}</span>
                          <span aria-hidden="true" className="text-stone-300">·</span>
                          <span className="text-[11px] text-stone-400">{reply.createdAt}</span>
                        </div>
                        <button
                          onClick={() => onLikeReply(comment.id, reply.id)}
                          className={`flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded cursor-pointer ${
                            reply.userLiked ? 'text-emerald-700 font-semibold' : 'text-stone-400 hover:text-stone-700'
                          }`}
                        >
                          <svg
                            className={`w-3 h-3 ${reply.userLiked ? 'fill-current' : 'fill-none stroke-current'}`}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                          </svg>
                          <span className="tabular-nums">{reply.likes}</span>
                        </button>
                      </div>
                      <p className="text-xs text-stone-700 leading-relaxed">
                        {reply.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};
