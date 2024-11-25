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

/* eslint-disable no-bitwise */
const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const cleanHex = hex.replace('#', '');
  const bigint = parseInt(cleanHex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
};

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
