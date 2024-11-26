import classNames from 'classnames';

import { FC } from 'react';
import { createPortal } from 'react-dom';

import styles from './overlay.module.scss';

interface OverlayProps {
  isActive: boolean;
}

export const Overlay: FC<OverlayProps> = ({ isActive }) => {
  return createPortal(
    <div
      className={classNames(styles.wrapper, {
        [styles.active]: isActive,
      })}
    />,
    document.body,
  );
};
