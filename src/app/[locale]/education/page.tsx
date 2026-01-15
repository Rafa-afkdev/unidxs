import React from 'react';
import EducationComponent from './components/education';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'education' });
  
  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
  };
}

export default function EducationPage() {
  return <EducationComponent />;
}
