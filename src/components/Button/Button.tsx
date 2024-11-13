import classNames from 'classnames';

import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import styles from './button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isBig?: boolean;
  isGradient?: boolean;
}

export const Button: FC<IButtonProps> = ({
  text,
  icon,
  onClick,
  disabled,
  isBig = false,
  isGradient = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.mainBtn, {
        [styles.isBig]: isBig,
        [styles.isGradient]: isGradient,
      })}
    >
      {text}
      {icon && icon}
    </button>
  );
};
