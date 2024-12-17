import { IAdvantagesForAgency } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import styles from './solutions.module.scss';

interface SolutionsProps {
  data: IAdvantagesForAgency;
}

export const Solutions: FC<SolutionsProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.solutionInfo}>
        <div className={styles.solutionTitle}>
          <Image
            src={data?.solutionIcon?.data?.attributes?.url}
            width={20}
            height={20}
            alt="pencilIcon"
          />
          {data?.solutionTitle}
        </div>
        <p className={styles.solutionDesc}>{data?.solutionDescription}</p>
      </div>
      <ul className={styles.solutionList}>
        {data?.solutionsList.map((item) => (
          <li key={item.id} className={styles.solutionItem}>
            <Image
              src={item?.icon?.data?.attributes?.url}
              width={20}
              height={20}
              alt="solutionIcon"
            />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
