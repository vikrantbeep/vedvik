import type { Metadata } from "next";
import Industries from "@/components/Industries";

export const metadata: Metadata = {
  title: "Industries We Serve — Packaging Machines by Sector",
  description:
    "Packaging machines and inspection systems tailored to 15 industries — pharmaceuticals, food & snacks, beverages, dairy, edible oils, agrochemicals, spices, personal care, pet food and more. Sector-matched HFFS, PFS, filling and inspection lines supplied from Ahmedabad, India.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return <Industries />;
}
