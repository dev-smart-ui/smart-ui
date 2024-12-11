'use client';

import { IServicesTabs } from '@app-types/interfaces';
import classNames from 'classnames';
import { detect } from 'detect-browser';

import { FC, useEffect, useState } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';

import { TabContent } from './TabContent';
import { Tabs } from './Tabs';
import styles from './servicesTabs.module.scss';

interface ServicesTabsProps {
  data?: IServicesTabs;
}

export const ServicesTabs: FC<ServicesTabsProps> = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(
    data?.tabsContent?.[0].key ?? 'softwareDevelopment',
  );
  const [isSafari, setIsSafari] = useState(false);
  const browser = detect();

  useEffect(() => {
    if (browser?.name === 'safari') setIsSafari(true);
  }, [browser]);

  const currentTabContent = data?.tabsContent.find(
    (tabContent) => tabContent.key === currentTab,
  );

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
            tabs={data?.tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          <TabContent data={currentTabContent} />
        </div>
      </Container>
    </Section>
  );
};
