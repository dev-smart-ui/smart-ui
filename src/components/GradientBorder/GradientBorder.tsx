import classNames from 'classnames';

import { CSSProperties, FC, ReactNode } from 'react';

import styles from './gradientBorder.module.scss';

interface GradientBorderProps {
  children?: ReactNode;
  color?: string;
  borderRadius?: 'xs' | 'sm' | 'ms' | 'lg';
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
  color,
  borderRadius = 'sm',
}) => {
  const { r, g, b } = hexToRgb(color ?? '');

  return (
    <div
      className={classNames(
        styles.wrapper,
        styles[`${borderRadius}BorderRadius`],
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
