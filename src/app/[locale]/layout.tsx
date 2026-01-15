import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarMain from "./NavbarMain";
import FooterMain from "./FooterMain";

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
  
  return {
    title: t('title'),
    description: t('description'),
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
  
  return (
    <html lang={locale} suppressHydrationWarning>
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