import { defineField, defineType } from "sanity";

/**
 * Global site details — contact info, address, social links.
 * A singleton: there is only ever one of these documents.
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email address",
      type: "string",
      description: "Shown in the footer and on the contact page.",
      validation: (r) => r.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone number",
      type: "string",
      description: "Include the country code, e.g. +91 81558 92080",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "phoneLink",
      title: "Phone number for tap-to-call",
      type: "string",
      description: "Digits only with country code, no spaces. e.g. +918155892080",
    }),
    defineField({
      name: "addressLine1",
      title: "Address — line 1",
      type: "string",
      initialValue: "9, Siddhi Vinayak Industrial Estate",
    }),
    defineField({
      name: "addressLine2",
      title: "Address — line 2",
      type: "string",
      initialValue: "Bakrol, 382210 - Ahmedabad, Gujarat, India",
    }),
    defineField({
      name: "mapsQuery",
      title: "Google Maps search text",
      type: "string",
      description: "Used for the map and the 'directions' link on the contact page.",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "youtube",
      title: "YouTube URL",
      type: "url",
    }),
    defineField({
      name: "footerBlurb",
      title: "Footer description",
      type: "text",
      rows: 3,
      description: "The short paragraph under the logo in the footer.",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
