import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Packaging Machines in Ahmedabad",
  description:
    "Contact Vedvik Machinery for packaging machines in Ahmedabad, India. Call +91 81558 92080 or email vikrant@vedvikmachinery.com. Tell us your product, output speed and pack format — we recommend the right HFFS, PFS, filling or inspection system and arrange a demonstration.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact />;
}
