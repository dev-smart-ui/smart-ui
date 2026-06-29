import { FC } from 'react';

import { Container } from '@components/Container';

import styles from './metricsBand.module.scss';

const metrics = [
  { value: '315+', label: 'Projects delivered' },
  { value: '2018', label: 'In business since' },
  { value: '4', label: 'Regions served' },
  { value: '2–4 wks', label: 'Pilot delivery' },
];

export const MetricsBand: FC = () => {
  return (
    <div className={styles.band}>
      <Container>
        <ul className={styles.list}>
          {metrics.map(({ value, label }) => (
            <li key={label} className={styles.item}>
              <span className={styles.value}>{value}</span>
              <span className={styles.label}>{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};
