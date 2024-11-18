import { Container } from '@components/Container';

import { Clients } from './homePage/components/Clients';
import { Hero } from './homePage/components/Hero';
import { ServicesTabs } from './homePage/components/ServicesTabs';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Hero />
        <ServicesTabs />
        <Clients />
      </Container>
    </div>
  );
}
