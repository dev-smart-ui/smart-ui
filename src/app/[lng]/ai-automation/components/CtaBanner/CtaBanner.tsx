import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';

import styles from './ctaBanner.module.scss';

export const CtaBanner: FC = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title}>Ready to Automate?</h2>
          <p className={styles.subtitle}>
            Book a free 30-minute discovery call. We&apos;ll identify your top automation
            opportunity and outline a pilot you can run in 2–4 weeks.
          </p>
          <a href="https://calendly.com/gashkov321/30min" target="_blank" rel="noopener noreferrer" className={styles.btn}>
            Book a Free Call
          </a>
        </div>
      </Container>
    </Section>
  );
};
