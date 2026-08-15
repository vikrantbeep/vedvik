import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using vedvikmachinery.com — website use, accuracy of machine specifications, quotations, intellectual property and governing law.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "About these terms",
    paragraphs: [
      "These terms govern your use of vedvikmachinery.com, operated by Vedvik Machinery, 9, Siddhi Vinayak Industrial Estate, Bakrol, 382210 - Ahmedabad, Gujarat, India. By using this website you accept these terms. If you do not accept them, please do not use the site.",
    ],
  },
  {
    heading: "Machine specifications and information",
    paragraphs: [
      "The specifications, speeds, capacities and capabilities published on this website are indicative and provided for general guidance. Actual performance depends on your product characteristics, packaging material, pack format, ambient conditions and line configuration.",
      "Published figures do not form part of any contract or constitute a warranty of performance. Machine specifications may be changed by their manufacturers without notice. Binding specifications are those set out in a written quotation or purchase contract issued by us.",
      "Where a machine is described as suitable for a given application, that is a general indication. We will confirm suitability for your specific product following a technical discussion or trial.",
    ],
  },
  {
    heading: "Quotations and orders",
    paragraphs: [
      "Nothing on this website constitutes an offer to sell. Prices are not published on this site; all pricing is provided by written quotation, which is valid for the period stated in that quotation.",
      "Orders are accepted subject to our written terms of sale, which cover delivery, payment, installation, commissioning, warranty and after-sales service, and which will be provided with the quotation.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "The content of this website — including text, layout, graphics, photographs and the Vedvik Machinery name and logo — is owned by or licensed to Vedvik Machinery and protected by applicable intellectual property law.",
      "You may view, download and print pages for your own internal business evaluation. You may not reproduce, republish or redistribute our content commercially without written permission.",
      "Third-party manufacturer names, brand names and logos referenced on this site remain the property of their respective owners and are used to identify the equipment we supply and support.",
    ],
  },
  {
    heading: "Third-party links and embedded content",
    paragraphs: [
      "This website links to external sites, including those of the manufacturers whose equipment we supply, and embeds third-party content such as maps and product demonstration videos. We do not control these sites or services and are not responsible for their content, availability or privacy practices. A link does not imply endorsement of everything on the linked site.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "This website is provided on an \"as is\" basis. While we take care to keep it accurate and available, we do not warrant that it will be uninterrupted, error-free or free of harmful components.",
      "To the extent permitted by law, we are not liable for any indirect or consequential loss arising from use of this website or reliance on information published on it. Nothing in these terms limits liability that cannot lawfully be limited, including liability for death or personal injury caused by negligence, or for fraud.",
    ],
  },
  {
    heading: "Privacy",
    paragraphs: [
      "Our handling of personal data submitted through this website is described in our Privacy Policy, which forms part of these terms.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of India. The courts of Ahmedabad, Gujarat have exclusive jurisdiction over any dispute arising from use of this website.",
    ],
  },
  {
    heading: "Changes",
    paragraphs: [
      "We may update these terms from time to time. The version published on this page, with its revision date, is the version in force.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="The terms that apply when you use the Vedvik Machinery website, including how to treat published machine specifications and quotations."
      updated="15 August 2026"
      sections={sections}
    />
  );
}
