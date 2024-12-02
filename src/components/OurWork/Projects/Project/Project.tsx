import { IProjectData } from '@app-types/interfaces';
import classNames from 'classnames';
import Link from 'next/link';

import { FC } from 'react';

import { ProjectContent } from './ProjectContent';
import styles from './project.module.scss';

interface ProjectProps {
  project: IProjectData;
  isOurWorkPage: boolean;
}

export const Project: FC<ProjectProps> = ({ project, isOurWorkPage }) => {
  const {
    main_img: mainImage,
    color,
    project_name: projectName,
    site_url: siteUrl = '#',
  } = project?.attributes || {};

  return (
    <li
      key={project.id}
      className={classNames(styles.wrapper, {
        [styles.isOurWorkPage]: isOurWorkPage,
      })}
    >
      {isOurWorkPage ? (
        <div className={styles.content}>
          <ProjectContent
            projectName={projectName}
            color={color}
            mainImage={mainImage?.data?.attributes?.url}
            isOurWorkPage={isOurWorkPage}
            siteUrl={siteUrl}
          />
        </div>
      ) : (
        <Link className={styles.content} href={siteUrl} target="_blank">
          <ProjectContent
            projectName={projectName}
            color={color}
            mainImage={mainImage?.data?.attributes?.url}
            isOurWorkPage={isOurWorkPage}
            siteUrl={siteUrl}
          />
        </Link>
      )}
    </li>
  );
};
