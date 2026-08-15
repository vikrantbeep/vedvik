import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Us — Packaging Machine Manufacturer in Ahmedabad",
  description:
    "Vedvik Machinery is a packaging machines manufacturer and supplier in Ahmedabad, India, built on two generations and 28+ years of packaging machinery expertise. We manufacture in-house, supply proven European packaging technology across India, and back every installation with prompt local service.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <About />;
}
