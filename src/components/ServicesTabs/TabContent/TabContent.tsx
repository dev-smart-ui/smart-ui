import { ITabContent } from '@app-types/interfaces';
import { useLanguage } from '@context/LanguageContext';
import { scrollToElement } from '@utils/index';
import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { BorderGradientButton } from '@components/Button';

import { List } from './List';
import styles from './tabContent.module.scss';

const TAB_ROUTES: Record<string, string> = {
  aiAutomation: '/ai-automation',
};

interface TabContentProps {
  data?: ITabContent;
}

export const TabContent: FC<TabContentProps> = ({ data }) => {
  const lng = useLanguage();
  const route = data?.key ? TAB_ROUTES[data.key] : undefined;

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h2 className={styles.title}>{data?.title}</h2>
        <List list={data?.list?.list} />
        {route ? (
          <Link href={`/${lng}${route}`} className={styles.serviceButton}>
            <BorderGradientButton
              className={styles.serviceButton}
              color={data?.button?.color}
              text={data?.button?.text}
              aria-label={data?.button.ariaLabel}
            />
          </Link>
        ) : (
          <BorderGradientButton
            onClick={() => scrollToElement('contactForm')}
            className={styles.serviceButton}
            color={data?.button?.color}
            text={data?.button?.text}
            aria-label={data?.button.ariaLabel}
          />
        )}
      </div>
      <div className={styles.image}>
        <Image
          src={data?.image?.data?.attributes?.url ?? ''}
          width={560}
          height={360}
          alt="serviceImage"
        />
      </div>
    </div>
  );
};
