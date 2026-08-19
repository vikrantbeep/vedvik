import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import SolutionDetail from "@/components/SolutionDetail";
import { getSolution, findSolutionLoose, solutionSlugs } from "@/lib/solutions";

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolution(slug) ?? findSolutionLoose(slug);
  if (!s) return { title: "Solution not found" };
  return {
    title: `${s.name} Machine in Ahmedabad, India`,
    description: `${s.desc} Supplied, installed and serviced by Vedvik Machinery, Ahmedabad — request a technical quote.`,
    keywords: [
      s.name,
      `${s.name} machine`,
      `${s.name} machine India`,
      `${s.name} machine Ahmedabad`,
      "packaging machines",
      "packaging machines in Ahmedabad",
    ],
    alternates: { canonical: `/solutions/${s.slug}` },
    openGraph: {
      title: `${s.name} Machine — Vedvik Machinery, Ahmedabad`,
      description: s.desc,
      images: [s.heroImage],
      type: "website",
    },
  };
}

export default async function SolutionSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let solution = getSolution(slug);
  if (!solution) {
    // Wrong casing (e.g. /solutions/liquid-filling) → 301 to the canonical URL.
    const loose = findSolutionLoose(slug);
    if (loose) permanentRedirect(`/solutions/${loose.slug}`);
    notFound();
  }
  solution = solution!;

  /**
   * NOT Product schema.
   *
   * Google requires Product markup to carry `offers`, `review` or
   * `aggregateRating`, because it's meant for pages where someone can buy.
   * These are enquiry pages for capital equipment — no published price, no
   * reviews — so Product markup was being reported as invalid in Search
   * Console (181 items) and could never produce a rich result anyway.
   *
   * WebPage + `about` describes the page accurately, stays valid, and still
   * tells search engines and AI crawlers what the page covers.
   */
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${solution.name} — Vedvik Machinery`,
    description: solution.desc,
    url: `https://www.vedvikmachinery.com/solutions/${solution.slug}`,
    primaryImageOfPage: { "@type": "ImageObject", url: solution.heroImage },
    about: {
      "@type": "Thing",
      name: solution.name,
      description: solution.tagline,
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Vedvik Machinery",
      url: "https://www.vedvikmachinery.com",
    },
    publisher: { "@type": "Organization", name: "Vedvik Machinery" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vedvikmachinery.com" },
      { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.vedvikmachinery.com/solutions" },
      { "@type": "ListItem", position: 3, name: solution.name, item: `https://www.vedvikmachinery.com/solutions/${solution.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SolutionDetail solution={solution} />
    </>
  );
}
