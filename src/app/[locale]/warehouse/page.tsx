import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import WarehouseComponent from './components/warehouse';

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'warehouse' });
  const tMeta = await getTranslations({ locale, namespace: 'metadata' });
  
  const baseUrl = 'https://unidxswnc.org';
  const path = `/${locale}/warehouse`;
  
  const description = locale === 'es' 
    ? 'Despensa de Alimentos UNIDXS WNC en Sylva, NC. Servicio gratuito de alimentos, cajas de comida y recursos para familias necesitadas en Western North Carolina.'
    : 'UNIDXS WNC Food Pantry in Sylva, NC. Free food pantry services, food boxes, and resources for families in need in Western North Carolina.';
  
  return {
    title: `${t('hero.title')} - UNIDXS WNC`,
    description,
    keywords: tMeta('keywords'),
    alternates: {
      canonical: path,
      languages: {
        'en': '/en/warehouse',
        'es': '/es/warehouse',
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

export default function WarehousePage() {
  return (
    <WarehouseComponent/>
)
}
