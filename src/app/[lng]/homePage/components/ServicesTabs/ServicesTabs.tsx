'use client';

import { useState } from 'react';

import { TabContent } from './TabContent';
import { Tabs } from './Tabs';
import { useTabsAndServices } from './hooks/useTabsAndServices';
import styles from './servicesTabs.module.scss';

export const ServicesTabs = () => {
  const { TABS, SERVICES_TABS } = useTabsAndServices();
  const [currentTab, setCurrentTab] = useState(TABS[0].value);

  return (
    <section className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <Tabs
          tabs={TABS}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <TabContent
          data={SERVICES_TABS[currentTab as keyof typeof SERVICES_TABS]}
        />
      </div>
    </section>
  );
};
