import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getAllBlogs } from "../../lib/getAllBlogs";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = (await getAllBlogs()).find((b) => b.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.vedvikmachinery.com/blog/${slug}`,
      type: "article",
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }

    // H2 heading
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl md:text-3xl font-semibold text-slate-800 mt-12 mb-4 border-l-4 border-[#0C4CA2] pl-6">
          {line.replace("## ", "")}
        </h2>
      );
      i++;
      continue;
    }

    // Markdown table — collect all consecutive | lines
    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }

      const parseRow = (row: string) =>
        row.split("|")
          .slice(1, -1)
          .map((cell) => cell.trim());

      const isSeparator = (row: string) => /^\|[-|:\s]+\|$/.test(row);
      const dataRows = tableLines.filter((row) => !isSeparator(row));
      const [headerRow, ...bodyRows] = dataRows;

      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-8 rounded-lg border border-slate-200">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#0C4CA2]">
                {parseRow(headerRow).map((h, j) => (
                  <th key={j} className="px-4 py-3 text-left text-white text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, j) => (
                <tr key={j} className={j % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  {parseRow(row).map((cell, k) => (
                    <td key={k} className={`px-4 py-3 border-b border-slate-100 text-slate-700 ${k === 0 ? "font-medium text-slate-800" : ""}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Unordered list
    if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        listItems.push(lines[i].trim().replace(/^- /, ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-4 ml-2">
          {listItems.map((item, j) => {
            const parts = item.split(/\*\*(.*?)\*\*/);
            return (
              <li key={j} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0C4CA2] mt-2 flex-shrink-0" />
                <span>{parts.map((p, k) => k % 2 === 1 ? <strong key={k} className="text-slate-800">{p}</strong> : p)}</span>
              </li>
            );
          })}
        </ul>
      );
      continue;
    }

    // Entire line bold (e.g. **Common applications:**)
    if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-bold text-slate-800 mt-6 mb-1">
          {line.replace(/\*\*/g, "")}
        </p>
      );
      i++;
      continue;
    }

    // Regular paragraph (supports inline **bold**)
    const parts = line.split(/\*\*(.*?)\*\*/);
    elements.push(
      <p key={i} className="text-slate-600 leading-relaxed text-base my-4">
        {parts.map((p, k) => k % 2 === 1 ? <strong key={k} className="text-slate-800">{p}</strong> : p)}
      </p>
    );
    i++;
  }
  return elements;
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const allBlogs = await getAllBlogs();
  const post = allBlogs.find((b) => b.slug === slug);
  if (!post) notFound();

  const otherPosts = allBlogs.filter((b) => b.slug !== slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    author: { "@id": "https://www.vedvikmachinery.com/#organization" },
    publisher: { "@id": "https://www.vedvikmachinery.com/#organization" },
    mainEntityOfPage: `https://www.vedvikmachinery.com/blog/${slug}`,
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />
      <main className="pt-24 flex-grow">

        {/* Hero banner */}
        <section className="bg-primary py-16 md:py-24">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors mb-10">
              <span className="material-symbols-outlined text-[14px]">arrow_back</span>
              All Articles
            </Link>
            <div className="max-w-3xl">
              <span className="px-4 py-1.5 bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 inline-block">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                {post.title}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-2xl">{post.description}</p>
              <p className="text-white/40 text-xs uppercase tracking-widest mt-6">{post.date}</p>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="py-16 md:py-24 max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Main content */}
            <article className="lg:col-span-8">
              {renderContent(post.content)}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">

              {/* CTA */}
              <div className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-8">
                <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">support_agent</span>
                <h3 className="font-extrabold text-primary text-lg font-headline mb-2">Have a question?</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Our team in Ahmedabad is ready to help you find the right packaging solution for your line.
                </p>
                <Link href="/contact" className="bg-primary-container text-on-primary px-6 py-3 rounded-md font-bold tracking-tight text-sm block text-center">
                  Contact Us
                </Link>
              </div>

              {/* More articles */}
              {otherPosts.length > 0 && (
                <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-8">
                  <h3 className="font-extrabold text-primary text-sm uppercase tracking-widest mb-6 font-headline">More Articles</h3>
                  <div className="space-y-6">
                    {otherPosts.map((other) => (
                      <Link key={other.slug} href={`/blog/${other.slug}`} className="group block">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">{other.category}</span>
                        <p className="text-sm font-bold text-primary mt-1 group-hover:text-secondary transition-colors leading-snug">{other.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Solutions CTA */}
              <div className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-8">
                <h3 className="font-extrabold text-primary text-sm uppercase tracking-widest mb-3 font-headline">Explore Solutions</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">Browse our full range of packaging and inspection systems.</p>
                <Link href="/solutions" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                  View All Products
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </Link>
              </div>

            </aside>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
