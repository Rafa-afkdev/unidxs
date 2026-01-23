import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import EducationComponent from './components/education';

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'education' });
  const tMeta = await getTranslations({ locale, namespace: 'metadata' });
  
  const baseUrl = 'https://unidxswnc.org';
  const path = `/${locale}/education`;
  
  const description = locale === 'es'
    ? 'Programas educativos de UNIDXS WNC: enriquecimiento académico, celebración cultural, preparación universitaria y desarrollo profesional para estudiantes K-12 en Western North Carolina.'
    : 'UNIDXS WNC Educational Programs: academic enrichment, cultural celebration, college readiness, and career development for K-12 students in Western North Carolina.';
  
  return {
    title: `${t('hero.title')} - UNIDXS WNC`,
    description,
    keywords: tMeta('keywords'),
    alternates: {
      canonical: path,
      languages: {
        'en': '/en/education',
        'es': '/es/education',
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

export default function EducationPage() {
  return <EducationComponent />;
}
