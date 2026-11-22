import type { Metadata } from "next";
import { headers } from "next/headers";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500"],
  display: "swap",
  preload: true,
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600"],
  display: "swap",
  preload: false,
});

const title = "Nexus Coupé — Renascença, São Luís | Marcelo Alvares Imóveis";
const description =
  "Nexus Coupé, da Ergus Engenharia, no Renascença. Residências Open Design e On Residence, escritórios Lead Office e o Nexus Mall. Atendimento Marcelo Alvares Imóveis.";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "localhost";
  const proto = headerList.get("x-forwarded-proto") ?? "https";
  return {
  metadataBase: new URL(`${proto}://${host}`),
  title,
  description,
  keywords: [
    "Nexus Coupé",
    "Ergus Engenharia",
    "Renascença",
    "São Luís",
    "Open Design",
    "On Residence",
    "Lead Office",
    "Nexus Mall",
    "Marcelo Alvares Imóveis",
  ],
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/media/hero.webp", width: 1800, height: 1229, alt: "Perspectiva do Nexus Coupé" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/media/hero.webp"],
  },
  robots: { index: true, follow: true },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",
  name: "Nexus Coupé",
  description,
  url: "/",
  image: "/media/hero.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Coronel Colares Moreira",
    addressLocality: "São Luís",
    addressRegion: "MA",
    addressCountry: "BR",
  },
  brand: {
    "@type": "Organization",
    name: "Ergus Engenharia",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${syne.variable} h-full`}>
      <body className="min-h-full bg-[#090909] text-[#f4f1ea] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
