import type { Metadata, Viewport } from "next";
import { sanityConfigured } from "@/sanity/env";
import StudioClient from "./StudioClient";

export const dynamic = "force-static";

// The admin area must never be indexed by search engines.
export const metadata: Metadata = {
  title: "Vedvik CMS",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export default function StudioPage() {
  // Until NEXT_PUBLIC_SANITY_PROJECT_ID is set, show setup instructions
  // rather than a blank screen or a crash.
  if (!sanityConfigured) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          fontFamily: "'Inter', system-ui, sans-serif",
          background: "#f5f8ff",
          color: "#0e1750",
        }}
      >
        <div style={{ maxWidth: "34rem" }}>
          <h1 style={{ fontSize: "1.6rem", fontWeight: 600, margin: "0 0 1rem", color: "#020062" }}>
            CMS not connected yet
          </h1>
          <p style={{ lineHeight: 1.7, margin: "0 0 1rem" }}>
            Your website is running normally — it&apos;s currently showing the content
            stored in the code. To start editing content here, the site needs a
            Sanity project ID.
          </p>
          <ol style={{ lineHeight: 1.9, paddingLeft: "1.2rem", margin: "0 0 1.5rem" }}>
            <li>
              Create a free project at{" "}
              <a href="https://sanity.io/manage" style={{ color: "#3969C4", fontWeight: 600 }}>
                sanity.io/manage
              </a>
            </li>
            <li>Copy the Project ID</li>
            <li>
              Add it as <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> in your Vercel
              environment variables, then redeploy
            </li>
          </ol>
          <p style={{ lineHeight: 1.7, margin: 0, fontSize: "0.92rem", color: "rgba(14,23,80,.7)" }}>
            Full instructions are in <strong>SETUP-CMS.md</strong> in your project folder.
          </p>
        </div>
      </main>
    );
  }

  return <StudioClient />;
}
