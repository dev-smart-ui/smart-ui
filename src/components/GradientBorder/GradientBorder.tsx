import { hexToRgb } from '@utils/index';
import classNames from 'classnames';

import { CSSProperties, FC, ReactNode } from 'react';

import styles from './gradientBorder.module.scss';

interface GradientBorderProps {
  children?: ReactNode;
  color?: string;
  borderRadius?: 'xs' | 'sm' | 'md' | 'lg';
  direction?: 'top' | 'bottom' | 'both';
  className?: string;
}

export const GradientBorder: FC<GradientBorderProps> = ({
  children,
  color = '#31B76F',
  borderRadius = 'sm',
  direction = 'top',
  className,
}) => {
  const { r, g, b } = hexToRgb(color ?? '');

  return (
    <div
      className={classNames(
        styles.wrapper,
        styles[`${borderRadius}BorderRadius`],
        styles[`${direction}Direction`],
        className ?? '',
      )}
      style={
        {
          '--gradient-color': color,
          '--gradient-color-r': r,
          '--gradient-color-g': g,
          '--gradient-color-b': b,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
};
