import { hexToRgb } from '@utils/index';
import classNames from 'classnames';

import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from 'react';

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
  isMonotoneBorder?: boolean;
  className?: string;
  fullWidth?: boolean;
  as?: T;
  isIconSeparated?: boolean;
  children?: ReactNode;
  color?: string;
}

export const BorderGradientButton = <T extends ElementType = 'button'>({
  children,
  text,
  icon,
  onClick,
  disabled,
  isRounded,
  gradientDirection = 'toBottom',
  isMonotoneBorder = false,
  isIconSeparated = false,
  fullWidth,
  className,
  color = '#31B76F',
  as,
  ...rest
}: ButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Component = as || 'button';

  const rgbColors = hexToRgb(color);

  return (
    <Component
      className={classNames(
        styles.borderGradientBtn,
        styles[`isGradient${gradientDirection}`],
        styles[`isRounded${isRounded}`],
        {
          [styles.isMonotoneBorder]: isMonotoneBorder,
          [styles.isOnlyIcon]: !!icon && !text,
          [styles.fullWidth]: fullWidth,
        },
        className,
      )}
      style={
        {
          '--gradient-color': color,
          '--gradient-color-r': rgbColors.r,
          '--gradient-color-g': rgbColors.g,
          '--gradient-color-b': rgbColors.b,
        } as CSSProperties
      }
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
