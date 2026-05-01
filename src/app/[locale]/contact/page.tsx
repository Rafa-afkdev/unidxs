import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Contact from './components/contact';

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  const tMeta = await getTranslations({ locale, namespace: 'metadata' });
  
  const baseUrl = 'https://unidxswnc.org';
  const path = `/${locale}/contact`;
  
  const description = locale === 'es' 
    ? 'Contáctanos en UNIDXS WNC. Estamos aquí para ayudarte. Consultas generales, servicios de salud, programas educativos. Servimos Western North Carolina.'
    : 'Contact UNIDXS WNC. We\'re here to help. General inquiries, health services, educational programs. Serving Western North Carolina.';
  
  return {
    title: `${t('title')} - UNIDXS WNC`,
    description,
    keywords: tMeta('keywords'),
    alternates: {
      canonical: path,
      languages: {
        'en': '/en/contact',
        'es': '/es/contact',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_US' : 'en_US',
      url: `${baseUrl}${path}`,
      title: `${t('title')} - UNIDXS WNC`,
      description,
      siteName: 'UNIDXS WNC',
      images: ['/Logo.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('title')} - UNIDXS WNC`,
      description,
      images: ['/Logo.png'],
    },
  };
}

export default function ContacPage() {
  return (
    <div>
        <Contact/>
    </div>
  )
}
