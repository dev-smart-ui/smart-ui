import { IProjectData } from '@app-types/interfaces';
import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { GradientBorder } from '@components/GradientBorder';

import styles from './project.module.scss';

interface ProjectProps {
  project: IProjectData;
}

export const Project: FC<ProjectProps> = ({ project }) => {
  const {
    main_img: mainImage,
    color,
    project_name: projectName,
    site_url: siteUrl = '#',
  } = project?.attributes || {};

  return (
    <li key={project.id} className={styles.wrapper}>
      <Link className={styles.content} href={siteUrl} target="_blank">
        <GradientBorder color={color}>
          <div className={styles.image}>
            <Image
              src={mainImage?.data?.attributes?.url || ''}
              alt="projectImage"
              layout="responsive"
              width={366}
              height={280}
              objectFit="cover"
            />
          </div>
        </GradientBorder>
        <span className={styles.name} style={{ color }}>
          {projectName}
        </span>
      </Link>
    </li>
  );
};
