import { IImage } from '@app-types/interfaces';

import { FC } from 'react';

import { Form } from './Form';
import styles from './formWrapper.module.scss';

interface FormWrapperProps {
  className?: string;
  data?: {
    title: string;
    subTitle: string;
  };
  button: {
    label: string;
    icon: IImage;
  };
}

export const FormWrapper: FC<FormWrapperProps> = ({
  className,
  data,
  button,
}) => {
  return (
    <div className={`${styles.wrapper} ${className ?? ''}`}>
      <div className={styles.header}>
        <span className={styles.title}>{data?.title}</span>
        <p className={styles.subTitle}>{data?.subTitle}</p>
      </div>
      <Form button={button} />
    </div>
  );
};
