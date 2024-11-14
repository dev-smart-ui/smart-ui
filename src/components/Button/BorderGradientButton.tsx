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
  borderColorType?: 'green' | 'blue' | 'lightBlue' | 'darkGreen';
  isMonotoneBorder?: boolean;
  className?: string;
  fullWidth?: boolean;
  as?: T;
  isIconSeparated?: boolean;
}

export const BorderGradientButton = <T extends ElementType = 'button'>({
  text,
  icon,
  onClick,
  disabled,
  isRounded,
  gradientDirection = 'toBottom',
  borderColorType = 'green',
  isMonotoneBorder = false,
  isIconSeparated = false,
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
        styles[`${borderColorType}BorderColor`],
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
      <span className={styles.label}>
        {icon && (
          <span
            className={classNames(styles.icon, {
              [styles.isIconSeparated]: isIconSeparated,
            })}
          >
            {icon}
          </span>
        )}
        {text}
      </span>
    </Component>
  );
};
