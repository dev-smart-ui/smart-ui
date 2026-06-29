import Link from 'next/link';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';

import styles from './aiHero.module.scss';

interface AiHeroProps {
  lng: string;
}

export const AiHero: FC<AiHeroProps> = ({ lng }) => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div className={styles.left}>
            <span className={styles.pill}>Powered by LLMs</span>
            <h1 className={styles.title}>
              Build AI Agents That Work
              <br />
              <span className={styles.accent}>While You Sleep</span>
            </h1>
            <p className={styles.subtitle}>
              We design and deploy custom AI automations, agents, and workflows
              that reduce manual work by 60–80% — without replacing your team.
            </p>
            <div className={styles.actions}>
              <a href="#contactForm" className={styles.btnPrimary}>
                Start Automating
              </a>
              <Link href={`/${lng}/our-work`} className={styles.btnSecondary}>
                Explore Case Studies
              </Link>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.terminal}>
              <div className={styles.terminalHeader}>
                <span className={styles.dot} style={{ background: '#ff5f57' }} />
                <span className={styles.dot} style={{ background: '#febc2e' }} />
                <span className={styles.dot} style={{ background: '#28c840' }} />
                <span className={styles.terminalTitle}>ai-agent.log</span>
              </div>
              <div className={styles.terminalBody}>
                <p>
                  <span className={styles.green}>✓</span> New lead detected: john@acme.com
                </p>
                <p>
                  <span className={styles.green}>→</span> Scoring intent... <span className={styles.dim}>high</span>
                </p>
                <p>
                  <span className={styles.green}>✓</span> Drafting personalised email...
                </p>
                <p>
                  <span className={styles.green}>✓</span> Email sent · 09:14:32
                </p>
                <p>
                  <span className={styles.green}>→</span> Updating CRM record...
                </p>
                <p>
                  <span className={styles.green}>✓</span> CRM updated · next task queued
                </p>
                <p className={styles.cursor}>▋</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
