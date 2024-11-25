'use client';

import classNames from 'classnames';
import { detect } from 'detect-browser';

import { useEffect, useState } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';

import { useTabsAndServices } from '../../hooks/useTabsAndServices';
import { TabContent } from './TabContent';
import { Tabs } from './Tabs';
import styles from './servicesTabs.module.scss';

export const ServicesTabs = () => {
  const { tabs, servicesTabs } = useTabsAndServices();
  const [currentTab, setCurrentTab] = useState(tabs[0].value);
  const [isSafari, setIsSafari] = useState(false);
  const browser = detect();

  useEffect(() => {
    if (browser?.name === 'safari') setIsSafari(true);
  }, [browser]);

  return (
    <Section>
      <Container>
        <div
          className={classNames(
            styles.contentWrapper,
            isSafari ? styles.isEllipseSafari : styles.isEllipseAllBrowsers,
          )}
        >
          <Tabs
            tabs={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          <TabContent
            data={servicesTabs[currentTab as keyof typeof servicesTabs]}
          />
        </div>
      </Container>
    </Section>
  );
};
