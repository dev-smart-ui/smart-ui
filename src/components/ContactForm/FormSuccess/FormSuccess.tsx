import { IContactForm } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import { Button } from '@components/Button';
import styles from '@components/ContactForm/contactFrom.module.scss';

interface FormSuccessProps {
  setIsFormSent: (key: boolean) => void;
  data: IContactForm;
}

export const FormSuccess: FC<FormSuccessProps> = ({ data, setIsFormSent }) => {
  return (
    <div className={styles.formSuccess}>
      <div className={styles.image}>
        <Image
          src={data?.formSuccessImage?.data?.attributes?.url}
          width={240}
          height={240}
          alt="checkImg"
        />
      </div>
      <div className={styles.desc}>
        <span className={styles.formSuccessTitle}>
          {data?.formSuccessTitle}
        </span>
        <p className={styles.formSuccessText}>{data?.formSuccessText}</p>
      </div>
      <Button
        className={styles.formSuccessBtn}
        text="Ok"
        onClick={() => setIsFormSent(false)}
      />
    </div>
  );
};
