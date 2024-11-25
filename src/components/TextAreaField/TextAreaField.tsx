import classNames from 'classnames';

import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './textAreaField.module.scss';

interface TextareaFieldProps {
  label?: string;
  placeholder?: string;
  error?: string;
  register?: UseFormRegisterReturn;
  className?: string;
  id: string;
}

export const TextareaField: FC<TextareaFieldProps> = ({
  label,
  placeholder,
  error,
  register,
  className,
  id,
}) => (
  <div className={classNames(styles.wrapper, className ?? '')}>
    <div className={classNames(styles.textareaWrapper, className ?? '')}>
      <label htmlFor={id}>
        {label && <strong>{label}</strong>}
        <textarea id={id} placeholder={placeholder} {...register} />
      </label>
    </div>
    <p
      className={classNames(styles.error, {
        [styles.active]: !!error,
      })}
    >
      {error}
    </p>
  </div>
);
