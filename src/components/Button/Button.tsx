import classNames from 'classnames';

import React, { FC, ReactNode } from 'react';

import styles from './button.module.scss';

interface ButtonProps {
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isBig?: boolean;
  isGradient?: boolean;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  text,
  icon,
  onClick,
  disabled,
  isBig = false,
  isGradient = false,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        styles.mainBtn,
        {
          [styles.isBig]: isBig,
          [styles.isGradient]: isGradient,
        },
        className,
      )}
    >
      {text}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};
