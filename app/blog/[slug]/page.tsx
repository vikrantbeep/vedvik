import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { blogs } from "../../data/blogs";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} – Vedvik Machinery`,
    description: post.description,
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-['Montserrat'] font-black text-2xl text-zinc-900 mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-bold text-zinc-900 mt-4 mb-1">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        listItems.push(lines[i].trim().replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside text-zinc-600 leading-relaxed space-y-1 my-4 ml-4">
          {listItems.map((item, j) => {
            const parts = item.split(/\*\*(.*?)\*\*/);
            return (
              <li key={j}>
                {parts.map((p, k) => k % 2 === 1 ? <strong key={k}>{p}</strong> : p)}
              </li>
            );
          })}
        </ul>
      );
      continue;
    } else {
      const parts = line.split(/\*\*(.*?)\*\*/);
      elements.push(
        <p key={i} className="text-zinc-600 leading-relaxed text-base my-3">
          {parts.map((p, k) => k % 2 === 1 ? <strong key={k} className="text-zinc-900">{p}</strong> : p)}
        </p>
      );
    }
    i++;
  }
  return elements;
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-6 md:px-12">
          {/* Back */}
          <Link href="/blog" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-[#020062] transition-colors mb-10">
            <span className="material-symbols-outlined text-[14px]">arrow_back</span>
            All Articles
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#020062] bg-blue-50 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-zinc-400">{post.date}</span>
          </div>

          {/* Title */}
          <h1 className="font-['Montserrat'] font-black text-3xl md:text-4xl text-zinc-900 leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed mb-10 border-b border-zinc-100 pb-10">
            {post.description}
          </p>

          {/* Content */}
          <div>{renderContent(post.content)}</div>

          {/* CTA */}
          <div className="mt-16 bg-zinc-50 border border-zinc-200 rounded-2xl p-8 text-center">
            <p className="font-['Montserrat'] font-black text-xl text-zinc-900 mb-3">Have a question about your packaging line?</p>
            <p className="text-zinc-500 text-sm mb-6">Our team in Ahmedabad is happy to help you find the right solution.</p>
            <Link href="/contact" className="btn-machined text-white px-6 py-3 font-['Montserrat'] font-bold text-xs uppercase tracking-widest inline-block hover:scale-95 transition-all">
              Contact Us
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
