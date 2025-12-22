import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getBlogById, getBlogs } from '../../core/services/api';
import Header from '../../components/Header';
import type { Blog } from '../../core/types';

export default function BlogDetail() {
  const { id } = useParams();
  const [item, setItem] = useState<Blog | null>(null);
  const [related, setRelated] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState<{ name: string; text: string; createdAt: string }[]>([]);
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!id) return;
      setLoading(true);
      const r = await getBlogById(id);
      setItem(r);
      setLoading(false);
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      if (!id) return;
      const all = await getBlogs();
      setRelated(all.filter((b) => b.id !== id).slice(0, 3));
    })();
  }, [id]);

  const remove = async () => {
    // delete not supported by backend
    alert('Delete not supported by backend');
    navigate('/blogs');
  };

  const submitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName || !commentText) return;
    const c = { name: commentName, text: commentText, createdAt: new Date().toISOString() };
    setComments((s) => [c, ...s]);
    setCommentName('');
    setCommentText('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main className="mx-auto flex max-w-5xl items-center justify-center px-4 py-12 text-sm text-slate-500">
          Đang tải bài viết...
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-5xl px-4 pb-12 pt-6 sm:px-6">
        {!item ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-10 text-center text-sm text-slate-500">
            Bài viết không tồn tại.
          </div>
        ) : (
          <>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="h-56 w-full overflow-hidden sm:h-64">
                <img
                  src={item.image || `https://picsum.photos/1200/400?random=${item.id}`}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid gap-8 p-5 sm:grid-cols-[minmax(0,2.1fr)_minmax(0,1.2fr)] sm:p-6">
                <main>
                  <header className="border-b border-slate-200 pb-4">
                    <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                      {item.title}
                    </h1>
                    <div className="mt-2 text-xs text-slate-500">
                      By{' '}
                      <span className="font-medium text-slate-700">
                        {item.author || 'Anonymous'}
                      </span>{' '}
                      • {new Date(item.createdAt).toLocaleDateString()}
                    </div>
                    {item.excerpt && (
                      <p className="mt-3 text-sm text-slate-600">{item.excerpt}</p>
                    )}
                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
                      <Link
                        className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                        to={`/blogs/${item.id}/edit`}
                      >
                        Edit
                      </Link>
                      <button
                        className="inline-flex items-center justify-center rounded-md border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 hover:bg-rose-100"
                        onClick={remove}
                      >
                        Delete
                      </button>
                      <button
                        className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500"
                        onClick={() =>
                          window.open(
                            `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                              item.title,
                            )}`,
                            '_blank',
                          )
                        }
                      >
                        Share
                      </button>
                    </div>
                  </header>

                  <article className="prose prose-sm mt-5 max-w-none text-slate-800 prose-p:mb-3 prose-p:leading-relaxed">
                    {item.content.split('\n\n').map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </article>

                  <section className="mt-8 border-t border-slate-200 pt-5">
                    <h3 className="text-sm font-semibold text-slate-900">Comments</h3>
                    <form
                      className="mt-4 space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                      onSubmit={submitComment}
                    >
                      <div className="space-y-1 text-sm">
                        <input
                          placeholder="Your name"
                          value={commentName}
                          onChange={(e) => setCommentName(e.target.value)}
                          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                        />
                      </div>
                      <div className="space-y-1 text-sm">
                        <textarea
                          placeholder="Write a comment"
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          className="min-h-[90px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                        />
                      </div>
                      <div className="text-right">
                        <button
                          className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500"
                          type="submit"
                        >
                          Post comment
                        </button>
                      </div>
                    </form>

                    <div className="mt-4 space-y-3 text-sm">
                      {comments.length === 0 ? (
                        <div className="text-xs text-slate-500">
                          No comments yet. Be the first!
                        </div>
                      ) : (
                        comments.map((c, i) => (
                          <div
                            className="border-t border-slate-200 pt-3 first:border-t-0 first:pt-0"
                            key={i}
                          >
                            <div className="text-xs text-slate-500">
                              <strong className="text-slate-800">{c.name}</strong> •{' '}
                              {new Date(c.createdAt).toLocaleString()}
                            </div>
                            <div className="mt-1 text-sm text-slate-700">{c.text}</div>
                          </div>
                        ))
                      )}
                    </div>
                  </section>
                </main>

                <aside className="space-y-4 text-sm">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      About the author
                    </h4>
                    <p className="mt-2 text-sm text-slate-700">{item.author || 'Anonymous'}</p>
                    <div className="mt-3 text-xs">
                      <Link to="/blogs" className="text-indigo-600 hover:underline">
                        ← Back to all posts
                      </Link>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Related posts
                    </h4>
                    <div className="mt-3 space-y-2">
                      {related.length === 0 ? (
                        <div className="text-xs text-slate-500">No related posts</div>
                      ) : (
                        related.map((r) => (
                          <Link
                            key={r.id}
                            to={`/blogs/${r.id}`}
                            className="flex items-center gap-3 rounded-lg border border-transparent p-2 text-sm text-slate-700 hover:border-slate-200 hover:bg-white"
                          >
                            <img
                              src={r.image || `https://picsum.photos/120/80?random=${r.id}`}
                              alt={r.title}
                              className="h-14 w-20 rounded-md object-cover"
                            />
                            <div className="space-y-1">
                              <div className="line-clamp-2 text-xs font-semibold text-slate-900">
                                {r.title}
                              </div>
                              <div className="line-clamp-2 text-[11px] text-slate-500">
                                {r.excerpt}
                              </div>
                            </div>
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
