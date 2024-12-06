import classNames from 'classnames';

import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import styles from './button.module.scss';

interface ButtonProps<T extends ElementType = 'button'> {
  text?: string;
  icon?: ReactNode;
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
  children?: ReactNode;
}

export const BorderGradientButton = <T extends ElementType = 'button'>({
  children,
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
        {
          [styles.isMonotoneBorder]: isMonotoneBorder,
          [styles.isOnlyIcon]: !!icon && !text,
          [styles.fullWidth]: fullWidth,
        },
        className,
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children || (
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
      )}
    </Component>
  );
};
