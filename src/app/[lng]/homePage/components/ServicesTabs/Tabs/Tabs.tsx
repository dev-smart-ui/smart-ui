import classNames from 'classnames';

import { FC } from 'react';

import styles from './tabs.module.scss';

type TTab = {
  label: string;
  value: string;
};

interface ServicesTabsProps {
  tabs: TTab[];
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const Tabs: FC<ServicesTabsProps> = ({
  tabs,
  currentTab,
  setCurrentTab,
}) => {
  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <ul className={styles.wrapper}>
      {tabs.map((tab) => {
        return (
          <li className={styles.listItem} key={tab.value}>
            <button
              onClick={() => handleTabChange(tab.value)}
              className={classNames(styles.navButton, {
                [styles.active]: currentTab === tab.value,
              })}
            >
              {tab.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
