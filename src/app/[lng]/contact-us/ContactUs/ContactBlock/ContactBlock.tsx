import { IContactForm, IContactUsPage } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import { ConnectWith } from '@components/ConnectWith';
import { FormWrapper } from '@components/ContactForm/FormWrapper';

import styles from './contactBlock.module.scss';

interface ContactBlockProps {
  data: {
    mainData: IContactUsPage;
    contactFormData: IContactForm;
  };
}

export const ContactBlock: FC<ContactBlockProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <ul className={styles.itemsList}>
          {data?.mainData?.contactInfo?.map((item) => (
            <li key={item.label} className={styles.item}>
              <span className={styles.icon}>
                <Image
                  src={item?.icon?.data?.attributes?.url}
                  width={48}
                  height={48}
                  alt="icon"
                />
              </span>
              <div className={styles.textWrapper}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.text}>{item.text}</span>
              </div>
            </li>
          ))}
        </ul>
        <ConnectWith
          className={styles.socialButtonsWrapper}
          data={data?.contactFormData?.socials}
          socialsLabel={data?.contactFormData?.socialsLabel}
        />
      </div>
      <FormWrapper
        className={styles.formWrapper}
        data={data?.contactFormData}
        button={data?.contactFormData?.button}
      />
    </div>
  );
};
