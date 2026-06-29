import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';

import styles from './howWeWork.module.scss';

const steps = [
  {
    number: '01',
    title: 'Audit',
    description:
      'We map your current workflows, identify repetitive tasks, and pinpoint the highest-ROI automation opportunities.',
  },
  {
    number: '02',
    title: 'Pilot',
    description:
      'We build a focused proof-of-concept for one core use case and deliver it in 2–4 weeks so you can see real results fast.',
  },
  {
    number: '03',
    title: 'Rollout',
    description:
      'Once the pilot is validated, we expand the automation across your team, adding integrations and fine-tuning performance.',
  },
  {
    number: '04',
    title: 'Scale',
    description:
      'We monitor, retrain, and extend your AI systems as your business grows — ongoing support included.',
  },
];

export const HowWeWork: FC = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.sectionName}>Process</span>
          <h2 className={styles.title}>How We Work</h2>
          <p className={styles.subtitle}>
            A proven 4-step delivery process — from discovery to production in weeks.
          </p>
        </div>
        <ol className={styles.steps}>
          {steps.map(({ number, title, description }) => (
            <li key={number} className={styles.step}>
              <span className={styles.number}>{number}</span>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDesc}>{description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
};
