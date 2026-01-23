import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Donations from './components/donations';

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'donations' });
  const tMeta = await getTranslations({ locale, namespace: 'metadata' });
  
  const baseUrl = 'https://unidxswnc.org';
  const path = `/${locale}/donations`;
  
  const description = locale === 'es' 
    ? 'Apoya a UNIDXS WNC. Donaciones para programas educativos, servicios de salud, despensa de alimentos y desarrollo de liderazgo en Western North Carolina.'
    : 'Support UNIDXS WNC. Donations for educational programs, health services, food pantry, and leadership development in Western North Carolina.';
  
  return {
    title: `${t('hero.title')} - UNIDXS WNC`,
    description,
    keywords: tMeta('keywords'),
    alternates: {
      canonical: path,
      languages: {
        'en': '/en/donations',
        'es': '/es/donations',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_US' : 'en_US',
      url: `${baseUrl}${path}`,
      title: `${t('hero.title')} - UNIDXS WNC`,
      description,
      siteName: 'UNIDXS WNC',
      images: ['/Logo.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('hero.title')} - UNIDXS WNC`,
      description,
      images: ['/Logo.png'],
    },
  };
}

export default function DonatiosnPage() {
  return (
    <Donations />
  )
}
