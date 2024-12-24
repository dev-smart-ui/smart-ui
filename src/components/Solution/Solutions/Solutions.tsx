import { IAdvantagesForAgency } from '@app-types/interfaces';
import classNames from 'classnames';
import Image from 'next/image';

import { FC } from 'react';

import styles from './solutions.module.scss';

interface SolutionsProps {
  data: IAdvantagesForAgency;
}

export const Solutions: FC<SolutionsProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.solutionList}>
        {data?.solutionList?.map((item) => (
          <li
            key={item.id}
            className={classNames(styles.solutionItems, {
              [styles.isDescription]: item?.description,
            })}
          >
            <span className={styles.solutionItem}>
              <Image
                src={item?.icon?.data?.attributes?.url}
                width={20}
                height={20}
                alt="solutionIcon"
              />
              {item.text}
            </span>
            {item?.description && (
              <p className={styles.description}>{item?.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
