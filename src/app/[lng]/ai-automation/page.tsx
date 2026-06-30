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
      'x-default': 'https://www.smart-ui.pro/en/ai-automation',
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

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does AI automation cost in the UK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our AI Process Audit starts from £2,500 and is delivered in one week. Full automation pilots typically range from £5,000–£15,000 depending on complexity. We provide fixed-price scoping before any development begins.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you integrate AI into our existing software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We specialise in integrating AI capabilities into existing products via APIs, webhooks, and custom middleware — without rebuilding your stack. Common integrations include CRMs, helpdesks, ERPs, and SaaS platforms.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build a custom AI agent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A focused pilot for one use case is typically delivered in 2–4 weeks. More complex multi-agent systems or full rollouts take 4–8 weeks. We always start with a scoped pilot so you see results before committing to a larger project.',
        },
      },
      {
        '@type': 'Question',
        name: 'What AI technologies do you use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We work with Anthropic Claude, OpenAI GPT, Hugging Face models, LangChain, and open-source LLMs. For orchestration we use n8n, FastAPI, and custom Python pipelines. We choose the stack based on your requirements, budget, and data privacy needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with UK companies remotely?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We have been serving UK clients since 2018. Our team communicates in English, our working hours overlap with GMT, and we are experienced with UK business culture and compliance requirements.',
        },
      },
    ],
  };

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
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
