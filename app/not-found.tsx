import type { Metadata } from "next";
import NotFoundView from "@/components/NotFound";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for could not be found. Browse Vedvik Machinery's packaging machines, inspection systems and industries, or get in touch with our Ahmedabad team.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundView />;
}
