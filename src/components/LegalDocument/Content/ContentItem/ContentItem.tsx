import { IImage, ILegalContentItemObject } from '@app-types/interfaces';
import Image from 'next/image';

import React, { FC } from 'react';

import styles from './contentItem.module.scss';

interface IItemProps {
  data?: {
    iconEmail: IImage;
    iconPhone: IImage;
    object: ILegalContentItemObject;
  };
}

export const ContentItem: FC<IItemProps> = ({ data }) => {
  return (
    <div id={data?.object?.id} className={styles.wrapper}>
      <h2 className={styles.title}>{data?.object?.title}</h2>
      {data?.object?.subTitleDescription && (
        <p
          dangerouslySetInnerHTML={{
            __html: data?.object?.subTitleDescription,
          }}
        />
      )}
      {data?.object?.groups &&
        data?.object?.groups.map((group, index) => (
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
      {data?.object?.items && (
        <ul
          className={styles.list}
          style={{ marginBottom: data?.object?.bottomText ? '20px' : '0' }}
        >
          {data?.object?.items?.map((item, index) => (
            <li
              key={index}
              className={styles.liItem}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ul>
      )}
      {data?.object?.bottomText && (
        <p
          className={styles.bottomText}
          dangerouslySetInnerHTML={{ __html: data?.object?.bottomText }}
        />
      )}
      {data?.object?.info && (
        <div className={styles.contacts}>
          <span className={styles.contactRow}>
            <Image
              className={styles.icon}
              src={data?.iconEmail?.data?.attributes?.url}
              width={20}
              height={20}
              alt="icon"
            />
            <span
              dangerouslySetInnerHTML={{ __html: data?.object?.info?.email }}
            />
          </span>
          <span className={styles.contactRow}>
            <Image
              className={styles.icon}
              src={data?.iconPhone?.data?.attributes?.url}
              width={20}
              height={20}
              alt="icon"
            />
            <span
              dangerouslySetInnerHTML={{ __html: data?.object?.info?.phone }}
            />
          </span>
        </div>
      )}
    </div>
  );
};
