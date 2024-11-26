import classNames from 'classnames';

import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './overlay.module.scss';

interface OverlayProps {
  isActive: boolean;
}

export const Overlay: FC<OverlayProps> = ({ isActive }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return createPortal(
    <div
      className={classNames(styles.wrapper, {
        [styles.active]: isActive,
      })}
    />,
    document.body,
  );
};
