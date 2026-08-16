import { defineArrayMember, defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      description: "The web address for this article. Click 'Generate' to create it from the title.",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Buying Guide", "Technology", "Industry Insights", "Case Study", "News"],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "date",
      title: "Published date",
      type: "date",
      options: { dateFormat: "D MMMM YYYY" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "readTime",
      title: "Read time",
      type: "string",
      description: "e.g. '6 min read'",
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      description: "Shown on the blog listing card. Landscape works best.",
      fields: [
        defineField({ name: "alt", title: "Alt text (for accessibility & SEO)", type: "string" }),
      ],
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt / summary",
      type: "text",
      rows: 3,
      description: "Shown on the card and at the top of the article. Also used as the SEO description.",
      validation: (r) => r.required().max(300),
    }),
    defineField({
      name: "body",
      title: "Article body",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "section",
          title: "Section",
          fields: [
            defineField({ name: "heading", title: "Heading (optional)", type: "string" }),
            defineField({
              name: "paragraphs",
              title: "Paragraphs",
              type: "array",
              of: [defineArrayMember({ type: "text", rows: 4 })],
            }),
          ],
          preview: {
            select: { title: "heading", subtitle: "paragraphs.0" },
            prepare: ({ title, subtitle }) => ({ title: title || "(no heading)", subtitle }),
          },
        }),
      ],
    }),
    defineField({
      name: "related",
      title: "Related solutions",
      type: "array",
      description: "Links shown at the bottom of the article.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Link text", type: "string" }),
            defineField({ name: "href", title: "URL path", type: "string", description: "e.g. /solutions/pick-fill-seal" }),
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        }),
      ],
    }),
    defineField({
      name: "faqs",
      title: "Article FAQs",
      type: "array",
      description: "Shown at the bottom and used for Google's FAQ rich results.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "q", title: "Question", type: "string" }),
            defineField({ name: "a", title: "Answer", type: "text", rows: 4 }),
          ],
          preview: { select: { title: "q" } },
        }),
      ],
    }),
  ],
  orderings: [
    { title: "Newest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
});
