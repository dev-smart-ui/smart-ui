import Image, { StaticImageData } from 'next/image';

import { FC } from 'react';

import { BorderGradientButton } from '@components/Button';

import { useTranslation } from '@hooks/useTranslation';

import { List } from './List';
import styles from './tabContent.module.scss';

type TServiceTab = {
  title: string;
  list: string[] | readonly string[];
  image: StaticImageData;
};

interface TabContentProps {
  data: TServiceTab;
}

export const TabContent: FC<TabContentProps> = ({ data }) => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h3>{data.title}</h3>
        <List list={data.list} />
        <BorderGradientButton
          className={styles.serviceButton}
          text={t('buttons.contact')}
        />
      </div>
      <div className={styles.image}>
        <Image src={data.image} alt="serviceImage" />
      </div>
    </div>
  );
};
