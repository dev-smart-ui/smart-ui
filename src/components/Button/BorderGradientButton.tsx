import classNames from 'classnames';

import React, { ComponentPropsWithoutRef, ElementType } from 'react';

import styles from './button.module.scss';

interface ButtonProps<T extends ElementType = 'button'> {
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isRounded?: 'small' | 'large';
  gradientDirection?:
    | 'toTop'
    | 'toBottom'
    | 'toTopRight'
    | 'toLeft'
    | 'toRight'
    | 'toBottomLeft';
  isMonotoneBorder?: boolean;
  className?: string;
  fullWidth?: boolean;
  as?: T;
}

export const BorderGradientButton = <T extends ElementType = 'button'>({
  text,
  icon,
  onClick,
  disabled,
  isRounded,
  gradientDirection = 'toBottom',
  isMonotoneBorder = false,
  fullWidth,
  className,
  as,
  ...rest
}: ButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Component = as || 'button';
  return (
    <Component
      className={classNames(
        styles.borderGradientBtn,
        styles[`isGradient${gradientDirection}`],
        styles[`isRounded${isRounded}`],
        className,
        {
          [styles.isMonotoneBorder]: isMonotoneBorder,
          [styles.fullWidth]: fullWidth,
        },
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <span>
        {icon && icon} {text}
      </span>
    </Component>
  );
};
