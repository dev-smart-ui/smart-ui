import { IProjectData } from '@app-types/interfaces';
import { ROUTES } from '@routes/index';
import classNames from 'classnames';
import Link from 'next/link';

import { FC } from 'react';

import { ProjectContent } from './ProjectContent';
import styles from './project.module.scss';

interface ProjectProps {
  project: IProjectData;
  isOurWorkPage: boolean;
  lng: string;
}

export const Project: FC<ProjectProps> = ({ project, isOurWorkPage, lng }) => {
  const {
    main_img: mainImage,
    color,
    project_name: projectName,
    site_url: siteUrl = '#',
    slug,
  } = project?.attributes || {};

  const projectUrl = slug ? `/${lng}${ROUTES.OUR_WORK}/${slug}` : siteUrl;

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
            url={projectUrl}
          />
        </div>
      ) : (
        <Link className={styles.content} href={projectUrl}>
          <ProjectContent
            projectName={projectName}
            color={color}
            mainImage={mainImage?.data?.attributes?.url}
            isOurWorkPage={isOurWorkPage}
          />
        </Link>
      )}
    </li>
  );
};
