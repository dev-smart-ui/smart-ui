'use client';

import { useState } from 'react';

import { TabContent } from './TabContent';
import { Tabs } from './Tabs';
import { SERVICES_TABS, TABS } from './data';
import styles from './servicesTabs.module.scss';

export const ServicesTabs = () => {
  const [currentTab, setCurrentTab] = useState(TABS[0].value);

  return (
    <section className={styles.wrapper}>
      <div className={styles.body}>
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
