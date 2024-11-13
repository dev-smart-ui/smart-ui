import classNames from 'classnames';

import React, { ButtonHTMLAttributes, FC } from 'react';

import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isRounded?: 'small' | 'medium';
  gradientDirection?:
    | 'toTop'
    | 'toBottom'
    | 'toTopRight'
    | 'toLeft'
    | 'toRight'
    | 'toBottomLeft';
  isMonotoneBorder?: boolean;
}

export const BorderGradientButton: FC<ButtonProps> = ({
  text,
  icon,
  onClick,
  disabled,
  isRounded,
  gradientDirection = 'toBottom',
  isMonotoneBorder = false,
}) => {
  return (
    <button
      className={classNames(
        styles.borderGradientBtn,
        styles[`isGradient${gradientDirection}`],
        styles[`isRounded${isRounded}`],
        {
          [styles.isMonotoneBorder]: isMonotoneBorder,
        },
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span>
        {text} {icon && icon}
      </span>
    </button>
  );
};
