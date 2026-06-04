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
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 md:pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto w-full">

        <header className="mb-12 md:mb-20">
          <p className="text-secondary font-semibold tracking-widest uppercase text-xs mb-4">Insights</p>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-primary leading-none mb-4 md:mb-6 font-headline">
            PACKAGING<br />KNOWLEDGE HUB
          </h1>
          <p className="text-on-surface-variant max-w-xl text-base md:text-lg leading-relaxed font-light">
            Technical guides, buying advice, and industry insights from the Vedvik Machinery team.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {blogs.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              {/* Card top — colored block acting as image placeholder */}
              <div className="aspect-[4/3] overflow-hidden bg-surface-container relative mb-6 rounded-lg flex items-end p-6">
                <div className="absolute inset-0 bg-primary opacity-90" />
                <div className="relative z-10">
                  <span className="px-4 py-1.5 bg-white/20 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-white rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-on-surface-variant mb-2 uppercase tracking-widest">{post.date}</p>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-primary mb-2 font-headline group-hover:text-secondary transition-colors">
                    {post.name || post.title}
                  </h2>
                  <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3">{post.description}</p>
                </div>
                <div className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 rounded-full group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0 ml-4 mt-1">
                  <span className="material-symbols-outlined text-sm">arrow_outward</span>
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
