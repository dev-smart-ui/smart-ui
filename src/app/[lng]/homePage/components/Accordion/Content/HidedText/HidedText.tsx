import { FC } from 'react';

import { useMount } from '@hooks/useMount';

import styles from './hidedText.module.scss';

interface HidedTextProps {
  id: number;
  hidedText: string;
  isActive: boolean;
}

export const HidedText: FC<HidedTextProps> = ({ id, hidedText, isActive }) => {
  const { mounted } = useMount(isActive);

  if (!mounted && !isActive) return null;

  return (
    <div
      id={`accordion-item-${id}`}
      className={styles.hidedTextWrapper}
      role="region"
      hidden={!mounted && !isActive}
    >
      <p className={styles.hidedText}>{hidedText}</p>
    </div>
  );
};
