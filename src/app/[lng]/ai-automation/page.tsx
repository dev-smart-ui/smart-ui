import { AI_AUTOMATION_PAGE_QUERY } from '@graphqlQueries/aiAutomationPage';
import { fetchGraphQL } from '@lib/fetchGraphQL';
import dynamic from 'next/dynamic';

import { Accordion } from '@components/Accordion';
import { JsonLd } from '@components/JsonLd';
import Layout from '@components/Layout';

import { AiHero } from './components/AiHero';
import { AiServices } from './components/AiServices';
import { CtaBanner } from './components/CtaBanner';
import { HowWeWork } from './components/HowWeWork';
import { MetricsBand } from './components/MetricsBand';
import { TechGalaxy } from './components/TechGalaxy';

const SupportPilot = dynamic(
  () => import('./components/SupportPilot').then((mod) => mod.SupportPilot),
  { ssr: false },
);

const ContactForm = dynamic(
  () => import('@components/ContactForm').then((mod) => mod.ContactForm),
  { ssr: false },
);

export const metadata = {
  title: 'AI Automation Services — Custom Agents & Workflows | Smart-UI',
  description:
    'Smart-UI builds custom AI agents, workflow automations, and RAG systems that cut manual work by 60–80%. Pilots delivered in 2–4 weeks.',
  alternates: {
    canonical: 'https://www.smart-ui.pro/en/ai-automation',
    languages: {
      en: 'https://www.smart-ui.pro/en/ai-automation',
      uk: 'https://www.smart-ui.pro/uk-UA/ai-automation',
    },
  },
  openGraph: {
    title: 'AI Automation Services — Custom Agents & Workflows | Smart-UI',
    description:
      'Smart-UI builds custom AI agents, workflow automations, and RAG systems that cut manual work by 60–80%. Pilots delivered in 2–4 weeks.',
    url: 'https://www.smart-ui.pro/en/ai-automation',
    type: 'website' as const,
  },
  twitter: {
    title: 'AI Automation Services — Custom Agents & Workflows | Smart-UI',
    description:
      'Smart-UI builds custom AI agents, workflow automations, and RAG systems that cut manual work by 60–80%. Pilots delivered in 2–4 weeks.',
  },
};

interface AiAutomationPageProps {
  params: {
    lng: string;
  };
}

export default async function AiAutomationPage({
  params: { lng },
}: AiAutomationPageProps) {
  const { accordion, contactForm, header, footer } = await fetchGraphQL(
    AI_AUTOMATION_PAGE_QUERY,
    { locale: lng },
  );

  const accordionData = accordion?.data?.attributes || [];
  const contactFormData = contactForm?.data?.attributes || [];
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://smart-ui.pro' },
      { '@type': 'ListItem', position: 2, name: 'AI Automation', item: 'https://smart-ui.pro/ai-automation' },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Automation & Custom AI Agents',
    provider: { '@type': 'Organization', name: 'Smart-UI', url: 'https://smart-ui.pro' },
    areaServed: ['EU', 'GB', 'US', 'AU'],
    description:
      'Custom AI agents, workflow automations, RAG systems, and AI copilots that reduce manual work by 60–80%.',
  };

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <AiHero lng={lng} />
      <MetricsBand />
      <TechGalaxy />
      <AiServices />
      <SupportPilot />
      <HowWeWork />
      <CtaBanner />
      <Accordion data={accordionData} />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
