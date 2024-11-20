import dynamic from 'next/dynamic';

import { Advantages } from './homePage/components/Advantages';
import { Clients } from './homePage/components/Clients';
import { Hero } from './homePage/components/Hero';
import { OurServices } from './homePage/components/OurServices';
import { ServicesTabs } from './homePage/components/ServicesTabs';
import { WorkTogether } from './homePage/components/WorkTogether';
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
      <Hero />
      <ServicesTabs />
      <Clients />
      <Advantages />
      <ClientFeedback />
      <WorkTogether />
      <OurServices />
    </div>
  );
}
