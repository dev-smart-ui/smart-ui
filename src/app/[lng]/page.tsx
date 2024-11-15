import { Container } from '@components/Container';

import { Hero } from './homePage/components/Hero';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Hero />
      </Container>
    </div>
  );
}
