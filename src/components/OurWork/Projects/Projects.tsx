import { IProjectData } from '@app-types/interfaces';
import Link from 'next/link';

import { FC } from 'react';

import { BorderGradientButton } from '@components/Button';
import { Icons } from '@components/CustomIcons';

import { Project } from './Project';
import styles from './projects.module.scss';

interface ProjectsProps {
  data?: IProjectData[];
}

export const Projects: FC<ProjectsProps> = ({ data }) => {
  return (
    <ul className={styles.wrapper}>
      {data?.map((project) => <Project key={project.id} project={project} />)}
      <Link href="/" className={styles.more}>
        <BorderGradientButton
          className={styles.link}
          icon={<Icons.ArrowRight width={50} height={50} />}
          gradientDirection="toTopRight"
          isRounded="large"
        />
        <span className={styles.linkDesc}>View All Projects</span>
      </Link>
    </ul>
  );
};
