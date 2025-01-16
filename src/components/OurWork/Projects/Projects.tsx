import { PageEnum } from '@app-types/enums';
import { IProjectData } from '@app-types/interfaces';
import { useLanguage } from '@context/LanguageContext';
import { ROUTES } from '@routes/index';
import classNames from 'classnames';
import Link from 'next/link';

import { FC } from 'react';

import { BorderGradientButton } from '@components/Button';
import { Icons } from '@components/CustomIcons';

import { Project } from './Project';
import styles from './projects.module.scss';

interface ProjectsProps {
  data?: IProjectData[];
  page: string;
  id?: string;
}

export const Projects: FC<ProjectsProps> = ({ data, page, id }) => {
  const lng = useLanguage();
  const isOurWorkPage = page === PageEnum.OurWork;
  const isProjectDetail = page === PageEnum.ProjectDetail;

  return (
    <ul
      id={id}
      className={classNames(styles.wrapper, {
        [styles.isOurWorkPage]: isOurWorkPage,
      })}
    >
      {data?.map((project) => (
        <Project
          lng={lng}
          key={project.id}
          project={project}
          isOurWorkPage={isOurWorkPage}
        />
      ))}
      {!isOurWorkPage && !isProjectDetail && (
        <li className={styles.more}>
          <span className={styles.linkDesc}>View All Projects</span>
          <Link className={styles.moreLink} href={`/${lng}${ROUTES.OUR_WORK}`}>
            <BorderGradientButton
              className={styles.link}
              icon={<Icons.ArrowRight width={50} height={50} />}
              aria-label="Show More Works"
              gradientDirection="toTopRight"
              isRounded="large"
            />
          </Link>
        </li>
      )}
    </ul>
  );
};
