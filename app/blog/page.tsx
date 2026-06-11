import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogs } from "../data/blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Packaging Machinery Guides & Insights",
  description: "Buying guides and technical explainers on packaging machinery, checkweighing, filling, and inspection from the Vedvik Machinery team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 md:pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto w-full">

        <header className="mb-12 md:mb-20">
          <p className="text-xs font-medium uppercase tracking-wider text-[#0C4CA2] mb-4">Insights</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 md:mb-6">
            Packaging Knowledge Hub
          </h1>
          <p className="text-base text-slate-600 max-w-xl leading-relaxed">
            Technical guides, buying advice, and industry insights from the Vedvik Machinery team.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="v-card group block overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-slate-50 relative">
                {post.image ? (
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="absolute inset-0 bg-[#0C4CA2] opacity-90" />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#0C4CA2]">{post.category}</span>
                  <span className="text-xs text-slate-400">{post.date}</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{post.description}</p>
                <div className="mt-4 flex items-center gap-1.5 text-[#0C4CA2] text-sm font-medium">
                  Read Article <span className="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}
