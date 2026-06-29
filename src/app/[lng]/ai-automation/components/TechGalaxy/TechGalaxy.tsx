import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';

import styles from './techGalaxy.module.scss';

// Positions as [top%, left%] on a 660px square canvas
const innerBadges = [
  { name: 'Python', color: '#3572A5', top: '10%', left: '50%' },
  { name: 'FastAPI', color: '#009688', top: '50%', left: '88%' },
  { name: 'Node.js', color: '#339933', top: '90%', left: '50%' },
  { name: 'n8n', color: '#EA4B71', top: '50%', left: '12%' },
];

const outerBadges = [
  { name: 'Hugging Face', color: '#FFD21E', top: '5%', left: '50%' },
  { name: 'Anthropic', color: '#C75B39', top: '20%', left: '85%' },
  { name: 'Next.js', color: '#F8F8F8', top: '63%', left: '95%' },
  { name: 'PostgreSQL', color: '#336791', top: '95%', left: '65%' },
  { name: 'Docker', color: '#2496ED', top: '95%', left: '35%' },
  { name: 'Redis', color: '#DC382D', top: '20%', left: '15%' },
];

interface BadgeProps {
  name: string;
  color: string;
  top: string;
  left: string;
}

const Badge: FC<BadgeProps> = ({ name, color, top, left }) => (
  <div
    className={styles.badge}
    style={{ top, left, transform: 'translate(-50%, -50%)' }}
  >
    <span className={styles.badgeDot} style={{ background: color }} />
    {name}
  </div>
);

export const TechGalaxy: FC = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.sectionName}>Tech Stack</span>
          <h2 className={styles.title}>Powered by the Best AI Tools</h2>
          <p className={styles.subtitle}>
            We pick the right tools for each automation — from open-source models
            to cloud APIs and workflow engines.
          </p>
        </div>
        <div className={styles.galaxy}>
          <div className={styles.core}>
            <span className={styles.coreLabel}>AI</span>
            <span className={styles.coreSub}>CORE</span>
          </div>
          <div className={styles.innerRing} />
          <div className={styles.outerRing} />
          {innerBadges.map((b) => (
            <Badge key={b.name} {...b} />
          ))}
          {outerBadges.map((b) => (
            <Badge key={b.name} {...b} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
