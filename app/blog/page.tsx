import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogs } from "../data/blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Vedvik Machinery",
  description: "Insights on packaging machinery, technology, and industry trends from the Vedvik Machinery team.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen bg-white">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#020062] mb-3">Insights</p>
          <h1 className="font-['Montserrat'] font-black text-4xl md:text-5xl text-zinc-900 leading-tight mb-4">
            Packaging Knowledge Hub
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl">
            Technical guides, buying advice, and industry insights from the Vedvik Machinery team.
          </p>
        </div>

        {/* Posts */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col gap-8">
          {blogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border border-zinc-200 rounded-2xl p-8 hover:border-[#020062] hover:shadow-lg transition-all duration-200 bg-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#020062] bg-blue-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-zinc-400">{post.date}</span>
              </div>
              <h2 className="font-['Montserrat'] font-black text-xl md:text-2xl text-zinc-900 mb-3 group-hover:text-[#020062] transition-colors">
                {post.title}
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-5">{post.description}</p>
              <span className="text-xs font-bold uppercase tracking-widest text-[#020062] flex items-center gap-1">
                Read Article
                <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
