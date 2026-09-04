import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Volvex Designs collects, uses and protects the information you share with us.",
};

/**
 * NOTE FOR THE VOLVEX.AI TEAM: this copy describes what the website actually
 * does today (a contact form and standard analytics). Have it reviewed by a
 * legal advisor and adjusted for your jurisdiction before launch.
 */
const SECTIONS: LegalSection[] = [
  {
    heading: "What we collect",
    body: [
      "When you submit a project brief we collect the details you choose to give us: your name, email address, phone or WhatsApp number, company name, the services you are interested in, your budget and timeline, your description of the project, and any file you attach.",
      "We do not ask for payment details, identity documents or any other sensitive information through this website.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "We use what you send us to reply to your enquiry, scope your project, and prepare a proposal. If we start working together, the same information is used to deliver and support that work.",
      "We do not sell, rent or trade your information, and we do not add you to marketing lists you did not ask to join.",
    ],
  },
  {
    heading: "Who can see it",
    body: [
      "Your details are visible to the Volvex Designs team members involved in your enquiry. We may also use service providers — for example email, cloud hosting and analytics tools — that process data on our behalf under their own security obligations.",
      "We disclose information to anyone else only where the law requires it.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "We keep enquiry details for as long as they are useful for the conversation they relate to, and for as long as we are required to keep business records. You can ask us to delete your details at any time.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "This website may use cookies or similar technology to understand how visitors use the site so we can improve it. These are used for aggregate measurement, not to build a profile of you personally.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      `You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Email ${CONTACT.email} and we will respond.`,
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "If we change how we handle information, we will update this page and the date shown above.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about privacy can be sent to ${CONTACT.email}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="3 September 2026"
      intro="This policy explains what Volvex Designs does with the information you share through this website."
      sections={SECTIONS}
    />
  );
}
