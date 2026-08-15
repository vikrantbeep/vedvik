import type { Metadata } from "next";
import Solutions from "@/components/Solutions";

export const metadata: Metadata = {
  title: "Packaging Machines & Inspection Systems",
  description:
    "Full range of packaging machines from Vedvik Machinery, Ahmedabad — HFFS pouch packing up to 320 PPM, pick fill seal (PFS), liquid filling 50 ml–50 L, stick packing, bulk bagging, twist tying and secondary packaging, plus vision inspection, checkweighers, X-ray and coders. Request a technical quote.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return <Solutions />;
}
