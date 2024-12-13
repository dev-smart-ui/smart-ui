import classNames from 'classnames';
import Image from 'next/image';

import React, { FC } from 'react';

import styles from './button.module.scss';

interface ButtonProps {
  text?: string;
  icon?: string;
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
      {icon && (
        <span className={styles.icon}>
          <Image width={32} height={32} src={icon} alt="icon" />
        </span>
      )}
    </button>
  );
};
