import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { Icons } from '@components/CustomIcons';
import { GradientBorder } from '@components/GradientBorder';
import styles from '@components/OurWork/Projects/Project/project.module.scss';

export const ProjectContent: FC<{
  projectName: string;
  color: string | undefined;
  mainImage: string | undefined;
  isOurWorkPage: boolean;
  url?: string;
}> = ({ projectName, color, mainImage, isOurWorkPage, url }) => (
  <>
    <div className={styles.imgWrapper}>
      <GradientBorder color={color}>
        <div className={styles.image}>
          <Image
            src={mainImage || ''}
            alt="projectImage"
            layout="responsive"
            width={366}
            height={280}
            objectFit="cover"
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
          <span className={styles.shortDesc}>
            UI-UX design + Game Cross-Platform + Development
          </span>
          <Link href={url || '#'} className={styles.additionalLink}>
            View Case Study
            <Icons.ArrowRight fill="#31B76F" width={20} />
          </Link>
        </>
      )}
    </div>
  </>
);
