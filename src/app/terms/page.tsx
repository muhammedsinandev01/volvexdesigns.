import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply to your use of the Volvex Designs website and enquiries made through it.",
};

/**
 * NOTE FOR THE VOLVEX.AI TEAM: this is a plain-language starting point covering
 * website use only. Have it reviewed by a legal advisor and aligned with your
 * client contracts before launch.
 */
const SECTIONS: LegalSection[] = [
  {
    heading: "About these terms",
    body: [
      "These terms apply to your use of the Volvex Designs website. They do not replace any signed proposal, statement of work or contract — where a project agreement exists, that agreement governs the work.",
    ],
  },
  {
    heading: "Using this website",
    body: [
      "You may browse this site and contact us through it. Please do not attempt to disrupt the site, access it in ways it is not intended to be accessed, or use it to send unlawful or harmful content.",
    ],
  },
  {
    heading: "Enquiries and proposals",
    body: [
      "Submitting a project brief starts a conversation; it does not create a contract. Nothing on this website is a binding offer. Scope, timeline, price and deliverables are agreed in a written proposal before work begins.",
    ],
  },
  {
    heading: "Our content",
    body: [
      "The text, design, code and graphics on this website belong to Volvex Designs unless stated otherwise. Please do not copy or reuse them without permission.",
      "Project names, logos and screenshots shown in our work belong to the respective clients and are displayed to illustrate work we have delivered.",
    ],
  },
  {
    heading: "Project ownership",
    body: [
      "For client projects, ownership of the delivered work — code, accounts, hosting, analytics and design files — transfers to the client as set out in the project agreement.",
    ],
  },
  {
    heading: "External links",
    body: [
      "This site links to websites we have built for clients and to other third-party sites. We do not control those sites and are not responsible for their content or their handling of your data.",
    ],
  },
  {
    heading: "No warranty for site content",
    body: [
      "We keep this website accurate and available as best we can, but it is provided as-is. We are not liable for loss arising from reliance on general information published here, as distinct from obligations under a signed project agreement.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "We may update these terms. The current version is always the one published on this page, with the date shown above.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about these terms can be sent to ${CONTACT.email}.`],
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="3 September 2026"
      intro="These terms cover your use of the Volvex Designs website and any enquiry you send through it."
      sections={SECTIONS}
    />
  );
}
