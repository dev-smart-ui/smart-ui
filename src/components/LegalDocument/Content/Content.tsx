import { ILegalContentItem } from '@app-types/interfaces';

import React, { FC } from 'react';

import { ContentItem } from './ContentItem';
import styles from './content.module.scss';

interface ContentProps {
  data: ILegalContentItem[];
}

export const Content: FC<ContentProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {data?.map((item) => <ContentItem key={item?.id} data={item} />)}
    </div>
  );
};
