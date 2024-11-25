import { FC } from 'react';

import { Form } from './Form';
import styles from './formWrapper.module.scss';

interface FormWrapperProps {
  t: (key: string) => string;
}

export const FormWrapper: FC<FormWrapperProps> = ({ t }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h6 className={styles.title}>{t('contactForm.form.title')}</h6>
        <p className={styles.subTitle}>{t('contactForm.form.subTitle')}</p>
      </div>
      <Form t={t} />
    </div>
  );
};
