import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import About from './components/about';

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  const tMeta = await getTranslations({ locale, namespace: 'metadata' });
  
  const baseUrl = 'https://unidxswnc.org';
  const path = `/${locale}/about`;
  
  const description = locale === 'es' 
    ? 'Conoce a UNIDXS WNC, organización comunitaria intercultural sirviendo los 7 condados rurales del oeste de Carolina del Norte. Misión de inclusión social, igualdad y solidaridad.'
    : 'Learn about UNIDXS WNC, an intercultural community organization serving 7 rural counties in Western North Carolina. Mission of social inclusion, equality, and solidarity.';
  
  return {
    title: `${t('hero.title')} - UNIDXS WNC`,
    description,
    keywords: tMeta('keywords'),
    alternates: {
      canonical: path,
      languages: {
        'en': '/en/about',
        'es': '/es/about',
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

export default function AboutPage() {
  return (
    <div>
        <About  />
    </div>
  )
}
