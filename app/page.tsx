import type { Metadata } from "next";
import VedvikSite from "@/components/VedvikSite";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: {
    absolute: "Packaging Machines in Ahmedabad | HFFS, Pick Fill Seal & Inspection Systems — Vedvik Machinery",
  },
  description:
    "Packaging machines manufacturer and supplier in Ahmedabad, India. HFFS pouch packing up to 320 PPM, pick fill seal (PFS) machines, liquid filling 50 ml–50 L, stick packing, bulk bagging, checkweighers, X-ray and vision inspection — installed and serviced across India. Request a quote.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <VedvikSite />
    </>
  );
}
