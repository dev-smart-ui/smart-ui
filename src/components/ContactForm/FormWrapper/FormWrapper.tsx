import { FC } from 'react';

import { Form } from './Form';
import styles from './formWrapper.module.scss';

interface FormWrapperProps {
  t: (key: string) => string;
  className?: string;
}

export const FormWrapper: FC<FormWrapperProps> = ({ t, className }) => {
  return (
    <div className={`${styles.wrapper} ${className ?? ''}`}>
      <div className={styles.header}>
        <span className={styles.title}>{t('contactForm.form.title')}</span>
        <p className={styles.subTitle}>{t('contactForm.form.subTitle')}</p>
      </div>
      <Form t={t} />
    </div>
  );
};
