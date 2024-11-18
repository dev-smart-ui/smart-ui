'use client';

import { useState } from 'react';

import { useTabsAndServices } from '../../hooks/useTabsAndServices';
import { TabContent } from './TabContent';
import { Tabs } from './Tabs';
import styles from './servicesTabs.module.scss';

export const ServicesTabs = () => {
  const { tabs, servicesTabs } = useTabsAndServices();
  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  return (
    <section className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <TabContent
          data={servicesTabs[currentTab as keyof typeof servicesTabs]}
        />
      </div>
    </section>
  );
};
