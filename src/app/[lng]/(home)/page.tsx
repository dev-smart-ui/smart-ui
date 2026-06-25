import { HOME_PAGE_QUERY } from '@graphqlQueries/homePage';
import { fetchGraphQL } from '@lib/fetchGraphQL';
import dynamic from 'next/dynamic';

import { Accordion } from '@components/Accordion';
import { Hero } from '@components/Hero';
import Layout from '@components/Layout';
import { OurWork } from '@components/OurWork';
import { ServicesTabs } from '@components/ServicesTabs';

import { Advantages } from './components/Advantages';
import { OurServices } from './components/OurServices';
import { WorkTogether } from './components/WorkTogether';

const ClientFeedback = dynamic(
  () => import('./components/ClientFeedback').then((mod) => mod.ClientFeedback),
  {
    ssr: false,
  },
);

const ContactForm = dynamic(
  () => import('@components/ContactForm').then((mod) => mod.ContactForm),
  {
    ssr: false,
  },
);

const Clients = dynamic(
  () => import('@components/Clients').then((mod) => mod.Clients),
  {
    ssr: false,
  },
);

export const metadata = {
  title: 'AI Automation & Software Development Company | Smart-UI',
  description:
    'Smart-UI builds web applications, custom AI agents, and business workflow automation for companies in the EU, UK, US, and Australia. 315+ projects since 2018.',
  alternates: {
    canonical: 'https://www.smart-ui.pro/en',
    languages: {
      en: 'https://www.smart-ui.pro/en',
      uk: 'https://www.smart-ui.pro/uk-UA',
    },
  },
  openGraph: {
    title: 'AI Automation & Software Development Company | Smart-UI',
    description:
      'Smart-UI builds web applications, custom AI agents, and business workflow automation for companies in the EU, UK, US, and Australia. 315+ projects since 2018.',
    url: 'https://www.smart-ui.pro/en',
    type: 'website' as const,
  },
  twitter: {
    title: 'AI Automation & Software Development Company | Smart-UI',
    description:
      'Smart-UI builds web applications, custom AI agents, and business workflow automation for companies in the EU, UK, US, and Australia. 315+ projects since 2018.',
  },
};

interface HomePageProps {
  params: {
    lng: string;
  };
}

export default async function Home({ params: { lng } }: HomePageProps) {
  const {
    homePage,
    singleProjects,
    clientsLogo,
    accordion,
    contactForm,
    header,
    footer,
  } = await fetchGraphQL(HOME_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: 5 },
  });

  const heroData = homePage?.data?.attributes?.Hero || {};
  const servicesTabsData = homePage?.data?.attributes?.ServicesTabs || {};
  const advantagesCards = homePage?.data?.attributes?.AdvantagesSection || {};
  const feedbacksData = homePage?.data?.attributes?.ClientFeedback || {};
  const worTogetherData = homePage?.data?.attributes?.WorkTogetherSection || {};
  const ourServiceData = homePage?.data?.attributes?.OurServiceSection || {};
  const ourWorkData = homePage?.data?.attributes?.OurWorkSection || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];
  const contactFormData = contactForm?.data?.attributes || [];
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  const clientData = {
    sectionName: homePage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <Hero data={heroData} />
      <ServicesTabs data={servicesTabsData} />
      <Clients data={clientData} />
      <Advantages data={advantagesCards} />
      <ClientFeedback data={feedbacksData} />
      <WorkTogether data={worTogetherData} />
      <OurServices data={ourServiceData} />
      <OurWork data={singleProjectsData} headerInfo={ourWorkData} />
      <Accordion data={accordionData} />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
