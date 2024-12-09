import { scrollToElement } from '@utils/index';
import Image, { StaticImageData } from 'next/image';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { BorderGradientButton } from '@components/Button';

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
        <h2 className={styles.title}>{data.title}</h2>
        <List list={data.list} />
        <BorderGradientButton
          onClick={() => scrollToElement('contactForm')}
          className={styles.serviceButton}
          text={t('buttons.contact')}
        />
      </div>
      <div className={styles.image}>
        <Image src={data.image} width={560} height={360} alt="serviceImage" />
      </div>
    </div>
  );
};
