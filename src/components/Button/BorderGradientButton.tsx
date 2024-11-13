import classNames from 'classnames';

import React, { ButtonHTMLAttributes, FC } from 'react';

import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isRounded?: boolean;
  gradientDirection?:
    | 'toTop'
    | 'toBottom'
    | 'toTopRight'
    | 'toLeft'
    | 'toRight'
    | 'toBottomLeft';
}

export const BorderGradientButton: FC<ButtonProps> = ({
  text,
  icon,
  onClick,
  disabled,
  isRounded = false,
  gradientDirection = 'toBottom',
}) => {
  return (
    <button
      className={classNames(
        styles.borderGradientBtn,
        styles[`isGradient${gradientDirection}`],
        {
          [styles.isIcon]: !!icon,
          [styles.isRounded]: isRounded,
        },
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {icon && icon}
    </button>
  );
};
