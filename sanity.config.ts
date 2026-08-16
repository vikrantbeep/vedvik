"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "vedvik",
  title: "Vedvik Machinery",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Site Settings is a singleton — one document, opened directly.
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(
                S.document().schemaType("siteSettings").documentId("siteSettings").title("Site Settings")
              ),
            S.divider(),
            S.documentTypeListItem("blogPost").title("Blog Posts"),
            S.documentTypeListItem("faqItem").title("FAQs (home page)"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
