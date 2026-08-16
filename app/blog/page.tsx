import type { Metadata } from "next";
import Blog from "@/components/Blog";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Packaging Machinery Guides & Insights",
  description:
    "Packaging machine buying guides from Vedvik Machinery, Ahmedabad — how to choose a packaging machine, HFFS vs VFFS, pick fill seal explained, checkweigher accuracy standards and practical advice for production managers across India.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();
  return <Blog posts={posts} />;
}
