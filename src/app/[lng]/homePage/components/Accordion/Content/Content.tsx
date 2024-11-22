'use client';

import { FC, useState } from 'react';

import { Item } from './Item';
import styles from './content.module.scss';

type ContentItem = {
  id: number;
  label: string;
  hidedText: string;
};

interface ContentProps {
  data: ContentItem[];
}

export const Content: FC<ContentProps> = ({ data }) => {
  const [activeItems, setActiveItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setActiveItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  return (
    <ul className={styles.wrapper}>
      {data.map((item) => (
        <Item
          key={item.id}
          {...item}
          isActive={activeItems.includes(item.id)}
          onClickItem={() => toggleItem(item.id)}
        />
      ))}
    </ul>
  );
};
