import { ILegalContentItemObject } from '@app-types/interfaces';

import React, { FC } from 'react';

import styles from './contentItem.module.scss';

interface IItemProps {
  data?: ILegalContentItemObject;
}

export const ContentItem: FC<IItemProps> = ({ data }) => {
  return (
    <div id={data?.id} className={styles.wrapper}>
      <h2 className={styles.title}>{data?.title}</h2>
      {data?.subTitleDescription && (
        <p
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: data?.subTitleDescription }}
        />
      )}
      {data?.groups &&
        data?.groups.map((group, index) => (
          <div className={styles.group} key={index}>
            <h3 className={styles.subTitle}>{group?.subTitle}</h3>
            <ul className={styles.groupList}>
              {group?.items?.map((item, itemIndex) => (
                <li key={itemIndex} className={styles.liItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      {data?.items && (
        <ul
          className={styles.list}
          style={{ marginBottom: data?.bottomText ? '20px' : '0' }}
        >
          {data?.items?.map((item, index) => (
            <li
              key={index}
              className={styles.liItem}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ul>
      )}
      {data?.bottomText && (
        <p
          className={styles.bottomText}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: data?.bottomText }}
        />
      )}
    </div>
  );
};
