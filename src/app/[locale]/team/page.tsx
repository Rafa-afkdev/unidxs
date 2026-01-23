import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Team from './components/team';

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'team' });
  const tMeta = await getTranslations({ locale, namespace: 'metadata' });
  
  const baseUrl = 'https://unidxswnc.org';
  const path = `/${locale}/team`;
  
  const description = locale === 'es' 
    ? 'Conoce al equipo de UNIDXS WNC: Junta Directiva, personal dedicado y voluntarios sirviendo a la comunidad del oeste de Carolina del Norte.'
    : 'Meet the UNIDXS WNC team: Board of Directors, dedicated staff, and volunteers serving Western North Carolina community.';
  
  return {
    title: `${t('title')} - UNIDXS WNC`,
    description,
    keywords: tMeta('keywords'),
    alternates: {
      canonical: path,
      languages: {
        'en': '/en/team',
        'es': '/es/team',
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

export default function TeamPage() {
  return (
    <Team/>
  )
}
