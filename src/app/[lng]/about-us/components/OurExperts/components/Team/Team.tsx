import { IExpert } from '@app-types/interfaces';
import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { Icons } from '@components/CustomIcons';

import styles from './team.module.scss';

interface TeamProps {
  data: IExpert[];
}

export const Team: FC<TeamProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {data.map(
        ({
          id,
          attributes: {
            name,
            position,
            preview_photo: previewPhoto,
            linkedin,
            behance,
          },
        }) => (
          <div key={id} className={styles.item}>
            <div className={styles.imageWrapper}>
              {!!previewPhoto && (
                <Image
                  width={300}
                  height={360}
                  src={previewPhoto?.data?.attributes?.url}
                  alt="expertPicture"
                />
              )}
              {(linkedin || behance) && (
                <div className={styles.hiddenInfo}>
                  <div className={styles.socials}>
                    {behance && (
                      <Link
                        href={behance}
                        target="_blank"
                        className={styles.socialBtn}
                      >
                        <Icons.Behance fill="#fff" />
                      </Link>
                    )}
                    {linkedin && (
                      <Link
                        href={linkedin}
                        target="_blank"
                        className={styles.socialBtn}
                      >
                        <Icons.Linkedin fill="#fff" />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className={styles.info}>
              <span className={styles.name}>{name}</span>
              <span className={styles.position}>{position}</span>
            </div>
          </div>
        ),
      )}
    </div>
  );
};
