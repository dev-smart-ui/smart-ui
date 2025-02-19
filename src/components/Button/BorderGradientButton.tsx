import { hexToRgb } from '@utils/index';
import classNames from 'classnames';
import Image from 'next/image';

import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from 'react';

import styles from './borderGradientButton.module.scss';

interface ButtonProps<T extends ElementType = 'button'> {
  text?: string;
  icon?: ReactNode;
  imgUrl?: string;
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
  iconAlt?: string;
  isLeftPosition?: boolean;
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
  iconAlt = '',
  imgUrl,
  isLeftPosition = false,
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
          [styles.isOnlyIcon]: (!!icon || !!imgUrl) && !text,
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
        <span
          className={classNames(styles.label, {
            [styles.isLeftPosition]: isLeftPosition,
          })}
        >
          {icon && (
            <span
              className={classNames(styles.icon, {
                [styles.isIconSeparated]: isIconSeparated,
              })}
            >
              {icon}
            </span>
          )}

          {imgUrl && (
            <span
              className={classNames(styles.icon, {
                [styles.isIconSeparated]: isIconSeparated,
              })}
            >
              <Image width={36} height={22} src={imgUrl} alt={iconAlt} />
            </span>
          )}
          {text}
        </span>
      )}
    </Component>
  );
};
