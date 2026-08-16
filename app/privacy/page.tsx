import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Vedvik Machinery collects, uses and protects personal data submitted through vedvikmachinery.com — including enquiry form data, your rights, and how to contact us about your information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    heading: "Who we are",
    paragraphs: [
      "Vedvik Machinery (\"we\", \"us\", \"our\") is a packaging machinery manufacturer and supplier based at 9, Siddhi Vinayak Industrial Estate, Bakrol, 382210 - Ahmedabad, Gujarat, India. This policy explains what personal data we collect through vedvikmachinery.com, why we collect it, and what rights you have over it.",
      "For any question about this policy or your data, contact us at vikrant@vedvikmachinery.com or +91 81558 92080.",
    ],
  },
  {
    heading: "What information we collect",
    paragraphs: [
      "Information you give us: when you submit an enquiry form, we collect your name, company name, email address, phone number, your stated product or requirement, and any message you choose to add. We collect this only when you choose to submit it.",
      "Information collected automatically: our hosting provider records standard technical data such as IP address, browser type, device type, referring page and pages visited. This is used for security and to understand which pages are useful. We do not use this data to build advertising profiles.",
      "We do not knowingly collect any special category data (such as health, biometric or political data), and we do not collect information from children.",
    ],
  },
  {
    heading: "How we use your information",
    paragraphs: [
      "We use enquiry data solely to respond to your enquiry — to recommend a suitable machine configuration, prepare a quotation, arrange a demonstration, and provide follow-up technical or service support.",
      "We may retain correspondence to maintain a service history for machines we have supplied, which helps us support your line over its working life.",
      "We do not sell, rent or trade your personal data. We do not send marketing emails to people who have not asked for them.",
    ],
  },
  {
    heading: "Legal basis for processing",
    paragraphs: [
      "Where the EU/UK General Data Protection Regulation applies, we process enquiry data on the basis of your consent (you chose to submit the form) and our legitimate interest in responding to a business enquiry and maintaining customer records. Where we process data to fulfil a contract — for example supplying and servicing a machine — the legal basis is performance of that contract.",
    ],
  },
  {
    heading: "Who we share it with",
    paragraphs: [
      "We share your information only where it is necessary to answer your enquiry. This may include a machine manufacturer we represent, where your enquiry concerns their equipment and a technical specification or quotation is required from them. Several of these manufacturers are based in the European Union, so your enquiry details may be transferred there for this purpose.",
      "We also rely on service providers who process data on our behalf: our website host, our email provider, and our form-handling provider. These providers process data under their own security obligations and are not permitted to use it for their own purposes.",
      "We may disclose information where required to do so by law.",
    ],
  },
  {
    heading: "Cookies and analytics",
    paragraphs: [
      "We use Google Analytics and Microsoft Clarity to understand how visitors use this website — which pages are read, how people arrive, and where they encounter difficulty. These services set cookies and record anonymised usage data. We use this only to improve the website; we do not use it to identify individual visitors, and we do not sell or share it for advertising.",
      "You can opt out of Google Analytics across all websites using Google's browser add-on at tools.google.com/dlpage/gaoptout, or by using your browser's Do Not Track and cookie settings.",
      "We do not use advertising cookies or retargeting. Some pages also embed third-party content — a Google Maps location map on our contact page and YouTube product demonstration videos on our solutions pages — and those providers may set their own cookies when that content loads, governed by their respective privacy policies.",
    ],
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "We keep enquiry correspondence for as long as needed to serve the enquiry and any resulting business relationship, and thereafter for as long as required to meet legal, tax and warranty obligations. You may ask us to delete your data at any time.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      "You may ask us to confirm what personal data we hold about you, to correct it if inaccurate, to delete it, to restrict how we use it, or to provide it in a portable format. Where processing is based on consent, you may withdraw that consent at any time.",
      "To exercise any of these rights, email vikrant@vedvikmachinery.com. We will respond within 30 days. If you are in the EU or UK and believe we have not handled your data properly, you also have the right to complain to your local data protection authority.",
    ],
  },
  {
    heading: "Security",
    paragraphs: [
      "This website is served over HTTPS, and enquiry data is transmitted over encrypted connections. We restrict access to enquiry data to the people in our team who need it to respond to you. No method of transmission over the internet is completely secure, but we take reasonable measures appropriate to the sensitivity of the data we hold.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy as our practices or legal obligations change. The current version, with its revision date, is always published on this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How we handle the information you share with Vedvik Machinery — what we collect, why, who sees it, and the rights you have over it."
      updated="15 August 2026"
      sections={sections}
    />
  );
}
