import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import {
  CONTACT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIALS,
} from "@/data/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const TITLE = "Volvex Designs | Web, Mobile, ERP & Digital Marketing Solutions";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Volvex Designs",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "digital product studio",
    "web development",
    "mobile app development",
    "UI/UX design",
    "ERP solutions",
    "CRM systems",
    "HRMS",
    "digital marketing",
    "Volvex Designs",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Volvex Designs — we build the software your business runs on.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/volvexdesigns-logo.png`,
  description: SITE_DESCRIPTION,
  slogan: "Digital products, business systems & growth.",
  email: CONTACT.email,
  telephone: CONTACT.phones,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kannur",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  // Only real profile URLs — placeholders are filtered out.
  sameAs: SOCIALS.map((social) => social.href).filter((href) =>
    href.startsWith("http"),
  ),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white">
        <script
          type="application/ld+json"
          // Static, first-party structured data — no user input is interpolated.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
