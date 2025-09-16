import Image from 'next/image';

import { FC } from 'react';

import { Icons } from '@components/CustomIcons';
import { GradientBorder } from '@components/GradientBorder';
import styles from '@components/OurWork/Projects/Project/project.module.scss';

export const ProjectContent: FC<{
  projectName: string;
  color: string | undefined;
  mainImage: string | undefined;
  isOurWorkPage: boolean;
  description: string | undefined;
}> = ({ projectName, color, mainImage, isOurWorkPage, description }) => (
  <>
    <div
      className={`${styles.imgWrapper} ${isOurWorkPage ? styles.isOurWorkPage : ''}`}
    >
      <GradientBorder color={color}>
        <div className={styles.image}>
          <Image
            src={mainImage || ''}
            alt="projectImage"
            width={530}
            height={448}
          />
        </div>
      </GradientBorder>
    </div>
    <div className={styles.info}>
      <span
        className={styles.name}
        style={{ color: !isOurWorkPage ? color : undefined }}
      >
        {projectName}
      </span>
      {isOurWorkPage && (
        <>
          {description && (
            <span className={styles.shortDesc}>{description}</span>
          )}
          <p className={styles.fakeLink}>
            View Case Study
            <Icons.ArrowRight fill="#31B76F" width={20} />
          </p>
        </>
      )}
    </div>
  </>
);
