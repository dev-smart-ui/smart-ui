import { ITabContent } from '@app-types/interfaces';
import { scrollToElement } from '@utils/index';
import Image from 'next/image';

import { FC } from 'react';

import { BorderGradientButton } from '@components/Button';

import { List } from './List';
import styles from './tabContent.module.scss';

interface TabContentProps {
  data?: ITabContent;
}

export const TabContent: FC<TabContentProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h2 className={styles.title}>{data?.title}</h2>
        <List list={data?.list?.list} />
        <BorderGradientButton
          onClick={() => scrollToElement('contactForm')}
          className={styles.serviceButton}
          color={data?.button?.color}
          text={data?.button?.text}
          aria-label={data?.button.ariaLabel}
        />
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
