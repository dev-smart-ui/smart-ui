import Image from 'next/image';

import { FC } from 'react';

import { BorderGradientButton } from '@components/Button';

import { TServiceTab } from '../data';
import { List } from './List';
import styles from './tabContent.module.scss';

interface TabContentProps {
  data: TServiceTab;
}

export const TabContent: FC<TabContentProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h3>{data.title}</h3>
        <List list={data.list} />
        <BorderGradientButton
          className={styles.serviceButton}
          text="Contact Us"
        />
      </div>
      <div className={styles.image}>
        <Image src={data.image} alt="serviceImage" />
      </div>
    </div>
  );
};
