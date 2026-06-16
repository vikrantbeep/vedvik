"use client";
import { useState } from "react";
import { publishBlog } from "./actions";

export const metadata = { robots: { index: false } };

const CATEGORIES = ["Buying Guide", "Technology", "Industry Insights", "Case Study", "News"];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function formatDate() {
  return new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function InsiderPage() {
  // Auth
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");

  // Form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Buying Guide");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  // State
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [publishedSlug, setPublishedSlug] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setErrorMsg("Title and content are required.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    const slug = slugify(title);
    const result = await publishBlog({
      password,
      blog: {
        slug,
        title: title.trim(),
        description: description.trim(),
        date: formatDate(),
        category,
        image: imageUrl.trim() || undefined,
        content: content,
      },
    });

    if (result.success) {
      setPublishedSlug(slug);
      setStatus("success");
      setTitle(""); setDescription(""); setImageUrl(""); setContent("");
      setCategory("Buying Guide");
    } else {
      setErrorMsg(result.error || "Something went wrong.");
      setStatus("error");
    }
  }

  // ── Password gate ──────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 w-full max-w-sm p-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-8 rounded-lg bg-[#0C4CA2] flex items-center justify-center">
              <span className="text-white text-sm font-bold">V</span>
            </span>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">Vedvik Machinery</p>
              <p className="text-sm font-semibold text-slate-800">Blog Publisher</p>
            </div>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (!password) { setAuthError("Enter the password."); return; }
            // Actual validation happens server-side on publish.
            // We do a quick local check just to avoid blank submissions.
            setAuthed(true);
            setAuthError("");
          }}>
            <label className="block text-xs font-medium text-slate-600 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0C4CA2]/30 focus:border-[#0C4CA2] mb-4"
              placeholder="Enter insider password"
              autoFocus
            />
            {authError && <p className="text-xs text-red-500 mb-3">{authError}</p>}
            <button
              type="submit"
              className="w-full bg-[#0C4CA2] text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-[#0a3d87] transition-colors"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Success screen ─────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 w-full max-w-sm p-8 text-center">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-slate-800 mb-2">Blog Published</h2>
          <p className="text-sm text-slate-500 mb-6">Your post is live on the website.</p>
          <div className="flex flex-col gap-3">
            <a
              href={`/blog/${publishedSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#0C4CA2] text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-[#0a3d87] transition-colors text-center"
            >
              View Published Post →
            </a>
            <button
              onClick={() => setStatus("idle")}
              className="w-full border border-slate-200 text-slate-600 text-sm font-medium py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Write Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Main form ──────────────────────────────────────────────────
  const slug = slugify(title);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-md bg-[#0C4CA2] flex items-center justify-center">
            <span className="text-white text-xs font-bold">V</span>
          </span>
          <span className="text-sm font-semibold text-slate-800">Vedvik Insider · Blog Publisher</span>
        </div>
        <a href="/blog" target="_blank" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
          View Blog →
        </a>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Cover Image */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            {imageUrl ? (
              <div className="relative">
                <img src={imageUrl} alt="Cover preview" className="w-full h-52 object-cover" />
                <button
                  type="button"
                  onClick={() => setImageUrl("")}
                  className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-md hover:bg-black/70 transition-colors"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="h-40 bg-slate-50 flex flex-col items-center justify-center gap-2 border-b border-slate-200">
                <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-xs text-slate-400">Cover image preview</p>
              </div>
            )}
            <div className="p-4">
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Cover Image URL</label>
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://res.cloudinary.com/..."
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0C4CA2]/30 focus:border-[#0C4CA2]"
              />
            </div>
          </div>

          {/* Title */}
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <label className="block text-xs font-medium text-slate-600 mb-1.5">Title <span className="text-red-400">*</span></label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. How to Choose the Right Filling Machine"
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0C4CA2]/30 focus:border-[#0C4CA2] mb-3"
              required
            />
            {slug && (
              <p className="text-xs text-slate-400">
                Slug: <span className="font-mono text-slate-500">/blog/{slug}</span>
              </p>
            )}
          </div>

          {/* Description + Category row */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Short Description <span className="text-slate-400">(used for SEO & card preview)</span></label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                placeholder="1–2 sentence summary of the article"
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0C4CA2]/30 focus:border-[#0C4CA2] resize-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0C4CA2]/30 focus:border-[#0C4CA2] bg-white"
              >
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* Content body */}
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <label className="block text-xs font-medium text-slate-600 mb-1.5">Content Body <span className="text-red-400">*</span></label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={22}
              placeholder="Write your article here using Markdown-style formatting..."
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 font-mono focus:outline-none focus:ring-2 focus:ring-[#0C4CA2]/30 focus:border-[#0C4CA2] resize-y"
              required
            />

            {/* Formatting cheat sheet */}
            <div className="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Formatting Guide</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-500 font-mono">
                <span>## Section Heading</span>
                <span>- Bullet point</span>
                <span>**bold text**</span>
                <span>| Col 1 | Col 2 | ← table row</span>
                <span>|---|---| ← table separator</span>
                <span className="text-slate-400 font-sans">Blank line = new paragraph</span>
              </div>
            </div>
          </div>

          {/* Error */}
          {status === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-600">
              {errorMsg}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#0C4CA2] text-white text-sm font-semibold py-3 rounded-xl hover:bg-[#0a3d87] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Publishing…" : "Publish Blog Post"}
          </button>

        </form>
      </div>
    </div>
  );
}
