import { IAdvantagesForAgency } from '@app-types/interfaces';
import { ANIMATION_TRANSITION_TIME2 } from '@constants/common';
import classNames from 'classnames';
import Image from 'next/image';

import { FC, useState } from 'react';

import styles from './solutions.module.scss';

interface SolutionsProps {
  data: IAdvantagesForAgency;
}

export const Solutions: FC<SolutionsProps> = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(data?.solutionList[0]?.id);

  const onChangeTab = (id: string) => {
    if (id !== currentTab) {
      setCurrentTab('');
      setTimeout(() => setCurrentTab(id), ANIMATION_TRANSITION_TIME2);
    }
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.solutionList}>
        {data?.solutionList?.map((item) => (
          <li
            key={item.id}
            className={classNames(styles.solutionItemWrapper, {
              [styles.isCurrentTab]: currentTab === item?.id,
            })}
          >
            <button
              onClick={() => item?.description && onChangeTab(item?.id)}
              tabIndex={0}
              className={classNames(styles.solutionItem, {
                [styles.isDescription]: !!item?.description,
              })}
            >
              <Image
                src={item?.icon?.data?.attributes?.url}
                width={20}
                height={20}
                alt="solutionIcon"
              />
              {item.text}
            </button>
            {item?.description && (
              <p
                className={classNames(styles.description, {
                  [styles.isCurrentTab]: currentTab === item?.id,
                })}
              >
                {item?.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
