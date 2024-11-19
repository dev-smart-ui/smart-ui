import dynamic from 'next/dynamic';

import { Container } from '@components/Container';

import { Advantages } from './homePage/components/Advantages';
import { Clients } from './homePage/components/Clients';
import { Hero } from './homePage/components/Hero';
import { ServicesTabs } from './homePage/components/ServicesTabs';
import styles from './page.module.scss';

const ClientFeedback = dynamic(
  () =>
    import('./homePage/components/ClientFeedback').then(
      (mod) => mod.ClientFeedback,
    ),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Hero />
        <ServicesTabs />
        <Clients />
        <Advantages />
        <ClientFeedback />
      </Container>
    </div>
  );
}
