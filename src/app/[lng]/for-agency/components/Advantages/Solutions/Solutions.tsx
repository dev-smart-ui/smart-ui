import { FC } from 'react';

import { Icons } from '@components/CustomIcons';

import styles from './solutions.module.scss';

interface SolutionsProps {
  t: (key: string) => string;
}

const solutionsList = [
  { icon: <Icons.StarTransparent />, label: 'advantages.solutions.solution1' },
  { icon: <Icons.Lightning />, label: 'advantages.solutions.solution2' },
  { icon: <Icons.Target />, label: 'advantages.solutions.solution3' },
  { icon: <Icons.Flag />, label: 'advantages.solutions.solution4' },
  { icon: <Icons.Flag />, label: 'advantages.solutions.solution5' },
];

export const Solutions: FC<SolutionsProps> = ({ t }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.solutionInfo}>
        <div className={styles.solutionTitle}>
          <Icons.Pencil />
          {t('advantages.solutions.title')}
        </div>
        <p className={styles.solutionDesc}>
          {t('advantages.solutions.subTitle')}
        </p>
      </div>
      <ul className={styles.solutionList}>
        {solutionsList.map((item) => (
          <li key={item.label} className={styles.solutionItem}>
            {item.icon}
            {t(item.label)}
          </li>
        ))}
      </ul>
    </div>
  );
};
