import classNames from 'classnames';

import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './inputField.module.scss';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
  register?: UseFormRegisterReturn;
  className?: string;
  id: string;
}

export const InputField: FC<InputFieldProps> = ({
  label,
  placeholder,
  type = 'text',
  error,
  register,
  className,
  id,
}) => (
  <div className={classNames(styles.wrapper, className ?? '')}>
    <div className={classNames(styles.inputWrapper)}>
      <label htmlFor={id}>
        {label && <span>{label}</span>}
        <input id={id} type={type} placeholder={placeholder} {...register} />
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
