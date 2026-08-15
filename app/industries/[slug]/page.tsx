import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetail from "@/components/IndustryDetail";
import { getIndustry, industrySlugs } from "@/lib/industries";

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return { title: "Industry not found" };
  return {
    title: `${ind.name} Packaging Machines`,
    description: `${ind.desc} Packaging machines and inspection systems for ${ind.name.toLowerCase()} manufacturers — supplied, installed and serviced by Vedvik Machinery, Ahmedabad.`,
    keywords: [
      `${ind.name} packaging machines`,
      `packaging machine for ${ind.name.toLowerCase()}`,
      "packaging machines",
      "packaging machines in Ahmedabad",
    ],
    alternates: { canonical: `/industries/${ind.slug}` },
  };
}

export default async function IndustrySlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  return <IndustryDetail industry={industry} />;
}
