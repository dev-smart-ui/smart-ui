import classNames from 'classnames';

import { FC } from 'react';

import { HidedText } from '../HidedText';
import styles from './item.module.scss';

interface ItemProps {
  onClickItem: () => void;
  isActive: boolean;
  label: string;
  hidedText: string;
  id: number;
}

export const Item: FC<ItemProps> = ({
  onClickItem,
  isActive,
  label,
  hidedText,
  id,
}) => {
  return (
    <li
      className={classNames(styles.wrapper, {
        [styles.isActive]: isActive,
      })}
    >
      <button
        className={styles.button}
        onClick={onClickItem}
        aria-expanded={isActive}
        aria-controls={`accordion-item-${id}`}
      >
        {label}
        <span className={styles.cross} />
      </button>
      <HidedText isActive={isActive} hidedText={hidedText} id={id} />
    </li>
  );
};
