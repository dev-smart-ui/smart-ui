import classNames from 'classnames';

import { FC } from 'react';

import { useMount } from '@hooks/useMount';

import styles from './hidedText.module.scss';

interface HidedTextProps {
  id: string;
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
      <p
        className={classNames(styles.hidedText, {
          [styles.isActive]: isActive,
        })}
        dangerouslySetInnerHTML={{ __html: hidedText }}
      />
    </div>
  );
};
