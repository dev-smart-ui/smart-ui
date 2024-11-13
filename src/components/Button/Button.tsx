import classNames from 'classnames';

import React, { ButtonHTMLAttributes } from 'react';

import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
  gradientClass?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  gradientClass,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={classNames(styles.wrapper, styles[gradientClass ?? ''], {
        [styles.isIcon]: !!icon,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </button>
  );
};
