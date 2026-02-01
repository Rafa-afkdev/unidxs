import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import FooterMain from "./FooterMain";
import "./globals.css";
import NavbarMain from "./NavbarMain";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Cambia de export const a export async function
export async function generateMetadata({
  params
}: {
  params: any;
}): Promise<Metadata> {
  const { locale } = await params;
  
  // Obtiene las traducciones para los metadatos
  const t = await getTranslations({ locale, namespace: 'metadata' });
  
  const baseUrl = 'https://unidxswnc.org';
  const currentPath = `/${locale}`;
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'UNIDXS WNC' }],
    creator: 'UNIDXS WNC',
    publisher: 'UNIDXS WNC',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentPath,
      languages: {
        'en': '/en',
        'es': '/es',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_US' : 'en_US',
      url: `${baseUrl}${currentPath}`,
      title: t('title'),
      description: t('description'),
      siteName: 'UNIDXS WNC',
      images: [
        {
          url: '/Logo.png',
          width: 1200,
          height: 630,
          alt: 'UNIDXS WNC Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/Logo.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
}


export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const {locale} = await params;
  
  if(!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages(locale);
  
  // Import structured data utilities
  const { generateOrganizationSchema, generateWebSiteSchema, generateNonProfitSchema } = await import('@/lib/structured-data');
  
  const organizationSchema = generateOrganizationSchema(locale);
  const websiteSchema = generateWebSiteSchema(locale);
  const nonprofitSchema = generateNonProfitSchema(locale);
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* Structured Data - NonProfit */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(nonprofitSchema),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {/* Navbar fijo en todas las páginas con selector de idioma integrado */}
          <NavbarMain />
          
          {/* Contenido principal con padding-top para el navbar */}
          <main className="pt-20">
            {children}
          </main>
          <FooterMain />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}