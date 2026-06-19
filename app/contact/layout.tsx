import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Vedvik Machinery in Ahmedabad, Gujarat for packaging machinery quotes, technical consultations, and service support across India. Call +91 8155892080.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Vedvik Machinery – Packaging Machinery Supplier in India",
    description:
      "Request quotes and technical consultations for packaging, filling, and inspection machinery. Based in Ahmedabad, serving all of India.",
    url: "https://www.vedvikmachinery.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
